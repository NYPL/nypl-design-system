import { Box } from "@chakra-ui/react";

export const aspectRatiosArray = [
  "fourByOne",
  "twoByOne",
  "sixteenByNine",
  "fourByThree",
  "oneByOne",
  "square",
  "oneByTwo",
] as const;
export type AspectRatios = typeof aspectRatiosArray[number];

export interface ImageProps {
  aspectRatio?: AspectRatios;
  backgroundColor?: string;
  border?: string;
  isCropped?: boolean;
  src?: string;
}

export const ImageExample = (props: ImageProps) => {
  const {
    aspectRatio = "square",
    backgroundColor = "var(--nypl-colors-ui-bg-default)",
    border = "1px solid var(--nypl-colors-ui-border-default)",
    isCropped = false,
    src = "/placeholder-photo.png",
  } = props;
  const aspectRatioValues = {
    fourByOne: "25%",
    twoByOne: "50%",
    sixteenByNine: "56.25%",
    fourByThree: "75%",
    oneByOne: "100%",
    square: "100%",
    oneByTwo: "200%",
  };
  return (
    <Box>
      <Box
        style={{
          background: backgroundColor,
          border: border,
          position: "relative",
          paddingBottom: aspectRatioValues[aspectRatio],
        }}
      >
        <Box
          as="img"
          alt={aspectRatio}
          src={src}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            objectFit: isCropped ? "cover" : "contain",
            color: "transparent",
          }}
        />
      </Box>
    </Box>
  );
};

export default ImageExample;
