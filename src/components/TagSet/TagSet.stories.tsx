import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { useState } from "react";

import Button from "../Button/Button";
import TagSet from "./TagSet";
import { TagSetExploreProps } from "./TagSetExplore";
import { TagSetFilterDataProps } from "./TagSetFilter";
import { argsBooleanType } from "../../helpers/storybookUtils";

const meta: Meta<typeof TagSet> = {
  title: "Components/Content Display/TagSet",
  component: TagSet,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    isDismissible: argsBooleanType(),
    onClick: { control: false },
    tagSetData: { control: false },
    type: {
      control: false,
      table: { defaultValue: { summary: "filter" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagSet>;

/**
 * Main Story for the TagSet component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const ExploreVariant: Story = {
  args: {
    className: undefined,
    id: "tagSet-id-explore",
    tagSetData: [
      {
        label: (
          <a href="../?path=/story/components-basic-elements-card--with-controls">
            Card
          </a>
        ),
      },
      {
        iconName: "fileTypeDoc",
        label: (
          <a href="../?path=/story/components-page-layout-structuredcontent--controls">
            StructuredContent
          </a>
        ),
      },
      {
        iconName: "alertWarningOutline",
        label: (
          <a href="../?path=/story/components-feedback-progressindicator--with-controls">
            ProgressIndicator
          </a>
        ),
      },
      {
        iconName: "actionSettings",
        label: (
          <a href="../?path=/docs/hooks-usenyplbreakpoints--docs">
            useNYPLBreakpoints React hook
          </a>
        ),
      },
    ],
    type: "explore",
  } as TagSetExploreProps,
  argTypes: {
    isDismissible: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=51380%3A41869",
    },
    jest: ["TagSet.test.tsx"],
  },
};

const defaultTagSetData: TagSetFilterDataProps[] = [
  {
    iconName: "utilityAccountFilled",
    id: "abby-road",
    label: "Abbey Road",
  },
  { iconName: "actionLaunch", id: "the-beatles", label: "The Beatles" },
  { iconName: "alertWarningOutline", id: "revolver", label: "Revolver" },
  {
    iconName: "check",
    id: "st-peppers",
    label: "The Beatles Sgt. Pepper's Lonely Hearts Club Band",
  },
];
const FilterVariantStory = () => {
  const [tagSetData, setTagSetData] =
    useState<TagSetFilterDataProps[]>(defaultTagSetData);
  const handleOnClick = (tagSet) => {
    console.log(`Clicked from the onClick props: ${tagSet.label}`);

    if (tagSet.id === "clear-filters") {
      setTagSetData([]);
      return;
    }
    setTagSetData((prevTagSetData) =>
      prevTagSetData.filter((tag) => {
        return tag.id !== tagSet.id;
      })
    );
  };

  if (tagSetData.length === 0) {
    return (
      <Button id="reset-tags" onClick={() => setTagSetData(defaultTagSetData)}>
        Reset Tags
      </Button>
    );
  }

  return (
    <TagSet
      id="tagSet-id-filter"
      isDismissible
      onClick={handleOnClick}
      tagSetData={tagSetData}
      type="filter"
    />
  );
};

export const FilterVariant: Story = {
  render: (_args) => <FilterVariantStory />,
};

// The following are additional TagSet example Stories.
export const FormattingExamples: Story = {
  args: {
    className: undefined,
    id: undefined,
    isDismissible: undefined,
    onClick: undefined,
    tagSetData: undefined,
    type: undefined,
  },
  render: () => (
    <VStack align="stretch" gap="l">
      <TagSet
        tagSetData={[
          {
            label: (
              <a href="../?path=/story/components-basic-elements-card--card-with-controls">
                Card
              </a>
            ),
          },
          {
            label: (
              <a href="../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
                StructuredContent
              </a>
            ),
          },
          {
            label: (
              <a href="../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
                ProgressIndicator
              </a>
            ),
          },
          {
            label: (
              <a href="../?path=/docs/hooks-usenyplbreakpoints--page">
                useNYPLBreakpoints React hook
              </a>
            ),
          },
        ]}
        type="explore"
      />
      <TagSet
        tagSetData={[
          {
            label: (
              <a href="../?path=/story/components-basic-elements-card--card-with-controls">
                Card
              </a>
            ),
          },
          {
            iconName: "fileTypeDoc",
            label: (
              <a href="../?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
                StructuredContent
              </a>
            ),
          },
          {
            iconName: "alertWarningOutline",
            label: (
              <a href="../?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
                ProgressIndicator
              </a>
            ),
          },
          {
            iconName: "actionSettings",
            label: (
              <a href="../?path=/docs/hooks-usenyplbreakpoints--page">
                useNYPLBreakpoints React hook
              </a>
            ),
          },
        ]}
        type="explore"
      />
      <TagSet
        onClick={(tagLabel) =>
          console.log(`Clicked from the onClick props: ${tagLabel}`)
        }
        tagSetData={[
          { id: "red", label: "Red" },
          { id: "orange", label: "Orange" },
          { id: "yellow", label: "Yellow" },
          { id: "green", label: "Green" },
          { id: "blue", label: "Blue" },
          { id: "indigo", label: "Indigo" },
          { id: "violet", label: "Violet" },
        ]}
        type="filter"
      />
      <TagSet
        isDismissible
        onClick={(tagLabel) =>
          console.log(`Clicked from the onClick props: ${tagLabel}`)
        }
        tagSetData={[
          { id: "red", label: "Red" },
          { id: "orange", label: "Orange" },
          { id: "yellow", label: "Yellow" },
          { id: "green", label: "Green" },
          { id: "blue", label: "Blue" },
          { id: "indigo", label: "Indigo" },
          { id: "violet", label: "Violet" },
        ]}
        type="filter"
      />
      <TagSet
        onClick={(tagLabel) =>
          console.log(`Clicked from the onClick props: ${tagLabel}`)
        }
        tagSetData={[
          { iconName: "alertWarningFilled", id: "red", label: "Red" },
          { iconName: "check", id: "orange", label: "Orange" },
          { iconName: "check", id: "yellow", label: "Yellow" },
          { iconName: "alertWarningFilled", id: "green", label: "Green" },
          { iconName: "check", id: "blue", label: "Blue" },
          { iconName: "check", id: "indigo", label: "Indigo" },
          { iconName: "check", id: "violet", label: "Violet" },
        ]}
        type="filter"
      />
    </VStack>
  ),
};
