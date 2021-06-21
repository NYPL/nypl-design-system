// HorizontalRule
import * as React from "react";
import bem from "../../utils/bem";
import { TextTypes } from "./TextTypes";

export interface TextProps {
  /** Optional additional attributes passed to the text element */
  attributes?: { [key: string]: any };
  /** Optional className you can add in addition to `text` */
  className?: string;
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
  /** Optional prop to control the text styling */
  textType?: TextTypes;
}

export default function Text(props: React.ComponentProps<"p"> & TextProps) {
  const {
    attributes = {},
    children,
    className,
    modifiers = [],
    noSpace,
    textType,
  } = props;

  if (textType && textType !== "Default") {
    modifiers.push(textType.toLowerCase());
  }

  if (noSpace) {
    modifiers.push("nospace");
  }

  return (
    <p className={bem("text", modifiers, "", [className])} {...attributes}>
      {children}
    </p>
  );
}
