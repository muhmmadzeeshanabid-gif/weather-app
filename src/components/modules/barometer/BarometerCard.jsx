import React from "react";
import PressureChart from "./PressureChart";
import PressureReadings from "./PressureReadings";
import usePressureCurve from "./usePressureCurve";

const BarometerCard = ({ data }) => {
  const readings = data?.readings || [23.5, 22.9, 22.3, 22.8, 22.9, 23.3, 23.2, 22.3];
  const pressureValue = data?.value ?? 23.6;
  const pressureUnit = data?.unit ?? "Hg";
  const { pathD, points } = usePressureCurve(readings);

  return (
    <div className="flex h-[281px] w-full flex-col justify-center rounded-[34px] border border-white/20 bg-sky-500/35 px-6 py-5 backdrop-blur-sm md:h-[295px]">
      <div className="flex items-center gap-2">
        <img
          src="/Group 2726.png"
          alt="barometer"
          className="h-5 w-5 object-contain md:h-6 md:w-6"
        />
        <h3 className="text-[42px] font-semibold leading-none md:text-[42px]">
          Barometer
        </h3>
      </div>

      <div className="mt-2.5 flex items-start gap-2.5">
        <img
          src="/cardsicon/Group 2727.png"
          alt="pressure"
          className="mt-2 h-8 w-8 object-contain md:h-9 md:w-9"
        />
        <p className="leading-none">
          <span className="text-[68px] font-medium md:text-[76px]">{pressureValue}</span>
          <span className="ml-2 align-top text-[44px] md:text-[44px]">{pressureUnit}</span>
        </p>
      </div>

      <PressureChart pathD={pathD} points={points} />
      <PressureReadings readings={readings} />
    </div>
  );
};

export default BarometerCard;
