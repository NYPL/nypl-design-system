import * as React from "react";

import HelperErrorText from "./HelperErrorText";
import { action } from "@storybook/addon-actions";

export default {
  title: "HelperErrorText",
  component: HelperErrorText,
};

export const helperTextWithLink = () => <HelperErrorText id="helperTextWithLink"
  isError={false}>If you're unsure of your size, please view the <a href="#sizing-chart">Sizing Chart</a></HelperErrorText>;

export const errorText = () => <HelperErrorText id="helpertextWithError"
  isError={true}>Error Message</HelperErrorText>;

export const longHelperText = () => <HelperErrorText id="longHelperText" isError={false}>
  Soufflé jujubes cupcake chocolate bar topping.
  Lollipop sesame snaps tootsie roll liquorice sweet chupa chups.
   Gummi bears tart sweet roll tiramisu biscuit cookie cake. Cookie chocolate jelly-o topping.
   Halvah bear claw wafer cupcake tiramisu ice cream tart gummi bears.
   Lemon drops chocolate cake croissant lemon drops gummies ice cream sugar plum.
</HelperErrorText>;

