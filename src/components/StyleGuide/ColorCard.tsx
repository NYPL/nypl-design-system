import * as React from "react";

import Card from "../Card/Card";
import { CardLayouts } from "../Card/CardTypes";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";

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
        border
      />
      <div style={{ marginLeft: "1rem" }}>
        <Heading level={HeadingLevels.Four}>{colorName}</Heading>
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
