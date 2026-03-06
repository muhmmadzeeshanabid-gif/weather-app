import { useMemo, useState } from "react";
import { TOTAL_DAYS, VISIBLE_DAY_COUNT } from "./constants";

function getWeekdayLabel(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date).toUpperCase();
}

export default function useSidebarDays(baseIcons) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const allDays = useMemo(() => {
    return Array.from({ length: TOTAL_DAYS }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return {
        label: getWeekdayLabel(date),
        icon: baseIcons[index % baseIcons.length],
        index,
      };
    });
  }, [baseIcons]);

  const visibleDays = allDays.slice(startIndex, startIndex + VISIBLE_DAY_COUNT);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + VISIBLE_DAY_COUNT < allDays.length;

  const goPrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => prev + 1);
  };

  return {
    visibleDays,
    selectedDayIndex,
    setSelectedDayIndex,
    canGoPrev,
    canGoNext,
    goPrev,
    goNext,
  };
}
