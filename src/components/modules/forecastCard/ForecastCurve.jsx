import React from "react";

const ForecastCurve = ({ pathD, startPoint, endPoint }) => {
  if (!pathD) return null;

  return (
    <svg
      viewBox="0 0 1000 90"
      className="mt-1 h-[40px] w-full"
      preserveAspectRatio="none"
      aria-label="forecast curve"
    >
      <path
        d={pathD}
        fill="none"
        stroke="#9EEFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={startPoint.x} cy={startPoint.y} r="8" fill="#9EEFFF" />
      <circle cx={endPoint.x} cy={endPoint.y} r="8" fill="#9EEFFF" />
    </svg>
  );
};

export default ForecastCurve;
