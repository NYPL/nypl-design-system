import { useState } from "react";
import { MultiSelectItem, SelectedItems } from "./MultiSelectTypes";

export default function useMultiSelect(multiSelectId, items) {
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

  function handleMixedStateChange(parentId: string) {
    // Build an array of child items.
    let childItems = [];
    items.map((item) => {
      if (item.id === parentId) {
        item.children.map((childItem: MultiSelectItem) => {
          childItems.push(childItem.id);
        });
      }
    });

    let newItems;
    // Some selected items for group already exist in state.
    if (selectedItems[multiSelectId] !== undefined) {
      //
      if (
        childItems.every((childItem) =>
          selectedItems[multiSelectId].items.includes(childItem)
        )
      ) {
        newItems = selectedItems[multiSelectId].items.filter(
          (stateItem) => !childItems.includes(stateItem)
        );
      } else {
        // Merge all child items.
        newItems = [...childItems, ...selectedItems[multiSelectId].items];
      }
    } else {
      newItems = childItems;
    }

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