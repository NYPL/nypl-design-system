import React from "react";
import { SelectedItems } from "./MultiSelect";
export interface MultiSelectMenuButtonProps {
    id: string;
    /** The id of the MultiSelect using this button. */
    multiSelectId: string;
    /** The label text rendered within the MultiSelect using this button. */
    multiSelectLabelText: string;
    /** The open status of the MultiSelect menu. */
    isOpen: boolean;
    /** The selected items state (items that were checked by user). */
    selectedItems: SelectedItems;
    /** The callback function for the menu toggle. */
    onMenuToggle?: () => void;
    /** The action to perform for clear/reset button of MultiSelect. */
    onClear?: () => void;
    onKeyDown?: () => void;
}
/**
 * The toggle button component used to open and close the `MultiSelect` menu.
 * A second button is rendered above the main button that displays the current
 * number of selected items. Clicking on the second button will clear all
 * the selected items and the main button's close event will not be fired
 * (as expected).
 */
declare const MultiSelectMenuButton: React.ForwardRefExoticComponent<MultiSelectMenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default MultiSelectMenuButton;
