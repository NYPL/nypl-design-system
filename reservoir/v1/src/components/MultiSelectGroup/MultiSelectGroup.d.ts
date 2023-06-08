import React from "react";
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths } from "../MultiSelect/MultiSelect";
export interface MultiSelectGroupProps {
    children: React.ReactNode;
    /** Additional className to use. */
    className?: string;
    /** The id of the MultiSelectGroup. */
    id: string;
    /** The label text rendered within the MultiSelectGroup. */
    labelText: string;
    /** Renders the layout of `MultiSelect` components in a row or column. */
    layout?: LayoutTypes;
    /** Width will be passed on each `MultiSelect` component. */
    multiSelectWidth?: MultiSelectWidths;
    /** Is set to `true` by default and determines if the `labelText` is visible on the site. */
    showLabel?: boolean;
}
/**
 * `MultiSelectGroup` is a wrapper component specific for `MultiSelect` components. The wrapped `MutliSelect` components can be displayed in a
 * column or in a row. The `MultiSelectGroup` component renders all the necessary
 * wrapping and associated text elements, but the child elements
 * _need_ to be `MultiSelect` components from the NYPL Design System.
 */
export declare const MultiSelectGroup: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<MultiSelectGroupProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default MultiSelectGroup;
