import { renderHook, act } from "@testing-library/react-hooks";
import useFilterBar from "../useFilterBar";

// const multiSelectId = "filterbar-hook-test-id";
// const items = [
//   { id: "dogs", name: "Dogs" },
//   { id: "cats", name: "Cats" },
//   { id: "cars", name: "Cars" },
//   {
//     id: "colors",
//     name: "Colors",
//     children: [
//       { id: "red", name: "Red" },
//       { id: "blue", name: "Blue" },
//     ],
//   },
//   { id: "plants", name: "Plants" },
//   { id: "furniture", name: "Furniture" },
// ];

describe("useMultiSelect hook", () => {
  it("should return a boolean value isModalOpen, a funtion onToggle to change the boolean and all functions from useMultiSelect", () => {
    const { result } = renderHook(() => useFilterBar());
    expect(typeof result.current.onChange).toEqual("function");
    expect(typeof result.current.onMixedStateChange).toEqual("function");
    expect(typeof result.current.onClear).toEqual("function");
    expect(typeof result.current.onToggle).toEqual("function");
    expect(typeof result.current.onClearAll).toEqual("function");
    expect(typeof result.current.setSelectedItems).toEqual("function");
    expect(result.current.selectedItems).toEqual({});
    expect(typeof result.current.isModalOpen).toEqual("boolean");
  });
  it("should change the boolena value when onToggle is calles", () => {
    const { result } = renderHook(() => useFilterBar());
    // Inital state will be set to false
    expect(result.current.isModalOpen).toBe(false);
    // Toggle state
    act(() => result.current.onToggle(!result.current.isModalOpen));
    // New state
    expect(result.current.isModalOpen).toBe(true);
  });
});
