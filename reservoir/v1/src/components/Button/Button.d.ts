import React from "react";
export declare const buttonElementTypeArray: readonly ["submit", "button", "reset"];
export declare const buttonSizesArray: readonly ["small", "medium", "large"];
export declare const buttonTypesArray: readonly ["primary", "secondary", "text", "callout", "pill", "noBrand", "link"];
export type ButtonElementType = typeof buttonElementTypeArray[number];
export type ButtonSizes = typeof buttonSizesArray[number];
export type ButtonTypes = typeof buttonTypesArray[number];
interface ButtonProps {
    /** The button variation to render based on the `ButtonTypes` type.*/
    buttonType?: ButtonTypes;
    /** Additional className to use. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id: string;
    /** Adds 'disabled' property to the button. */
    isDisabled?: boolean;
    /** Trigger the Button's action through the `mouseDown` event handler instead
     * of `onClick`. `false` by default. */
    mouseDown?: boolean;
    /** The action to perform on the `<button>`'s onClick function. */
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    /** The size of the `Button`. */
    size?: ButtonSizes;
    /** The HTML button type attribute. */
    type?: ButtonElementType;
}
/**
 * Renders a simple `button` element with custom variant styles.
 */
export declare const Button: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<ButtonProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>, {}>;
export default Button;
