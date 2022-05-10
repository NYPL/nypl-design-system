import React from "react";
import Button from "./../Button/Button";
//import { ButtonTypes } from "./../Button/ButtonTypes";
import Icon from "./../Icons/Icon";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import { SelectedItems } from "./MultiSelectTypes";

export interface MultiSelectMenuButtonProps {
  /** The id of the multiSelect using this button. */
  multiSelectId: string;
  /** The label of the multiSelect using this button. */
  label: string;
  /** The open status of the multiselect menu. */
  isOpen: boolean;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** The callback function for the menu toggle. */
  onMenuToggle?: () => void;
  /** The action to perform for clear/reset button of multiselect. */
  onClear?: () => void;
}

const MultiSelectMenuButton = React.forwardRef<
  HTMLButtonElement,
  MultiSelectMenuButtonProps
>((props, ref?) => {
  const { multiSelectId, label, isOpen, onMenuToggle, selectedItems, onClear } =
    props;
  const styles = useMultiStyleConfig("MultiSelect", {});
  const iconType = isOpen ? "minus" : "plus";

  // Sets the ListBoxMenuButton label, including a count of selected items.
  /*function getButtonLabel(multiSelectId: string) {
    if (selectedItems[multiSelectId]?.items.length > 0) {
      return `${label} (${selectedItems[multiSelectId].items.length})`;
    }
    return label;
  }
  */

  /*function hasSelectedItems() {
    if (
      (selectedItems[id] !== undefined && selectedItems[id].items.length) ||
      isOpen
    ) {
      return true;
    }
    return false;

    // Background color is #e0e0e0
  }
  */
  function getSelectedItemsCount(multiSelectId: string) {
    if (selectedItems[multiSelectId]?.items.length > 0) {
      return `${selectedItems[multiSelectId].items.length}`;
    }
    return null;
  }

  // We need this for our "fake" button inside the main menu button.
  function onKeyPress(e) {
    const enterOrSpace =
      e.key === "Enter" ||
      e.key === " " ||
      e.key === "Spacebar" ||
      e.which === 13 ||
      e.which === 32;

    if (enterOrSpace) {
      e.preventDefault();
      onClear();
    }
  }

  return (
    <Button
      id="multiselect-menu-button"
      ref={ref}
      __css={styles.menuButton}
      buttonType="secondary"
      onClick={onMenuToggle}
      {...props}
    >
      {getSelectedItemsCount(multiSelectId) && (
        <Box
          as="span"
          __css={styles.selectedItemsCountButton}
          onClick={onClear}
          onKeyPress={onKeyPress}
          role="button"
          tabIndex={0}
        >
          <Box as="span" verticalAlign="text-bottom">
            {getSelectedItemsCount(multiSelectId)}
          </Box>
          <Icon name="close" decorative={true} size="xsmall" align="right" />
        </Box>
      )}
      <Box as="span" pr="s">
        {label}
      </Box>
      <Icon name={iconType} decorative={true} size="small" />
    </Button>
  );
});

export default MultiSelectMenuButton;
