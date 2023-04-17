import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
// import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     mdxPluginOptions: {
    //       mdxCompileOptions: {
    //         remarkPlugins: [remarkGfm],
    //       },
    //     },
    //   },
    // },
    "@storybook/addon-jest",
  ],
  // This gets added automatically through react-vite
  // core: {
  //   builder: "storybook-builder-vite",
  // },
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: {
    "@chakra-ui/react": { disable: true },
  },
  stories: [
    "../src/components/Accordion/Accordion.stories.tsx",
    "../src/components/Accordion/Accordion.mdx",
    "../src/docs/Welcome.mdx",
  ],
  typescript: {
    // Type-check stories during Storybook build.
    check: true,
    // reactDocgen: "react-docgen",
    // reactDocgen: "react-docgen-typescript",
    // Display the compiled value options.
    reactDocgenTypescriptOptions: {
      // Do we want to display Chakra props in Storybook? Nope.
      // They are useful but it clutters the Storybook file and the Chakra
      // docs are easy to access on their own site. DS components still
      // accept Chakra props but this handles whether they are displayed
      // or not in Storybook.
      propFilter: (prop) => {
        // This is a bit of a "hack" but it just tells us that the prop
        // is defined in a DS component. If we define it, display it!
        // Specifically in the `ArgsTable` section of Storybook.
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : false;
      },
    },
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          // This is to get @storybook/addon-jest working
          path: "path-browserify",
        },
      },
    });
  },
};
export default config;
