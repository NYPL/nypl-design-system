/// <reference types="react" />
export interface MultiSelectItemsCountButtonProps {
  /** An ID string that other components can cross reference for accessibility purposes. */
  id: string;
  /** The id of the MultiSelect using this button. */
  multiSelectId: string;
  /** The label text rendered within the MultiSelect using this button. */
  multiSelectLabelText: string;
  /** The open status of the MultiSelect menu. */
  isOpen: boolean;
  /** The selected items state (items that were checked by user). */
  selectedItemsString: string;
  /** The number of selected items. */
  selectedItemsCount: number;
  /** The callback function for the menu toggle. */
  onMenuToggle?: () => void;
  /** The action to perform for the clear/reset button of individual MultiSelects. */
  onClear?: () => void;
  /** The action to perform for key down event. */
  onKeyDown?: () => void;
  /** Ref to the Accordion Button element. */
  accordionButtonRef: any;
}
/**
 * The toggle button component used to open and close the `MultiSelect` menu.
 * A second button is rendered above the main button that displays the current
 * number of selected items. Clicking on the second button will clear all
 * the selected items and the main button's close event will not be fired
 * (as expected).
 */
declare const MultiSelectItemsCountButton: import("../../../node_modules/react").ForwardRefExoticComponent<
  MultiSelectItemsCountButtonProps &
    import("../../../node_modules/react").RefAttributes<HTMLButtonElement>
>;
export default MultiSelectItemsCountButton;
