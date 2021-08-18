import * as React from "react";

import bem from "../../utils/bem";

type optReqFlagType = "Required" | "Optional" | "" | undefined;

interface LabelProps {
  /** Additional attributes to pass to the <label> tag */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className that appears in addition to "label" */
  className?: string;
  /** The id of the html element that this `Label` is describing */
  htmlFor?: string;
  /** ID that other components can cross reference for accessibility purposes */
  id?: string;
  /** Modifiers for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Displays "Required" or "Optional" string alongside the label */
  optReqFlag?: optReqFlagType;
}

/**
 * A label for form inputs. It should never be used alone.
 */
export default function Label(props: React.PropsWithChildren<LabelProps>) {
  const {
    attributes,
    blockName,
    children,
    className,
    htmlFor,
    id,
    optReqFlag,
    modifiers = [],
  } = props;
  const baseClass = "label";
  const labelAttributes = {
    className: bem(baseClass, modifiers, blockName, [className]),
    htmlFor,
    id,
  };
  let helperString;

  if (optReqFlag) {
    helperString = (
      <div className={bem("required-helper", [], baseClass)}>{optReqFlag}</div>
    );
  }

  return React.createElement(
    "label",
    labelAttributes,
    attributes,
    children,
    helperString
  );
}
