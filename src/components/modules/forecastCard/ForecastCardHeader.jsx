import React from "react";

const ForecastCardHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <img src="/cardicon3/Group.png" alt="clock" className="h-5 w-5 object-contain" />
      <h3 className="text-[40px] font-semibold leading-none md:text-[40px]">12-hour forecast</h3>
    </div>
  );
};

export default ForecastCardHeader;
