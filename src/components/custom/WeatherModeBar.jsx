import React from "react";

const WEATHER_MODES = [
  "Night",
  "Sunny",
  "Rainy",
  "Snowy",
  "Cloudy",
  "Partly Sunny",
  "Partly Cloudy",
  "Fog",
  "Stormy",
  "Windy",
  "Hail",
  "Sunset",
  "Drizzle",
];

const WeatherModeBar = ({ activeLabel }) => {
  const normalizedActive = (activeLabel || "").toLowerCase();

  const isActiveLabel = (label) => {
    const value = label.toLowerCase();

    if (normalizedActive.includes("partly sunny")) return value === "partly sunny";
    if (normalizedActive.includes("partly cloudy")) return value === "partly cloudy";
    if (normalizedActive.includes("partly")) return value.startsWith("partly");
    if (normalizedActive.includes("sunny") && value === "sunny") return true;
    if (normalizedActive.includes("cloudy") && value === "cloudy") return true;
    if (normalizedActive.includes("fog") && value === "fog") return true;
    if (normalizedActive.includes("drizzle") && value === "drizzle") return true;
    if (normalizedActive.includes("rain") && value === "rainy") return true;
    if (normalizedActive.includes("snow") && value === "snowy") return true;
    if (normalizedActive.includes("storm") && value === "stormy") return true;
    if (normalizedActive.includes("wind") && value === "windy") return true;
    if (normalizedActive.includes("hail") && value === "hail") return true;
    if (normalizedActive.includes("sunset") && value === "sunset") return true;
    if (normalizedActive.includes("night") && value === "night") return true;

    return value === normalizedActive;
  };

  return (
    <div className="glass-card mt-3 w-full overflow-hidden rounded-[30px] border border-white/12 bg-slate-900/20 px-4 py-3 backdrop-blur-md">
      <div className="flex gap-2 overflow-x-auto justify-center px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {WEATHER_MODES.map((item) => {
          const isActive = isActiveLabel(item);

          return (
            <button
              key={item}
              type="button"
              className={`shrink-0 rounded-full border px-6 py-2 text-sm leading-none text-white/95 transition ${
                isActive
                  ? "border-white/25 bg-white/20"
                  : "border-white/8 bg-slate-950/12"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherModeBar;
