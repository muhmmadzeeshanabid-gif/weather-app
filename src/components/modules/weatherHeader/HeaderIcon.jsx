import React from "react";

const HeaderIcon = ({ iconSrc, iconAlt }) => {
  return (
    <div className="pointer-events-none absolute -top-1 right-0 flex items-start md:-top-3 md:right-2">
      <img
        src={iconSrc}
        alt={iconAlt}
        className="h-24 w-24 object-contain sm:h-32 sm:w-32 md:h-[236px] md:w-[236px]"
      />
    </div>
  );
};

export default HeaderIcon;
