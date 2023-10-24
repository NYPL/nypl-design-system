import {
  Box,
  chakra,
  Heading as ChakraHeading,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Link from "../Link/Link";
import Text from "../Text/Text";
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

export const headingSizesArray = [
  "display1",
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "primary",
  "secondary",
  "tertiary",
  "callout",
] as const;
export const headingLevelsArray = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
] as const;

export type HeadingSizes = typeof headingSizesArray[number];
export type HeadingLevels = typeof headingLevelsArray[number];

export interface HeadingProps {
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** Optional ID that other components can cross reference for accessibility
   * purposes */
  id?: string;
  /** Optional prop used to show capitalized text */
  isCapitalized?: boolean;
  /** Optional prop used to show upper case text */
  isUppercase?: boolean;
  /** Optional prop used to show lower case text */
  isLowercase?: boolean;
  /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed,
   * `Heading` will default to `<h2>` */
  level?: HeadingLevels;
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
  /** String to populate the overline element */
  overline?: string;
  /** Optional size used to override the default styles of the native HTML `<h>`
   * elements */
  size?: HeadingSizes;
  /** String to populate the subtitle element */
  subtitle?: string;
  /** Inner text of the `<h*>` element */
  text?: string;
  /** Optional URL that header points to; when `url` prop is passed to
   * `Heading`, a child `<a>` element is created and the heading text becomes an
   * active link */
  url?: string;
  /** Optional className for the URL when the `url` prop is passed */
  urlClass?: string;
}

/** Map the word heading level to the number heading level. The default is 2. */
const getMappedLevel = (level = "two") => {
  const levelMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    one: "h1",
    two: "h2",
    three: "h3",
    four: "h4",
    five: "h5",
    six: "h6",
  };
  return levelMap[level] || "h2";
};

