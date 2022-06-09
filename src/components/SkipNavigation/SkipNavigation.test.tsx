import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import SkipNavigation from "./SkipNavigation";

describe("SkipNavigation Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<SkipNavigation />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Label", () => {
  it("renders a nav element with an unordered list", () => {
    render(<SkipNavigation />);
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Skip Navigation");
    // Chakra renders other lists so we only want the list we
    // created within the nav element.
    const { getByRole } = within(nav);
    expect(getByRole("list")).toBeInTheDocument();
  });

  it("renders two links", () => {
    render(<SkipNavigation />);
    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "#mainContent");
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.nypl.org/accessibility"
    );
  });

  it("renders a custom main link target", () => {
    render(<SkipNavigation target="customId" />);
    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "customId");
  });

  it("Renders the UI snapshot correctly", () => {
    const simple = renderer.create(<SkipNavigation />).toJSON();
    const customTarget = renderer
      .create(<SkipNavigation target="customId" />)
      .toJSON();
    const withChakraProps = renderer
      .create(<SkipNavigation p="20px" color="ui.error.primary" />)
      .toJSON();
    const withOtherProps = renderer
      .create(<SkipNavigation data-testid="props" />)
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(customTarget).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
