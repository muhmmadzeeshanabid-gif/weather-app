import React from "react";

const PressureChart = ({ pathD, points }) => {
  return (
    <div className="mt-2">
      <svg viewBox="0 0 300 62" className="h-[54px] w-full" preserveAspectRatio="none">
        <path
          d={pathD}
          fill="none"
          stroke="#9EEFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.length > 0 && (
          <>
            <circle cx={points[0].x} cy={points[0].y} r="5.5" fill="#9EEFFF" />
            <circle cx={points[points.length - 1].x} cy={points[points.length - 1].y} r="5.5" fill="#9EEFFF" />
          </>
        )}
      </svg>
    </div>
  );
};

export default PressureChart;
