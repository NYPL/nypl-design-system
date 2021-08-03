// Typically, this file isn't created for a Storybook service, but we want it
// to be able to add the custom styles.
import "!style-loader!css-loader!sass-loader!../src/styles.scss";
import React from "react";
// We also want to add MDX-style documentation here:
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Documentation", "Components"],
    },
  },
});

export const decorators = [
  (Story) => (
    <div style={{ margin: "10px" }}>
      <Story />
    </div>
  ),
];

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
};
