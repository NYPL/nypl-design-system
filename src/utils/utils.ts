import { HelperErrorTextType } from "../components/HelperErrorText/HelperErrorText";
import { AriaAttributes } from "./interfaces";

// Utility functions to use throughout the codebase

/**
 * range
 * Get an array of values from `start` to `stop` - 1 with an optional
 * `step` between values.
 */
export const range = (start: number, stop: number, step = 1): number[] => {
  if (!start) {
    return [];
  }

  return Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
};

/**
 * Given a pagination's pageCount, this will return (1) a page number,
 * derived from the current URL, and (2) a function that, when passed to
 * Pagination component, makes the URL change and refreshes the page.
 * @NOTE this is only used for Storybook documentation.
 */
export const getStorybookHrefProps = (pageCount: number) => {
  // This uses the `addon-queryparams` Storybook addon.
  const urlParams = new URLSearchParams(document.location.search);
  const pageParam = urlParams.get("page");

  const getPageNumber = (page: number, pageCount: number) => {
    return page > 0 && page <= pageCount ? page : 1;
  };
  const computedCurrentPage =
    pageParam &&
    Number(pageParam) &&
    getPageNumber(Number(pageParam), pageCount);
  const location = window.location;
  // Passing this function into `Pagination` makes the URL to change
  // and refreshes the page.
  const getPageHref = (selectedPage: number) => {
    return `${location.href}&page=${selectedPage}`;
  };

  return { computedCurrentPage, getPageHref };
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
export const getAriaAttrs = ({
  footnote,
  id,
  labelText,
  name,
  showLabel,
}: GetAriaAttrsProps): AriaAttributes => {
  let ariaAttributes: AriaAttributes = {};

  if (!showLabel) {
    if (typeof labelText !== "string") {
      console.warn(
        `NYPL Reservoir ${name}: \`labelText\` must be a string when \`showLabel\` is false.`
      );
    }
    ariaAttributes["aria-label"] =
      labelText && footnote
        ? `${labelText} - ${footnote}`
        : (labelText as string);
  } else if (footnote) {
    ariaAttributes["aria-describedby"] = `${id}-helperText`;
  }

  return ariaAttributes;
};

/** Convert a hex color value to an rgb or rgba value */
export const hexToRGB = (
  hex: string,
  alpha: number,
  asArray: boolean = false
) => {
  const shortHex = hex.length === 4;
  const rSlice = shortHex ? hex.slice(1, 2).repeat(2) : hex.slice(1, 3),
    gSlice = shortHex ? hex.slice(2, 3).repeat(2) : hex.slice(3, 5),
    bSlice = shortHex ? hex.slice(3, 4).repeat(2) : hex.slice(5, 7);
  const r = parseInt(rSlice, 16),
    g = parseInt(gSlice, 16),
    b = parseInt(bSlice, 16);
  const rgb = `${r}, ${g}, ${b}`;
  return asArray ? [r, g, b] : alpha ? `rgba(${rgb},${alpha})` : `rgb(${rgb})`;
};

/** Calculate color luminance */
export const colorLuminance = (r, g, b) => {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

/** Calculate color contrast ratio */
export const contrastRatio = (hex1: string, hex2: string) => {
  const rgb1 = hexToRGB(hex1, null, true);
  const rgb2 = hexToRGB(hex2, null, true);
  const colorLuminance1 = colorLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const colorLuminance2 = colorLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const ratio =
    colorLuminance1 > colorLuminance2
      ? (colorLuminance2 + 0.05) / (colorLuminance1 + 0.05)
      : (colorLuminance1 + 0.05) / (colorLuminance2 + 0.05);

  return (ratio * 10).toFixed(2);
};
