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
  "default",
  "fitContent",
  "full",
] as const;
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];

export interface SelectedItems {
  [name: string]: { items: string[] };
}
interface MultiSelectCommonProps {
  /** The id of the MultiSelect. */
  id: string;
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen?: boolean;
  /** Boolean value used to control how the MultiSelect component will render within the page and interact with other DOM elements.
   * The default value is false. */
  isBlockElement?: boolean;
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];
  /** The label text rendered within the MultiSelect. */
  labelText: string;
  /** The action to perform for clear/reset button of MultiSelect. */
  onClear?: () => void;
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
        id,
        isBlockElement = false,
        isDefaultOpen = false,
        items,
        labelText,
        onApply,
        onChange,
        onClear,
        onMixedStateChange,
        selectedItems,
        type,
        width = "default",
        ...rest
      } = props;

      const commonProps = {
        id,
        isBlockElement,
        isDefaultOpen,
        items,
        labelText,
        onClear,
        selectedItems,
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
