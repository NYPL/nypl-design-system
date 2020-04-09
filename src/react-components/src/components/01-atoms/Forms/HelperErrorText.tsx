/* MT-51 Helper and Error text*/
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
  /** Used for BEM css convention. */
  modifiers?: string[];
  /** Used for BEM css convention. */
  blockName?: string;
  /** Used for BEM css convention. */
  baseClass?: string;
}

export default function HelperErrorText(props: React.PropsWithChildren<HelperErrorTextProps>) {
  const { id, blockName = "input-description", baseClass = "form-item", isError } = props;
  let modifiers = [];

  if (isError) {
    modifiers.push("error");
  }
  if (props.modifiers) {
    modifiers.push(...props.modifiers);
  }
  return <span id={id} className={bem(blockName, modifiers, baseClass)}>{props.children}</span>;
}
