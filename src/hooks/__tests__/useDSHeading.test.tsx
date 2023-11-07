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
});
