import React from "react";

const MoonPhaseHeader = ({ weatherIcon, condition }) => {
  return (
    <div className="flex items-center gap-2.5 pt-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20">
        <img src={weatherIcon} alt={condition} className="h-5 w-5 object-contain" />
      </span>
      <h3 className="whitespace-nowrap font-['Inter'] text-[28px] font-semibold leading-none md:text-[30px]">
        Weather Pulse
      </h3>
    </div>
  );
};

export default MoonPhaseHeader;
