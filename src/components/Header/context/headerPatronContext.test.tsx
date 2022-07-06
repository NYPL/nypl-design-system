import { render, screen } from "@testing-library/react";
import React from "react";

import {
  HeaderPatronContext,
  HeaderPatronProvider,
} from "./headerPatronContext";

describe("HeaderPatronContext", () => {
  const PatronTestComponent = () => {
    const name = React.useContext(HeaderPatronContext);

    if (!name) {
      return null;
    }

    return <p>The patron name is: {name}</p>;
  };

  it("returns an empty string if no value is passed", () => {
    render(
      <HeaderPatronProvider>
        <PatronTestComponent />
      </HeaderPatronProvider>
    );

    expect(
      screen.queryByText(/The patron name is: Tom Nook/i)
    ).not.toBeInTheDocument();
  });

  it("passes down the patron name value down to its children", () => {
    render(
      <HeaderPatronProvider patronName="Tom Nook">
        <PatronTestComponent />
      </HeaderPatronProvider>
    );

    expect(
      screen.getByText(/The patron name is: Tom Nook/i)
    ).toBeInTheDocument();
  });
});
