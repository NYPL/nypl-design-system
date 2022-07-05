import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";

import HeaderComponents from "./index";
import Login from "./Login";

describe("Login Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <HeaderComponents.HeaderProvider>
        <Login patronName="" />
      </HeaderComponents.HeaderProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("passes axe accessibility test for mobile", async () => {
    const { container } = render(
      <HeaderComponents.HeaderProvider>
        <Login isMobile patronName="" />
      </HeaderComponents.HeaderProvider>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("Login", () => {
  describe("Desktop", () => {
    it("renders the logged out UI if there is no `patronName` value", () => {
      render(
        <HeaderComponents.HeaderProvider>
          <Login patronName="" />
        </HeaderComponents.HeaderProvider>
      );

      const links = screen.getAllByRole("link");

      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      render(
        <HeaderComponents.HeaderProvider>
          <Login patronName="PATRON, JANE A" />
        </HeaderComponents.HeaderProvider>
      );

      const greetingContainer = screen.getByTestId("patronGreeting");
      const links = screen.getAllByRole("link");

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
      render(
        <HeaderComponents.HeaderProvider>
          <Login isMobile patronName="" />
        </HeaderComponents.HeaderProvider>
      );

      const links = screen.getAllByRole("link");

      expect(links.length).toEqual(2);
      expect(links[0]).toHaveTextContent(/log into the catalog/i);
      expect(links[1]).toHaveTextContent(/log into the research catalog/i);
    });

    it("renders the logged in UI if there is a `patronName` value", () => {
      render(
        <HeaderComponents.HeaderProvider>
          <Login isMobile patronName="PATRON, JANE A" />
        </HeaderComponents.HeaderProvider>
      );

      const greetingContainer = screen.getByTestId("patronGreeting");
      const links = screen.getAllByRole("link");

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
