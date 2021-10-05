import * as React from "react";
import { Text as ChakraText, useStyleConfig } from "@chakra-ui/react";
import { TextDisplaySizes } from "./TextTypes";
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
  displaySize?: TextDisplaySizes;
}

function Text(props: React.PropsWithChildren<TextProps>) {
  const {
    children,
    className = "",
    displaySize = TextDisplaySizes.Default,
    isBold,
    isItalic,
    noSpace,
  } = props;

  let variant = getVariant(
    displaySize,
    TextDisplaySizes,
    TextDisplaySizes.Default
  );
  isBold && (variant = `${variant}Bold`);
  isItalic && (variant = `${variant}Italic`);

  const styles = useStyleConfig("Text", { variant });
  const finalClassName = noSpace ? `${className} no-space` : className;

  if (!children) {
    console.warn(
      "The Text component has no children and will not render correctly."
    );
  }

  return (
    <ChakraText className={finalClassName} sx={styles}>
      {children}
    </ChakraText>
  );
}

export default Text;
