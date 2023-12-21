import React, { forwardRef } from "react";
import { useMultiStyleConfig } from "@chakra-ui/react";
import Button from "./../Button/Button";
import Icon from "./../Icons/Icon";
import { SelectedItems } from "./MultiSelect";

export interface MultiSelectMenuButtonProps {
  id: string;
  /** The id of the MultiSelect using this button. */
  multiSelectId: string;
  /** The label text rendered within the MultiSelect using this button. */
  multiSelectLabelText: string;
  /** The open status of the MultiSelect menu. */
  isOpen: boolean;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** The callback function for the menu toggle. */
  onMenuToggle?: () => void;
  /** The action to perform for clear/reset button of MultiSelect. */
  onClear?: () => void;
  onKeyDown?: () => void;
}

/**
 * The toggle button component used to open and close the `MultiSelect` menu.
 * A second button is rendered above the main button that displays the current
 * number of selected items. Clicking on the second button will clear all
 * the selected items and the main button's close event will not be fired
 * (as expected).
 */
const MultiSelectMenuButton = forwardRef<
  HTMLButtonElement,
  MultiSelectMenuButtonProps
>((props, _ref) => {
  const {
    isOpen,
    multiSelectId,
    multiSelectLabelText,
    onClear,
    selectedItems,
  } = props;

  // Sets the selected items count on the menu button.
  let getSelectedItemsCount;
  let selectedItemsAriaLabel;
  if (selectedItems[multiSelectId]?.items.length > 0) {
    getSelectedItemsCount = `${selectedItems[multiSelectId].items.length}`;
    const itemPlural = getSelectedItemsCount === "1" ? "" : "s";
    selectedItemsAriaLabel = `remove ${getSelectedItemsCount} item${itemPlural} selected from ${multiSelectLabelText}`;
  }

  const styles = useMultiStyleConfig("MultiSelectMenuButton", {
    isOpen,
    hasSelectedItems: getSelectedItemsCount,
  });

  return getSelectedItemsCount ? (
    <Button
      id="multo-select-button"
      buttonType="pill"
      size="small"
      aria-label={selectedItemsAriaLabel}
      onClick={() => {
        onClear();
      }}
      __css={styles.selectedItemsCountButton}
    >
      {getSelectedItemsCount}
      <Icon
        align="right"
        id={`ms-${multiSelectId}-selected-items-count-icon`}
        marginLeft="xs"
        name="close"
        size="xsmall"
        title="Remove selected items"
      />
    </Button>
  ) : null;
});

export default MultiSelectMenuButton;
