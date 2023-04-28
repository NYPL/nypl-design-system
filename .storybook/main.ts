import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // TODO: for future interaction tests
    // "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",
      options: {
        // Storybook 7 uses MDX 2 which does not include various syntax
        // patterns we are use to. This adds `remark-gfm` which adds
        // back support for "github flavored markdown" (GFM).
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-jest",
  ],
  // This gets added automatically through react-vite,
  // but leaving it here just to point it out.
  // core: {
  //   builder: "storybook-builder-vite",
  // },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: {
    "@chakra-ui/react": { disable: true },
  },
  // Explicit for now just to test.
  stories: [
    "../src/components/Accordion/Accordion.stories.tsx",
    "../src/components/Accordion/Accordion.mdx",
    "../src/components/Breadcrumbs/Breadcrumbs.stories.tsx",
    "../src/components/Breadcrumbs/Breadcrumbs.mdx",
    "../src/docs/Welcome.mdx",
  ],
  typescript: {
    // Type-check stories during Storybook build.
    check: true,
    // Display the compiled value options.
    reactDocgenTypescriptOptions: {
      // Do we want to display Chakra props in Storybook? Nope.
      // They are useful but it clutters the Storybook file and the Chakra
      // docs are easy to access on their own site. DS components still
      // accept Chakra props but this makes it so that the Chakra props
      // are just hidden in Storybook.
      propFilter: (prop) => {
        // This is a bit of a "hack" but it tells Storybook that the prop
        // is defined in a DS component. If we define it, then display it
        // in the `ArgTypes` table in a component Storybook document page.
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : false;
      },
    },
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      // Customize the Vite config here:
      resolve: {
        alias: {
          // This is to get @storybook/addon-jest working:
          path: "path-browserify",
        },
      },
    });
  },
};

export default config;
