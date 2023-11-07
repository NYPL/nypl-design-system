import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import useDSHeading from "../../hooks/useDSHeading";

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
  descriptionText?: string | JSX.Element;
  /** Optional string to set the text for a `Heading` component */
  headingText?: string | JSX.Element;
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
  forwardRef<HTMLDivElement, React.PropsWithChildren<ComponentWrapperProps>>(
    (props, ref?) => {
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
      const finalHeadingText = useDSHeading({ id, title: headingText });

      // Note: Typescript warns when there are no children passed and
      // doesn't compile. This is meant to log in non-Typescript apps.
      if (!hasChildren) {
        console.warn(
          "NYPL Reservoir ComponentWrapper: No children were passed."
        );
      }

      return (
        <Box
          className={className}
          id={`${id}-wrapper`}
          ref={ref}
          __css={styles}
          {...rest}
        >
          {finalHeadingText}
          {descriptionText && <Text>{descriptionText}</Text>}
          {children}
          {footnote && (
            <HelperErrorText
              id={`${id}-helperText`}
              isInvalid={isInvalid}
              isRenderedText={showHelperInvalidText}
              text={footnote}
              __css={{ ...styles.helperErrorText, ...helperTextStyles }}
            />
          )}
        </Box>
      );
    }
  )
);

export default ComponentWrapper;
