import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import HorizontalRule from "./HorizontalRule";

describe("HorizontalRule Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HorizontalRule />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HorizontalRule", () => {
  it("Renders HorizontalRule component", () => {
    render(<HorizontalRule />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("Renders with proper custom class", () => {
    render(<HorizontalRule className="custom-hr" />);
    expect(screen.getByRole("separator")).toHaveAttribute(
      "class",
      "horizontal-rule custom-hr"
    );
  });

  it("Renders with correct width and height values", () => {
    render(
      <HorizontalRule className="custom-hr" width="720px" height="5rem" />
    );

    expect(screen.getByRole("separator")).toHaveAttribute(
      "style",
      "width: 720px; height: 5rem;"
    );
  });

  it("Renders with correct width and height values", () => {
    render(<HorizontalRule className="custom-hr" width="80%" align="left" />);

    expect(screen.getByRole("separator")).toHaveAttribute(
      "style",
      "width: 80%; height: 2px;"
    );
    expect(screen.getByRole("separator")).toHaveAttribute(
      "class",
      "horizontal-rule horizontal-rule--left custom-hr"
    );
  });
});
