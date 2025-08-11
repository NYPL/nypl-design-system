import { ChakraComponent } from "@chakra-ui/react";
import React from "../../../node_modules/react";
export declare const bannerTypesArray: readonly [
  "informative",
  "negative",
  "neutral",
  "positive",
  "recommendation",
  "warning"
];
export type BannerTypes = typeof bannerTypesArray[number];
export declare const bannerBgColorsArray: readonly [
  "brand.primary-05",
  "section.blogs.primary-05",
  "section.books-and-more.primary-05",
  "section.connect.primary-05",
  "section.education.primary-05",
  "section.locations.primary-05",
  "section.research.primary-05",
  "section.research-library.lpa-05",
  "section.research-library.schomburg-05",
  "section.research-library.schwarzman-05",
  "section.whats-on.primary-05",
  "dark.brand.primary-05",
  "dark.section.blogs.primary-05",
  "dark.section.books-and-more.primary-05",
  "dark.section.connect.primary-05",
  "dark.section.education.primary-05",
  "dark.section.locations.primary-05",
  "dark.section.research.secondary-05",
  "dark.section.research-library.lpa-05",
  "dark.section.research-library.schomburg-05",
  "dark.section.research-library.schwarzman-05",
  "dark.section.whats-on.primary-05"
];
export type BannerBgColors = typeof bannerBgColorsArray[number];
export declare const bannerHighlightColorsArray: readonly [
  "brand.primary",
  "section.blogs.primary",
  "section.books-and-more.primary",
  "section.connect.primary",
  "section.education.primary",
  "section.locations.primary",
  "section.research.primary",
  "section.research-library-lpa.primary",
  "section.research-library-schomburg.primary",
  "section.research-library-schwarzman.primary",
  "section.whats-on.primary",
  "dark.brand.primary",
  "dark.section.blogs.primary",
  "dark.section.books-and-more.primary",
  "dark.section.connect.primary",
  "dark.section.education.primary",
  "dark.section.locations.primary",
  "dark.section.research.secondary",
  "dark.section.research-library-lpa.primary",
  "dark.section.research-library-schomburg.primary",
  "dark.section.research-library-schwarzman.primary",
  "dark.section.whats-on.primary"
];
export type BannerHighlightColors = typeof bannerHighlightColorsArray[number];
export interface BannerProps {
  /** Label used to describe the `Banner`'s aside HTML element. */
  ariaLabel?: string;
  /** Used to set the color of the background for the full component.
   * Refer to how color values are defined and typed in the DS Icon component. */
  backgroundColor?: BannerBgColors;
  /** Additional `className` to add. */
  className?: string;
  /** Used to populate the body content of the component. */
  content: string | JSX.Element;
  /** Used to populate the heading element within the component.  A string
   * value can be passed to set the text for a default DS Heading component,
   * or an actual DS Heading component can be passed in. */
  heading?: string | JSX.Element;
  /** Used to set the color for the left border and icon.  Refer to how color
   * values are defined and typed in the DS Icon component. */
  highlightColor?: BannerHighlightColors;
  /** Optional custom `Icon` that will override the default `Icon`. */
  icon?: JSX.Element;
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Optional prop to control whether a `Banner` can be dismissed
   * (closed) by a user. */
  isDismissible?: boolean;
  /** Used to control the component's semantic coloring and iconography. */
  type?: BannerTypes;
}
/**
 * The `Banner` component is a non-modal semantic dialog used to communicate a
 * general status event or to promote a feature, providing contextual feedback
 * messages for typical user actions. They are displayed contextually within a
 * page flow and they will often prompt a user to take action.
 */
export declare const Banner: ChakraComponent<
  React.ForwardRefExoticComponent<
    BannerProps & React.RefAttributes<HTMLDivElement>
  >,
  BannerProps
>;
export default Banner;
