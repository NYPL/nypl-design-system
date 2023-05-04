import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Button from "./Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Icon from "../Icons/Icon";
import Table from "../Table/Table";

const iconNames = [
  "accessibilityFull",
  "accessibilityPartial",
  "actionCheckCircle",
  "actionCheckCircleFilled",
  "actionExit",
  "actionHelpDefault",
  "actionHelpOutline",
  "alertNotificationImportant",
  "actionLaunch",
  "actionRegistration",
  "actionPower",
  "actionSettings",
  "alertNotificationImportant",
  "alertWarningFilled",
  "alertWarningOutline",
  "arrow",
  "building",
  "check",
  "clock",
  "close",
  "decorativeEnvelope",
  "decorativeLibraryCard",
  "decorativeShoppingBag",
  "download",
  "errorFilled",
  "errorOutline",
  "fileTypeAudio",
  "fileTypeDoc",
  "fileTypeGenericDoc",
  "fileTypeImage",
  "fileTypePdf",
  "fileTypeSpreadsheet",
  "fileTypeVideo",
  "headset",
  "legacyAccountFilled",
  "legacyAccountUnfilled",
  "legacySocialFacebook",
  "legacySocialInstagram",
  "legacySocialTwitter",
  "legacySocialYoutube",
  "locator",
  "minus",
  "plus",
  "search",
  "socialFacebook",
  "socialInstagram",
  "socialTumblr",
  "socialTwitter",
  "socialYoutube",
  "speakerNotes",
  "utilityAccountFilled",
  "utilityAccountUnfilled",
  "utilityHamburger",
  "utilitySearch",
];

const meta: Meta<typeof Button> = {
  title: "Components/Form Elements/Button",
  component: Button,
  decorators: [withDesign],
  argTypes: {
    buttonText: { description: "Only used for Storybook" },
    buttonType: {
      table: { defaultValue: { summary: "primary" } },
    },
    className: { control: false },
    displayIcon: { description: "Only used for Storybook." },
    displayIconLeft: {
      description: "Move the icon left or right. Only used for Storybook.",
    },
    iconType: {
      control: { type: "select" },
      options: iconNames,
      description: "Select the icon. Only used for Storybook.",
    },
    id: { control: false },
    isDisabled: { table: { defaultValue: { summary: false } } },
    mouseDown: { table: { defaultValue: { summary: false } } },
    onClick: { control: false },
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
    buttonText: "Button Text",
    buttonType: "primary",
    className: undefined,
    displayIcon: false,
    displayIconLeft: true,
    iconType: "search",
    id: "button-id",
    isDisabled: false,
    mouseDown: undefined,
    onClick: undefined,
    size: "medium",
    type: "button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298",
    },
    jest: ["Button.test.tsx"],
  },
  render: () => <Button id="button-id">Button Text</Button>,
};

// The following are additional Button example Stories.
export const ButtonGroups: Story = {
  render: () => (
    <ButtonGroup>
      <Button buttonType="secondary" id="group-1">
        Button
      </Button>
      <Button id="group-2">Submit</Button>
    </ButtonGroup>
  ),
};
export const WithIcons: Story = {
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
        <Button buttonType="secondary" id="icon-left">
          <Icon
            name="arrow"
            iconRotation="rotate90"
            align="left"
            size="small"
          />
          Previous
        </Button>
        <Button buttonType="secondary" id="icon-right">
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
};
export const IconOnly: Story = {
  render: () => (
    <ButtonGroup>
      <Button aria-label="Previous" buttonType="secondary" id="prev-btn">
        <Icon name="arrow" iconRotation="rotate90" size="small" />
      </Button>
      <Button aria-label="Next" buttonType="secondary" id="next-btn">
        <Icon name="arrow" iconRotation="rotate270" size="small" />
      </Button>
      <Button aria-label="Close" buttonType="secondary" id="close-btn">
        <Icon name="close" size="small" />
      </Button>
    </ButtonGroup>
  ),
};
export const Patterns: Story = {
  render: () => (
    <ButtonGroup>
      <Button buttonType="callout" id="donate-btn">
        Donate to this library
      </Button>
      <Button buttonType="secondary" id="top-btn">
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
export const ButtonTypes: Story = {
  render: () => (
    <ButtonGroup alignItems="center">
      <Button id="primary-btn">Primary</Button>
      <Button buttonType="secondary" id="secondary-btn">
        Secondary
      </Button>
      <Button buttonType="text" id="text-btn">
        Text
      </Button>
      <Button buttonType="callout" id="callout-btn">
        Callout
      </Button>
      <Button buttonType="noBrand" id="nobrand-btn">
        No Brand
      </Button>
      <Button buttonType="pill" id="pill-btn">
        Pill
      </Button>
      <Button buttonType="link" id="link-btn">
        Link (deprecated)
      </Button>
    </ButtonGroup>
  ),
};
export const DisabledButtons: Story = {
  render: () => (
    <ButtonGroup>
      <Button id="enabled-btn" isDisabled={false}>
        Enabled
      </Button>
      <Button id="disabled-btn" isDisabled>
        isDisabled
      </Button>
    </ButtonGroup>
  ),
};

const sizeHeaders = ["--", "small", "medium (default)", "large"];
const buttonData = [
  [
    "primary",
    <Button id="p-small" key="p-small" size="small">
      Primary
    </Button>,
    <Button id="p-medium" key="p-medium" size="medium">
      Primary
    </Button>,
    <Button id="p-large" key="p-large" size="large">
      Primary
    </Button>,
  ],
  [
    "secondary",
    <Button buttonType="secondary" id="s-small" key="s-small" size="small">
      Secondary
    </Button>,
    <Button buttonType="secondary" id="s-medium" key="s-medium" size="medium">
      Secondary
    </Button>,
    <Button buttonType="secondary" id="s-large" key="s-large" size="large">
      Secondary
    </Button>,
  ],
  [
    "text",
    <Button buttonType="text" id="t-small" key="t-small" size="small">
      Text
    </Button>,
    <Button buttonType="text" id="t-medium" key="t-medium" size="medium">
      Text
    </Button>,
    <Button buttonType="text" id="t-large" key="t-large" size="large">
      Text
    </Button>,
  ],
  [
    "callout",
    <Button buttonType="callout" id="c-small" key="c-small" size="small">
      Callout
    </Button>,
    <Button buttonType="callout" id="c-medium" key="c-medium" size="medium">
      Callout
    </Button>,
    <Button buttonType="callout" id="c-large" key="c-large" size="large">
      Callout
    </Button>,
  ],
  [
    "noBrand",
    <Button buttonType="noBrand" id="nb-small" key="nb-small" size="small">
      No Brand
    </Button>,
    <Button buttonType="noBrand" id="nb-medium" key="nb-medium" size="medium">
      No Brand
    </Button>,
    <Button buttonType="noBrand" id="nb-large" key="nb-large" size="large">
      No Brand
    </Button>,
  ],
  [
    "pill",
    <Button buttonType="pill" id="pill-small" key="pill-small" size="small">
      Pill
    </Button>,
    <Button buttonType="pill" id="pill-medium" key="pill-medium" size="medium">
      Pill
    </Button>,
    <Button buttonType="pill" id="pill-large" key="pill-large" size="large">
      Pill
    </Button>,
  ],
  [
    "link (deprecated)",
    <Button buttonType="link" id="l-small" key="l-small" size="small">
      Link
    </Button>,
    <Button buttonType="link" id="l-medium" key="l-medium" size="medium">
      Link
    </Button>,
    <Button buttonType="link" id="l-large" key="l-large" size="large">
      Link
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
