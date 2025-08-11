import { ChakraComponent } from "@chakra-ui/react";
import React, { ImgHTMLAttributes } from '../../../node_modules/react';
import { DimensionTypes } from "../../helpers/types";
export declare const imageRatiosArray: readonly ["fourByThree", "fourByOne", "twoByThree", "oneByTwo", "original", "sixteenByNine", "square", "threeByFour", "threeByTwo", "twoByOne"];
export declare const imageSizesArray: readonly ["default", "xxxsmall", "xxsmall", "xsmall", "small", "medium", "large"];
export declare const imageTypesArray: readonly ["default", "circle"];
export type ImageRatios = typeof imageRatiosArray[number];
export type ImageSizes = typeof imageSizesArray[number];
export type ImageTypes = typeof imageTypesArray[number];
export interface ComponentImageProps extends Partial<HTMLImageElement> {
    /** String value used to populate the `alt` attribute of the internal `Image`
     * component's `img` element. @NOTE if an image is used, this value must be passed. */
    alt?: string;
    /** Optional value to control the aspect ratio of the internal `Image` component.
     * Defaults to `ImageRatios.Square`. */
    aspectRatio?: ImageRatios;
    /** Optional value to render as a caption for the internal `Image` component. */
    caption?: string;
    /** Optional DOM element to use instead of the DS `Image` component. */
    component?: JSX.Element;
    /** Optional value to render as a credit for the internal `Image` component. */
    credit?: string;
    /** Fallback image path or URL. */
    fallbackSrc?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Flag to set the internal `Image` component to `isLazy` mode. */
    isLazy?: boolean;
    /** Additional action to perform in the `img`'s `onerror` attribute function. */
    onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    /** Optional value to control the size of the internal `Image` component.
     * Defaults to `ImageSizes.Default`. */
    size?: ImageSizes;
    /** Optional value that contains the path to an image. If omitted, the internal
     * DS `Image` component will not render. */
    src?: string;
}
interface ImageWrapperProps {
    /** Optionally pass in additional Chakra-based styles. */
    additionalWrapperStyles?: {
        [key: string]: any;
    };
    /** ClassName you can add in addition to 'image' */
    className?: string;
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Optional value to control the aspect ratio of the card image; default
     * value is `"original"` */
    ratio?: ImageRatios;
    /** Optional value to control the size of the image */
    size?: ImageSizes;
    /** Sets the image size based on the width or height. Width by default. */
    sizeBasedOn?: DimensionTypes;
}
export interface ImageProps extends ImageWrapperProps, ImgHTMLAttributes<HTMLImageElement> {
    /** Optionally pass in additional Chakra-based styles only for the figure. */
    additionalFigureStyles?: {
        [key: string]: any;
    };
    /** Optionally pass in additional Chakra-based styles only for the image. */
    additionalImageStyles?: {
        [key: string]: any;
    };
    /** Alternate text description of the image */
    alt?: string;
    /** Optional value to control the aspect ratio of the card image; default
     * value is `"original"` */
    aspectRatio?: ImageRatios;
    /** Adding will wrap the image in a <figure> */
    caption?: string;
    /** Custom image component */
    component?: JSX.Element | null;
    /** Adding will wrap the image in a <figure> */
    credit?: string;
    /** Fallback image path or URL. */
    fallbackSrc?: string;
    /** Optional value for the image type */
    imageType?: ImageTypes;
    /** Flag to set the internal `Image` component to `isLazy` mode. */
    isLazy?: boolean;
    /** Additional action to perform in the `img`'s `onerror` attribute function. */
    onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
    /** The src attribute is required, and contains the path to the image you want to embed. */
    src?: string;
}
export declare const Image: ChakraComponent<React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLDivElement>>, ImageProps>;
export default Image;
