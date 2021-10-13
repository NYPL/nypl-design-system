import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";

interface HelperErrorTextProps {
  /** Added prop when HelperText is errored */
  ariaAtomic?: boolean;
  /** Added prop when HelperText is errored */
  ariaLive?: "polite" | "off" | "assertive";
  /** Additional className to add to the helperErrorText */
  className?: string;
  /** unique ID for helper */
  id?: string;
  /** Toggles between helper and error styling */
  isInvalid?: boolean;
}

/**
 * Helper or Error text for forms
 */
export default function HelperErrorText(
  props: React.PropsWithChildren<HelperErrorTextProps>
) {
  const {
    ariaAtomic = true,
    ariaLive = "polite",
    className,
    id = generateUUID(),
    isInvalid = false,
  } = props;
  const announceAriaLive = isInvalid;
  const styles = useStyleConfig("HelperErrorText", { isInvalid });

  return (
    <Box
      id={id}
      className={className}
      aria-atomic={ariaAtomic}
      aria-live={announceAriaLive ? ariaLive : "off"}
      __css={styles}
    >
      {props.children}
    </Box>
  );
}
