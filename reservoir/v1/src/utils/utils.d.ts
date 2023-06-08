import { HelperErrorTextType } from "../components/HelperErrorText/HelperErrorText";
import { AriaAttributes } from "./interfaces";
/**
 * range
 * Get an array of values from `start` to `stop` - 1 with an optional
 * `step` between values.
 */
export declare const range: (start: number, stop: number, step?: number) => number[];
/**
 * Given a pagination's pageCount, this will return (1) a page number,
 * derived from the current URL, and (2) a function that, when passed to
 * Pagination component, makes the URL change and refreshes the page.
 * @NOTE this is only used for Storybook documentation.
 */
export declare const getStorybookHrefProps: (pageCount: number) => {
    computedCurrentPage: number;
    getPageHref: (selectedPage: number) => string;
};
interface GetAriaAttrsProps {
    footnote: HelperErrorTextType;
    id: string;
    labelText: HelperErrorTextType;
    name: string;
    showLabel: boolean;
}
/**
 * Get aria-* attributes for input components. This sets the `aria-label` and
 * `aria-describedby` attributes, based on the label and footnote values.
 */
export declare const getAriaAttrs: ({ footnote, id, labelText, name, showLabel, }: GetAriaAttrsProps) => AriaAttributes;
/** Convert a hex color value to an rgb or rgba value */
export declare const hexToRGB: (hex: string, alpha: number) => string;
/** Calculate color luminance */
export declare const colorLuminance: (r: any, g: any, b: any) => number;
/** Calculate color contrast ratio */
export declare const contrastRatio: (hex1: string, hex2: string) => string;
/** This method will truncate text by centain length. Default length is 60. */
export declare const truncateText: (text: string, truncateTextLength?: number) => string;
export {};
