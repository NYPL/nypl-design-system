import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  ChakraProps,
} from "@chakra-ui/react";
import React, { FormHTMLAttributes, forwardRef } from "react";

import SimpleGrid, { GridGaps } from "../Grid/SimpleGrid";
import { useSafeId } from "../../hooks/useSafeId";

interface FormBaseProps
  extends Pick<BoxProps, "id" | "className" | keyof ChakraProps> {
  /** Optional spacing size; if omitted, the default `large` (2rem / 32px)
   * spacing will be used; ```IMPORTANT: for general form layout, this prop
   * should not be used``` */
  gap?: GridGaps;
}

export interface FormChildProps extends Partial<FormBaseProps> {}

export interface FormProps
  extends FormBaseProps,
    Omit<FormHTMLAttributes<HTMLFormElement>, "color"> {}

/** FormRow child-component */
export const FormRow: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormChildProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FormChildProps
> = chakra((props: React.PropsWithChildren<FormChildProps>) => {
  const { children, gap, id, ...rest } = props;
  const count = React.Children.count(children);
  const alteredChildren = React.Children.map(
    children as JSX.Element,
    (child: React.ReactElement, i) => {
      if (!child) return null;
      if (child.type === FormField || child.props.mdxType === "FormField") {
        return React.cloneElement(child, { id: `${id}-grandchild${i}` });
      }
      return null;
    }
  );
  return (
    <SimpleGrid columns={count} gap={gap} id={id} {...rest}>
      {alteredChildren}
    </SimpleGrid>
  );
});

/** FormField child-component */
export const FormField: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormChildProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FormChildProps
> = chakra((props: React.PropsWithChildren<FormChildProps>) => {
  const { children, gap, id, ...rest } = props;
  return (
    <SimpleGrid columns={1} gap={gap} id={id} {...rest}>
      {children}
    </SimpleGrid>
  );
});

/**
 * The `Form` component renders a standard `<form>` element and should be used
 * to handle layout and spacing for child input fields. `FormRow` and `FormField`
 * components should be used to build the `<form>` structure and to arrange input
 * fields as needed.
 */
export const Form: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormProps> &
      React.RefAttributes<HTMLDivElement & HTMLFormElement>
  >,
  React.PropsWithChildren<FormProps>
> = chakra(
  forwardRef<
    HTMLDivElement & HTMLFormElement,
    React.PropsWithChildren<FormProps>
  >((props, ref?) => {
    const {
      action,
      children,
      gap = "grid.l",
      id,
      method,
      onSubmit,
      ...rest
    } = props;
    const mainId = useSafeId(id);
    const attributes: Partial<FormProps> = {};
    action && (attributes["action"] = action);

    method &&
      (method === "get" || method === "post") &&
      (attributes["method"] = method);

    const alteredChildren = React.Children.map(
      children as JSX.Element,
      (child: React.ReactElement, i) => {
        return (
          child && React.cloneElement(child, { gap, id: `${mainId}-child${i}` })
        );
      }
    );

    return (
      <Box
        as="form"
        data-testid="ds-form"
        id={mainId}
        onSubmit={onSubmit}
        ref={ref}
        {...attributes}
        {...rest}
      >
        <SimpleGrid columns={1} gap={gap} id={`${mainId}-parent`}>
          {alteredChildren}
        </SimpleGrid>
      </Box>
    );
  }),
  { shouldForwardProp: () => true }
);

export default Form;
