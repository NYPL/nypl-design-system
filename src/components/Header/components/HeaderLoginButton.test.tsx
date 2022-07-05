import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";

import HeaderLoginButton from "./HeaderLoginButton";
import { HeaderPatronProvider } from "../context/headerPatronContext";

describe("HeaderLoginButton Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<HeaderLoginButton />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile", async () => {
    const { container } = render(<HeaderLoginButton isMobile />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("HeaderLoginButton", () => {
  describe("Desktop", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      render(<HeaderLoginButton />);

      let dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/log in/i);

      userEvent.click(dropDownButton);

      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/close/i);
      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
    });

    it("focuses on the catalog link when the login is opened and there is no patron name", () => {
      render(<HeaderLoginButton />);

      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const catalogLink = screen.getByRole("link", {
        name: /log into the catalog/i,
      });
      expect(catalogLink).toHaveFocus();
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      render(
        <HeaderPatronProvider patronName="PATRON, JANE A">
          <HeaderLoginButton />
        </HeaderPatronProvider>
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
    });

    it("focuses on the greeting message when the login is opened and there is a patron", () => {
      render(
        <HeaderPatronProvider patronName="PATRON, JANE A">
          <HeaderLoginButton />
        </HeaderPatronProvider>
      );

      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const greetingContainer = screen.getByTestId("patronGreeting");
      expect(greetingContainer).toHaveFocus();
    });
  });

  describe("Mobile", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      render(<HeaderLoginButton isMobile />);

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
    });

    it("focuses on the catalog link when the login is opened and there is no patron name", () => {
      render(<HeaderLoginButton isMobile />);
      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const catalogLink = screen.getByRole("link", {
        name: /log into the catalog/i,
      });
      expect(catalogLink).toHaveFocus();
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      render(
        <HeaderPatronProvider patronName="PATRON, JANE A">
          <HeaderLoginButton isMobile />
        </HeaderPatronProvider>
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
    });

    it("focuses on the greeting message when the login is opened and there is a patron", () => {
      render(
        <HeaderPatronProvider patronName="PATRON, JANE A">
          <HeaderLoginButton isMobile />
        </HeaderPatronProvider>
      );
      const dropDownButton = screen.getByRole("button");

      userEvent.click(dropDownButton);

      const greetingContainer = screen.getByTestId("patronGreeting");
      expect(greetingContainer).toHaveFocus();
    });
  });
});
