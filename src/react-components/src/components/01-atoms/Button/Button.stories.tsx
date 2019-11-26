import * as React from "react";

import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const searchButton = () => <Button content="search" type="filled" iconPosition="right" iconName="search-small" iconDecorative={true}/>;
