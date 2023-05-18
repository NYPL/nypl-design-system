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
    "../src/docs/Welcome.mdx",
    "../src/docs/Chakra.mdx",
    "../src/components/AccessibilityGuide/DynamicContent.mdx",
    "../src/components/AccessibilityGuide/Links.mdx",
    "../src/components/AccessibilityGuide/RepetitiveActions.mdx",
    "../src/components/AccessibilityGuide/SkipNavigation.mdx",
    "../src/components/Accordion/Accordion.stories.tsx",
    "../src/components/Accordion/Accordion.mdx",
    "../src/components/AlphabetFilter/AlphabetFilter.stories.tsx",
    "../src/components/AlphabetFilter/AlphabetFilter.mdx",
    "../src/components/AudioPlayer/AudioPlayer.stories.tsx",
    "../src/components/AudioPlayer/AudioPlayer.mdx",
    "../src/components/Breadcrumbs/Breadcrumbs.stories.tsx",
    "../src/components/Breadcrumbs/Breadcrumbs.mdx",
    "../src/components/Card/Card.stories.tsx",
    "../src/components/Card/Card.mdx",
    "../src/components/Chakra/Box.mdx",
    "../src/components/Chakra/Center.mdx",
    "../src/components/Chakra/Flex.mdx",
    "../src/components/Chakra/Grid.mdx",
    "../src/components/Chakra/Stack.mdx",
    "../src/components/Checkbox/Checkbox.stories.tsx",
    "../src/components/Checkbox/Checkbox.mdx",
    "../src/components/CheckboxGroup/CheckboxGroup.stories.tsx",
    "../src/components/CheckboxGroup/CheckboxGroup.mdx",
    "../src/components/DatePicker/DatePicker.stories.tsx",
    "../src/components/DatePicker/DatePicker.mdx",
    "../src/components/FeedbackBox/FeedbackBox.stories.tsx",
    "../src/components/FeedbackBox/FeedbackBox.mdx",
    "../src/components/Fieldset/Fieldset.stories.tsx",
    "../src/components/Fieldset/Fieldset.mdx",
    "../src/components/Hero/Hero.stories.tsx",
    "../src/components/Hero/Hero.mdx",
    "../src/components/HorizontalRule/HorizontalRule.stories.tsx",
    "../src/components/HorizontalRule/HorizontalRule.mdx",
    "../src/components/Label/Label.stories.tsx",
    "../src/components/Label/Label.mdx",
    "../src/components/Pagination/Pagination.stories.tsx",
    "../src/components/Pagination/Pagination.mdx",
    "../src/components/ProgressIndicator/ProgressIndicator.stories.tsx",
    "../src/components/ProgressIndicator/ProgressIndicator.mdx",
    "../src/components/SearchBar/SearchBar.stories.tsx",
    "../src/components/SearchBar/SearchBar.mdx",
    "../src/components/StatusBadge/StatusBadge.stories.tsx",
    "../src/components/StatusBadge/StatusBadge.mdx",
    "../src/components/Table/Table.stories.tsx",
    "../src/components/Table/Table.mdx",
    "../src/components/Tabs/Tabs.stories.tsx",
    "../src/components/Tabs/Tabs.mdx",
    "../src/components/Text/Text.stories.tsx",
    "../src/components/Text/Text.mdx",
    "../src/components/TextInput/TextInput.stories.tsx",
    "../src/components/TextInput/TextInput.mdx",
    "../src/components/VideoPlayer/VideoPlayer.stories.tsx",
    "../src/components/VideoPlayer/VideoPlayer.mdx",
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
