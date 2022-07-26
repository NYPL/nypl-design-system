import { Text as ChakraText, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type TextSizes = "default" | "caption" | "tag" | "mini";

export interface TextProps {
  /** Additional class name to render in the `Text` component. */
  className?: string;
  /** Optional prop used to show bolded text */
  isBold?: boolean;
  /** Optional prop used to show itlicized text */
  isItalic?: boolean;
  /** Optional prop used to show capitalized text */
  isCapitalized?: boolean;
  /** Optional prop used to show upper case text */
  isUppercase?: boolean;
  /** Optional prop used to show lower case text */
  isLowercase?: boolean;
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
  /** Optional prop to control the text styling */
  size?: TextSizes;
}

export const Text = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<TextProps>>(
    (props, ref?) => {
      const {
        children,
        className = "",
        isBold,
        isItalic,
        isCapitalized,
        isUppercase,
        isLowercase,
        noSpace,
        size = "default",
        ...rest
      } = props;
      const styles = useStyleConfig("Text", {
        variant: size,
        isBold,
        isItalic,
        isCapitalized,
        isUppercase,
        isLowercase,
        noSpace,
      });

      if (!children) {
        console.warn(
          "NYPL Reservoir Text: No children were passed and the `Text` component " +
            "will not render correctly."
        );
      }

      let textCase = 0;
      if (isCapitalized) {
        textCase++;
      }
      if (isUppercase) {
        textCase++;
      }
      if (isLowercase) {
        textCase++;
      }

      if (textCase > 1) {
        console.warn(
          "NYPL Reservoir Text: Multiple text case props have been passed " +
            "and the component will not render properly."
        );
      }

      return (
        <ChakraText className={className} ref={ref} sx={styles} {...rest}>
          {children}
        </ChakraText>
      );
    }
  )
);

export default Text;
