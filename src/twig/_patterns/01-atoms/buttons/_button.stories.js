import * as React from "react";

// The Twig component
import Button from './_button.twig'
import { action } from "@storybook/addon-actions";

export default {
  title: "Button [twig]",
};

export const filled = () => Button({
  button_content: 'Subscribe',
  button_url: '#'
});

// export const outline = () => (
//   <Button className="button button--outline" callback={action("clicked")}>
//   </Button>
// );
