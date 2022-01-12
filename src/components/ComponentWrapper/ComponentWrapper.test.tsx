import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import ComponentWrapper from "./ComponentWrapper";

/**
 * @NOTE while the component is accessible, whatever is passed as children
 * elements may not be considered accessible. This is up to the developer to
 * make sure to pass accessible elements.
 */
describe("ComponentWrapper Accessibility", () => {
  it("Passes axe accessibility test", async () => {
    const { container } = render(
      <ComponentWrapper
        descriptionText="description text"
        headingText="heading text"
        helperText="helper text"
        id="id"
        invalidText="invalid text"
        isInvalid={false}
      >
        <div>children elements</div>
      </ComponentWrapper>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("Passes axe accessibility test without certain props", async () => {
    const { container } = render(
      <ComponentWrapper id="id">
        <div>children elements</div>
      </ComponentWrapper>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("ComponentWrapper", () => {
  it("renders with different text sections and children elements", () => {
    render(
      <ComponentWrapper
        descriptionText="description text"
        headingText="heading text"
        helperText="helper text"
        id="id"
        invalidText="invalid text"
        isInvalid={false}
      >
        <div>children elements</div>
      </ComponentWrapper>
    );

    expect(screen.getByText("description text")).toBeInTheDocument();
    expect(screen.getByText("heading text")).toBeInTheDocument();
    expect(screen.getByText("helper text")).toBeInTheDocument();
    expect(screen.queryByText("invalid text")).not.toBeInTheDocument();
    expect(screen.getByText("children elements")).toBeInTheDocument();
  });

  it("renders with only its children elements", () => {
    render(
      <ComponentWrapper id="id">
        <div>children elements</div>
      </ComponentWrapper>
    );

    expect(screen.queryByText("description text")).not.toBeInTheDocument();
    expect(screen.queryByText("heading text")).not.toBeInTheDocument();
    expect(screen.queryByText("helper text")).not.toBeInTheDocument();
    expect(screen.queryByText("invalid text")).not.toBeInTheDocument();
    expect(screen.getByText("children elements")).toBeInTheDocument();
  });

  it("renders invalid text in the internal HelperErrorText component", () => {
    const { rerender } = render(
      <ComponentWrapper
        descriptionText="description text"
        headingText="heading text"
        helperText="helper text"
        id="id"
        invalidText="invalid text"
        isInvalid={false}
      >
        <div>children elements</div>
      </ComponentWrapper>
    );

    expect(screen.getByText("helper text")).toBeInTheDocument();
    expect(screen.queryByText("invalid text")).not.toBeInTheDocument();

    rerender(
      <ComponentWrapper
        descriptionText="description text"
        headingText="heading text"
        helperText="helper text"
        id="id"
        invalidText="invalid text"
        isInvalid={true}
      >
        <div>children elements</div>
      </ComponentWrapper>
    );

    expect(screen.queryByText("helper text")).not.toBeInTheDocument();
    expect(screen.getByText("invalid text")).toBeInTheDocument();
  });

  it("Renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(
        <ComponentWrapper
          descriptionText="description text"
          headingText="heading text"
          helperText="helper text"
          id="id"
          invalidText="invalid text"
          isInvalid={false}
        >
          <div>children elements</div>
        </ComponentWrapper>
      )
      .toJSON();
    const onlyWithChildren = renderer
      .create(
        <ComponentWrapper id="id">
          <div>children elements</div>
        </ComponentWrapper>
      )
      .toJSON();
    const isInvalid = renderer
      .create(
        <ComponentWrapper
          descriptionText="description text"
          headingText="heading text"
          helperText="helper text"
          id="id"
          invalidText="invalid text"
          isInvalid={true}
        >
          <div>children elements</div>
        </ComponentWrapper>
      )
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(onlyWithChildren).toMatchSnapshot();
    expect(isInvalid).toMatchSnapshot();
  });
});
