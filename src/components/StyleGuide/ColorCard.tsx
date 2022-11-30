import { Box, HStack } from "@chakra-ui/react";
import * as React from "react";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
// import SimpleGrid from "../Grid/SimpleGrid";
import Table from "../Table/Table";
import Text from "../Text/Text";
import useNYPLTheme from "../../hooks/useNYPLTheme";

// Small Color Swatch
interface SmallColorSwatchProps {
  /** The backgroundColor of the color swatch. */
  backgroundColor: string;
  border?: boolean;
  darkBorder?: boolean;
}
const SmallColorSwatch = (
  props: React.PropsWithChildren<SmallColorSwatchProps>
) => {
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
  textColor: string;
}

export interface ColorCardProps extends DataTableProps {
  /** The backgroundColor of the color card. */
  backgroundColor: string;
  /** The name of a color's javascript theme object. */
  colorName: string;
  /** The name of the color that the current color is based on. */
  colorSource: string;
}

export const DataTable = (props: React.PropsWithChildren<DataTableProps>) => {
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
  const {
    // colors: { ui },
  } = useNYPLTheme();
  // const grayxxxxDark = ui.gray["xxxx-dark"];
  // const grayxxxDark = ui.gray["xxx-dark"];
  // const grayLightCool = ui.gray["light-cool"];
  // const grayMedium = ui.gray.medium;
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
      `${dataWhiteColor[0]}:1`,
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
      `${dataBlackColor[0]}:1`,
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
    fontWeight: "medium",
    py: "xs",
  };
  const tableStyles = {
    tbody: {
      td: {
        fontSize: "text.tag",
        ...cellStyles,
      },
      th: {
        fontSize: "text.tag",
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
        fontSize: "text.tag",
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
      `${dataBrandPrimaryColor[0]}:1`,
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
      `${dataBrandSecondaryColor[0]}:1`,
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
      `${dataBgPageColor[0]}:1`,
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
      `${dataBgDefaultColor[0]}:1`,
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
      `${dataDarkBgPageColor[0]}:1`,
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
      `${dataDarkBgDefaultColor[0]}:1`,
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
      `${dataDarkHeadingColor[0]}:1`,
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
      `${dataDarkBodyColor[0]}:1`,
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
      columnHeaders={columnHeaders}
      showRowDividers
      sx={tableStyles}
      tableData={tableData}
      useRowHeaders
    />
  );
};

export const ColorCard = (props: React.PropsWithChildren<ColorCardProps>) => {
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
      {/* <SimpleGrid columns={2}> */}
      <HStack alignItems="top">
        <Box width="80%">
          <Heading noSpace size="tertiary">
            {backgroundColor}
          </Heading>
          <Text fontWeight="medium" noSpace size="tag">
            {"CSS: var(" + cssVarName + ")"}
          </Text>
          {colorSource && (
            <Text fontWeight="medium" noSpace size="tag">
              Source: {colorSource}
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
      {/* </SimpleGrid> */}
    </Box>
  );
};

export default ColorCard;
