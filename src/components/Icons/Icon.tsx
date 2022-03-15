import {
  Icon as ChakraIcon,
  Box,
  chakra,
  useStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";

import {
  IconAlign,
  IconColors,
  IconNames,
  IconRotationTypes,
  IconSizes,
  IconTypes,
} from "./IconTypes";
import iconSvgs from "./IconSvgs";
import generateUUID from "../../helpers/generateUUID";

export interface IconProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
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
  iconRotation?: IconRotationTypes;
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
export const Icon = chakra(
  (props: React.PropsWithChildren<IconProps>) => {
    const {
      additionalStyles = {},
      align = IconAlign.None,
      children,
      className,
      color = IconColors.UiBlack,
      decorative = true,
      iconRotation = IconRotationTypes.Rotate0,
      id = generateUUID(),
      name,
      size = IconSizes.Medium,
      title = `${name} icon`,
      type = IconTypes.Default,
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
    };
    let childSVG = null;

    // Component prop validation
    if (name && children) {
      console.warn(
        "Icon accepts either a `name` prop or an `svg` element child, not both."
      );
      return null;
    } else if (!name && !children) {
      console.warn(
        "Icon: Pass an icon `name` prop or an SVG child to ensure an icon appears."
      );
      return null;
    }

    // The user wants to render an existing icon. Load the icon and render it
    // as a component through Chakra's Icon component. Otherwise, we're going to
    // render the SVG child with NYPL-theme styling.
    if (name) {
      const SvgComponent: any = iconSvgs[name];
      return (
        <ChakraIcon
          as={SvgComponent}
          {...iconProps}
          __css={{ ...styles, ...additionalStyles }}
        />
      );
    }

    // If no `name` prop was passed, we expect a child SVG element to be passed.
    // Apply icon props to the SVG child.
    if (
      (children as JSX.Element).type === "svg" ||
      (children as JSX.Element).props.type === "svg" ||
      (children as JSX.Element).props.mdxType === "svg"
    ) {
      childSVG = React.cloneElement(children as JSX.Element, {
        ...iconProps,
      });
    } else {
      console.warn("You must pass an `svg` element to the `Icon` component.");
    }

    return (
      <Box __css={styles} {...rest}>
        {childSVG}
      </Box>
    );
  },
  // Pass all custom props to Chakra and override, e.g. we want the
  // DS color prop to use the DS enum and not color strings.
  { shouldForwardProp: () => true }
);

export default Icon;
