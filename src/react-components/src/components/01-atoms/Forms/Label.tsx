/* AT-50 Label */
import * as React from "react";
import bem from "../../../utils/bem";

export interface LabelProps {
  id: string;
  referenceId: string;
  labelText?: string;
}

export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const { id, referenceId, labelText } = props;

  if (!labelText && !props.children) {
    throw new Error("Label must have content passed as labelText or children.  Got labelText: " + labelText + " and children: " + props.children);
  }
  let content = labelText ? labelText : props.children;
  let attributes = {
    id: id,
    htmlFor: referenceId
  };
  return React.createElement(
    "label",
    attributes,
    content
  );
}
