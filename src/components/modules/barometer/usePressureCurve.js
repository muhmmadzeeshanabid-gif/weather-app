import { useMemo } from "react";

export default function usePressureCurve(readings) {
  return useMemo(() => {
    const width = 300;
    const minValue = Math.min(...readings);
    const maxValue = Math.max(...readings);
    const range = maxValue - minValue || 1;

    const points = readings.map((value, index) => {
      const x = (index * width) / (readings.length - 1);
      const y = 12 + ((maxValue - value) / range) * 24;
      return { x, y };
    });

    const pathD = points
      .map((point, index, list) => {
        if (index === 0) return `M ${point.x} ${point.y}`;
        const prev = list[index - 1];
        const controlX = (prev.x + point.x) / 2;
        return `Q ${controlX} ${prev.y}, ${point.x} ${point.y}`;
      })
      .join(" ");

    return { pathD, points };
  }, [readings]);
}
