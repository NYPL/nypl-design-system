import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import SkipNav from "./SkipNav";

describe("SkipNav Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<SkipNav />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Label", () => {
  it("renders a nav element with an unordered list", () => {
    render(<SkipNav />);
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Skip Navigation");
    // Chakra renders other lists so we only want the list we
    // created within the nav element.
    const { getByRole } = within(nav);
    expect(getByRole("list")).toBeInTheDocument();
  });

  it("renders two links", () => {
    render(<SkipNav />);
    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "#mainContent");
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.nypl.org/accessibility"
    );
  });

  it("renders a custom main link target", () => {
    render(<SkipNav target="customId" />);
    const links = screen.getAllByRole("link");

    expect(links[0]).toHaveAttribute("href", "customId");
  });

  it("Renders the UI snapshot correctly", () => {
    const simple = renderer.create(<SkipNav />).toJSON();
    const customTarget = renderer
      .create(<SkipNav target="customId" />)
      .toJSON();
    const withChakraProps = renderer
      .create(<SkipNav p="20px" color="ui.error.primary" />)
      .toJSON();
    const withOtherProps = renderer
      .create(<SkipNav data-testid="props" />)
      .toJSON();

    expect(simple).toMatchSnapshot();
    expect(customTarget).toMatchSnapshot();
    expect(withChakraProps).toMatchSnapshot();
    expect(withOtherProps).toMatchSnapshot();
  });
});
