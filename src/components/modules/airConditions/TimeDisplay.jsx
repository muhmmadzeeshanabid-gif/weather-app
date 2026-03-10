import React from "react";

const TimeDisplay = ({ timeLabel }) => {
  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <span className="h-px w-full bg-white/25" />
      <div className="flex items-center justify-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-sky-300/80" />
        <span className="text-[30px] font-medium leading-none text-white/90">{timeLabel}</span>
      </div>
    </div>
  );
};

export default TimeDisplay;
