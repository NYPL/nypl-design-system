import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Table from "../Table/Table";
import TagSet from "./TagSet";
import { TagSetExploreDataProps, TagSetExploreProps } from "./TagSetExplore";
import { TagSetFilterDataProps } from "./TagSetFilter";
import { argsBooleanType } from "../../helpers/storybookUtils";

const meta: Meta<typeof TagSet> = {
  title: "Components/Content Display/TagSet",
  component: TagSet,
  argTypes: {
    isDismissible: argsBooleanType(),
    onClick: { control: false },
    semanticVariant: {
      control: false,
      table: { defaultValue: { summary: "default" } },
    },
    tagSetData: { control: false },
    variant: {
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
    semanticVariant: "default",
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
    variant: "explore",
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

const genericExploreTagSetData: TagSetExploreDataProps[] = [
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
];

const defaultTagSetData: TagSetFilterDataProps[] = [
  {
    iconName: "utilityAccountFilled",
    id: "abbey-road",
    label: "Abbey Road",
  },
  { iconName: "actionLaunch", id: "the-beatles", label: "The Beatles" },
  { iconName: "alertWarningOutline", id: "revolver", label: "Revolver" },
  {
    iconName: "check",
    id: "sgt-peppers",
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
      id="tagSet-id-filter-dismissible"
      isDismissible
      onClick={handleOnClick}
      tagSetData={tagSetData}
      variant="filter"
    />
  );
};

export const FilterVariantDismiss: Story = {
  render: (_args) => <FilterVariantStory />,
};
export const FilterVariant: Story = {
  render: (_args) => (
    <TagSet
      id="tagSet-id-filter"
      tagSetData={defaultTagSetData}
      variant="filter"
    />
  ),
};

// The following are additional TagSet example Stories.

export const SemanticVariants: Story = {
  render: () => (
    <Table
      columnHeaders={["Variant", "Purpose", "Examples"]}
      fontSize="desktop.body.body2"
      tableData={[
        [
          <>
            <TagSet
              semanticVariant="neutral"
              tagSetData={[{ id: "neutral", label: "Neutral" }]}
              variant="filter"
            />
          </>,
          "Indicates a general, non-critical information.",
          "Unavailable, Draft, Not started",
        ],
        [
          <>
            <TagSet
              semanticVariant="informative"
              tagSetData={[{ id: "informative", label: "Informative" }]}
              variant="filter"
            />
          </>,
          "Communicates helpful information or an important attribute.",
          "Available, New, Help, Active, In-use, Live",
        ],
        [
          <>
            <TagSet
              semanticVariant="positive"
              tagSetData={[{ id: "positive", label: "Positive" }]}
              variant="filter"
            />
          </>,
          "Indicates a constructive or successful state.",
          "Completed, Approved, Success, Published",
        ],
        [
          <>
            <TagSet
              semanticVariant="negative"
              tagSetData={[{ id: "negative", label: "Negative" }]}
              variant="filter"
            />
          </>,
          "Informs users of problems or errors that require potential action to correct.",
          "Error, Deleted, Failed",
        ],
        [
          <>
            <TagSet
              semanticVariant="warning"
              tagSetData={[{ id: "warning", label: "Warning" }]}
              variant="filter"
            />
          </>,
          "Communicates cautionary or time-sensitive information.",
          "Missing, Warning, Cancelled, Busy",
        ],
        [
          <>
            <TagSet
              semanticVariant="recommendation"
              tagSetData={[{ id: "recommendation", label: "Recommendation" }]}
              variant="filter"
            />
          </>,
          "Highlights a suggestion that will improve the experience and achieve better results.",
          "Recommended for you, Related",
        ],
      ]}
    />
  ),
};

export const FormattingExamples: Story = {
  args: {
    id: undefined,
    isDismissible: undefined,
    onClick: undefined,
    tagSetData: undefined,
    variant: undefined,
  },
  render: () => (
    <VStack align="left" gap="l">
      <VStack align="left" gap="l">
        <Heading size="heading5">Default variants</Heading>
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
          variant="explore"
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
          variant="explore"
        />
        <TagSet
          tagSetData={[
            { id: "red", label: "Red" },
            { id: "orange", label: "Orange" },
            { id: "yellow", label: "Yellow" },
            { id: "green", label: "Green" },
            { id: "blue", label: "Blue" },
            { id: "indigo", label: "Indigo" },
            { id: "violet", label: "Violet" },
          ]}
          variant="filter"
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
          variant="filter"
        />
        <TagSet
          tagSetData={[
            { iconName: "alertWarningFilled", id: "red", label: "Red" },
            { iconName: "check", id: "orange", label: "Orange" },
            { iconName: "check", id: "yellow", label: "Yellow" },
            { iconName: "alertWarningFilled", id: "green", label: "Green" },
            { iconName: "check", id: "blue", label: "Blue" },
            { iconName: "check", id: "indigo", label: "Indigo" },
            { iconName: "check", id: "violet", label: "Violet" },
          ]}
          variant="filter"
        />
      </VStack>

      <VStack align="left" gap="l">
        <Heading size="heading5">Semantic variants</Heading>
        <VStack align="left" gap="l">
          <Heading size="heading7">Filter variant (not dismissible)</Heading>
          <TagSet
            id="tagSet-id-filter"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            semanticVariant="informative"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            semanticVariant="negative"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            semanticVariant="neutral"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            semanticVariant="positive"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            semanticVariant="recommendation"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            semanticVariant="warning"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
        </VStack>
        <VStack align="left" gap="l">
          <Heading size="heading7">Filter variant (dismissible)</Heading>
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            semanticVariant="informative"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            semanticVariant="negative"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            semanticVariant="neutral"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            semanticVariant="positive"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            semanticVariant="recommendation"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
          <TagSet
            id="tagSet-id-filter"
            isDismissible
            semanticVariant="warning"
            tagSetData={defaultTagSetData}
            variant="filter"
          />
        </VStack>
        <VStack align="left" gap="l">
          <Heading size="heading7">Explore variant</Heading>
          <TagSet tagSetData={genericExploreTagSetData} variant="explore" />
          <TagSet
            semanticVariant="informative"
            tagSetData={genericExploreTagSetData}
            variant="explore"
          />
          <TagSet
            semanticVariant="negative"
            tagSetData={genericExploreTagSetData}
            variant="explore"
          />
          <TagSet
            semanticVariant="neutral"
            tagSetData={genericExploreTagSetData}
            variant="explore"
          />
          <TagSet
            semanticVariant="positive"
            tagSetData={genericExploreTagSetData}
            variant="explore"
          />
          <TagSet
            semanticVariant="recommendation"
            tagSetData={genericExploreTagSetData}
            variant="explore"
          />
          <TagSet
            semanticVariant="warning"
            tagSetData={genericExploreTagSetData}
            variant="explore"
          />
        </VStack>
      </VStack>
    </VStack>
  ),
};
