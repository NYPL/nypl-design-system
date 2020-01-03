import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const buttonFilledIcon = () => <Button callback={action("clicked")} content="search" type="filled" iconPosition="left" iconName="search-small" iconDecorative={true}/>;
export const buttonOutline = () => <Button callback={action("clicked")} content="Hello World" type="outline" />;
