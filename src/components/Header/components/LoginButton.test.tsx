import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import ReactGa from "react-ga";

import HeaderComponents from "./index";
import LoginButton from "./LoginButton";
import gaUtils from "../utils/googleAnalyticsUtils";

gaUtils.initialize({ testMode: true }, false);

describe("LoginButton Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<LoginButton />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile", async () => {
    const { container } = render(<LoginButton isMobile />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("LoginButton", () => {
  describe("Desktop", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      render(<LoginButton />);

      let dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/log in/i);

      userEvent.click(dropDownButton);

      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/close/i);
      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
      // The first call is the initializing call.
      // The second call is what we want.
      expect(ReactGa.testModeAPI.calls[1]).toEqual([
        "send",
        {
          eventCategory: "Global Header",
          eventAction: "Log In",
          eventLabel: "MyNyplButton - Open",
          hitType: "event",
        },
      ]);
    });

    it("focuses on the catalog link when the login is opened and there is no patron name", () => {
      render(<LoginButton />);

      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const catalogLink = screen.getByRole("link", {
        name: /log into the catalog/i,
      });
      expect(catalogLink).toHaveFocus();
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      render(
        <HeaderComponents.PatronProvider patronName="PATRON, JANE A">
          <LoginButton />
        </HeaderComponents.PatronProvider>
      );

      let dropDownButton = screen.getByRole("button");

      // When logged in, the button displays "My Account".
      expect(dropDownButton).toHaveTextContent(/my account/i);

      userEvent.click(dropDownButton);

      const greetingContainer = screen.getByTestId("patronGreeting");
      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/close/i);
      expect(greetingContainer).toBeInTheDocument();
      expect(
        within(greetingContainer).getByText(/you are logged in/i)
      ).toBeInTheDocument();
      expect(
        within(greetingContainer).getByText(/patron, jane a/i)
      ).toBeInTheDocument();
      expect(links.length).toEqual(3);
      expect(links[0]).toHaveTextContent(/go to the catalog/i);
      expect(links[1]).toHaveTextContent(/go to the research catalog/i);
      expect(links[2]).toHaveTextContent(/log out/i);
      // The fourth call is the click event for this test.
      expect(ReactGa.testModeAPI.calls[3]).toEqual([
        "send",
        {
          eventCategory: "Global Header",
          eventAction: "My Account",
          eventLabel: "MyNyplButton - Open",
          hitType: "event",
        },
      ]);
    });

    it("focuses on the greeting message when the login is opened and there is a patron", () => {
      render(
        <HeaderComponents.PatronProvider patronName="PATRON, JANE A">
          <LoginButton />
        </HeaderComponents.PatronProvider>
      );

      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const greetingContainer = screen.getByTestId("patronGreeting");
      expect(greetingContainer).toHaveFocus();
    });
  });

  describe("Mobile", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      render(<LoginButton isMobile />);

      let dropDownButton = screen.getByRole("button");
      // There is no visible text on the button in the mobile view.
      expect(dropDownButton).toHaveAttribute("aria-label", "Log In");

      userEvent.click(dropDownButton);

      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveAttribute("aria-label", "Close");
      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
      // The sixth call is the click event for this test.
      expect(ReactGa.testModeAPI.calls[5]).toEqual([
        "send",
        {
          eventCategory: "Global Header",
          eventAction: "Click",
          eventLabel: "Mobile clickLogIn",
          hitType: "event",
        },
      ]);
    });

    it("focuses on the catalog link when the login is opened and there is no patron name", () => {
      render(<LoginButton isMobile />);
      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const catalogLink = screen.getByRole("link", {
        name: /log into the catalog/i,
      });
      expect(catalogLink).toHaveFocus();
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      render(
        <HeaderComponents.PatronProvider patronName="PATRON, JANE A">
          <LoginButton isMobile />
        </HeaderComponents.PatronProvider>
      );

      let dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveAttribute("aria-label", "My Account");

      userEvent.click(dropDownButton);

      const greetingContainer = screen.getByTestId("patronGreeting");
      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveAttribute("aria-label", "Close");
      expect(greetingContainer).toBeInTheDocument();
      expect(
        within(greetingContainer).getByText(/you are logged in/i)
      ).toBeInTheDocument();
      expect(
        within(greetingContainer).getByText(/patron, jane a/i)
      ).toBeInTheDocument();
      expect(links.length).toEqual(3);
      expect(links[0]).toHaveTextContent(/go to the catalog/i);
      expect(links[1]).toHaveTextContent(/go to the research catalog/i);
      expect(links[2]).toHaveTextContent(/log out/i);
      // The eighth call is the click event for this test.
      expect(ReactGa.testModeAPI.calls[7]).toEqual([
        "send",
        {
          eventCategory: "Global Header",
          eventAction: "Click",
          eventLabel: "Mobile clickMyAccount",
          hitType: "event",
        },
      ]);
    });

    it("focuses on the greeting message when the login is opened and there is a patron", () => {
      render(
        <HeaderComponents.PatronProvider patronName="PATRON, JANE A">
          <LoginButton isMobile />
        </HeaderComponents.PatronProvider>
      );
      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const greetingContainer = screen.getByTestId("patronGreeting");
      expect(greetingContainer).toHaveFocus();
    });
  });
});
