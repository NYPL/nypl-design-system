import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Label from "./Label";

describe("Label Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Label id="label" htmlFor="some-input-id">
        Cupcakes
      </Label>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test with required text", async () => {
    const { container } = render(
      <Label id="label" htmlFor="some-input-id" isRequired>
        Cupcakes
      </Label>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Label", () => {
  it("renders a label element when passed text as children", () => {
    render(
      <Label id="label" htmlFor="some-input-id">
        Cupcakes
      </Label>
    );
    expect(screen.getByText("Cupcakes")).toBeInTheDocument();
  });

  it("renders a label element when passed element as children", () => {
    render(
      <Label id="label" htmlFor="some-input-id">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.getByText("Cupcakes")).toBeInTheDocument();
  });

  it("renders the '(Required)' helper text", () => {
    const { rerender } = render(
      <Label id="label" htmlFor="some-input-id">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.queryByText(/Required/i)).not.toBeInTheDocument();

    rerender(
      <Label id="label" htmlFor="some-input-id" isRequired>
        <span>Cupcakes</span>
      </Label>
    );

    expect(screen.queryByText(/Required/i)).toBeInTheDocument();
  });

  it("Renders the UI snapshot correctly", () => {
    const simple = renderer
      .create(
        <Label id="label" htmlFor="some-input-id">
          Cupcakes
        </Label>
      )
      .toJSON();
    const required = renderer
      .create(
        <Label id="label3" htmlFor="some-input-id" isRequired>
          Cupcakes
        </Label>
      )
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(required).toMatchSnapshot();
  });
});
