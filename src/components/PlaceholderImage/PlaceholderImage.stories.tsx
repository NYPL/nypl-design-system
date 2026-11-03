import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import { imageRatiosArray } from "../Image/Image";
import PlaceholderImage, { contentTypesArray } from "./PlaceholderImage";
import Heading from "../Heading/Heading";
import { responsiveSpacing } from "../../theme/components/global";

const meta: Meta<typeof PlaceholderImage> = {
  title: "Components/Media & Icons/PlaceholderImage",
  component: PlaceholderImage,
  argTypes: {
    aspectRatio: {
      control: { type: "select" },
      options: imageRatiosArray,
      table: { defaultValue: { summary: "square" } },
    },
    contentTitle: { control: { type: "text" } },
    contentType: {
      control: { type: "select" },
      options: contentTypesArray,
      table: { defaultValue: { summary: "miscellaneous" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlaceholderImage>;

export const WithControls: Story = {
  args: {
    aspectRatio: "twoByOne",
    contentTitle: "Example Title",
    contentType: "miscellaneous",
  },
  render: (args) => (
    <Box display="flex" justifyContent="center">
      <PlaceholderImage {...args} width="100%" />
    </Box>
  ),
};

const renderPlaceholderImageGrid = (
  columns: number,
  type?: typeof contentTypesArray[number]
) => (
  <Box>
    {type && (
      <Heading level="h4" size="heading6" mb="s">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Heading>
    )}
    <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      gap={responsiveSpacing.gridGap}
    >
      {Array.from({ length: columns }).map((_, index) => (
        <GridItem key={index}>
          <PlaceholderImage
            aspectRatio="twoByOne"
            contentTitle={`Example ${type} ${index + 1}`}
            contentType={type}
          />
        </GridItem>
      ))}
    </Grid>
  </Box>
);

export const ContentTypes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap="grid.l">
      {renderPlaceholderImageGrid(3, "audio")}
      {renderPlaceholderImageGrid(3, "book")}
      {renderPlaceholderImageGrid(3, "ebook")}
      {renderPlaceholderImageGrid(3, "event")}
      {renderPlaceholderImageGrid(3, "image")}
      {renderPlaceholderImageGrid(3, "miscellaneous")}
      {renderPlaceholderImageGrid(3, "video")}
    </Box>
  ),
};

export const ResponsiveSizing: Story = {
  render: () => (
    <Box
      display="flex"
      flexDirection="column"
      gap={responsiveSpacing.gridGap}
      maxWidth="1024px"
    >
      {renderPlaceholderImageGrid(6)}
      {renderPlaceholderImageGrid(3)}
      {renderPlaceholderImageGrid(2)}
      {renderPlaceholderImageGrid(1)}
    </Box>
  ),
};
