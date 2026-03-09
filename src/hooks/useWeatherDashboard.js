import { useCallback, useEffect, useMemo, useState } from "react";
import { FALLBACK_LOCATION } from "../data/fallbackLocation";
import { fetchWeatherByCoordinates, fetchWeatherByQuery } from "../services/api";
import formatDateLine from "./weatherDashboard/formatDateLine";
import useLiveClock from "./weatherDashboard/useLiveClock";
import useWeatherSearch from "./weatherDashboard/useWeatherSearch";

const SAVED_LOCATION_KEY = "weather-dashboard:selected-location";
const SAVED_SEARCH_VISIBILITY_KEY = "weather-dashboard:show-search";

function getSavedLocation() {
  if (typeof window === "undefined") return null;

  try {
    const rawLocation = window.localStorage.getItem(SAVED_LOCATION_KEY);
    return rawLocation ? JSON.parse(rawLocation) : null;
  } catch {
    return null;
  }
}

function getSavedSearchVisibility() {
  if (typeof window === "undefined") return false;

  try {
    return window.localStorage.getItem(SAVED_SEARCH_VISIBILITY_KEY) === "true";
  } catch {
    return false;
  }
}

export default function useWeatherDashboard(defaultCity = "Karachi") {
  const [showSearch, setShowSearchState] = useState(() => getSavedSearchVisibility());
  const now = useLiveClock(1000);
  const fallbackLocation = FALLBACK_LOCATION;
  const [selectedLocation, setSelectedLocation] = useState(() => getSavedLocation());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const setShowSearch = useCallback((value) => {
    setShowSearchState((current) => {
      const nextValue = typeof value === "function" ? value(current) : value;

      if (typeof window !== "undefined") {
        window.localStorage.setItem(SAVED_SEARCH_VISIBILITY_KEY, String(nextValue));
      }

      return nextValue;
    });
  }, []);

  const applyLocation = useCallback((location) => {
    if (!location) return;
    setIsLoading(false);
    setError("");
    setSelectedLocation(location);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(SAVED_LOCATION_KEY, JSON.stringify(location));
    }
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

    const loadLocation = async () => {
      const savedLocation = getSavedLocation();

      if (savedLocation?.latitude != null && savedLocation?.longitude != null) {
        return fetchWeatherByCoordinates(savedLocation, controller.signal);
      }

      if (savedLocation?.name) {
        return fetchWeatherByQuery(savedLocation.name, controller.signal);
      }

      return fetchWeatherByQuery(defaultCity, controller.signal);
    };

    loadLocation()
      .then((selected) => applyLocation(selected))
      .catch(() => {
        setIsLoading(false);
        setSelectedLocation((current) => current || fallbackLocation);
      });

    return () => controller.abort();
  }, [defaultCity, applyLocation, fallbackLocation]);

  const resolvedLocation = selectedLocation || fallbackLocation;
  const selectedTimezone = resolvedLocation?.timezone || "UTC";

  const formattedDateLine = useMemo(() => {
    return formatDateLine(now, selectedTimezone);
  }, [now, selectedTimezone]);

  return {
    showSearch,
    setShowSearch,
    searchText,
    setSearchText,
    suggestions,
    selectedLocation: resolvedLocation,
    weather: resolvedLocation.weather,
    isLoading,
    error,
    formattedDateLine,
    onSubmitSearch,
    onSelectSuggestion,
  };
}
