import {
  Box,
  BoxProps,
  chakra,
  ChakraProps,
  Icon as ChakraIcon,
  useStyleConfig,
  ChakraComponent,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import iconSvgs from "./IconSvgs";
import {
  iconAlignArray,
  iconColorsArray,
  iconNamesArray,
  iconRotationsArray,
  iconSizesArray,
  iconVariantsArray,
} from "./iconVariables";

export type IconAlign = typeof iconAlignArray[number];
export type IconColors = typeof iconColorsArray[number];
export type IconNames = typeof iconNamesArray[number];
export type IconRotations = typeof iconRotationsArray[number];
export type IconSizes = typeof iconSizesArray[number];
export type IconVariants = typeof iconVariantsArray[number];

export interface IconProps
  extends Pick<BoxProps, "className" | "id" | keyof ChakraProps> {
  /** Aligns the icon. */
  align?: IconAlign;
  /** Overrides default icon color (black). */
  color?: IconColors;
  /** Icons designated as decorative will be ignored by screenreaders. True
   * by default. */
  decorative?: boolean;
  /** Rotates the icon clockwise in increments of 90deg */
  iconRotation?: IconRotations;
  /** The name of the icon you want to use. */
  name?: IconNames;
  /** Sets the icon size. */
  size?: IconSizes;
  /** For accessibility purposes, the text passed in the `title` prop gets
   * rendered in a `title` element in the SVG. This descriptive text is not
   * visible but is needed for screenreaders to describe the graphic. */
  title?: string;
  /** FOR INTERNAL DS USE ONLY: the icon variant to display. */
  variant?: IconVariants;
}

/**
 * Renders SVG-based icons.
 */
export const Icon: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<IconProps> &
      React.RefAttributes<HTMLDivElement & SVGSVGElement>
  >,
  IconProps
> = chakra(
  forwardRef<
    HTMLDivElement & SVGSVGElement,
    React.PropsWithChildren<IconProps>
  >((props, ref?) => {
    const {
      align = "none",
      children,
      color = "ui.black",
      decorative = true,
      iconRotation = "rotate0",
      id,
      name,
      size = "default",
      title = `${name} icon`,
      variant = "default",
      ...rest
    } = props;
    const hasChildSVG = children && (children as JSX.Element).type === "svg";
    const styles = useStyleConfig("ReservoirIcon", {
      align,
      color,
      hasChildSVG,
      iconRotation,
      size,
      variant,
    });
    const iconProps = {
      "aria-hidden": decorative,
      id,
      role: "img",
      title,
      ...rest,
    };

    // Component prop validation
    if (name && hasChildSVG) {
      console.warn(
        "NYPL Reservoir Icon: Pass in either a `name` prop or an `svg` element " +
          "child. Do not pass both."
      );
      return null;
    } else if (children && !hasChildSVG) {
      console.warn(
        "NYPL Reservoir Icon: Only an `svg` element can be passed to the `Icon` " +
          "component as its child."
      );
      return null;
    } else if (!name && !hasChildSVG) {
      console.warn(
        "NYPL Reservoir Icon: Pass an icon `name` prop or an SVG child to " +
          "ensure an icon appears."
      );
      return null;
    }

    // The user wants to render an existing icon. Load the icon and render it
    // as a component through Chakra's Icon component. Otherwise, we're going to
    // render the SVG child with NYPL-theme styling.
    if (name) {
      const SvgComponent: any = iconSvgs[name];
      return (
        <ChakraIcon as={SvgComponent} ref={ref} {...iconProps} __css={styles} />
      );
    }

    // If all prop validation passed and no `name` prop was passed, we expect a
    // child SVG element was passed and render it accordingly.
    // Apply icon props to the SVG child.
    const childSVG = React.cloneElement(children as JSX.Element, {
      ...iconProps,
      ref,
    });

    return (
      <Box ref={ref} __css={styles}>
        {childSVG}
      </Box>
    );
  }),
  // Pass all custom props to Chakra and override, e.g. we want the
  // DS color value set and not color strings.
  { shouldForwardProp: () => true }
);

export default Icon;
