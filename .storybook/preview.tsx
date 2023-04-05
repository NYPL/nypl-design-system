// Load the Reservoir's stylesheet for some components.
import "../src/styles.scss";

import { Preview } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import React, { useEffect } from "react";

import nyplTheme from "../src/theme";
import { DSProvider, useColorMode } from "../src/index";
import results from "../.jest-test-results.json";
import { MDXProvider } from "@mdx-js/react";
import { DocsContainer } from "@storybook/blocks";

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
export const MyDocsContainer = (props) => (
  <MDXProvider>
    <DSProvider>
      <DocsContainer {...props} />
    </DSProvider>
  </MDXProvider>
);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  backgrounds: {
    values: [
      { name: "Light mode page background", value: "#FFFFFF" },
      { name: "Light mode default background", value: "#F5F5F5" },
      { name: "Light mode hover background", value: "#E9E9E9" },
      { name: "Light mode active background", value: "#BDBDBD" },
      { name: "Dark mode page background", value: "#191919" },
      { name: "Dark mode default background", value: "#252525" },
      { name: "Dark mode hover background", value: "#2E2E2E" },
      { name: "Dark mode active background", value: "#424242" },
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
  options: {
    storySort: {
      method: "alphabetical",
      order: [
        "Welcome",
        "Chakra UI",
        "Development Guide",
        "Style Guide",
        "Accessibility Guide",
        "Components",
        "Hooks",
      ],
    },
  },
  docs: {
    container: MyDocsContainer,
  },
};
interface ColorModeProps {
  colorMode: "light" | "dark";
  children: JSX.Element;
}

function ColorMode(props: ColorModeProps) {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(props.colorMode);
  }, [props.colorMode]);

  return props.children;
}
const preview: Preview = {
  decorators: [
    withTests({ results }),
    (Story, context) => (
      <DSProvider>
        <ColorMode colorMode={context.globals.colorMode}>
          <div style={{ margin: "10px" }}>
            <Story />
          </div>
        </ColorMode>
      </DSProvider>
    ),
  ],
  parameters,
  globalTypes: {
    colorMode: {
      name: "Color Mode",
      defaultValue: "light",
      toolbar: {
        items: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
