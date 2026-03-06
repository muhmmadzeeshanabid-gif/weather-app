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
    <div className="relative z-10 mt-3 flex flex-1 items-center justify-between gap-4">
      <div className="min-w-0 flex-1">
        <p className="text-[58px] font-medium leading-[0.9] md:text-[64px]">
          {bestSlot.temp}
          {"\u00B0"}C
        </p>
        <p className="mt-2 text-[24px] font-medium leading-none text-slate-50">{condition}</p>
        <p className="mt-3 text-[14px] leading-none text-slate-100/78">{trendLabel}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <StatChip>Best {bestSlot.time}</StatChip>
          <StatChip>
            High {warmestSlot.temp}
            {"\u00B0"}
          </StatChip>
          <StatChip>
            Low {coolestSlot.temp}
            {"\u00B0"}
          </StatChip>
          <StatChip>Wind {bestSlot.wind}</StatChip>
        </div>
      </div>

      <PulseIcon weatherIcon={weatherIcon} condition={condition} />
    </div>
  );
};

export default MoonPhaseStats;
