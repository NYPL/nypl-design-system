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
}

const MultiSelectMenuButton = React.forwardRef<
  HTMLButtonElement,
  MultiSelectMenuButtonProps
>((props, ref?) => {
  const { id, label, isOpen, selectedItems } = props;

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

  return (
    <Button
      ref={ref}
      buttonType={ButtonTypes.Secondary}
      attributes={{
        ...styles.menuButton,
      }}
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
