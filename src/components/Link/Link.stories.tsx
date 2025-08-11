import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Link, { linkVariantsArray } from "./Link";
import Icon from "../Icons/Icon";
import { argsBooleanType } from "../../helpers/storybookUtils";

const meta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
  argTypes: {
    hasVisitedState: argsBooleanType("true"),
    href: { control: { type: "text" } },
    isUnderlined: argsBooleanType("true"),
    onClick: { control: false },
    ref: { table: { disable: true } },
    rel: { control: { type: "text" } },
    screenreaderOnlyText: { control: { type: "text" } },
    target: { control: false },
    variant: {
      control: { type: "select" },
      options: linkVariantsArray,
      table: { defaultValue: { summary: "default" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * Main Story for the Link component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    hasVisitedState: true,
    href: "https://nypl.org",
    isUnderlined: true,
    onClick: undefined,
    rel: undefined,
    screenreaderOnlyText: "Screenreader only text",
    target: undefined,
    variant: "action",
  },
  render: (args: any) => (
    <Link className="custom-class" {...args}>
      Link
    </Link>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387",
    },
    jest: ["Link.test.tsx"],
  },
};

// The following are additional Link example Stories.
export const Accessibility: Story = {
  render: () => (
    <Link variant="external" href="https://nypl.org">
      NYPL Website
    </Link>
  ),
};
export const AllLinkVariants: Story = {
  render: () => (
    <VStack spacing="l" align="flex-start">
      <Link variant="default" href="#default-link-example">
        Default
      </Link>
      <Link variant="action" href="#action-link-example">
        Action
      </Link>
      <Link variant="external" href="#external-link-example">
        External
      </Link>
      <Link variant="standalone" href="#standalone-link-example">
        Standalone
      </Link>
      <Link variant="backwards" href="#backwards-link-example">
        Backwards
      </Link>
      <Link variant="forwards" href="#forwards-link-example">
        Forwards
      </Link>
      <Link variant="buttonPrimary" href="#buttonPrimary-link-example">
        Button Primary
      </Link>
      <Link variant="buttonSecondary" href="#buttonSecondary-link-example">
        Button Secondary
      </Link>
      <Link variant="buttonPill" href="#buttonPill-link-example">
        Button Pill
      </Link>
      <Link variant="buttonCallout" href="#buttonCallout-link-example">
        Button Callout
      </Link>
      <Link variant="buttonNoBrand" href="#buttonNoBrand-link-example">
        Button No Brand
      </Link>
      <Link variant="buttonDisabled" href="#buttonDisabled-link-example">
        Button Disabled
      </Link>
    </VStack>
  ),
};
export const LinksWithIcons: Story = {
  render: () => (
    <VStack spacing="xs" align="flex-start">
      <Link variant="action" href="#headset-icon-example">
        <Icon name="headset" align="left" size="small" />
        Headset Link
      </Link>
      <Link variant="action" href="#clock-icon-example">
        <Icon name="clock" align="left" size="small" />
        Clock Link
      </Link>
      <Link variant="action" href="#action-check-left">
        <Icon name="check" align="left" size="small" />
        Check Link
      </Link>
      <Link variant="action" href="#action-check-right">
        Check Link Right
        <Icon name="check" align="right" size="small" />
      </Link>
    </VStack>
  ),
};
