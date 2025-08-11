import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading, { headingLevelsArray, headingSizesArray } from "./Heading";
import Link from "../Link/Link";
import { argsBooleanType } from "../../helpers/storybookUtils";

const meta: Meta<typeof Heading> = {
  title: "Components/Typography & Styles/Heading",
  component: Heading,
  argTypes: {
    isCapitalized: argsBooleanType(),
    isUppercase: argsBooleanType(),
    isLowercase: argsBooleanType(),
    level: {
      control: { type: "select" },
      options: headingLevelsArray,
      table: { defaultValue: { summary: "h2" } },
    },
    overline: { control: { type: "text" } },
    size: {
      control: { type: "select" },
      options: headingSizesArray,
    },
    subtitle: { control: { type: "text" } },
    text: { control: { type: "text" } },
    url: { control: { type: "text" } },
    urlClass: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

/**
 * Main Story for the Heading component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    isCapitalized: false,
    isUppercase: false,
    isLowercase: false,
    level: "h2",
    overline: undefined,
    size: undefined,
    subtitle: undefined,
    text: "Default Heading",
    url: undefined,
    urlClass: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
    },
    jest: ["Heading.test.tsx"],
  },
  render: (args) => <Heading {...args} />,
};

// The following are additional Heading example Stories.
export const DefaultStyles: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Heading id="heading-h1" level="h1" text="(h1) Lorem ipsum dolor" />
      <Heading id="heading-h2" level="h2" text="(h2) Lorem ipsum dolor" />
      <Heading id="heading-h3" level="h3" text="(h3) Lorem ipsum dolor" />
      <Heading id="heading-h4" level="h4" text="(h4) Lorem ipsum dolor" />
      <Heading id="heading-h5" level="h5" text="(h5) Lorem ipsum dolor" />
      <Heading id="heading-h6" level="h6" text="(h6) Lorem ipsum dolor" />
    </VStack>
  ),
};

export const SizeStyles: Story = {
  name: "Sizes",
  render: () => (
    <VStack align="left" spacing="l">
      <Heading
        id="heading-display1"
        level="h1"
        size="display1"
        text="(display1) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading1"
        level="h1"
        size="heading1"
        text="(heading1) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading2"
        level="h1"
        size="heading2"
        text="(heading2) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading3"
        level="h1"
        size="heading3"
        text="(heading3) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading4"
        level="h1"
        size="heading4"
        text="(heading4) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading5"
        level="h1"
        size="heading5"
        text="(heading5) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading6"
        level="h1"
        size="heading6"
        text="(heading6) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading7"
        level="h1"
        size="heading7"
        text="(heading7) Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading8"
        level="h1"
        size="heading8"
        text="(heading8) Lorem ipsum dolor"
      />
    </VStack>
  ),
};

export const Overline: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Heading
        id="heading-display1"
        level="h1"
        overline="Overline"
        size="display1"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading1"
        level="h1"
        overline="Overline"
        size="heading1"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading2"
        level="h1"
        overline="Overline"
        size="heading2"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading3"
        level="h1"
        overline="Overline"
        size="heading3"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading4"
        level="h1"
        overline="Overline"
        size="heading4"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading5"
        level="h1"
        overline="Overline"
        size="heading5"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading6"
        level="h1"
        overline="Overline"
        size="heading6"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading7"
        level="h1"
        overline="Overline"
        size="heading7"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading8"
        level="h1"
        overline="Overline"
        size="heading8"
        text="Lorem ipsum dolor"
      />
    </VStack>
  ),
};

export const Subtitle: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Heading
        id="heading-display1"
        level="h1"
        size="display1"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading1"
        level="h1"
        size="heading1"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading2"
        level="h1"
        size="heading2"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading3"
        level="h1"
        size="heading3"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading4"
        level="h1"
        size="heading4"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading5"
        level="h1"
        size="heading5"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading6"
        level="h1"
        size="heading6"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading7"
        level="h1"
        size="heading7"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading8"
        level="h1"
        size="heading8"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
    </VStack>
  ),
};

export const OverlineAndSubtitle: Story = {
  name: "Overline and Subtitle",
  render: () => (
    <VStack align="left" spacing="l">
      <Heading
        id="heading-display1"
        level="h1"
        overline="Overline"
        size="display1"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading1"
        level="h1"
        overline="Overline"
        size="heading1"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading2"
        level="h1"
        overline="Overline"
        size="heading2"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading3"
        level="h1"
        overline="Overline"
        size="heading3"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading4"
        level="h1"
        overline="Overline"
        size="heading4"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading5"
        level="h1"
        overline="Overline"
        size="heading5"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading6"
        level="h1"
        overline="Overline"
        size="heading6"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading7"
        level="h1"
        overline="Overline"
        size="heading7"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        id="heading-heading8"
        level="h1"
        overline="Overline"
        size="heading8"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
    </VStack>
  ),
};

export const BoldText: Story = {
  render: () => (
    <Heading id="headingWithBold" level="h2">
      <>
        Heading with a <b>Bold</b> Word
      </>
    </Heading>
  ),
};

export const Links: Story = {
  name: "Links",
  render: () => (
    <VStack align="left" spacing="l">
      <Heading
        id="heading-with-text-url-values"
        level="h3"
        text="Heading with `url` and `text` props"
        url="http://apple.com"
        urlClass="special-link"
      />
      <Heading
        id="heading-with-link-url"
        level="h3"
        url="http://apple.com"
        urlClass="special-link"
      >
        Heading with `url` prop value
      </Heading>
      <Heading id="heading-with-anchor" level="h3">
        <a href="#hello">Link from HTML anchor element</a>
      </Heading>
      <Heading id="heading-with-DS-link" level="h3">
        <Link href="#hello">Link using DS `Link` component</Link>
      </Heading>
      <Heading id="heading-with-link-child" level="h3">
        <>
          Not acceptable. Do not use. <a href="#hello">Link</a>
        </>
      </Heading>
      <Heading id="heading-with-DS-link-child" level="h3">
        <>
          <span>Text wrapped in a span </span>
          <Link href="#hello">Link</Link>
          <span> Not a recommended pattern</span>
        </>
      </Heading>
    </VStack>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Heading
        color="brand.primary"
        overline="Overline"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading
        color="section.research-library.schwarzman"
        overline="Overline"
        text="Lorem ipsum dolor"
      />
      <Heading
        color="section.research.primary"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
      <Heading color="section.education.primary" text="Lorem ipsum dolor" />
      <Heading
        bgColor="section.connect.secondary"
        color="ui.white"
        overline="Overline"
        p="l"
        subtitle="The subtitle text sits below the main heading text"
        text="Lorem ipsum dolor"
      />
    </VStack>
  ),
};
