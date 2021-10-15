import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import HelperErrorText from "./HelperErrorText";

describe("HelperErrorText Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HelperErrorText>Text</HelperErrorText>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HelperErrorText", () => {
  it("renders the text passed", () => {
    render(<HelperErrorText>Text</HelperErrorText>);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });

  it("renders the invalid state", () => {
    const utils = render(<HelperErrorText>Text</HelperErrorText>);

    // False by default. Note, this is a custom `data-*` attribute only used
    // for testing the invalid state.
    expect(screen.getByText("Text")).toHaveAttribute("data-isinvalid", "false");

    utils.rerender(<HelperErrorText isInvalid>Text</HelperErrorText>);
    expect(screen.getByText("Text")).toHaveAttribute("data-isinvalid", "true");
  });

  it("has aria-live and aria-atomic attributes when errored", () => {
    render(<HelperErrorText isInvalid>Text</HelperErrorText>);
    expect(screen.getByText("Text")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByText("Text")).toHaveAttribute("aria-atomic");
  });

  it("accepts an aria-atomic value of false", () => {
    const utils = render(
      <HelperErrorText isInvalid>Static Text</HelperErrorText>
    );
    // The default is "true".
    expect(screen.getByText("Static Text")).toHaveAttribute("aria-atomic");

    utils.rerender(
      <HelperErrorText ariaAtomic={false} isInvalid>
        Static Text
      </HelperErrorText>
    );
    // But the prop accepts false in case only part of the helper text
    // should only be read instead of the whole region.
    expect(screen.getByText("Static Text")).toHaveAttribute(
      "aria-atomic",
      "false"
    );
  });

  it("Renders the UI snapshot correctly", () => {
    const basic = renderer
      .create(<HelperErrorText id="basic">Text</HelperErrorText>)
      .toJSON();
    const invalid = renderer
      .create(
        <HelperErrorText id="invalid" isInvalid>
          Text
        </HelperErrorText>
      )
      .toJSON();
    expect(basic).toMatchSnapshot();
    expect(invalid).toMatchSnapshot();
  });
});
