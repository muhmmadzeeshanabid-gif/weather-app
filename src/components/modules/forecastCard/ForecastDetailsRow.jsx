import React from "react";

const ForecastDetailsRow = ({ forecast }) => {
  return (
    <div className="mt-1 grid grid-cols-8">
      {forecast.map((item, index) => (
        <div key={`${item.icon}-${index}`} className="flex flex-col items-center">
          <img
            src={`/cardicon3/${item.icon}`}
            alt="forecast icon"
            className="h-[20px] w-[20px] object-contain md:h-[24px] md:w-[24px]"
          />
          <p className="mt-1 text-[10px] leading-none text-slate-100/95 md:text-[11px]">{item.wind}</p>
          <p className="mt-1 text-[10px] leading-none text-slate-100/95 md:text-[11px]">{item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastDetailsRow;
