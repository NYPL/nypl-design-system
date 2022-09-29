import { Dict } from "../types";

type Typography = {
  fonts: Dict;
  fontSizes: Dict;
  fontWeights: Dict;
};

const fontSizeValues = {
  "-3": "0.625rem",
  "-2": "0.75rem",
  "-1": "0.875rem",
  "0": "1rem",
  "1": "1.125rem",
  "2": "1.375rem",
  "3": "1.75rem",
  "4": "2.25rem",
};

const fontWeightValues = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const typography: Typography = {
  // Values from "src/styles/02-typography/_typeface.css"
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },
  // Values from "src/styles/02-typography/_type-scale.css"
  fontSizes: {
    // generic tokens
    "-3": fontSizeValues["-3"],
    "-2": fontSizeValues["-2"],
    "-1": fontSizeValues["-1"],
    "0": fontSizeValues["0"],
    "1": fontSizeValues["1"],
    "2": fontSizeValues["2"],
    "3": fontSizeValues["3"],
    "4": fontSizeValues["4"],
    // semantic tokens
    breadcrumbs: {
      default: fontSizeValues["-1"],
    },
    button: {
      small: fontSizeValues["-2"],
      default: fontSizeValues["-1"],
      large: fontSizeValues["0"],
    },
    heading: {
      primary: fontSizeValues["4"],
      secondary: fontSizeValues["3"],
      tertiary: fontSizeValues["2"],
      callout: fontSizeValues["1"],
    },
    helper: {
      default: fontSizeValues["-2"],
    },
    label: {
      default: fontSizeValues["-1"],
      secondary: fontSizeValues["-2"],
    },
    text: {
      default: fontSizeValues["0"],
      caption: fontSizeValues["-1"],
      tag: fontSizeValues["-2"],
      mini: fontSizeValues["-3"],
    },
  },
  // Values from "src/styles/02-typography/_type-weight.css"
  fontWeights: {
    // generic tokens
    light: fontWeightValues["light"],
    regular: fontWeightValues["regular"],
    medium: fontWeightValues["medium"],
    bold: fontWeightValues["bold"],
    // semantic tokens
    breadcrumbs: {
      default: fontWeightValues["regular"],
      lastChild: fontWeightValues["bold"],
    },
    button: {
      default: fontWeightValues["regular"],
    },
    heading: {
      primary: fontWeightValues["light"],
      secondary: fontWeightValues["medium"],
      tertiary: fontWeightValues["medium"],
      callout: fontWeightValues["medium"],
    },
    helper: {
      default: fontWeightValues["light"],
    },
    label: {
      default: fontWeightValues["medium"],
      secondary: fontWeightValues["regular"],
    },
    text: {
      default: fontWeightValues["light"],
      caption: fontWeightValues["light"],
      tag: fontWeightValues["regular"],
      mini: fontWeightValues["regular"],
    },
  },
};

export default typography;
