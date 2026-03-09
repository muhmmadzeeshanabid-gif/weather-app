import React, { useEffect, useMemo, useState } from "react";
import ConditionMetrics from "./ConditionMetrics";
import DaySelector from "./DaySelector";
import TimeDisplay from "./TimeDisplay";
import { fallbackAirData } from "./constants";
import useSidebarDays from "./useSidebarDays";

const AirConditionsSidebar = ({ data }) => {
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
  }).format(currentTime);

  const selectedMetrics = availableDayMetrics[selectedDayIndex] || availableDayMetrics[0] || card;

  return (
    <aside className="relative mt-4 h-[530px] w-full overflow-hidden rounded-[34px] border border-white/20 bg-sky-500/35 px-6 py-5 backdrop-blur-sm md:mt-[10px] md:w-[300px]">
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

      <img
        src="/cardsicon/Vector 8.png"
        alt="mountain"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[170px] w-full object-cover"
      />
    </aside>
  );
};

export default AirConditionsSidebar;
