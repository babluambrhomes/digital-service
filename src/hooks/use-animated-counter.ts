"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useAnimatedCounter(target: number, suffix: string) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const isDecimal = target % 1 !== 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(
          isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start)
        );
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return { count: `${count}${suffix}`, ref };
}
