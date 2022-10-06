import React, { forwardRef } from "react";
import {
  Box,
  chakra,
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
export const MultiSelectListbox = chakra(
  forwardRef<HTMLElement, React.PropsWithChildren<MultiSelectListboxProps>>(
    (props, ref?) => {
      const {
        id,
        isBlockElement,
        isDefaultOpen,
        items,
        label,
        onChange,
        onClear,
        selectedItems,
        width,
        ...rest
      } = props;

      // Downshift.
      const {
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
        highlightedIndex,
        isOpen,
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
        //@ts-ignore
        selectedItem: selectedItems,
        onSelectedItemChange: ({ selectedItem }) => {
          onChange(selectedItem, id);
        },
        initialIsOpen: isDefaultOpen,
      });

      const styles = useMultiStyleConfig("MultiSelect", {
        width,
        isBlockElement,
        isOpen,
      });
      // If a item passed to the listbox variant has children,
      if (items.some((item) => item.children)) {
        console.warn(
          "NYPL Reservoir MultiSelect: Only the variant 'dialog' can render nested select items."
        );
      }
      return (
        <Box id={id} __css={styles} {...rest}>
          <MultiSelectMenuButton
            multiSelectId={id}
            multiSelectLabel={label}
            isOpen={isOpen}
            selectedItems={selectedItems}
            onClear={onClear}
            ref={ref}
            {...getToggleButtonProps({
              id: `ms-${id}-menu-button`,
              "aria-labelledby": `ms-${id}-menu ms-${id}-menu-button`,
            })}
          />
          <Box __css={styles.menuContainer}>
            <UnorderedList
              styleType="none"
              marginInlineStart="0"
              {...getMenuProps({
                id: `ms-${id}-menu`,
                "aria-labelledby": `ms-${id}-menu-button`,
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
                      id: `ms-${id}-item-${index}`,
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
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelectListbox;
