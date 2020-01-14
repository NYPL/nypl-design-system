/* MT-51 Helper and Error text*/
import * as React from "react";
import bem from "../../../utils/bem";

export interface HelperErrorTextProps {
  id: string;
  isError: boolean;
  modifiers?: string[];
  blockName?: string;
  baseClass?: string;
}

export default function HelperErrorText(props: React.PropsWithChildren<HelperErrorTextProps>) {
  const { id, blockName = "input-description", baseClass = "form-item", isError, ...rest } = props;
  let modifiers = [];

  if (!props.children) {
    throw new Error("Helper and Error Text must have content, or else it should not be used");
  }

  if (isError) {
    modifiers.push("error");
  }
  if (props.modifiers) {
    modifiers.push(...props.modifiers);
  }
  return <span id={id} className={bem(blockName, modifiers, baseClass)} {...rest}>{props.children}</span>;
}
