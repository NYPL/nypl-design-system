import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
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
  it("should not render an id if none is passed", () => {
    render(<StatusBadge>Registration Required</StatusBadge>);
    const badge = screen.getByTestId("ds-statusBadge");
    expect(badge).not.toHaveAttribute("id");
  });

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
    const neutral = renderer
      .create(
        <StatusBadge id="neutral" variant="neutral">
          Neutral type
        </StatusBadge>
      )
      .toJSON();
    const informative = renderer
      .create(
        <StatusBadge id="informative" variant="informative">
          Informative type
        </StatusBadge>
      )
      .toJSON();
    const positive = renderer
      .create(
        <StatusBadge id="positive" variant="positive">
          Positive type
        </StatusBadge>
      )
      .toJSON();
    const negative = renderer
      .create(
        <StatusBadge id="negative" variant="negative">
          Negative type
        </StatusBadge>
      )
      .toJSON();
    const warning = renderer
      .create(
        <StatusBadge id="warning" variant="warning">
          Warning type
        </StatusBadge>
      )
      .toJSON();
    const recommendation = renderer
      .create(
        <StatusBadge id="recommendation" variant="recommendation">
          Recommendation type
        </StatusBadge>
      )
      .toJSON();
    const body1 = renderer
      .create(
        <StatusBadge fontSize="desktop.body.body1" id="body1" variant="neutral">
          Font size body1
        </StatusBadge>
      )
      .toJSON();
    const body2 = renderer
      .create(
        <StatusBadge fontSize="desktop.body.body2" id="body2" variant="neutral">
          Font size body2
        </StatusBadge>
      )
      .toJSON();
    const caption = renderer
      .create(
        <StatusBadge fontSize="desktop.caption" id="caption" variant="neutral">
          Font size caption
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

    expect(neutral).toMatchSnapshot();
    expect(informative).toMatchSnapshot();
    expect(positive).toMatchSnapshot();
    expect(negative).toMatchSnapshot();
    expect(warning).toMatchSnapshot();
    expect(recommendation).toMatchSnapshot();
    expect(body1).toMatchSnapshot();
    expect(body2).toMatchSnapshot();
    expect(caption).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <StatusBadge ref={ref}>Registration Required</StatusBadge>
    );

    expect(container.querySelector("div")).toBe(ref.current);
  });
});
