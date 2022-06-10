import * as React from "react";
import { render, act } from "@testing-library/react";
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
function setup({ id, items }) {
  let returnVal: any = {};
  function TestComponent() {
    Object.assign(returnVal, useMultiSelect({ multiSelectId: id, items }));
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}
describe("useMultiSelect hook", () => {
  it("should return three functions and a object containing a key items with all currently selectItems", () => {
    const hookReturn = setup({ id: multiSelectId, items });

    expect(typeof hookReturn.onChange).toEqual("function");
    expect(typeof hookReturn.onMixedStateChange).toEqual("function");
    expect(typeof hookReturn.onClear).toEqual("function");
    expect(hookReturn.selectedItems).toEqual({});
  });
  it("should update the selectedItems when the onChange function is called", () => {
    const hookReturn = setup({ id: multiSelectId, items });
    // selectedItems starts empty
    expect(hookReturn.selectedItems).toEqual({});

    act(() => hookReturn.onChange(items[0].id));
    // Add correct id to items array
    expect(hookReturn.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["dogs"] },
    });

    act(() => hookReturn.onChange(items[1].id));
    // Adds second item to the selectedItems
    expect(hookReturn.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["dogs", "cats"] },
    });
  });
  it("should update the selectedItems when the onMixedstateChange function is called", () => {
    const hookReturn = setup({ id: multiSelectId, items });

    // selectedItems starts empty
    expect(hookReturn.selectedItems).toEqual({});

    act(() => hookReturn.onMixedStateChange(items[3].id));
    // Both child items should be in the selectedItems
    expect(hookReturn.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["red", "blue"] },
    });
  });
  it("should return again a empty object of selectedItems when the onClear function is called", () => {
    const hookReturn = setup({ id: multiSelectId, items });

    // selectedItems starts empty
    expect(hookReturn.selectedItems).toEqual({});

    act(() => hookReturn.onMixedStateChange(items[3].id));
    // Both child items should be in selectedItems
    expect(hookReturn.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["red", "blue"] },
    });

    act(() => hookReturn.onChange(items[0].id));
    expect(hookReturn.selectedItems).toEqual({
      "multiselect-hook-test-id": { items: ["red", "blue", "dogs"] },
    });

    act(() => hookReturn.onClear());
    // selectedItems should be reset to empty
    expect(hookReturn.selectedItems).toEqual({});
  });
});
