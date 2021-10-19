import * as React from "react";
import Card from "../Card/Card";
import { CardLayouts } from "../Card/CardTypes";
import Text from "../Text/Text";

export interface ColorCardProps {
  /** backgroundColor of the color card */
  backgroundColor: string;
  /** name of the CSS var */
  colorName: string;
}

/**
 * ColorCard
 * Component only used for Storybook.
 */
export default function ColorCard(
  props: React.PropsWithChildren<ColorCardProps>
) {
  const { backgroundColor, colorName = "" } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Card
        backgroundColor={backgroundColor}
        center
        layout={CardLayouts.Column}
        padding="3rem"
        border
      />
      <div style={{ marginLeft: "1rem" }}>
        <Text noSpace>{colorName}</Text>
        <Text noSpace>{backgroundColor}</Text>
      </div>
    </div>
  );
}
