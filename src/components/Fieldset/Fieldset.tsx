import React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

interface FieldsetProps {
  /** Additional class name to add. */
  className?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id: string;
  /** Flag to show or hide the text in the `legend` element. False by default. */
  isLegendHidden?: boolean;
  /** Flag to render "Required" in the `legend`. True by default. */
  isRequired?: boolean;
  /** Text to display in the `legend` element. */
  legendText?: string;
  /** Whether or not to display the "(Required)" text in the `legend` text.
   * True by default. */
  showRequiredLabel?: boolean;
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
  showRequiredLabel = true,
}: React.PropsWithChildren<FieldsetProps>) => {
  const styles = useStyleConfig("Fieldset", { isLegendHidden });

  if (!id) {
    console.warn(
      "NYPL Reservoir Fieldset: This component's required `id` prop was not passed."
    );
  }

  return (
    <Box as="fieldset" id={id} __css={styles} className={className}>
      <legend>
        {legendText}
        {showRequiredLabel && isRequired && <span> (Required)</span>}
      </legend>
      {children}
    </Box>
  );
};

export default Fieldset;
