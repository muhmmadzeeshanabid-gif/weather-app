import React from "react";
import Background from "./Background";
import WeatherHeader from "../modules/weatherHeader/WeatherHeader";
import WeatherSummary from "./WeatherSummary";
import WeatherModeBar from "./WeatherModeBar";
import IndoorCard from "./IndoorCard";
import BarometerCard from "../modules/barometer/BarometerCard";
import MoonPhaseCard from "../modules/moonPhaseCard/MoonPhaseCard";
import ForecastCard from "../modules/forecastCard/ForecastCard";
import AirConditionsSidebar from "../modules/airConditions/AirConditionsSidebar";
import useWeatherDashboard from "../../hooks/useWeatherDashboard";

const WeatherDashboard = () => {
  const {
    showSearch,
    setShowSearch,
    searchText,
    setSearchText,
    suggestions,
    selectedLocation,
    weather,
    isLoading,
    error,
    formattedDateLine,
    onSubmitSearch,
    onSelectSuggestion,
  } = useWeatherDashboard("New York");

  return (
    <Background backgroundImage={weather.background}>
      <div className="relative px-6 pb-3 pt-5 sm:px-10 md:px-[74px] md:pt-7">
        <WeatherHeader
          cityName={selectedLocation.name}
          showSearch={showSearch}
          onToggleSearch={() => setShowSearch((prev) => !prev)}
          searchText={searchText}
          onSearchTextChange={setSearchText}
          onSubmitSearch={onSubmitSearch}
          suggestions={suggestions}
          onSelectSuggestion={onSelectSuggestion}
        />
        <WeatherSummary
          weatherLabel={weather.label}
          temperature={weather.temperature}
          dateLine={formattedDateLine}
          isLoading={isLoading}
          error={error}
        />
        <WeatherModeBar activeLabel={weather.label} />
        <div className="mt-4 md:mt-5 md:grid md:grid-cols-[minmax(0,1fr)_300px] md:items-start md:gap-5">
          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            <IndoorCard data={selectedLocation.cards?.indoor} />
            <BarometerCard data={selectedLocation.cards?.barometer} />
            <MoonPhaseCard
              weather={weather}
              forecastData={selectedLocation.cards?.forecast}
              airData={selectedLocation.cards?.air}
            />
            <div className="pb-2 md:col-span-3 md:pb-3">
              <ForecastCard data={selectedLocation.cards?.forecast} />
            </div>
          </div>
          <AirConditionsSidebar
            data={selectedLocation.cards?.air}
            timezone={selectedLocation?.timezone}
          />
        </div>
      </div>
    </Background>
  );
};

export default WeatherDashboard;
