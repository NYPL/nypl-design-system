import React from "react";
export interface MultiSelectItem {
    id: string;
    name: string;
    children?: MultiSelectItem[];
}
export declare const multiSelectWidthsArray: readonly ["default", "fitContent", "full"];
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];
export interface SelectedItems {
    [name: string]: {
        items: string[];
    };
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
type MultiSelectVariantsProps = {
    type: "listbox";
    onApply?: never;
    /** The action to perform for downshift's onSelectedItemChange function. */
    onChange: ListboxOnChange;
    onMixedStateChange?: never;
} | {
    type: "dialog";
    /** The action to perform for save/apply button of multiselect. */
    onApply: () => void;
    /** The action to perform on the checkbox's onChange function.  */
    onChange: DialogOnChange;
    /** The action to perform for a mixed state checkbox (parent checkbox). */
    onMixedStateChange?: DialogOnChange;
};
export type MultiSelectProps = MultiSelectCommonProps & MultiSelectVariantsProps;
/**
 * The `MultiSelect` component is a form input element that presents a list
 * of `Checkbox` components from which a user can make one or multiple
 * selections. Two variants of the MultiSelect component are offered, each with
 * slightly different functionality and requirements.  Because of these
 * differences, the two variants are broken out in separate stories below.
 */
export declare const MultiSelect: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<MultiSelectProps> & React.RefAttributes<HTMLDivElement>>, {}>;
export default MultiSelect;
