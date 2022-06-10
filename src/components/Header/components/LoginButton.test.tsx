import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";

import LoginButton from "./LoginButton";

describe("LoginButton Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<LoginButton patronName="" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile", async () => {
    const { container } = render(<LoginButton isMobile patronName="" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("LoginButton", () => {
  const setIsLoginOpen = jest.fn();

  describe("Desktop", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      const { rerender } = render(
        <LoginButton
          isLoginOpen={false}
          patronName=""
          setIsLoginOpen={setIsLoginOpen}
        />
      );

      let dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/log in/i);

      // Manually open the login dropdown by passing in
      // `isLoginOpen` since that is handled by the
      // parent instead of the component itself.
      rerender(
        <LoginButton
          isLoginOpen={true}
          patronName=""
          setIsLoginOpen={setIsLoginOpen}
        />
      );

      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/close/i);
      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      const { rerender } = render(
        <LoginButton
          isLoginOpen={false}
          patronName="PATRON, JANE A"
          setIsLoginOpen={setIsLoginOpen}
        />
      );

      let dropDownButton = screen.getByRole("button");

      // When logged in, the button displays "My Account".
      expect(dropDownButton).toHaveTextContent(/my account/i);

      rerender(
        <LoginButton
          isLoginOpen
          patronName="PATRON, JANE A"
          setIsLoginOpen={setIsLoginOpen}
        />
      );

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
  });

  describe("Mobile", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      const { rerender } = render(
        <LoginButton
          isLoginOpen={false}
          patronName=""
          setIsLoginOpen={setIsLoginOpen}
        />
      );

      let dropDownButton = screen.getByRole("button");
      // There is no visible text on the button in the mobile view.
      expect(dropDownButton).toHaveAttribute("aria-label", "Log In");

      // Manually open the login dropdown by passing in
      // `isLoginOpen` since that is handled by the
      // parent instead of the component itself.
      rerender(
        <LoginButton
          isLoginOpen={true}
          patronName=""
          setIsLoginOpen={setIsLoginOpen}
        />
      );

      const links = screen.getAllByRole("link");
      dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveTextContent(/close/i);
      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      const { rerender } = render(
        <LoginButton
          isLoginOpen={false}
          patronName="PATRON, JANE A"
          setIsLoginOpen={setIsLoginOpen}
        />
      );

      let dropDownButton = screen.getByRole("button");

      expect(dropDownButton).toHaveAttribute("aria-label", "My Account");

      rerender(
        <LoginButton
          isLoginOpen
          patronName="PATRON, JANE A"
          setIsLoginOpen={setIsLoginOpen}
        />
      );

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
  });
});
