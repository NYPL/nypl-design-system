import React from "react";
import { HelperErrorTextType } from "../HelperErrorText/HelperErrorText";
export interface ComponentWrapperProps {
    /** The UI elements that will be wrapped by this component */
    children: React.ReactNode;
    /** A class name for the `div` parent element. */
    className?: string;
    /** Optional string to set the text for the component's description */
    descriptionText?: string | JSX.Element;
    /** Optional string to set the text for a `Heading` component */
    headingText?: string;
    /** Optional string to set the text for a `HelperErrorText` component */
    helperText?: HelperErrorTextType;
    /** Styles that target the helper text. */
    helperTextStyles?: {
        [key: string]: any;
    };
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** Optional string to populate the `HelperErrorText` for the error state
     * when `isInvalid` is true. */
    invalidText?: HelperErrorTextType;
    /** Sets invalid text in the error state. */
    isInvalid?: boolean;
    /** Offers the ability to hide the helper/invalid text. */
    showHelperInvalidText?: boolean;
}
export declare const ComponentWrapper: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<ComponentWrapperProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default ComponentWrapper;
