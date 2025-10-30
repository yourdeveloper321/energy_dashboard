import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AlertForm from "./Alertform"

describe("AlertForm", () => {
  it("renders inputs and saves rule to localStorage", () => {
    render(<AlertForm />);

    const thresholdInput = screen.getByDisplayValue("300");
    const minutesInput = screen.getByDisplayValue("5");
    const saveButton = screen.getByText("Save");

    // Change values
    fireEvent.change(thresholdInput, { target: { value: "400" } });
    fireEvent.change(minutesInput, { target: { value: "3" } });

    fireEvent.click(saveButton);

    const stored = localStorage.getItem("alertRule");
    expect(stored).toContain('"threshold":400');
    expect(stored).toContain('"minutes":3');
  });
});
