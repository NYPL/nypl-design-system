import { ChakraComponent } from "@chakra-ui/react";
import React from '../../../node_modules/react';
import { ComponentImageProps } from "../Image/Image";
export declare const heroTypesArray: readonly ["primary", "secondary", "secondaryBooksAndMore", "secondaryLocations", "secondaryResearch", "secondaryWhatsOn", "tertiary", "campaign", "fiftyFifty"];
export type HeroTypes = typeof heroTypesArray[number];
export declare const heroSecondaryTypes: string[];
export interface HeroImageProps extends Pick<ComponentImageProps, "alt" | "fallbackSrc" | "id" | "src" | "onError" | "component"> {
}
export interface HeroProps {
    /**
     * Optional background color for the backdrop only in the `campaign` variant.
     * When both `backdropBackgroundColor` and `backgroundImageSrc` are passed,
     * the `backgroundImageSrc` will take precedence.
     */
    backdropBackgroundColor?: string;
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
    /** ID that other components can cross reference for accessibility purposes. */
    id?: string;
    /** Object used to create and render the `Image` component. You can pass `component`
     * (with its own internal props, which will override) or `src`, `alt`, `id`, `fallBackSrc`, and `onError`.
     * If `imageProps.alt` is left blank, a warning will be logged to the console and
     * will cause accessibility issues. For `imageProps.src`, it will only work for
     * the "secondary", "fiftyFifty" and "campaign" `Hero` types. */
    imageProps?: HeroImageProps;
    /** Optional boolean used to toggle the default text color from light to dark.
     * Set isDarkText to `true` if the backgroundColor is set to a light color. */
    isDarkText?: boolean;
    /** Optional boolean used to toggle the treatment of the background image in
     * the "campaign" variant. If true, the background image will be converted to
     * black & white and darkened to 60% black. */
    isDarkBackgroundImage?: boolean;
    /** Optional details area that contains location data.
     * Note: not all `Hero` variations utilize this prop. */
    locationDetails?: JSX.Element;
    /** Optional string used for the subheader that displays
     * underneath the heading element. */
    subHeaderText?: string | JSX.Element;
}
export declare const Hero: ChakraComponent<React.ForwardRefExoticComponent<React.PropsWithChildren<HeroProps> & React.RefAttributes<HTMLDivElement>>, HeroProps>;
export default Hero;
