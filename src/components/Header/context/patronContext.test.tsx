import { render, screen } from "@testing-library/react";
import React from "react";

import { PatronContext, PatronProvider } from "./patronContext";

describe("PatronContext", () => {
  const PatronTestComponent = () => {
    const name = React.useContext(PatronContext);
    return <p>{name}</p>;
  };

  it("passes down the patron name value down to its children", () => {
    render(
      <PatronProvider patronName="Tom Nook">
        <PatronTestComponent />
      </PatronProvider>
    );

    expect(screen.getByText("Tom Nook")).toBeInTheDocument();
  });
});
