
import * as React from "react";
import bem from "../../utils/bem";

export interface PlaceholderProps {
  modifiers?: string[];
  blockName?: string;
}

export default function Placeholder(props: React.PropsWithChildren<PlaceholderProps>) {
  const { modifiers = [], blockName } = props;
  return (
    <div className={bem("placeholder")}>{props.children}</div>
  );
}
