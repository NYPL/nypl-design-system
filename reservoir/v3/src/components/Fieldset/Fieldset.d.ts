import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export interface FieldsetProps {
  /** Additional class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Flag to show or hide the text in the `legend` element. False by default. */
  isLegendHidden?: boolean;
  /** Flag to render "required" in the `legend`. True by default. */
  isRequired?: boolean;
  /** Text to display in the `legend` element. */
  legendText?: string;
  /** Whether or not to display the "(required)" text in the `legend` text.
   * True by default. */
  showRequiredLabel?: boolean;
}
/**
 * A wrapper component that renders a `fieldset` element along with a `legend`
 * element as its first child. Commonly used to wrap form components.
 */
export declare const Fieldset: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FieldsetProps> &
      React.RefAttributes<HTMLDivElement & HTMLFieldSetElement>
  >,
  React.PropsWithChildren<FieldsetProps>
>;
export default Fieldset;
