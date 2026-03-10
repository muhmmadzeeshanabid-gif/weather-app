import { FORECAST_BASE_URL, GEO_BASE_URL } from "./constants";
import { buildAirConditions, buildBarometer, buildHourlyForecast, mapThemeByWeatherCode } from "./mappers";
import { getQueryString, round } from "./utils";

async function fetchJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`API request failed (${response.status})`);
  }
  return response.json();
}

function getLocalHour(timezone) {
  try {
    const formatted = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      hour12: false,
      timeZone: timezone,
    }).format(new Date());
    return Number(formatted);
  } catch {
    return new Date().getHours();
  }
}

export async function fetchLocationSuggestions(query, limit = 6, signal) {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const qs = getQueryString({
    name: trimmed,
    count: String(limit),
    language: "en",
    format: "json",
  });
  const payload = await fetchJson(`${GEO_BASE_URL}?${qs}`, signal);
  const list = payload?.results || [];

  return list.map((item) => ({
    id: `${item.id || `${item.latitude}-${item.longitude}`}`,
    name: item.name,
    region: item.admin1 || "",
    country: item.country || "",
    latitude: item.latitude,
    longitude: item.longitude,
    timezone: item.timezone || "auto",
  }));
}

export async function fetchWeatherByCoordinates(location, signal) {
  const qs = getQueryString({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,surface_pressure,wind_speed_10m,precipitation_probability",
    hourly:
      "temperature_2m,wind_speed_10m,weather_code,surface_pressure,precipitation_probability",
    daily:
      "weather_code,uv_index_max,apparent_temperature_max,wind_speed_10m_max,precipitation_probability_max",
    timezone: location.timezone || "auto",
    forecast_days: "7",
  });

  const payload = await fetchJson(`${FORECAST_BASE_URL}?${qs}`, signal);
  const current = payload.current || {};
  const hourly = payload.hourly || {};
  const daily = payload.daily || {};
  const timezone = payload.timezone || location.timezone || "UTC";

  if (current.temperature_2m == null || !hourly.time?.length) {
    throw new Error("Incomplete weather data from API.");
  }

  const theme = mapThemeByWeatherCode(
    current.weather_code,
    Boolean(current.is_day),
    current.temperature_2m,
    current.wind_speed_10m,
    getLocalHour(timezone)
  );
  const forecast = buildHourlyForecast(hourly, timezone);
  const air = buildAirConditions(daily, timezone, current);

  return {
    id: location.id,
    name: location.name,
    region: location.region || "",
    country: location.country || "",
    latitude: location.latitude,
    longitude: location.longitude,
    timezone,
    weather: {
      label: theme.label,
      temperature: round(current.temperature_2m),
      background: theme.background,
      icon: theme.headerIcon,
    },
    cards: {
      indoor: {
        temp: round(current.temperature_2m - 2),
        humidity: round(current.relative_humidity_2m ?? 60),
      },
      barometer: buildBarometer(hourly.surface_pressure || []),
      moon: { activeIndex: round((current.weather_code || 0) % 7) },
      air,
      forecast,
    },
  };
}

export async function fetchWeatherByQuery(query, signal) {
  const candidates = await fetchLocationSuggestions(query, 1, signal);
  if (!candidates.length) {
    throw new Error("No city found. Try another city or country.");
  }
  return fetchWeatherByCoordinates(candidates[0], signal);
}
