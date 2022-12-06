import { useState } from "react";

import { SelectedItems } from "./../components/MultiSelect/MultiSelect";
import useMultiSelect from "./useMultiSelect";

/**
 * The `useFilterBar` hook returns an object containing all the functions and state needed to control a FilterBar component and its child components.
 * The returned object includes the functions `onChange`, `onMixedStateChange`, `onClear` and `onClearAll` for handling any changes to the selectedItems object,
 * a `setSelectedItems` function that allows to set an initial selectedItems state
 * and the current state of the selection: `selectedItems`.
 * In addition it returns all props to handle a filter module overlay for the mobile view: a boolean value representing the current module state: `isModalOpen`,
 * an `onToggle` function to change the module state or alternatively `onOpen` and `onClose` functions.
 */

export default function useFilterBar(initialState?: SelectedItems) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    selectedItems,
    setSelectedItems,
    onChange,
    onMixedStateChange,
    onClear,
    onClearAll,
  } = useMultiSelect(initialState);

  const handleToggle = () => setIsModalOpen(!isModalOpen);

  return {
    selectedItems,
    setSelectedItems,
    isModalOpen,
    onOpen: () => setIsModalOpen(true),
    onClose: () => setIsModalOpen(false),
    onToggle: handleToggle,
    onChange,
    onMixedStateChange,
    onClear,
    onClearAll,
  };
}
