import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import SimpleGrid from "../Grid/SimpleGrid";
import SkeletonLoader, {
  skeletonLoaderImageRatiosArray,
} from "./SkeletonLoader";
import { layoutTypesArray } from "../../helpers/types";

const meta: Meta<typeof SkeletonLoader> = {
  title: "Components/Feedback/SkeletonLoader",
  component: SkeletonLoader,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    contentSize: { table: { defaultValue: { summary: "3" } } },
    headingSize: { table: { defaultValue: { summary: "1" } } },
    imageAspectRatio: {
      control: { type: "radio" },
      options: skeletonLoaderImageRatiosArray,
      table: {
        defaultValue: { summary: "square" },
      },
    },
    isBordered: { table: { defaultValue: { summary: "false" } } },
    layout: {
      control: { type: "radio" },
      options: layoutTypesArray,
      table: { defaultValue: { summary: "column" } },
    },
    showButton: { table: { defaultValue: { summary: "false" } } },
    showContent: { table: { defaultValue: { summary: "true" } } },
    showHeading: { table: { defaultValue: { summary: "true" } } },
    showImage: { table: { defaultValue: { summary: "true" } } },
    width: { table: { defaultValue: { summary: "100%" } } },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

/**
 * Main Story for the SkeletonLoader component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    contentSize: 3,
    headingSize: 1,
    imageAspectRatio: "square",
    isBordered: false,
    layout: "column",
    showButton: false,
    showContent: true,
    showHeading: true,
    showImage: true,
    width: "300px",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36817-23677&t=G4pu0KkGDGyMdjnR-4",
    },
    jest: ["SkeletonLoader.test.tsx"],
  },
};

// The following are additional SkeletonLoader example Stories.
export const InGrid: Story = {
  name: "Placeholders in a Grid",
  render: () => (
    <SimpleGrid columns={3}>
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
    </SimpleGrid>
  ),
};
export const InList: Story = {
  name: "Placeholders in a List",
  render: () => (
    <SimpleGrid columns={1}>
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
    </SimpleGrid>
  ),
};
