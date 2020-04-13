import * as React from "react";

export interface LabelOptions {
  labelContent?: JSX.Element;

  id: string;
  referenceId?: string;
}

interface LabelProps {
  id: string;

  /** The id of the html element that this Label is describing */
  referenceId: string;
}

/** A Label for form inputs.
 * It should never be used alone.
 */
export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const { id, referenceId } = props;

  let attributes = {
    id: id,
    htmlFor: referenceId
  };
  return React.createElement(
    "label",
    attributes,
    props.children
  );
}
