import React from "react";
import CityBar from "./CityBar";
import HeaderIcon from "./HeaderIcon";
import SearchPanel from "./SearchPanel";

const WeatherHeader = ({
  cityName,
  showSearch,
  onToggleSearch,
  searchText,
  onSearchTextChange,
  onSubmitSearch,
  suggestions,
  onSelectSuggestion,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className="relative min-h-[88px] md:min-h-[86px]">
      <CityBar cityName={cityName} showSearch={showSearch} onToggleSearch={onToggleSearch} />

      <SearchPanel
        showSearch={showSearch}
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
        onSubmitSearch={onSubmitSearch}
        suggestions={suggestions}
        onSelectSuggestion={onSelectSuggestion}
      />

      <HeaderIcon iconSrc={iconSrc} iconAlt={iconAlt} />
    </div>
  );
};

export default WeatherHeader;
