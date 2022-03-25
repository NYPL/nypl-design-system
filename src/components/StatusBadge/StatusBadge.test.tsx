import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import StatusBadge from "./StatusBadge";
import { StatusBadgeTypes } from "./StatusBadgeTypes";

describe("StatusBadge Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <StatusBadge>Registration Required</StatusBadge>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("StatusBadge", () => {
  it("renders a status badge and text", () => {
    render(<StatusBadge>Registration Required</StatusBadge>);
    expect(screen.getByText("Registration Required")).toBeInTheDocument();
  });

  it("throws a warning when no children are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<StatusBadge></StatusBadge>);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir StatusBadge: no children were passed."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const low = renderer
      .create(<StatusBadge id="low">Registration Required</StatusBadge>)
      .toJSON();
    const medium = renderer
      .create(
        <StatusBadge id="medium" level={StatusBadgeTypes.Medium}>
          Registration Required
        </StatusBadge>
      )
      .toJSON();
    const high = renderer
      .create(
        <StatusBadge id="high" level={StatusBadgeTypes.High}>
          Registration Required
        </StatusBadge>
      )
      .toJSON();

    expect(low).toMatchSnapshot();
    expect(medium).toMatchSnapshot();
    expect(high).toMatchSnapshot();
  });
});
