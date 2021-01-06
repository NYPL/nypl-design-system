import * as React from "react";
import bem from "../../utils/bem";

interface HelperErrorTextProps {
  /** Added prop when HelperText is errored */
  ariaLive?: "polite" | "off" | "assertive";
  /** Added prop when HelperText is errored */
  ariaAtomic?: boolean;
  /** Additional attributes passed to <HelperErrorText> */
  attributes?: { [key: string]: any };

  /** Additional className to add to the helperErrorText */
  className?: string;
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** unique ID for helper */
  id?: string;
  /** Toggles between helper and error styling */
  isError: boolean;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
}

/**
 * Helper or Error text for forms
 */
export default function HelperErrorText(
  props: React.PropsWithChildren<HelperErrorTextProps>
) {
  const {
    attributes,
    id,
    blockName,
    isError,
    ariaLive = "polite",
    ariaAtomic = true,
  } = props;

  const baseClass = "helper-text";
  const modifiers = [];
  let announceAriaLive = false;

  if (isError) {
    modifiers.push("error");
    announceAriaLive = true;
  }

  if (props.modifiers) {
    modifiers.push(...props.modifiers);
  }

  return (
    <div
      id={id}
      className={bem(baseClass, modifiers, blockName)}
      aria-live={announceAriaLive ? ariaLive : "off"}
      aria-atomic={ariaAtomic}
      {...attributes}
    >
      {props.children}
    </div>
  );
}
