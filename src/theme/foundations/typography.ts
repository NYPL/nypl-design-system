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
