import { Box, VStack } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import Heading from "../Heading/Heading";
import Image, {
  imageRatiosArray,
  imageSizesArray,
  imageTypesArray,
} from "./Image";
import SimpleGrid from "../Grid/SimpleGrid";

const meta: Meta<typeof Image> = {
  title: "Components/Media & Icons/Image",
  component: Image,
  decorators: [withDesign],
  argTypes: {
    additionalFigureStyles: { control: false },
    additionalImageStyles: { control: false },
    additionalWrapperStyles: { control: false },
    alt: {
      control: false,
      description:
        "Alternate text description of the image. Needed for accessibility purposes.",
    },
    aspectRatio: {
      control: { type: "select" },
      options: imageRatiosArray,
      table: { defaultValue: { summary: "original" } },
    },
    className: {
      control: false,
      description: "Additional class name for the component to use.",
    },
    component: { control: false },
    imageType: {
      control: { type: "radio" },
      options: imageTypesArray,
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      control: { type: "select" },
      options: imageSizesArray,
      table: { defaultValue: { summary: "default" } },
    },
    src: {
      description:
        "The src attribute is required, and contains the path to the image you want to embed.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

/**
 * Main Story for the Image component. This must contains the `args`
 * and `parameters` properties in this object.
 */
export const WithControls: Story = {
  args: {
    additionalFigureStyles: undefined,
    additionalImageStyles: undefined,
    additionalWrapperStyles: undefined,
    alt: "Alt text",
    aspectRatio: "twoByOne",
    caption: "Image caption",
    className: undefined,
    component: undefined,
    credit: "Image credit",
    imageType: "default",
    size: "medium",
    src: "//placekitten.com/400/300",
  },
  render: (args) => <Image {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379",
    },
    jest: ["Image.test.tsx"],
  },
};

// The following are additional Image example Stories.
export const FigureAndFigcaption: Story = {
  args: {
    alt: "Alt text",
    aspectRatio: "threeByTwo",
    caption: "Image caption",
    credit: "Image credit",
    imageType: "default",
    size: "medium",
    src: "//placekitten.com/400/300",
  },
  argTypes: {
    aspectRatio: { table: { disable: true } },
    caption: { table: { disable: true } },
    credit: { table: { disable: true } },
    imageType: { table: { disable: true } },
    size: { table: { disable: true } },
    src: { table: { disable: true } },
  },
  name: "Credit and Caption",
  render: (args) => <Image {...args} />,
};
export const Sizes: Story = {
  render: () => (
    <VStack spacing="l">
      <Box textAlign="center">
        <Heading id="ExtraExtraExtraSmall" level="four" text="xxxsmall" />
        <Image
          alt="Alt text"
          caption="32px"
          size="xxxsmall"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box textAlign="center">
        <Heading id="ExtraExtraSmall" level="four" text="xxsmall" />
        <Image
          alt="Alt text"
          caption="64px"
          size="xxsmall"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box textAlign="center">
        <Heading id="ExtraSmall" level="four" text="xsmall" />
        <Image
          alt="Alt text"
          caption="96px"
          size="xsmall"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box textAlign="center">
        <Heading id="Small" level="four" text="small" />
        <Image
          alt="Alt text"
          caption="165px"
          size="small"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box textAlign="center">
        <Heading id="Medium" level="four" text="medium" />
        <Image
          alt="Alt text"
          caption="225px"
          size="medium"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box textAlign="center">
        <Heading id="Large" level="four" text="large" />
        <Image
          alt="Alt text"
          caption="360px"
          size="large"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box textAlign="center" width="100%">
        <Heading id="Default" level="four" text="default" />
        <Image alt="Alt text" caption="100%" src="//placekitten.com/400/300" />
      </Box>
    </VStack>
  ),
};

const imageBlockStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "360px",
  textalign: "center",
  width: "100%",
};
export const AspectRatios: Story = {
  render: () => (
    <VStack spacing="l">
      <Box style={imageBlockStyles}>
        <Heading id="fourbythree" level="four" text="fourByThree" />
        <Image
          alt="Alt text"
          aspectRatio="fourByThree"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="onebytwo" level="four" text="oneByTwo" />
        <Image
          alt="Alt text"
          aspectRatio="oneByTwo"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="original" level="four" text="original" />
        <Image
          alt="Alt text"
          aspectRatio="original"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="sixteenbynine" level="four" text="sixteenByNine" />
        <Image
          alt="Alt text"
          aspectRatio="sixteenByNine"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="square" level="four" text="square" />
        <Image
          alt="Alt text"
          aspectRatio="square"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebyfour" level="four" text="threeByFour" />
        <Image
          alt="Alt text"
          aspectRatio="threeByFour"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebytwo" level="four" text="threeByTwo" />
        <Image
          alt="Alt text"
          aspectRatio="threeByTwo"
          src="//placekitten.com/400/300"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="twobyone" level="four" text="twoByOne" />
        <Image
          alt="Alt text"
          aspectRatio="twoByOne"
          src="//placekitten.com/400/300"
        />
      </Box>
    </VStack>
  ),
};
export const Types: Story = {
  render: () => (
    <VStack spacing="l">
      <Box style={imageBlockStyles}>
        <Heading id="default" level="four" text="default" />
        <Image
          alt="Alt text"
          aspectRatio="square"
          imageType="default"
          src="//placekitten.com/400/400"
        />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="circle" level="four" text="circle" />
        <Image
          alt="Alt text"
          aspectRatio="square"
          imageType="circle"
          src="//placekitten.com/400/400"
        />
      </Box>
    </VStack>
  ),
};
export const HTMLAttributes: Story = {
  render: () => (
    <VStack align="start" spacing="l">
      <Box>
        <Heading
          id="withOnLoad"
          level="four"
          text="Image with `onLoad` function"
        />
        <Image
          alt="Alt text"
          src="//placekitten.com/400/400"
          onLoad={({ target }: any) => {
            console.log("Image 1 loaded and `onLoad` called.");
            console.log(
              "Image 1 dimensions:",
              target.offsetHeight,
              target.offsetWidth
            );
          }}
        />
      </Box>
      <Box>
        <Heading
          id="withOnLoad"
          level="four"
          text="Image with `onError` function"
        />
        <Image
          alt="Broken image with bad url"
          src="//placekitten.com/400/400"
          onError={() =>
            console.warn("Image 2 error! Called through `onError`.")
          }
        />
      </Box>
    </VStack>
  ),
};

export const LazyLoading: Story = {
  render: () => (
    <SimpleGrid columns={1}>
      <Image alt="Alt text" isLazy src="//placekitten.com/540/420" />
      <Image alt="Alt text" isLazy src="//placekitten.com/500/400" />
      <Image alt="Alt text" isLazy src="//placekitten.com/460/460" />
      <Image alt="Alt text" isLazy src="//placekitten.com/420/490" />
      <Image alt="Alt text" isLazy src="//placekitten.com/200/120" />
      <Image alt="Alt text" isLazy src="//placekitten.com/640/340" />
      <Image alt="Alt text" isLazy src="//placekitten.com/460/480" />
      <Image alt="Alt text" isLazy src="//placekitten.com/100/200" />
      <Image alt="Alt text" isLazy src="//placekitten.com/400/400" />
      <Image alt="Alt text" isLazy src="//placekitten.com/250/360" />
    </SimpleGrid>
  ),
};
