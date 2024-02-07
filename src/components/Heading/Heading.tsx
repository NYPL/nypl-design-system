import {
  Box,
  chakra,
  Heading as ChakraHeading,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Link from "../Link/Link";
import Text from "../Text/Text";

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
       * The new heading component provide overline and subtitle elements and
       * the font size for those elements is based on the level of the heading
       * component. The conditions below determine the styles that should be
       * used for the overline and subtitle elements.
       * *********************************************************************/

      /** The new heading styles use a number with the variant style to indicate
       * which style should be used. For example, heading1, heading2, and so on.
       * If that number is set, we'll need it later. Let's grab the last
       * character in string now, so we can use later in the code. In fact,
       * let's grab that character and type it as an integer. */
      const sizeIndex = parseInt(variant.at(-1));

      /** This is the heading size index that acts as a separator between the
       * smaller and larger sizing styles of the overline and subtitle elements.
       * This demarcation is purely based on design and aesthetics. */
      const overlineSubtitleSizeDemarcation = 2;

      /** Set the size of the overline based on the heading size index. */
      const overlineSize = !isNaN(sizeIndex)
        ? sizeIndex <= overlineSubtitleSizeDemarcation
          ? "overline1"
          : "overline2"
        : undefined;

      /** Set the size of the subtitle based on the heading size index. */
      const subtitleSize = !isNaN(sizeIndex)
        ? sizeIndex <= overlineSubtitleSizeDemarcation
          ? "subtitle1"
          : "subtitle2"
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
            }
          : {
              ...styles,
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
