import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";

import Header from "./Header";

describe("Header Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Header />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

// TODO: These tests do not currently test the mobile web view.
// We need to determine a way of doing this for all responsive
// components, and will add this in at a later date.
describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });
  it("renders a skip navigation", () => {
    const skipNavigation = screen.getAllByRole("navigation")[0];
    const { getByRole } = within(skipNavigation);

    expect(skipNavigation).toBeInTheDocument();
    expect(skipNavigation).toHaveAttribute("aria-label", "Skip Navigation");
    expect(getByRole("list")).toBeInTheDocument();
  });
  it("renders a notification", () => {
    const notification = screen.getByRole("complementary");
    const { getByText } = within(notification);

    expect(notification).toBeInTheDocument();
    expect(getByText(/masks are encouraged/i)).toBeInTheDocument();
  });

  it("renders the NYPL logo", () => {
    const { container } = render(<Header />);

    expect(container.querySelectorAll("svg")[0]).toHaveAttribute(
      "title",
      "NYPL Header Logo"
    );
  });

  it("renders the upper links", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    // The first list is the skip navigation.
    // The second list is the upper navigation.
    const upperList = screen.getAllByRole("list")[1];
    const upperLinks = within(upperList).getAllByRole("listitem");

    expect(upperLinks.length).toEqual(8);
    expect(upperLinks[0]).toHaveTextContent(/log in/i);
    expect(upperLinks[1]).toHaveTextContent(/log into/i);
    expect(upperLinks[7]).toHaveTextContent(/shop/i);
  });

  it("renders the lower links", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    // The first list is the skip navigation.
    // The second list is the upper navigation.
    // The third list is the login list.
    // the fourth list is the lower navigation.
    const lowerList = screen.getAllByRole("list")[3];
    const lowerLinks = within(lowerList).getAllByRole("listitem");

    expect(lowerLinks.length).toEqual(8);
    expect(lowerLinks[0]).toHaveTextContent(/books/i);
    expect(lowerLinks[7]).toHaveTextContent(/search/i);
  });

  it("changes the log in button to a close button on click", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    const upperList = screen.getAllByRole("list")[1];
    const upperLinks = within(upperList).getAllByRole("listitem");

    const logInButton = within(upperLinks[0]).getByRole("button");

    userEvent.click(logInButton);

    expect(upperLinks[0]).toHaveTextContent(/close/i);
  });

  it("renders the horizontal rule", () => {
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const header = renderer.create(<Header />).toJSON();

    expect(header).toMatchSnapshot();
  });
});
