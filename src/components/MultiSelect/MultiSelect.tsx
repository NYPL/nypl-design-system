import React from "react";
import MultiSelectListBox from "./MultiSelectListbox";
import MultiSelectDialog from "./MultiSelectDialog";

export interface MultiSelectItem {
  id: string;
  name: string;
  children?: MultiSelectItem[];
}

export interface SelectedItems {
  [name: string]: { items: string[] };
}
interface MultiSelectCommonProps {
  /** The id of the MultiSelect. */
  id: string;
  /** The label of the MultiSelect. */
  label: string;
  /** The variant of the MultiSelect. */
  variant: "listbox" | "dialog";
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Value used to set the width for the MultiSelect component. */
  width?: "default" | "fitContent" | "full";
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen?: boolean;
  /** Boolean value used to control how the MultiSelect component will render within the page and interact with other DOM elements.
   * The default value is false. */
  isBlockElement?: boolean;
  /** The action to perform for clear/reset button of MultiSelect. */
  onClear?: () => void;
}
type ListboxOnChange = (selectedItem: MultiSelectItem, id: string) => void;
type DialogOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

type MultiSelectVariantsProps =
  | {
      variant: "listbox";
      /** The action to perform for downshift's onSelectedItemChange function. */
      onChange: ListboxOnChange;
      // These are props that are never allowed on the listbox variant.
      onMixedStateChange?: never;
      onApply?: never;
    }
  | {
      variant: "dialog";
      /** The action to perform on the checkbox's onChange function.  */
      onChange: DialogOnChange;
      /** The action to perform for a mixed state checkbox (parent checkbox). */
      onMixedStateChange?: DialogOnChange;
      /** The action to perform for save/apply button of multiselect. */
      onApply: () => void;
    };

export type MultiSelectProps = MultiSelectCommonProps &
  MultiSelectVariantsProps;

/**
 * The `MultiSelect` component is a form input element that presents a list
 * of `Checkbox` components from which a user can make one or multiple 
 * selections. Two variants of the MultiSelect component are offered, each with 
 * slightly different functionality and requirements.  Because of these 
 * differences, the two vaeraints are broken out in separate stories below.
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
  isDefaultOpen = false,
  isBlockElement = false,
}: MultiSelectProps) {
  const commonProps = {
    id,
    label,
    variant,
    items,
    selectedItems,
    width,
    isDefaultOpen,
    isBlockElement,
    onClear,
  };

  if (variant === "listbox") {
    const listboxOnChange = onChange as ListboxOnChange;

    return <MultiSelectListBox {...commonProps} onChange={listboxOnChange} />;
  }

  if (variant === "dialog") {
    const dialogOnChange = onChange as DialogOnChange;

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
