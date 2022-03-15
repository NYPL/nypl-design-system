import { Text as ChakraText, chakra, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import { TextDisplaySizes } from "./TextTypes";
import { getVariant } from "../../utils/utils";

export interface TextProps {
  /** Additional class name to render in the `Text` component. */
  className?: string;
  /** Optional prop to control the text styling */
  displaySize?: TextDisplaySizes;
  /** Optional prop used to show bolded text */
  isBold?: boolean;
  /** Optional prop used to show itlicized text */
  isItalic?: boolean;
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
}

export const Text = chakra((props: React.PropsWithChildren<TextProps>) => {
  const {
    children,
    className = "",
    displaySize = TextDisplaySizes.Default,
    isBold,
    isItalic,
    noSpace,
    ...rest
  } = props;

  let variant = getVariant(
    displaySize,
    TextDisplaySizes,
    TextDisplaySizes.Default
  );

  const styles = useStyleConfig("Text", {
    variant,
    isBold,
    isItalic,
    noSpace,
  });

  if (!children) {
    console.warn(
      "The Text component has no children and will not render correctly."
    );
  }

  return (
    <ChakraText className={className} sx={styles} {...rest}>
      {children}
    </ChakraText>
  );
});

export default Text;
