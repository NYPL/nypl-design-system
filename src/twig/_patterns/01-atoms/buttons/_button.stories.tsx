import * as React from "react";

// The Twig component
import Button from './_button.twig'
import { action } from "@storybook/addon-actions";

export default {
  title: "Button [twig]",
};

<<<<<<< HEAD:src/twig/_patterns/01-atoms/buttons/_button.stories.js
export const filled = () => Button({
  button_content: 'Subscribe',
  button_url: '#'
});

// export const outline = () => (
//   <Button className="button button--outline" callback={action("clicked")}>
//   </Button>
// );
=======
export const filled = () => <Button className="button" callback={action("clicked")}></Button>;

export const outline = () => (
  <Button className="button button--outline" callback={action("clicked")}>
  </Button>
);
>>>>>>> [twig-loader] None of these things helped actually load the twig templates properly, but it did at least provide consistency across the stories.tsx files:src/twig/_patterns/01-atoms/buttons/_button.stories.tsx
