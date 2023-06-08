import React from "react";
import { logoNamesArray, logoSizesArray } from "./logoVariables";
export type LogoNames = typeof logoNamesArray[number];
export type LogoSizes = typeof logoSizesArray[number];
export interface LogoProps {
    /** Optional className that will be added to the parent element */
    className?: string;
    /** Logos designated as decorative will be ignored by screenreaders. False
     * by default. */
    decorative?: boolean;
    /** ID that other components can cross reference for accessibility purposes */
    id?: string;
    /** The name of the logo you want to use. */
    name?: LogoNames;
    /** Sets the logo size. */
    size?: LogoSizes;
    /** For accessibility purposes, the text passed in the `title` prop gets
     * rendered in a `title` element in the SVG. This descriptive text is not
     * visible but is needed for screenreaders to describe the graphic. */
    title?: string;
}
/**
 * The `Logo` component renders SVG-based logos and color variants that are
 * commonly used by the New York Public Library.
 */
export declare const Logo: import("@chakra-ui/react").ChakraComponent<React.ForwardRefExoticComponent<LogoProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement & SVGSVGElement>>, {}>;
export default Logo;
