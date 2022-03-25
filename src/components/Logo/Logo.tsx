import * as React from "react";
import { Icon as ChakraIcon, Box, useStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";
import { LogoNames, LogoSizes } from "./LogoTypes";
import logoSvgs from "./LogoSvgs";

export interface LogoProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
  /** Optional className that will be added to the parent element */
  className?: string;
  /** Logos designated as decorative will be ignored by screenreaders. False
   * by default. */
  decorative?: boolean;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The name of the logo you want to use. */
  name?: LogoNames;
  /** Sets the logo size. */
  size?: LogoSizes;
  /** For accessibility purposes, the text passed in the `title` prop gets
   * rendered in a `title` element in the SVG. This descriptive text is not
   * visible but is needed for screenreaders to describe the graphic. */
  title?: string;
}

/**
 * The `Logo` component renders SVG-based logos and color variants that are
 * commonly used by the New York Public Library.
 */
export default function Logo(props: React.PropsWithChildren<LogoProps>) {
  const {
    additionalStyles = {},
    children,
    className,
    decorative = false,
    id = generateUUID(),
    name,
    size = LogoSizes.Medium,
    title = `${name} logo`,
  } = props;
  const styles = useStyleConfig("Logo", {
    size,
  });
  const logoProps = {
    "aria-hidden": decorative,
    className,
    id,
    role: "img",
    title,
  };
  let childSVG = null;

  // Component prop validation
  if (name && children) {
    console.warn(
      "NYPL Reservoir Logo: accepts either a `name` prop or an `svg` element child. It can not accept both."
    );
    return null;
  } else if (!name && !children) {
    console.warn(
      "NYPL Reservoir Logo: pass a logo `name` prop or an SVG child to `Logo` to ensure a logo appears."
    );
    return null;
  }

  // The user wants to render an existing logo. Load the logo and render it
  // as a component through Chakra's Icon component. Otherwise, we're going to
  // render the SVG child with NYPL-theme styling.
  if (name) {
    const SvgComponent: any = logoSvgs[name];
    return (
      <ChakraIcon
        as={SvgComponent}
        {...logoProps}
        __css={{ ...styles, ...additionalStyles }}
      />
    );
  }

  // If no `name` prop was passed, we expect a child SVG element to be passed.
  // Apply logo props to the SVG child.
  if (
    (children as JSX.Element).type === "svg" ||
    (children as JSX.Element).props?.type === "svg" ||
    (children as JSX.Element).props?.mdxType === "svg"
  ) {
    childSVG = React.cloneElement(children as JSX.Element, {
      ...logoProps,
    });
  } else {
    console.warn(
      "NYPL Reservoir Logo: an `svg` element must be passed to the `Logo` component."
    );
  }

  return <Box __css={styles}>{childSVG}</Box>;
}
