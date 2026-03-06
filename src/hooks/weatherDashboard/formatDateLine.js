export default function formatDateLine(now, timezone = "UTC") {
  const datePart = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: timezone,
  }).format(now);

  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  }).format(now);

  return `${datePart} - ${timePart}`;
}
