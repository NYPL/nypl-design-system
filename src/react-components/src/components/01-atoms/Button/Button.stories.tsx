import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

let allButtons = [];

allButtons.push(<Button callback={action("clicked")} ></Button >);
allButtons.push(<Button className="button--outline" callback={action("clicked")}>
</Button>
)

export const differentStyles = () => allButtons;
