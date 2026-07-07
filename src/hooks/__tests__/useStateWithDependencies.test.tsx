import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import useStateWithDependencies from "../useStateWithDependencies";

// This hook allows us to use React's `useState` hook when there are also
// updates from the parent component for the "default" value. This properly
// synchronizes the internal state with passed prop value when the internal
// state value can also be updated through the set function.
describe("useStateWithDependencies hook", () => {
  const TestComponent = ({ value = "red" }) => {
    const [internalValue, setInternalValue] = useStateWithDependencies(value);

    return (
      <>
        <p data-testid="paragraph">{internalValue}</p>
        <button onClick={() => setInternalValue("red")}>red</button>
        <button onClick={() => setInternalValue("green")}>green</button>
        <button onClick={() => setInternalValue("blue")}>blue</button>
      </>
    );
  };

  it("updates its internal value through its `set` function", async () => {
    render(<TestComponent />);

    expect(screen.getByTestId("paragraph")).toHaveTextContent("red");

    await userEvent.click(screen.getByRole("button", { name: "green" }));
    expect(screen.getByTestId("paragraph")).toHaveTextContent("green");

    await userEvent.click(screen.getByRole("button", { name: "blue" }));
    expect(screen.getByTestId("paragraph")).toHaveTextContent("blue");

    await userEvent.click(screen.getByRole("button", { name: "red" }));
    expect(screen.getByTestId("paragraph")).toHaveTextContent("red");
  });

  it("updates its internal value through a prop value", async () => {
    const { rerender } = render(<TestComponent />);

    expect(screen.getByTestId("paragraph")).toHaveTextContent("red");

    await userEvent.click(screen.getByRole("button", { name: "green" }));
    expect(screen.getByTestId("paragraph")).toHaveTextContent("green");

    rerender(<TestComponent value="blue" />);
    expect(screen.getByTestId("paragraph")).toHaveTextContent("blue");

    await userEvent.click(screen.getByRole("button", { name: "green" }));
    expect(screen.getByTestId("paragraph")).toHaveTextContent("green");

    rerender(<TestComponent value="red" />);
    expect(screen.getByTestId("paragraph")).toHaveTextContent("red");
  });
});
