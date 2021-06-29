// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../utils/bem";
import { DisplaySizes } from "./HeadingDisplaySizes";

export interface HeadingProps {
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Optional className that appears in addition to `heading` */
  className?: string;
  /** Optional size used to override the default styles of the semantic HTML `<h>` elements */
  displaySize?: DisplaySizes;
  /** Optional ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Number 1-6; used to create the `<h*>` tag */
  level: number;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Inner text of the `<h*>` element */
  text?: string;
  /** Optional URL that header points to; when `url` prop is passed to `Heading`, a child `<a>` element is created and the heading text becomes an active link */
  url?: string;
  /** Optional className for the URL when the `url` prop is passed */
  urlClass?: string;
}

export default function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const {
    blockName,
    className,
    displaySize,
    id,
    level,
    modifiers = [],
    text,
    url,
    urlClass,
  } = props;

  const baseClass = "heading";

  if (displaySize) {
    modifiers.push(displaySize);
  }

  if (level < 1 || level > 6) {
    throw new Error("Heading only supports levels 1-6");
  }

  if (!props.children && !text) {
    throw new Error("Heading has no children, please pass prop: text");
  }

  if (React.Children.count(props.children) > 1) {
    const children = React.Children.map(
      props.children,
      child => (child as JSX.Element).type
    );
    // Catching the error because React's error isn't as helpful.
    throw new Error(
      `Please only pass one child into Heading, got ${children.join(", ")}`
    );
  }

  let content: string | React.ReactNode;
  if (props.children) {
    content = url
      ? React.createElement(
          "a",
          { href: url, className: urlClass },
          props.children
        )
      : props.children;
  } else {
    content = url
      ? React.createElement("a", { href: url, className: urlClass }, text)
      : text;
  }

  const headingProps = {
    className: bem(baseClass, modifiers, blockName, [className]),
    id: id,
  };

  return React.createElement("h" + level, headingProps, content);
}
