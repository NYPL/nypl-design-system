import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths } from "../MultiSelect/MultiSelect";
import { FilterBarItemsType } from "../FilterBarInline/FilterBarInline";
export interface FilterBarPopupProps {
    /** The className of the FilterBarInline. */
    className?: string;
    /** Optional string value used to set the text for a `Heading` component, or
     * a DS Heading component that can be passed in.
     */
    heading?: string | JSX.Element;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Only used for internal purposes. */
    isOpen?: boolean;
    /** Function for the global `Clear Filters` button. If passed the `Clear Filters` button will render. */
    onClear?: () => void;
    /** Only used for internal purposes. */
    onClose?: any;
    /** Only used for internal purposes. */
    onOpen?: any;
    /** Function for the global `Apply Filters` button. If passed the `Apply Filters` button will render. */
    onSubmit?: () => void;
    /** Render prop function used to render child components with updated props. */
    renderChildren: ({ isBlockElement, layout, width, }: {
        isBlockElement?: boolean;
        layout?: LayoutTypes;
        width?: MultiSelectWidths;
    }) => React.ReactNode;
    /** The selected items state (items that were checked by user). */
    selectedItems?: FilterBarItemsType;
    /** A number that represents the total number of results in the associated search results list. */
    totalResults?: number;
}
export declare const FilterBarPopup: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<FilterBarPopupProps> & React.RefAttributes<HTMLDivElement>>, FilterBarPopupProps>;
export declare function useFilterBarPopup(): any;
export default FilterBarPopup;
