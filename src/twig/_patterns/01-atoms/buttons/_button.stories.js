import * as React from "react";

// The Twig component
import Button from './_button.twig'
import { action } from "@storybook/addon-actions";

export default {
  title: "Button [twig]",
};

export const filled = () => <Button></Button>;

export const outline = () => (
  <Button></Button>
);
