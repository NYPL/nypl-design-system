import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
import { LayoutTypes } from "../../helpers/types";
import {
  MultiSelectWidths,
  SelectedItems as MultiSelectItems,
} from "../MultiSelect/MultiSelect";
export type FilterBarItemsType = (
  | boolean
  | number
  | number[]
  | string
  | string[]
  | MultiSelectItems
)[];
export interface FilterBarInlineProps {
  /** The className of the FilterBarInline. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  heading?: string | JSX.Element;
  /** Renders the layout of the FilterBarInline child components in a row or column. */
  layout?: LayoutTypes;
  /** Function for the global `Clear Filters` button. If passed the `Clear Filters` button will render. */
  onClear?: () => void;
  /** Function for the global `Apply Filters` button. If passed the `Apply Filters` button will render. */
  onSubmit?: () => void;
  /** Render prop function used to render child components with updated props. */
  renderChildren: ({
    closeOnBlur,
    isBlockElement,
    layout,
    width,
  }: {
    closeOnBlur?: boolean;
    isBlockElement?: boolean;
    layout?: LayoutTypes;
    width?: MultiSelectWidths;
  }) => React.ReactNode;
  /** The selected items state (items that were checked by user). */
  selectedItems?: FilterBarItemsType;
}
export declare const FilterBarInline: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FilterBarInlineProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FilterBarInlineProps
>;
export default FilterBarInline;
