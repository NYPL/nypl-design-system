import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Text from "./Text";
import { TextDisplaySizes } from "./TextTypes";

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
      "The Text component has no children and will not render correctly."
    );
  });

  it("renders the UI snapshot correctly", () => {
    const defaultText = renderer
      .create(<Text>Animal Crossing is all that!</Text>)
      .toJSON();
    const caption = renderer
      .create(
        <Text displaySize={TextDisplaySizes.Caption}>
          Animal Crossing is all that!
        </Text>
      )
      .toJSON();
    const tag = renderer
      .create(
        <Text displaySize={TextDisplaySizes.Tag}>
          Animal Crossing is all that!
        </Text>
      )
      .toJSON();
    const mini = renderer
      .create(
        <Text displaySize={TextDisplaySizes.Mini}>
          Animal Crossing is all that!
        </Text>
      )
      .toJSON();
    const withChakraProps = renderer
      .create(
        <Text p="20px" color="ui.error.primary">
          Animal Crossing is all that!
        </Text>
      )
      .toJSON();
    const withOtherProps = renderer
      .create(<Text data-testid="props">Animal Crossing is all that!</Text>)
      .toJSON();

    expect(defaultText).toMatchSnapshot();
    expect(caption).toMatchSnapshot();
    expect(tag).toMatchSnapshot();
    expect(mini).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
