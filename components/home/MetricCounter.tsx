"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { RetainProductEntry } from "@/lib/portfolio-content";

type MetricCounterProps = {
  metric: RetainProductEntry["stats"][number];
};

type RangeState = {
  end: number;
  start: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");

export default function MetricCounter({ metric }: MetricCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.55, once: true });
  const [numericValue, setNumericValue] = useState(0);
  const [rangeValue, setRangeValue] = useState<RangeState>({ start: 0, end: 0 });

  useEffect(() => {
    if (!isInView || metric.animation.kind === "text") {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      switch (metric.animation.kind) {
        case "int":
          setNumericValue(metric.animation.end * eased);
          break;
        case "decimal":
          setNumericValue(metric.animation.end * eased);
          break;
        case "range":
          setRangeValue({
            start: metric.animation.start * eased,
            end: metric.animation.end * eased,
          });
          break;
      }

      if (elapsed < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isInView, metric]);

  const renderValue = () => {
    switch (metric.animation.kind) {
      case "int":
        return `${numberFormatter.format(Math.round(numericValue))}${metric.animation.suffix ?? ""}`;
      case "decimal":
        return `${numericValue.toFixed(metric.animation.decimals)}${metric.animation.suffix ?? ""}`;
      case "range":
        return `${Math.round(rangeValue.start)}–${Math.round(rangeValue.end)}${metric.animation.suffix ?? ""}`;
      case "text":
        return metric.value;
      default:
        return metric.value;
    }
  };

  return (
    <span ref={ref} className="retain-stat-value">
      {renderValue()}
    </span>
  );
}
