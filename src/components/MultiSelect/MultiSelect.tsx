import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Checkbox from "./../Checkbox/Checkbox";
import Icon from "./../Icons/Icon";
import { IconNames, IconSizes } from "./../Icons/IconTypes";
import { useSelect /*, UseSelectProps */ } from "downshift";
import { MultiSelectItem, SelectedItems } from "./MultiSelectTypes";

import {
  Box,
  ListItem,
  Stack,
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
  handleOnSelectedItemChange: any;
  /** The selected items (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Handler for save button of multiselect. */
  onSaveMultiSelect?: () => void;
  /** Handler for clear/reset button of multiselect. */
  onClearMultiSelect?: () => void;
  /** Not used? */
  onMenuClick?: () => void;
  /** Controls the display of the save and clear buttons on multiselect. */
  showCtaButtons: boolean;
}

function MultiSelect({
  id,
  label,
  items,
  handleOnSelectedItemChange,
  selectedItems,
  onSaveMultiSelect,
  onClearMultiSelect,
  showCtaButtons,
}: MultiSelectProps) {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    //openMenu,
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
            //circularNavigation: true,
          };

        // This allows you to access the cta buttons, but then also keeps menu open on blur...
        /*case useSelect.stateChangeTypes.MenuBlur:
          return {
            ...changes,
            isOpen: true, // Keep menu open after selection.
          };
        */
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
  // @ts-ignore
  const iconType = isOpen ? "Minus" : "Plus";

  // Sets the ListBoxMenuButton label, including a count of selected items.
  function getButtonLabel(id: string) {
    let buttonLabel = label;
    if (
      selectedItems !== undefined &&
      selectedItems[id] !== undefined &&
      selectedItems[id].items.length > 0
    ) {
      buttonLabel = `${label} (${selectedItems[id].items.length})`;
    }
    return buttonLabel;
  }

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

  /*function hasSelectedItems() {
    if (
      (selectedItems[id] !== undefined && selectedItems[id].items.length) ||
      isOpen
    ) {
      return true;
    }
    return false;
  }
  */

  return (
    <Box id={id} __css={styles.container}>
      <Button
        buttonType={ButtonTypes.Secondary}
        attributes={{
          ...styles.menuButton,
        }}
        {...getToggleButtonProps()}
      >
        <span>{getButtonLabel(id)}</span>
        <Icon
          name={IconNames[iconType]}
          decorative={true}
          size={IconSizes.Small}
        />
      </Button>
      <Box __css={styles.menu} {...(!isOpen && { display: "none" })}>
        <UnorderedList
          styleType="none"
          marginInlineStart="0"
          {...getMenuProps()}
          // @FIX This prevents the menu from closing when checkbox or label is clicked.
          onClick={(e) => e.preventDefault()}
          __css={styles.menuInner}
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
                  // @TODO Remove the conditional? Component is unuseable without it.
                  {...(handleOnSelectedItemChange !== undefined
                    ? {
                        isChecked: setFilterCheckedProp(id, item.id) || false,
                        onChange: () => null,
                      }
                    : {
                        defaultIsChecked: false,
                      })}
                />
              </ListItem>
            ))}
        </UnorderedList>
        {isOpen && showCtaButtons && (
          <Stack direction="row" spacing={4} justify="flex-end">
            <Button
              buttonType={ButtonTypes.Link}
              id={`multiselect-button-clear-${id}`}
              mouseDown={false}
              type="button"
              onClick={onClearMultiSelect}
            >
              Clear
            </Button>
            <Button
              buttonType={ButtonTypes.Primary}
              id={`multiselect-button-save-${id}`}
              mouseDown={false}
              type="button"
              onClick={onSaveMultiSelect}
            >
              Apply Filters
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default MultiSelect;
