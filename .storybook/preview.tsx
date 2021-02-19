// Typically, this file isn't created for a Storybook service, but we want it
// to be able to add the custom styles.
import "!style-loader!css-loader!sass-loader!import-glob-loader!../src/styles.scss";
import React from "react";
// We also want to add MDX-style documentation here:
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

export const decorators = [
  Story => (
    <div style={{ margin: "10px" }}>
      <Story />
    </div>
  ),
];
