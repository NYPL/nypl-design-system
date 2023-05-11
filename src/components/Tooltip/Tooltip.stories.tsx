import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

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

const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlays & Switchers/Tooltip",
  component: Tooltip,
  decorators: [withDesign],
  argTypes: {
    children: { control: false },
    className: { control: false },
    id: { control: false },
    isDisabled: {
      table: { defaultValue: { summary: false } },
    },
    shouldWrapChildren: {
      table: { defaultValue: { summary: false } },
    },
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
export const TooltipsOnFormOptions: Story = {
  render: () => (
    <>
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
    </>
  ),
};

export const TooltipOnImageComponent: Story = {
  render: () => (
    <>
      <Text>
        Images with aspect ratios but Tooltips use shouldWrapChildren. Don't do
        this.
      </Text>
      <SimpleGrid>
        <Tooltip content="square aspect ratio" shouldWrapChildren>
          <Image
            alt="Alt text"
            caption="Square"
            aspectRatio="square"
            size="large"
            src="https://placeimg.com/400/400/animals"
          />
        </Tooltip>
        <Tooltip content="fourByThree aspect ratio" shouldWrapChildren>
          <Image
            alt="Alt text"
            caption="Four by Three"
            aspectRatio="fourByThree"
            size="default"
            src="https://placeimg.com/400/400/animals"
          />
        </Tooltip>
        <Tooltip content="threeByFour aspect ratio" shouldWrapChildren>
          <Image
            alt="Alt text"
            caption="Three by Four"
            aspectRatio="threeByFour"
            size="default"
            src="https://placeimg.com/400/400/animals"
          />
        </Tooltip>
      </SimpleGrid>
    </>
  ),
};

export const TooltipOnLinkedIcon: Story = {
  render: () => (
    <Tooltip content="This is the tooltip text">
      <Link type="action" href="#passed-in-link">
        <Icon decorative id="icon-id" name="search" size="xxlarge" />
      </Link>
    </Tooltip>
  ),
};

export const TooltipWithIconContent: Story = {
  render: () => (
    <Tooltip
      content={
        <Icon
          decorative
          id="icon-id"
          name="search"
          size="xxlarge"
          color="ui.white"
        />
      }
    >
      Hover to see search icon
    </Tooltip>
  ),
};

export const TooltipWithImageContent: Story = {
  render: () => (
    <Tooltip
      content={<Image src="https://placeimg.com/300/300/animals?x=1" alt="" />}
    >
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
