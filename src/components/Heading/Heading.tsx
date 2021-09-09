// MT-82, MT 225, etc
import * as React from "react";
import {
  Box,
  Heading as ChakraHeading,
  Link as ChakraLink,
  useStyleConfig,
} from "@chakra-ui/react";

// import bem from "../../utils/bem";
import { HeadingDisplaySizes, HeadingLevels } from "./HeadingTypes";

export interface HeadingProps {
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** Optional size used to override the default styles of the semantic HTML `<h>` elements */
  displaySize?: HeadingDisplaySizes;
  /** Optional ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed, `Heading` will default to `<h2>` */
  level?: HeadingLevels;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Inner text of the `<h*>` element */
  text?: string;
  /** Optional URL that header points to; when `url` prop is passed to `Heading`, a child `<a>` element is created and the heading text becomes an active link */
  url?: string;
  /** Optional className for the URL when the `url` prop is passed */
  urlClass?: string;
}

// Used to map between ButtonTypes enum values and Chakra variant options.
const variantMap = {};
for (const type in HeadingDisplaySizes) {
  variantMap[HeadingDisplaySizes[type]] = HeadingDisplaySizes[type];
}

/**
 * Map the HeadingDisplaySizes to the Heading Chakra theme variant object. If a wrong
 * value is passed (typically in non-Typescript scenarios), then the default
 * is the "primary" variant.
 */
const getVariant = (displaySize) => variantMap[displaySize] || null;

function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const {
    className,
    displaySize,
    id,
    level = HeadingLevels.Two,
    text,
    url,
    urlClass,
  } = props;

  const variant = displaySize ? getVariant(displaySize) : `h${level}`;
  const styles = useStyleConfig("Heading", { variant });
  const asHeading: any = `h${level}`;

  if (level < 1 || level > 6) {
    throw new Error("Heading only supports levels 1-6");
  }

  if (!props.children && !text) {
    throw new Error("Heading has no children, please pass prop: text");
  }

  if (React.Children.count(props.children) > 1) {
    const children = React.Children.map(
      props.children,
      (child) => (child as JSX.Element).type
    );
    // Catching the error because React's error isn't as helpful.
    throw new Error(
      `Please only pass one child into Heading, got ${children.join(", ")}`
    );
  }

  let content: string | React.ReactNode;
  if (props.children) {
    content = url ? (
      <Box as={ChakraLink} href={url} className={urlClass}>
        {props.children}
      </Box>
    ) : (
      props.children
    );
  } else {
    content = url ? (
      <Box as={ChakraLink} href={url} className={urlClass}>
        {text}
      </Box>
    ) : (
      text
    );
  }

  return (
    <ChakraHeading id={id} as={asHeading} sx={styles} className={className}>
      {content}
    </ChakraHeading>
  );
}

export default Heading;
