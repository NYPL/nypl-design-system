import { Box, BoxProps, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import useDSHeading from "../../hooks/useDSHeading";

import HelperErrorText, {
  HelperErrorTextType,
} from "../HelperErrorText/HelperErrorText";
import Text from "../Text/Text";
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
      // ComponentWrapper does not use the `useSafeId` hook since
      // it is used as a wrapper component.
      const mainId = id ? `${id}-componentWrapper` : undefined;
      const helperErrorTextId = id ? `${id}-helperErrorText` : undefined;
      const footnote = isInvalid ? invalidText : helperText;
      const styles = useMultiStyleConfig("ComponentWrapper", { hasHelperText: !!footnote });
      const finalHeadingText = useDSHeading({
        id,
        title: headingText,
        additionalStyles: {
          mb: "heading.default",
        },
      });

      return (
        <Box
          data-testid="ds-componentWrapper"
          id={mainId}
          ref={ref}
          __css={styles}
          {...rest}
        >
          {finalHeadingText}
          {descriptionText && (
            <Text mb="paragraph.default">{descriptionText}</Text>
          )}
          {children}
          <HelperErrorText
            id={helperErrorTextId}
            isInvalid={isInvalid}
            isRenderedText={showHelperInvalidText}
            text={footnote}
            __css={{ ...styles.helperErrorText, ...helperTextStyles }}
          />
        </Box>
      );
    }
  )
);

export default ComponentWrapper;
