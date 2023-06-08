import React from "react";
import { MultiSelectItem, MultiSelectProps } from "./MultiSelect";
/** MultiSelectListbox renders a non-hierarchical list of checkbox options for the `type="listbox". It leverager downshift-js for accessiblity. */
export declare const MultiSelectListbox: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<Omit<MultiSelectProps, "onChange"> & {
    onChange: (selectedItem: MultiSelectItem, id: string) => void;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLElement>>, {}>;
export default MultiSelectListbox;
