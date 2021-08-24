import * as React from "react";
import bem from "../../utils/bem";
import generateUUID from "../../helpers/generateUUID";
import { FormSpacing } from "./FormTypes";

export interface FormProps {
  /** Optional form `action` attribute */
  action?: string;
  /** Optional additional attributes passed to the `<form>` element */
  attributes?: { [key: string]: any };
  /** Optional className you can add in addition to `form` */
  className?: string;
  /** Optional ID that other components can cross reference */
  id?: string;
  /** Optional form `method` attribute */
  method?: "get" | "post";
  /** Optional modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Optional spacing size; if omitted, the default `large` (2rem / 32px) spacing will be used; ```IMPORTANT: for general form layout, this prop should not be used``` */
  spacing?: FormSpacing;
}

// FormRow child-component
export function FormRow(props) {
  const { children, className } = props;
  return <div className={bem("form-row", [], "", [className])}>{children}</div>;
}

// FormField child-component
export function FormField(props) {
  const { children, className } = props;
  return (
    <div className={bem("form-field", [], "", [className])}>{children}</div>
  );
}

export default function Form(props: React.ComponentProps<"form"> & FormProps) {
  const {
    action,
    attributes = {},
    children,
    className,
    id = generateUUID(),
    method,
    modifiers = [],
    spacing,
  } = props;

  action && (attributes["action"] = action);

  method &&
    (method === "get" || method === "post") &&
    (attributes["method"] = method);

  spacing && modifiers.push(`spacing-${spacing}`);

  return (
    <form
      className={bem("form", modifiers, "", [className])}
      id={id}
      {...attributes}
    >
      {children}
    </form>
  );
}
