import { useState } from "react";

import useMultiSelect from "./useMultiSelect";

export default function useFilterBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedItems, onChange, onMixedStateChange, onClear, onClearAll } =
    useMultiSelect();

  return {
    selectedItems,
    isModalOpen,
    onToggle: setIsModalOpen,
    onChange,
    onMixedStateChange,
    onClear,
    onClearAll,
  };
}
