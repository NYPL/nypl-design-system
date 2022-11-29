import { renderHook, act } from "@testing-library/react-hooks";
import useFilterBar from "../useFilterBar";

describe("usFilterBar hook", () => {
  it("should return a boolean value isModalOpen, functions onOpen, onClose and onToggle to change the isModalOpen state and all functions from useMultiSelect", () => {
    const { result } = renderHook(() => useFilterBar());
    expect(typeof result.current.onChange).toEqual("function");
    expect(typeof result.current.onMixedStateChange).toEqual("function");
    expect(typeof result.current.onClear).toEqual("function");
    expect(typeof result.current.onOpen).toEqual("function");
    expect(typeof result.current.onClose).toEqual("function");
    expect(typeof result.current.onToggle).toEqual("function");
    expect(typeof result.current.onClearAll).toEqual("function");
    expect(typeof result.current.setSelectedItems).toEqual("function");
    expect(result.current.selectedItems).toEqual({});
    expect(typeof result.current.isModalOpen).toEqual("boolean");
  });
  it("should change the isModalOpen value when onToggle is called", () => {
    const { result } = renderHook(() => useFilterBar());
    // Inital state will be set to false
    expect(result.current.isModalOpen).toBe(false);
    // Toggle state
    act(() => result.current.onToggle());
    // New state
    expect(result.current.isModalOpen).toBe(true);
  });
  it("should change and keep the isModalOpen value as true when onOpen is called", () => {
    const { result } = renderHook(() => useFilterBar());
    // Inital state will be set to false
    expect(result.current.isModalOpen).toBe(false);
    // Set state to true
    act(() => result.current.onOpen());
    // New state
    expect(result.current.isModalOpen).toBe(true);
    // Call onOpen multiple times
    act(() => result.current.onOpen());
    act(() => result.current.onOpen());
    act(() => result.current.onOpen());
    // isModalOpen state is still true
    expect(result.current.isModalOpen).toBe(true);
  });
  it("should change and keep the isModalOpen value as false when onClose is called", () => {
    const { result } = renderHook(() => useFilterBar());
    // Inital state will be set to false
    expect(result.current.isModalOpen).toBe(false);
    // Set state to true
    act(() => result.current.onOpen());
    // Change value to true
    expect(result.current.isModalOpen).toBe(true);
    // Change value back to false
    act(() => result.current.onClose());
    expect(result.current.isModalOpen).toBe(false);
    // Call onClose multiple times
    act(() => result.current.onClose());
    act(() => result.current.onClose());
    act(() => result.current.onClose());
    // isModalOpen state is still false
    expect(result.current.isModalOpen).toBe(false);
  });
});
