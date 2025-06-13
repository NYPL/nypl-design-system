import { Box, BoxProps, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import Text from "../Text/Text";
import useDSHeading from "../../hooks/useDSHeading";
import { generateComponentId } from "../../utils/utils";

export interface ComponentWrapperProps extends BoxProps {
  /** Optional string to set the text for the component's description */
  descriptionText?: string | JSX.Element;
  /** Optional string value used to set the text for a `Heading` component, or
   * a DS Heading component that can be passed in.
   */
  headingText?: string | JSX.Element;
  /** Optional string to set the text for a `HelperErrorText` component */
  helperText?: HelperErrorTextType;
  /** Styles that target the helper text. */
  helperTextStyles?: { [key: string]: any };
  /** Optional string to populate the `HelperErrorText` for the error state
   * when `isInvalid` is true. */
  invalidText?: HelperErrorTextType;
  /** Sets invalid text in the error state. */
  isInvalid?: boolean;
  /** Offers the ability to hide the helper/invalid text. */
  showHelperInvalidText?: boolean;
}

export const ComponentWrapper: React.FC<React.PropsWithChildren<any>> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<ComponentWrapperProps>>(
    (props, ref?) => {
      const {
        children,
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
      const mainId = generateComponentId("componentWrapper", id);
      const hasChildren = !!children;
      const styles = useMultiStyleConfig("ComponentWrapper", { hasChildren });
      const footnote = isInvalid ? invalidText : helperText;
      const finalHeadingText = useDSHeading({ id: mainId, title: headingText });

      // Note: Typescript warns when there are no children passed and
      // doesn't compile. This is meant to log in non-Typescript apps.
      if (!hasChildren) {
        console.warn(
          "NYPL Reservoir ComponentWrapper: No children were passed."
        );
      }

      return (
        <Box id={mainId} ref={ref} __css={styles} {...rest}>
          {finalHeadingText}
          {descriptionText && <Text>{descriptionText}</Text>}
          {children}
          {footnote && (
            <HelperErrorText
              id={mainId}
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
