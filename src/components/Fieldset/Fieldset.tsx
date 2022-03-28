import React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

interface FieldsetProps {
  /** Additional class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Flag to show or hide the text in the `legend` element. False by default. */
  isLegendHidden?: boolean;
  /** Flag to render "Required" or "Optional" in the `legend`.
   * False/"Optional" by default. */
  isRequired?: boolean;
  /** Text to display in the `legend` element. */
  legendText?: string;
  /** Flag to show or hide the "Required"/"Optional" text in the `legend`.
   * True by default. */
  optReqFlag?: boolean;
}

/**
 * A wrapper component that renders a `fieldset` element along with a `legend`
 * element as its first child. Commonly used to wrap form components.
 */
const Fieldset = ({
  children,
  className,
  id,
  isLegendHidden = false,
  isRequired = false,
  legendText,
  optReqFlag = true,
}: React.PropsWithChildren<FieldsetProps>) => {
  const styles = useMultiStyleConfig("Fieldset", {
    isLegendHidden,
    isRequired,
    optReqFlag,
  });
  return (
    <Box as="fieldset" className={className} id={id} __css={styles}>
      <legend>{legendText}</legend>
      {children}
    </Box>
  );
};

export default Fieldset;
