// HorizontalRule
import * as React from "react";
import bem from "../../utils/bem";
import { DisplaySizes } from "./TextDisplaySizes";

export interface TextProps {
  /** Optional additional attributes passed to the text element */
  attributes?: { [key: string]: any };
  /** Optional prop used to show bolded text */
  bold?: boolean;
  /** Optional className you can add in addition to `text` */
  className?: string;
  /** Optional prop used to show itlicized text */
  italic?: boolean;
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
  /** Optional prop to control the text styling */
  displaySize?: DisplaySizes;
}

export default function Text(props: React.ComponentProps<"p"> & TextProps) {
  const {
    attributes = {},
    bold,
    children,
    className,
    displaySize,
    italic,
    modifiers = [],
    noSpace,
  } = props;

  if (displaySize && displaySize !== "Default") {
    modifiers.push(displaySize.toLowerCase());
  }

  if (bold) {
    modifiers.push("bold");
  }

  if (italic) {
    modifiers.push("italic");
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
