import { PRESSURE_HPA_TO_INHG, VERY_HOT_TEMPERATURE_C, WEATHER_THEME } from "./constants";
import { formatHourLabel, formatWeekday, normalizeWind, round } from "./utils";

export function mapThemeByWeatherCode(weatherCode, isDay = true, temperature = null) {
  const pickThemeVariant = (theme) => {
    if (!theme?.day) return theme;
    return isDay ? theme.day : theme.night;
  };

  if (weatherCode === 0 && isDay && Number(temperature) >= VERY_HOT_TEMPERATURE_C) {
    return WEATHER_THEME.veryHot;
  }
  if ([95, 96, 99].includes(weatherCode)) return WEATHER_THEME.thunder;
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return WEATHER_THEME.snow;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return WEATHER_THEME.rain;
  }
  if ([45, 48].includes(weatherCode)) return WEATHER_THEME.fog;
  if (weatherCode === 3) return pickThemeVariant(WEATHER_THEME.overcast);
  if ([1, 2].includes(weatherCode)) return pickThemeVariant(WEATHER_THEME.partlyCloudy);
  if (weatherCode === 0) return isDay ? WEATHER_THEME.clear.day : WEATHER_THEME.clear.night;
  return pickThemeVariant(WEATHER_THEME.partlyCloudy);
}

export function buildHourlyForecast(hourly, timezone) {
  const count = Math.min(8, hourly.time.length);
  return Array.from({ length: count }, (_, index) => {
    const weatherCode = hourly.weather_code[index];
    const icon = mapThemeByWeatherCode(weatherCode).forecastIcon;
    return {
      temp: round(hourly.temperature_2m[index]),
      time: formatHourLabel(hourly.time[index], timezone, index),
      wind: `${normalizeWind(hourly.wind_speed_10m[index])}km/h`,
      icon,
    };
  });
}

export function buildBarometer(hourlyPressure) {
  const pressurePoints = hourlyPressure
    .slice(0, 8)
    .map((item) => round(item * PRESSURE_HPA_TO_INHG, 1));
  const value = pressurePoints[0] ?? 29.9;

  return {
    value,
    unit: "Hg",
    readings: pressurePoints.length
      ? pressurePoints
      : [29.7, 29.8, 29.9, 30.0, 30.1, 30.0, 29.9, 29.8],
  };
}

export function buildDays(daily, timezone) {
  return daily.time.slice(0, 5).map((dateISO, index) => ({
    label: formatWeekday(dateISO, timezone),
    icon: mapThemeByWeatherCode(daily.weather_code[index]).forecastIcon,
  }));
}

export function buildAirConditions(daily, timezone, current = {}) {
  const dayMetrics = (daily.time || []).slice(0, 7).map((dateISO, index) => ({
    label: formatWeekday(dateISO, timezone),
    icon: mapThemeByWeatherCode(daily.weather_code?.[index]).forecastIcon,
    realFeel: round(
      daily.apparent_temperature_max?.[index] ??
        current.apparent_temperature ??
        current.temperature_2m
    ),
    wind: `${normalizeWind(daily.wind_speed_10m_max?.[index] ?? current.wind_speed_10m)} km/hr`,
    chanceRain: `${round(
      daily.precipitation_probability_max?.[index] ?? current.precipitation_probability ?? 0
    )}%`,
    uvIndex: round(daily.uv_index_max?.[index] ?? 0),
  }));

  return {
    activeDay: dayMetrics[0]?.label || formatWeekday(new Date().toISOString(), timezone),
    days: dayMetrics.map(({ label, icon }) => ({ label, icon })),
    dayMetrics,
    realFeel: dayMetrics[0]?.realFeel ?? 0,
    wind: dayMetrics[0]?.wind ?? "0 km/hr",
    chanceRain: dayMetrics[0]?.chanceRain ?? "0%",
    uvIndex: dayMetrics[0]?.uvIndex ?? 0,
  };
}
