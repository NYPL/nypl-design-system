import * as React from "react";
import bem from "../../utils/bem";

export interface LabelOptions {
  labelContent?: JSX.Element;
  id?: string;
  htmlFor?: string;
}

interface LabelProps {
  /** Additional attributes to pass to the <label> tag */
  attributes?: { [key: string]: any };

  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className that appears in addition to "label" */
  className?: string;
  /** The id of the html element that this Label is describing */
  htmlFor?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Displays "Required" or "Optional" string alongside label */
  optReqFlag?: string;
}

/** A Label for form inputs.
 * It should never be used alone.
 */
export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const {
    attributes,
    blockName,
    className,
    htmlFor,
    id,
    modifiers = [],
    optReqFlag,
  } = props;

  const baseClass = "label";
  let helperString;

  if (optReqFlag) {
    helperString = (
      <div className={bem("required-helper", [], baseClass)}>{optReqFlag}</div>
    );
  }

  const labelAttributes = {
    id: id,
    htmlFor: htmlFor,
    className: bem(baseClass, modifiers, blockName, [className]),
  };
  return React.createElement(
    "label",
    labelAttributes,
    attributes,
    props.children,
    helperString
  );
}
