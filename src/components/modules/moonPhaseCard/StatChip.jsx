import React from "react";

const StatChip = ({ children, className = "" }) => (
  <span
    className={`flex min-w-0 min-h-[38px] items-center justify-center rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-center text-[10px] leading-tight text-white ${className}`}
  >
    {children}
  </span>
);

export default StatChip;