// TODO: As part of Phase 2 of the typography updates, make sure to update the
// default value for `level` to be "h2" instead of "two"
export const Heading = chakra(
  forwardRef<HTMLHeadingElement, React.PropsWithChildren<HeadingProps>>(
    (props, ref?) => {
      const {
        className,
        id,
        isCapitalized,
        isUppercase,
        isLowercase,
        level = "h2",
        noSpace,
        overline,
        size,
        subtitle,
        text,
        url,
        urlClass,
        ...rest
      } = props;
      const finalLevel = getMappedLevel(level);
      const variant = size ? size : level;
      const styles = useMultiStyleConfig("Heading", {
        variant,
        isCapitalized,
        isUppercase,
        isLowercase,
        noSpace,
        url,
      });
      const { isLargerThanMobile } = useNYPLBreakpoints();
      // Combine native base styles with any additional styles.
      // This is used in the `Hero` and `Notification` components.
      const asHeading: any = finalLevel;

      if (!props.children && !text) {
        throw new Error(
          "NYPL Reservoir Heading: No children or value was passed to the `text` prop."
        );
      }

      if (React.Children.count(props.children) > 1) {
        // Catching the error because React's error isn't as helpful.
        throw new Error(
          "NYPL Reservoir Heading: Only pass one child into Heading."
        );
      }

      let textCase = 0;
      if (isCapitalized) {
        textCase++;
      }
      if (isUppercase) {
        textCase++;
      }
      if (isLowercase) {
        textCase++;
      }

      if (textCase > 1) {
        console.warn(
          "NYPL Reservoir Heading: Multiple text case props have been passed " +
            "and the component will not render properly."
        );
      }

      const contentToRender = props.children ? props.children : text;
      const content = url ? (
        <Link className={urlClass} href={url} id={`${id}-link`}>
          {contentToRender}
        </Link>
      ) : (
        contentToRender
      );

      /** *********************************************************************
       * The syntax for responsive styles is not working properly for fontSize
       * in the theme object, so logic for the responsive styles has been
       * written here.
       * *********************************************************************/

      /** The default style used to map the `level` value to the corresponding
       * `size` value. */
      const defaultRoot = "heading";

      /** The heading size index that acts as a separator between the smaller
       * and larger sizing styles of the overline and subtitle elements. This
       * demarcation is purely based on design and aesthetics. */
      const overlineSubtitleSizeDemarcation = 2;

      /**  Most variant values have a number at the end, so let's remove the
       * last character from that value and see what's left. */
      const variantRoot = variant.slice(0, -1);

      /** The `level` values should map to a corresponding `size` value. If the
       * root is "h", then reassign the root to the `defaultRoot`. This value
       * will be used to build the style object. */
      const finalRoot = variantRoot === "h" ? defaultRoot : variantRoot;

      /** The new heading styles use a number with the variant style to indicate
       * which style should be used. For example, heading1, heading2, and so on.
       * If that number is set, we'll need it later. Let's grab the last
       * character in string now, so we can use later in the code. In fact,
       * let's grab that character and type it as an integer. */
      const sizeIndex = parseInt(variant.at(-1));

      /** The 2023 typography styles call for the Heading component to be
       * responsive and set differing font-size values for desktop and mobile.
       * We can tell if the new styles are being used if the size index is in
       * fact a number. If it is a number, let's go ahead and setup the
       * responsive styles. If it is not a number, then the deprecated styles
       * are being used and we don't need to worry about responsive font-size
       * styles.
       * */
      const responsiveStyles = !isNaN(sizeIndex)
        ? isLargerThanMobile
          ? {
              fontSize: `desktop.heading.${finalRoot}${sizeIndex}`,
            }
          : { fontSize: `mobile.heading.${finalRoot}${sizeIndex}` }
        : undefined;

      /** If the overline element is rendered, we'll also need responsive styles
       * for that. */
      const overlineSize = !isNaN(sizeIndex)
        ? sizeIndex <= overlineSubtitleSizeDemarcation
          ? "overline1"
          : "overline2"
        : undefined;
      const overlineFontSize = !isNaN(sizeIndex)
        ? sizeIndex <= overlineSubtitleSizeDemarcation
          ? isLargerThanMobile
            ? "desktop.overline.overline1"
            : "mobile.overline.overline1"
          : isLargerThanMobile
          ? "desktop.overline.overline2"
          : "mobile.overline.overline2"
        : undefined;

      /** If the subtitle element is rendered, we'll also need responsive styles
       * for that. */
      const subtitleSize = !isNaN(sizeIndex)
        ? sizeIndex <= overlineSubtitleSizeDemarcation
          ? "subtitle1"
          : "subtitle2"
        : undefined;
      const subtitleFontSize = !isNaN(sizeIndex)
        ? sizeIndex <= overlineSubtitleSizeDemarcation
          ? isLargerThanMobile
            ? "desktop.subtitle.subtitle1"
            : "mobile.subtitle.subtitle1"
          : isLargerThanMobile
          ? "desktop.subtitle.subtitle2"
          : "mobile.subtitle.subtitle2"
        : undefined;

      /** The styles that should be applied to the outer-most wrapper of the
       * Heading component. */
      const wrapperStyles = styles.headingWrapper;

      /** The styles for the actual native heading element. If the native
       * element is going to sit by itself, without the overline or subtitle
       * elements, then the wrapper styles can be applied directly to the native
       * element. Otherwise, the wrapper styles will be used later. */
      const headingStyles =
        overline || subtitle
          ? {
              ...styles,
              ...responsiveStyles,
            }
          : {
              ...styles,
              ...responsiveStyles,
              ...wrapperStyles,
            };

      /** The final text elements that will make up the rendered component. */
      const finalContent = (
        <>
          {overline && (
            <Text
              aria-roledescription="Subtitle"
              mb="xxs"
              role="paragraph"
              size={overlineSize}
              fontSize={overlineFontSize}
            >
              {overline}
            </Text>
          )}
          <ChakraHeading
            as={asHeading}
            className={className}
            id={id}
            ref={ref}
            sx={{
              ...headingStyles,
            }}
            {...rest}
          >
            {content}
          </ChakraHeading>
          {subtitle && (
            <Text
              aria-roledescription="Subtitle"
              mt="xs"
              noSpace
              role="paragraph"
              size={subtitleSize}
              fontSize={subtitleFontSize}
            >
              {subtitle}
            </Text>
          )}
        </>
      );

      /** Return the final content. If either the overline or subtitle elements
       * are included, then the heading lockup needs to be wrapped in am
       * <hgroup> element for semantic and accessibility reasons. */
      return overline || subtitle ? (
        <Box
          as="hgroup"
          role="group"
          aria-roledescription="Heading group"
          sx={{ ...wrapperStyles }}
          {...rest}
        >
          {finalContent}
        </Box>
      ) : (
        <>{finalContent}</>
      );
    }
  )
);

export default Heading;
