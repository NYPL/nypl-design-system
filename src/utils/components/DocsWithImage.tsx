import { Box } from "@chakra-ui/react";
import Image, {
  ImageProps as InitialImageProps,
} from "../../components/Image/Image";
import { exampleWrapperStyles } from "../utils";

export type ImageProps = Partial<
  Pick<InitialImageProps, "alt" | "caption" | "src">
>;

export interface DocsWithImageProps {
  /** Docs to show with imahe */
  docs: string | JSX.Element;
  /** Props for image */
  imageProps: ImageProps;
}

export const DocsWithImage = (props: DocsWithImageProps) => {
  const { docs, imageProps } = props;

  return (
    <Box
      display={{ base: "block", md: "grid" }}
      gridTemplateColumns="2fr 1fr"
      gap="l"
    >
      <Box>{docs}</Box>
      <Image
        alt={imageProps.alt}
        border="1px solid var(--nypl-colors-ui-border-default)"
        caption={imageProps.caption}
        src={imageProps.src}
        {...exampleWrapperStyles}
      />
    </Box>
  );
};

export default DocsWithImage;
