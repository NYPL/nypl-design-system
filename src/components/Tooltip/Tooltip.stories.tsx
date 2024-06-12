import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Image from "../Image/Image";
import Link from "../Link/Link";
import Radio from "../Radio/Radio";
import RadioGroup from "../RadioGroup/RadioGroup";
import SimpleGrid from "../Grid/SimpleGrid";
import Text from "../Text/Text";
import Toggle from "../Toggle/Toggle";
import Tooltip from "./Tooltip";
import { argsBooleanType } from "../../helpers/storybookUtils";
import { getPlaceholderImage } from "../../utils/utils";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlays & Switchers/Tooltip",
  component: Tooltip,
  argTypes: {
    children: { control: false },
    className: { control: false },
    id: { control: false },
    isDisabled: argsBooleanType(),
    shouldWrapChildren: argsBooleanType(),
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Main Story for the Tooltip component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    children: undefined,
    className: undefined,
    content:
      "This is a tooltip with information describing the hovered object.",
    id: "tooltip-id",
    isDisabled: false,
    shouldWrapChildren: false,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button id="tooltip-button">Hover me</Button>
    </Tooltip>
  ),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25702",
    },
    jest: ["Tooltip.test.tsx"],
  },
};

// The following are additional Tooltip example Stories.
export const OnFormElements: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Tooltip
        content="Invite library staff to share resources at your community event"
        shouldWrapChildren
      >
        <Toggle id="radio3" labelText="Offsite Community Outreach" />
      </Tooltip>
      <RadioGroup
        labelText="What would you like to request?"
        id="radio-group"
        name="tooltip-example"
      >
        <Tooltip
          content="General library orientation or a customized research lesson"
          shouldWrapChildren
        >
          <Radio id="radio1" labelText="Class Visit" value="Class Visit" />
        </Tooltip>
        <Tooltip
          content="Guided exploration of the library and its resources"
          shouldWrapChildren
        >
          <Radio id="radio2" labelText="Group Tour" value="Group Tour" />
        </Tooltip>
        <Tooltip
          content="Invite library staff to share resources at your community event"
          shouldWrapChildren
        >
          <Radio
            id="radio3"
            labelText="Offsite Community Outreach"
            value="Offsite Community Outreach"
          />
        </Tooltip>
      </RadioGroup>
    </VStack>
  ),
};

export const OnImageComponents: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Text>
        Images with aspect ratios but Tooltips use shouldWrapChildren. Don't do
        this.
      </Text>
      <SimpleGrid>
        <Tooltip content="square aspect ratio" shouldWrapChildren>
          <Image
            alt="Alt text"
            aspectRatio="square"
            caption="Square"
            size="large"
            src={getPlaceholderImage("smaller")}
          />
        </Tooltip>
        <Tooltip content="fourByThree aspect ratio" shouldWrapChildren>
          <Image
            alt="Alt text"
            aspectRatio="fourByThree"
            caption="Four by Three"
            size="default"
            src={getPlaceholderImage("smaller")}
          />
        </Tooltip>
        <Tooltip content="threeByFour aspect ratio" shouldWrapChildren>
          <Image
            alt="Alt text"
            aspectRatio="threeByFour"
            caption="Three by Four"
            size="default"
            src={getPlaceholderImage("smaller")}
          />
        </Tooltip>
      </SimpleGrid>
    </VStack>
  ),
};

export const OnLinkedIcons: Story = {
  render: () => (
    <Tooltip content="This is the tooltip text">
      <Link type="action" href="#passed-in-link">
        <Icon decorative id="icon-id" name="search" size="xxlarge" />
      </Link>
    </Tooltip>
  ),
};

export const UsingIconContent: Story = {
  render: () => (
    <Tooltip
      content={
        <Icon
          color="ui.white"
          decorative
          id="icon-id"
          name="search"
          size="xxlarge"
        />
      }
    >
      Hover to see search icon
    </Tooltip>
  ),
};

export const UsingImageContent: Story = {
  render: () => (
    <Tooltip content={<Image alt="" src={getPlaceholderImage("smaller")} />}>
      Hover to see image
    </Tooltip>
  ),
};

export const DisablingTooltip: Story = {
  render: () => (
    <Tooltip
      content="This is a tooltip with information describing the hovered object."
      isDisabled
    >
      <Button id="tooltip-button">Hover me</Button>
    </Tooltip>
  ),
};

export const DisablingTooltipButton: Story = {
  render: () => (
    <VStack spacing="input.group.button.vstack" width="150px">
      <Tooltip content="This is a tooltip with information describing the hovered object.">
        <Button id="tooltip-button" isDisabled>
          Disabled Tooltip
        </Button>
      </Tooltip>
      <Tooltip
        content="This is a tooltip with information describing the hovered object."
        shouldWrapChildren
      >
        <Button id="tooltip-button" isDisabled>
          Enabled Tooltip
        </Button>
      </Tooltip>
    </VStack>
  ),
};
