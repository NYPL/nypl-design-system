import {
  Text as ChakraText,
  chakra,
  useStyleConfig,
  ChakraComponent,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const textSizesArray = [
  "default",
  "body1",
  "body2",
  "caption",
  "tag",
  "mini",
  "overline1",
  "overline2",
  "subtitle1",
  "subtitle2",
] as const;
export type TextSizes = typeof textSizesArray[number];

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
  /** Optional prop used to explicitly set the ARIA role */
  role?: string;
  /** Optional prop to control the text styling */
  size?: TextSizes;
}

export const Text: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<TextProps> & React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<TextProps>
> = chakra(
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
        role,
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

      // Warnings about the `isBold` prop
      if (isBold && size === "caption") {
        console.warn(
          "NYPL Reservoir Text: The `isBold` prop does not work with caption text."
        );
      }
      if (isBold && (size === "overline1" || size === "overline2")) {
        console.warn(
          "NYPL Reservoir Text: The `isBold` prop does not work with overline text."
        );
      }
      if (isBold && (size === "subtitle1" || size === "subtitle2")) {
        console.warn(
          "NYPL Reservoir Text: The `isBold` prop does not work with subtitle text."
        );
      }
      if (isBold && size === "tag") {
        console.warn(
          "NYPL Reservoir Text: The `isBold` prop does not work with tag text."
        );
      }
      if (isBold && size === "mini") {
        console.warn(
          "NYPL Reservoir Text: The `isBold` prop does not work with mini text."
        );
      }

      // Warnings about combining text case props
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
        <ChakraText
          className={className}
          ref={ref}
          role={role}
          sx={styles}
          {...rest}
        >
          {children}
        </ChakraText>
      );
    }
  )
);

export default Text;
