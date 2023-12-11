import { chakra } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import MultiSelectListBox from "./MultiSelectListbox";
import MultiSelectDialog from "./MultiSelectDialog";

export interface MultiSelectItem {
  id: string;
  name: string;
  children?: MultiSelectItem[];
}

export const multiSelectWidthsArray = [
  "fitContent",
  "full",
] as const;
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];

export const multiSelectListOverflowArray = [
  "scroll",
  "expand"
] as const;
export type multiSelectListOverflowTypes = typeof multiSelectListOverflowArray[number];


export interface SelectedItems {
  [name: string]: { items: string[] };
}
interface MultiSelectCommonProps {
  /** The helperText sets the text for the internal HelperErrorText */
  helperText: string;
  /** The id of the MultiSelect. */
  id: string;
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen?: boolean;
  /** Boolean value used to enable the component's search functionality 
   * The default value is false. */
  isSearchable?: boolean;
  /** Boolean value used to control how the MultiSelect component will render within the page and interact with other DOM elements.
   * The default value is false. */
  isBlockElement?: boolean;

  closeOnBlur: boolean;
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];

  listOverflow?: multiSelectListOverflowTypes;
  /** The label text rendered within the MultiSelect. */
  buttonText: string;
  /** Numeric value to set the maximum number of checkbox items
  * The default value is 5. */
  defaultItemsVisible: number;
  /** The action to perform for clear/reset button of MultiSelect. */
  onClear?: () => void;

  showLabel: boolean;
  /** Boolean value used to toggle the visibility of the Show All button
   * The default value is false. */
  showAll: boolean
  /** The type of MultiSelect that will be rendered. */
  type: "listbox" | "dialog";
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Value used to set the width for the MultiSelect component. */
  width?: MultiSelectWidths;
}
type ListboxOnChange = (selectedItem: MultiSelectItem, id: string) => void;
type DialogOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

type MultiSelectVariantsProps =
  | {
      type: "listbox";
      onApply?: never;
      /** The action to perform for downshift's onSelectedItemChange function. */
      onChange: ListboxOnChange;
      // These are props that are never allowed on the listbox type.
      onMixedStateChange?: never;
    }
  | {
      type: "dialog";
      /** The action to perform for save/apply button of multiselect. */
      onApply: () => void;
      /** The action to perform on the checkbox's onChange function.  */
      onChange: DialogOnChange;
      /** The action to perform for a mixed state checkbox (parent checkbox). */
      onMixedStateChange?: DialogOnChange;
    };

export type MultiSelectProps = MultiSelectCommonProps &
  MultiSelectVariantsProps;

/**
 * The `MultiSelect` component is a form input element that presents a list
 * of `Checkbox` components from which a user can make one or multiple
 * selections. Two variants of the MultiSelect component are offered, each with
 * slightly different functionality and requirements.  Because of these
 * differences, the two variants are broken out in separate stories below.
 */
export const MultiSelect = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<MultiSelectProps>>(
    (props, ref?) => {
      const {
        helperText,
        id,
        isBlockElement = false,
        isDefaultOpen = false,
        isSearchable = false,
        defaultItemsVisible = 5,
        items,
        listOverflow = "scroll",
        buttonText,
        closeOnBlur,
        onApply,
        onChange,
        onClear,
        onMixedStateChange,
        selectedItems,
        showLabel = false,
        showAll = false,
        type,
        width = "fitContent",
        ...rest
      } = props;

      const commonProps = {
        helperText,
        id,
        isBlockElement,
        isDefaultOpen,
        isSearchable,
        defaultItemsVisible,
        items,
        listOverflow,
        buttonText,
        onClear,
        closeOnBlur,
        selectedItems,
        showLabel,
        showAll,
        type,
        width,
      };

      if (type === "listbox") {
        const listboxOnChange = onChange as ListboxOnChange;

        return (
          <MultiSelectListBox
            {...commonProps}
            ref={ref}
            onChange={listboxOnChange}
            {...rest}
          />
        );
      }

      if (type === "dialog") {
        const dialogOnChange = onChange as DialogOnChange;

        return (
          <MultiSelectDialog
            {...commonProps}
            onChange={dialogOnChange}
            onMixedStateChange={onMixedStateChange}
            onApply={onApply}
            ref={ref}
            {...rest}
          />
        );
      }

      return null;
    }
  ),
  // Pass all custom props to Chakra and override, for width prop.
  { shouldForwardProp: () => true }
);

export default MultiSelect;
