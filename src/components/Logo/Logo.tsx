import {
  Box,
  chakra,
  ChakraComponent,
  Icon as ChakraIcon,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { DimensionTypes } from "../../helpers/types";

import logoSvgs from "./LogoSvgs";
import { logoNamesArray, logoSizesArray } from "./logoVariables";

export type LogoNames = typeof logoNamesArray[number];
export type LogoSizes = typeof logoSizesArray[number];

export interface LogoProps {
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
  /** Sets the logo size based on the width or height. Width by default. */
  sizeBasedOn?: DimensionTypes;
  /** For accessibility purposes, the text passed in the `title` prop gets
   * rendered in a `title` element in the SVG. This descriptive text is not
   * visible but is needed for screenreaders to describe the graphic. */
  title?: string;
}

/**
 * The `Logo` component renders SVG-based logos and color variants that are
 * commonly used by the New York Public Library.
 */
export const Logo: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<LogoProps> &
      React.RefAttributes<HTMLDivElement & SVGSVGElement>
  >,
  LogoProps
> = chakra(
  forwardRef<
    HTMLDivElement & SVGSVGElement,
    React.PropsWithChildren<LogoProps>
  >((props, ref?) => {
    const {
      children,
      className,
      decorative = false,
      id,
      name,
      size = "medium",
      sizeBasedOn = "width",
      title = `${name} logo`,
      ...rest
    } = props;
    const styles = useStyleConfig("Logo", {
      size,
      sizeBasedOn,
    });
    const logoProps = {
      "aria-hidden": decorative,
      className,
      id,
      role: "img",
      title,
      ...rest,
    };
    let childSVG: any = null;

    // Component prop validation
    if (name && children) {
      console.warn(
        "NYPL Reservoir Logo: Pass either a `name` prop or an `svg` element " +
          "child. Do not pass both."
      );
      return null;
    } else if (!name && !children) {
      console.warn(
        "NYPL Reservoir Logo: Pass a logo `name` prop or an SVG child to " +
          "`Logo` to ensure a logo appears."
      );
      return null;
    }

    // The user wants to render an existing logo. Load the logo and render it
    // as a component through Chakra's Icon component. Otherwise, we're going to
    // render the SVG child with NYPL-theme styling.
    if (name) {
      const SvgComponent: any = logoSvgs[name];
      return (
        <ChakraIcon as={SvgComponent} ref={ref} {...logoProps} __css={styles} />
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
        ref,
      });
    } else {
      console.warn(
        "NYPL Reservoir Logo: An `svg` element must be passed to the `Logo` " +
          "component as its child."
      );
    }

    return (
      <Box ref={ref} __css={styles}>
        {childSVG}
      </Box>
    );
  })
);

export default Logo;
