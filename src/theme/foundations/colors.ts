import { Colors } from "@chakra-ui/react";

/**
 * All colors can be found in Storybook:
 *   https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/style-guide-colors--page
 *
 * All UI colors can be found in Figma:
 *   https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=47083%3A27674
 *
 * All Brand colors can be found in Figma:
 *   https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=15454%3A47007
 *
 * At the end of this file, there are objects that extend Chakra's default
 * color shade palette for individual colors. WE DO NOT RECOMMEND to use them
 * and only recommend to use the colors defined by the Design System such as the
 * following "ui", "brand", and "section" colors below.
 */

// Reusable variables:
const grayLightCool = "#E9E9E9";
const grayxxLightCool = "#FAFAFA";
const grayMedium = "#BDBDBD";
const brandPrimary = "#C60917";
const brandSecondary = "#760000";
const brandObj = {
  primary: brandPrimary,
  secondary: brandSecondary,
};

const colors: Colors = {
  transparent: "transparent",

  // ui fills
  ui: {
    black: "#000",
    white: "#fff",
    /// State and link utilities
    disabled: {
      primary: grayLightCool,
      secondary: grayxxLightCool,
    },
    error: {
      primary: "#97272C",
      secondary: "#6F0106",
    },
    focus: "#4181F1",
    link: {
      primary: "#0576D3",
      secondary: "#004B98",
    },
    status: {
      primary: "#F9E08E",
      secondary: "#FBE7E1",
    },
    success: {
      primary: "#077719",
      secondary: "#095212",
    },
    test: "#FF6347",
    warning: {
      primary: "#F0974E",
      secondary: "#EC7B1F",
    },
    // Grayscale
    gray: {
      xdark: "#424242",
      dark: "#616161",
      medium: grayMedium,
      "light-cool": grayLightCool,
      "light-warm": "#EFEDEB",
      "x-light-cool": "#F5F5F5",
      "x-light-warm": "#F8F8F7",
      "xx-light-cool": grayxxLightCool,
    },
  },

  /** Brand fills are the NYPL primary and secondary colors. */
  brand: brandObj,

  /** Brand fills for sections on NYPL pages. */
  section: {
    /** Blogs is used for the Blogs section. */
    blogs: {
      primary: grayLightCool,
      secondary: grayMedium,
    },

    /** Books and More is used for the Catalog, Staff Picks, Recommendations,
     * New Arrivals, and E-Book Central. */
    "books-and-more": brandObj,

    /** Education is used for the Education section front and associated
     * sub-sections. */
    education: {
      primary: "#1D62E6",
      secondary: "#2540A4",
    },

    /** Locations is used for Location Finder and all branch pages with
     * the exceptions of some research libraries. */
    locations: brandObj,

    /** Research is used for the Research Catalog and SCC. */
    research: {
      primary: "#00838a",
      secondary: "#006166",
    },

    /** Research libraries with specific brand colors to adhere to. */
    "research-library": {
      lpa: "#005d53",
      schomburg: "#a03e31",
      schwartzman: brandSecondary,
    },

    /** What's On is used for Exhibitions & Events. */
    "whats-on": {
      primary: "#242424",
      secondary: "#000000",
    },
  },

  /**
   * The following color scales are useful for color edge cases where a
   * distinct named ui or brand color doesn't quite work. These are used by
   * Chakra and have been generated through https://themera.vercel.app/.
   * While these colors are available, WE DO NOT RECOMMEND using them. Stick
   * with the utility colors declared above.
   * @Note If you do need to use a color variant, please contant the DS team.
   */

  /** based on ui.gray.medium = #DBDBDB */
  gray: {
    50: "#F2F2F2",
    100: "#DBDBDB",
    200: "#C4C4C4",
    300: "#ADADAD",
    400: "#969696",
    500: "#808080",
    600: "#666666",
    700: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A",
  },
  /** based on ui.brand.primary = #C60917 */
  red: {
    50: "#FEE7E8",
    100: "#FCBBC0",
    200: "#FA8F97",
    300: "#F8636E",
    400: "#F63745",
    500: "#F40B1C",
    600: "#C30917",
    700: "#920711",
    800: "#62040B",
    900: "#310206",
  },
  /** based on ui.warning.secondary = #F0974E */
  orange: {
    50: "#FDF1E7",
    100: "#F9D8BD",
    200: "#F6BF93",
    300: "#F2A769",
    400: "#EF8E3E",
    500: "#EB7514",
    600: "#BC5E10",
    700: "#8D460C",
    800: "#5E2F08",
    900: "#2F1704",
  },
  /** based on ui.status.primary = #F9E08E */
  yellow: {
    50: "#FEF8E7",
    100: "#FBECBB",
    200: "#F9E090",
    300: "#F7D464",
    400: "#F4C938",
    500: "#F2BD0D",
    600: "#C2970A",
    700: "#917108",
    800: "#614B05",
    900: "#302603",
  },
  /** based on ui.success.primary = #077719 */
  green: {
    50: "#E7FEEB",
    100: "#BCFBC6",
    200: "#90F8A1",
    300: "#65F67C",
    400: "#3AF357",
    500: "#0EF133",
    600: "#0BC128",
    700: "#08911E",
    800: "#066014",
    900: "#03300A",
  },
  /** based on ui.link.primary = #0576D3 */
  blue: {
    50: "#E6F3FE",
    100: "#B9DFFD",
    200: "#8CCAFC",
    300: "#60B5FB",
    400: "#33A0FA",
    500: "#068BF9",
    600: "#056FC7",
    700: "#045495",
    800: "#023864",
    900: "#011C32",
  },
};

export default colors;
