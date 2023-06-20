import {
  chakra,
  Heading as ChakraHeading,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Link from "../Link/Link";
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
  /** Optional ID that other components can cross reference for accessibility purposes */
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
  /** Optional size used to override the default styles of the semantic HTM
   * `<h>` elements */
  size?: HeadingSizes;
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
  /** Inner text of the `<h*>` element */
  text?: string;
  /** Optional URL that header points to; when `url` prop is passed to
   * `Heading`, a child `<a>` element is created and the heading text becomes
   * an active link */
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

export const Heading = chakra(
  forwardRef<HTMLHeadingElement, React.PropsWithChildren<HeadingProps>>(
    (props, ref?) => {
      const {
        className,
        id,
        isCapitalized,
        isUppercase,
        isLowercase,
        level = "two",
        noSpace,
        size,
        text,
        url,
        urlClass,
        ...rest
      } = props;
      const finalLevel = getMappedLevel(level);
      const variant = size ? size : level;
      const styles = useStyleConfig("Heading", {
        variant,
        isCapitalized,
        isUppercase,
        isLowercase,
        noSpace,
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
      /* The syntax for responsive styles is not working properly for fontSize
       * in the theme object, so logic for the responsive styleshas been written here. */
      const defaultRoot = "heading";
      const variantRoot = variant.slice(0, -1); // get the root of the variant being set
      const finalRoot = variantRoot === "h" ? defaultRoot : variantRoot; // 
      const sizeIndex = parseInt(variant.at(-1)); // get last character in string ${s} variant.at(-1)
      const responsiveStyles = !isNaN(sizeIndex)
        ? isLargerThanMobile
          ? {
              fontSize: `desktop.heading.${finalRoot}${sizeIndex}`,
            }
          : { fontSize: `mobile.heading.${finalRoot}${sizeIndex}` }
        : undefined;
      return (
        <ChakraHeading
          as={asHeading}
          className={className}
          id={id}
          ref={ref}
          sx={{
            ...styles,
            ...responsiveStyles,
          }}
          {...rest}
        >
          {content}
        </ChakraHeading>
      );
    }
  )
);

export default Heading;
