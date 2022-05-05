import * as React from "react";

import Card from "../Card/Card";
import Heading from "../Heading/Heading";

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
        isBordered
        isCentered
        layout="column"
      />
      <div style={{ marginLeft: "1rem" }}>
        <Heading level="four">{colorName}</Heading>
        {/* 
        TODO:
        This code is returning the CSS variable name.  This is not what we 
        want.  Rather, we want to see the variable's hex value.  This is 
        somethign we will need to come back to.

        <Text noSpace>{backgroundColor}</Text> 
        */}
      </div>
    </div>
  );
}
