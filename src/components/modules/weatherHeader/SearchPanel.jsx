import React from "react";

const SuggestionList = ({ suggestions, onSelectSuggestion }) => {
  if (!suggestions.length) return null;

  return (
    <div className="absolute left-0 right-0 top-[60px] z-20 max-h-60 overflow-y-auto rounded-b-3xl border-x border-b border-white/60 bg-slate-900/85 p-2 backdrop-blur-sm">
      {suggestions.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelectSuggestion(item)}
          className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-white hover:bg-white/15"
        >
          <span>{item.name}</span>
          <span className="text-slate-200/90">
            {item.region ? `${item.region}, ` : ""}
            {item.country}
          </span>
        </button>
      ))}
    </div>
  );
};

const SearchInput = ({ searchText, onSearchTextChange, onSubmitSearch }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/60 bg-sky-900/60 backdrop-blur-sm">
      <input
        className="h-[64px] w-full bg-transparent pl-6 pr-14 text-lg text-white outline-none placeholder:text-slate-100/85 md:text-[16px]"
        type="text"
        placeholder="Search city or country..."
        value={searchText}
        onChange={(event) => onSearchTextChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key !== "Enter") return;
          event.preventDefault();
          event.stopPropagation();
          onSubmitSearch();
        }}
      />
      <button
        type="button"
        onClick={onSubmitSearch}
        className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/20 hover:bg-white/30"
        aria-label="Search city weather"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>
    </div>
  );
};

const SearchPanel = ({
  showSearch,
  searchText,
  onSearchTextChange,
  onSubmitSearch,
  suggestions,
  onSelectSuggestion,
}) => {
  return (
    <div className="relative mx-auto mt-2 w-full max-w-[430px] md:absolute md:left-1/2 md:top-0 md:mt-0 md:-translate-x-1/2">
      {showSearch && (
        <div className="relative">
          <SearchInput
            searchText={searchText}
            onSearchTextChange={onSearchTextChange}
            onSubmitSearch={onSubmitSearch}
          />
          <SuggestionList suggestions={suggestions} onSelectSuggestion={onSelectSuggestion} />
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
