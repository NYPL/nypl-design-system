import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const buttonFilledIcon = () => <Button callback={action("clicked")} id="button" content="search" type="filled" iconPosition="left" iconName="search-small" iconDecorative={true}/>;
export const buttonOutline = () => <Button callback={action("clicked")} id="button" content="Hello World" type="outline" />;
export const buttonWithSpan = () => <Button callback={action("clicked")} id="button" type="outline" content={<span>Style my span!</span>}/>;
