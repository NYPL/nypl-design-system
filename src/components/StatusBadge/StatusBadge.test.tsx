import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import StatusBadge from "./StatusBadge";

describe("StatusBadge Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <StatusBadge level={"low"}>Registration Required</StatusBadge>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("StatusBadge Test", () => {
  it("Shows status badge", () => {
    render(<StatusBadge level={"low"}>Registration Required</StatusBadge>);
    expect(screen.getByText("Registration Required")).toBeInTheDocument();
  });
  it("Can pass status badge content as child", () => {
    render(<StatusBadge level={"medium"}>Cancelled</StatusBadge>);
    expect(screen.getByText("Cancelled")).toBeInTheDocument();
  });
});
