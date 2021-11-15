import React from "react";
import Checkbox from "./../Checkbox/Checkbox";
import { useSelect } from "downshift";
import { MultiSelectItem, SelectedItems } from "./MultiSelectTypes";
import MultiSelectMenuButton from "./MultiSelectMenuButton";

import {
  Box,
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";

export interface MultiSelectProps {
  /** The id of the multiSelect. */
  id: string;
  /** The label of the multiSelect. */
  label: string;
  /** The items to be rendered in the multiselect. */
  items: MultiSelectItem[];
  /** Handler for onChange of checkbox, for controlled MultiSelect. */
  handleOnSelectedItemChange: (
    selectedItem: MultiSelectItem,
    id: string
  ) => void;
  /** The selected items (items that were checked by user). */
  selectedItems: SelectedItems;
}

function MultiSelect({
  id,
  label,
  items,
  handleOnSelectedItemChange,
  selectedItems,
}: MultiSelectProps) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    // Downshift's internal state for handling keyboard and mouse events.
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // Keep menu open after selection.
            highlightedIndex: state.highlightedIndex,
          };
        default:
          return changes;
      }
    },
    // @ts-ignore
    selectedItem: selectedItems,
    onSelectedItemChange: ({ selectedItem }) => {
      handleOnSelectedItemChange(selectedItem, id);
    },
  });

  const styles = useMultiStyleConfig("MultiSelect", {});

  function setFilterCheckedProp(multiSelectId: string, itemId: string) {
    let checked = false;
    if (selectedItems[multiSelectId] !== undefined) {
      // @ts-ignore
      checked = selectedItems[multiSelectId].items.find(
        // @ts-ignore
        (filter: string) => filter === itemId
      );
    }
    return checked;
  }

  return (
    <Box id={id} __css={styles.container}>
      <MultiSelectMenuButton
        id={id}
        label={label}
        isOpen={isOpen}
        selectedItems={selectedItems}
        {...getToggleButtonProps()}
      />
      <Box __css={styles.menuWrapper} {...(!isOpen && { display: "none" })}>
        <UnorderedList
          styleType="none"
          marginInlineStart="0"
          {...getMenuProps()}
          // @FIX This prevents the menu from closing when checkbox or label is clicked.
          onClick={(e) => e.preventDefault()}
          __css={styles.menu}
        >
          {isOpen &&
            items.map((item: MultiSelectItem, index: number) => (
              <ListItem
                py={1}
                {...getItemProps({
                  key: item.id,
                  item,
                  index,
                })}
                style={
                  highlightedIndex === index
                    ? { backgroundColor: "#bde4ff" }
                    : {}
                }
              >
                <Checkbox
                  id={item.id}
                  labelText={item.name}
                  showLabel={true}
                  name={item.name}
                  isChecked={setFilterCheckedProp(id, item.id) || false}
                  onChange={() => null}
                />
              </ListItem>
            ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default MultiSelect;
