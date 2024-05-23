import { Colors } from "@chakra-ui/react";
import { hexToRGB } from "../../utils/utils";

/**
 * All colors can be found in Storybook:
 *   https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/docs/style-guide-colors--docs
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

/** Reusable variables: */
// grayscale
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
// semantic
const errorPrimary = "#97272C";
const errorSecondary = "#6F0106";
const linkPrimary = "#0069BF";
const linkSecondary = "#004B98";
const linkTertiary = "#551A8B";
const statusPrimary = "#F9E08E";
const statusSecondary = "#FBE7E1";
const successPrimary = "#077719";
const successSecondary = "#095212";
const warningPrimary = "#F88820";
const warningSecondary = "#E36D17";
const warningTertiary = "#CD4D05";
const errorPrimaryDark = "#E1767B";
const errorSecondaryDark = "#F08F93";
const linkPrimaryDark = "#79B7EB";
const linkSecondaryDark = "#95CFFF";
const linkTertiaryDark = "#B583E1";
const statusPrimaryDark = "#B69C46";
const statusSecondaryDark = "#CB8E7C";
const successPrimaryDark = "#52AA60";
const successSecondaryDark = "#81C88A";
const warningPrimaryDark = "#DC8034";
const warningSecondaryDark = "#EC7B1F";
// brand
const brandPrimary = "#C60917";
const brandSecondary = "#760000";
const blogsPrimary = grayLightCool;
const blogsSecondary = grayMedium;
const connectPrimary = "#737373";
const connectSecondary = "#565656";
const educationPrimary = "#1D62E6";
const educationSecondary = "#2540A4";
const researchPrimary = "#00838A";
const researchSecondary = "#006166";
const researchLibraryLpa = "#005D53";
const researchLibrarySchomburg = "#A03E31";
const researchLibrarySchwarzman = brandSecondary;
const whatsOnPrimary = "#242424";
const whatsOnSecondary = black;

const brandObj = {
  light: {
    primary: brandPrimary,
    "primary-05": hexToRGB(brandPrimary, 0.05),
    "primary-10": hexToRGB(brandPrimary, 0.1),
    secondary: brandSecondary,
  },
  dark: {
    primary: hexToRGB(brandPrimary, 0.2),
    "primary-05": hexToRGB(brandPrimary, 0.05),
    "primary-10": hexToRGB(brandPrimary, 0.1),
    secondary: hexToRGB(brandSecondary, 0.2),
  },
};

const blogsObj = {
  light: {
    primary: blogsPrimary,
    "primary-05": hexToRGB(blogsPrimary, 0.05),
    "primary-10": hexToRGB(blogsPrimary, 0.1),
    secondary: blogsSecondary,
  },
  dark: {
    primary: hexToRGB(blogsPrimary, 0.2),
    "primary-05": hexToRGB(blogsPrimary, 0.05),
    "primary-10": hexToRGB(blogsPrimary, 0.1),
    secondary: hexToRGB(blogsSecondary, 0.2),
  },
};

const booksAndMoreObj = {
  light: brandObj.light,
  dark: brandObj.dark,
};

const connectObj = {
  light: {
    primary: connectPrimary,
    "primary-05": hexToRGB(connectPrimary, 0.05),
    "primary-10": hexToRGB(connectPrimary, 0.1),
    secondary: connectSecondary,
  },
  dark: {
    primary: hexToRGB(connectPrimary, 0.4),
    "primary-05": hexToRGB(connectPrimary, 0.05),
    "primary-10": hexToRGB(connectPrimary, 0.1),
    secondary: hexToRGB(connectSecondary, 0.4),
  },
};

const educationObj = {
  light: {
    primary: educationPrimary,
    "primary-05": hexToRGB(educationPrimary, 0.05),
    "primary-10": hexToRGB(educationPrimary, 0.1),
    secondary: educationSecondary,
  },
  dark: {
    primary: hexToRGB(educationPrimary, 0.2),
    "primary-05": hexToRGB(educationPrimary, 0.05),
    "primary-10": hexToRGB(educationPrimary, 0.1),
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
    "primary-05": hexToRGB(researchPrimary, 0.05),
    "primary-10": hexToRGB(researchPrimary, 0.1),
    secondary: researchSecondary,
    "secondary-05": hexToRGB(researchSecondary, 0.05),
    "secondary-10": hexToRGB(researchSecondary, 0.1),
  },
  dark: {
    primary: hexToRGB(researchPrimary, 0.2),
    "primary-05": hexToRGB(researchPrimary, 0.05),
    "primary-10": hexToRGB(researchPrimary, 0.1),
    secondary: hexToRGB(researchSecondary, 0.2),
    "secondary-05": hexToRGB(researchSecondary, 0.05),
    "secondary-10": hexToRGB(researchSecondary, 0.1),
  },
};

