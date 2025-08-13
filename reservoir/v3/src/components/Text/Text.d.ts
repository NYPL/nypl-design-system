import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
export declare const textSizesArray: readonly ["default", "body1", "body2", "caption", "tag", "mini", "overline1", "overline2", "subtitle1", "subtitle2"];
export type TextSizes = typeof textSizesArray[number];
export interface TextProps {
    /** Additional class name to render in the `Text` component. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Optional prop used to show bolded text */
    isBold?: boolean;
    /** Optional prop used to show itlicized text */
    isItalic?: boolean;
    /** Optional prop used to show capitalized text */
    isCapitalized?: boolean;
    /** Optional prop used to show upper case text */
    isUppercase?: boolean;
    /** Optional prop used to show lower case text */
    isLowercase?: boolean;
    /** Optional prop used to remove default spacing */
    noSpace?: boolean;
    /** Optional prop used to explicitly set the ARIA role */
    role?: string;
    /** Optional prop to control the text styling */
    size?: TextSizes;
}
export declare const Text: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<TextProps> & React.RefAttributes<HTMLDivElement>>, React.PropsWithChildren<TextProps>>;
export default Text;
