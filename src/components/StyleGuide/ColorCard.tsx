import { Box } from "@chakra-ui/react";
import * as React from "react";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import SimpleGrid from "../Grid/SimpleGrid";
import Table from "../Table/Table";
import Text from "../Text/Text";

export interface ColorCardProps {
  /** The backgroundColor of the color card. */
  backgroundColor: string;
  /** The name of a color's javascript theme object. */
  colorName: string;
  /** The name of the color that the current color is based on. */
  colorSource: string;
  /** Contrast and WCAG compliance data related to the color black when used
   * with the current color. */
  dataBlack: string[];
  /** Contrast and WCAG compliance data related to the color white when used
   * with the current color. */
  dataWhite: string[];
  /** The color to use for text in the color card. */
  textColor: string;
}

export interface DataTableProps {
  /** Contrast and WCAG compliance data related to the color black when used
   * with the current color. */
  dataBlack: string[];
  /** Contrast and WCAG compliance data related to the color white when used
   * with the current color. */
  dataWhite: string[];
  /** color to use for text in color card */
  textColor: string;
}

export const DataTable = (props: React.PropsWithChildren<DataTableProps>) => {
  const {
    dataBlack = ["--", "--", "--"],
    dataWhite = ["--", "--", "--"],
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
  const whiteSmallTextSuccess = (dataWhite[1] === "AA" ||
    dataWhite[1] === "AAA") && <SuccessIcon />;
  const whiteLargeTextSuccess = (dataWhite[2] === "AA" ||
    dataWhite[2] === "AAA") && <SuccessIcon />;
  const blackSmallTextSuccess = (dataBlack[1] === "AA" ||
    dataBlack[1] === "AAA") && <SuccessIcon />;
  const blackLargeTextSuccess = (dataBlack[2] === "AA" ||
    dataBlack[2] === "AAA") && <SuccessIcon />;
  const tableData = [
    [
      <span key="colorUiWhite" style={{ color: "white", padding: 0 }}>
        ui.white
      </span>,
      `${dataWhite[0]}:1`,
      <>
        {dataWhite[1]}
        {whiteSmallTextSuccess}
      </>,
      <>
        {dataWhite[2]}
        {whiteLargeTextSuccess}
      </>,
    ],
    [
      <span key="colorUiBlack" style={{ color: "black", padding: 0 }}>
        ui.black
      </span>,
      `${dataBlack[0]}:1`,
      <>
        {dataBlack[1]}
        {blackSmallTextSuccess}
      </>,
      <>
        {dataBlack[2]}
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
    dataBlack = ["--", "--", "--"],
    dataWhite = ["--", "--", "--"],
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
          dataBlack={dataBlack}
          dataWhite={dataWhite}
          textColor={textColor}
        />
      </SimpleGrid>
    </Box>
  );
};

export default ColorCard;
