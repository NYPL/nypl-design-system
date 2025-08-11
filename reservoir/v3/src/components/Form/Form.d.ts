import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
import { GridGaps } from "../Grid/SimpleGrid";
interface FormBaseProps {
  /** className to be applied to FormRow, FormField, and Form */
  className?: string;
  /** Optional spacing size; if omitted, the default `large` (2rem / 32px)
   * spacing will be used; ```IMPORTANT: for general form layout, this prop
   * should not be used``` */
  gap?: GridGaps;
  /** ID that other components can cross reference (internal use) */
  id: string;
}
export interface FormChildProps extends Partial<FormBaseProps> {}
export interface FormProps extends FormBaseProps {
  /** Optional form `action` attribute */
  action?: string;
  /** Optional form `method` attribute */
  method?: "get" | "post";
  /** Function to call for the `onSubmit` form event. */
  onSubmit?: (e: React.FormEvent<any>) => void;
}
/** FormRow child-component */
export declare const FormRow: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormChildProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FormChildProps
>;
/** FormField child-component */
export declare const FormField: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormChildProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FormChildProps
>;
/** Main Form component */
export declare const Form: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormProps> &
      React.RefAttributes<HTMLDivElement & HTMLFormElement>
  >,
  React.PropsWithChildren<FormProps>
>;
export default Form;
