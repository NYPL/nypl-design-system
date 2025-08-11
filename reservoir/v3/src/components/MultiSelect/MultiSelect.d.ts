import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export interface MultiSelectItem {
  id: string;
  name: string;
  isDisabled?: boolean;
  children?: MultiSelectItem[];
  itemCount?: number;
}
export declare const multiSelectWidthsArray: readonly ["fitContent", "full"];
export type MultiSelectWidths = typeof multiSelectWidthsArray[number];
export declare const multiSelectListOverflowArray: readonly [
  "scroll",
  "expand"
];
export type MultiSelectListOverflowTypes =
  typeof multiSelectListOverflowArray[number];
export interface SelectedItems {
  [name: string]: {
    items: string[];
  };
}
export interface MultiSelectProps {
  /** The button text rendered within the MultiSelect. */
  buttonText: string;
  /** Determines whether the component will toggle to the closed state
   * when it loses focus. The default value is false. */
  closeOnBlur?: boolean;
  /** The number of items that will be visible in the list when the component
   * first loads. */
  defaultItemsVisible?: number;
  /** The action to perform for the clear/reset button of individual MultiSelects. */
  onClear?: () => void;
  /** The action to perform on the checkbox's onChange function. */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The action to perform for a mixed state checkbox (parent checkbox). */
  onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** An ID string that other components can cross reference for accessibility purposes. */
  id: string;
  /** Boolean value used to control how the MultiSelect component will render
   * within the page and interact with other DOM elements. The default value is false. */
  isBlockElement?: boolean;
  /** Set the default open or closed state of the Multiselect. */
  isDefaultOpen?: boolean;
  /** Boolean value used to enable the component's search functionality
   * The default value is false. */
  isSearchable?: boolean;
  /** The items to be rendered in the Multiselect as checkbox options. */
  items: MultiSelectItem[];
  /** listOverflow is a property indicating how the list should handle overflow,
   * with options limited to either "scroll" or "expand." */
  listOverflow?: MultiSelectListOverflowTypes;
  /** The selected items state (items that were checked by user). */
  selectedItems: SelectedItems;
  /** Value used to set the width for the MultiSelect component. */
  width?: MultiSelectWidths;
}
/**
 * The MultiSelect component is a customizable form input that supports multiple
 * configurations, including search functionality, checkbox options, and
 * hierarchical structure, with a parent checkbox toggling all children and
 * dynamic styling through Chakra UI.
 */
export declare const MultiSelect: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<MultiSelectProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<MultiSelectProps>
>;
export default MultiSelect;
