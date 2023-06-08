import React from "react";
import { LayoutTypes } from "../../helpers/types";
import { SelectedItems } from "../MultiSelect/MultiSelect";
interface FilterBarCommonProps {
    children: React.ReactNode;
    /** The id of the MultiSelect. */
    id?: string;
    /** Determines on Mobile if filter modal overlay is open or closed */
    isOpen: boolean;
    /** Heading text of FilterBar */
    headingText: string;
    /** Renders the layout of the FilterBar child components in a row or column. */
    layout?: LayoutTypes;
    /** The selected items state (items that were checked by user). */
    selectedItems: SelectedItems;
    /** User for the global `Clear Filters` button. This button is always shown on mobile, optional on desktop */
    onClear: () => void;
    /** If passed, the global `Clear Filters` button will render on desktop and tablet */
    showClearAll?: boolean;
    /** Set width of `FilterBar` child components */
    filterWidth?: string;
}
/** Types related to an optional global submit button `Apply Filters` */
type SubmitAllProps = {
    /** If passed the `Apply Filters` button will render on desktop and tablet */
    showSubmitAll?: false;
    /** Function for `Apply Filters` button, needs to be provided by the consuming app */
    onSubmit?: never;
}
/** onSubmit is required only if showSubmitAll is passed */
 | {
    showSubmitAll: true;
    onSubmit: () => void;
};
/** Types related to the Modal handling */
type HandleModalProps = {
    /** If onToggle is passed as prop, it will open and close the filter modal on mobile */
    onToggle: () => void;
    /** onOpen and onClose will not be used in this scenario */
    onOpen?: never;
    onClose?: never;
} | {
    /** If onToggle is omitted, onOpen and onClose should be provided instead */
    onToggle?: undefined;
    /** onOpen will open the filter modal on mobile */
    onOpen: () => void;
    /** onClose will close the filter modal on mobile */
    onClose: () => void;
};
export type FilterBarProps = FilterBarCommonProps & SubmitAllProps & HandleModalProps;
/**
 * `FilterBar` is a wrapper component for filter components.
 * The DS considers the following components as filter components:
 * - `MultiSelectGroup`
 *
 * The wrapped components/ component groups can be displayed in a column or
 * in a row layout. `FilterBar` can render additional `Clear All` and a `Apply Filters` buttons. The two
 * _optional_ buttons are controlled by the `showClearAll`/ `onClear` or `showSubmitAll`/`onSubmit` props repectively.
 */
export declare const FilterBar: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<FilterBarProps> & React.RefAttributes<HTMLDivElement>>, {}>;
export default FilterBar;
