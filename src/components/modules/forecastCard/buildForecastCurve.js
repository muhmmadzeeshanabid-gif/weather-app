const DEFAULT_POINT = { x: 0, y: 45 };

export default function buildForecastCurve(temps, options = {}) {
  const { width = 1000, minY = 16, maxY = 74 } = options;

  if (!Array.isArray(temps) || temps.length === 0) {
    return {
      pathD: "",
      startPoint: DEFAULT_POINT,
      endPoint: DEFAULT_POINT,
    };
  }

  if (temps.length === 1) {
    const point = { x: 0, y: (minY + maxY) / 2 };
    return {
      pathD: `M ${point.x} ${point.y}`,
      startPoint: point,
      endPoint: point,
    };
  }

  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);
  const range = maxTemp - minTemp || 1;

  const points = temps.map((temp, index) => {
    const x = (index * width) / (temps.length - 1);
    const ratio = (maxTemp - temp) / range;
    const y = minY + ratio * (maxY - minY);
    return { x, y };
  });

  const pathD = points
    .map((point, index, allPoints) => {
      if (index === 0) return `M ${point.x} ${point.y}`;
      const previous = allPoints[index - 1];
      const controlX = (previous.x + point.x) / 2;
      return `Q ${controlX} ${previous.y}, ${point.x} ${point.y}`;
    })
    .join(" ");

  return {
    pathD,
    startPoint: points[0],
    endPoint: points[points.length - 1],
  };
}
