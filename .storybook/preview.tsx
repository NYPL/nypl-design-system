// Typically, this file isn't created for a Storybook service, but we want it
// to be able to add the custom styles.
import "!style-loader!css-loader!sass-loader!../src/styles.scss";
import React from "react";
// We also want to add MDX-style documentation here:
import { addDecorator, addParameters } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";
import { withTests } from "@storybook/addon-jest";

import DSProvider from "../src/theme/provider";
import results from "../.jest-test-results.json";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
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

addDecorator(
  withTests({
    results,
  })
);

addDecorator((StoryFn) => (
  <DSProvider>
    <div style={{ margin: "10px" }}>
      <StoryFn />
    </div>
  </DSProvider>
));

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  // Allows all props' descriptions and default values to show in
  // Storybook's canvas addon bar.
  controls: { expanded: true },
};
