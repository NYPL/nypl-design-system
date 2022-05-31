import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import Heading from "../Heading/Heading";
import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import Text from "../Text/Text";
export interface ComponentWrapperProps {
  /** The UI elements that will be wrapped by this component */
  children: React.ReactNode;
  /** A class name for the `div` parent element. */
  className?: string;
  /** Optional string to set the text for the component's description */
  descriptionText?: string;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: HelperErrorTextType;
  /** Styles that target the helper text. */
  helperTextStyles?: { [key: string]: any };
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** Sets invalid text in the error state. */
  isInvalid?: boolean;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
}

export const ComponentWrapper = chakra(
  (props: React.PropsWithChildren<ComponentWrapperProps>) => {
    const {
      children,
      className,
      descriptionText,
      headingText,
      helperText,
      helperTextStyles = {},
      id,
      invalidText,
      isInvalid = false,
      showHelperInvalidText = true,
      ...rest
    } = props;
    const hasChildren = !!children;
    const styles = useMultiStyleConfig("ComponentWrapper", { hasChildren });
    const footnote = isInvalid ? invalidText : helperText;

    // Note: Typescript warns when there are no children passed and
    // doesn't compile. This is meant to log in non-Typescript apps.
    if (!hasChildren) {
      console.warn("NYPL Reservoir ComponentWrapper: No children were passed.");
    }

    return (
      <Box className={className} id={`${id}-wrapper`} __css={styles} {...rest}>
        {headingText && <Heading id={`${id}-heading`} text={headingText} />}
        {descriptionText && <Text>{descriptionText}</Text>}
        {children}
        {footnote && showHelperInvalidText && (
          <HelperErrorText
            id={`${id}-helperText`}
            isInvalid={isInvalid}
            text={footnote}
            __css={{ ...styles.helperErrorText, ...helperTextStyles }}
          />
        )}
      </Box>
    );
  }
);

export default ComponentWrapper;
