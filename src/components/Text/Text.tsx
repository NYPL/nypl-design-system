import * as React from "react";
import { Text as ChakraText, useStyleConfig } from "@chakra-ui/react";
import { TextSizes } from "./TextTypes";
import { getVariant } from "../../utils/utils";

export interface TextProps {
  /** Additional class name to render in the `Text` component. */
  className?: string;
  /** Optional prop used to show bolded text */
  isBold?: boolean;
  /** Optional prop used to show itlicized text */
  isItalic?: boolean;
  /** Optional prop used to remove default spacing */
  noSpace?: boolean;
  /** Optional prop to control the text styling */
  size?: TextSizes;
}

function Text(props: React.PropsWithChildren<TextProps>) {
  const {
    children,
    className = "",
    isBold,
    isItalic,
    noSpace,
    size = TextSizes.Default,
  } = props;
  const variant = getVariant(size, TextSizes, TextSizes.Default);
  const styles = useStyleConfig("Text", {
    variant,
    isBold,
    isItalic,
    noSpace,
  });

  if (!children) {
    console.warn(
      "NYPL Reservoir Text: No children were passed and the `Text` component " +
        "will not render correctly."
    );
  }

  return (
    <ChakraText className={className} sx={styles}>
      {children}
    </ChakraText>
  );
}

export default Text;
