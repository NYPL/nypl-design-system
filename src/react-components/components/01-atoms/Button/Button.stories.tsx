import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button [react]",
};

export const filled = () => <Button className="button" callback={action("clicked")}></Button>;

export const outline = () => (
  <Button className="button button--outline" callback={action("clicked")}>
  </Button>
);
