import { Box, VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import SocialMediaLinks, { socialMediaLinkTypeArray } from "./SocialMediaLinks";
import Heading from "../Heading/Heading";

const socialMediaLinksData = [
  { url: "#", text: "Parent" },
  { url: "#", text: "Child" },
  { url: "#", text: "Grandchild" },
];
const socialMediaLinksLongTextData = [
  { url: "#", text: "Parent with a Long Name" },
  { url: "#", text: "Child with an Even Longer Name" },
  {
    url: "#",
    text: "Grandchild with an Exceptionally Long Name",
  },
  {
    url: "#",
    text: "Great-Grandchild with the Longest Name That Will Wrap onto the Second Line of the Breadcrumb Component Under the Right Circumstances",
  },
];

const meta: Meta<typeof SocialMediaLinks> = {
  title: "Components/Navigation/SocialMediaLinks",
  component: SocialMediaLinks,
  decorators: [withDesign],
  argTypes: {
    socialMediaLinksData: { control: false },
    socialMediaLinksType: {
      table: { defaultValue: { summary: "whatsOn" } },
      control: {
        type: "select",
      },
      options: socialMediaLinkTypeArray,
    },
    className: { control: false },
    id: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SocialMediaLinks>;

/**
 * Main Story for the Accordion component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    socialMediaLinksData,
    socialMediaLinksType: "whatsOn",
    className: undefined,
    id: "socialMediaLinks-id",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031",
    },
    jest: ["SocialMediaLinks.test.tsx"],
  },
};

// The following are additional SocialMediaLinks example Stories.
export const LongText: Story = {
  render: () => <SocialMediaLinks socialMediaLinksData={socialMediaLinksLongTextData} />,
};
export const ColorVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="three">Blogs</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="blogs"
        />
      </Box>
      <Box>
        <Heading level="three">Books and More</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="booksAndMore"
        />
      </Box>
      <Box>
        <Heading level="three">Connect</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="connect"
        />
      </Box>
      <Box>
        <Heading level="three">Education</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="education"
        />
      </Box>
      <Box>
        <Heading level="three">Locations</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="locations"
        />
      </Box>
      <Box>
        <Heading level="three">Research</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="research"
        />
      </Box>
      <Box>
        <Heading level="three">What's On</Heading>
        <SocialMediaLinks
          socialMediaLinksData={socialMediaLinksData}
          socialMediaLinksType="whatsOn"
        />
      </Box>
    </VStack>
  ),
};
