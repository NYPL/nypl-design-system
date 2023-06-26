import React from "react";

import Tooltip from "../Tooltip/Tooltip";

/**
 * This helper component wrapper renders a DS `Tooltip` component if the text is
 * long or a React fragment. This assumes that the `label` prop is a rather
 * simple single root JSX element, such as `<Link ...>....</Link>`.
 */
export const TooltipWrapper = ({
  label,
  children,
}: React.PropsWithChildren<{ label: any }>) => {
  const maxCharLengthToShow = 20;
  const labelText = typeof label === "string" ? label : label.props.children;
  if (labelText.length > maxCharLengthToShow && typeof labelText === "string") {
    return <Tooltip content={labelText}>{children}</Tooltip>;
  }
  return <>{children}</>;
};
