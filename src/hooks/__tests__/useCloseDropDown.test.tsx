import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { useCloseDropDown } from "../useCloseDropDown";

describe("useCloseDropDown hook", () => {
  const TestComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    useCloseDropDown(setIsOpen, ref);

    return (
      <div>
        <p>This is the text before the button.</p>
        <div ref={ref}>
          <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
          {isOpen && <div>The drop down is open.</div>}
        </div>
        <p>This is the text after the button.</p>
      </div>
    );
  };

  it("closes a dropdown by clicking on an element outside of its component", () => {
    render(<TestComponent />);
    const element = screen.getByText("This is the text before the button.");

    expect(
      screen.queryByText("The drop down is open.")
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    expect(screen.getByText("The drop down is open.")).toBeInTheDocument();

    // Clicking outside of the dropdown should close it. We mock this by
    // "clicking" on any element outside of the ref. This is done in Testing
    // Library by triggering the `mouseDown` and `mouseUp` events.
    fireEvent.mouseDown(element);
    fireEvent.mouseUp(element);

    expect(
      screen.queryByText("The drop down is open.")
    ).not.toBeInTheDocument();
  });

  it("closes a dropdown when the esc key is pressed", () => {
    render(<TestComponent />);

    expect(
      screen.queryByText("The drop down is open.")
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Toggle"));

    expect(screen.getByText("The drop down is open.")).toBeInTheDocument();

    // Pressing the esc key should close the dropdown.
    // The `fireEvent.keyDown` function *needs* a `domNode` element as its
    // first argument. In this case, we can use the button with `Toggle`
    // text to trigger the `keyDown` event.
    fireEvent.keyDown(screen.getByText("Toggle"), { key: "Escape" });

    expect(
      screen.queryByText("The drop down is open.")
    ).not.toBeInTheDocument();
  });
});
