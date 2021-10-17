import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import Icon from "./Icon";
import { IconNames } from "./IconTypes";

describe("Icon Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Icon name={IconNames.Download} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Icon", () => {
  it("consoles a warning if both name and children are passed to Icon", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Icon name={IconNames.Download} decorative={true}>
        <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.526 12.871L.263 1.676 1.737.324 12 11.52 22.263.324l1.474 1.352L13.474 12.87a2 2 0 01-2.948 0z"
          />
        </svg>
      </Icon>
    );
    expect(warn).toHaveBeenCalledWith(
      "Icon accepts either a `name` prop or an `svg` element child, not both."
    );
  });

  it("consoles a warning if both name and children are not passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<Icon />);
    expect(warn).toHaveBeenCalledWith(
      "Pass an icon `name` prop or an SVG child to `Icon` to ensure an icon appears."
    );
  });

  it("renders an icon based on the icon `name` prop", () => {
    const { container } = render(<Icon name={IconNames.Download} />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders an icon based on the child", () => {
    const { container } = render(
      <Icon>
        <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.526 12.871L.263 1.676 1.737.324 12 11.52 22.263.324l1.474 1.352L13.474 12.87a2 2 0 01-2.948 0z"
          />
        </svg>
      </Icon>
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
