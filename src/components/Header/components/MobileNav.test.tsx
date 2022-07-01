import { render, screen, within } from "@testing-library/react";

import { axe } from "jest-axe";
import * as React from "react";
import ReactGa from "react-ga";
import renderer from "react-test-renderer";

import MobileNav from "./MobileNav";
import gaUtils from "../utils/googleAnalyticsUtils";

gaUtils.initialize({ testMode: true }, false);

describe("MobileNav Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<MobileNav />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("MobileNav", () => {
  beforeEach(() => {
    render(<MobileNav />);
  });

  it("renders the NYPL logo", () => {
    const logo = screen.getByRole("img");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("title", "NYPL Header Logo");
  });

  it("renders a nav list", () => {
    const navList = screen.getByRole("navigation");
    const links = within(navList).getAllByRole("link");

    expect(links).toHaveLength(7);
    expect(links[0]).toHaveTextContent("Books/Music/Movies");
    expect(links[1]).toHaveTextContent("Research");
    expect(links[2]).toHaveTextContent("Education");
    expect(links[3]).toHaveTextContent("Events");
    expect(links[4]).toHaveTextContent("Connect");
    expect(links[5]).toHaveTextContent("Give");
    expect(links[6]).toHaveTextContent("Get Help");

    links.forEach((link) => link.click());
    // Spot checking GA calls.
    expect(ReactGa.testModeAPI.calls[1]).toEqual([
      "send",
      {
        eventCategory: "Global Header",
        eventAction: "Go to...",
        eventLabel: "Books/Music/Movies",
        hitType: "event",
      },
    ]);
    expect(ReactGa.testModeAPI.calls[5]).toEqual([
      "send",
      {
        eventCategory: "Global Header",
        eventAction: "Go to...",
        eventLabel: "Connect",
        hitType: "event",
      },
    ]);
  });

  it("renders the bottom links", () => {
    const bottomGrid = screen.getByTestId("bottomLinks");
    const links = within(bottomGrid).getAllByRole("link");

    expect(links).toHaveLength(4);
    expect(links[0]).toHaveTextContent("Get a Library Card");
    expect(links[1]).toHaveTextContent("Get Email Updates");
    expect(links[2]).toHaveTextContent("Shop NYPL");
    expect(links[3]).toHaveTextContent("Donate");

    links.forEach((link) => link.click());
    // Spot checking GA calls.
    expect(ReactGa.testModeAPI.calls[8]).toEqual([
      "send",
      {
        eventCategory: "Global Header",
        eventAction: "Click",
        eventLabel: "Mobile Bottom Buttons - Library Card",
        hitType: "event",
      },
    ]);
    expect(ReactGa.testModeAPI.calls[10]).toEqual([
      "send",
      {
        eventCategory: "Global Header",
        eventAction: "Click",
        eventLabel: "Mobile Bottom Buttons - Shop NYPL",
        hitType: "event",
      },
    ]);
  });

  it("renders the UI snapshot correctly", () => {
    const mobileNav = renderer.create(<MobileNav />).toJSON();

    expect(mobileNav).toMatchSnapshot();
  });
});
