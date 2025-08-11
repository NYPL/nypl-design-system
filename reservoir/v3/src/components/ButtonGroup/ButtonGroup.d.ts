import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
import { LayoutTypes } from "../../helpers/types";
export declare const buttonGroupWidthsArray: readonly ["default", "full"];
export type ButtonGroupWidths = typeof buttonGroupWidthsArray[number];
export interface ButtonGroupProps {
  /** Sets the width to "default" (for "fit-content") or "full". */
  buttonWidth?: ButtonGroupWidths;
  /** Additional className to use. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Set's the disabled state to all the internal `Button` components. */
  isDisabled?: boolean;
  /** Renders the layout of `Button` components in a row or column. */
  layout?: LayoutTypes;
}
/**
 * A simple wrapper to group `Button` components together. The layout can be set
 * to row or column and the width of internal `Button` components can be set to
 * the parent's full width or the `Button`'s content width
 */
export declare const ButtonGroup: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<ButtonGroupProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<ButtonGroupProps>
>;
export default ButtonGroup;
