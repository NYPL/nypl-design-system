import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Text from "../Text/Text";

export interface StatusBadgeProps {
  /** Optional string to set the text for a video description */
  descriptionText?: string;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: string;
}

function ComponentWrapper(props: React.PropsWithChildren<StatusBadgeProps>) {
  const { children, descriptionText, headingText, helperText } = props;
  const hasChildren = children ? true : false;
  const styles = useMultiStyleConfig("ComponentWrapper", { hasChildren });

  if (!children) {
    console.warn("Component Wrapper has no children.");
  }

  return (
    <Box __css={styles}>
      <>
        {headingText && (
          <Heading level={HeadingLevels.Two} text={headingText} />
        )}
        {descriptionText && <Text>{descriptionText}</Text>}
        {children}
        {helperText && (
          <Box __css={styles.helperText}>
            <HelperErrorText isInvalid={false}>{helperText}</HelperErrorText>
          </Box>
        )}
      </>
    </Box>
  );
}

export default ComponentWrapper;
