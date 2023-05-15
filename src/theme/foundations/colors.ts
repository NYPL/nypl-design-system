import { Colors } from "@chakra-ui/react";
import { hexToRGB } from "../../utils/utils";

/**
 * All colors can be found in Storybook:
 *   https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/style-guide-colors--page
 *
 * All UI Fills colors can be found in Figma:
 *   https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=47083%3A27674
 *
 * All Brand Fills colors can be found in Figma:
 *   https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=15454%3A47007
 *
 * All Dark Mode UI Fills colors can be found in Figma:
 *   https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=61991%3A45315
 *
 * At the end of this file, there are objects that extend Chakra's default
 * color shade palette for individual colors. WE DO NOT RECOMMEND to use them
 * and only recommend to use the colors defined by the Design System such as the
 * following "ui", "brand", and "section" colors below.
 */

// Reusable variables:
const black = "#000";
const white = "#fff";
const grayxxxxDark = "#191919";
const grayxxxDark = "#252525";
const grayxxDark = "#2E2E2E";
const grayxDark = "#424242";
const grayDark = "#616161";
const graySemiDark = "#8D8D8D";
const grayMedium = "#BDBDBD";
const graySemiMedium = "#D9D9D9";
const grayLightCool = "#E9E9E9";
const grayxLightCool = "#F5F5F5";
const grayxxLightCool = "#FAFAFA";
const linkPrimary = "#0069BF";
const linkSecondary = "#004B98";
const brandPrimary = "#C60917";
const brandSecondary = "#760000";
const blogsPrimary = grayLightCool;
const blogsSecondary = grayMedium;
const educationPrimary = "#1D62E6";
const educationSecondary = "#2540A4";
const researchPrimary = "#00838A";
const researchSecondary = "#006166";
const researchLibraryLpa = "#005D53";
const researchLibrarySchomburg = "#A03E31";
const researchLibrarySchwartzman = brandSecondary;
const whatsOnPrimary = "#242424";
const whatsOnSecondary = black;

const brandObj = {
  light: {
    primary: brandPrimary,
    secondary: brandSecondary,
  },
  dark: {
    primary: hexToRGB(brandPrimary, 0.2),
    secondary: hexToRGB(brandSecondary, 0.2),
  },
};

const blogsObj = {
  light: {
    primary: blogsPrimary,
    secondary: blogsSecondary,
  },
  dark: {
    primary: hexToRGB(blogsPrimary, 0.2),
    secondary: hexToRGB(blogsSecondary, 0.2),
  },
};

const booksAndMoreObj = {
  light: brandObj.light,
  dark: brandObj.dark,
};

const educationObj = {
  light: {
    primary: educationPrimary,
    secondary: educationSecondary,
  },
  dark: {
    primary: hexToRGB(educationPrimary, 0.2),
    secondary: hexToRGB(educationSecondary, 0.2),
  },
};

const locationsObj = {
  light: brandObj.light,
  dark: brandObj.dark,
};

const researchObj = {
  light: {
    primary: researchPrimary,
    secondary: researchSecondary,
  },
  dark: {
    primary: hexToRGB(researchPrimary, 0.2),
    secondary: hexToRGB(researchSecondary, 0.2),
  },
};

const researchLibraryObj = {
  light: {
    lpa: researchLibraryLpa,
    schomburg: researchLibrarySchomburg,
    schwatzman: researchLibrarySchwartzman,
  },
  dark: {
    lpa: hexToRGB(researchLibraryLpa, 0.2),
    schomburg: hexToRGB(researchLibrarySchomburg, 0.2),
    schwatzman: hexToRGB(researchLibrarySchwartzman, 0.2),
  },
};

const whatsOnObj = {
  light: {
    primary: whatsOnPrimary,
    secondary: whatsOnSecondary,
  },
  dark: {
    primary: hexToRGB(grayLightCool, 0.2),
    secondary: hexToRGB(white, 0.05),
  },
};

