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
