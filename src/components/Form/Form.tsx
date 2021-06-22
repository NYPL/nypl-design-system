// HorizontalRule
import * as React from "react";
import bem from "../../utils/bem";

export interface FormProps {
  /** Additional attributes passed to the horizontal rule */
  attributes?: { [key: string]: any };
  /** ClassName you can add in addition to `horizontal-rule` */
  className?: string;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
}

export function FormRow({ className, children }) {
  return <div className={bem("form-row", [], "", [className])}>{children}</div>;
}

export function FormField({ className, children }) {
  return (
    <div className={bem("form-field", [], "", [className])}>{children}</div>
  );
}

export default function Form(props: React.ComponentProps<"form"> & FormProps) {
  const { attributes = {}, children, className, modifiers = [] } = props;

  return (
    <form className={bem("form", modifiers, "", [className])} {...attributes}>
      {children}
    </form>
  );
}
