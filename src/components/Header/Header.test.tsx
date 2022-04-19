import * as React from "react";
import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

import Header from "./Header";

describe("HorizontalRule Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<Header />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

// These tests do not currently test the mobile web view.
// We need to determine a way of doing this for all components,
// and will add it in at a later date.
describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
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

    const upperList = screen.getAllByRole("list")[0];
    const upperLinks = within(upperList).getAllByRole("listitem");

    expect(upperLinks.length).toEqual(6);
    expect(upperLinks[0]).toHaveTextContent(/log in/i);
    expect(upperLinks[5]).toHaveTextContent(/shop/i);
  });

  it("renders the lower links", () => {
    // Removes automatically added, unused Chakra toast elements.
    document.getElementById("chakra-toast-portal")?.remove();

    const lowerList = screen.getAllByRole("list")[1];
    const lowerLinks = within(lowerList).getAllByRole("listitem");

    expect(lowerLinks.length).toEqual(8);
    expect(lowerLinks[0]).toHaveTextContent(/books/i);
    expect(lowerLinks[7]).toHaveTextContent(/search/i);
  });

  it("renders the horizontal rule", () => {
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders the UI snapshot correctly", () => {
    const header = renderer.create(<Header />).toJSON();

    expect(header).toMatchSnapshot();
  });
});
