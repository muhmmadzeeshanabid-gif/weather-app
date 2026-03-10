export const GEO_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
export const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const PRESSURE_HPA_TO_INHG = 0.0295299830714;
export const VERY_HOT_TEMPERATURE_C = 38;

export const WEATHER_THEME = {
  clear: {
    day: {
      label: "Sunny",
      background: "/images/sunny-bg.png",
      headerIcon: "/icons/Group (16).png",
      forecastIcon: "113.png",
    },
    night: {
      label: "Clear Night",
      background: "/images/night-bg.png",
      headerIcon: "/icons/Group (31).png",
      forecastIcon: "117.png",
    },
  },
  partlyCloudy: {
    day: {
      label: "Partly Sunny",
      background: "/images/partly-cloudy-bg.png",
      headerIcon: "/icons/Group (11).png",
      forecastIcon: "icon (1).png",
    },
    night: {
      label: "Partly Cloudy",
      background: "/images/night-bg.png",
      headerIcon: "/icons/Group (11).png",
      forecastIcon: "icon (1).png",
    },
  },
  overcast: {
    day: {
      label: "Cloudy",
      background: "/images/cloudy-bg.png",
      headerIcon: "/icons/Group (22).png",
      forecastIcon: "icon (2).png",
    },
    night: {
      label: "Cloudy",
      background: "/images/cloudy-bg.png",
      headerIcon: "/icons/Group (22).png",
      forecastIcon: "icon (2).png",
    },
  },
  fog: {
    label: "Foggy",
    background: "/images/fog-bg.png",
    headerIcon: "/icons/Group (22).png",
    forecastIcon: "icon (2).png",
  },
  drizzle: {
    label: "Drizzle",
    background: "/images/drizzle-bg.png",
    headerIcon: "/icons/Group (9).png",
    forecastIcon: "390.png",
  },
  rain: {
    label: "Rainy",
    background: "/images/rainy-bg.png",
    headerIcon: "/icons/Group (9).png",
    forecastIcon: "390.png",
  },
  snow: {
    label: "Snow",
    background: "/images/snowy-bg.png",
    headerIcon: "/icons/Group (24).png",
    forecastIcon: "200 386.png",
  },
  hail: {
    label: "Hail",
    background: "/images/hail-bg.png",
    headerIcon: "/icons/Group (24).png",
    forecastIcon: "200 386.png",
  },
  windy: {
    label: "Windy",
    background: "/images/windy-bg.png",
    headerIcon: "/icons/Group (33).png",
    forecastIcon: "icon (1).png",
  },
  sunset: {
    label: "Sunset",
    background: "/images/sunset-bg.png",
    headerIcon: "/icons/Group (16).png",
    forecastIcon: "113.png",
  },
  veryHot: {
    label: "Sunny, Very Hot",
    background: "/images/sunny-bg.png",
    headerIcon: "/icons/Group (16).png",
    forecastIcon: "113.png",
  },
  stormy: {
    label: "Stormy",
    background: "/images/stormy-bg.png",
    headerIcon: "/icons/Group (7).png",
    forecastIcon: "389.png",
  },
};
