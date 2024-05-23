import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import Text from "./Text";

describe("Text Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Text>Animal Crossing is all that!</Text>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Text", () => {
  it("renders a <p> tag and text", () => {
    render(<Text>Animal Crossing is all that!</Text>);
    expect(
      screen.getByText("Animal Crossing is all that!")
    ).toBeInTheDocument();
  });

  it("throws a warning when no children are passed", () => {
    const warn = jest.spyOn(console, "warn");
    render(<Text></Text>);
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: No children were passed and the `Text` component " +
        "will not render correctly."
    );
  });

  it("throws a warning when isBold is used with size caption", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Text isBold size="caption">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with caption text."
    );
  });

  it("throws a warning when isBold is used with size overline", () => {
    const warn = jest.spyOn(console, "warn");
    const { rerender } = render(
      <Text isBold size="overline1">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with overline text."
    );
    rerender(
      <Text isBold size="overline2">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with overline text."
    );
  });
  it("throws a warning when isBold is used with size subtitle", () => {
    const warn = jest.spyOn(console, "warn");
    const { rerender } = render(
      <Text isBold size="subtitle1">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with subtitle text."
    );
    rerender(
      <Text isBold size="subtitle2">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with subtitle text."
    );
  });
  it("throws a warning when isBold is used with size tag", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Text isBold size="tag">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with tag text."
    );
  });
  it("throws a warning when isBold is used with size mini", () => {
    const warn = jest.spyOn(console, "warn");
    render(
      <Text isBold size="mini">
        test text!
      </Text>
    );
    expect(warn).toHaveBeenCalledWith(
      "NYPL Reservoir Text: The `isBold` prop does not work with mini text."
    );
  });

  it("passes a ref to the div wrapper element", () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Text ref={ref}>Animal Crossing is all that!</Text>
    );

    expect(container.querySelectorAll("p")[0]).toBe(ref.current);
  });

  it("renders the UI snapshot correctly", () => {
    const defaultText = renderer
      .create(<Text id="default-text">Animal Crossing is all that!</Text>)
      .toJSON();
    const body1 = renderer
      .create(<Text size="body1">Animal Crossing is all that!</Text>)
      .toJSON();
    const body2 = renderer
      .create(<Text size="body2">Animal Crossing is all that!</Text>)
      .toJSON();
    const caption = renderer
      .create(<Text size="caption">Animal Crossing is all that!</Text>)
      .toJSON();
    const subtitle1 = renderer
      .create(<Text size="subtitle1">Animal Crossing is all that!</Text>)
      .toJSON();
    const subtitle2 = renderer
      .create(<Text size="subtitle2">Animal Crossing is all that!</Text>)
      .toJSON();
    const overline1 = renderer
      .create(<Text size="overline1">Animal Crossing is all that!</Text>)
      .toJSON();
    const overline2 = renderer
      .create(<Text size="overline2">Animal Crossing is all that!</Text>)
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Text p="20px" color="ui.error.primary">
          Animal Crossing is all that!
        </Text>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(
        <Text data-testid="props" id="html-id">
          Animal Crossing is all that!
        </Text>
      )
      .toJSON();

    expect(defaultText).toMatchSnapshot();
    expect(body1).toMatchSnapshot();
    expect(body2).toMatchSnapshot();
    expect(caption).toMatchSnapshot();
    expect(subtitle1).toMatchSnapshot();
    expect(subtitle2).toMatchSnapshot();
    expect(overline1).toMatchSnapshot();
    expect(overline2).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
