import React from "react";

const IndoorCard = ({ data }) => {
  const indoorTemp = data?.temp ?? 22;
  const humidity = data?.humidity ?? 66;

  return (
    <div className="glass-card flex h-[281px] w-full flex-col rounded-[34px] border border-white/16 bg-slate-900/18 px-6 py-5 backdrop-blur-md md:h-[295px]">
      <div className="flex items-center gap-2 pt-1">
        <img
          src="/cardsicon/Heart.png"
          alt="heart"
          className="h-5 w-5 object-contain md:h-6 md:w-6"
        />
        <h3 className="text-[36px] font-semibold leading-none md:text-[36px]">
          Indoor
        </h3>
      </div>

      <div className="mt-3.5 flex items-start gap-2.5">
        <img
          src="/cardsicon/Group.png"
          alt="temperature"
          className="mt-2 h-6 w-6 object-contain md:h-7 md:w-7"
        />
        <p className="text-[58px] font-medium leading-none md:text-[66px]">
          {indoorTemp}
          {"\u00B0"}C
        </p>
      </div>

      <div className="mt-4.5 flex items-start gap-2.5">
        <img
          src="/cardsicon/Vector.png"
          alt="humidity"
          className="mt-1 h-6 w-6 object-contain md:h-7 md:w-7"
        />
        <div>
          <p className="text-[19px] leading-none md:text-[20px]">Humid</p>
          <p className="mt-1 text-[46px] font-medium leading-none md:text-[50px]">
            {humidity}
            <span className="ml-1 align-top text-[22px] md:text-[24px]">%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndoorCard;
