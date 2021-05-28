/* eslint-disable camelcase */
import * as React from "react";
import bem from "../../utils/bem";
import generateUUID from "../../helpers/generateUUID";

import {
  IconRotationTypes,
  IconNames,
  LogoNames,
  IconColors,
  IconSizes,
} from "./IconTypes";

import * as images from "./IconSvgs";

export interface IconProps {
  /** Additional attributes to pass to the `<svg>` tag. */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** className that appears in addition to "icon" */
  className?: string;
  /** Icons designated as decorative will be ignored by screenreaders */
  decorative?: boolean;
  /** This text will be added as a child `<title>` element inside the `<svg>` tag.  It is recommended to do this for increased accessibility. */
  titleText?: string;
  /** Rotates the icon clockwise in increments of 90deg */
  iconRotation?: IconRotationTypes;
  /** Overrides default icon color (black). */
  color?: IconColors;
  /** Sets the icon size. */
  size?: IconSizes;
  /** The name of the icon you want to use. */
  name?: IconNames | LogoNames;
}

/**
 * Icon component
 */
export default function Icon(props: React.PropsWithChildren<IconProps>) {
  const {
    blockName,
    decorative = false,
    className,
    titleText,
    iconRotation,
    color = IconColors.ui_black,
    size = IconSizes.large,
    modifiers = [],
    name,
    children,
  } = props;

  const attributes = props.attributes || {};

  if (iconRotation) {
    modifiers.push(iconRotation);
  }

  if (color) {
    modifiers.push(color);
  }

  if (size) {
    modifiers.push(size);
  }

  const iconID = generateUUID();
  const iconProps = {
    className: bem("icon", modifiers, blockName, [className]),
    id: iconID,
    role: "img",
    title: titleText || null,
    "aria-hidden": decorative,
    ...attributes,
  };

  // Apply icon props to child SVG
  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child as JSX.Element, { ...iconProps });
    });
  };

  const svgComponent = images[name];

  // Validation
  if (name && children) {
    throw new Error("Icon accepts either a name or children, not both");
  } else if (!name && !children) {
    console.warn(
      "Pass a name or any children to Icon to ensure an icon appears"
    );
  }

  if (name) {
    return React.createElement(svgComponent, iconProps, null);
  } else {
    return <>{renderChildren()}</>;
  }
}
