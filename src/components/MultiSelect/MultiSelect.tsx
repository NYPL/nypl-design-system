import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Checkbox from "./../Checkbox/Checkbox";
import Icon from "./../Icons/Icon";
import { IconNames /*, IconRotationTypes */ } from "./../Icons/IconTypes";
//import List from "./../List/List";
//import { ListTypes } from "./../List/ListTypes";

import { useSelect } from "downshift";

import {
  Box,
  ListItem,
  Stack,
  UnorderedList,
  useMultiStyleConfig,
} from "@chakra-ui/react";

interface MultiSelectProps {
  id: string;
  label: string;
  items: any;
  /** Handler for onChange of checkbox, for controlled MultiSelect. */
  handleOnSelectedItemChange: any;
  selectedItems: any;
  onSaveMultiSelect?: () => void;
  onClearMultiSelect?: () => void;
  onMenuClick?: () => void;
  //selectedGroupIds: string[];
  showCtaButtons: boolean;
}

interface MsItem {
  id: string;
  name: string;
  children: [
    {
      id: string;
      name: string;
    }
  ];
}

function MultiSelect({
  id,
  label,
  items,
  handleOnSelectedItemChange,
  selectedItems,
  onSaveMultiSelect,
  onClearMultiSelect,
  //onMenuClick,
  //selectedGroupIds,
  showCtaButtons,
}: MultiSelectProps) {
  const {
    //closeMenu,
    isOpen,
    getToggleButtonProps,
    //getLabelProps,
    getMenuProps,
    //highlightedIndex,
    getItemProps,
    //selectItem,
  } = useSelect({
    items,
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
    selectedItem: selectedItems,
    /*...(handleOnSelectedItemChange && {
      onSelectedItemChange: ({ selectedItem }) =>
        handleOnSelectedItemChange(selectedItem, id),
    }),
    */

    onSelectedItemChange: ({ selectedItem }) => {
      handleOnSelectedItemChange(selectedItem, id);
    },
  });

  const styles = useMultiStyleConfig("MultiSelect", {});
  // @ts-ignore
  const iconType = isOpen ? "minus" : "plus";

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

  function setFilterCheckedProp(groupdId: string, itemId: string) {
    //console.log(itemId);

    let checked = false;
    if (selectedItems[groupdId] !== undefined) {
      checked = selectedItems[groupdId].items.find(
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
      <Button buttonType={ButtonTypes.Secondary} {...getToggleButtonProps()}>
        <span>{getButtonLabel(id)}</span>
        <Icon
          name={IconNames[iconType]}
          decorative={true}
          modifiers={["small", IconNames[iconType]]}
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
            items.map((item: MsItem, index: number) => (
              <ListItem
                py={1}
                {...getItemProps({
                  key: item.id,
                  item,
                  index,
                })}
              >
                <Checkbox
                  id={item.id}
                  labelText={item.name}
                  showLabel={true}
                  name={item.name}
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

/*
non chakra button
<button type="button" {...getToggleButtonProps()}>
  <span>{getButtonLabel(id)}</span>
  <Icon
    name={IconNames[iconType]}
    decorative={true}
    modifiers={["small", IconNames[iconType]]}
  />
</button>
*/
