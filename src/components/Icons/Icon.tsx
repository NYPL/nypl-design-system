/* eslint-disable camelcase */
import * as React from "react";
import bem from "../../utils/bem";

import {
  IconRotationTypes,
  IconNames,
  LogoNames,
  IconColors,
  IconSizes,
} from "./IconTypes";

import accessibility_full from "../../../icons/svg/accessibility_full.svg";
import accessibility_partial from "../../../icons/svg/accessibility_partial.svg";
import arrow from "../../../icons/svg/arrow.svg";
import check from "../../../icons/svg/check.svg";
import clock from "../../../icons/svg/clock.svg";
import close from "../../../icons/svg/close.svg";
import download from "../../../icons/svg/download.svg";
import error_filled from "../../../icons/svg/error_filled.svg";
import error_outline from "../../../icons/svg/error_outline.svg";
import headset from "../../../icons/svg/headset.svg";
import logo_brooklyn from "../../../icons/svg/logo_brooklynpl.svg";
import logo_nypl from "../../../icons/svg/logo_nypl.svg";
import logo_nypl_negative from "../../../icons/svg/logo_nypl_negative.svg";
import logo_queens from "../../../icons/svg/logo_queenspl.svg";
import minus from "../../../icons/svg/minus.svg";
import plus from "../../../icons/svg/plus.svg";
import search from "../../../icons/svg/search.svg";
import speaker_notes from "../../../icons/svg/speaker_notes.svg";

const allSvgs = {
  accessibility_full,
  accessibility_partial,
  arrow,
  check,
  clock,
  close,
  download,
  error_filled,
  error_outline,
  headset,
  logo_brooklyn,
  logo_nypl,
  logo_nypl_negative,
  logo_queens,
  minus,
  plus,
  search,
  speaker_notes,
};

export interface IconProps {
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className that appears in addition to "icon" */
  className?: string;
  /** Decorative icons are skipped by screenreaders */
  decorative?: boolean;
  /** Desc prop added to the <svg> element */
  desc?: boolean;
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
  /** Icon role */
  role?: string;
  /** Icon title */
  title?: boolean;
}

/**
 * Icon component
 */
export default function Icon(props: React.PropsWithChildren<IconProps>) {
  const baseClass = "icon";

  const {
    blockName,
    decorative = false,
    className,
    desc,
    iconRotation,
    color = IconColors.ui_black,
    size = IconSizes.large,
    modifiers = [],
    name,
    role,
    title,
    children,
  } = props;

  const iconModifiers = modifiers;

  if (iconRotation) {
    iconModifiers.push(iconRotation);
  }

  if (color) {
    iconModifiers.push(color);
  }

  if (size) {
    iconModifiers.push(size);
  }

  const iconProps = {
    className: bem(baseClass, iconModifiers, blockName, [className]),
    role: decorative ? "img" : role,
    "aria-hidden": decorative,
    "aria-labelledby": title ? "title-" + name : undefined,
    "aria-describedby": desc ? "desc-" + name : undefined,
    title: title ? `title-${name}` : undefined,
  };

  let svg;

  if (name && children) {
    throw new Error("Icon accepts either a name or children, not both");
  } else if (!name && !children) {
    console.warn(
      "Pass a name or any children to Icon to ensure an icon appears"
    );
  }

  if (name) {
    svg = allSvgs[name];
    return <span {...iconProps} dangerouslySetInnerHTML={{ __html: svg }} />;
  } else {
    svg = children;
    return <span {...iconProps}>{children}</span>;
  }
}
