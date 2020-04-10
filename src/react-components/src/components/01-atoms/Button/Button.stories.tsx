import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { ButtonTypes } from "./ButtonTypes";

export default {
  title: "Button",
  component: Button,
};

export const buttonFilledIcon = () =>
  <Button
    callback={action("clicked")}
    id="button"
    content="search"
    buttonType={ButtonTypes.Filled}
    type="submit"
    iconPosition="left"
    iconName="search-small"
    iconDecorative={true}
  />;

export const buttonOutline = () => <Button callback={action("clicked")} id="button" content="Hello World" buttonType={ButtonTypes.Outline} />;
export const buttonWithSpan = () => <Button callback={action("clicked")} id="button" buttonType={ButtonTypes.Outline} content={<span>Style my span!</span>} />;
export const buttonIconChildrenString = () =>
  <Button
    callback={action("clicked")}
    id="button"
    buttonType={ButtonTypes.Filled}
    type="submit"
    iconPosition="right"
    iconName="search-small"
    iconDecorative={true}
  >Search!</Button>
  ;
export const buttonIconChildrenElement = () =>
  <Button
    callback={action("clicked")}
    id="button"
    buttonType={ButtonTypes.Outline}
    type="button"
    iconPosition="right"
    iconName="search-small"
    iconDecorative={true}
  >
    <span>I'm wrapped in a span!</span>
  </Button>
  ;
export const buttonIconRightLarge = () =>
  <Button
    callback={action("clicked")}
    id="button"
    type="submit"
    buttonType={ButtonTypes.Outline}
    iconPosition="right"
    modifiers={["large"]}
    iconName="plus"
    iconDecorative={true}
  >
    <span>button content</span>
  </Button>;

export const linkLikeButton = () =>
  <Button
    callback={action["clicked"]}
    id="button"
    type="button"
    buttonType={ButtonTypes.Link}
  >
    <span>button content</span>
  </Button >;

export const linkLikeButtonIconLeft = () =>
  <Button
    callback={action["clicked"]}
    id="button"
    type="button"
    buttonType={ButtonTypes.Link}
    iconPosition="left"
    iconName="arrow-xsmall"
    iconModifiers={["left"]}
    iconDecorative={true}
  >
    <span>button content</span>
  </Button >;
