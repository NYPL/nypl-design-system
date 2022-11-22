import { Box } from "@chakra-ui/react";
import * as React from "react";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import SimpleGrid from "../Grid/SimpleGrid";
import Table from "../Table/Table";
import Text from "../Text/Text";
import useNYPLTheme from "../../hooks/useNYPLTheme";

export interface DataTableProps {
  /** Contrast and WCAG compliance data related to the color gray.xxxx-dark when
   * used with the current color. */
  dataBgPageColor: string[];
  /** Contrast and WCAG compliance data related to the color gray.xxx-dark when
   * used with the current color. */
  dataBgDefaultColor: string[];
  /** Contrast and WCAG compliance data related to the color black when used
   * with the current color. */
  dataBlackColor: string[];
  /** Contrast and WCAG compliance data related to the default color for
   * heading elements when used with the current color. */
  dataHeadingColor?: string[];
  /** Contrast and WCAG compliance data related to the default color for basic
   * text elements when used with the current color. */
  dataBodyColor?: string[];
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
    dataBlackColor = ["--", "--", "--"],
    dataHeadingColor,
    dataBodyColor,
    dataWhiteColor = ["--", "--", "--"],
    textColor = "ui.white",
  } = props;
  const {
    colors: { ui },
  } = useNYPLTheme();
  const grayxxxxDark = ui.gray["xxxx-dark"];
  const grayxxxDark = ui.gray["xxx-dark"];
  const grayLightCool = ui.gray["light-cool"];
  const grayMedium = ui.gray.medium;
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
  // The dark theme colors might have the following color contrast information.
  const bgPageSmallTextSuccess =
    dataBgPageColor && successfulContrast(dataBgPageColor);
  const bgPageLargeTextSuccess =
    dataBgPageColor && successfulContrast(dataBgPageColor, "large");
  const bgDefaultSmallTextSuccess =
    dataBgDefaultColor && successfulContrast(dataBgDefaultColor);
  const bgDefaultLargeTextSuccess =
    dataBgDefaultColor && successfulContrast(dataBgDefaultColor, "large");
  const headingSmallTextSuccess =
    dataHeadingColor && successfulContrast(dataHeadingColor);
  const headingLargeTextSuccess =
    dataHeadingColor && successfulContrast(dataHeadingColor, "large");
  const textSmallTextSuccess =
    dataBodyColor && successfulContrast(dataBodyColor);
  const textLargeTextSuccess =
    dataBodyColor && successfulContrast(dataBodyColor, "large");
  // All ColorCards have these two rows.
  const tableData = [
    [
      <span key="colorUiWhite" style={{ color: "white", padding: 0 }}>
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
      <span key="colorUiBlack" style={{ color: "black", padding: 0 }}>
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
        fontSize: "text.caption",
        ...cellStyles,
      },
      th: {
        fontSize: "text.caption",
        textTransform: "none",
        ...cellStyles,
      },
    },
    thead: {
      th: {
        color: textColor,
        fontSize: "text.tag",
        ...cellStyles,
      },
    },
  };

  // For dark mode `ColorCard`s, there are four extra rows.
  if (dataBgPageColor && dataBgPageColor.length > 0) {
    tableData.push([
      <span key="colorBgPage" style={{ color: grayxxxxDark, padding: 0 }}>
        bg page
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
      <span key="colorBgDefault" style={{ color: grayxxxDark, padding: 0 }}>
        bg default
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
  if (dataHeadingColor && dataHeadingColor.length > 0) {
    tableData.push([
      <span key="colorHeading" style={{ color: grayLightCool, padding: 0 }}>
        heading
      </span>,
      `${dataHeadingColor[0]}:1`,
      <>
        {dataHeadingColor[1]}
        {headingSmallTextSuccess}
      </>,
      <>
        {dataHeadingColor[2]}
        {headingLargeTextSuccess}
      </>,
    ]);
  }
  if (dataBodyColor && dataBodyColor.length > 0) {
    tableData.push([
      <span key="colorText" style={{ color: grayMedium, padding: 0 }}>
        body
      </span>,
      `${dataBodyColor[0]}:1`,
      <>
        {dataBodyColor[1]}
        {textSmallTextSuccess}
      </>,
      <>
        {dataBodyColor[2]}
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
    colorName = "",
    colorSource,
    dataBlackColor = ["--", "--", "--"],
    dataHeadingColor,
    dataBodyColor,
    dataWhiteColor = ["--", "--", "--"],
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
      <SimpleGrid columns={2}>
        <Box>
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
          dataBlackColor={dataBlackColor}
          dataHeadingColor={dataHeadingColor}
          dataBodyColor={dataBodyColor}
          dataWhiteColor={dataWhiteColor}
          textColor={textColor}
        />
      </SimpleGrid>
    </Box>
  );
};

export default ColorCard;
