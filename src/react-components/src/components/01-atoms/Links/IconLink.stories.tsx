import * as React from "react";

import IconLink from "./IconLink";

export default {
  title: "Link with Icon",
  component: IconLink,
};

export const passedInLinkWithLeftIcon = () => <IconLink iconPosition="left" iconModifiers={["left", "icon-left"]}><a href="#passed-in-link">hello there</a></IconLink>;
export const passedInLinkWithNoIcon = () => <IconLink><a href="#passed-in-link">hello there</a></IconLink>;
export const linkWithLeftIcon = () => <IconLink url="#generated-link-link" iconPosition="left" iconModifiers={["left", "icon-left"]}>hello there</IconLink>;
export const linkWithRightIcon = () => <IconLink url="#generated-link-link" iconPosition="right" iconModifiers={["right", "icon-right"]}>hello there</IconLink>;
