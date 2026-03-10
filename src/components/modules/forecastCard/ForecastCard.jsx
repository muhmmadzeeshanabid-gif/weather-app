import React, { useMemo } from "react";
import ForecastCardHeader from "./ForecastCardHeader";
import ForecastCurve from "./ForecastCurve";
import ForecastDetailsRow from "./ForecastDetailsRow";
import ForecastTemperatureRow from "./ForecastTemperatureRow";
import buildForecastCurve from "./buildForecastCurve";
import { defaultForecast } from "./constants";

const ForecastCard = ({ data }) => {
  const forecast = useMemo(() => {
    return data?.length ? data : defaultForecast;
  }, [data]);

  const temps = useMemo(() => {
    return forecast.map((item) => item.temp);
  }, [forecast]);

  const { pathD, startPoint, endPoint } = useMemo(() => {
    return buildForecastCurve(temps);
  }, [temps]);

  return (
    <div className="glass-card w-full rounded-[34px] border border-white/16 bg-slate-900/18 px-6 py-5 backdrop-blur-md md:px-7 md:py-6">
      <ForecastCardHeader />

      <div className="relative mt-4">
        <ForecastTemperatureRow forecast={forecast} />
        <ForecastCurve pathD={pathD} startPoint={startPoint} endPoint={endPoint} />
        <ForecastDetailsRow forecast={forecast} />
      </div>
    </div>
  );
};

export default ForecastCard;
