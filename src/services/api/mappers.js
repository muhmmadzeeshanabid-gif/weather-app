import { PRESSURE_HPA_TO_INHG, WEATHER_THEME } from "./constants";
import { formatHourLabel, formatWeekday, normalizeWind, round } from "./utils";

export function mapThemeByWeatherCode(weatherCode, isDay = true) {
  if ([95, 96, 99].includes(weatherCode)) return WEATHER_THEME.thunder;
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) return WEATHER_THEME.snow;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return WEATHER_THEME.rain;
  }
  if ([45, 48].includes(weatherCode)) return WEATHER_THEME.fog;
  if (weatherCode === 3) return WEATHER_THEME.overcast;
  if ([1, 2].includes(weatherCode)) return WEATHER_THEME.partlyCloudy;
  if (weatherCode === 0) return isDay ? WEATHER_THEME.clear.day : WEATHER_THEME.clear.night;
  return WEATHER_THEME.partlyCloudy;
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
