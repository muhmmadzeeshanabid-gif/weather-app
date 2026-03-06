import React from "react";

const ArrowButton = ({ direction, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`mt-[14px] ${disabled ? "opacity-30" : "opacity-70"}`}
    aria-label={direction === "prev" ? "Show previous days" : "Show next days"}
  >
    <img
      src="/Frame.png"
      alt={direction}
      className={`h-4 w-4 object-contain ${direction === "prev" ? "rotate-180" : ""}`}
    />
  </button>
);

const DayItem = ({ day, isActive, onSelect }) => (
  <button type="button" onClick={onSelect} className="flex flex-col items-center gap-1">
    <span className={`text-sm leading-none ${isActive ? "font-semibold text-white" : "text-slate-200/85"}`}>
      {day.label}
    </span>
    <img src={`/cardicon3/${day.icon}`} alt={day.label} className="h-[20px] w-[20px] object-contain" />
  </button>
);

const DaySelector = ({
  visibleDays,
  selectedDayIndex,
  onSelectDay,
  canGoPrev,
  canGoNext,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex items-start justify-between gap-2">
      <ArrowButton direction="prev" disabled={!canGoPrev} onClick={onPrev} />
      {visibleDays.map((day) => (
        <DayItem
          key={`${day.label}-${day.index}`}
          day={day}
          isActive={day.index === selectedDayIndex}
          onSelect={() => onSelectDay(day.index)}
        />
      ))}
      <ArrowButton direction="next" disabled={!canGoNext} onClick={onNext} />
    </div>
  );
};

export default DaySelector;
