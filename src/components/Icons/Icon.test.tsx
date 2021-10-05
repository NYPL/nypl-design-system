import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import Icon from "./Icon";
import { IconNames } from "./IconTypes";

describe("Icon Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Icon name={IconNames.download} decorative={true} />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Icon", () => {
  it("throws an error if both name and children are passed to Icon", () => {
    expect(() =>
      render(
        <Icon name={IconNames.download} decorative={true}>
          <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.526 12.871L.263 1.676 1.737.324 12 11.52 22.263.324l1.474 1.352L13.474 12.87a2 2 0 01-2.948 0z"
            />
          </svg>
        </Icon>
      )
    ).toThrowError("Icon accepts either a name or children, not both");
  });

  it("renders an icon based on the icon `name` prop", () => {
    const utils = render(<Icon name={IconNames.download} decorative={true} />);
    expect(utils.container.querySelector(".icon")).toBeInTheDocument();
  });

  it("renders an icon based on the child", () => {
    const utils = render(
      <Icon decorative={true}>
        <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.526 12.871L.263 1.676 1.737.324 12 11.52 22.263.324l1.474 1.352L13.474 12.87a2 2 0 01-2.948 0z"
          />
        </svg>
      </Icon>
    );
    expect(utils.container.querySelector(".icon")).toBeInTheDocument();
  });
});
