import React, { useMemo } from "react";
import MoonPhaseHeader from "./MoonPhaseHeader";
import MoonPhaseStats from "./MoonPhaseStats";
import analyzeTimeline from "./analyzeTimeline";
import { defaultForecast } from "./constants";

const MoonPhaseCard = ({ weather, forecastData }) => {
  const condition = weather?.label || "Clear";
  const weatherIcon = weather?.icon || "/icons/Group (16).png";
  const timeline = useMemo(() => {
    return forecastData?.length ? forecastData : defaultForecast;
  }, [forecastData]);

  const { bestSlot, warmestSlot, coolestSlot, trendLabel } = useMemo(() => {
    return analyzeTimeline(timeline);
  }, [timeline]);

  return (
    <div className="relative flex h-[281px] w-full flex-col justify-center overflow-hidden rounded-[34px] border border-white/20 bg-sky-500/35 px-6 py-5 backdrop-blur-sm md:h-[295px]">
      <span className="pointer-events-none absolute right-[-38px] top-[26px] h-[170px] w-[170px] rounded-full bg-white/7 blur-3xl" />
      <span className="pointer-events-none absolute left-[-28px] bottom-[18px] h-[120px] w-[120px] rounded-full bg-sky-200/8 blur-2xl" />
      <span className="pointer-events-none absolute inset-x-8 top-[108px] h-px bg-white/6" />

      <MoonPhaseHeader weatherIcon={weatherIcon} condition={condition} />
      <MoonPhaseStats
        bestSlot={bestSlot}
        warmestSlot={warmestSlot}
        coolestSlot={coolestSlot}
        trendLabel={trendLabel}
        condition={condition}
        weatherIcon={weatherIcon}
      />
    </div>
  );
};

export default MoonPhaseCard;
