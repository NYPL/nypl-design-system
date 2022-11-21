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
