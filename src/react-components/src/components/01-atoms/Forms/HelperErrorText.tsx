import * as React from "react";
import bem from "../../../utils/bem";

export interface HelperErrorTextOptions {
  content?: JSX.Element;

  id?: string;
  isError?: boolean;
  modifiers?: string[];
  blockName?: string;
  baseClass?: string;
}

interface HelperErrorTextProps {
  /** unique ID for helper */
  id: string;
  /** Toggles between helper and error styling */
  isError: boolean;
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional blockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** Optional baseClass for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  baseClass?: string;
}

/**
 * Helper or Error text for forms
 */
export default function HelperErrorText(props: React.PropsWithChildren<HelperErrorTextProps>) {
  const { id, blockName = "input-description", baseClass = "form-item", isError } = props;
  let modifiers = [];

  if (isError) {
    modifiers.push("error");
  }
  if (props.modifiers) {
    modifiers.push(...props.modifiers);
  }
  return <div id={id} className={bem(blockName, modifiers, baseClass)}>{props.children}</div>;
}
