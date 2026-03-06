const readWind = (value) => {
  const parsed = Number.parseFloat(String(value || "").replace(/[^\d.]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
};

const pickBestSlot = (timeline) => {
  return timeline.reduce((best, slot) => {
    const score = Math.abs(slot.temp - 24) + readWind(slot.wind) * 0.35;
    if (!best || score < best.score) {
      return { ...slot, score };
    }
    return best;
  }, null);
};

export default function analyzeTimeline(timeline) {
  const normalizedTimeline = Array.isArray(timeline) ? timeline : [];

  if (normalizedTimeline.length === 0) {
    return {
      bestSlot: { temp: 0, time: "N/A", wind: "0km/h" },
      warmestSlot: { temp: 0 },
      coolestSlot: { temp: 0 },
      trendLabel: "Stable later",
    };
  }

  const bestSlot = pickBestSlot(normalizedTimeline) || normalizedTimeline[0];
  const warmestSlot = normalizedTimeline.reduce(
    (best, slot) => (slot.temp > best.temp ? slot : best),
    normalizedTimeline[0]
  );
  const coolestSlot = normalizedTimeline.reduce(
    (best, slot) => (slot.temp < best.temp ? slot : best),
    normalizedTimeline[0]
  );
  const trendLabel =
    normalizedTimeline[normalizedTimeline.length - 1]?.temp > normalizedTimeline[0]?.temp
      ? "Warming later"
      : "Cooling later";

  return {
    bestSlot,
    warmestSlot,
    coolestSlot,
    trendLabel,
  };
}
