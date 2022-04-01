import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Logo from "./Logo";
import { LogoNames, LogoSizes } from "./LogoTypes";

describe("Logo Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Logo name={LogoNames.NYPLBlack} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Logo", () => {
  it("consoles a warning if both name and children are passed to Logo", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Logo name={LogoNames.NYPLBlack}>
        <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.526 12.871L.263 1.676 1.737.324 12 11.52 22.263.324l1.474 1.352L13.474 12.87a2 2 0 01-2.948 0z"
          />
        </svg>
      </Logo>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Logo: Pass either a `name` prop or an `svg` element child. Do not pass both."
    );
  });

  it("consoles a warning if both name and children are not passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<Logo />);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Logo: Pass a logo `name` prop or an SVG child to " +
        "`Logo` to ensure a logo appears."
    );
  });

  it("consoles a warning if name is not passed and a child is but it's not an SVG element", () => {
    const warn = jest.spyOn(console, "warn");
    render(<Logo>Not an SVG</Logo>);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Logo: An `svg` element must be passed to the `Logo` " +
        "component as its child."
    );
  });

  it("renders a logo based on the logo `name` prop", () => {
    const { container } = render(<Logo name={LogoNames.NYPLBlack} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  // NOTE: the svg logo is dynamically generated by the "svgr" package. At build
  // time, it generate the `title` element but it doesn't generate it for tests.
  // In order to test this, we can check the `title` attribute in the svg
  // element itself. Inspect the `Logo` in Storybook to see the `title` element.
  it("renders a title element", () => {
    const { container, rerender } = render(<Logo name={LogoNames.NYPLBlack} />);
    expect(container.querySelector("svg")).toHaveAttribute(
      "title",
      "logo_nypl_full_black logo"
    );

    rerender(<Logo name={LogoNames.NYPLBlack} title="title content" />);
    expect(container.querySelector("svg")).toHaveAttribute(
      "title",
      "title content"
    );
  });

  it("renders a logo based on the child", () => {
    const { container } = render(
      <Logo>
        <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.526 12.871L.263 1.676 1.737.324 12 11.52 22.263.324l1.474 1.352L13.474 12.87a2 2 0 01-2.948 0z"
          />
        </svg>
      </Logo>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const standard = renderer
      .create(<Logo id="test-logo" name={LogoNames.NYPLBlack} />)
      .toJSON();
    const withCustomSize = renderer
      .create(
        <Logo
          id="test-logo-size"
          name={LogoNames.NYPLBlack}
          size={LogoSizes.Large}
        />
      )
      .toJSON();

    expect(standard).toMatchSnapshot();
    expect(withCustomSize).toMatchSnapshot();
  });
});
