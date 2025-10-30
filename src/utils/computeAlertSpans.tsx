export type AlertSpan = {
  start: number;
  end: number;
  duration: number;
};

/**
 * Computes consecutive spans where usage stays above the given threshold.
 * Example:
 *  Input: [100, 320, 340, 290, 100], threshold=300
 *  Output: [{ start: 1, end: 2, duration: 2 }]
 */
export function computeAlertSpans(usage: number[], threshold: number): AlertSpan[] {
  const spans: AlertSpan[] = [];
  let start: number | null = null;

  for (let i = 0; i < usage.length; i++) {
    if (usage[i] > threshold) {
      if (start === null) start = i;
    } else if (start !== null) {
      spans.push({ start, end: i - 1, duration: i - start });
      start = null;
    }
  }

  if (start !== null) {
    spans.push({ start, end: usage.length - 1, duration: usage.length - start });
  }

  return spans;
}
