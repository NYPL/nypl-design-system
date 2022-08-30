// Load the Reservoir's stylesheet for some components.
import "!style-loader!css-loader!sass-loader!../src/styles.scss";

import { addDecorator, addParameters } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import React from "react";

import nyplTheme from "../src/theme";
import results from "../.jest-test-results.json";

addParameters({
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Welcome",
        "Chakra UI",
        "Style Guide",
        "Accessibility Guide",
        "Components",
        "Hooks",
        "Development Guide",
      ],
    },
  },
});

// Show the Jest results in the Storybook UI.
addDecorator(withTests({ results }));

addDecorator((StoryFn) => (
  <div style={{ margin: "10px" }}>
    <StoryFn />
  </div>
));

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "var(--nypl-colors-ui-white)" },
      { name: "dark", value: "var(--nypl-colors-dark-ui-bg-page)" },
    ],
  },
  // Load the Reservoir's Chakra-based theme.
  chakra: {
    theme: nyplTheme,
  },
  // Allows all props' descriptions and default values to show in
  // Storybook's canvas addon bar.
  controls: { expanded: true },
};
