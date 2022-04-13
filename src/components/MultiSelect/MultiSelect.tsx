import React from "react";
import MultiSelectListBox from "./MultiSelectListbox";
import MultiSelectDialog from "./MultiSelectDialog";
import {
  MultiSelectItem,
  SelectedItems,
  MultiSelectWidths,
} from "./MultiSelectTypes";

interface MultiSelectCommonProps {
  /** The id of the multiSelect. */
  id: string;
  /** The label of the multiSelect. */
  label: string;
  /** The variant of the multiSelect. */
  variant: "listbox" | "dialog";
  //variant: MultiSelectVariants;
  /** The items to be rendered in the multiselect as options. */
  items: MultiSelectItem[];
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Enum value used to set the width for the MultiSelect component. */
  width?: MultiSelectWidths;
  /** The action to perform for clear/reset button of multiselect.. */
  onClear?: () => void;
  /** Set the default open or closed state of the multiselect. */
  defaultIsOpen?: boolean;
  /** Boolean value used to control how the MultiSelect component will render within the page and interact with other DOM elements. */
  isBlockElement?: boolean;
}

type MultiSelectVariantsProps =
  | {
      variant: "listbox";
      /** The action to perform for downshift's onSelectedItemChange function. */
      onChange: (selectedItem: MultiSelectItem, id: string) => void;
      // These are props that are never allowed on the listbox variant.
      onMixedStateChange?: never;
      onApply?: never;
    }
  | {
      variant: "dialog";
      /** The action to perform on the checkbox's onChange function.  */
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
      /** The action to perform for a mixed state checkbox (parent checkbox). */
      onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      /** The action to perform for save/apply button of multiselect. */
      onApply: () => void;
    };

export type MultiSelectProps = MultiSelectCommonProps &
  MultiSelectVariantsProps;

/**
 * The `MultiSelect` component renders great stuff.
 */
export default function MultiSelect({
  id,
  label,
  variant,
  items,
  selectedItems,
  width,
  onChange,
  onClear,
  onApply,
  onMixedStateChange,
  defaultIsOpen,
  isBlockElement = false,
}: MultiSelectProps) {
  const commonProps = {
    id: id,
    label: label,
    variant: variant,
    items: items,
    selectedItems: selectedItems,
    width: width,
    onClear: onClear,
    defaultIsOpen: defaultIsOpen,
    isBlockElement: isBlockElement,
  };

  if (variant === "listbox") {
    const listboxOnChange = onChange as (
      selectedItem: MultiSelectItem,
      id: string
    ) => void;

    return <MultiSelectListBox {...commonProps} onChange={listboxOnChange} />;
  }

  if (variant === "dialog") {
    const dialogOnChange = onChange as (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;

    return (
      <MultiSelectDialog
        {...commonProps}
        onChange={dialogOnChange}
        onMixedStateChange={onMixedStateChange}
        onApply={onApply}
      />
    );
  }

  return null;
}
