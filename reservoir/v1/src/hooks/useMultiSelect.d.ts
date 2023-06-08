import { MultiSelectItem, SelectedItems } from "../components/MultiSelect/MultiSelect";
/**
 * The useMultiSelect hook returns an object containing all the functions and state needed to handle the selectedItems of a `MultiSelect` component.
 * It can be used in conjunction with one single `MultiSelect` component as well as a group of `MultiSelect`s in the `MultiSelectGroup` component.
 * The returned object includes the functions onChange, onClear, onMixedStateChange for handling any changes to the selection of items
 * and the current state of the selection: selectedItems.
 */
export default function useMultiSelect(initialState?: SelectedItems): {
    selectedItems: {} | SelectedItems;
    setSelectedItems: (newState: SelectedItems) => void;
    onChange: (itemId: string, multiSelectId: string) => void;
    onMixedStateChange: (parentId: string, multiSelectId: string, items: MultiSelectItem[]) => void;
    onClear: (multiSelectId: string) => void;
    onClearAll: () => void;
};
