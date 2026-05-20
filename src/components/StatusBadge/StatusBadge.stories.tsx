import { Box, VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import Icon from "../Icons/Icon";
import StatusBadge, { statusBadgeFontSizeArray } from "./StatusBadge";
import Table from "../Table/Table";
import { messageVariantsArray } from "../../theme/sharedTypes";

const meta: Meta<typeof StatusBadge> = {
  title: "Components/Content Display/StatusBadge",
  component: StatusBadge,
  argTypes: {
    fontSize: {
      description: "**Only used for Storybook** - Set the label font size.",
      table: { defaultValue: { summary: "desktop.body.body2" } },
      type: { name: "string" },
      control: { type: "radio" },
      options: statusBadgeFontSizeArray,
    },
    variant: {
      control: { type: "select" },
      options: messageVariantsArray,
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
    fontSize: undefined,
    variant: undefined,
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

export const Variants: Story = {
  render: () => (
    <Table
      columnHeaders={["Variant", "Purpose", "Examples"]}
      fontSize="desktop.body.body2"
      tableData={[
        [
          <>
            <StatusBadge variant="neutral">Neutral (default)</StatusBadge>
          </>,
          "Indicates a general, non-critical status update.",
          "Unavailable, Draft, Not started",
        ],
        [
          <>
            <StatusBadge variant="informative">Informative</StatusBadge>
          </>,
          "Communicates helpful information or an important attribute.",
          "Available, New, Help, Active, In-use, Live",
        ],
        [
          <>
            <StatusBadge variant="positive">Positive</StatusBadge>
          </>,
          "Indicates a constructive or successful state.",
          "Completed, Approved, Success, Published",
        ],
        [
          <>
            <StatusBadge variant="negative">Negative</StatusBadge>
          </>,
          "Informs users of problems or errors that require potential action to correct.",
          "Error, Deleted, Failed",
        ],
        [
          <>
            <StatusBadge variant="warning">Warning</StatusBadge>
          </>,
          "Communicates cautionary or time-sensitive information.",
          "Missing, Warning, Cancelled, Busy",
        ],
        [
          <>
            <StatusBadge variant="recommendation">Recommendation</StatusBadge>
          </>,
          "Highlights a suggestion that will improve the experience and achieve better results.",
          "Recommended for you, Related",
        ],
      ]}
    />
  ),
};

export const FontSize: Story = {
  render: () => (
    <Table
      columnHeaders={["Body1", "Body2 (default)", "Caption"]}
      tableData={[
        [
          <>
            <StatusBadge fontSize="desktop.body.body1" variant="neutral">
              Neutral
            </StatusBadge>
          </>,
          <>
            <StatusBadge variant="neutral">Neutral</StatusBadge>
          </>,
          <>
            <StatusBadge fontSize="desktop.caption" variant="neutral">
              Neutral
            </StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge fontSize="desktop.body.body1" variant="informative">
              Informative
            </StatusBadge>
          </>,
          <>
            <StatusBadge variant="informative">Informative</StatusBadge>
          </>,
          <>
            <StatusBadge fontSize="desktop.caption" variant="informative">
              Informative
            </StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge fontSize="desktop.body.body1" variant="positive">
              Positive
            </StatusBadge>
          </>,
          <>
            <StatusBadge variant="positive">Positive</StatusBadge>
          </>,
          <>
            <StatusBadge fontSize="desktop.caption" variant="positive">
              Positive
            </StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge fontSize="desktop.body.body1" variant="negative">
              Negative
            </StatusBadge>
          </>,
          <>
            <StatusBadge variant="negative">Negative</StatusBadge>
          </>,
          <>
            <StatusBadge fontSize="desktop.caption" variant="negative">
              Negative
            </StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge fontSize="desktop.body.body1" variant="warning">
              Warning
            </StatusBadge>
          </>,
          <>
            <StatusBadge variant="warning">Warning</StatusBadge>
          </>,
          <>
            <StatusBadge fontSize="desktop.caption" variant="warning">
              Warning
            </StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge fontSize="desktop.body.body1" variant="recommendation">
              Recommendation
            </StatusBadge>
          </>,
          <>
            <StatusBadge variant="recommendation">Recommendation</StatusBadge>
          </>,
          <>
            <StatusBadge fontSize="desktop.caption" variant="recommendation">
              Recommendation
            </StatusBadge>
          </>,
        ],
      ]}
    />
  ),
};

export const Labeling: Story = {
  render: () => (
    <Table
      columnHeaders={["Standard", "All Caps"]}
      tableData={[
        [
          <>
            <StatusBadge variant="neutral">Request pending</StatusBadge>
          </>,
          <>
            <StatusBadge variant="neutral">REQUEST PENDING</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge variant="informative">In progress</StatusBadge>
          </>,
          <>
            <StatusBadge variant="informative">IN PROGRESS</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge variant="positive">Ready for pickup</StatusBadge>
          </>,
          <>
            <StatusBadge variant="positive">READY FOR PICKUP</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge variant="negative">Closed</StatusBadge>
          </>,
          <>
            <StatusBadge variant="negative">CLOSED</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge variant="warning">Cancelled</StatusBadge>
          </>,
          <>
            <StatusBadge variant="warning">CANCELLED</StatusBadge>
          </>,
        ],
        [
          <>
            <StatusBadge variant="recommendation">Related</StatusBadge>
          </>,
          <>
            <StatusBadge variant="recommendation">RELATED</StatusBadge>
          </>,
        ],
      ]}
    />
  ),
};

export const Icons: Story = {
  render: () => (
    <VStack spacing="s" align="stretch">
      <StatusBadge variant="negative">
        <Icon color="brand.primary" mr="xs" name="errorFilled" size="medium" />
        On-site access only
      </StatusBadge>
      <StatusBadge fontSize="desktop.caption" variant="warning">
        <Icon
          color="ui.warning.tertiary"
          mr="xs"
          name="actionHelpDefault"
          size="medium"
        />
        Missing information
      </StatusBadge>
      <StatusBadge variant="neutral">
        Registration required
        <Icon
          color="ui.black"
          ml="xs"
          name="actionIdentityFilled"
          size="medium"
        />
      </StatusBadge>
      <StatusBadge fontSize="desktop.body.body1" variant="informative">
        Includes audio
        <Icon color="ui.link.secondary" ml="xs" name="headset" size="medium" />
      </StatusBadge>
    </VStack>
  ),
};

export const TextWrap: Story = {
  render: () => (
    <>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap="l">
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="informative">
            Sapiente voluptatem velit enim maxime commodi doloribus.
          </StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="warning">
            Available on-site only
          </StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="informative">
            Contains on-site only materials
          </StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="negative">
            There is a problem. Please contact us for more information.
          </StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="positive">
            Available
          </StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="negative">
            This item is not available at this time.
          </StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2">Meh</StatusBadge>
        </Box>
        <Box>
          <StatusBadge fontSize="desktop.body.body2" variant="recommendation">
            This status is very long. This is NOT recommended. Alias molestiae
            exercitationem vero incidunt ab cumque at et. Voluptas
            necessitatibus et quo numquam aperiam recusandae facere veniam sint.
          </StatusBadge>
        </Box>
      </Box>
      <VStack align="stretch" mt="l" spacing="l">
        <StatusBadge variant="negative">
          <Icon
            color="brand.primary"
            mr="xs"
            name="errorFilled"
            size="medium"
          />
          On-site access only Nesciunt voluptates in quis molestias officia eum
          tempora vero ut. Amet assumenda aliquid id voluptas provident est
          dicta. Aut qui sequi quibusdam incidunt vel consequatur quia voluptas
          consectetur distinctio occaecati consequatur.
        </StatusBadge>
        <StatusBadge fontSize="desktop.caption" variant="warning">
          <Icon
            color="ui.warning.tertiary"
            mr="xs"
            name="actionHelpDefault"
            size="medium"
          />
          Missing information
        </StatusBadge>
        <StatusBadge variant="neutral">
          Registration required Nesciunt voluptates in quis molestias officia
          eum tempora vero ut. Amet assumenda aliquid id voluptas provident est
          dicta. Aut qui sequi quibusdam incidunt vel consequatur quia voluptas
          consectetur distinctio occaecati consequatur.
          <Icon
            color="ui.black"
            ml="xs"
            name="actionIdentityFilled"
            size="medium"
          />
        </StatusBadge>
        <StatusBadge fontSize="desktop.body.body1" variant="informative">
          Includes audio
          <Icon
            color="ui.link.secondary"
            ml="xs"
            name="headset"
            size="medium"
          />
        </StatusBadge>
      </VStack>
    </>
  ),
};
