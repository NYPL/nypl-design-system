import React from "react";
import { LayoutTypes } from "../../helpers/types";
export declare const skeletonLoaderImageRatiosArray: readonly ["landscape", "portrait", "square"];
export type SkeletonLoaderImageRatios = typeof skeletonLoaderImageRatiosArray[number];
export interface SkeletonLoaderProps {
    /** Additional class name for the Skeleton component. */
    className?: string;
    /** Optional numeric value to control the number of lines for content
     * placeholder; default value is `3`. */
    contentSize?: number;
    /** Optional numeric value to control the number of lines for heading
     * placeholder; default value is `1`. */
    headingSize?: number;
    /** Optional value to control the aspect ratio of the image placeholder;
     * default value is `"square"`. */
    imageAspectRatio?: SkeletonLoaderImageRatios;
    /** Optional boolean value to control visibility of border around skeleton loader. */
    isBordered?: boolean;
    /** Optional value to control the position of the image placeholder;
     * default value is `"column"`. */
    layout?: LayoutTypes;
    /** Optional boolean value to control visibility of button placeholder. */
    showButton?: boolean;
    /** Optional boolean value to control visibility of content placeholder. */
    showContent?: boolean;
    /** Optional boolean value to control visibility of heading placeholder. */
    showHeading?: boolean;
    /** Optional boolean value to control visibility of image placeholder. */
    showImage?: boolean;
    /** Optional width value. This value should be entered with the same
     * formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`).
     * If omitted, the skeleton loader will have a default width of 100%. */
    width?: string;
}
/**
 * The `SkeletonLoader` component renders a placeholder to be used while
 * dynamic content is loading.
 */
export declare const SkeletonLoader: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<SkeletonLoaderProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default SkeletonLoader;
