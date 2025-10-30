import { useEffect, useState } from "react";

/**
 * Custom React hook to debounce a changing value.
 * Delays updating the value until after a specified time has passed.
 *
 * Example:
 *  const debouncedSearch = useDebounce(search, 300);
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
