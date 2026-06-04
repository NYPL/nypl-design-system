import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import HelperErrorText from "./HelperErrorText";

describe("HelperErrorText Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HelperErrorText text="Text" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test when not rendering", async () => {
    const { container } = render(
      <HelperErrorText isRenderedText={false} text="Text" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HelperErrorText", () => {
  it("should not render an id if none is passed", () => {
    render(<HelperErrorText text="Text" />);
    expect(screen.getByTestId("ds-helperErrorText")).not.toHaveAttribute("id");
  });
  it("renders the text passed", () => {
    const { container } = render(<HelperErrorText text="Text" />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });

  it("renders the text passed as an HTML string", () => {
    render(<HelperErrorText text="<b>This text is bold</b>" />);
    expect(screen.getByText("This text is bold")).toBeInTheDocument();
  });

  it("renders the text passed as HTML", () => {
    render(<HelperErrorText text={<b>This text is bold</b>} />);
    expect(screen.getByText("This text is bold")).toBeInTheDocument();
  });

  it("renders the invalid state", () => {
    const { container, rerender } = render(<HelperErrorText text="Text" />);

    // False by default. Note, this is a custom `data-*` attribute only used
    // for testing the invalid state.
    expect(container.querySelector("div")).toHaveAttribute(
      "data-isinvalid",
      "false"
    );

    rerender(<HelperErrorText isInvalid text="Text" />);
    expect(container.querySelector("div")).toHaveAttribute(
      "data-isinvalid",
      "true"
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(<HelperErrorText id="basic" text="Text" />)
      .toJSON();
    const invalid = renderer
      .create(<HelperErrorText id="invalid" isInvalid text="Text" />)
      .toJSON();
    const withHTMLString = renderer
      .create(
        <HelperErrorText
          id="invalid"
          isInvalid
          text="This helper text <b>contains HTML in the string</b>."
        />
      )
      .toJSON();
    const withHTMLElement = renderer
      .create(
        <HelperErrorText
          id="invalid"
          isInvalid
          text={
            <>
              This helper text <b>contains HTML</b>.
            </>
          }
        />
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <HelperErrorText
          id="chakra"
          text="Text"
          p="20px"
          color="ui.red.primary"
        />
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <HelperErrorText
          aria-atomic={true}
          aria-live="polite"
          data-testid="props"
          id="props"
          text="Text"
        />
      )
      .toJSON();

    expect(basic).toMatchSnapshot();
    expect(invalid).toMatchSnapshot();
    expect(withHTMLString).toMatchSnapshot();
    expect(withHTMLElement).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });

  it("passes a ref to the div element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<HelperErrorText ref={ref} text="Text" />);

    expect(container.querySelector("div")).toBe(ref.current);
  });
});
