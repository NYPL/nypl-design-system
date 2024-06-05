import type { Meta, StoryObj } from "@storybook/react";
import SocialMediaLinks, {
  borderTypeArray,
  colorTypeArray,
  sizeTypeArray,
} from "./SocialMediaLinks";
import { withDesign } from "storybook-addon-designs";
import { layoutTypesArray } from "../../helpers/types";
import { Box, VStack } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import { Source } from "@storybook/blocks";

const meta: Meta<typeof SocialMediaLinks> = {
  title: "Components/Navigation/SocialMediaLinks",
  component: SocialMediaLinks,
  decorators: [withDesign],
  argTypes: {
    borders: {
      description: 'Optional border  \n\n `"none"` `"circular"` `"straight"`',
      control: { type: "radio" },
      options: borderTypeArray,
      table: {
        disable: false,
        defaultValue: { summary: "none" },
      },
    },
    className: {
      control: true,
      table: {
        disable: false,
      },
    },
    color: {
      control: { type: "radio" },
      options: colorTypeArray,
      table: {
        disable: false,
        defaultValue: { summary: "textDefault" },
      },
    },
    id: {
      control: true,
      table: {
        disable: false,
      },
    },
    layout: {
      control: { type: "radio" },
      options: layoutTypesArray,
      table: {
        disable: false,
        defaultValue: { summary: "row" },
      },
    },
    linksData: { table: { disable: false } },
    showLabels: {
      description:
        'Optional prop to display names of platforms along with icons. NOTE: Can not be chosen in combination with a circular border \n\n `"boolean"`',
      table: {
        disable: false,
        defaultValue: { summary: false },
      },
    },
    size: {
      control: { type: "radio" },
      options: sizeTypeArray,
      table: {
        disable: false,
        defaultValue: { summary: "small" },
      },
    },
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=77103-126004&t=Yx1GyAfBJyhuGIGs-4",
    },
    jest: ["SocialMediaLinks.test.tsx"],
  },
};
export default meta;
type Story = StoryObj<typeof SocialMediaLinks>;

export const WithControls: Story = {
  args: {
    borders: "none",
    color: "textDefault",
    className: undefined,
    id: undefined,
    layout: "row",
    linksData: [
      {
        type: "facebook",
        labelText: "Facebook",
        url: "https://facebook.com/nypl",
      },
      {
        type: "twitter",
        labelText: "Twitter",
        url: "https://twitter.com/nypl",
      },
      {
        type: "instagram",
        labelText: "Instagram",
        url: "https://instagram.com/nypl",
      },
    ],
    showLabels: true,
    size: "small",
  },
  render: ({ borders, showLabels, color, ...rest }) => {
    const finalShowLabels = borders === "circular" ? false : showLabels;
    return (
      <div>
        <div
          style={
            color === "textInverse"
              ? {
                  backgroundColor: "var(--nypl-colors-dark-ui-bg-page)",
                  padding: "var(--nypl-space-s)",
                }
              : { padding: "var(--nypl-space-xs)" }
          }
        >
          <SocialMediaLinks
            // Hack to satisfy storybook control options AND component prop type
            showLabels={finalShowLabels as false}
            borders={borders}
            color={color}
            {...rest}
          />
        </div>
        {color === "textInverse" && (
          <Text size="caption" mt="s">
            NOTE: background color for textInverse is added for readability in
            Reservoir. It is not part of the functionality.
          </Text>
        )}
      </div>
    );
  },
};

export const LayoutVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading
          id="heading-row-layout"
          level="h4"
          size="heading6"
          text="Row (Default)"
        />
        <SocialMediaLinks
          layout="row"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks layout="row" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-column-layout"
          level="h4"
          size="heading6"
          text="Column"
        />
        <SocialMediaLinks
          layout="column"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks layout="column" />'} />
      </Box>
    </VStack>
  ),
};

export const SizeVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading
          id="heading-small-size"
          level="h4"
          size="heading6"
          text="Small (Default)"
        />
        <SocialMediaLinks
          size="small"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks size="small" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-medium-size"
          level="h4"
          size="heading6"
          text="Medium"
        />
        <SocialMediaLinks
          size="medium"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks size="medium" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-large-size"
          level="h4"
          size="heading6"
          text="Large"
        />
        <SocialMediaLinks
          size="large"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks size="large" />'} />
      </Box>
    </VStack>
  ),
};

// Making a component just for practice
const ColorVariationsStory = () => {
  /*
  // Now I could put logic in here like below, which I could not do w/o
  // this being a component.
  const bg = useColorModeValue("ui.white", "ui.black");
*/
  return (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading
          id="heading-textdefault-color"
          level="h4"
          size="heading6"
          text="Site Default"
        />
        <SocialMediaLinks
          color="textDefault"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks color="textDefault" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-links-color"
          level="h4"
          size="heading6"
          text="Link"
        />
        <SocialMediaLinks
          color="link"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks color="link" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-textinverse-color"
          level="h4"
          size="heading6"
          text="textInverse"
        />
        <Box bgColor="dark.ui.bg.page" p="s">
          <SocialMediaLinks
            color="textInverse"
            linksData={[
              {
                type: "facebook",
                labelText: "Facebook",
                url: "https://facebook.com/nypl",
              },
              {
                type: "twitter",
                labelText: "Twitter",
                url: "https://twitter.com/nypl",
              },
              {
                type: "instagram",
                labelText: "Instagram",
                url: "https://instagram.com/nypl",
              },
            ]}
          />
        </Box>
        <Text size="caption" mt="s">
          NOTE: background color for textInverse is added for readability in
          Reservoir. It is not part of the functionality.
        </Text>
        <Source code={'<SocialMediaLinks color="textInverse" />'} />
      </Box>
    </VStack>
  );
};
// Gotta export the component we made above
export const ColorVariations: Story = {
  render: () => <ColorVariationsStory />,
};

export const BorderVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading
          id="heading-border-none"
          level="h4"
          size="heading6"
          text="None (Default)"
        />
        <SocialMediaLinks
          borders="none"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks borders="none" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-border-straight"
          level="h4"
          size="heading6"
          text="Straight"
        />
        <SocialMediaLinks
          borders="straight"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code={'<SocialMediaLinks borders="straight" />'} />
      </Box>
      <Box>
        <Heading
          id="heading-border-circular"
          level="h4"
          size="heading6"
          text="Circular"
        />
        <SocialMediaLinks
          borders="circular"
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Text size={"caption"} mt="s">
          NOTE: labels are disallowed with circular borders.
        </Text>
        <Source code={'<SocialMediaLinks borders="circular" />'} />
      </Box>
    </VStack>
  ),
};

export const LabelVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading
          id="heading-nolabels"
          level="h4"
          size="heading6"
          text="False (Default)"
        />
        <SocialMediaLinks
          showLabels={false}
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code="<SocialMediaLinks showLabels={false} />" />
      </Box>
      <Box>
        <Heading id="heading-labels" level="h4" size="heading6" text="True" />
        <SocialMediaLinks
          showLabels={true}
          linksData={[
            {
              type: "facebook",
              labelText: "Facebook",
              url: "https://facebook.com/nypl",
            },
            {
              type: "twitter",
              labelText: "Twitter",
              url: "https://twitter.com/nypl",
            },
            {
              type: "instagram",
              labelText: "Instagram",
              url: "https://instagram.com/nypl",
            },
          ]}
        />
        <Source code="<SocialMediaLinks showLabels={true} />" />
      </Box>
    </VStack>
  ),
};
