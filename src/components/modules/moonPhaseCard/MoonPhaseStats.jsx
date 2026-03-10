import React from "react";
import StatChip from "./StatChip";

const MoonPhaseStats = ({ bestSlot, warmestSlot, coolestSlot, condition, chanceRain }) => {
  const rainLabel = chanceRain ?? "0%";

  return (
    <div className="relative z-10 mt-3 flex flex-1 items-start">
      <div className="min-w-0 flex-1">
        <p className="text-[48px] font-medium leading-[0.9] md:text-[54px]">
          {bestSlot.temp}
          {"\u00B0"}C
        </p>
        <p className="mt-2.5 text-[20px] font-medium leading-none text-slate-50">{condition}</p>
        <p className="mt-2.5 text-[14px] leading-none text-slate-100/70">Condition</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <StatChip>
            Feel {bestSlot.temp}
            {"\u00B0"}
          </StatChip>
          <StatChip>Rain {rainLabel}</StatChip>
          <StatChip className="col-span-2">Wind {bestSlot.wind}</StatChip>
        </div>
      </div>
    </div>
  );
};

export default MoonPhaseStats;
