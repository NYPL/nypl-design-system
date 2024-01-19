import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { argsBooleanType } from "../../helpers/storybookUtils";

import TagSet from "./TagSet";
import { TagSetExploreProps } from "./TagSetExplore";
import { TagSetFilterProps } from "./TagSetFilter";

const meta: Meta<typeof TagSet> = {
  title: "Components/Form Elements/TagSet",
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

export const FilterVariant: Story = {
  args: {
    className: undefined,
    id: "tagSet-id-filter",
    isDismissible: true,
    onClick: (tagLabel) => {
      console.log(`Clicked from the onClick props: ${tagLabel}`);
    },
    tagSetData: [
      { iconName: "utilityAccountFilled", label: "Abbey Road" },
      { iconName: "actionLaunch", label: "The Beatles" },
      { iconName: "alertWarningOutline", label: "Revolver" },
      {
        iconName: "check",
        label: "The Beatles Sgt. Pepper's Lonely Hearts Club Band",
      },
    ],
    type: "filter",
  } as TagSetFilterProps,
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
          { label: "Red" },
          { label: "Orange" },
          { label: "Yellow" },
          { label: "Green" },
          { label: "Blue" },
          { label: "Indigo" },
          { label: "Violet" },
        ]}
        type="filter"
      />
      <TagSet
        isDismissible
        onClick={(tagLabel) =>
          console.log(`Clicked from the onClick props: ${tagLabel}`)
        }
        tagSetData={[
          { label: "Red" },
          { label: "Orange" },
          { label: "Yellow" },
          { label: "Green" },
          { label: "Blue" },
          { label: "Indigo" },
          { label: "Violet" },
        ]}
        type="filter"
      />
      <TagSet
        onClick={(tagLabel) =>
          console.log(`Clicked from the onClick props: ${tagLabel}`)
        }
        tagSetData={[
          { iconName: "alertWarningFilled", label: "Red" },
          { iconName: "check", label: "Orange" },
          { iconName: "check", label: "Yellow" },
          { iconName: "alertWarningFilled", label: "Green" },
          { iconName: "check", label: "Blue" },
          { iconName: "check", label: "Indigo" },
          { iconName: "check", label: "Violet" },
        ]}
        type="filter"
      />
    </VStack>
  ),
};
