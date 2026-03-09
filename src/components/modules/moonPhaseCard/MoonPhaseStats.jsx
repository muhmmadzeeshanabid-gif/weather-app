import React from "react";
import PulseIcon from "./PulseIcon";
import StatChip from "./StatChip";

const MoonPhaseStats = ({
  bestSlot,
  warmestSlot,
  coolestSlot,
  trendLabel,
  condition,
  weatherIcon,
}) => {
  return (
    <div className="relative z-10 mt-2 flex flex-1 items-start justify-between gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-[55px] font-medium leading-[0.9] md:text-[60px]">
          {bestSlot.temp}
          {"\u00B0"}C
        </p>
        <p className="mt-1.5 text-[22px] font-medium leading-none text-slate-50">{condition}</p>
        <p className="mt-2 text-[14px] leading-none text-slate-100/78">{trendLabel}</p>

        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <StatChip>Best {bestSlot.time}</StatChip>
          <StatChip>
            High {warmestSlot.temp}
            {"\u00B0"}
          </StatChip>
          <StatChip>
            Low {coolestSlot.temp}
            {"\u00B0"}
          </StatChip>
          <StatChip className="px-2 text-[9px]">Wind {bestSlot.wind}</StatChip>
        </div>
      </div>

      <PulseIcon weatherIcon={weatherIcon} condition={condition} />
    </div>
  );
};

export default MoonPhaseStats;
