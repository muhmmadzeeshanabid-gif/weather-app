export const fallbackCards = {
  indoor: {
    temp: 22,
    humidity: 66,
  },
  barometer: {
    value: 23.6,
    unit: "Hg",
    readings: [23.5, 22.9, 22.3, 22.8, 22.9, 23.3, 23.2, 22.3],
  },
  moon: {
    activeIndex: 1,
  },
  air: {
    activeDay: "SUN",
    days: [
      { label: "FRI", icon: "390.png" },
      { label: "SAT", icon: "117.png" },
      { label: "SUN", icon: "icon (1).png" },
      { label: "MON", icon: "390.png" },
      { label: "TUE", icon: "389.png" },
      { label: "WED", icon: "113.png" },
      { label: "THU", icon: "200 386.png" },
    ],
    dayMetrics: [
      { label: "FRI", icon: "390.png", realFeel: 30, wind: "0.8 km/hr", chanceRain: "2%", uvIndex: 4 },
      { label: "SAT", icon: "117.png", realFeel: 27, wind: "1.2 km/hr", chanceRain: "8%", uvIndex: 5 },
      { label: "SUN", icon: "icon (1).png", realFeel: 28, wind: "1.5 km/hr", chanceRain: "12%", uvIndex: 6 },
      { label: "MON", icon: "390.png", realFeel: 29, wind: "1.8 km/hr", chanceRain: "25%", uvIndex: 4 },
      { label: "TUE", icon: "389.png", realFeel: 26, wind: "2.1 km/hr", chanceRain: "40%", uvIndex: 3 },
      { label: "WED", icon: "113.png", realFeel: 25, wind: "1.6 km/hr", chanceRain: "10%", uvIndex: 5 },
      { label: "THU", icon: "200 386.png", realFeel: 24, wind: "2.4 km/hr", chanceRain: "35%", uvIndex: 2 },
    ],
    realFeel: 30,
    wind: "0.8 km/hr",
    chanceRain: "2%",
    uvIndex: 4,
  },
  forecast: [
    { temp: 26, time: "Now", wind: "11.7km/h", icon: "icon.png" },
    { temp: 26, time: "22:00", wind: "9.3km/h", icon: "113.png" },
    { temp: 22, time: "00:00", wind: "12km/h", icon: "icon (2).png" },
    { temp: 16, time: "2:00", wind: "15km/h", icon: "389.png" },
    { temp: 20, time: "4:00", wind: "15km/h", icon: "390.png" },
    { temp: 22, time: "6:00", wind: "15km/h", icon: "icon (1).png" },
    { temp: 16, time: "8:00", wind: "15km/h", icon: "200 386.png" },
    { temp: 14, time: "10:00", wind: "15km/h", icon: "389.png" },
  ],
};
