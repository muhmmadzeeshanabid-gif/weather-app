import React from "react";

const ForecastTemperatureRow = ({ forecast }) => {
  return (
    <div className="grid grid-cols-8">
      {forecast.map((item, index) => (
        <div key={`${item.time}-${index}`} className="text-center">
          <p className="text-sm font-medium text-slate-100 md:text-[18px]">{item.temp}{"\u00B0"}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastTemperatureRow;
