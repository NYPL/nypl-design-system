import * as React from "react";
import CardEdition from "../CardEdition/CardEdition";

interface UIDocCardProps {
  /** backgroundColor of the doc card */
  backgroundColor: string;
}

/**
 * UIDocCard
 * Component only used for Storybook.
 */
export default function UIDocCard(
  props: React.PropsWithChildren<UIDocCardProps>
) {
  const { backgroundColor, children } = props;

  return (
    <CardEdition className="var-docs">
      <div
        style={{
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderBottom: "1px solid var(--ui-gray-light)",
          color: "white",
          display: "flex",
          height: "100px",
          justifyContent: "center",
          marginBottom: "15px",
          width: "100%",
        }}
      ></div>
      {children}
    </CardEdition>
  );
}
