import { renderHook, act } from "@testing-library/react-hooks";
import useMultiSelect from "../useMultiSelect";

const multiSelectIdOne = "multiselect-hook-test-id-1";
const multiSelectIdTwo = "multiselect-hook-test-id-2";
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
  it("should return five functions and a object containing a key items with all currently selectItems", () => {
    const { result } = renderHook(() => useMultiSelect());
    expect(typeof result.current.onChange).toEqual("function");
    expect(typeof result.current.onMixedStateChange).toEqual("function");
    expect(typeof result.current.onClear).toEqual("function");
    expect(typeof result.current.onClearAll).toEqual("function");
    expect(typeof result.current.setSelectedItems).toEqual("function");
    expect(result.current.selectedItems).toEqual({});
  });
  it("should update the selectedItems when the onChange function is called", () => {
    const { result } = renderHook(() => useMultiSelect());
    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    act(() => result.current.onChange(items[0].id, multiSelectIdOne));
    // Add correct id to items array
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["dogs"] },
    });

    act(() => result.current.onChange(items[1].id, multiSelectIdOne));
    // Adds second item to the selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["dogs", "cats"] },
    });
  });
  it("should update the selectedItems when the onMixedstateChange function is called", () => {
    const { result } = renderHook(() => useMultiSelect());

    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    act(() =>
      result.current.onMixedStateChange(items[3].id, multiSelectIdOne, items)
    );
    // Both child items should be in the selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["red", "blue"] },
    });
  });
  it("should be able to handle multiple MultiSelects", () => {
    const { result } = renderHook(() => useMultiSelect());

    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    act(() =>
      result.current.onMixedStateChange(items[3].id, multiSelectIdOne, items)
    );
    // Both child items should be in the selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["red", "blue"] },
    });
    act(() =>
      result.current.onMixedStateChange(items[3].id, multiSelectIdTwo, items)
    );
    // Both multiSelectIds and child items should be in selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["red", "blue"] },
      "multiselect-hook-test-id-2": { items: ["red", "blue"] },
    });
  });
  it("should remove the selectedItems of the multiSelect passed to the onClear function", () => {
    const { result } = renderHook(() => useMultiSelect());
    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    // Select some items from a MultiSelect
    act(() =>
      result.current.onMixedStateChange(items[3].id, multiSelectIdOne, items)
    );
    // Both child items should be in selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["red", "blue"] },
    });
    // Add select items from different MutliSelect
    act(() =>
      result.current.onMixedStateChange(items[3].id, multiSelectIdTwo, items)
    );
    // Both multiSelectIds and child items should be in selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["red", "blue"] },
      "multiselect-hook-test-id-2": { items: ["red", "blue"] },
    });

    act(() => result.current.onClear(multiSelectIdOne));
    // selectedItems should be reset to empty
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-2": { items: ["red", "blue"] },
    });
  });
  it("should set the selectedItems to the state passed to setSelectedItems and reset the selectedItems to an empty object when onClearAll is called", () => {
    const { result } = renderHook(() => useMultiSelect());
    // selectedItems starts empty
    expect(result.current.selectedItems).toEqual({});

    // Set selectedItems using setSelectedItems
    act(() =>
      result.current.setSelectedItems({
        "multiselect-hook-test-id-1": { items: ["red", "blue"] },
        "multiselect-hook-test-id-2": { items: ["red", "blue"] },
      })
    );
    // Both multiSelectIds and child items should be in selectedItems
    expect(result.current.selectedItems).toEqual({
      "multiselect-hook-test-id-1": { items: ["red", "blue"] },
      "multiselect-hook-test-id-2": { items: ["red", "blue"] },
    });

    act(() => result.current.onClearAll());
    // selectedItems should be reset to empty
    expect(result.current.selectedItems).toEqual({});
  });
});
