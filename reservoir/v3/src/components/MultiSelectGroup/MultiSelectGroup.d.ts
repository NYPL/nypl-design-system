import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
import { LayoutTypes } from "../../helpers/types";
import { MultiSelectWidths } from "../MultiSelect/MultiSelect";
export interface MultiSelectGroupProps {
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
  /** Render prop function used to render MultiSelect with updated props. */
  renderMultiSelect: ({
    isBlockElement,
    multiSelectWidth,
  }: {
    isBlockElement?: boolean;
    multiSelectWidth?: MultiSelectWidths;
  }) => React.ReactNode;
  /** Is set to `true` by default and determines if the `labelText` is visible on the site. */
  showLabel?: boolean;
}
/**
 * `MultiSelectGroup` is a wrapper for Reservoir `MultiSelect` components.
 * It specifies display styles (e.g. whether `MultiSelect`s are rendered in a
 * column or row) and any associated text (e.g. the group's label). Note,
 * the `MultiSelectGroup` will not work with non-Reservoir `MultiSelect`s
 * components or other HTML elements.
 */
export declare const MultiSelectGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    MultiSelectGroupProps & React.RefAttributes<HTMLDivElement>
  >,
  MultiSelectGroupProps
>;
export default MultiSelectGroup;
