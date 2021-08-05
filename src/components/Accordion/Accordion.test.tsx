import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Accordion from "./Accordion";

describe("Accordion Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Accordion
        id="accordion"
        inputId="accordionBtn"
        accordionLabel="Click to expand"
      >
        <p className="accordion-content">this is the accordion content</p>
      </Accordion>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Accordion", () => {
  it("Renders an input checkbox and label", () => {
    render(
      <Accordion
        id="accordion"
        inputId="accordionBtn"
        accordionLabel="Click to expand"
      >
        <p className="accordion-content">this is the accordion content</p>
      </Accordion>
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByLabelText("Click to expand")).toBeInTheDocument();
  });
});
