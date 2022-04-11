import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import ProgressIndicator from "./ProgressIndicator";
import { ProgressIndicatorTypes } from "./ProgressIndicatorTypes";

describe("ProgressIndicator Accessibility", () => {
  it("passes axe accessibility for linear and circular types", async () => {
    const linearUtils = render(
      <ProgressIndicator
        id="progressIndicatorLinear"
        labelText="Linear"
        value={50}
      />
    );
    const circularUtils = render(
      <ProgressIndicator
        id="progressIndicatorCircular"
        labelText="Circular"
        value={50}
        indicatorType={ProgressIndicatorTypes.Circular}
      />
    );
    expect(await axe(linearUtils.container)).toHaveNoViolations();
    expect(await axe(circularUtils.container)).toHaveNoViolations();
  });

  it("passes axe accessibility for linear and circular types without labels", async () => {
    const linearUtils = render(
      <ProgressIndicator
        id="progressIndicatorLinear"
        labelText="Linear"
        value={50}
        showLabel={false}
      />
    );
    const circularUtils = render(
      <ProgressIndicator
        id="progressIndicatorCircular"
        labelText="Circular"
        value={50}
        indicatorType={ProgressIndicatorTypes.Circular}
        showLabel={false}
      />
    );
    expect(await axe(linearUtils.container)).toHaveNoViolations();
    expect(await axe(circularUtils.container)).toHaveNoViolations();
  });

  it("passes axe accessibility for linear and circular types for indeterminate state", async () => {
    const linearUtils = render(
      <ProgressIndicator
        id="progressIndicatorLinear"
        labelText="Linear"
        value={50}
        isIndeterminate
      />
    );
    const circularUtils = render(
      <ProgressIndicator
        id="progressIndicatorCircular"
        labelText="Circular"
        value={50}
        indicatorType={ProgressIndicatorTypes.Circular}
        isIndeterminate
      />
    );
    expect(await axe(linearUtils.container)).toHaveNoViolations();
    expect(await axe(circularUtils.container)).toHaveNoViolations();
  });

  it("passes axe accessibility for linear and circular types for dark mode", async () => {
    const linearUtils = render(
      <ProgressIndicator
        id="progressIndicatorLinear"
        labelText="Linear"
        value={50}
        darkMode
      />
    );
    const circularUtils = render(
      <ProgressIndicator
        id="progressIndicatorCircular"
        labelText="Circular"
        value={50}
        indicatorType={ProgressIndicatorTypes.Circular}
        darkMode
      />
    );
    expect(await axe(linearUtils.container)).toHaveNoViolations();
    expect(await axe(circularUtils.container)).toHaveNoViolations();
  });
});

describe("ProgressIndicator", () => {
  it("renders a label and a progressbar for the linear type", () => {
    render(
      <ProgressIndicator id="progressIndicator" labelText="Linear" value={50} />
    );
    expect(screen.getByLabelText("Linear")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders a label, a progressbar, and an svg for the circular type", () => {
    const { container } = render(
      <ProgressIndicator
        id="progressIndicator"
        labelText="Circular"
        indicatorType={ProgressIndicatorTypes.Circular}
        value={50}
      />
    );
    expect(screen.getByLabelText("Circular")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the appropriate aria atttribute when the label is hidden", () => {
    render(
      <ProgressIndicator
        id="progressIndicator"
        labelText="Linear"
        value={50}
        showLabel={false}
      />
    );
    expect(screen.getByLabelText("Linear")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-label",
      "Linear"
    );
  });

  it("renders the value passed", () => {
    const { rerender } = render(
      <ProgressIndicator id="progressIndicator" labelText="Linear" value={50} />
    );
    expect(screen.getByText("50%")).toBeInTheDocument();

    rerender(
      <ProgressIndicator id="progressIndicator" labelText="Linear" value={89} />
    );
    expect(screen.getByText("89%")).toBeInTheDocument();

    rerender(
      <ProgressIndicator id="progressIndicator" labelText="Linear" value={4} />
    );
    expect(screen.getByText("4%")).toBeInTheDocument();
  });

  it("logs a warning if a value less than 0 is passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <ProgressIndicator
        id="progressIndicator"
        labelText="Linear"
        value={-20}
      />
    );

    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir ProgressIndicator: An invalid value was passed for the" +
        " `value` prop, so 0 will be used. A valid value should be a number" +
        " between 0 and 100."
    );
  });

  it("logs a warning if a value more than 100 is passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <ProgressIndicator
        id="progressIndicator"
        labelText="Linear"
        value={150}
      />
    );

    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir ProgressIndicator: An invalid value was passed for the" +
        " `value` prop, so 0 will be used. A valid value should be a number" +
        " between 0 and 100."
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const linearBasic = renderer
      .create(
        <ProgressIndicator id="linearBasic" labelText="Linear" value={50} />
      )
      .toJSON();
    const circularBasic = renderer
      .create(
        <ProgressIndicator
          id="circularBasic"
          labelText="Circular"
          value={50}
          indicatorType={ProgressIndicatorTypes.Circular}
        />
      )
      .toJSON();
    const linearNoLabel = renderer
      .create(
        <ProgressIndicator
          id="linearNoLabel"
          labelText="Linear"
          value={50}
          showLabel={false}
        />
      )
      .toJSON();
    const circularNoLabel = renderer
      .create(
        <ProgressIndicator
          id="circularNoLabel"
          labelText="Circular"
          value={50}
          indicatorType={ProgressIndicatorTypes.Circular}
          showLabel={false}
        />
      )
      .toJSON();
    const linearIndeterminate = renderer
      .create(
        <ProgressIndicator
          id="linearIndeterminate"
          labelText="Linear"
          value={50}
          isIndeterminate
        />
      )
      .toJSON();
    const circularIndeterminate = renderer
      .create(
        <ProgressIndicator
          id="circularIndeterminate"
          labelText="Circular"
          value={50}
          indicatorType={ProgressIndicatorTypes.Circular}
          isIndeterminate
        />
      )
      .toJSON();
    const linearDarkMode = renderer
      .create(
        <ProgressIndicator
          id="linearDarkMode"
          labelText="Linear"
          value={50}
          darkMode
        />
      )
      .toJSON();
    const circularDarkMode = renderer
      .create(
        <ProgressIndicator
          id="circularDarkMode"
          labelText="Circular"
          value={50}
          indicatorType={ProgressIndicatorTypes.Circular}
          darkMode
        />
      )
      .toJSON();

    expect(linearBasic).toMatchSnapshot();
    expect(circularBasic).toMatchSnapshot();
    expect(linearNoLabel).toMatchSnapshot();
    expect(circularNoLabel).toMatchSnapshot();
    expect(linearIndeterminate).toMatchSnapshot();
    expect(circularIndeterminate).toMatchSnapshot();
    expect(linearDarkMode).toMatchSnapshot();
    expect(circularDarkMode).toMatchSnapshot();
  });
});
