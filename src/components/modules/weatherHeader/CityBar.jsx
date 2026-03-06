import React from "react";

const CityBar = ({ cityName, onToggleSearch }) => {
  return (
    <div className="flex items-center gap-1.5">
      <img src="/Frame 3.png" alt="location" className="h-6 w-6 object-contain" />
      <span className="font-['Inter'] text-[24px] font-medium leading-none">{cityName}</span>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12"
        onClick={onToggleSearch}
        aria-label="Toggle search"
      >
        <img src="/Frame.png" alt="arrow" className="h-5 w-5 object-contain md:h-6 md:w-6" />
      </button>
    </div>
  );
};

export default CityBar;
