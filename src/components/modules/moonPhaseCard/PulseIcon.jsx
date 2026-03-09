import React from "react";

const PulseIcon = ({ weatherIcon, condition }) => (
  <div className="relative mt-1 flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/16">
    <span className="absolute inset-[12px] rounded-full border border-sky-200/25" />
    <span className="absolute inset-[20px] rounded-full border border-sky-100/18" />
    <img src={weatherIcon} alt={condition} className="relative h-[52px] w-[52px] object-contain" />
  </div>
);

export default PulseIcon;
