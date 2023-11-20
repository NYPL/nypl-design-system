import {
  Icon as ChakraIcon,
  Box,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

import iconSvgs from "./IconSvgs";
import {
  iconAlignArray,
  iconColorsArray,
  iconNamesArray,
  iconRotationsArray,
  iconSizesArray,
  iconTypesArray,
} from "./iconVariables";

export type IconAlign = typeof iconAlignArray[number];
export type IconColors = typeof iconColorsArray[number];
export type IconNames = typeof iconNamesArray[number];
export type IconRotations = typeof iconRotationsArray[number];
// `IconRotationTypes` is deprecated; `IconRotations` should be used instead
export type IconRotationTypes = typeof iconRotationsArray[number];
export type IconSizes = typeof iconSizesArray[number];
export type IconTypes = typeof iconTypesArray[number];

export interface IconProps {
  /** Aligns the icon. */
  align?: IconAlign;
  /** Optional className that will be added to the parent element */
  className?: string;
  /** Overrides default icon color (black). */
  color?: IconColors;
  /** Icons designated as decorative will be ignored by screenreaders. True
   * by default. */
  decorative?: boolean;
  /** Rotates the icon clockwise in increments of 90deg */
  iconRotation?: IconRotations;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** The name of the icon you want to use. */
  name?: IconNames;
  /** Sets the icon size. */
  size?: IconSizes;
  /** For accessibility purposes, the text passed in the `title` prop gets
   * rendered in a `title` element in the SVG. This descriptive text is not
   * visible but is needed for screenreaders to describe the graphic. */
  title?: string;
  /** FOR INTERNAL DS USE ONLY: the icon variant to display. */
  type?: IconTypes;
}

/**
 * Renders SVG-based icons.
 */
export const Icon: React.FC<any> = chakra(
  forwardRef<
    HTMLDivElement & SVGSVGElement,
    React.PropsWithChildren<IconProps>
  >((props, ref?) => {
    const {
      align = "none",
      children,
      className,
      color = "ui.black",
      decorative = true,
      iconRotation = "rotate0",
      id,
      name,
      size = "default",
      title = `${name} icon`,
      type = "default",
      ...rest
    } = props;
    const styles = useStyleConfig("Icon", {
      align,
      color,
      iconRotation,
      size,
      variant: type,
    });
    const iconProps = {
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
        "NYPL Reservoir Icon: Pass in either a `name` prop or an `svg` element " +
          "child. Do not pass both."
      );
      return null;
    } else if (!name && !children) {
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

    // If no `name` prop was passed, we expect a child SVG element to be passed.
    // Apply icon props to the SVG child.
    if (
      (children as JSX.Element).type === "svg" ||
      (children as JSX.Element).props?.type === "svg" ||
      (children as JSX.Element).props?.mdxType === "svg"
    ) {
      childSVG = React.cloneElement(children as JSX.Element, {
        ...iconProps,
        ref,
      });
    } else {
      console.warn(
        "NYPL Reservoir Icon: An `svg` element must be passed to the `Icon` " +
          "component as its child."
      );
    }

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
