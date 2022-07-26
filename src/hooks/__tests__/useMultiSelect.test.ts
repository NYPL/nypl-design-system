import { renderHook, act } from "@testing-library/react-hooks";
import useMultiSelect from "../useMultiSelect";

const multiSelectId = "multiselect-hook-test-id";
const items = [
  { id: "dogs", name: "Dogs" },
  { id: "cats", name: "Cats" },
  { id: "cars", name: "Cars" },
  {
    id: "colors",
    name: "Colors",
    children: [
      { id: "red", name: "Red" },
      { id: "blue", name: "Blue" },
    ],
  },
  { id: "plants", name: "Plants" },
  { id: "furniture", name: "Furniture" },
];

describe("useMultiSelect hook", () => {
  it("should return three functions and a object containing a key items with all currently selectItems", () => {
    const { result } = renderHook(() =>
      useMultiSelect({ multiSelectId: multiSelectId, items })
    );
    expect(typeof result.current.onChange).toEqual("function");
    expect(typeof result.current.onMixedStateChange).toEqual("function");
    expect(typeof result.current.onClear).toEqual("function");
    expect(result.current.selectedItems).toEqual({});
  });
  it("should update the selectedItems when the onChange function is called", () => {
    const { result } = renderHook(() =>
      useMultiSelect({ multiSelectId: multiSelectId, items })
    );
    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    act(() => result.current.onChange(items[0].id));
    // Add correct id to items array
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["dogs"] },
    });

    act(() => result.current.onChange(items[1].id));
    // Adds second item to the selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["dogs", "cats"] },
    });
  });
  it("should update the selectedItems when the onMixedstateChange function is called", () => {
    const { result } = renderHook(() =>
      useMultiSelect({ multiSelectId: multiSelectId, items })
    );

    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    act(() => result.current.onMixedStateChange(items[3].id));
    // Both child items should be in the selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["red", "blue"] },
    });
  });
  it("should return again a empty object of selectedItems when the onClear function is called", () => {
    const { result } = renderHook(() =>
      useMultiSelect({ multiSelectId: multiSelectId, items })
    );
    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    act(() => result.current.onMixedStateChange(items[3].id));
    // Both child items should be in selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["red", "blue"] },
    });

    act(() => result.current.onChange(items[0].id));
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["red", "blue", "dogs"] },
    });

    act(() => result.current.onClear());
    // selectedItems should be reset to empty
    expect(result.current.selectedItems).toEqual({});
  });
});
