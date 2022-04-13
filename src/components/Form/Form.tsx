import * as React from "react";

import { FormGaps } from "./FormTypes";
import SimpleGrid from "../Grid/SimpleGrid";

interface FormBaseProps {
  /** className to be applied to FormRow, FormField, and Form */
  className?: string;
  /** Optional spacing size; if omitted, the default `large` (2rem / 32px)
   * spacing will be used; ```IMPORTANT: for general form layout, this prop
   * should not be used``` */
  gap?: FormGaps;
  /** ID that other components can cross reference (internal use) */
  id: string;
}

export interface FormChildProps extends Partial<FormBaseProps> {}

export interface FormProps extends FormBaseProps {
  /** Optional form `action` attribute */
  action?: string;
  /** Optional form `method` attribute */
  method?: "get" | "post";
  /** Function to call for the `onSubmit` form event. */
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

/** FormRow child-component */
export function FormRow(props: React.PropsWithChildren<FormChildProps>) {
  const { children, className, gap, id } = props;
  const count = React.Children.count(children);

  const alteredChildren = React.Children.map(
    children as JSX.Element,
    (child: React.ReactElement, i) => {
      if (!child) return null;
      if (child.type === FormField || child.props.mdxType === "FormField") {
        return React.cloneElement(child, { id: `${id}-grandchild${i}` });
      }
      console.warn(
        "NYPL Reservoir FormRow: Children must be `FormField` components."
      );
      return null;
    }
  );
  return (
    <SimpleGrid columns={count} className={className} gap={gap} id={id}>
      {alteredChildren}
    </SimpleGrid>
  );
}

/** FormField child-component */
export function FormField(props: React.PropsWithChildren<FormChildProps>) {
  const { children, className, gap, id } = props;
  return (
    <SimpleGrid columns={1} className={className} gap={gap} id={id}>
      {children}
    </SimpleGrid>
  );
}

/** Main Form component */
export default function Form(props: React.PropsWithChildren<FormProps>) {
  const {
    action,
    children,
    className,
    gap = FormGaps.Large,
    id,
    method,
    onSubmit,
  } = props;
  const attributes: Partial<FormProps> = {};

  if (!id) {
    console.warn(
      "NYPL Reservoir Form: This component's required `id` prop was not passed."
    );
  }

  action && (attributes["action"] = action);

  method &&
    (method === "get" || method === "post") &&
    (attributes["method"] = method);

  const alteredChildren = React.Children.map(
    children as JSX.Element,
    (child: React.ReactElement, i) => {
      return React.cloneElement(child, { gap, id: `${id}-child${i}` });
    }
  );

  return (
    <form
      aria-label="form"
      className={className}
      id={id}
      onSubmit={onSubmit}
      {...attributes}
    >
      <SimpleGrid columns={1} gap={gap} id={`${id}-parent`}>
        {alteredChildren}
      </SimpleGrid>
    </form>
  );
}
