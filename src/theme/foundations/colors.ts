import { Colors } from "@chakra-ui/react";

// Colors taken from "../../styles/01-colors/*.scss"
const colors: Colors = {
  transparent: "transparent",

  // ui fills
  ui: {
    black: "#000",
    white: "#fff",
    focus: "#4181F1",
    link: {
      primary: "#0576D3",
      secondary: "#004B98",
    },
    success: {
      primary: "#077719",
      secondary: "#095212",
    },
    warning: {
      primary: "#F0974E",
      secondary: "#EC7B1F",
    },
    status: {
      primary: "#F9E08E",
      secondary: "#FBE7E1",
    },
    error: "#97272C",
    disabled: {
      primary: "#E0E0E0",
      secondary: "#FAFAFA",
    },
    test: "#FF6347",
    gray: {
      xdark: "#424242",
      dark: "#616161",
      medium: "#BDBDBD",
      light: "#E0E0E0",
      "warm-light": "#EFEDEB",
      xlight: "#F5F5F5",
      "warm-xlight": "#F8F8F7",
      xxlight: "#FAFAFA",
    },
  },

  // brand fills
  brand: {
    primary: "#C60917",
    secondary: "#760000",
  },

  /**
   * The following color scales are useful for color edge cases
   * where a distinct named ui or brand color doesn't quite work.
   */
  // based on ui/gray/medium
  gray: {
    100: "#DBDBDB",
  },
  // based on ui/brand/primary
  red: {
    100: "#c60917",
  },
  // based on ui/warning/secondary
  orange: {
    100: "#ec7b1f",
  },
  // based on ui/status/primary
  yellow: {
    100: "#f9e08e",
  },
  // based on ui/success/primary
  green: {
    100: "#077719",
  },
  // based on ui/link/primary
  blue: {
    100: "#0576d3",
  },
};

export default colors;
