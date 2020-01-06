/* MT-51 Helper and Error text*/
import * as React from "react";
import bem from "../../../utils/bem";

export interface HelperErrorTextProps {
  id: string;
  isError: boolean;
  modifiers?: string[];
  blockName?: string;
  baseClass?: string;
  attributes?: {};
}

export default function HelperErrorText(props: React.PropsWithChildren<HelperErrorTextProps>) {
  const { id, isError, attributes } = props;
  let blockName = props.blockName ? props.blockName : "input-description";
  let baseClass = props.baseClass ? props.baseClass : "form-item";
  let modifiers = [];
  if (isError) {
    modifiers.push("error");
  }
  if (props.modifiers) {
    modifiers.push(...props.modifiers);
  }

  if (!props.children) {
    throw new Error("Helper and Error Text must have content, or else it should not be used");
  }

  return <span id={id} className={bem(blockName, modifiers, baseClass)} {...attributes}>{props.children}</span>;
}
