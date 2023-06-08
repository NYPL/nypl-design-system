import React from "react";
import { ComponentImageProps } from "../Image/Image";
export type StructuredContentImagePosition = "left" | "right" | "center";
interface StructuredContentImageProps extends ComponentImageProps {
    /** Optional value to control the positioning of the internal `Image` component.
     * Defaults to `"left"`. */
    position?: StructuredContentImagePosition;
}
export interface StructuredContentProps {
    /** Optional value to set the text for the callout heading text. */
    calloutText?: string;
    /** Additional class name for the `StructuredContent` component. */
    className?: string;
    /** Optional value to set the text for the main heading text. */
    headingText?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Object used to create and render the `Image` component. */
    imageProps?: StructuredContentImageProps;
    /** Required value to set the text for the body content. */
    bodyContent: string | JSX.Element;
}
/**
 * The `StructuredContent` component that displays a heading, callout content,
 * an image, and body content. All are optional except for body content.
 */
export declare const StructuredContent: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<StructuredContentProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default StructuredContent;
