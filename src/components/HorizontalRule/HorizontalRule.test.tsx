import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import HorizontalRule from "./HorizontalRule";

describe("HorizontalRule Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HorizontalRule />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HorizontalRule", () => {
  it("renders HorizontalRule component", () => {
    render(<HorizontalRule />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders with proper custom class", () => {
    render(<HorizontalRule className="custom-hr" />);
    const hrClass = screen.getByRole("separator").getAttribute("class");
    expect(hrClass).toContain("custom-hr");
  });

  it("renders with proper custom class", () => {
    const warn = jest.spyOn(console, "warn");
    const { rerender } = render(
      <HorizontalRule className="custom-hr" height="20px" />
    );
    expect(warn).not.toHaveBeenCalledWith(
      "NYPL Reservoir HorizontalRule: For the `height` prop, use a whole number, a `px` " +
        "value, a `em` value, or a `rem` value. Using the default of 2px."
    );

    rerender(<HorizontalRule className="custom-hr" height="20%" />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir HorizontalRule: For the `height` prop, use a whole number, a `px` " +
        "value, a `em` value, or a `rem` value. Using the default of 2px."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const basic = renderer.create(<HorizontalRule />).toJSON();
    const updatedHeight = renderer
      .create(<HorizontalRule height="5rem" />)
      .toJSON();
    const updatedWidth = renderer
      .create(<HorizontalRule width="720px" />)
      .toJSON();
    const alignLeft = renderer.create(<HorizontalRule align="left" />).toJSON();
    const alignRight = renderer
      .create(<HorizontalRule align="right" />)
      .toJSON();
    expect(basic).toMatchSnapshot();
    expect(updatedHeight).toMatchSnapshot();
    expect(updatedWidth).toMatchSnapshot();
    expect(alignLeft).toMatchSnapshot();
    expect(alignRight).toMatchSnapshot();
  });
});
