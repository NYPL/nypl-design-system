import { Dict } from "../types";

type Typography = {
  fonts: Dict;
  fontSizes: Dict;
  fontWeights: Dict;
};

const typography: Typography = {
  // Values from "src/styles/02-typography/_typeface.css"
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    heading: "-apple-system, BlinkMacSystemFont, system-ui, sans-seri",
  },
  // Values from "src/styles/02-typography/_type-scale.css"
  fontSizes: {
    "-3": "0.625rem",
    "-2": "0.75rem",
    "-1": "0.875rem",
    "0": "1rem",
    "1": "1.125rem",
    "2": "1.375rem",
    "3": "1.75rem",
    "4": "2.25rem",
    // name based tokens
    breadcrumbs: {
      default: "0.875rem",
    },
    button: {
      default: "0.875rem",
    },
    heading: {
      primary: "2.25rem",
      secondary: "1.75rem",
      tertiary: "1.375rem",
      callout: "1.125rem",
    },
    helper: {
      default: "0.875rem",
    },
    label: {
      default: "0.875rem",
      secondary: "0.75rem",
    },
    text: {
      default: "1rem",
      caption: "0.875rem",
      tag: "0.75rem",
      mini: "0.625rem",
    },
  },
  // Values from "src/styles/02-typography/_type-weight.css"
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export default typography;
