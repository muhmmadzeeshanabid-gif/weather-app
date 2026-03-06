import { useCallback, useEffect, useState } from "react";
import {
  fetchLocationSuggestions,
  fetchWeatherByCoordinates,
  fetchWeatherByQuery,
} from "../../services/api";

const SEARCH_DEBOUNCE_MS = 250;

export default function useWeatherSearch({ showSearch, applyLocation, setIsLoading, setError }) {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const runSearchAndSelect = useCallback(
    async (query) => {
      const trimmed = query.trim();
      if (!trimmed) return;

      setIsLoading(true);
      setError("");
      try {
        const selected = await fetchWeatherByQuery(trimmed);
        setSuggestions([]);
        applyLocation(selected);
      } catch (fetchError) {
        setSuggestions([]);
        setIsLoading(false);
        setError(fetchError.message || "No city found. Try another city or country.");
      }
    },
    [applyLocation, setError, setIsLoading]
  );

  const onSubmitSearch = useCallback(async () => {
    try {
      await runSearchAndSelect(searchText);
      setSearchText("");
    } catch (submitError) {
      setError(submitError.message || "Search failed.");
      setIsLoading(false);
    }
  }, [runSearchAndSelect, searchText, setError, setIsLoading]);

  const onSelectSuggestion = useCallback(
    async (location) => {
      if (!location) return;
      setSearchText("");
      setSuggestions([]);
      setIsLoading(true);
      setError("");
      try {
        const selected = await fetchWeatherByCoordinates(location);
        applyLocation(selected);
      } catch (fetchError) {
        setIsLoading(false);
        setError(fetchError.message || "Unable to load city weather.");
      }
    },
    [applyLocation, setError, setIsLoading]
  );

  useEffect(() => {
    if (!showSearch) return undefined;
    const query = searchText.trim();
    if (query.length < 2) {
      setSuggestions([]);
      return undefined;
    }

    const controller = new AbortController();
    const debounceTimer = setTimeout(async () => {
      try {
        const results = await fetchLocationSuggestions(query, 6, controller.signal);
        setSuggestions(results);
      } catch {
        setSuggestions([]);
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      controller.abort();
      clearTimeout(debounceTimer);
    };
  }, [searchText, showSearch]);

  return {
    searchText,
    setSearchText,
    suggestions,
    onSubmitSearch,
    onSelectSuggestion,
  };
}
