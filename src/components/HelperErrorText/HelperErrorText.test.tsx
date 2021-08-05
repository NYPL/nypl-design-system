import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import HelperErrorText from "./HelperErrorText";

describe("HelperErrorText Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <HelperErrorText id="helperTextWithLink" isError={false}>
        Text
      </HelperErrorText>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HelperErrorText", () => {
  it("Renders HelperErrorText", () => {
    render(
      <HelperErrorText id="helperTextWithLink" isError={false}>
        Text
      </HelperErrorText>
    );
    expect(screen.getByText("Text")).toBeInTheDocument();
    expect(screen.getByText("Text")).toHaveAttribute("class", "helper-text");
  });

  it("Has 'error' modifier if error is passed", () => {
    render(
      <HelperErrorText id="helperTextWithLink" isError={true}>
        Text
      </HelperErrorText>
    );
    expect(screen.getByText("Text")).toHaveAttribute(
      "class",
      "helper-text helper-text--error"
    );
  });

  it("Has aria-live and aria-atomic properties when errored", () => {
    render(
      <HelperErrorText id="helperTextWithLink" isError={true}>
        Text
      </HelperErrorText>
    );
    expect(screen.getByText("Text")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByText("Text")).toHaveAttribute("aria-atomic");
  });

  it("Accepts an aria-atomic value of false", () => {
    const utils = render(
      <HelperErrorText id="helperTextWithLink" isError={true}>
        Text
      </HelperErrorText>
    );
    // The default is "true".
    expect(screen.getByText("Text")).toHaveAttribute("aria-atomic");

    utils.rerender(
      <HelperErrorText
        id="helperTextWithLink"
        isError={true}
        ariaAtomic={false}
      >
        <p>
          This is static <span>but this part changes often!</span>
        </p>
      </HelperErrorText>
    );
    // But the prop accepts false in case only part of the helper text
    // should only be read instead of the whole region.
    expect(
      utils.container.querySelector("#helperTextWithLink")
    ).toHaveAttribute("aria-atomic", "false");
  });
});
