/* AT-50 Label */
import * as React from "react";
import bem from "../../../utils/bem";

export interface LabelProps {
  referenceId: string;
  labelText?: string;
}

export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const { referenceId, labelText } = props;
  if (!labelText && !this.props.children) {
    throw new Error("Label must have content passed as labelText or children.  Got labelText: " + labelText + " and children: " + this.props.children);
  }
  else {
    let content = labelText ? labelText : props.children;
    let attributes = {
      htmlFor: referenceId
    };
    return React.createElement(
      "label",
      { attributes },
      content
    );
  }
}
