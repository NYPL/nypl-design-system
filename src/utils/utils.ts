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
  const urlParams = new URLSearchParams(document.location.search);
  const pageParam = urlParams.get("page");

  const getPageNumber = (page: number) => {
    return page > 0 && page <= pageCount ? page : 1;
  };
  const computedCurrentPage =
    pageParam && Number(pageParam) && getPageNumber(Number(pageParam));
  const location = window.location;
  // Passing this function into `Pagination` makes the URL to change
  // and refreshes the page.
  // NOTE: This is very flaky. It removes the `&page=[number]` from the URL
  // and replaces it with the new page number. This is not ideal, but if it is
  // not removed, the example `Pagination` won't work.
  // Not a problem in real life apps (maybe?).
  const getPageHref = (selectedPage: number) => {
    const updatedHref = location.href.replace(/&page=.*/, "");
    return `${updatedHref}&page=${selectedPage}`;
  };

  return { computedCurrentPage, getPageHref };
};

interface GetAriaAttrsProps {
  additionalAriaLabel?: string;
  footnote: HelperErrorTextType;
  id: string;
  labelText: HelperErrorTextType;
  name: string;
  additionalHelperTextIds?: string;
  showLabel: boolean;
}
/**
 * Get aria-* attributes for input components. This sets the `aria-label` and
 * `aria-describedby` attributes, based on the label and footnote values.
 */
export const getAriaAttrs = ({
  additionalAriaLabel,
  footnote,
  id,
  labelText,
  name,
  additionalHelperTextIds,
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
    ariaAttributes["aria-describedby"] = `${
      additionalHelperTextIds ? additionalHelperTextIds + " " : ""
    }${id}-helperText`;
  }

  if (additionalAriaLabel) {
    ariaAttributes["aria-label"]
      ? (ariaAttributes["aria-label"] += ` ${additionalAriaLabel}`)
      : (ariaAttributes["aria-label"] = additionalAriaLabel);
  }
  return ariaAttributes;
};

/** Convert a hex color value to an rgb or rgba value */
export const hexToRGB = (hex: string, alpha: number) => {
  const shortHex = hex.length === 4;
  const rSlice = shortHex ? hex.slice(1, 2).repeat(2) : hex.slice(1, 3),
    gSlice = shortHex ? hex.slice(2, 3).repeat(2) : hex.slice(3, 5),
    bSlice = shortHex ? hex.slice(3, 4).repeat(2) : hex.slice(5, 7);
  const r = parseInt(rSlice, 16),
    g = parseInt(gSlice, 16),
    b = parseInt(bSlice, 16);
  const rgb = `${r}, ${g}, ${b}`;
  return alpha ? `rgba(${rgb},${alpha})` : `rgb(${rgb})`;
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
  const rgb1 = hexToRGB(hex1, null);
  const rgb2 = hexToRGB(hex2, null);
  const colorLuminance1 = colorLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const colorLuminance2 = colorLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const ratio =
    colorLuminance1 > colorLuminance2
      ? (colorLuminance2 + 0.05) / (colorLuminance1 + 0.05)
      : (colorLuminance1 + 0.05) / (colorLuminance2 + 0.05);

  return (ratio * 10).toFixed(2);
};

/** This method will truncate text by centain length. Default length is 60. */
export const truncateText = (text: string, truncateTextLength: number = 60) => {
  const updatedText = text.substring(0, truncateTextLength - 1);
  return `${updatedText.substring(0, updatedText.lastIndexOf(" "))}...`;
};

/** Prepare a string for use in an ID or class attribute */
export const sanitizeStringForAttribute = (str: string) => {
  const sanitizedStr = str.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  return sanitizedStr;
};
