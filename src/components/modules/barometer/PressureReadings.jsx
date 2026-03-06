import React from "react";

const PressureReadings = ({ readings }) => {
  return (
    <div className="mt-1 grid grid-cols-8 gap-1.5">
      {readings.map((value, index) => (
        <div key={`${value}-${index}`} className="flex flex-col items-center gap-1">
          <img
            src="/cardsicon/Vector.png"
            alt="drop"
            className="h-4 w-4 object-contain md:h-[18px] md:w-[18px]"
          />
          <span className="text-[11px] leading-none text-slate-100/95 md:text-[12px]">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PressureReadings;
