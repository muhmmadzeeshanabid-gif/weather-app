import React from "react";

const TimeDisplay = ({ timeLabel }) => {
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      <img src="/cardicon3/Group.png" alt="clock" className="h-5 w-5 object-contain" />
      <span className="text-[32px] font-medium leading-none">{timeLabel}</span>
    </div>
  );
};

export default TimeDisplay;
