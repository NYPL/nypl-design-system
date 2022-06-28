import { render, screen } from "@testing-library/react";
import React from "react";

import { PatronContext, PatronProvider } from "./patronContext";

describe("PatronContext", () => {
  const PatronTestComponent = () => {
    const name = React.useContext(PatronContext);

    if (!name) {
      return null;
    }

    return <p>The patron name is: {name}</p>;
  };

  it("returns an empty string if no value is passed", () => {
    render(
      <PatronProvider>
        <PatronTestComponent />
      </PatronProvider>
    );

    expect(
      screen.queryByText(/The patron name is: Tom Nook/i)
    ).not.toBeInTheDocument();
  });

  it("passes down the patron name value down to its children", () => {
    render(
      <PatronProvider patronName="Tom Nook">
        <PatronTestComponent />
      </PatronProvider>
    );

    expect(
      screen.getByText(/The patron name is: Tom Nook/i)
    ).toBeInTheDocument();
  });
});
