import React, { forwardRef } from "react";
import { useMultiStyleConfig } from "@chakra-ui/react";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";

export interface MultiSelectItemsCountButtonProps {
  /** An ID string that other components can cross reference for accessibility purposes. */
  id: string;
  /** The id of the MultiSelect using this button. */
  multiSelectId: string;
  /** The label text rendered within the MultiSelect using this button. */
  multiSelectLabelText: string;
  /** The open status of the MultiSelect menu. */
  isOpen: boolean;
  /** The selected items state (items that were checked by user). */
  selectedItemsString: string;
  /** The number of selected items. */
  selectedItemsCount: number;
  /** The callback function for the menu toggle. */
  onMenuToggle?: () => void;
  /** The action to perform for the clear/reset button of individual MultiSelects. */
  onClear?: () => void;
  /** The action to perform for clear/reset button for multiple MultiSelect components. */
  onClearAll?: () => void;
  /** The action to perform for key down event. */
  onKeyDown?: () => void;
  /** Ref to the Accordion Button element. */
  accordianButtonRef: any;
}

/**
 * The toggle button component used to open and close the `MultiSelect` menu.
 * A second button is rendered above the main button that displays the current
 * number of selected items. Clicking on the second button will clear all
 * the selected items and the main button's close event will not be fired
 * (as expected).
 */
const MultiSelectItemsCountButton = forwardRef<
  HTMLButtonElement,
  MultiSelectItemsCountButtonProps
>((props, _ref) => {
  const {
    isOpen,
    multiSelectId,
    multiSelectLabelText,
    accordianButtonRef,
    onClear,
    onClearAll,
    selectedItemsString,
    selectedItemsCount,
  } = props;

  // Sets the selected items count on the menu button.
  let selectedItemsAriaLabel = `remove ${selectedItemsCount} ${selectedItemsString} selected from ${multiSelectLabelText}`;

  const styles = useMultiStyleConfig("MultiSelectItemsCountButton", {
    isOpen,
    hasSelectedItems: selectedItemsCount,
  });

  return (
    <Button
      id={`ms-count-button-${multiSelectId}`}
      buttonType="pill"
      size="small"
      aria-label={selectedItemsAriaLabel}
      data-testid="multi-select-close-button-testid"
      onClick={() => {
        onClear && onClear();
        onClearAll && onClearAll();
        // Set focus on the Accordion Button when close the selected items count button.
        accordianButtonRef.current?.focus();
      }}
      __css={styles}
    >
      {selectedItemsCount}
      <Icon
        align="right"
        id={`ms-count-icon-${multiSelectId}`}
        marginLeft="xs"
        name="close"
        size="xsmall"
        title="Remove selected items"
      />
    </Button>
  );
});

export default MultiSelectItemsCountButton;
