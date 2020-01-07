// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../../../utils/bem";

export interface HeadingProps {
  level: number;
  id: string;
  baseClass?: string;
  modifiers?: string[];
  blockName?: string;

  url?: string;
  urlClass?: string;

  text?: string;
  attributes?: {};
}

export default function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const { level, id, baseClass, modifiers, url, urlClass, text, blockName, attributes } = props;

  if (level < 1 || level > 6) {
    throw new Error("Heading only supports levels 1-6");
  }

  let content: string | React.ReactNode;
  if (text) {
    content = url ? React.createElement("a", { href: url, className: urlClass }, text) : text;
  } else {
    content = url ? React.createElement("a", { href: url, className: urlClass }, props.children) : props.children;
  }

  let heading_base_class = baseClass ? baseClass : "heading";

  let headingProps = {
    className: bem(heading_base_class, modifiers, blockName),
    id: id,
    ...attributes
  };

  return React.createElement(
    "h" + level,
    headingProps,
    content
  );
}
