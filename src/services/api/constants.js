export const GEO_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
export const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const PRESSURE_HPA_TO_INHG = 0.0295299830714;

export const WEATHER_THEME = {
  clear: {
    day: {
      label: "Sunny",
      background: "/backgrounds/bg-weather (3).png",
      headerIcon: "/icons/Group (16).png",
      forecastIcon: "113.png",
    },
    night: {
      label: "Clear Night",
      background: "/backgrounds/bg-weather (9).png",
      headerIcon: "/icons/Group (31).png",
      forecastIcon: "117.png",
    },
  },
  partlyCloudy: {
    label: "Partly Cloudy",
    background: "/backgrounds/bg-weather (6).png",
    headerIcon: "/icons/Group (11).png",
    forecastIcon: "icon (1).png",
  },
  overcast: {
    label: "Overcast",
    background: "/backgrounds/bg-weather (11).png",
    headerIcon: "/icons/Group (22).png",
    forecastIcon: "icon (2).png",
  },
  fog: {
    label: "Foggy",
    background: "/backgrounds/bg-weather (8).png",
    headerIcon: "/icons/Group (22).png",
    forecastIcon: "icon (2).png",
  },
  rain: {
    label: "Rainy",
    background: "/backgrounds/bg-weather (5).png",
    headerIcon: "/icons/Group (9).png",
    forecastIcon: "390.png",
  },
  snow: {
    label: "Snow",
    background: "/backgrounds/bg-weather (10).png",
    headerIcon: "/icons/Group (24).png",
    forecastIcon: "200 386.png",
  },
  thunder: {
    label: "Thunderstorm",
    background: "/backgrounds/bg-weather (7).png",
    headerIcon: "/icons/Group (7).png",
    forecastIcon: "389.png",
  },
};
