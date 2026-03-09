import { useEffect, useMemo, useState } from "react";
import { VISIBLE_DAY_COUNT } from "./constants";

export default function useSidebarDays(days) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const allDays = useMemo(
    () => (days || []).map((day, index) => ({ ...day, index })),
    [days]
  );

  useEffect(() => {
    if (!allDays.length) {
      setStartIndex(0);
      setSelectedDayIndex(0);
      return;
    }

    setSelectedDayIndex((prev) => Math.min(prev, allDays.length - 1));
    setStartIndex((prev) => Math.min(prev, Math.max(allDays.length - VISIBLE_DAY_COUNT, 0)));
  }, [allDays]);

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
