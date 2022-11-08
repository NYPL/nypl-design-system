import { useState } from "react";
import {
  MultiSelectItem,
  SelectedItems,
} from "../components/MultiSelect/MultiSelect";

/**
 * The useMultiSelect hook returns an object containing all the functions and state needed to handle the selectedItems of a `MultiSelect` component.
 * It can be used in conjunction with one single `MultiSelect` component as well as a group of `MultiSelect`s in the `MultiSelectGroup` component.
 * The returned object includes the functions onChange, onClear, onMixedStateChange for handling any changes to the selection of items
 * and the current state of the selection: selectedItems.
 */

export default function useMultiSelect(initialState?: SelectedItems) {
  const [selectedItems, setSelectedItems] = useState<SelectedItems | {}>(
    initialState !== undefined ? initialState : {}
  );

  /**
   * handleChange is used for both MultiSelect variants. It handles the state for checkbox options that either have no child options or are child options themselves.
   * It accepts two arguments - the id of the checkbox option and the id of the MultiSelect component.
   */
  const handleChange = (itemId: string, multiSelectId: string) => {
    let itemIds;
    // Check if the multiSelect already exists in the state.
    if (selectedItems.hasOwnProperty(multiSelectId)) {
      // Make a copy of the existing selected items.
      itemIds = selectedItems[multiSelectId].items.slice();
      // If itemId is in the selectedItems, remove it from the array.
      if (selectedItems[multiSelectId].items.indexOf(itemId) > -1) {
        itemIds = itemIds.filter((id) => id !== itemId);
      } else {
        // Add it to the array, but modify the copy, not the original.
        itemIds.push(itemId);
      }
      // If there were no items from the multiSelect in the selectedItems before
    } else {
      // Add the itemId to the itemsIds
      itemIds = [];
      itemIds.push(itemId);
    }
    // Update selectedItems on state to reflect the new selection
    setSelectedItems({
      ...selectedItems,
      [multiSelectId]: {
        items: itemIds,
      },
    });
  };

  /**
   * handleMixedStateChange is used only for the "dialog" variant. It handles the state for checkbox options with child options.
   * It accepts three arguments - the id of the checkbox option (parentId), the id of the MultiSelect component and the items array of the MultiSelect.
   */
  const handleMixedStateChange = (
    parentId: string,
    multiSelectId: string,
    items: MultiSelectItem[]
  ) => {
    // Build an array of child items.
    const childItems = items
      .filter((item: MultiSelectItem) => item.id === parentId)[0]
      .children.map((child) => child.id);

    let newItems;
    // If some items of the multiSelect are already selected
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
      // If no items of this multiSelect were selected before
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
  };

  /**
   * handleClear is used for both MultiSelect variants. It will remove all selected items of specific MultiSelect component from the selectedItems array.
   * It accepts one argument - the id of the MultiSelect component.
   */
  const handleClear = (multiSelectId: string) => {
    let newSelectedItems = {};
    for (let key of Object.keys(selectedItems)) {
      if (key !== multiSelectId) {
        newSelectedItems[key] = selectedItems[key];
      }
    }
    setSelectedItems(newSelectedItems);
  };

  /**
   * handleClearAll is used to clear all MultiSelects of a group. It will remove all selected items.
   */
  const handleClearAll = () => setSelectedItems({});

  return {
    selectedItems,
    onChange: handleChange,
    onMixedStateChange: handleMixedStateChange,
    onClear: handleClear,
    onClearAll: handleClearAll,
  };
}
