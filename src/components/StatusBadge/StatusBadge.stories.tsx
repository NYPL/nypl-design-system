import { Box } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import StatusBadge, {
  statusBadgeLevelArray,
  statusBadgeTypeArray,
} from "./StatusBadge";
import Table from "../Table/Table";

const meta: Meta<typeof StatusBadge> = {
  title: "Components/Content Display/StatusBadge",
  component: StatusBadge,
  decorators: [withDesign],
  argTypes: {
    className: { control: false },
    id: { control: false },
    level: {
      table: { defaultValue: { summary: "low" } },
      control: { type: "radio" },
      options: statusBadgeLevelArray,
    },
    type: {
      control: { type: "select" },
      options: statusBadgeTypeArray,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

/**
 * Main Story for the StatusBadge component. This must contains the `args`
 *  and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    id: "statusBadge-id",
    level: undefined,
    type: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0",
    },
    jest: "StatusBadge.test.tsx",
  },
  render: ({ ...args }) => {
    return <StatusBadge {...args}>Registration required</StatusBadge>;
  },
};

// The following are additional StatusBadge example Stories.

export const TypeVariants: Story = {
  render: () => (
    <Table
      columnHeaders={["", "Variant", "Purpose", "Examples"]}
      tableData={[
        [
          <>
            <StatusBadge type="neutral">Neutral</StatusBadge>
          </>,
          <>
            <Box whiteSpace="nowrap">Neutral (default)</Box>
          </>,
          "Indicates a general, non-critical status update.",
          "Unavailable, Draft, Not started",
        ],
        [
          <>
            <StatusBadge type="informative">Informative</StatusBadge>
          </>,
          "Informative",
          "Communicates helpful information or an important attribute.",
          "Available, New, Help, Active, In-use, Live",
        ],
        [
          <>
            <StatusBadge type="positive">Positive</StatusBadge>
          </>,
          "Positive",
          "Indicates a constructive or successful state.",
          "Completed, Approved, Success, Published",
        ],
        [
          <>
            <StatusBadge type="negative">Negative</StatusBadge>
          </>,
          "Negative",
          "Informs users of problems or errors that require potential action to correct.",
          "Error, Deleted, Failed",
        ],
        [
          <>
            <StatusBadge type="warningHigh">Warning high</StatusBadge>
          </>,
          "Warning (high)",
          "Communicates cautionary or time-sensitive information.",
          "Missing, Warning, Cancelled",
        ],
        [
          <>
            <StatusBadge type="warningLow">Warning low</StatusBadge>
          </>,
          "Warning (low)",
          "Communicates less severe cautionary or time-sensitive information.",
          "Busy, Important",
        ],
        [
          <>
            <StatusBadge type="recommendation">Recommendation</StatusBadge>
          </>,
          "Recommendation",
          "Highlights a suggestion that will improve the experience and achieve better results.",
          "Recommended for you, Related",
        ],
      ]}
    />
  ),
};

export const LevelVariants: Story = {
  render: () => (
    <Table
      columnHeaders={["", "Variant", "Purpose", "Examples"]}
      tableData={[
        [
          <>
            <StatusBadge level="low">Low level</StatusBadge>
          </>,
          <>
            <Box whiteSpace="nowrap">Low (default)</Box>
          </>,
          "Used to indicate standard or low priority.",
          "Library Card Required",
        ],
        [
          <>
            <StatusBadge level="medium">Medium level</StatusBadge>
          </>,
          "Medium",
          "Indicates moderate priority – something is important, but not critical.",
          "Pending, Cancelled",
        ],
        [
          <>
            <StatusBadge level="high">High level</StatusBadge>
          </>,
          "High",
          "Indicates the highest priority – this is critical and very important; destructive",
          "On-Site Access Only, Closed, Unavailable",
        ],
      ]}
    />
  ),
};

export const LabelingVariations: Story = {
  render: () => (
    <Table
      columnHeaders={["Standard", "All Caps"]}
      tableData={[
        [
          <>
            <StatusBadge type="neutral">Request pending</StatusBadge>
          </>,
          <>
            <StatusBadge type="neutral">REQUEST PENDING</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge type="informative">In progress</StatusBadge>
          </>,
          <>
            <StatusBadge type="informative">IN PROGRESS</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge type="positive">Ready for pickup</StatusBadge>
          </>,
          <>
            <StatusBadge type="positive">READY FOR PICKUP</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge type="negative">Closed</StatusBadge>
          </>,
          <>
            <StatusBadge type="negative">CLOSED</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge type="warningHigh">Cancelled</StatusBadge>
          </>,
          <>
            <StatusBadge type="warningHigh">CANCELLED</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge type="warningLow">Busy</StatusBadge>
          </>,
          <>
            <StatusBadge type="warningLow">BUSY</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge type="recommendation">Related</StatusBadge>
          </>,
          <>
            <StatusBadge type="recommendation">RELATED</StatusBadge>
          </>,
        ],
      ]}
    />
  ),
};
