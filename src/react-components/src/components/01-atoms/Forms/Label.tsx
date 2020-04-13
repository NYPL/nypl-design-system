import * as React from "react";

export interface LabelOptions {
  id: string;
  referenceId?: string;
  labelContent?: JSX.Element;
}

interface LabelProps {
  id: string;

  /** The id of the html element that this Label is describing */
  referenceId: string;
  /** The contents of the label.  An alternative to passing children elements */
  labelContent?: JSX.Element;
}

/** A Label for form inputs.
 * It should never be used alone.
 */
export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const { id, referenceId, labelContent } = props;

  if (!labelContent && !props.children) {
    throw new Error("Label must have content passed as labelText or children.  Got labelText: " + labelContent + " and children: " + props.children);
  }

  let content = labelContent ? labelContent : props.children;
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
