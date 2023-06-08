import React from "react";
import { ComponentImageProps } from "../Image/Image";
export declare const heroTypesArray: readonly ["primary", "secondary", "secondaryBooksAndMore", "secondaryLocations", "secondaryResearch", "secondaryWhatsOn", "tertiary", "campaign", "fiftyFifty"];
export type HeroTypes = typeof heroTypesArray[number];
export declare const heroSecondaryTypes: string[];
export interface HeroImageProps extends Pick<ComponentImageProps, "alt" | "src"> {
}
export interface HeroProps {
    /** Optional hex color value used to override the default background
     * color for a given `Hero` variation.
     * Note: not all `Hero` variations utilize this prop. */
    backgroundColor?: string;
    /** Optional path to an image that will be used as a background image for the
     * `Hero` component.
     * Note: not all `Hero` variations utilize this prop. */
    backgroundImageSrc?: string;
    /** Optional hex color value used to override the default text color for a
     * given `Hero` variation.
     * Note: not all `Hero` variations utilize this prop. */
    foregroundColor?: string;
    /** Optional heading element. */
    heading?: JSX.Element;
    /** Used to control how the `Hero` component will be rendered. */
    heroType?: HeroTypes;
    /** Object used to create and render the `Image` component. Note that only
     * `src` and `alt` are the available attributes to pass. If `imageProps.alt`
     * is left blank, a warning will be logged to the console and will cause
     * accessibility issues. For `imageProps.src`, it will only work for the
     * "secondary", "fiftyFifty" and "campaign" `Hero` types; Note: `imageProps.src`
     * can only be used in conjunction with `backgroundImageSrc` for the "campaign"
     * `Hero` type. Note: not all `Hero` variations utilize this prop. */
    imageProps?: HeroImageProps;
    /** Optional details area that contains location data.
     * Note: not all `Hero` variations utilize this prop. */
    locationDetails?: JSX.Element;
    /** Optional string used for the subheader that displays
     * underneath the heading element. */
    subHeaderText?: string | JSX.Element;
}
export declare const Hero: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<HeroProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, {}>;
export default Hero;
