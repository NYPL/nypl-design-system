import React from "react";
import Button from "./../Button/Button";
import Icon from "./../Icons/Icon";
import { Box, useMultiStyleConfig, keyframes } from "@chakra-ui/react";
import { SelectedItems } from "./MultiSelect";

export interface MultiSelectMenuButtonProps {
  id: string;
  /** The id of the MultiSelect using this button. */
  multiSelectId: string;
  /** The label of the MultiSelect using this button. */
  multiSelectLabel: string;
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
const MultiSelectMenuButton = React.forwardRef<
  HTMLButtonElement,
  MultiSelectMenuButtonProps
>((props, ref?) => {
  const {
    id,
    multiSelectId,
    multiSelectLabel,
    isOpen,
    onMenuToggle,
    selectedItems,
    onClear,
    onKeyDown,
    ...rest
  } = props;
  const styles = useMultiStyleConfig("MultiSelectMenuButton", { isOpen });
  const iconType = isOpen ? "minus" : "plus";
  const growAnimation = `${grow} 150ms ease-out`;

  // Sets the selected items count on the menu button.
  let getSelectedItemsCount;
  if (selectedItems[multiSelectId]?.items.length > 0) {
    getSelectedItemsCount = `${selectedItems[multiSelectId].items.length}`;
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
      buttonType="secondary"
      id={id}
      onClick={onMenuToggle}
      ref={ref}
      __css={styles.menuButton}
      {...rest}
    >
      {getSelectedItemsCount && (
        <Box
          animation={growAnimation}
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
            id={`${multiSelectId}-selected-items-count-icon`}
            marginLeft="xs"
            name="close"
            size="xsmall"
          />
        </Box>
      )}
      <Box as="span" title={multiSelectLabel} __css={styles.buttonLabel}>
        {multiSelectLabel}
      </Box>
      <Icon
        id={`${multiSelectId}-icon`}
        name={iconType}
        size="small"
        __css={styles.toggleIcon}
      />
    </Button>
  );
});

export default MultiSelectMenuButton;
