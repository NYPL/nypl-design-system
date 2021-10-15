import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

import generateUUID from "../../helpers/generateUUID";

export type AriaLiveValues = "assertive" | "off" | "polite";

interface HelperErrorTextProps {
  /** Aria attribute. When true, assistive technologies will
   * read the entire DOM element. When false, only changes (additionals or
   * removals) will be read. True by default. */
  ariaAtomic?: boolean;
  /** Aria attribute only used in the invalid state to read error text. This
   * indicates the priority of the text and when it should be presented to users
   * using screen readers; "off" indicates that the content should not be presented,
   * "polite" that it will be announced at the next available time slot, and
   * "assertive" that it should be announced immediately. "polite" by default. */
  ariaLive?: AriaLiveValues;
  /** Additional className to add. */
  className?: string;
  /** Unique ID for accessibility purposes. */
  id?: string;
  /** Toggles between helper and invalid styling. */
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
    children,
    className = "",
    id = generateUUID(),
    isInvalid = false,
  } = props;
  // Only announce the text in the invalid state.
  const announceAriaLive = isInvalid;
  const styles = useStyleConfig("HelperErrorText", { isInvalid });

  return (
    <Box
      id={id}
      className={className}
      aria-atomic={ariaAtomic}
      data-isinvalid={isInvalid}
      aria-live={announceAriaLive ? ariaLive : "off"}
      __css={styles}
    >
      {children}
    </Box>
  );
}
