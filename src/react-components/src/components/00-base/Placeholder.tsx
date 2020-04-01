
import * as React from "react";
import bem from "../../utils/bem";

export interface PlaceholderProps {
  modifiers?: string[];
  blockName?: string;
}

/** Creates a gray box with an editable string for dropping in spaces
 * within components or on templates where a component will be but 
 * that hasn't been created yet
 */
export default function Placeholder(props: React.PropsWithChildren<PlaceholderProps>) {
  const { modifiers = [], blockName } = props;
  return (
    <div className={bem("placeholder")}>{props.children}</div>
  );
}
