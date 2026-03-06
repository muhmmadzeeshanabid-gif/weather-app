import { useCallback, useEffect, useMemo, useState } from "react";
import { FALLBACK_LOCATION } from "../data/fallbackLocation";
import { fetchWeatherByQuery } from "../services/api";
import formatDateLine from "./weatherDashboard/formatDateLine";
import useLiveClock from "./weatherDashboard/useLiveClock";
import useWeatherSearch from "./weatherDashboard/useWeatherSearch";

export default function useWeatherDashboard(defaultCity = "Karachi") {
  const [showSearch, setShowSearch] = useState(true);
  const now = useLiveClock(1000);
  const fallbackLocation = FALLBACK_LOCATION;
  const [selectedLocation, setSelectedLocation] = useState(fallbackLocation);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const applyLocation = useCallback((location) => {
    if (!location) return;
    setIsLoading(false);
    setError("");
    setSelectedLocation(location);
  }, []);
  const { searchText, setSearchText, suggestions, onSubmitSearch, onSelectSuggestion } =
    useWeatherSearch({
      showSearch,
      applyLocation,
      setIsLoading,
      setError,
    });

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetchWeatherByQuery(defaultCity, controller.signal)
      .then((selected) => applyLocation(selected))
      .catch(() => {
        setIsLoading(false);
        applyLocation(fallbackLocation);
      });

    return () => controller.abort();
  }, [defaultCity, applyLocation, fallbackLocation]);

  const selectedTimezone = selectedLocation?.timezone || "UTC";

  const formattedDateLine = useMemo(() => {
    return formatDateLine(now, selectedTimezone);
  }, [now, selectedTimezone]);

  return {
    showSearch,
    setShowSearch,
    searchText,
    setSearchText,
    suggestions,
    selectedLocation,
    weather: selectedLocation.weather,
    isLoading,
    error,
    formattedDateLine,
    onSubmitSearch,
    onSelectSuggestion,
  };
}
