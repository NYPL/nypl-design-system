import { Box, chakra, ChakraComponent } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import SimpleGrid, { GridGaps } from "../Grid/SimpleGrid";

interface FormBaseProps {
  /** className to be applied to FormRow, FormField, and Form */
  className?: string;
  /** Optional spacing size; if omitted, the default `large` (2rem / 32px)
   * spacing will be used; ```IMPORTANT: for general form layout, this prop
   * should not be used``` */
  gap?: GridGaps;
  /** ID that other components can cross reference (internal use) */
  id: string;
}

export interface FormChildProps extends Partial<FormBaseProps> {}

export interface FormProps
  extends FormBaseProps,
    Omit<React.FormHTMLAttributes<HTMLFormElement>, "id"> {
  /** Function to call for the `onSubmit` form event. */
  onSubmit?: (e: React.FormEvent<any>) => void;
}

/** FormRow child-component */
export const FormRow: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<FormChildProps> &
      React.RefAttributes<HTMLDivElement>
  >,
  FormChildProps
> = chakra((props: React.PropsWithChildren<FormChildProps>) => {
  const { children, className, gap, id, ...rest } = props;
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
    <SimpleGrid
      columns={count}
      className={className}
      gap={gap}
      id={id}
      {...rest}
    >
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
  const { children, className, gap, id, ...rest } = props;
  return (
    <SimpleGrid columns={1} className={className} gap={gap} id={id} {...rest}>
      {children}
    </SimpleGrid>
  );
});

/** Main Form component */
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
  >((props: React.PropsWithChildren<FormProps>, ref?) => {
    const {
      children,
      className,
      gap = "grid.l",
      id,
      onSubmit,
      ...rest
    } = props;

    if (!id) {
      console.warn(
        "NYPL Reservoir Form: This component's required `id` prop was not passed."
      );
    }

    const alteredChildren = React.Children.map(
      children as JSX.Element,
      (child: React.ReactElement, i) => {
        return (
          child && React.cloneElement(child, { gap, id: `${id}-child${i}` })
        );
      }
    );

    return (
      <Box
        as="form"
        className={className}
        data-testid="ds-form"
        id={id}
        onSubmit={onSubmit}
        ref={ref}
        {...rest}
      >
        <SimpleGrid columns={1} gap={gap} id={`${id}-parent`}>
          {alteredChildren}
        </SimpleGrid>
      </Box>
    );
  }),
  { shouldForwardProp: () => true }
);

export default Form;
