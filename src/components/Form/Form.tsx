// HorizontalRule
import * as React from "react";
import bem from "../../utils/bem";
import generateUUID from "../../helpers/generateUUID";

export interface FormProps {
  /** Optional additional attributes passed to the `<form>` element */
  attributes?: { [key: string]: any };
  /** Optional className you can add in addition to `form` */
  className?: string;
  /** Optional ID that other components can cross reference */
  id?: string;
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
}

// FormRow child-component
export function FormRow({ className, children }) {
  return <div className={bem("form-row", [], "", [className])}>{children}</div>;
}

// FormField child-component
export function FormField({ className, children }) {
  return (
    <div className={bem("form-field", [], "", [className])}>{children}</div>
  );
}

export default function Form(props: React.ComponentProps<"form"> & FormProps) {
  const { attributes = {}, children, className, id, modifiers = [] } = props;

  const formID = id || generateUUID();

  return (
    <form
      className={bem("form", modifiers, "", [className])}
      id={formID}
      {...attributes}
    >
      {children}
    </form>
  );
}
