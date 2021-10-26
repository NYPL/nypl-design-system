import * as React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import generateUUID from "../../helpers/generateUUID";
import Heading from "../Heading/Heading";
import { HeadingLevels } from "../Heading/HeadingTypes";
import HelperErrorText from "../HelperErrorText/HelperErrorText";
import Text from "../Text/Text";

export interface ComponentWrapperProps {
  /** The UI elements that will be wrapped by this component */
  children: React.ReactNode;
  /** Optional string to set the text for a video description */
  descriptionText?: string;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
}

function ComponentWrapper(
  props: React.PropsWithChildren<ComponentWrapperProps>
) {
  const {
    children,
    descriptionText,
    headingText,
    helperText,
    id = generateUUID(),
  } = props;
  const hasChildren = !!children;
  const styles = useMultiStyleConfig("ComponentWrapper", { hasChildren });

  if (!hasChildren) {
    console.warn("Component Wrapper has no children.");
  }

  return (
    <Box __css={styles}>
      <>
        {headingText && (
          <Heading
            id={`${id}-heading`}
            level={HeadingLevels.Two}
            text={headingText}
          />
        )}
        {descriptionText && <Text>{descriptionText}</Text>}
        {children}
        {helperText && (
          <Box __css={styles.helperText}>
            <HelperErrorText id={`${id}-helperText`} isInvalid={false}>
              {helperText}
            </HelperErrorText>
          </Box>
        )}
      </>
    </Box>
  );
}

export default ComponentWrapper;
