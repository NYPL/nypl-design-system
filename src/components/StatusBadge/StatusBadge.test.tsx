import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import StatusBadge from "./StatusBadge";

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
      "NYPL Reservoir StatusBadge: No children were passed."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const low = renderer
      .create(<StatusBadge id="low">Registration Required</StatusBadge>)
      .toJSON();
    const medium = renderer
      .create(
        <StatusBadge id="medium" level="medium">
          Registration Required
        </StatusBadge>
      )
      .toJSON();
    const high = renderer
      .create(
        <StatusBadge id="high" level="high">
          Registration Required
        </StatusBadge>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <StatusBadge id="chakra" p="20px" color="ui.error.primary">
          Registration Required
        </StatusBadge>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <StatusBadge id="props" data-testid="props">
          Registration Required
        </StatusBadge>
      )
      .toJSON();

    expect(low).toMatchSnapshot();
    expect(medium).toMatchSnapshot();
    expect(high).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
