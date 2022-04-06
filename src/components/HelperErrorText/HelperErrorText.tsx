import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export type AriaLiveValues = "assertive" | "off" | "polite";
export type HelperErrorTextType = string | JSX.Element;

interface HelperErrorTextProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
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
  /** The text to display. */
  text: HelperErrorTextType;
}

/**
 * Helper or Error text for forms
 */
export default function HelperErrorText({
  additionalStyles = {},
  ariaAtomic = true,
  ariaLive = "polite",
  className = "",
  id,
  isInvalid = false,
  text,
}: HelperErrorTextProps) {
  // Only announce the text in the invalid state.
  const announceAriaLive = isInvalid;
  const styles = useStyleConfig("HelperErrorText", { isInvalid });
  const finalStyles = { ...styles, ...additionalStyles };
  const props = {
    "aria-atomic": ariaAtomic,
    "aria-live": announceAriaLive ? ariaLive : "off",
    className,
    "data-isinvalid": isInvalid,
    id,
    __css: finalStyles,
  };
  return typeof text === "string" ? (
    <Box {...props} dangerouslySetInnerHTML={{ __html: text }} />
  ) : (
    <Box {...props}>{text}</Box>
  );
}
