import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Icon from "./../Icons/Icon";
import { IconNames, IconSizes } from "./../Icons/IconTypes";
import { useMultiStyleConfig } from "@chakra-ui/react";
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
}

const MultiSelectMenuButton = React.forwardRef<
  HTMLButtonElement,
  MultiSelectMenuButtonProps
>((props, ref?) => {
  const { multiSelectId, label, isOpen, onMenuToggle, selectedItems } = props;
  const styles = useMultiStyleConfig("MultiSelect", {});
  const iconType = isOpen ? "Minus" : "Plus";

  // Sets the ListBoxMenuButton label, including a count of selected items.
  function getButtonLabel(multiSelectId: string) {
    if (selectedItems[multiSelectId]?.items.length > 0) {
      return `${label} (${selectedItems[multiSelectId].items.length})`;
    }
    return label;
  }

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

  return (
    <Button
      ref={ref}
      attributes={{
        ...styles.menuButton,
      }}
      buttonType={ButtonTypes.Secondary}
      onClick={onMenuToggle}
      {...props}
    >
      <span style={{ paddingRight: "10px" }}>
        {getButtonLabel(multiSelectId)}
      </span>
      <Icon
        name={IconNames[iconType]}
        decorative={true}
        size={IconSizes.Small}
      />
    </Button>
  );
});

export default MultiSelectMenuButton;
