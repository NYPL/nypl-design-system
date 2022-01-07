import * as React from "react";

export interface PlaceholderProps {
  /** Modifier string for the classname. */
  modifier?: string;
}

/** Creates a gray box with an editable string for dropping in spaces
 * within components or on templates where a component will be but
 * that hasn't been created yet
 */
export default function Placeholder({
  children,
  modifier,
}: React.PropsWithChildren<PlaceholderProps>) {
  return (
    <div className={`placeholder placeholder-${modifier}`}>{children}</div>
  );
}
