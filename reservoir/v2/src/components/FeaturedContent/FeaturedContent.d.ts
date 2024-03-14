import React from "react";
import { ImageProps } from "../Image/Image";
export declare const featuredContentWidthArray: string[];
export type featuredContentWidthType = typeof featuredContentWidthArray[number];
export declare const featuredContentPositionArray: readonly ["start", "end"];
export type featuredContentPositionType = typeof featuredContentPositionArray[number];
interface FeaturedContentImageProps extends ImageProps {
    /** String value that specifies the width of the image rendered within the component. */
    width?: featuredContentWidthType;
    /** String value that specifies the position of the image rendered within the component. */
    position?: featuredContentPositionType;
}
export interface FeaturedContentProps {
    /** Optional CSS class name to add. */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** The text content rendered in the component.  DS components and native HTML can be passed in this prop. */
    textContent: string | JSX.Element;
    /** Whether component will fill the full width of the browser window, instead of just its parent element.
     * False by default. */
    isFullWidth: boolean;
    /** Data object that contains the props related to the image element: alt, position, src, width.  */
    imageProps: FeaturedContentImageProps;
}
export declare const FeaturedContent: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<FeaturedContentProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default FeaturedContent;
