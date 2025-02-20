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
      noSpace
      px="xs"
      py="xxs"
      size="caption"
    >
      <strong>Added:</strong> <code>v{added}</code>
      <br />
      <strong>Latest:</strong> <code>{finalLatest}</code>
    </Text>
  );
};

export default ComponentVersionTable;
