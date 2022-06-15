import { useState } from "react";
import {
  MultiSelectItem,
  SelectedItems,
} from "../components/MultiSelect/MultiSelect";

interface useMultiSelectProps {
  multiSelectId: string;
  items: MultiSelectItem[];
}

/**
 * The useMultiSelect The hook returns an object containing all the props and state needed to handle the selectedItems.
 * That includes the functions onChange, onClear, onMixedStateChange for handling any changes to the selection of items and the current state of the selection: selectedItems.
 */
export default function useMultiSelect({
  multiSelectId,
  items,
}: useMultiSelectProps) {
  const [selectedItems, setSelectedItems] = useState<SelectedItems | {}>({});

  function handleChange(itemId: string) {
    let itemIds;
    // Check if the id already exists in the state.
    if (selectedItems[multiSelectId] !== undefined) {
      let itemIdExists =
        selectedItems[multiSelectId].items.indexOf(itemId) > -1;
      // Make a copy of the existing items array.
      itemIds = selectedItems[multiSelectId].items.slice();
      // If id exists, remove it from the array.
      if (itemIdExists) {
        itemIds = itemIds.filter((id) => id !== itemId);
      } else {
        // Add it to the array, but modify the copy, not the original.
        itemIds.push(itemId);
      }
    } else {
      itemIds = [];
      itemIds.push(itemId);
    }

    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: itemIds,
      },
    });
  }

  /**
   * handleMixedStateChange is only used for the "dialog" variant. It handles the state for checkbox options with child options.
   * It accepts one argument - the id of the parent checkbox option.
   */
  function handleMixedStateChange(parentId: string) {
    // Build an array of child items.
    let childItems = [];
    items.forEach((item) => {
      // If the parentId is an id within the all items
      if (item.id === parentId) {
        // Push each item into the childItems array
        item.children.forEach((childItem: MultiSelectItem) => {
          childItems.push(childItem.id);
        });
      }
    });

    let newItems;
    // If some items have already been selected
    if (selectedItems[multiSelectId] !== undefined) {
      // If all children of the parent are already selected
      if (
        childItems.every((childItem) =>
          selectedItems[multiSelectId].items.includes(childItem)
        )
      ) {
        // Remove all children from the selectedItems array (unselect all child checkbox options)
        newItems = selectedItems[multiSelectId].items.filter(
          (stateItem) => !childItems.includes(stateItem)
        );
      } else {
        // Else add missing childItems.
        newItems = [
          ...childItems.filter(
            (childItem) =>
              !selectedItems[multiSelectId].items.includes(childItem)
          ),
          ...selectedItems[multiSelectId].items,
        ];
      }
      // If no items have been selected, the childItems will be the only ones added
    } else {
      newItems = childItems;
    }
    // Update selectedItems on state to reflect the new selection
    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: newItems,
      },
    });
  }

  function handleClear() {
    setSelectedItems({});
  }

  return {
    selectedItems,
    onChange: handleChange,
    onMixedStateChange: handleMixedStateChange,
    onClear: handleClear,
  };
}
