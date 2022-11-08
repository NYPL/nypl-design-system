import { SelectedItems } from "./../components/MultiSelect/MultiSelect";
import { useState } from "react";

import useMultiSelect from "./useMultiSelect";

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

  return {
    selectedItems,
    setSelectedItems,
    isModalOpen,
    onToggle: setIsModalOpen,
    onChange,
    onMixedStateChange,
    onClear,
    onClearAll,
  };
}
