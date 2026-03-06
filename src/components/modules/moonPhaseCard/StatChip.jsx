import React from "react";

const StatChip = ({ children }) => (
  <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] leading-none text-white">
    {children}
  </span>
);

export default StatChip;
