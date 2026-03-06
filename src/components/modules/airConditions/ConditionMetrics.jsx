import React from "react";

const MetricItem = ({ iconSrc, iconAlt, label, value, iconClassName = "" }) => (
  <div className="flex items-start gap-3">
    <img src={iconSrc} alt={iconAlt} className={`h-5 w-5 object-contain ${iconClassName}`} />
    <div>
      <p className="text-[16px] leading-none text-slate-100/95">{label}</p>
      <p className="mt-2 text-[38px] font-medium leading-none">{value}</p>
    </div>
  </div>
);

const ConditionMetrics = ({ data }) => {
  return (
    <div className="mt-5 space-y-6">
      <MetricItem iconSrc="/cardsicon/Group.png" iconAlt="real feel" label="Real Feel" value={`${data.realFeel}\u00B0`} />
      <MetricItem
        iconSrc="/icons/Group (33).png"
        iconAlt="wind"
        label="Wind"
        value={data.wind}
        iconClassName="brightness-0 invert"
      />
      <MetricItem
        iconSrc="/cardsicon/Vector.png"
        iconAlt="chance of rain"
        label="Chance of rain"
        value={data.chanceRain}
      />
      <MetricItem
        iconSrc="/icons/Group (34).png"
        iconAlt="uv index"
        label="UV Index"
        value={data.uvIndex}
        iconClassName="brightness-0 invert"
      />
    </div>
  );
};

export default ConditionMetrics;