const researchLibraryObj = {
  light: {
    lpa: researchLibraryLpa,
    "lpa-05": hexToRGB(researchLibraryLpa, 0.05),
    "lpa-10": hexToRGB(researchLibraryLpa, 0.1),
    schomburg: researchLibrarySchomburg,
    "schomburg-05": hexToRGB(researchLibrarySchomburg, 0.05),
    "schomburg-10": hexToRGB(researchLibrarySchomburg, 0.1),
    schwarzman: researchLibrarySchwarzman,
    "schwarzman-05": hexToRGB(researchLibrarySchwarzman, 0.05),
    "schwarzman-10": hexToRGB(researchLibrarySchwarzman, 0.1),
  },
  dark: {
    lpa: hexToRGB(researchLibraryLpa, 0.2),
    "lpa-05": hexToRGB(researchLibraryLpa, 0.05),
    "lpa-10": hexToRGB(researchLibraryLpa, 0.1),
    schomburg: hexToRGB(researchLibrarySchomburg, 0.2),
    "schomburg-05": hexToRGB(researchLibrarySchomburg, 0.05),
    "schomburg-10": hexToRGB(researchLibrarySchomburg, 0.1),
    schwarzman: hexToRGB(researchLibrarySchwarzman, 0.2),
    "schwarzman-05": hexToRGB(researchLibrarySchwarzman, 0.05),
    "schwarzman-10": hexToRGB(researchLibrarySchwarzman, 0.1),
  },
};

const whatsOnObj = {
  light: {
    primary: whatsOnPrimary,
    "primary-05": hexToRGB(whatsOnPrimary, 0.05),
    "primary-10": hexToRGB(whatsOnPrimary, 0.1),
    secondary: whatsOnSecondary,
  },
  dark: {
    primary: hexToRGB(grayLightCool, 0.2),
    "primary-05": hexToRGB(grayLightCool, 0.05),
    "primary-10": hexToRGB(grayLightCool, 0.1),
    secondary: hexToRGB(white, 0.05),
  },
};

const colors: Colors = {
  transparent: "transparent",

  // ui fills
  ui: {
    black,
    white,
    // State and link utilities
    disabled: {
      primary: grayLightCool,
      secondary: grayxxLightCool,
    },
    error: {
      primary: errorPrimary,
      "primary-05": hexToRGB(errorPrimary, 0.05),
      "primary-10": hexToRGB(errorPrimary, 0.1),
      secondary: errorSecondary,
    },
    focus: "#4181F1",
    link: {
      primary: linkPrimary,
      "primary-05": hexToRGB(linkPrimary, 0.05),
      "primary-10": hexToRGB(linkPrimary, 0.1),
      secondary: linkSecondary,
      tertiary: linkTertiary,
      "tertiary-05": hexToRGB(linkTertiary, 0.05),
      "tertiary-10": hexToRGB(linkTertiary, 0.1),
    },
    status: {
      primary: statusPrimary,
      "primary-05": hexToRGB(statusPrimary, 0.05),
      "primary-10": hexToRGB(statusPrimary, 0.1),
      secondary: statusSecondary,
    },
    success: {
      primary: successPrimary,
      "primary-05": hexToRGB(successPrimary, 0.05),
      "primary-10": hexToRGB(successPrimary, 0.1),
      secondary: successSecondary,
    },
    test: "#FF6347",
    warning: {
      primary: warningPrimary,
      "primary-05": hexToRGB(warningPrimary, 0.05),
      "primary-10": hexToRGB(warningPrimary, 0.1),
      secondary: warningSecondary,
      tertiary: warningTertiary,
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
      heading: grayxxxxDark,
      body: grayxxDark,
      inverse: {
        heading: grayLightCool,
        body: grayMedium,
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
      connect: connectObj.dark,
      education: educationObj.dark,
      locations: locationsObj.dark,
      research: researchObj.dark,
      "research-library": researchLibraryObj.dark,
      "whats-on": whatsOnObj.dark,
    },
    ui: {
      // State and link utilities
      disabled: {
        primary: grayDark,
        secondary: grayxDark,
      },
      error: {
        primary: errorPrimaryDark,
        "primary-05": hexToRGB(errorPrimaryDark, 0.05),
        "primary-10": hexToRGB(errorPrimaryDark, 0.1),
        secondary: errorSecondaryDark,
      },
      focus: "#6090E3",
      link: {
        primary: linkPrimaryDark,
        "primary-05": hexToRGB(linkPrimaryDark, 0.05),
        "primary-10": hexToRGB(linkPrimaryDark, 0.1),
        secondary: linkSecondaryDark,
        tertiary: linkTertiaryDark,
      },
      status: {
        primary: statusPrimaryDark,
        "primary-05": hexToRGB(statusPrimaryDark, 0.05),
        "primary-10": hexToRGB(statusPrimaryDark, 0.1),
        secondary: statusSecondaryDark,
      },
      success: {
        primary: successPrimaryDark,
        "primary-05": hexToRGB(successPrimaryDark, 0.05),
        "primary-10": hexToRGB(successPrimaryDark, 0.1),
        secondary: successSecondaryDark,
      },
      test: "#592B22",
      warning: {
        primary: warningPrimaryDark,
        "primary-05": hexToRGB(warningPrimaryDark, 0.05),
        "primary-10": hexToRGB(warningPrimaryDark, 0.1),
        secondary: warningSecondaryDark,
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
          heading: grayxxxxDark,
          body: grayxxDark,
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

    /** Connect is used for the Connect and Get Help section fronts. */
    connect: connectObj.light,

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
