import Text from "../../components/Text/Text";

export interface ComponentVersionProps {
  /** The DS version when the component was added*/
  added: string;
  /** The DS version with the most recent version of the component */
  latest: string;
}

export const ComponentVersion = (props: ComponentVersionProps) => {
  const { added, latest } = props;
  const finalLatest = latest !== "Prerelease" ? `v${latest}` : latest;

  return (
    <Text
      bg="var(--nypl-colors-ui-gray-xx-light-cool)"
      border="1px solid"
      borderColor="var(--nypl-colors-ui-gray-semi-medium)"
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

export default ComponentVersion;
