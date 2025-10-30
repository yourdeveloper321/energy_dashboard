import { describe, it, expect } from "vitest";
import { computeStats } from "./computeStats";

describe("computeStats", () => {
  it("should calculate min, max and avg correctly", () => {
    const result = computeStats([100, 200, 300]);
    expect(result.min).toBe(100);
    expect(result.max).toBe(300);
    expect(result.avg).toBeCloseTo(200);
  });
});
