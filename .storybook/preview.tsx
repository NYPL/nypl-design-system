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

// Custom viewport options
const customViewports = {
  sm: {
    name: "sm (320px)",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  md: {
    name: "md (600px)",
    styles: {
      width: "600px",
      height: "800px",
    },
  },
  lg: {
    name: "lg (960px)",
    styles: {
      width: "960px",
      height: "800px",
    },
  },
  xl: {
    name: "xl (1280px)",
    styles: {
      width: "1280px",
      height: "1080px",
    },
  },
  "2xl": {
    name: "2xl (1536px)",
    styles: {
      width: "1536px",
      height: "1080px",
    },
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  backgrounds: {
    values: [
      { name: "Light mode page background", value: "#FFFFFF" },
      { name: "Light mode default background", value: "#F5F5F5" },
      { name: "Dark mode page background", value: "#121212" },
      { name: "Dark mode default background", value: "#191919" },
    ],
  },
  // Load the Reservoir's Chakra-based theme.
  chakra: {
    theme: nyplTheme,
  },
  // Allows all props' descriptions and default values to show in
  // Storybook's canvas addon bar.
  controls: { expanded: true },
  // Sets custom viewport options for testing under the Canvas view
  viewport: { viewports: customViewports },
};
