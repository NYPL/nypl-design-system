import { Heading as ChakraHeading, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import { HeadingDisplaySizes, HeadingLevels } from "./HeadingTypes";
import Link from "../Link/Link";
import generateUUID from "../../helpers/generateUUID";

export interface HeadingProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** Optional size used to override the default styles of the semantic HTML `<h>` elements */
  displaySize?: HeadingDisplaySizes;
  /** Optional ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional number 1-6 used to create the `<h*>` tag; if prop is not passed, `Heading` will default to `<h2>` */
  level?: HeadingLevels;
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
 * is "null" and displaySize is not envoked.
 */
const getVariant = (displaySize) => variantMap[displaySize] || null;

function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const {
    additionalStyles = {},
    className,
    displaySize,
    id = generateUUID(),
    level = HeadingLevels.Two,
    text,
    url,
    urlClass,
  } = props;
  const variant = displaySize ? getVariant(displaySize) : `h${level}`;
  const styles = useStyleConfig("Heading", { variant });
  // Combine native base styles with any additional styles.
  // This is used in the `Hero` and `Notification` components.
  const finalStyles = { ...styles, ...additionalStyles };
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

  const contentToRender = props.children ? props.children : text;
  const content = url ? (
    <Link className={urlClass} href={url} id={`${id}-link`}>
      {contentToRender}
    </Link>
  ) : (
    contentToRender
  );

  return (
    <ChakraHeading
      id={id}
      as={asHeading}
      sx={finalStyles}
      className={className}
    >
      {content}
    </ChakraHeading>
  );
}

export default Heading;
