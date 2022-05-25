import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import renderer from "react-test-renderer";

import MobileNavButton from "./MobileNavButton";

describe("MobileNavButton Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<MobileNavButton />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("MobileNavButton", () => {
  beforeEach(() => {
    render(<MobileNavButton />);
  });

  it("renders a menu button", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Open Navigation");
  });

  it("renders a Close button when clicked", () => {
    const menuBtn = screen.getByRole("button");

    expect(menuBtn).toHaveAttribute("aria-label", "Open Navigation");

    userEvent.click(menuBtn);

    expect(menuBtn).toHaveAttribute("aria-label", "Close Navigation");
  });

  it("renders the mobile navigation menu when clicked", () => {
    const menuBtn = screen.getByRole("button");

    userEvent.click(menuBtn);

    const logo = screen.getByRole("img");
    const navList = screen.getByRole("navigation");
    const links = screen.getAllByRole("link");

    expect(logo).toBeInTheDocument();
    expect(navList).toBeInTheDocument();
    expect(links).toHaveLength(11);
  });

  it("renders the UI snapshot correctly", () => {
    const mobileNavButton = renderer.create(<MobileNavButton />).toJSON();

    expect(mobileNavButton).toMatchSnapshot();
  });
});
