import React from "react";
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
export interface FormChildProps extends Partial<FormBaseProps> {
}
export interface FormProps extends FormBaseProps {
    /** Optional form `action` attribute */
    action?: string;
    /** Optional form `method` attribute */
    method?: "get" | "post";
    /** Function to call for the `onSubmit` form event. */
    onSubmit?: (e: React.FormEvent<any>) => void;
}
/** FormRow child-component */
export declare const FormRow: import("@chakra-ui/react").ChakraComponent<(props: React.PropsWithChildren<FormChildProps>) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
/** FormField child-component */
export declare const FormField: import("@chakra-ui/react").ChakraComponent<(props: React.PropsWithChildren<FormChildProps>) => import("@emotion/react/jsx-runtime").JSX.Element, {}>;
/** Main Form component */
export declare const Form: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<FormProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement & HTMLFormElement>>, {}>;
export default Form;
