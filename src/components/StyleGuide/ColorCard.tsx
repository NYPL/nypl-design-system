import { Box, HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import Heading from "../Heading/Heading";
import Icon, { IconColors } from "../Icons/Icon";
import Table from "../Table/Table";
import Text from "../Text/Text";
import { checkContrast } from "../../utils/colorUtils";

export const colorContrastData = {
  brand: {
    primary: {
      dataBlackColor: ["3.45", "Fail", "AA"],
      dataWhiteColor: ["6.08", "AA", "AAA"],
      textColor: "ui.white",
    },
    secondary: {
      dataBlackColor: ["1.77", "Fail", "Fail"],
      dataWhiteColor: ["11.86", "AAA", "AAA"],
      textColor: "ui.white",
    },
  },
  ui: {
    black: {
      dataBlackColor: ["1.00", "Fail", "Fail"],
      dataWhiteColor: ["21.00", "AAA", "AAA"],
      textColor: "ui.white",
    },
    gray: {
      xxxxDark: {
        dataBlackColor: checkContrast("1.19"),
        dataWhiteColor: checkContrast("17.58"),
        textColor: "ui.white",
      },
      xxxDark: {
        dataBlackColor: checkContrast("1.37"),
        dataWhiteColor: checkContrast("15.33"),
        textColor: "ui.white",
      },
      xxDark: {
        dataBlackColor: checkContrast("1.55"),
        dataWhiteColor: checkContrast("13.58"),
        textColor: "ui.white",
      },
      xDark: {
        dataBlackColor: checkContrast("2.09"),
        dataWhiteColor: checkContrast("10.05"),
        textColor: "ui.white",
      },
      dark: {
        dataBlackColor: checkContrast("3.39"),
        dataWhiteColor: checkContrast("6.19"),
        textColor: "ui.white",
      },
      semiDark: {
        dataBlackColor: checkContrast("6.33"),
        dataWhiteColor: checkContrast("3.32"),
        textColor: "ui.black",
      },
      medium: {
        dataBlackColor: checkContrast("11.18"),
        dataWhiteColor: checkContrast("1.88"),
        textColor: "ui.black",
      },
      semiMedium: {
        dataBlackColor: checkContrast("14.88"),
        dataWhiteColor: checkContrast("1.41"),
        textColor: "ui.black",
      },
      lightCool: {
        dataBlackColor: ["17.30", "AAA", "AAA"],
        dataWhiteColor: ["1.21", "Fail", "Fail"],
        textColor: "ui.black",
      },
      xLightCool: {
        dataBlackColor: ["19.26", "AAA", "AAA"],
        dataWhiteColor: ["1.09", "Fail", "Fail"],
        textColor: "ui.black",
      },
      xxLightCool: {
        dataBlackColor: ["20.12", "AAA", "AAA"],
        dataWhiteColor: ["1.04", "Fail", "Fail"],
        textColor: "ui.black",
      },
      lightWarm: {
        dataBlackColor: ["17.98", "AAA", "AAA"],
        dataWhiteColor: ["1.17", "Fail", "Fail"],
        textColor: "ui.black",
      },
      xLightWarm: {
        dataBlackColor: ["19.76", "AAA", "AAA"],
        dataWhiteColor: ["1.06", "Fail", "Fail"],
        textColor: "ui.black",
      },
    },
    white: {
      dataBlackColor: ["21.00", "AAA", "AAA"],
      dataWhiteColor: ["1.00", "Fail", "Fail"],
      textColor: "ui.black",
    },
  },
  dark: {
    ui: {
      gray: {
        xxDark: {
          dataHeadingColor: ["13.26", "AAA", "AAA"],
          dataBodyColor: ["8.57", "AAA", "AAA"],
        },
        xDark: {
          dataHeadingColor: ["8.28", "AAA", "AAA"],
          dataBodyColor: ["5.35", "AA", "AAA"],
        },
      },
    },
  },
};
export const cssVars = {
  brand: [
    {
      name: "brand.primary",
      dataBlackColor: colorContrastData.brand.primary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.primary.dataWhiteColor,
      textColor: colorContrastData.brand.primary.textColor,
    },
    {
      name: "brand.secondary",
      dataBlackColor: colorContrastData.brand.secondary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.secondary.dataWhiteColor,
      textColor: colorContrastData.brand.secondary.textColor,
    },
  ],
  blogs: [
    {
      colorSource: "ui.gray.light-cool",
      name: "section.blogs.primary",
      dataBlackColor: colorContrastData.ui.gray.lightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.lightCool.dataWhiteColor,
      textColor: colorContrastData.ui.gray.lightCool.textColor,
    },
    {
      colorSource: "ui.gray.medium",
      name: "section.blogs.secondary",
      dataBlackColor: colorContrastData.ui.gray.medium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.medium.dataWhiteColor,
      textColor: colorContrastData.ui.gray.medium.textColor,
    },
  ],
  booksAndMore: [
    {
      colorSource: "brand.primary",
      name: "section.books-and-more.primary",
      dataBlackColor: colorContrastData.brand.primary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.primary.dataWhiteColor,
      textColor: colorContrastData.brand.primary.textColor,
    },
    {
      colorSource: "brand.secondary",
      name: "section.books-and-more.secondary",
      dataBlackColor: colorContrastData.brand.secondary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.secondary.dataWhiteColor,
      textColor: colorContrastData.brand.secondary.textColor,
    },
  ],
  connect: [
    {
      name: "section.connect.primary",
      dataBlackColor: checkContrast(4.43),
      dataWhiteColor: checkContrast(4.74),
      textColor: "ui.white",
    },
    {
      name: "section.connect.secondary",
      dataBlackColor: checkContrast(2.86),
      dataWhiteColor: checkContrast(7.34),
      textColor: "ui.white",
    },
  ],
  education: [
    {
      name: "section.education.primary",
      dataBlackColor: ["3.94", "Fail", "AA"],
      dataWhiteColor: ["5.33", "AA", "AAA"],
      textColor: "ui.white",
    },
    {
      name: "section.education.secondary",
      dataBlackColor: ["2.35", "Fail", "Fail"],
      dataWhiteColor: ["8.94", "AAA", "AAA"],
      textColor: "ui.white",
    },
  ],
  locations: [
    {
      colorSource: "brand.primary",
      name: "section.locations.primary",
      dataBlackColor: colorContrastData.brand.primary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.primary.dataWhiteColor,
      textColor: colorContrastData.brand.primary.textColor,
    },
    {
      colorSource: "brand.secondary",
      name: "section.locations.secondary",
      dataBlackColor: colorContrastData.brand.secondary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.secondary.dataWhiteColor,
      textColor: colorContrastData.brand.secondary.textColor,
    },
  ],
  research: [
    {
      name: "section.research.primary",
      dataBlackColor: ["4.16", "AA", "AAA"],
      dataWhiteColor: ["4.44", "AA", "AAA"],
      textColor: "ui.white",
    },
    {
      name: "section.research.secondary",
      dataBlackColor: ["2.90", "Fail", "Fail"],
      dataWhiteColor: ["7.24", "AAA", "AAA"],
      textColor: "ui.white",
    },
  ],
  researchLibraries: [
    {
      name: "section.research-library.lpa",
      dataBlackColor: ["2.69", "Fail", "Fail"],
      dataWhiteColor: ["7.80", "AAA", "AAA"],
      textColor: "ui.white",
    },
    {
      name: "section.research-library.schomburg",
      dataBlackColor: ["3.23", "Fail", "AA"],
      dataWhiteColor: ["6.51", "AA", "AAA"],
      textColor: "ui.white",
    },
    {
      colorSource: "brand.secondary",
      name: "section.research-library.schwarzman",
      dataBlackColor: colorContrastData.brand.secondary.dataBlackColor,
      dataWhiteColor: colorContrastData.brand.secondary.dataWhiteColor,
      textColor: colorContrastData.brand.secondary.textColor,
    },
  ],
  whatsOn: [
    {
      name: "section.whats-on.primary",
      dataBlackColor: ["1.35", "Fail", "Fail"],
      dataWhiteColor: ["15.52", "AAA", "AAA"],
      textColor: "ui.white",
    },
    {
      colorSource: "ui.black",
      name: "section.whats-on.secondary",
      dataBlackColor: colorContrastData.ui.black.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.black.dataWhiteColor,
      textColor: colorContrastData.ui.black.textColor,
    },
  ],
  ui: [
    {
      colorSource: "ui.gray.x-light-cool",
      name: "ui.bg.default",
      dataBlackColor: colorContrastData.ui.gray.xLightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xLightCool.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xLightCool.textColor,
    },
    {
      colorSource: "ui.gray.light-cool",
      name: "ui.bg.hover",
      dataBlackColor: colorContrastData.ui.gray.lightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.lightCool.dataWhiteColor,
      textColor: colorContrastData.ui.gray.lightCool.textColor,
    },
    {
      colorSource: "ui.gray.medium",
      name: "ui.bg.active",
      dataBlackColor: colorContrastData.ui.gray.medium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.medium.dataWhiteColor,
      textColor: colorContrastData.ui.gray.medium.textColor,
    },
    {
      colorSource: "ui.gray.medium",
      name: "ui.border.default",
      dataBlackColor: colorContrastData.ui.gray.medium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.medium.dataWhiteColor,
      dataBgPageColor: ["1.88", "Fail", "Fail"],
      dataBgDefaultColor: ["1.72", "Fail", "Fail"],
      textColor: colorContrastData.ui.gray.medium.textColor,
    },
    {
      colorSource: "ui.gray.dark",
      name: "ui.border.hover",
      dataBlackColor: colorContrastData.ui.gray.dark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.dark.dataWhiteColor,
      dataBgPageColor: ["6.19", "AA", "AAA"],
      dataBgDefaultColor: ["5.68", "AA", "AAA"],
      textColor: colorContrastData.ui.gray.dark.textColor,
    },
    {
      colorSource: "ui.gray.light-cool",
      name: "ui.disabled.primary",
      dataBlackColor: colorContrastData.ui.gray.lightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.lightCool.dataWhiteColor,
      dataBgPageColor: colorContrastData.ui.gray.lightCool.dataWhiteColor,
      dataBgDefaultColor: ["1.11", "Fail", "Fail"],
      textColor: colorContrastData.ui.gray.lightCool.textColor,
    },
    {
      colorSource: "ui.gray.xx-light-cool",
      name: "ui.disabled.secondary",
      dataBlackColor: colorContrastData.ui.gray.xxLightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxLightCool.dataWhiteColor,
      dataBgPageColor: colorContrastData.ui.gray.xxLightCool.dataWhiteColor,
      dataBgDefaultColor: ["1.04", "Fail", "Fail"],
      textColor: colorContrastData.ui.gray.xxLightCool.textColor,
    },
    {
      name: "ui.error.primary",
      dataBlackColor: checkContrast(2.64),
      dataWhiteColor: checkContrast(7.95),
      dataBgPageColor: checkContrast(7.95),
      dataBgDefaultColor: checkContrast(7.29),
      textColor: "ui.white",
    },
    {
      name: "ui.error.secondary",
      dataBlackColor: checkContrast(1.68),
      dataWhiteColor: checkContrast(12.48),
      dataBgPageColor: checkContrast(12.48),
      dataBgDefaultColor: checkContrast(11.45),
      textColor: "ui.white",
    },
    {
      name: "ui.focus",
      dataBlackColor: checkContrast(5.64),
      dataWhiteColor: checkContrast(3.73),
      dataBgPageColor: checkContrast(3.73),
      dataBgDefaultColor: checkContrast(3.42),
      textColor: "ui.black",
    },
    {
      name: "ui.link.primary",
      dataBlackColor: checkContrast(4.54),
      dataWhiteColor: checkContrast(4.63),
      dataBgPageColor: checkContrast(4.63),
      dataBgDefaultColor: checkContrast(4.24),
      textColor: "ui.white",
    },
    {
      name: "ui.link.secondary",
      dataBlackColor: checkContrast(2.46),
      dataWhiteColor: checkContrast(8.54),
      dataBgPageColor: checkContrast(8.54),
      dataBgDefaultColor: checkContrast(7.83),
      textColor: "ui.white",
    },
    {
      name: "ui.link.tertiary",
      dataBlackColor: checkContrast(1.91),
      dataWhiteColor: checkContrast(11.01),
      dataBgPageColor: checkContrast(11.01),
      dataBgDefaultColor: checkContrast(10.1),
      textColor: "ui.white",
    },
    // Colors that use transparency are tough to talk about when it comes to
    // color combinations and color contrast. For now, we will just use question
    // marks for the contrast values and WCAG status.
    {
      name: "ui.link.primary-05",
      dataBlackColor: ["?", "?", "?"],
      dataWhiteColor: ["?", "?", "?"],
      dataBgPageColor: ["?", "?", "?"],
      dataBgDefaultColor: ["?", "?", "?"],
      textColor: "ui.black",
    },
    // Colors that use transparency are tough to talk about when it comes to
    // color combinations and color contrast. For now, we will just use question
    // marks for the contrast values and WCAG status.
    {
      name: "ui.link.primary-10",
      dataBlackColor: ["?", "?", "?"],
      dataWhiteColor: ["?", "?", "?"],
      dataBgPageColor: ["?", "?", "?"],
      dataBgDefaultColor: ["?", "?", "?"],
      textColor: "ui.black",
    },
    {
      name: "ui.status.primary",
      dataBlackColor: checkContrast(16.08),
      dataWhiteColor: checkContrast(1.31),
      dataBgPageColor: checkContrast(1.31),
      dataBgDefaultColor: checkContrast(1.2),
      textColor: "ui.black",
    },
    {
      name: "ui.status.secondary",
      dataBlackColor: checkContrast(17.62),
      dataWhiteColor: checkContrast(1.19),
      dataBgPageColor: checkContrast(1.19),
      dataBgDefaultColor: checkContrast(1.09),
      textColor: "ui.black",
    },
    {
      name: "ui.success.primary",
      dataBlackColor: checkContrast(3.66),
      dataWhiteColor: checkContrast(5.73),
      dataBgPageColor: checkContrast(5.73),
      dataBgDefaultColor: checkContrast(5.26),
      textColor: "ui.white",
    },
    {
      name: "ui.success.secondary",
      dataBlackColor: checkContrast(2.23),
      dataWhiteColor: checkContrast(9.43),
      dataBgPageColor: checkContrast(9.43),
      dataBgDefaultColor: checkContrast(8.65),
      textColor: "ui.white",
    },
    {
      name: "ui.test",
      dataBlackColor: checkContrast(7.13),
      dataWhiteColor: checkContrast(2.95),
      dataBgPageColor: checkContrast(2.95),
      dataBgDefaultColor: checkContrast(2.7),
      textColor: "ui.black",
    },
    {
      colorSource: "ui.gray.xxxx-dark",
      name: "ui.typography.heading",
      dataBlackColor: colorContrastData.ui.black.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.black.dataWhiteColor,
      dataBrandPrimaryColor: checkContrast(3.45),
      dataBrandSecondaryColor: checkContrast(1.77),
      dataBgPageColor: colorContrastData.ui.black.dataWhiteColor,
      dataBgDefaultColor: checkContrast(19.26),
      textColor: colorContrastData.ui.black.textColor,
    },
    {
      colorSource: "ui.gray.xx-dark",
      name: "ui.typography.body",
      dataBlackColor: colorContrastData.ui.black.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.black.dataWhiteColor,
      dataBrandPrimaryColor: checkContrast(3.45),
      dataBrandSecondaryColor: checkContrast(1.77),
      dataBgPageColor: colorContrastData.ui.black.dataWhiteColor,
      dataBgDefaultColor: checkContrast(19.26),
      textColor: colorContrastData.ui.black.textColor,
    },
    {
      colorSource: "ui.white",
      name: "ui.typography.inverse.heading",
      dataBlackColor: colorContrastData.ui.white.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.white.dataWhiteColor,
      dataBrandPrimaryColor: checkContrast(6.08),
      dataBrandSecondaryColor: checkContrast(11.86),
      dataBgPageColor: colorContrastData.ui.white.dataWhiteColor,
      dataBgDefaultColor: checkContrast(1.09),
      textColor: colorContrastData.ui.white.textColor,
    },
    {
      colorSource: "ui.white",
      name: "ui.typography.inverse.body",
      dataBlackColor: colorContrastData.ui.white.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.white.dataWhiteColor,
      dataBrandPrimaryColor: checkContrast(6.08),
      dataBrandSecondaryColor: checkContrast(11.86),
      dataBgPageColor: colorContrastData.ui.white.dataWhiteColor,
      dataBgDefaultColor: checkContrast(1.09),
      textColor: colorContrastData.ui.white.textColor,
    },
    {
      name: "ui.warning.primary",
      dataBlackColor: checkContrast(8.53),
      dataWhiteColor: checkContrast(2.46),
      dataBgPageColor: checkContrast(2.46),
      dataBgDefaultColor: checkContrast(2.26),
      textColor: "ui.black",
    },
    {
      name: "ui.warning.secondary",
      dataBlackColor: checkContrast(6.47),
      dataWhiteColor: checkContrast(3.25),
      dataBgPageColor: checkContrast(3.25),
      dataBgDefaultColor: checkContrast(2.98),
      textColor: "ui.black",
    },
    {
      name: "ui.warning.tertiary",
      dataBlackColor: checkContrast(4.56),
      dataWhiteColor: checkContrast(4.51),
      dataBgPageColor: checkContrast(4.51),
      dataBgDefaultColor: checkContrast(4.13),
      notes:
        'This is the only "warning" light mode color variant that meets WCAG 2.1 contrast standards. Because of that, this is the only "warning" light mode color variant that can be used for text',
      textColor: "ui.black",
    },
  ],
  grayscaleRoot: [
    {
      name: "ui.black",
      dataBlackColor: colorContrastData.ui.black.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.black.dataWhiteColor,
      textColor: colorContrastData.ui.black.textColor,
    },
    {
      name: "ui.white",
      dataBlackColor: colorContrastData.ui.white.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.white.dataWhiteColor,
      textColor: colorContrastData.ui.white.textColor,
    },
  ],
  grayscaleCool: [
    {
      name: "ui.gray.xxxx-dark",
      dataBlackColor: colorContrastData.ui.gray.xxxxDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxxxDark.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xxxxDark.textColor,
    },
    {
      name: "ui.gray.xxx-dark",
      dataBlackColor: colorContrastData.ui.gray.xxxDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxxDark.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xxxDark.textColor,
    },
    {
      name: "ui.gray.xx-dark",
      dataBlackColor: colorContrastData.ui.gray.xxDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxDark.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xxDark.textColor,
    },
    {
      name: "ui.gray.x-dark",
      dataBlackColor: colorContrastData.ui.gray.xDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xDark.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xDark.textColor,
    },
    {
      name: "ui.gray.dark",
      dataBlackColor: colorContrastData.ui.gray.dark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.dark.dataWhiteColor,
      textColor: colorContrastData.ui.gray.dark.textColor,
    },
    {
      name: "ui.gray.semi-dark",
      dataBlackColor: colorContrastData.ui.gray.semiDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.semiDark.dataWhiteColor,
      textColor: colorContrastData.ui.gray.semiDark.textColor,
    },
    {
      name: "ui.gray.medium",
      dataBlackColor: colorContrastData.ui.gray.medium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.medium.dataWhiteColor,
      textColor: colorContrastData.ui.gray.medium.textColor,
    },
    {
      name: "ui.gray.semi-medium",
      dataBlackColor: colorContrastData.ui.gray.semiMedium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.semiMedium.dataWhiteColor,
      textColor: colorContrastData.ui.gray.semiMedium.textColor,
    },
    {
      name: "ui.gray.light-cool",
      dataBlackColor: colorContrastData.ui.gray.lightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.lightCool.dataWhiteColor,
      textColor: colorContrastData.ui.gray.lightCool.textColor,
    },
    {
      name: "ui.gray.x-light-cool",
      dataBlackColor: colorContrastData.ui.gray.xLightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xLightCool.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xLightCool.textColor,
    },
    {
      name: "ui.gray.xx-light-cool",
      dataBlackColor: colorContrastData.ui.gray.xxLightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxLightCool.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xxLightCool.textColor,
    },
  ],
  grayscaleWarm: [
    {
      name: "ui.gray.light-warm",
      dataBlackColor: colorContrastData.ui.gray.lightWarm.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.lightWarm.dataWhiteColor,
      textColor: colorContrastData.ui.gray.lightWarm.textColor,
    },
    {
      name: "ui.gray.x-light-warm",
      dataBlackColor: colorContrastData.ui.gray.xLightWarm.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xLightWarm.dataWhiteColor,
      textColor: colorContrastData.ui.gray.xLightWarm.textColor,
    },
  ],
  dark: [
    {
      colorSource: "ui.gray.xxxx-dark",
      name: "dark.ui.bg.page",
      dataBlackColor: colorContrastData.ui.gray.xxxxDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxxxDark.dataWhiteColor,
      dataHeadingColor: ["15.43", "AAA", "AAA"],
      dataBodyColor: ["9.97", "AAA", "AAA"],
      textColor: colorContrastData.ui.gray.xxxxDark.textColor,
    },
    {
      colorSource: "ui.gray.xxx-dark",
      name: "dark.ui.bg.default",
      dataBlackColor: colorContrastData.ui.gray.xxxDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxxDark.dataWhiteColor,
      dataHeadingColor: ["14.48", "AAA", "AAA"],
      dataBodyColor: ["9.36", "AAA", "AAA"],
      textColor: colorContrastData.ui.gray.xxxDark.textColor,
    },
    {
      colorSource: "ui.gray.xx-dark",
      name: "dark.ui.bg.hover",
      dataBlackColor: colorContrastData.ui.gray.xxDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xxDark.dataWhiteColor,
      dataHeadingColor: colorContrastData.dark.ui.gray.xxDark.dataHeadingColor,
      dataBodyColor: colorContrastData.dark.ui.gray.xxDark.dataBodyColor,
      textColor: colorContrastData.ui.gray.xxDark.textColor,
    },
    {
      colorSource: "ui.gray.x-dark",
      name: "dark.ui.bg.active",
      dataBlackColor: colorContrastData.ui.gray.xDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xDark.dataWhiteColor,
      dataHeadingColor: colorContrastData.dark.ui.gray.xDark.dataHeadingColor,
      dataBodyColor: colorContrastData.dark.ui.gray.xDark.dataBodyColor,
      textColor: colorContrastData.ui.gray.xDark.textColor,
    },
    {
      colorSource: "ui.gray.semi-dark",
      name: "dark.ui.border.default",
      dataBlackColor: colorContrastData.ui.gray.semiDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.semiDark.dataWhiteColor,
      dataDarkBgPageColor: checkContrast("5.30"),
      dataDarkBgDefaultColor: checkContrast("4.62"),
      textColor: colorContrastData.ui.gray.semiDark.textColor,
    },
    {
      colorSource: "ui.gray.semi-medium",
      name: "dark.ui.border.hover",
      dataBlackColor: colorContrastData.ui.gray.semiMedium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.semiMedium.dataWhiteColor,
      dataDarkBgPageColor: checkContrast("12.46"),
      dataDarkBgDefaultColor: checkContrast("10.86"),
      textColor: colorContrastData.ui.gray.semiMedium.textColor,
    },
    {
      colorSource: "ui.gray.dark",
      name: "dark.ui.disabled.primary",
      dataBlackColor: colorContrastData.ui.gray.dark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.dark.dataWhiteColor,
      dataDarkBgPageColor: checkContrast("1.86"),
      dataDarkBgDefaultColor: checkContrast("1.75"),
      textColor: colorContrastData.ui.gray.dark.textColor,
    },
    {
      colorSource: "ui.gray.x-dark",
      name: "dark.ui.disabled.secondary",
      dataBlackColor: colorContrastData.ui.gray.xDark.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.xDark.dataWhiteColor,
      dataDarkBgPageColor: checkContrast("1.16"),
      dataDarkBgDefaultColor: checkContrast("1.09"),
      textColor: colorContrastData.ui.gray.xDark.textColor,
    },
    {
      name: "dark.ui.error.primary",
      dataBlackColor: checkContrast("7.08"),
      dataWhiteColor: checkContrast("2.97"),
      dataDarkBgPageColor: checkContrast("5.93"),
      dataDarkBgDefaultColor: checkContrast("5.17"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.error.secondary",
      dataBlackColor: checkContrast("9.06"),
      dataWhiteColor: checkContrast("2.32"),
      dataDarkBgPageColor: checkContrast("7.58"),
      dataDarkBgDefaultColor: checkContrast("6.61"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.focus",
      dataBlackColor: checkContrast("5.64"),
      dataWhiteColor: checkContrast("3.73"),
      dataDarkBgPageColor: checkContrast("4.72"),
      dataDarkBgDefaultColor: checkContrast("4.11"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.link.primary",
      dataBlackColor: checkContrast("9.79"),
      dataWhiteColor: checkContrast("2.15"),
      dataDarkBgPageColor: checkContrast("8.19"),
      dataDarkBgDefaultColor: checkContrast("7.14"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.link.secondary",
      dataBlackColor: checkContrast("12.65"),
      dataWhiteColor: checkContrast("1.66"),
      dataDarkBgPageColor: checkContrast("10.59"),
      dataDarkBgDefaultColor: checkContrast("9.23"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.link.tertiary",
      dataBlackColor: checkContrast("7.30"),
      dataWhiteColor: checkContrast("2.88"),
      dataDarkBgPageColor: checkContrast("6.11"),
      dataDarkBgDefaultColor: checkContrast("5.33"),
      textColor: "ui.black",
    },
    // Colors that use transparency are tough to talk about when it comes to
    // color combinations and color contrast. For now, we will just use question
    // marks for the contrast values and WCAG status.
    {
      name: "dark.ui.link.primary-05",
      dataBlackColor: ["?", "?", "?"],
      dataWhiteColor: ["?", "?", "?"],
      dataDarkBgPageColor: ["?", "?", "?"],
      dataDarkBgDefaultColor: ["?", "?", "?"],
      textColor: "ui.white",
    },
    // Colors that use transparency are tough to talk about when it comes to
    // color combinations and color contrast. For now, we will just use question
    // marks for the contrast values and WCAG status.
    {
      name: "dark.ui.link.primary-10",
      dataBlackColor: ["?", "?", "?"],
      dataWhiteColor: ["?", "?", "?"],
      dataDarkBgPageColor: ["?", "?", "?"],
      dataDarkBgDefaultColor: ["?", "?", "?"],
      textColor: "ui.white",
    },
    {
      name: "dark.ui.status.primary",
      dataBlackColor: checkContrast("7.83"),
      dataWhiteColor: checkContrast("2.68"),
      dataDarkBgPageColor: checkContrast("6.56"),
      dataDarkBgDefaultColor: checkContrast("5.72"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.status.secondary",
      dataBlackColor: checkContrast("7.70"),
      dataWhiteColor: checkContrast("2.73"),
      dataDarkBgPageColor: checkContrast("6.45"),
      dataDarkBgDefaultColor: checkContrast("5.62"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.success.primary",
      dataBlackColor: checkContrast("7.28"),
      dataWhiteColor: checkContrast("2.89"),
      dataDarkBgPageColor: checkContrast("6.09"),
      dataDarkBgDefaultColor: checkContrast("5.31"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.success.secondary",
      dataBlackColor: checkContrast("10.56"),
      dataWhiteColor: checkContrast("1.99"),
      dataDarkBgPageColor: checkContrast("8.84"),
      dataDarkBgDefaultColor: checkContrast("7.71"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.test",
      dataDarkBgPageColor: ["1.60", "Fail", "Fail"],
      dataDarkBgDefaultColor: ["1.50", "Fail", "Fail"],
      dataBlackColor: ["1.79", "Fail", "Fail"],
      dataWhiteColor: ["11.71", "AAA", "AAA"],
      dataHeadingColor: ["9.64", "AAA", "AAA"],
      dataBodyColor: ["6.23", "AA", "AAA"],
      textColor: "ui.white",
    },
    {
      colorSource: "ui.gray.light-cool",
      name: "dark.ui.typography.heading",
      dataBlackColor: colorContrastData.ui.gray.lightCool.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.lightCool.dataWhiteColor,
      dataBrandPrimaryColor: checkContrast(5.01),
      dataBrandSecondaryColor: checkContrast(9.77),
      dataDarkBgPageColor: checkContrast(15.43),
      dataDarkBgDefaultColor: checkContrast(14.48),
      textColor: colorContrastData.ui.gray.lightCool.textColor,
    },
    {
      colorSource: "ui.gray.medium",
      name: "dark.ui.typography.body",
      dataBlackColor: colorContrastData.ui.gray.medium.dataBlackColor,
      dataWhiteColor: colorContrastData.ui.gray.medium.dataWhiteColor,
      dataBrandPrimaryColor: checkContrast(3.24),
      dataBrandSecondaryColor: checkContrast(6.31),
      dataDarkBgPageColor: checkContrast(9.97),
      dataDarkBgDefaultColor: checkContrast(9.36),
      textColor: colorContrastData.ui.gray.medium.textColor,
    },
    {
      colorSource: "ui.gray.xxDark",
      name: "dark.ui.typography.inverse.heading",
      dataBlackColor: checkContrast(1.3),
      dataWhiteColor: checkContrast(16.1),
      dataBrandPrimaryColor: checkContrast(2.65),
      dataBrandSecondaryColor: checkContrast(1.36),
      dataDarkBgPageColor: checkContrast(1.16),
      dataDarkBgDefaultColor: checkContrast(1.09),
      textColor: "ui.white",
    },
    {
      colorSource: "ui.gray.xxDark",
      name: "dark.ui.typography.inverse.body",
      dataBlackColor: checkContrast(1.3),
      dataWhiteColor: checkContrast(16.1),
      dataBrandPrimaryColor: checkContrast(2.65),
      dataBrandSecondaryColor: checkContrast(1.36),
      dataDarkBgPageColor: checkContrast(1.16),
      dataDarkBgDefaultColor: checkContrast(1.09),
      textColor: "ui.white",
    },
    {
      name: "dark.ui.warning.primary",
      dataBlackColor: checkContrast("7.18"),
      dataWhiteColor: checkContrast("2.92"),
      dataDarkBgPageColor: checkContrast("6.01"),
      dataDarkBgDefaultColor: checkContrast("5.24"),
      textColor: "ui.black",
    },
    {
      name: "dark.ui.warning.secondary",
      dataBlackColor: checkContrast("10.40"),
      dataWhiteColor: checkContrast("2.02"),
      dataDarkBgPageColor: checkContrast("8.71"),
      dataDarkBgDefaultColor: checkContrast("7.59"),
      textColor: "ui.black",
    },
  ],
};

export const makeColorCard = function (data) {
  const {
    colorSource,
    dataBgPageColor,
    dataBgDefaultColor,
    dataBlackColor,
    dataBrandPrimaryColor,
    dataBrandSecondaryColor,
    dataDarkBgPageColor,
    dataDarkBgDefaultColor,
    dataWhiteColor,
    dataHeadingColor,
    dataBodyColor,
    name,
    notes,
    textColor,
  } = data;
  const card = (
    <ColorCard
      backgroundColor={name}
      dataBgPageColor={dataBgPageColor}
      dataBgDefaultColor={dataBgDefaultColor}
      dataDarkBgPageColor={dataDarkBgPageColor}
      dataDarkBgDefaultColor={dataDarkBgDefaultColor}
      colorName={name}
      colorSource={colorSource}
      dataWhiteColor={dataWhiteColor}
      dataBlackColor={dataBlackColor}
      dataDarkHeadingColor={dataHeadingColor}
      dataDarkBodyColor={dataBodyColor}
      dataBrandPrimaryColor={dataBrandPrimaryColor}
      dataBrandSecondaryColor={dataBrandSecondaryColor}
      notes={notes}
      textColor={textColor}
      key={name}
    />
  );
  return card;
};
export const getColorCards = (category) => {
  const cards = [];
  const catArr = cssVars[category];
  if (category === "researchLibraries") {
    console.log(catArr);
  }
  for (let i = 0; i < catArr.length; i++) {
    const colorData = catArr[i];
    const card = makeColorCard(colorData);
    cards.push(card);
  }
  return cards;
};

// Small Color Swatch
interface SmallColorSwatchProps {
  /** The backgroundColor of the color swatch. */
  backgroundColor: string;
  /** Add a border to a small color swatch when better definition is needed
   * between the color swatch and the color card background color. Use a light
   * or dark border as needed. */
  border?: boolean;
  darkBorder?: boolean;
}
const SmallColorSwatch = (props: PropsWithChildren<SmallColorSwatchProps>) => {
  const { backgroundColor, border, darkBorder } = props;
  return (
    <span
      style={{
        backgroundColor: backgroundColor,
        border:
          !border && !darkBorder
            ? null
            : darkBorder
            ? "1px solid #191919"
            : "1px solid #E9E9E9",
        display: "inline-block",
        height: "1rem",
        marginRight: ".5rem",
        verticalAlign: "middle",
        width: "1rem",
      }}
    ></span>
  );
};

export interface DataTableProps {
  /** Contrast and WCAG compliance data related to the color ui.bg.page when
   * used with the current color. */
  dataBgPageColor: string[];
  /** Contrast and WCAG compliance data related to the color ui.bg.default when
   * used with the current color. */
  dataBgDefaultColor: string[];
  /** Contrast and WCAG compliance data related to the color dark.ui.bg.page when
   * used with the current color. */
  dataDarkBgPageColor: string[];
  /** Contrast and WCAG compliance data related to the color dark.ui.bg.default when
   * used with the current color. */
  dataDarkBgDefaultColor: string[];
  /** Contrast and WCAG compliance data related to the color black when used
   * with the current color. */
  dataBlackColor: string[];
  /** Contrast and WCAG compliance data related to the NYPL Brand primary color
   * when used with the current color. */
  dataBrandPrimaryColor: string[];
  /** Contrast and WCAG compliance data related to the default color for basic
   * text elements when used with the current color. */
  dataDarkBodyColor?: string[];
  /** Contrast and WCAG compliance data related to the NYPL Brand secondary color
   * when used with the current color. */
  dataBrandSecondaryColor: string[];
  /** Contrast and WCAG compliance data related to the default color for
   * heading elements when used with the current color. */
  dataDarkHeadingColor?: string[];
  /** Contrast and WCAG compliance data related to the color white when used
   * with the current color. */
  dataWhiteColor: string[];
  /** The color to use for text in the color card. */
  textColor: IconColors;
}

export interface ColorCardProps extends DataTableProps {
  /** The backgroundColor of the color card. */
  backgroundColor: string;
  /** The name of a color's javascript theme object. */
  colorName: string;
  /** The name of the color that the current color is based on. */
  colorSource: string;
  /** Details on how a color should be used. */
  notes?: string;
}

export const DataTable = (props: PropsWithChildren<DataTableProps>) => {
  const {
    dataBgPageColor,
    dataBgDefaultColor,
    dataDarkBgPageColor,
    dataDarkBgDefaultColor,
    dataBlackColor = ["--", "--", "--"],
    dataDarkHeadingColor,
    dataDarkBodyColor,
    dataWhiteColor = ["--", "--", "--"],
    dataBrandPrimaryColor,
    dataBrandSecondaryColor,
    textColor = "ui.white",
  } = props;
  const SuccessIcon = () => (
    <Icon
      color={textColor}
      decorative
      marginStart="xxs"
      name="check"
      size="medium"
      type="default"
      verticalAlign="text-bottom"
    />
  );
  const successfulContrast = (dataColor: string[], textSize = "small") => {
    const dataTextIndex = textSize === "small" ? 1 : 2;
    return (
      (dataColor[dataTextIndex] === "AA" ||
        dataColor[dataTextIndex] === "AAA") && <SuccessIcon />
    );
  };
  const columnHeaders = ["Color", "Ratio", "16px", "36px"];
  // All color data have the following two rows.
  const whiteSmallTextSuccess = successfulContrast(dataWhiteColor);
  const whiteLargeTextSuccess = successfulContrast(dataWhiteColor, "large");
  const blackSmallTextSuccess = successfulContrast(dataBlackColor);
  const blackLargeTextSuccess = successfulContrast(dataBlackColor, "large");

  const brandPrimarySmallTextSuccess =
    dataBrandPrimaryColor && successfulContrast(dataBrandPrimaryColor);
  const brandPrimaryLargeTextSuccess =
    dataBrandPrimaryColor && successfulContrast(dataBrandPrimaryColor, "large");
  const brandSecondarySmallTextSuccess =
    dataBrandSecondaryColor && successfulContrast(dataBrandSecondaryColor);
  const brandSecondaryLargeTextSuccess =
    dataBrandSecondaryColor &&
    successfulContrast(dataBrandSecondaryColor, "large");

  // The dark theme colors might have the following color contrast information.
  const bgPageSmallTextSuccess =
    dataBgPageColor && successfulContrast(dataBgPageColor);
  const bgPageLargeTextSuccess =
    dataBgPageColor && successfulContrast(dataBgPageColor, "large");
  const bgDefaultSmallTextSuccess =
    dataBgDefaultColor && successfulContrast(dataBgDefaultColor);
  const bgDefaultLargeTextSuccess =
    dataBgDefaultColor && successfulContrast(dataBgDefaultColor, "large");
  const darkBgPageSmallTextSuccess =
    dataDarkBgPageColor && successfulContrast(dataDarkBgPageColor);
  const darkBgPageLargeTextSuccess =
    dataDarkBgPageColor && successfulContrast(dataDarkBgPageColor, "large");
  const darkBgDefaultSmallTextSuccess =
    dataDarkBgDefaultColor && successfulContrast(dataDarkBgDefaultColor);
  const darkBgDefaultLargeTextSuccess =
    dataDarkBgDefaultColor &&
    successfulContrast(dataDarkBgDefaultColor, "large");
  const darkHeadingSmallTextSuccess =
    dataDarkHeadingColor && successfulContrast(dataDarkHeadingColor);
  const darkHeadingLargeTextSuccess =
    dataDarkHeadingColor && successfulContrast(dataDarkHeadingColor, "large");
  const textSmallTextSuccess =
    dataDarkBodyColor && successfulContrast(dataDarkBodyColor);
  const textLargeTextSuccess =
    dataDarkBodyColor && successfulContrast(dataDarkBodyColor, "large");
  // All ColorCards have these two rows.
  const tableData = [
    [
      <span key="colorUiWhite" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="white" border />
        ui.white
      </span>,
      <span key="colorUiWhiteRatio">{`${dataWhiteColor[0]}:1`}</span>,
      <>
        {dataWhiteColor[1]}
        {whiteSmallTextSuccess}
      </>,
      <>
        {dataWhiteColor[2]}
        {whiteLargeTextSuccess}
      </>,
    ],
    [
      <span key="colorUiBlack" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="black" darkBorder />
        ui.black
      </span>,
      <span key="colorUiBlackRatio">{`${dataBlackColor[0]}:1`}</span>,
      <>
        {dataBlackColor[1]}
        {blackSmallTextSuccess}
      </>,
      <>
        {dataBlackColor[2]}
        {blackLargeTextSuccess}
      </>,
    ],
  ];
  const cellStyles = {
    borderColor:
      textColor === "ui.white" ? "white !important" : "black !important",
    fontSize: "text.tag",
    fontWeight: "medium",
    py: "xs",
  };
  const tableStyles = {
    tbody: {
      td: {
        ...cellStyles,
        borderBottom: `1px solid ${cellStyles.borderColor}`,
        color: textColor === "ui.white" ? `#FFF !important` : `#000 !important`, // This is a hack to override other color assignments
        span: {
          color:
            textColor === "ui.white" ? `#FFF !important` : `#000 !important`, // This is a hack to override other color assignments
        },
      },
      th: {
        borderBottom: `1px solid ${cellStyles.borderColor}`,
        textTransform: "none",
        ...cellStyles,
        _first: {
          span: {
            color: textColor,
          },
        },
      },
    },
    thead: {
      th: {
        color: textColor,
        borderBottom: "1px solid !important",
        textTransform: "uppercase",
        ...cellStyles,
      },
    },
  };

  // The Brand colors are needed for some `ColorCard`s.
  if (dataBrandPrimaryColor && dataBrandPrimaryColor.length > 0) {
    tableData.push([
      <span key="colorBrandPrimaryPage" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-brand-primary)" />
        brand.primary
      </span>,
      <span key="colorBrandPrimaryPageRatio">{`${dataBrandPrimaryColor[0]}:1`}</span>,
      <>
        {dataBrandPrimaryColor[1]}
        {brandPrimarySmallTextSuccess}
      </>,
      <>
        {dataBrandPrimaryColor[2]}
        {brandPrimaryLargeTextSuccess}
      </>,
    ]);
  }
  if (dataBrandSecondaryColor && dataBrandSecondaryColor.length > 0) {
    tableData.push([
      <span key="colorBrandSecondaryPage" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-brand-secondary)" />
        brand.secondary
      </span>,
      <span key="colorBrandSecondaryPageRatio">{`${dataBrandSecondaryColor[0]}:1`}</span>,
      <>
        {dataBrandSecondaryColor[1]}
        {brandSecondarySmallTextSuccess}
      </>,
      <>
        {dataBrandSecondaryColor[2]}
        {brandSecondaryLargeTextSuccess}
      </>,
    ]);
  }
  if (dataBgPageColor && dataBgPageColor.length > 0) {
    tableData.push([
      <span key="colorBgPage" style={{ padding: 0 }}>
        <SmallColorSwatch
          backgroundColor="var(--nypl-colors-ui-bg-page)"
          border
        />
        ui.bg.page
      </span>,
      <span key="colorBgPageRatio">{`${dataBgPageColor[0]}:1`}</span>,
      <>
        {dataBgPageColor[1]}
        {bgPageSmallTextSuccess}
      </>,
      <>
        {dataBgPageColor[2]}
        {bgPageLargeTextSuccess}
      </>,
    ]);
  }
  if (dataBgDefaultColor && dataBgDefaultColor.length > 0) {
    tableData.push([
      <span key="colorBgDefault" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-ui-bg-default)" />
        ui.bg.default
      </span>,
      <span key="colorBgDefaultRatio">{`${dataBgDefaultColor[0]}:1`}</span>,
      <>
        {dataBgDefaultColor[1]}
        {bgDefaultSmallTextSuccess}
      </>,
      <>
        {dataBgDefaultColor[2]}
        {bgDefaultLargeTextSuccess}
      </>,
    ]);
  }

  // For dark mode `ColorCard`s, there are four extra rows.
  if (dataDarkBgPageColor && dataDarkBgPageColor.length > 0) {
    tableData.push([
      <span key="colorDarkBgPage" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-dark-ui-bg-page)" />
        dark.ui.bg.page
      </span>,
      <span key="colorDarkBgPageRatio">{`${dataDarkBgPageColor[0]}:1`}</span>,
      <>
        {dataDarkBgPageColor[1]}
        {darkBgPageSmallTextSuccess}
      </>,
      <>
        {dataDarkBgPageColor[2]}
        {darkBgPageLargeTextSuccess}
      </>,
    ]);
  }
  if (dataDarkBgDefaultColor && dataDarkBgDefaultColor.length > 0) {
    tableData.push([
      <span key="colorDarkBgDefault" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-dark-ui-bg-default)" />
        dark.ui.bg.default
      </span>,
      <span key="colorDarkBgDefaultRatio">{`${dataDarkBgDefaultColor[0]}:1`}</span>,
      <>
        {dataDarkBgDefaultColor[1]}
        {darkBgDefaultSmallTextSuccess}
      </>,
      <>
        {dataDarkBgDefaultColor[2]}
        {darkBgDefaultLargeTextSuccess}
      </>,
    ]);
  }
  if (dataDarkHeadingColor && dataDarkHeadingColor.length > 0) {
    tableData.push([
      <span key="colorDarkHeading" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-ui-typography-heading)" />
        ui.typography.heading
      </span>,
      <span key="colorDarkHeadingRatio">{`${dataDarkHeadingColor[0]}:1`}</span>,
      <>
        {dataDarkHeadingColor[1]}
        {darkHeadingSmallTextSuccess}
      </>,
      <>
        {dataDarkHeadingColor[2]}
        {darkHeadingLargeTextSuccess}
      </>,
    ]);
  }
  if (dataDarkBodyColor && dataDarkBodyColor.length > 0) {
    tableData.push([
      <span key="colorDarkText" style={{ padding: 0 }}>
        <SmallColorSwatch backgroundColor="var(--nypl-colors-ui-typography-body)" />
        ui.typography.body
      </span>,
      <span key="colorDarkTextRatio">{`${dataDarkBodyColor[0]}:1`}</span>,
      <>
        {dataDarkBodyColor[1]}
        {textSmallTextSuccess}
      </>,
      <>
        {dataDarkBodyColor[2]}
        {textLargeTextSuccess}
      </>,
    ]);
  }

  return (
    <Table
      className="storybook-colors-example"
      columnHeaders={columnHeaders}
      showRowDividers
      sx={tableStyles}
      tableData={tableData}
      useRowHeaders
    />
  );
};

export const ColorCard = (props: PropsWithChildren<ColorCardProps>) => {
  const {
    backgroundColor,
    dataBgPageColor,
    dataBgDefaultColor,
    dataDarkBgPageColor,
    dataDarkBgDefaultColor,
    colorName = "",
    colorSource,
    dataBlackColor = ["--", "--", "--"],
    dataDarkHeadingColor,
    dataDarkBodyColor,
    dataWhiteColor = ["--", "--", "--"],
    dataBrandPrimaryColor,
    dataBrandSecondaryColor,
    notes,
    textColor = "ui.white",
  } = props;
  const cssVarName = `--nypl-colors-${colorName.replace(/\./g, "-")}`;
  const border =
    backgroundColor === "ui.white" ||
    backgroundColor === "ui.typography.inverse.heading" ||
    backgroundColor === "ui.typography.inverse.body"
      ? "1px solid var(--nypl-colors-ui-gray-light-cool)"
      : undefined;
  return (
    <Box
      bg={backgroundColor}
      color={textColor}
      px="m"
      paddingBottom="m"
      paddingTop="s"
      border={border}
    >
      <HStack alignItems="top">
        <Box width="80%">
          <Heading
            noSpace
            size="heading5"
            border="none"
            color={textColor}
            pb="0"
          >
            {backgroundColor}
          </Heading>
          <Text
            fontWeight="medium"
            lineHeight="20px"
            noSpace
            size="tag"
            m="0"
            color={textColor}
          >
            <span style={{ fontWeight: "bold" }}>CSS:</span>{" "}
            {`var(${cssVarName})`}
          </Text>
          {colorSource && (
            <Text
              color={textColor}
              fontWeight="medium"
              lineHeight="20px"
              m="0"
              noSpace
              size="tag"
            >
              <span style={{ fontWeight: "bold" }}>Source:</span> {colorSource}
            </Text>
          )}
          {notes && (
            <Text
              color={textColor}
              fontWeight="medium"
              lineHeight="20px"
              // m="0"
              noSpace
              size="tag"
            >
              <span style={{ fontWeight: "bold" }}>Notes:</span> {notes}
            </Text>
          )}
        </Box>
        <DataTable
          dataBgPageColor={dataBgPageColor}
          dataBgDefaultColor={dataBgDefaultColor}
          dataDarkBgPageColor={dataDarkBgPageColor}
          dataDarkBgDefaultColor={dataDarkBgDefaultColor}
          dataBlackColor={dataBlackColor}
          dataDarkHeadingColor={dataDarkHeadingColor}
          dataDarkBodyColor={dataDarkBodyColor}
          dataWhiteColor={dataWhiteColor}
          dataBrandPrimaryColor={dataBrandPrimaryColor}
          dataBrandSecondaryColor={dataBrandSecondaryColor}
          textColor={textColor}
        />
      </HStack>
    </Box>
  );
};

export default ColorCard;
