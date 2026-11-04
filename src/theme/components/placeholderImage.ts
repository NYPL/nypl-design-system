import { defineStyleConfig } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/system";
import type { StyleFunctionProps } from "@chakra-ui/system";

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

interface PlaceholderImageBaseStyle extends StyleFunctionProps {
  aspectRatio: keyof typeof aspectRatioStyleValue;
}

const baseStyle = defineStyle(({ aspectRatio }: PlaceholderImageBaseStyle) => ({
  // Base styles
  alignItems: "center",
  background: "ui.bg.default",
  display: "flex",
  flexDirection: "column",
  gap: "xs",
  justifyContent: "center",
  overflow: "hidden",
  aspectRatio: aspectRatioStyleValue[aspectRatio],
  // Text styles
  figcaption: {
    color: "ui.gray.dark",
    fontSize: "desktop.label.label2",
    // Visually hide the caption below the 200px container breakpoint while
    // keeping it exposed to assistive technology.
    clip: "rect(1px, 1px, 1px, 1px)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
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
      clip: "auto",
      height: "auto",
      overflow: "visible",
      position: "static",
      whiteSpace: "normal",
      width: "auto",
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
}));

const PlaceholderImage = defineStyleConfig({
  baseStyle,
});

export default PlaceholderImage;
