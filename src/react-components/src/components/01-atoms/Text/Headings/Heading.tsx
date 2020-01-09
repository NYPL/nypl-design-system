// MT-82, MT 225, etc
import * as React from "react";
import bem from "../../../../utils/bem";

export interface HeadingProps {
  level: number;
  id: string;
  modifiers?: string[];
  blockName?: string;

  text?: string;
  attributes?: {};
}

export default function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const { level, id, text, modifiers, blockName, attributes } = props;

  if (level < 1 || level > 6) {
    throw new Error("Heading only supports levels 1-6");
  }

  let content: string | React.ReactNode;
  if (text) {
    content = text;
  } else {
      content = props.children;
  }

  let heading_base_class = "heading";

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
