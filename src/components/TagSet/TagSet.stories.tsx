import { VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import TagSet from "./TagSet";

const meta: Meta<typeof TagSet> = {
  title: "Components/Form Elements/TagSet",
  component: TagSet,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    isDismissible: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
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
export const WithControlsExplore: Story = {
  args: {
    className: undefined,
    id: "tagSet-id-explore",
    isDismissible: undefined,
    onClick: undefined,
    tagSetData: [
      {
        label: (
          <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/components-basic-elements-card--card-with-controls">
            Card
          </a>
        ),
      },
      {
        iconName: "fileTypeDoc",
        label: (
          <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
            StructuredContent
          </a>
        ),
      },
      {
        iconName: "alertWarningOutline",
        label: (
          <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
            ProgressIndicator
          </a>
        ),
      },
      {
        iconName: "actionSettings",
        label: (
          <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/hooks-usenyplbreakpoints--page">
            useNYPLBreakpoints React hook
          </a>
        ),
      },
    ],
    type: "explore",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=51380%3A41869",
    },
    jest: ["TagSet.test.tsx"],
  },
};

export const WithControlsFilter: Story = {
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
  },
};

// The following are additional TagSet example Stories.
export const FormattingExamples: Story = {
  render: () => (
    <VStack align="stretch" gap="l">
      <TagSet
        tagSetData={[
          {
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/components-basic-elements-card--card-with-controls">
                Card
              </a>
            ),
          },
          {
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
                StructuredContent
              </a>
            ),
          },
          {
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
                ProgressIndicator
              </a>
            ),
          },
          {
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/hooks-usenyplbreakpoints--page">
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
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/story/components-basic-elements-card--card-with-controls">
                Card
              </a>
            ),
          },
          {
            iconName: "fileTypeDoc",
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-page-layout-structuredcontent--structured-content-with-controls">
                StructuredContent
              </a>
            ),
          },
          {
            iconName: "alertWarningOutline",
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-feedback-progressindicator--progress-indicator-with-controls">
                ProgressIndicator
              </a>
            ),
          },
          {
            iconName: "actionSettings",
            label: (
              <a href="https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/hooks-usenyplbreakpoints--page">
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
