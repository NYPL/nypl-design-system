import { Box } from "@chakra-ui/react";
import * as React from "react";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import SimpleGrid from "../Grid/SimpleGrid";
import Table from "../Table/Table";
import Text from "../Text/Text";

export interface DataTableProps {
  /** Contrast and WCAG compliance data related to the color black when used
   * with the current color. */
  dataBlackColor: string[];
  /** Contrast and WCAG compliance data related to the default color for
   * heading elements when used with the current color. */
  dataHeadingColor?: string[];
  /** Contrast and WCAG compliance data related to the default color for basic
   * text elements when used with the current color. */
  dataTextColor?: string[];
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
    dataBlackColor = ["--", "--", "--"],
    dataHeadingColor,
    dataTextColor,
    dataWhiteColor = ["--", "--", "--"],
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
  const columnHeaders = ["Color", "Ratio", "16px", "36px"];
  const whiteSmallTextSuccess = (dataWhiteColor[1] === "AA" ||
    dataWhiteColor[1] === "AAA") && <SuccessIcon />;
  const whiteLargeTextSuccess = (dataWhiteColor[2] === "AA" ||
    dataWhiteColor[2] === "AAA") && <SuccessIcon />;
  const blackSmallTextSuccess = (dataBlackColor[1] === "AA" ||
    dataBlackColor[1] === "AAA") && <SuccessIcon />;
  const blackLargeTextSuccess = (dataBlackColor[2] === "AA" ||
    dataBlackColor[2] === "AAA") && <SuccessIcon />;
  const headingSmallTextSuccess = dataHeadingColor &&
    (dataHeadingColor[1] === "AA" || dataHeadingColor[1] === "AAA") && (
      <SuccessIcon />
    );
  const headingLargeTextSuccess = dataHeadingColor &&
    (dataHeadingColor[2] === "AA" || dataHeadingColor[2] === "AAA") && (
      <SuccessIcon />
    );
  const bodySmallTextSuccess = dataTextColor &&
    (dataTextColor[1] === "AA" || dataTextColor[1] === "AAA") && (
      <SuccessIcon />
    );
  const bodyLargeTextSuccess = dataTextColor &&
    (dataTextColor[2] === "AA" || dataTextColor[2] === "AAA") && (
      <SuccessIcon />
    );
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

  // For dark mode `ColorCard`s, there are two extra rows.
  if (dataHeadingColor && dataHeadingColor.length > 0) {
    const grayLightCool = "#E9E9E9";
    tableData.push([
      <span key="colorHeading" style={{ color: grayLightCool, padding: 0 }}>
        Heading
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
  if (dataTextColor && dataTextColor.length > 0) {
    const grayMedium = "#BDBDBD";
    tableData.push([
      <span key="colorBody" style={{ color: grayMedium, padding: 0 }}>
        Text
      </span>,
      `${dataTextColor[0]}:1`,
      <>
        {dataTextColor[1]}
        {bodySmallTextSuccess}
      </>,
      <>
        {dataTextColor[2]}
        {bodyLargeTextSuccess}
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
    colorName = "",
    colorSource,
    dataBlackColor = ["--", "--", "--"],
    dataHeadingColor,
    dataTextColor,
    dataWhiteColor = ["--", "--", "--"],
    textColor = "ui.white",
  } = props;
  const cssVarName = `--nypl-colors-${colorName.replace(/\./g, "-")}`;
  const border =
    backgroundColor === "ui.white"
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
              Base: {colorSource}
            </Text>
          )}
        </Box>
        <DataTable
          dataBlackColor={dataBlackColor}
          dataHeadingColor={dataHeadingColor}
          dataTextColor={dataTextColor}
          dataWhiteColor={dataWhiteColor}
          textColor={textColor}
        />
      </SimpleGrid>
    </Box>
  );
};

export default ColorCard;
