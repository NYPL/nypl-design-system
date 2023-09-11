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
      table: { disable: true },
    },
    className: { table: { disable: true } },
    color: {
      table: { disable: true },
    },
    id: { table: { disable: true } },
    layout: {
      table: { disable: true },
    },
    linksData: { table: { disable: true } },
    showLabels: { table: { disable: true } },
    size: {
      table: { disable: true },
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
      { type: "facebook" },
      {
        type: "twitter",
        url: "twitter.com/elsewhere",
        labelText: "Alt Twitter",
      },
      {
        type: "instagram",
      },
    ],
    showLabels: true,
    size: "small",
  },
  argTypes: {
    borders: {
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
      description:
        "Any of three optional values that will change the color of the svg and label text (if any).",
      control: { type: "radio" },
      // @todo the table will not display these options.
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
  render: (args) => (
    <div
      style={
        args.color === "textInverse"
          ? {
              backgroundColor: "var(--nypl-colors-dark-ui-typography-body)",
              display: "inline-block",
              padding: "var(--nypl-space-xs)",
            }
          : { display: "inline-block", padding: "var(--nypl-space-xs)" }
      }
    >
      <SocialMediaLinks {...args} />
      <p>&nbsp;</p>
      <Text size={"caption"}>
        NOTE: background color for textInverse is added for readability in
        Reservoir. It is not part of the functionality.
      </Text>
    </div>
  ),
};

export const LayoutVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-row-layout" level="four" text="Row (Default)" />
        <SocialMediaLinks layout={"row"} />
        <Source code="<SocialMediaLinks layout={'row'} />" />
      </Box>
      <Box>
        <Heading id="heading-column-layout" level="four" text="Column" />
        <SocialMediaLinks layout={"column"} />
        <Source code="<SocialMediaLinks layout={'column'} />" />
      </Box>
    </VStack>
  ),
};

export const SizeVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-small-size" level="four" text="Small (Default)" />
        <SocialMediaLinks size={"small"} />
        <Source code="<SocialMediaLinks size={'small'} />" />
      </Box>
      <Box>
        <Heading id="heading-medium-size" level="four" text="Medium" />
        <SocialMediaLinks size={"medium"} />
        <Source code="<SocialMediaLinks size={'medium'} />" />
      </Box>
      <Box>
        <Heading id="heading-large-size" level="four" text="Large" />
        <SocialMediaLinks size={"large"} />
        <Source code="<SocialMediaLinks size={'large'} />" />
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
          level="four"
          text="Site Default"
        />
        <SocialMediaLinks color={"textDefault"} />
        <Source code="<SocialMediaLinks color={'textDefault'} />" />
      </Box>
      <Box>
        <Heading id="heading-links-color" level="four" text="Link" />
        <SocialMediaLinks color={"link"} />
        <Source code="<SocialMediaLinks color={'link'} />" />
      </Box>
      <Box
        bgColor={"dark.ui.typography.body"}
        sx={{ padding: "var(--nypl-space-s)" }}
      >
        <Heading
          id="heading-textinverse-color"
          level="four"
          text="textInverse"
        />
        <SocialMediaLinks color={"textInverse"} />
        <p>&nbsp;</p>
        <Text size={"caption"}>
          NOTE: background color for textInverse is added for readability in
          Reservoir. It is not part of the functionality.
        </Text>
        <Source code="<SocialMediaLinks color={'textInverse'} />" />
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
        <Heading id="heading-border-none" level="four" text="None (Default)" />
        <SocialMediaLinks borders={"none"} />
        <Source code="<SocialMediaLinks borders={'none'} />" />
      </Box>
      <Box>
        <Heading id="heading-border-straight" level="four" text="Straight" />
        <SocialMediaLinks borders={"straight"} />
        <Source code="<SocialMediaLinks borders={'straight'} />" />
      </Box>
      <Box>
        <Heading id="heading-border-circular" level="four" text="Circular" />
        <p>NOTE: labels are disallowed with circular borders.</p>
        <SocialMediaLinks borders={"circular"} />
        <Source code="<SocialMediaLinks borders={'circular'} />" />
      </Box>
    </VStack>
  ),
};

export const LabelVariations: Story = {
  render: () => (
    <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-nolabels" level="four" text="False (Default)" />
        <SocialMediaLinks showLabels={false} />
        <Source code="<SocialMediaLinks showLabels={false} />" />
      </Box>
      <Box>
        <Heading id="heading-labels" level="four" text="True" />
        <SocialMediaLinks showLabels={true} />
        <Source code="<SocialMediaLinks showLabels={true} />" />
      </Box>
    </VStack>
  ),
};

export const noLinksData: Story = {
  render: () => (
    <Box>
      {/* @todo This should work, with import Markdown , but it throws an error. It doesn't like something about the styling.
       *  <Markdown>If the `linksData` prop is not supplied or otherwise "falsy,"
        the component returns all available social media types and their default
        values.</Markdown>
       */}
      <p>
        If the <code>linksData</code> prop is not supplied or otherwise "falsy,"
        the component returns all available social media types and their default
        values.
      </p>
      <SocialMediaLinks />
      <Source code="<SocialMediaLinks />" />
    </Box>
  ),
};
