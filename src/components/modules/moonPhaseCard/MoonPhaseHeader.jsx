import React from "react";

const MoonPhaseHeader = ({ weatherIcon, condition }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 ring-1 ring-white/20">
        <img src={weatherIcon} alt={condition} className="h-6 w-6 object-contain" />
      </span>
      <h3 className="font-['Inter'] text-[34px] font-semibold leading-none">Weather Pulse</h3>
    </div>
  );
};

export default MoonPhaseHeader;
