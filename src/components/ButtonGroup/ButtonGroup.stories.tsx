import { Box, VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Button from "../Button/Button";
import ButtonGroup from "./ButtonGroup";
import Heading from "../Heading/Heading";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Form Elements/ButtonGroup",
  component: ButtonGroup,
  decorators: [withDesign],
  argTypes: {
    buttonWidth: { table: { defaultValue: { summary: "default" } } },
    className: { control: false },
    id: { control: false },
    isDisabled: { table: { defaultValue: { summary: false } } },
    layout: { table: { defaultValue: { summary: "row" } } },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

/**
 * Main Story for the ButtonGroup component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    buttonWidth: "default",
    className: undefined,
    id: "button-id",
    isDisabled: false,
    layout: "row",
  },
  parameters: {
    jest: ["ButtonGroup.test.tsx"],
  },
  render: () => (
    <ButtonGroup>
      <Button buttonType="secondary" id="group-1">
        Button
      </Button>
      <Button id="group-2">Submit</Button>
    </ButtonGroup>
  ),
};

// The following are additional ButtonGroup example Stories.
export const Width: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">default fit-content</Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="width-fit-1">
            Button
          </Button>
          <Button id="width-fit-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">full width</Heading>
        <ButtonGroup buttonWidth="full">
          <Button buttonType="secondary" id="width-full-1">
            Button
          </Button>
          <Button id="width-full-2">Submit</Button>
        </ButtonGroup>
      </Box>
    </VStack>
  ),
};

export const Layout: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">default row</Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="row-1">
            Button
          </Button>
          <Button id="row-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">column</Heading>
        <ButtonGroup layout="column">
          <Button buttonType="secondary" id="column-1">
            Button
          </Button>
          <Button id="column-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">column layout with full-width</Heading>
        <ButtonGroup buttonWidth="full" layout="column">
          <Button buttonType="secondary" id="column-full-1">
            Button
          </Button>
          <Button id="column-full-2">Submit</Button>
        </ButtonGroup>
      </Box>
    </VStack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">ButtonGroup isDisabled</Heading>
        <ButtonGroup isDisabled>
          <Button buttonType="secondary" id="group-disabled-1">
            Button disabled
          </Button>
          <Button buttonType="secondary" id="group-disabled-2">
            Button disabled
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">Individual Button isDisabled</Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="individual-disabled-1">
            Button not disabled
          </Button>
          <Button buttonType="secondary" id="individual-disabled-2" isDisabled>
            Button disabled
          </Button>
        </ButtonGroup>
      </Box>
    </VStack>
  ),
};
