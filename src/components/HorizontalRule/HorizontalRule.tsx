// HorizontalRule
import * as React from "react";
import bem from "../../utils/bem";

export interface HorizontalRuleProps {
  /** Optional alignment value to align the horizontal rule to one side or the other when the width is less than 100%. Possible options are `left` and `right`. If omitted, the horizobntal rule will have a default center alignment. */
  align?: string;
  /** Additional attributes passed to the horizontal rule */
  attributes?: { [key: string]: any };
  /** ClassName you can add in addition to `horizontal-rule` */
  className?: string;
  /** Optional height value.  This value should be entered with the same formatting as a CSS height attribute (ex. `2%`, `5px`, `1.5rem`).  If omitted, the horizobntal rule will have a default height of 2px. */
  height?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional width value.  This value should be entered with the same formatting as a CSS width attribute (ex. `50%`, `640px`, `20rem`).  If omitted, the horizobntal rule will have a default width of 100%. */
  width?: string;
}

export default function HorizontalRule(
  props: React.ComponentProps<"hr"> & HorizontalRuleProps
) {
  const { align, className } = props;
  const attributes = props.attributes || {};
  const modifiers = props.modifiers ? props.modifiers : [];
  const width = props.width ? props.width : "auto";
  const height = props.height ? props.height : "2px";

  attributes["style"] = {
    width: width,
    height: height,
  };

  if (align) {
    modifiers.push(align);
  }

  return (
    <hr
      className={bem("horizontal-rule", modifiers, "", [className])}
      {...attributes}
    />
  );
}
