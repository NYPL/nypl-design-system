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

import Accessibility_full from "../../../icons/svg/accessibility_full.svg";
import Accessibility_partial from "../../../icons/svg/accessibility_partial.svg";
import Arrow from "../../../icons/svg/arrow.svg";
import Check from "../../../icons/svg/check.svg";
import Clock from "../../../icons/svg/clock.svg";
import Close from "../../../icons/svg/close.svg";
import Download from "../../../icons/svg/download.svg";
import Error_filled from "../../../icons/svg/error_filled.svg";
import Error_outline from "../../../icons/svg/error_outline.svg";
import Headset from "../../../icons/svg/headset.svg";
import Logo_brooklyn from "../../../icons/svg/logo_brooklynpl.svg";
import Logo_nypl from "../../../icons/svg/logo_nypl.svg";
import Logo_nypl_negative from "../../../icons/svg/logo_nypl_negative.svg";
import Logo_queens from "../../../icons/svg/logo_queenspl.svg";
import Minus from "../../../icons/svg/minus.svg";
import Plus from "../../../icons/svg/plus.svg";
import Search from "../../../icons/svg/search.svg";
import Speaker_notes from "../../../icons/svg/speaker_notes.svg";

const allSvgs = {
  accessibility_full: Accessibility_full,
  accessibility_partial: Accessibility_partial,
  arrow: Arrow,
  check: Check,
  clock: Clock,
  close: Close,
  download: Download,
  error_filled: Error_filled,
  error_outline: Error_outline,
  headset: Headset,
  logo_brooklyn: Logo_brooklyn,
  logo_nypl: Logo_nypl,
  logo_nypl_negative: Logo_nypl_negative,
  logo_queens: Logo_queens,
  minus: Minus,
  plus: Plus,
  search: Search,
  speaker_notes: Speaker_notes,
};
export interface IconProps {
  /** Additional attributes to pass to the `<input>` tag */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className that appears in addition to "icon" */
  className?: string;
  /** Decorative icons are skipped by screenreaders */
  decorative?: boolean;
  /** Icon title */
  titleText?: string;
  /** Rotates icons in quarters */
  iconRotation?: IconRotationTypes;
  /** Overrides default icon color (black) */
  color?: IconColors;
  /** Sets the icon size. */
  size?: IconSizes;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Name of the icon */
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

  //Purely decorative icons should be hidden from screen readers
  if (decorative) attributes["aria-hidden"] = true;

  if (iconRotation) {
    modifiers.push(iconRotation);
  }

  if (color) {
    modifiers.push(color);
  }

  if (size) {
    modifiers.push(size);
  }

  const iconProps = {
    className: bem("icon", modifiers, blockName, [className]),
    role: "img",
    title: titleText || null,
    titleId: titleText ? generateUUID() : null,
  };

  //Apply icon props to child SVG
  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child as JSX.Element, { ...iconProps });
    });
  };

  const ComponentName = allSvgs[name];

  //Validation
  if (name && children) {
    throw new Error("Icon accepts either a name or children, not both");
  } else if (!name && !children) {
    console.warn(
      "Pass a name or any children to Icon to ensure an icon appears"
    );
  }

  if (name) {
    return React.createElement(ComponentName, iconProps, null);
  } else {
    // svg = children;
    return <>{renderChildren()}</>;
  }
}
