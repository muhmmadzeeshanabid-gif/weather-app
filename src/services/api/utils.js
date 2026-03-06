export function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round((Number(value) || 0) * factor) / factor;
}

export function normalizeWind(value) {
  return round(Number(value) || 0, 1);
}

export function formatHourLabel(isoTime, timezone, index) {
  if (index === 0) return "Now";
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: timezone,
    }).format(new Date(isoTime));
  } catch {
    return isoTime.slice(11, 16);
  }
}

export function formatWeekday(dateISO, timezone) {
  try {
    return new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: timezone })
      .format(new Date(dateISO))
      .toUpperCase();
  } catch {
    return "DAY";
  }
}

export function getQueryString(params) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, value);
  });
  return searchParams.toString();
}
