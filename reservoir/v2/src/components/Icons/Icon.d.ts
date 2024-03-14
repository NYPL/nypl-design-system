import React from "react";
import { iconAlignArray, iconColorsArray, iconNamesArray, iconRotationsArray, iconSizesArray, iconTypesArray } from "./iconVariables";
export type IconAlign = typeof iconAlignArray[number];
export type IconColors = typeof iconColorsArray[number];
export type IconNames = typeof iconNamesArray[number];
export type IconRotations = typeof iconRotationsArray[number];
export type IconRotationTypes = typeof iconRotationsArray[number];
export type IconSizes = typeof iconSizesArray[number];
export type IconTypes = typeof iconTypesArray[number];
export interface IconProps {
    /** Aligns the icon. */
    align?: IconAlign;
    /** Optional className that will be added to the parent element */
    className?: string;
    /** Overrides default icon color (black). */
    color?: IconColors;
    /** Icons designated as decorative will be ignored by screenreaders. True
     * by default. */
    decorative?: boolean;
    /** Rotates the icon clockwise in increments of 90deg */
    iconRotation?: IconRotations;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** The name of the icon you want to use. */
    name?: IconNames;
    /** Sets the icon size. */
    size?: IconSizes;
    /** For accessibility purposes, the text passed in the `title` prop gets
     * rendered in a `title` element in the SVG. This descriptive text is not
     * visible but is needed for screenreaders to describe the graphic. */
    title?: string;
    /** FOR INTERNAL DS USE ONLY: the icon variant to display. */
    type?: IconTypes;
}
/**
 * Renders SVG-based icons.
 */
export declare const Icon: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<IconProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement & SVGSVGElement>>, {}>;
export default Icon;
