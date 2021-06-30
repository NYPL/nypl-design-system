import * as React from "react";
import Card from "../Card/Card";

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
    <Card className="var-docs">
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
    </Card>
  );
}
