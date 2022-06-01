import * as React from "react";
import { render, screen } from "@testing-library/react";

import Login from "./Login";

describe("Login", () => {
  const setLoginOpen = jest.fn();
  it("renders the logged out UI if no patron name", () => {
    const { rerender } = render(
      <Login loginOpen={false} patronName="" setLoginOpen={setLoginOpen} />
    );

    const dropDownButton = screen.getByRole("button");

    expect(dropDownButton).toHaveTextContent(/log in/i);

    rerender(
      <Login loginOpen={true} patronName="" setLoginOpen={setLoginOpen} />
    );

    const links = screen.getAllByRole("link");

    expect(links.length).toEqual(2);
    expect(links[0]).toHaveTextContent(/log into the catalog/i);
    expect(links[1]).toHaveTextContent(/log into the research catalog/i);
  });
  it("renders the logged in UI if patron name", () => {
    const { rerender } = render(
      <Login
        loginOpen={false}
        patronName="PATRON, JANE A"
        setLoginOpen={setLoginOpen}
      />
    );

    const dropDownButton = screen.getByRole("button");

    expect(dropDownButton).toHaveTextContent(/my account/i);

    rerender(
      <Login
        loginOpen={true}
        patronName="PATRON, JANE A"
        setLoginOpen={setLoginOpen}
      />
    );

    const links = screen.getAllByRole("link");

    expect(links.length).toEqual(3);
    expect(links[0]).toHaveTextContent(/go to the catalog/i);
    expect(links[1]).toHaveTextContent(/go to the research catalog/i);
    expect(links[2]).toHaveTextContent(/log out/i);
  });
});
