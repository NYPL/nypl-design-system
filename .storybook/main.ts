import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: [
    "../src/docs/*.stories.mdx",
    // "../src/components/**/*.stories.@(tsx|mdx)",
    // "../src/hooks/*.stories.@(tsx|mdx)",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-controls",
    "@storybook/addon-jest",
    "@chakra-ui/storybook-addon",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  // typescript: {
  //   reactDocgen: "react-docgen",
  // },
  docs: {
    autodocs: "tag",
  },
  refs: {
    "@chakra-ui/react": { disable: true },
  },
};
export default config;
