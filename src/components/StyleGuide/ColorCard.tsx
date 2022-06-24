import { Box } from "@chakra-ui/react";
import * as React from "react";

import Heading from "../Heading/Heading";
import Icon from "../Icons/Icon";
import SimpleGrid from "../Grid/SimpleGrid";
import Text from "../Text/Text";

export interface ColorCardProps {
  /** backgroundColor of the color card */
  backgroundColor: string;
  /** name of the javascript theme object */
  colorName: string;
  /** data related to black against current color */
  dataBlack: string[];
  /** data related to white against current color */
  dataWhite: string[];
  /** color to use for text in color card */
  textColor: string;
}

export interface DataTableProps {
  /** data related to black against current color */
  dataBlack: string[];
  /** data related to white against current color */
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
  const border: string = `1px solid`;
  const SuccessIcon = () => (
    <Icon
      color={textColor}
      decorative
      marginLeft="xxs"
      name="check"
      size="medium"
      type="default"
    />
  );
  return (
    <Box color={textColor}>
      <SimpleGrid
        columns={4}
        borderBottom={border}
        borderColor={textColor}
        py="xxs"
      >
        <Text noSpace> </Text>
        <Text noSpace> </Text>
        <Text fontWeight="medium" noSpace>
          16px
        </Text>
        <Text fontWeight="medium" noSpace>
          36px
        </Text>
      </SimpleGrid>
      <SimpleGrid columns={4} borderBottom={border} py="xxs">
        <Text color="ui.white" noSpace fontWeight="medium" paddingLeft="xs">
          ui.white
        </Text>
        {/* contrast ratio */}
        <Text noSpace fontWeight="medium">
          {dataWhite[0]}:1
        </Text>
        {/* small text compliance */}
        <Text noSpace alignItems="center" display="flex" fontWeight="medium">
          {dataWhite[1]}
          {(dataWhite[1] === "AA" || dataWhite[1] === "AAA") && <SuccessIcon />}
        </Text>
        {/* large text compliance */}
        <Text noSpace alignItems="center" display="flex" fontWeight="medium">
          {dataWhite[2]}
          {(dataWhite[2] === "AA" || dataWhite[2] === "AAA") && <SuccessIcon />}
        </Text>
      </SimpleGrid>
      <SimpleGrid columns={4} py="xxs">
        <Text color="black" noSpace fontWeight="medium" paddingLeft="xs">
          ui.black
        </Text>
        {/* contrast ratio */}
        <Text noSpace fontWeight="medium">
          {dataBlack[0]}:1
        </Text>
        {/* small text compliance */}
        <Text noSpace alignItems="center" display="flex" fontWeight="medium">
          {dataBlack[1]}
          {(dataBlack[1] === "AA" || dataBlack[1] === "AAA") && <SuccessIcon />}
        </Text>
        {/* large text compliance */}
        <Text noSpace alignItems="center" display="flex" fontWeight="medium">
          {dataBlack[2]}
          {(dataBlack[2] === "AA" || dataBlack[2] === "AAA") && <SuccessIcon />}
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export const ColorCard = (props: React.PropsWithChildren<ColorCardProps>) => {
  const {
    backgroundColor,
    colorName = "",
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
    <Box bg={backgroundColor} color={textColor} px="m" py="s" border={border}>
      <SimpleGrid columns={2}>
        <Box>
          <Heading noSpace size="tertiary">
            {backgroundColor}
          </Heading>
          <Text fontWeight="medium" noSpace size="tag">
            {cssVarName}
          </Text>
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
