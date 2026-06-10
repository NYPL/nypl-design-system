import { Box } from "@chakra-ui/react";
import Icon, { IconNames } from "../Icons/Icon";
import { ImageRatios } from "../Image/Image";

export const contentTypesArray = [
  "audio",
  "book",
  "ebook",
  "event",
  "image",
  "miscellaneous",
  "video",
] as const;
export type ContentTypes = typeof contentTypesArray[number];

export interface PlaceholderImageProps {
  aspectRatio?: ImageRatios;
  contentTitle?: string;
  contentType?: ContentTypes;
}

const contentIcon = (props: PlaceholderImageProps) => {
  const { contentType = "miscellaneous" } = props;
  const contentTypeIconNames = {
    audio: "contentTypeAudio",
    book: "contentTypeBook",
    ebook: "contentTypeEBook",
    event: "contentTypeEvent",
    image: "contentTypeImage",
    miscellaneous: "contentTypeMisc",
    video: "contentTypeVideo",
  } as const;
  return (
    <Icon
      name={contentTypeIconNames[contentType] as IconNames}
      size="large"
      title={`${contentType} content icon`}
    />
  );
};

const placeholderImageStyles = {
  // Base styles
  alignItems: "center",
  background: "ui.bg.default",
  display: "flex",
  flexDirection: "column",
  gap: "xs",
  justifyContent: "center",
  overflow: "hidden",

  // Text styles
  figcaption: {
    color: "ui.gray.dark",
    fontSize: "desktop.label.label2",
    display: "none",
  },

  // Icon styles
  svg: {
    height: "24px",
    width: "24px",
    fill: "ui.gray.medium",
  },

  // Set up container
  containerName: "image-placeholder-container",
  containerType: "inline-size",

  // Container query styles
  "@container image-placeholder-container (min-width: 200px)": {
    figcaption: {
      display: "block",
    },
    svg: {
      height: "32px",
      width: "32px",
    },
  },
  "@container image-placeholder-container (min-width: 480px)": {
    svg: {
      height: "48px",
      width: "48px",
    },
  },
  "@container image-placeholder-container (min-width: 768px)": {
    figcaption: {
      fontSize: "desktop.label.label1",
    },
    gap: "16px",
    svg: {
      height: "64px",
      width: "64px",
    },
  },
};

export const PlaceholderImage = (props: PlaceholderImageProps) => {
  const {
    aspectRatio = "square",
    contentTitle,
    contentType = "miscellaneous",
  } = props;
  const aspectRatioStyleValue = {
    fourByThree: "4 / 3",
    fourByOne: "4 / 1",
    oneByTwo: "1 / 2",
    sixteenByNine: "16 / 9",
    square: "1 / 1",
    threeByFour: "3 / 4",
    threeByTwo: "3 / 2",
    twoByOne: "2 / 1",
    twoByThree: "2 / 3",
    original: "auto",
  } as const;
  const contentIconElement = contentIcon({ contentType });
  const ariaLabel = contentTitle
    ? `Preview not available for ${contentTitle}`
    : `Preview not available for this ${contentType} content`;
  return (
    <Box
      as="figure"
      __css={{
        ...placeholderImageStyles,
        aspectRatio: aspectRatioStyleValue[aspectRatio],
      }}
    >
      {contentIconElement}
      <Box aria-label={ariaLabel} as="figcaption">
        Preview not available
      </Box>
    </Box>
  );
};
