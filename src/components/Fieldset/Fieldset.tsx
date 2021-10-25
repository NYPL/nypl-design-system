import React from "react";
import { Box, useMultiStyleConfig } from "@chakra-ui/react";

const Fieldset: React.FC<any> = ({
  children,
  className,
  id,
  isLegendHidden = false,
  isRequired = false,
  legendText,
  optReqFlag = true,
}) => {
  const styles = useMultiStyleConfig("Fieldset", { isLegendHidden });
  return (
    <Box as="fieldset" id={id} __css={styles} className={className}>
      <legend>
        {legendText}
        {optReqFlag && (
          <Box __css={styles.helper}>
            {isRequired ? "Required" : "Optional"}
          </Box>
        )}
      </legend>
      {children}
    </Box>
  );
};

export default Fieldset;
