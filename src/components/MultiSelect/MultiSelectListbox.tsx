import React from "react";
import {
  Box,
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { useSelect } from "downshift";

import Checkbox from "./../Checkbox/Checkbox";
import { MultiSelectItem, MultiSelectProps } from "./MultiSelect";
import MultiSelectMenuButton from "./MultiSelectMenuButton";

type MultiSelectListboxProps = Omit<MultiSelectProps, "onChange"> & {
  onChange: (selectedItem: MultiSelectItem, id: string) => void;
};

/** MultiSelectListbox renders a non-hierarchical list of checkbox options for the `variant="listbox". It leverager downshift-js for accessiblity. */
function MultiSelectListbox({
  id,
  label,
  isDefaultOpen,
  items,
  onChange,
  selectedItems,
  onClear,
  width = "default",
  isBlockElement = false,
}: MultiSelectListboxProps) {
  const styles = useMultiStyleConfig("MultiSelect", {
    width,
    isBlockElement,
  });
  // Downshift.
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
      onChange(selectedItem, id);
    },
    initialIsOpen: isDefaultOpen,
  });
  // If a item passed to the listbox variant has children,
  if (items.some((item) => item.children)) {
    console.warn(
      "NYPL Reservoir MultiSelect: Only the variant 'dialog' can render nested select items."
    );
  }
  return (
    <Box id={id} __css={styles}>
      <MultiSelectMenuButton
        multiSelectId={id}
        multiSelectLabel={label}
        isOpen={isOpen}
        selectedItems={selectedItems}
        onClear={onClear}
        {...getToggleButtonProps({
          // @TODO add short prefix to avoid id starting with number
          id: `ms-${id}-menu-button`,
          "aria-labelledby": `${id}-label ${id}-toggle-button`,
        })}
      />
      <Box __css={styles.menuContainer} {...(!isOpen && { display: "none" })}>
        <UnorderedList
          styleType="none"
          marginInlineStart="0"
          {...getMenuProps({
            // @TODO add short prefix to avoid id starting with number
            id: `${id}-menu`,
            "aria-labelledby": `${id}-label`,
          })}
          // @FIX This prevents the menu from closing when checkbox or label is clicked.
          onClick={(e) => e.preventDefault()}
          __css={styles.menu}
        >
          {isOpen &&
            items.map((item: MultiSelectItem, index: number) => (
              <ListItem
                py={1}
                // @TODO fix this, we want to pass the key prop as part of ...getItemProps but get
                // error  Missing "key" prop for element in iterator  react/jsx-key
                key={item.id}
                {...getItemProps({
                  // @TODO add short prefix to avoid id starting with number
                  id: `${id}-item-${index}`,
                  key: item.id,
                  item,
                  index,
                })}
                sx={
                  highlightedIndex === index
                    ? { backgroundColor: "ui.gray.x-light-cool" }
                    : {}
                }
              >
                <Checkbox
                  id={item.id}
                  labelText={item.name}
                  name={item.name}
                  isChecked={selectedItems[id]?.items.includes(item.id)}
                  onChange={() => null}
                />
              </ListItem>
            ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default MultiSelectListbox;
