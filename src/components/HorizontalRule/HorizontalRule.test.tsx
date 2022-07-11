import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
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
    const withChakraProps = renderer
      .create(<HorizontalRule p="20px" color="ui.error.primary" />)
      .toJSON();
    const withOtherProps = renderer
      .create(<HorizontalRule data-testid="props" />)
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(updatedHeight).toMatchSnapshot();
    expect(updatedWidth).toMatchSnapshot();
    expect(alignLeft).toMatchSnapshot();
    expect(alignRight).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the hr element", () => {
    const ref = React.createRef<HTMLDivElement & HTMLHRElement>();
    const { container } = render(<HorizontalRule ref={ref} />);

    expect(container.querySelector("hr")).toBe(ref.current);
  });
});
