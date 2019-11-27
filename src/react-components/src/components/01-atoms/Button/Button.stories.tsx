import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const buttonFilled = () => <Button callback={action("clicked")} ></Button >;
export const buttonOutline = () => <Button className="button--outline" callback={action("clicked")}></Button>;
