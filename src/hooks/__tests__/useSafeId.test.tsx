import { renderHook } from "@testing-library/react-hooks";
import React from "react";

import { useSafeId } from "../useSafeId";
import * as utils from "../../utils/utils";

const sanitizeStringSpy = jest.spyOn(utils, "sanitizeString");

describe("useSafeId", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns the provided id if passed", () => {
    const { result } = renderHook(() => useSafeId("custom-id"));
    expect(result.current).toBe("custom-id");
  });

  it("generates and sanitizes an id if it's not provided", () => {
    // Mock useId to return ":r3:"
    jest.spyOn(React, "useId").mockReturnValue(":r3:");

    const { result } = renderHook(() => useSafeId());

    // Make sure the internal function is called.
    expect(sanitizeStringSpy).toHaveBeenCalledWith(":r3:");
    // The end result should be sanitized.
    expect(result.current).toBe("-r3-");
  });
});
