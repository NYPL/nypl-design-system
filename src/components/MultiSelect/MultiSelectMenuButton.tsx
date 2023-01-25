import React, { forwardRef } from "react";
import { Box, useMultiStyleConfig, keyframes } from "@chakra-ui/react";
import Button from "./../Button/Button";
import Icon from "./../Icons/Icon";
import { SelectedItems } from "./MultiSelect";

export interface MultiSelectMenuButtonProps {
  id: string;
  /** The id of the MultiSelect using this button. */
  multiSelectId: string;
  /** The labelText of the MultiSelect using this button. */
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
const grow = keyframes`
  from {width: 22px; opacity: 0; }
  to {width: 46px; opacity: 1;}
`;

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
>((props, ref?) => {
  const {
    id,
    isOpen,
    multiSelectId,
    multiSelectLabelText,
    onClear,
    onKeyDown,
    onMenuToggle,
    selectedItems,
    ...rest
  } = props;
  const iconType = isOpen ? "minus" : "plus";
  const growAnimation = `${grow} 150ms ease-out`;

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
    <>
      <Button
        buttonType="secondary"
        id={id}
        onClick={onMenuToggle}
        ref={ref}
        __css={styles.menuButton}
        {...rest}
      >
        <Box as="span" title={multiSelectLabelText} __css={styles.buttonLabel}>
          {multiSelectLabelText}
        </Box>
        <Icon id={`ms-${multiSelectId}-icon`} name={iconType} size="small" />
      </Button>
      {getSelectedItemsCount && (
        <Box
          animation={growAnimation}
          aria-label={selectedItemsAriaLabel}
          as="span"
          onClick={onClear}
          onKeyPress={onKeyPress}
          role="button"
          tabIndex={0}
          __css={styles.selectedItemsCountButton}
        >
          <Box as="span" verticalAlign="text-bottom">
            {getSelectedItemsCount}
          </Box>
          <Icon
            align="right"
            id={`ms-${multiSelectId}-selected-items-count-icon`}
            marginLeft="xs"
            name="close"
            size="xsmall"
            title="Remove selected items"
          />
        </Box>
      )}
    </>
  );
});

export default MultiSelectMenuButton;
