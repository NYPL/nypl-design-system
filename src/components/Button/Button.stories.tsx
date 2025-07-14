import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Button, { buttonVariantsArray } from "./Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Icon from "../Icons/Icon";
import { iconNamesArray } from "../Icons/iconVariables";
import Table from "../Table/Table";
import { sizesArray } from "../../theme/sharedTypes";

const meta: Meta<typeof Button> = {
  title: "Components/Form Elements/Button",
  component: Button,
  argTypes: {
    isDisabled: { table: { defaultValue: { summary: "false" } } },
    mouseDown: { table: { defaultValue: { summary: "false" } } },
    size: {
      control: { type: "radio" },
      options: sizesArray,
      table: { defaultValue: { summary: "medium" } },
    },
    variant: {
      control: { type: "select" },
      options: buttonVariantsArray,
      table: { defaultValue: { summary: "primary" } },
    },
    buttonText: {
      description: "**Only used for Storybook – ** Set the button label text.",
      table: { category: "Storybook Only" },
    },
    displayIcon: {
      control: { type: "boolean" },
      description: "**Only used for Storybook – ** Toggle the icon visibility.",
      table: { category: "Storybook Only" },
    },
    displayIconLeft: {
      description:
        "**Only used for Storybook – ** Move the icon left or right.",
      table: { category: "Storybook Only" },
    },
    iconType: {
      control: { type: "select" },
      options: iconNamesArray,
      description: "**Only used for Storybook – ** Select an icon. ",
      table: { category: "Storybook Only" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Main Story for the Button component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    isDisabled: false,
    mouseDown: undefined,
    screenreaderOnlyText: "Screenreader only text",
    size: undefined,
    variant: "primary",
    buttonText: "Button Text",
    displayIcon: false,
    displayIconLeft: true,
    iconType: "search",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298",
    },
    jest: ["Button.test.tsx"],
  },
  render: (args: any) => (
    <Button id="button-id" {...args}>
      {args.displayIcon && args.displayIconLeft && (
        <Icon name={args.iconType} align="left" size="small" />
      )}
      {args.buttonText}
      {args.displayIcon && !args.displayIconLeft && (
        <Icon name={args.iconType} align="right" size="small" />
      )}
    </Button>
  ),
};

// The following are additional Button example Stories.
export const ButtonGroups: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" id="group-1">
        Button
      </Button>
      <Button id="group-2">Submit</Button>
    </ButtonGroup>
  ),
};
export const TextWithIcon: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <VStack align="left" spacing="input.group.button.vstack" width="150px">
        <Button id="icon-1">
          <Icon name="search" align="left" size="small" />
          Button Text
        </Button>
        <Button id="icon-2">
          Button Text
          <Icon name="search" align="right" size="small" />
        </Button>
      </VStack>
      <ButtonGroup>
        <Button variant="secondary" id="icon-left">
          <Icon
            name="arrow"
            iconRotation="rotate90"
            align="left"
            size="small"
          />
          Previous
        </Button>
        <Button variant="secondary" id="icon-right">
          Next
          <Icon
            name="arrow"
            iconRotation="rotate270"
            align="right"
            size="small"
          />
        </Button>
      </ButtonGroup>
    </VStack>
  ),
  name: "Label and Icon",
};
export const IconOnly: Story = {
  render: () => (
    <ButtonGroup>
      <Button aria-label="Previous" variant="iconOnly" id="prev-btn">
        <Icon name="arrow" iconRotation="rotate90" size="small" />
      </Button>
      <Button aria-label="Next" variant="iconOnly" id="next-btn">
        <Icon name="arrow" iconRotation="rotate270" size="small" />
      </Button>
      <Button aria-label="Close" variant="iconOnly" id="close-btn">
        <Icon name="close" size="small" />
      </Button>
    </ButtonGroup>
  ),
};
export const Patterns: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="callout" id="donate-btn">
        Donate to this library
      </Button>
      <Button variant="secondary" id="top-btn">
        Back to Top
        <Icon
          name="arrow"
          iconRotation="rotate180"
          size="small"
          className="right"
          align="right"
        />
      </Button>
    </ButtonGroup>
  ),
};
export const ButtonVariants: Story = {
  render: () => (
    <ButtonGroup alignItems="center">
      <Button id="primary-btn">Primary</Button>
      <Button variant="secondary" id="secondary-btn">
        Secondary
      </Button>
      <Button variant="text" id="text-btn">
        Text
      </Button>
      <Button variant="callout" id="callout-btn">
        Callout
      </Button>
      <Button variant="iconOnly" id="nobrand-btn">
        <Icon name="close" size="small" />
      </Button>
      <Button variant="noBrand" id="nobrand-btn">
        No Brand
      </Button>
      <Button variant="pill" id="pill-btn">
        Pill
      </Button>
    </ButtonGroup>
  ),
};
export const DisabledButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button isDisabled={false}>Enabled</Button>
      <Button isDisabled>isDisabled</Button>
    </ButtonGroup>
  ),
};

