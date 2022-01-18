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
  /** Optional string to set the text for the component's description */
  descriptionText?: string;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: string;
  /** Sets invalid text in the error state. */
  isInvalid?: boolean;
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
    invalidText,
    isInvalid = false,
  } = props;
  const hasChildren = !!children;
  const styles = useMultiStyleConfig("ComponentWrapper", { hasChildren });
  const footNote = isInvalid ? invalidText : helperText;

  // Note: Typescript warns when there are no children passed and
  // doesn't compile. This is meant to log in non-Typescript apps.
  if (!hasChildren) {
    console.warn("`ComponentWrapper` has no children.");
  }

  return (
    <Box __css={styles}>
      {headingText && (
        <Heading
          id={`${id}-heading`}
          level={HeadingLevels.Two}
          text={headingText}
        />
      )}
      {descriptionText && <Text>{descriptionText}</Text>}
      {children}
      {footNote && (
        <Box __css={styles.helperText}>
          <HelperErrorText id={`${id}-helperText`} isInvalid={isInvalid}>
            {footNote}
          </HelperErrorText>
        </Box>
      )}
    </Box>
  );
}

export default ComponentWrapper;
