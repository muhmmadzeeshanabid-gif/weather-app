import React, { useEffect, useMemo, useState } from "react";
import ConditionMetrics from "./ConditionMetrics";
import DaySelector from "./DaySelector";
import TimeDisplay from "./TimeDisplay";
import { fallbackAirData } from "./constants";
import useSidebarDays from "./useSidebarDays";

const AirConditionsSidebar = ({ data, timezone }) => {
  const card = { ...fallbackAirData, ...(data || {}) };
  const availableDayMetrics = useMemo(() => {
    return card.dayMetrics?.length ? card.dayMetrics : fallbackAirData.dayMetrics;
  }, [card.dayMetrics]);

  const [currentTime, setCurrentTime] = useState(() => new Date());
  const {
    visibleDays,
    selectedDayIndex,
    setSelectedDayIndex,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
  } = useSidebarDays(availableDayMetrics);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 30000);
    return () => clearInterval(interval);
  }, []);

  const timeLabel = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone || "UTC",
  }).format(currentTime);

  const selectedMetrics = availableDayMetrics[selectedDayIndex] || availableDayMetrics[0] || card;

  return (
    <aside className="glass-card relative mt-4 h-[530px] w-full overflow-hidden rounded-[34px] border border-white/10 bg-slate-900/25 px-6 py-5 backdrop-blur-lg md:mt-[10px] md:w-[300px]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-slate-900/10 to-slate-900/50" />
      <div className="relative z-10">
        <DaySelector
          visibleDays={visibleDays}
          selectedDayIndex={selectedDayIndex}
          onSelectDay={setSelectedDayIndex}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          onPrev={goPrev}
          onNext={goNext}
        />

        <TimeDisplay timeLabel={timeLabel} />

        <h4 className="mt-7 text-[24px] font-semibold leading-none tracking-wide">
          AIR CONDITIONS
        </h4>

        <ConditionMetrics data={selectedMetrics} />
      </div>
    </aside>
  );
};

export default AirConditionsSidebar;