const sizeHeaders = ["variant value", "small", "medium (default)", "large"];
const buttonData = [
  [
    "primary",
    <Button key="p-small" size="small">
      Primary
    </Button>,
    <Button key="p-medium" size="medium">
      Primary
    </Button>,
    <Button key="p-large" size="large">
      Primary
    </Button>,
  ],
  [
    "secondary",
    <Button variant="secondary" id="s-small" key="s-small" size="small">
      Secondary
    </Button>,
    <Button variant="secondary" id="s-medium" key="s-medium" size="medium">
      Secondary
    </Button>,
    <Button variant="secondary" id="s-large" key="s-large" size="large">
      Secondary
    </Button>,
  ],
  [
    "text",
    <Button variant="text" id="t-small" key="t-small" size="small">
      Text
    </Button>,
    <Button variant="text" id="t-medium" key="t-medium" size="medium">
      Text
    </Button>,
    <Button variant="text" id="t-large" key="t-large" size="large">
      Text
    </Button>,
  ],
  [
    "callout",
    <Button variant="callout" id="c-small" key="c-small" size="small">
      Callout
    </Button>,
    <Button variant="callout" id="c-medium" key="c-medium" size="medium">
      Callout
    </Button>,
    <Button variant="callout" id="c-large" key="c-large" size="large">
      Callout
    </Button>,
  ],
  [
    "iconOnly",
    <Button variant="iconOnly" id="io-small" key="io-small" size="small">
      <Icon name="close" size="small" />
    </Button>,
    <Button variant="iconOnly" id="io-medium" key="io-medium" size="medium">
      <Icon name="close" size="small" />
    </Button>,
    <Button variant="iconOnly" id="io-large" key="io-large" size="large">
      <Icon name="close" size="small" />
    </Button>,
  ],
  [
    "noBrand",
    <Button variant="noBrand" id="nb-small" key="nb-small" size="small">
      No Brand
    </Button>,
    <Button variant="noBrand" id="nb-medium" key="nb-medium" size="medium">
      No Brand
    </Button>,
    <Button variant="noBrand" id="nb-large" key="nb-large" size="large">
      No Brand
    </Button>,
  ],
  [
    "pill",
    <Button variant="pill" id="pill-small" key="pill-small" size="small">
      Pill
    </Button>,
    <Button variant="pill" id="pill-medium" key="pill-medium" size="medium">
      Pill
    </Button>,
    <Button variant="pill" id="pill-large" key="pill-large" size="large">
      Pill
    </Button>,
  ],
];

export const ButtonSizes: Story = {
  render: () => (
    <Table
      columnHeaders={sizeHeaders}
      id="all-sizes"
      showRowDividers
      tableData={buttonData}
      useRowHeaders
      sx={{
        tbody: {
          th: {
            verticalAlign: "middle",
          },
          td: {
            verticalAlign: "middle",
          },
        },
      }}
    />
  ),
};
