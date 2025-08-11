import { Box } from "@chakra-ui/react";
import ComponentVersionTable from "./ComponentVersionTable";
import Heading from "../../components/Heading/Heading";

export interface ComponentDocsHeaderProps {
  /** The component's DS category */
  category: string;
  /** The name of the component */
  componentName: string;
  /** A brief summary of the component */
  summary?: string;
  /** The DS version when the component was added */
  versionAdded?: string;
  /** The DS version with the most recent version of the component */
  versionLatest?: string;
}

export const ComponentDocsHeader = ({
  category,
  componentName,
  summary,
  versionAdded,
  versionLatest,
}: ComponentDocsHeaderProps) => {
  return (
    <Box
      display={{ base: "block", sm: "grid" }}
      gap="s"
      gridTemplateColumns="3fr 1fr"
    >
      {
        <Heading
          level="h1"
          overline={category}
          size="display1"
          subtitle={summary ? summary : ""}
        >
          {componentName}
        </Heading>
      }
      {versionAdded && versionLatest && (
        <Box display="flex" justifyContent={{ base: undefined, md: "right" }}>
          <ComponentVersionTable added={versionAdded} latest={versionLatest} />
        </Box>
      )}
    </Box>
  );
};

export default ComponentDocsHeader;
