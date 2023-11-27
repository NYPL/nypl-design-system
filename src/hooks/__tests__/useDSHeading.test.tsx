import { render, screen } from "@testing-library/react";
import React from "react";
import Heading from "../../components/Heading/Heading";

import useDSHeading from "../useDSHeading";

describe("useDSHeading hook", () => {
  const TestComponent = ({ incomingTitle }) => {
    const title = useDSHeading({ title: incomingTitle });

    return (
      <div>
        {title}
        <p>paragraph text</p>
      </div>
    );
  };

  it("renders an H2 heading by default when a string is passed", () => {
    render(<TestComponent incomingTitle="This is the heading" />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it("renders the custom heading element when an element is passed", () => {
    const customHeading = <Heading level="h3">Custom H3 Heading</Heading>;
    render(<TestComponent incomingTitle={customHeading} />);

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
  });

  it("logs an warning if an HTML heading element was passed", () => {
    const warn = jest.spyOn(console, "warn");
    const customHeading = <h3>HTML H3 Heading</h3>;
    render(<TestComponent incomingTitle={customHeading} />);

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir useDSHeading: An HTML heading element was passed " +
        "for the `title` or `headingText` prop in a Reservoir component. " +
        "The heading will render without DS-specific styling."
    );
  });

  it(
    "logs a warning and does not render the title if the custom heading is " +
      "not a DS Heading component or an HTML heading element.",
    () => {
      const warn = jest.spyOn(console, "warn");
      const customHeading = <span>This is wrong!</span>;
      render(<TestComponent incomingTitle={customHeading} />);

      const heading = screen.queryByText("This is wrong!");

      expect(heading).not.toBeInTheDocument();
      expect(warn).toHaveBeenCalledWith(
        "NYPL Reservoir useDSHeading: An unsupported heading element was " +
          "passed to the `title` or `headingText` prop in a Reservoir " +
          "component, so that component's title will not be rendered. " +
          "Instead, a DS `Heading` component or an HTML heading element " +
          "should be passed."
      );
    }
  );
});
