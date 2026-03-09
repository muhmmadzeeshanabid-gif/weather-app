import React from "react";

const IndoorCard = ({ data }) => {
  const indoorTemp = data?.temp ?? 22;
  const humidity = data?.humidity ?? 66;

  return (
    <div className="flex h-[281px] w-full flex-col justify-center rounded-[34px] border border-white/20 bg-sky-500/35 px-6 py-5 backdrop-blur-sm md:h-[295px]">
      <div className="flex items-center gap-2">
        <img
          src="/cardsicon/Heart.png"
          alt="heart"
          className="h-5 w-5 object-contain md:h-6 md:w-6"
        />
        <h3 className="text-[42px] font-semibold leading-none md:text-[42px]">
          Indoor
        </h3>
      </div>

      <div className="mt-2.5 flex items-start gap-2.5">
        <img
          src="/cardsicon/Group.png"
          alt="temperature"
          className="mt-2 h-6 w-6 object-contain md:h-7 md:w-7"
        />
        <p className="text-[68px] font-medium leading-none md:text-[76px]">
          {indoorTemp}
          {"\u00B0"}C
        </p>
      </div>

      <div className="mt-3.5 flex items-start gap-2.5">
        <img
          src="/cardsicon/Vector.png"
          alt="humidity"
          className="mt-1 h-6 w-6 object-contain md:h-7 md:w-7"
        />
        <div>
          <p className="text-[22px] leading-none md:text-[23px]">Humid</p>
          <p className="mt-1 text-[54px] font-medium leading-none md:text-[58px]">
            {humidity}
            <span className="ml-1 align-top text-[26px] md:text-[28px]">%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndoorCard;
