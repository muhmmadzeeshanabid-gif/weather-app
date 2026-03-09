export const GEO_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";
export const FORECAST_BASE_URL = "https://api.open-meteo.com/v1/forecast";
export const PRESSURE_HPA_TO_INHG = 0.0295299830714;
export const VERY_HOT_TEMPERATURE_C = 38;

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
    day: {
      label: "Partly Sunny",
      background: "/backgrounds/bg-weather (6).png",
      headerIcon: "/icons/Group (11).png",
      forecastIcon: "icon (1).png",
    },
    night: {
      label: "Partly Cloudy",
      background: "/backgrounds/f3dd78a9cfd8bfd5cfc94564685ab65074f41c34.jpg",
      headerIcon: "/icons/Group (11).png",
      forecastIcon: "icon (1).png",
    },
  },
  overcast: {
    day: {
      label: "Cloudy",
      background: "/backgrounds/a9901d03498672d7b5e7c6122694fa0f0d4b97e3.png",
      headerIcon: "/icons/Group (22).png",
      forecastIcon: "icon (2).png",
    },
    night: {
      label: "Cloudy",
      background: "/backgrounds/f3dd78a9cfd8bfd5cfc94564685ab65074f41c34.jpg",
      headerIcon: "/icons/Group (22).png",
      forecastIcon: "icon (2).png",
    },
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
  veryHot: {
    label: "Sunny, Very Hot",
    background: "/backgrounds/f6edec0e6003f881190041c228cceb7d1fc0df8c.png",
    headerIcon: "/icons/Group (16).png",
    forecastIcon: "113.png",
  },
  thunder: {
    label: "Thunderstorm",
    background: "/backgrounds/4ef1723d35c75f14d2fba59fbc74da34b967046f (1).jpg",
    headerIcon: "/icons/Group (7).png",
    forecastIcon: "389.png",
  },
};
