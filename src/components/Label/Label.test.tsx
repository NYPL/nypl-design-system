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
    const withChakraProps = renderer
      .create(
        <Label
          id="chakra"
          htmlFor="some-input-id"
          p="20px"
          color="ui.error.primary"
        >
          Cupcakes
        </Label>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Label id="props" htmlFor="some-input-id" data-testid="props">
          Cupcakes
        </Label>
      )
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(optional).toMatchSnapshot();
    expect(required).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
