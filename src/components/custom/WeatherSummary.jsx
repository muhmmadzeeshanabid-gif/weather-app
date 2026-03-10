import React from "react";
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Moon,
  Sun,
  Sunset,
  Wind,
} from "lucide-react";

const iconByLabel = (label = "") => {
  const value = label.toLowerCase();

  if (value.includes("thunder") || value.includes("storm")) return CloudLightning;
  if (value.includes("hail")) return CloudHail;
  if (value.includes("snow")) return CloudSnow;
  if (value.includes("drizzle")) return CloudDrizzle;
  if (value.includes("rain")) return CloudRain;
  if (value.includes("fog")) return CloudFog;
  if (value.includes("wind")) return Wind;
  if (value.includes("partly")) return CloudSun;
  if (value.includes("cloud")) return Cloud;
  if (value.includes("sunset")) return Sunset;
  if (value.includes("night")) return Moon;
  if (value.includes("sunny") || value.includes("clear")) return Sun;
  return CloudSun;
};

const WeatherSummary = ({
  weatherLabel,
  temperature,
  dateLine,
  isLoading,
  error,
}) => {
  const WeatherIcon = iconByLabel(weatherLabel);
  let statusText = "\u00A0";
  let statusClassName = "text-transparent";

  if (error) {
    statusText = error;
    statusClassName = "text-red-200";
  } else if (isLoading) {
    statusText = "Loading weather...";
    statusClassName = "text-slate-200/90";
  }

  return (
    <div className="-mt-2 max-w-[420px] md:-mt-8">
      <h1 className="-mt-[4px] font-['Inter'] text-[48px] font-semibold leading-none">
        {weatherLabel}
      </h1>

      <div className="mt-1 flex items-end gap-5">
        <p className="font-['Inter'] text-[128px] font-medium leading-none">
          {temperature}
          <span className="ml-1 align-top font-['Inter'] text-[128px] font-medium">
            {"\u00B0"}C
          </span>
        </p>
        <WeatherIcon className="mb-4 h-12 w-12 text-white/90" />
      </div>

      <p className="mt-1 text-[15px] text-slate-100/95 md:text-[17px]">
        {dateLine}
      </p>

      <p className={`mt-2 h-5 text-sm leading-5 ${statusClassName}`}>{statusText}</p>
    </div>
  );
};

export default WeatherSummary;
