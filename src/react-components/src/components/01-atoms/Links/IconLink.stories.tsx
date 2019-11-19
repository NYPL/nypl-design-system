import * as React from "react";

import IconLink from "./IconLink";
import { action } from "@storybook/addon-actions";

export default {
  title: "Link with Icon",
  component: IconLink,
};

export const passedInLink = () => <IconLink><a href="#passed-in-link">hello there</a></IconLink>;
export const linkWithLeftIcon = () => <IconLink url="#generated-link-link" iconPosition="left">hello there</IconLink>;
export const linkWithRightIcon = () => <IconLink url="#generated-link-link" iconPosition="right">hello there</IconLink>;
