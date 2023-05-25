import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Heading, { headingLevelsArray, headingSizesArray } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Typography & Styles/Heading",
  component: Heading,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    level: {
      control: { type: "select" },
      options: headingLevelsArray,
      table: { defaultValue: { summary: "two" } },
    },
    noSpace: { table: { defaultValue: { summary: false } } },
    size: {
      control: { type: "radio" },
      options: headingSizesArray,
    },
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
    className: undefined,
    id: "heading-id",
    isCapitalized: false,
    isUppercase: false,
    isLowercase: false,
    noSpace: false,
    level: "two",
    size: undefined,
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
  render: (args) => (
    <>
      <Heading {...args} />
      <Heading {...args} color="brand.primary" />
      <Heading
        {...args}
        bgColor="brand.primary"
        color="ui.typography.inverse.heading"
        px="s"
        py="xs"
      />
    </>
  ),
};

// The following are additional Heading example Stories.
export const DefaultStyles: Story = {
  render: () => (
    <>
      <Heading id="heading-one" level="one" text="<h1> Heading 1 - 'one'" />
      <Heading id="heading-two" level="two" text="<h2> Heading 2 - 'two'" />
      <Heading
        id="heading-three"
        level="three"
        text="<h3> Heading 3 - 'three'"
      />
      <Heading id="heading-four" level="four" text="<h4> Heading 4 - 'four'" />
      <Heading id="heading-five" level="five" text="<h5> Heading 5 - 'five'" />
      <Heading id="heading-six" level="six" text="<h6> Heading 6 - 'six'" />
    </>
  ),
};

export const SizeStyles: Story = {
  render: () => (
    <>
      <Heading
        id="heading-primary"
        level="one"
        size="primary"
        text="<h1> 'primary'"
      />
      <Heading
        id="heading-secondary"
        level="one"
        size="secondary"
        text="<h1> 'secondary'"
      />
      <Heading
        id="heading-tertiary"
        level="one"
        size="tertiary"
        text="<h1> 'tertiary'"
      />
      <Heading
        id="heading-callout"
        level="one"
        size="callout"
        text="<h1> 'callout'"
      />
    </>
  ),
};

export const BoldText: Story = {
  render: () => (
    <Heading id="headingWithBold" level="one">
      <>
        Heading with a <b>Bold</b> Word
      </>
    </Heading>
  ),
};

export const Links: Story = {
  name: "Links",
  render: () => (
    <>
      <Heading
        id="heading-with-link-url"
        level="two"
        text="Heading with URL Props"
        url="http://apple.com"
        urlClass="special-link"
      />
      <Heading id="heading-with-link-child">
        <>
          Heading with a Word <a href="#hello">Link</a>
        </>
      </Heading>
    </>
  ),
};
