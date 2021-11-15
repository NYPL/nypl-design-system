import React from "react";
import Button from "./../Button/Button";
import { ButtonTypes } from "./../Button/ButtonTypes";
import Icon from "./../Icons/Icon";
import { IconNames, IconSizes } from "./../Icons/IconTypes";
import { useMultiStyleConfig } from "@chakra-ui/react";

export interface MultiSelectMenuButtonProps {
  id: string;
  label: string;
  isOpen: boolean;
  selectedItems: any;
  onMenuToggle?: any;
}

const MultiSelectMenuButton = React.forwardRef<
  HTMLButtonElement,
  MultiSelectMenuButtonProps
>((props, ref?) => {
  const { id, label, isOpen, onMenuToggle, selectedItems } = props;
  const styles = useMultiStyleConfig("MultiSelect", {});
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
    <Button
      ref={ref}
      attributes={{
        ...styles.menuButton,
      }}
      buttonType={ButtonTypes.Secondary}
      onClick={onMenuToggle}
      {...props}
    >
      <span style={{ paddingRight: "10px" }}>{getButtonLabel(id)}</span>
      <Icon
        name={IconNames[iconType]}
        decorative={true}
        size={IconSizes.Small}
      />
    </Button>
  );
});

export default MultiSelectMenuButton;
