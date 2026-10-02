import { Box, BoxProps, ChakraProps, useStyleConfig } from "@chakra-ui/react";
import { screenreaderOnly } from "../../theme/components/globalMixins";
import { Icon, IconNames } from "../Icons/Icon";
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

export interface PlaceholderImageProps
  extends Pick<BoxProps, keyof ChakraProps> {
  /** The aspect ratio of the placeholder image. Defaults to "square". */
  aspectRatio?: ImageRatios;
  /** The title of the content being represented by the placeholder image.
   * Used for accessibility purposes. */
  contentTitle?: string;
  /** The type of content being represented by the placeholder image. It determines
   * which icon is displayed. Defaults to "miscellaneous". */
  contentType?: ContentTypes;
}

const contentTypeIconNames = {
  audio: "contentTypeAudio",
  book: "contentTypeBook",
  ebook: "contentTypeEBook",
  event: "contentTypeEvent",
  image: "contentTypeImage",
  miscellaneous: "contentTypeMisc",
  video: "contentTypeVideo",
} as const;

const contentIcon = (contentType: ContentTypes = "miscellaneous") => (
  <Icon
    name={contentTypeIconNames[contentType] as IconNames}
    size="large"
    title={`${contentType} content icon`}
  />
);

const PlaceholderImage = (props: PlaceholderImageProps) => {
  const {
    aspectRatio = "square",
    contentTitle,
    contentType = "miscellaneous",
    ...rest
  } = props;

  const styles = useStyleConfig("PlaceholderImage", { aspectRatio });

  const contentIconElement = contentIcon(contentType);

  return (
    <Box as="figure" __css={styles} {...rest}>
      {contentIconElement}
      <Box as="figcaption">
        Preview not available
        <Box as="span" sx={screenreaderOnly()}>
          {contentTitle
            ? ` for ${contentTitle}`
            : ` for this ${contentType} content`}
        </Box>
      </Box>
    </Box>
  );
};
export default PlaceholderImage;
