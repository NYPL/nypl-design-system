import { Box, VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Heading from "../Heading/Heading";
import StyledList from "./StyledList";

const meta: Meta<typeof StyledList> = {
  title: "Components/Typography & Styles/StyledList",
  component: StyledList,
  decorators: [withDesign],
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
    id: { control: false },
    listItems: { control: false },
    style: { control: false },
    textSize: { table: { defaultValue: { summary: "default" } } },
  },
};

export default meta;
type Story = StoryObj<typeof StyledList>;

const itemGroups = [
  'FULL TITLE: "...and for the City of New York"',
  'ALTERNATIVE TITLES: "...Society of New York delivered at..." + 1 more',
  'SUBJECTS: "...City of New York, in the" + 2 more',
];
const listItems = [
  <>
    FULL TITLE:{" "}
    <i>
      "...and for the <b>City of New York</b>"
    </i>
  </>,
  <>
    ALTERNATIVE TITLES:{" "}
    <i>
      "...Society of <b>New York</b> delivered at..."
    </i>{" "}
    + 1 more
  </>,
  <>
    SUBJECTS:{" "}
    <i>
      "...<b>City of New York</b>, in the"
    </i>{" "}
    + 2 more
  </>,
];

/**
 * Main Story for the StyledList component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    className: undefined,
    id: "nypl-styledlist",
    listItems: itemGroups,
    style: "capped",
    textSize: "default",
  },
  render: (args) => <StyledList {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=71684-76060&t=XbyIY1tCtH4Qkkfo-4",
    },
    jest: ["StyledList.test.tsx"],
  },
};

// The following are additional StyledList example Stories.
export const FontSize: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Caption
        </Heading>
        <StyledList textSize="caption" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Default
        </Heading>
        <StyledList textSize="default" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Mini
        </Heading>
        <StyledList textSize="mini" listItems={listItems} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Tag
        </Heading>
        <StyledList textSize="tag" listItems={listItems} />
      </Box>
    </VStack>
  ),
};
