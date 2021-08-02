import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Label from "./Label";

describe("Label Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Label id="label" htmlFor="so-lonely">
        Cupcakes
      </Label>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Label", () => {
  it("Renders a <label> when passed text as children", () => {
    render(
      <Label id="label" htmlFor="so-lonely">
        Cupcakes
      </Label>
    );
    expect(screen.getByText("Cupcakes")).toBeInTheDocument();
  });

  it("Renders a <label> when passed element as children", () => {
    render(
      <Label id="label" htmlFor="so-lonely">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.getByText("Cupcakes")).toBeInTheDocument();
  });

  it("Renders the optional or required helper text", () => {
    const utils = render(
      <Label id="label" htmlFor="so-lonely">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.queryByText("Optional")).not.toBeInTheDocument();

    utils.rerender(
      <Label id="label" htmlFor="so-lonely" optReqFlag="Optional">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.getByText("Optional")).toBeInTheDocument();

    utils.rerender(
      <Label id="label" htmlFor="so-lonely" optReqFlag="Required">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.queryByText("Optional")).not.toBeInTheDocument();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
