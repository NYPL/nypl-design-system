import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
  Icon as ChakraIcon,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { DimensionTypes } from "../../helpers/types";

import logoSvgs from "./LogoSvgs";
import { logoNamesArray, logoSizesArray } from "./logoVariables";

export type LogoNames = typeof logoNamesArray[number];
export type LogoSizes = typeof logoSizesArray[number];

export interface LogoProps
  extends Pick<BoxProps, "id" | "className" | keyof ChakraProps> {
  /** Logos designated as decorative will be ignored by screenreaders. False
   * by default. */
  decorative?: boolean;
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

    childSVG = React.cloneElement(children as JSX.Element, {
      ...logoProps,
      ref,
    });

    return (
      <Box data-testid="ds-logo" ref={ref} __css={styles}>
        {childSVG}
      </Box>
    );
  })
);

export default Logo;
