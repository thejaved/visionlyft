import { useEffect, useRef } from "react";

/**
 * Custom hook that sets up an interval and cleans it up automatically.
 * @param callback - Function to call on each interval tick.
 * @param delay - Interval delay in milliseconds. Pass null to pause.
 */
function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null) {
      return;
    }

    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
