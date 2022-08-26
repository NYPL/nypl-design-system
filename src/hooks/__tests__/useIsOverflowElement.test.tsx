import { Box } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import React from "react";

import { useIsOverflowElement } from "../useIsOverflowElement";

describe("useIsOverflowElement hook", () => {
  const TestComponentOverflow = ({ overflow = false }) => {
    const { isOverflow, overflowRef } = useIsOverflowElement();
    const styles = overflow
      ? {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "250px",
        }
      : {};

    return (
      <>
        <Box ref={overflowRef} __css={styles}>
          This element will overflow if the text is too long.
        </Box>
        <p>Is the element overflowing? {isOverflow ? "Yes" : "No"}</p>
      </>
    );
  };

  const originalScrollWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "scrollWidth"
  );
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetWidth"
  );

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "scrollWidth",
      originalScrollWidth
    );
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetWidth",
      originalOffsetWidth
    );
  });

  it("returns false if the element it is checking does not overflow its container", () => {
    // Mock these values which are not mocked in jsdom.
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 500,
    });
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 600,
    });

    render(<TestComponentOverflow />);

    // If `isOverflow` from `useIsOverflowElement` returns false,
    // then our test component will render "No".
    const isOverflowing = screen.getByText(/No/i);
    expect(isOverflowing).toBeInTheDocument();
  });

  it("returns true if the element it is checking does overflow its container", async () => {
    // Mock these values which are not mocked in jsdom
    Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
      configurable: true,
      value: 500,
    });
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 400,
    });
    render(<TestComponentOverflow overflow />);

    // If `isOverflow` from `useIsOverflowElement` returns true,
    // then our test component will render "Yes".
    const isOverflowing = await screen.getByText(/Yes/i);
    expect(isOverflowing).toBeInTheDocument();
  });
});
