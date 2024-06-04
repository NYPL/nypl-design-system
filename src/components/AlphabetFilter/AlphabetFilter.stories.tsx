import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import AlphabetFilter from "./AlphabetFilter";
import Heading from "../Heading/Heading";
import { argsBooleanType } from "../../helpers/storybookUtils";

const meta: Meta<typeof AlphabetFilter> = {
  title: "Components/Navigation/AlphabetFilter",
  component: AlphabetFilter,
  argTypes: {
    activeLetters: { control: false },
    className: { control: false },
    currentLetter: { control: false },
    id: { control: false },
    isDisabled: argsBooleanType(),
    onClick: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof AlphabetFilter>;

/**
 * Main Story for the AlphabetFilter component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    activeLetters: undefined,
    className: undefined,
    currentLetter: undefined,
    descriptionText: "This is description text.",
    headingText: "AlphabetFilter",
    id: "alphabet-filter-id",
    isDisabled: false,
    onClick: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=68164%3A68448",
    },
    jest: ["AlphabetFilter.test.tsx"],
  },
};

// The following are additional AlphabetFilter example Stories.
export const SetActiveLetters: Story = {
  render: () => (
    <AlphabetFilter
      activeLetters={[
        "#",
        "a",
        "c",
        "d",
        "e",
        "h",
        "l",
        "m",
        "n",
        "p",
        "r",
        "s",
      ]}
      onClick={undefined}
    />
  ),
};
export const WithCustomHeading: Story = {
  render: () => (
    <AlphabetFilter
      onClick={undefined}
      headingText={<Heading level="h4">Custom H4 Heading</Heading>}
    />
  ),
};
export const SetCurrentLetter: Story = {
  render: () => <AlphabetFilter currentLetter="c" onClick={undefined} />,
};
function CurrentLetterExample() {
  const [currentLetter, setCurrentLetter] = useState();
  const onClick = (letter) => {
    console.log(letter);
    setCurrentLetter(letter);
  };
  return <AlphabetFilter currentLetter={currentLetter} onClick={onClick} />;
}
export const UsingOnClick: Story = {
  name: "Using onClick",
  render: () => <CurrentLetterExample />,
};
