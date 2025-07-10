import { Box } from "@chakra-ui/react";
import Text from "../../components/Text/Text";

export interface ComponentVersionTableProps {
  /** The DS version when the component was added*/
  added: string;
  /** The DS version with the most recent version of the component */
  latest: string;
}

export const ComponentVersionTable = (props: ComponentVersionTableProps) => {
  const { added, latest } = props;
  const finalLatest = latest !== "Prerelease" ? `v${latest}` : latest;

  return (
    <Text
      bg="ui.bg.default"
      border="1px solid"
      borderColor="ui.border.default"
      borderRadius="4px"
      height="fit-content"
      px="s"
      py="xs"
      size="caption"
      width={{ base: "100%", md: "fit-content" }}
    >
      <Box as="span" display="block" fontSize="12px !important" mb="xxs">
        <strong>Added:</strong> v{added}
      </Box>
      <Box as="span" display="block" fontSize="12px !important">
        <strong>Latest:</strong> {finalLatest}
      </Box>
    </Text>
  );
};

export default ComponentVersionTable;
