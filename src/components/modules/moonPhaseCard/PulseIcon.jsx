import React from "react";

const PulseIcon = ({ weatherIcon, condition }) => (
  <div className="relative flex h-[122px] w-[122px] shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/16">
    <span className="absolute inset-[14px] rounded-full border border-sky-200/25" />
    <span className="absolute inset-[24px] rounded-full border border-sky-100/18" />
    <img src={weatherIcon} alt={condition} className="relative h-[62px] w-[62px] object-contain" />
  </div>
);

export default PulseIcon;
