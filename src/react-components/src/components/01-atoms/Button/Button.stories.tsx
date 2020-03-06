import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const buttonFilledIcon = () =>
  <Button
    callback={action("clicked")}
    id="button"
    content="search"
    type="filled"
    iconPosition="left"
    iconName="search-small"
    iconDecorative={true}
  />
;
export const buttonOutline = () => <Button callback={action("clicked")} id="button" content="Hello World" type="outline" />;
export const buttonWithSpan = () => <Button callback={action("clicked")} id="button" type="outline" content={<span>Style my span!</span>}/>;
export const buttonIconChildrenString = () =>
  <Button
    callback={action("clicked")}
    id="button"
    type="filled"
    iconPosition="right"
    iconName="search-small"
    iconDecorative={true}
  >Search!</Button>
;
export const buttonIconChildrenElement = () =>
  <Button
    callback={action("clicked")}
    id="button"
    type="outline"
    iconPosition="right"
    iconName="search-small"
    iconDecorative={true}
  >
    <span>I'm wrapped in a span!</span>
  </Button>
;