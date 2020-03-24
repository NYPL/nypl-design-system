/* MT-51 Helper and Error text*/
import * as React from "react";
import bem from "../../../utils/bem";
import { findFirst } from "../../../helpers/util/Utils";

export interface HelperErrorTextOptions {
  id?: string;
  isError?: boolean;
  content?: JSX.Element;
  modifiers?: string[];
  blockName?: string;
  baseClass?: string;
}

interface HelperErrorTextProps {
  id: string;
  isError: boolean;
  content?: JSX.Element;
  modifiers?: string[];
  blockName?: string;
  baseClass?: string;
}

export default function HelperErrorText(props: React.PropsWithChildren<HelperErrorTextProps>) {
  const { id, blockName = "input-description", baseClass = "form-item", isError, content } = props;
  let modifiers = [];

  let child = findFirst(content, props.children);
  if (!child) {
    throw new Error("Helper and Error Text must have content or children, or else it should not be used");
  }

  if (isError) {
    modifiers.push("error");
  }
  if (props.modifiers) {
    modifiers.push(...props.modifiers);
  }
  return <span id={id} className={bem(blockName, modifiers, baseClass)}>{child}</span>;
}
