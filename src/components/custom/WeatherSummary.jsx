import React from "react";

const WeatherSummary = ({
  weatherLabel,
  temperature,
  dateLine,
  isLoading,
  error,
}) => {
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

      <p className="mt-1 font-['Inter'] text-[128px] font-medium leading-none">
        {temperature}
        <span className="ml-1 align-top font-['Inter'] text-[128px] font-medium">
          {"\u00B0"}C
        </span>
      </p>

      <p className="mt-1 text-sm text-slate-100/95 md:text-[16px]">
        {dateLine}
      </p>

      <p className={`mt-2 h-5 text-sm leading-5 ${statusClassName}`}>{statusText}</p>
    </div>
  );
};

export default WeatherSummary;
