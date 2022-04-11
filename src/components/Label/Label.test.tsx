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

  it("renders the optional or required helper text", () => {
    const { rerender } = render(
      <Label id="label" htmlFor="some-input-id">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.queryByText("Optional")).not.toBeInTheDocument();
    expect(screen.queryByText("Required")).not.toBeInTheDocument();

    rerender(
      <Label id="label2" htmlFor="some-input-id" optReqFlag="Optional">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.getByText("Optional")).toBeInTheDocument();
    expect(screen.queryByText("Required")).not.toBeInTheDocument();

    rerender(
      <Label id="label3" htmlFor="some-input-id" optReqFlag="Required">
        <span>Cupcakes</span>
      </Label>
    );
    expect(screen.queryByText("Optional")).not.toBeInTheDocument();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("Logs a warning when there is no `id` passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      // @ts-ignore: Typescript complains when a required prop is not passed, but
      // here we don't want to pass the required prop to make sure the warning appears.
      <Label htmlFor="some-input-id">Cupcakes</Label>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Label: This component's required `id` prop was not passed."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const simple = renderer
      .create(
        <Label id="label" htmlFor="some-input-id">
          Cupcakes
        </Label>
      )
      .toJSON();
    const optional = renderer
      .create(
        <Label id="label2" htmlFor="some-input-id" optReqFlag="Optional">
          Cupcakes
        </Label>
      )
      .toJSON();
    const required = renderer
      .create(
        <Label id="label3" htmlFor="some-input-id" optReqFlag="Required">
          Cupcakes
        </Label>
      )
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(optional).toMatchSnapshot();
    expect(required).toMatchSnapshot();
  });
});