const colors: Colors = {
  transparent: "transparent",

  // ui fills
  ui: {
    black,
    white,
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
      primary: linkPrimary,
      "primary-05": hexToRGB(linkPrimary, 0.05),
      secondary: linkSecondary,
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
    // Semantic colors
    bg: {
      default: grayxLightCool,
      hover: grayLightCool,
      active: grayMedium,
    },
    border: {
      default: grayMedium,
      hover: grayDark,
    },
    typography: {
      heading: black,
      body: black,
      inverse: {
        heading: white,
        body: white,
      },
    },
    // Grayscale
    gray: {
      "xxxx-dark": grayxxxxDark,
      "xxx-dark": grayxxxDark,
      "xx-dark": grayxxDark,
      "x-dark": grayxDark,
      dark: grayDark,
      "semi-dark": graySemiDark,
      medium: grayMedium,
      "semi-medium": graySemiMedium,
      "light-cool": grayLightCool,
      "x-light-cool": grayxLightCool,
      "xx-light-cool": grayxxLightCool,
      // Gray Alts
      "light-warm": "#EFEDEB",
      "x-light-warm": "#F8F8F7",
    },
  },

  // dark mode fills
  dark: {
    brand: brandObj.dark,
    section: {
      blogs: blogsObj.dark,
      "books-and-more": booksAndMoreObj.dark,
      education: educationObj.dark,
      locations: locationsObj.dark,
      research: researchObj.dark,
      "research-library": researchLibraryObj.dark,
      "whats-on": whatsOnObj.dark,
    },
    ui: {
      /// State and link utilities
      disabled: {
        primary: grayDark,
        secondary: grayxDark,
      },
      error: {
        primary: "#E1767B",
        secondary: "#F08F93",
      },
      focus: "#6090E3",
      link: {
        primary: "#79B7EB",
        "primary-05": hexToRGB("#79B7EB", 0.05),
        "primary-10": hexToRGB("#79B7EB", 0.1),
        secondary: "#95CFFF",
        tertiary: "#B583E1",
      },
      status: {
        primary: "#B69C46",
        secondary: "#CB8E7C",
      },
      success: {
        primary: "#52AA60",
        secondary: "#81C88A",
      },
      test: "#592B22",
      warning: {
        primary: "#DC8034",
        secondary: "#F1A66A",
      },
      // Semantic colors
      bg: {
        page: grayxxxxDark,
        default: grayxxxDark,
        hover: grayxxDark,
        active: grayxDark,
      },
      border: {
        default: graySemiDark,
        hover: graySemiMedium,
      },
      typography: {
        heading: grayLightCool,
        body: grayMedium,
        inverse: {
          heading: grayxxxDark,
          body: grayxxxDark,
        },
      },
    },
  },

  /** Brand fills are the NYPL primary and secondary colors. */
  brand: brandObj.light,

  /** Brand fills for sections on NYPL pages. */
  section: {
    /** Blogs is used for the Blogs section. */
    blogs: blogsObj.light,

    /** Books and More is used for the Catalog, Staff Picks, Recommendations,
     * New Arrivals, and E-Book Central. */
    "books-and-more": booksAndMoreObj.light,

    /** Education is used for the Education section front and associated
     * sub-sections. */
    education: educationObj.light,

    /** Locations is used for Location Finder and all branch pages with
     * the exceptions of some research libraries. */
    locations: locationsObj.light,

    /** Research is used for the Research Catalog and SCC. */
    research: researchObj.light,

    /** Research libraries with specific brand colors to adhere to. */
    "research-library": researchLibraryObj.light,

    /** What's On is used for Exhibitions & Events. */
    "whats-on": whatsOnObj.light,
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
  /** based on ui.link.primary = #0069BF */
  blue: {
    50: "#E6F0F9",
    100: "#ACCEEA",
    200: "#73ADDC",
    300: "#398BCD",
    400: "#0069BF",
    500: "#0058A0",
    600: "#004782",
    700: "#003763",
    800: "#002645",
    900: "#73ADDC",
  },
};

export default colors;
