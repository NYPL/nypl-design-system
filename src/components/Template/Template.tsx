import { Box, chakra, ChakraComponent, useStyleConfig } from "@chakra-ui/react";
import { forwardRef } from "react";

export const templateVariantArray = [
  "full",
  "narrow",
  "sidebarLeft",
  "sidebarRight",
] as const;
export type TemplateVariant = typeof templateVariantArray[number];

export interface TemplateProps {
  /** ID that other components can cross reference for accessibility purposes. */
  id?: string;
  /** Renders the `TemplateSidebar` component either on the left or
   * right side of the `TemplateMain` component. */
  variant?: TemplateVariant;
}

export interface TemplateMainProps {
  /** ID used for the `main` HTML element. Defaults to "mainContent". Useful
   * anchor for the application skip navigation. */
  id?: string;
}

/**
 * The main top-level parent component that wraps all template-related
 * components.
 */
const Template: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<TemplateProps> & React.RefAttributes<HTMLDivElement>
  >,
  React.PropsWithChildren<TemplateProps>
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<TemplateProps>>(
    ({ children, variant = "full" }, ref?) => {
      const styles = useStyleConfig("Template", { variant });

      return (
        <Box __css={styles} ref={ref}>
          {children}
        </Box>
      );
    }
  )
);

/**
 * This optional component spans the full width of the browser window
 * (edge-to-edge). It is most useful for `Breadcrumbs`, `Hero`, or other
 * banner-like components.
 */
const TemplateBreakout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const styles = useStyleConfig("TemplateBreakout", {});

  return <Box __css={styles}>{children}</Box>;
};

/**
 * This optional component will span the full width of the content area and will
 * render content at a max width of 1280px.
 */
const TemplateFull: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box className="reservoir-template-full">{children}</Box>
);

/**
 * This component renders an HTML `<main>` element with an id of "mainContent".
 * The "mainContent" id should be used as the consuming application's skip
 * navigation link. The width of this component is dependent on the value of the
 * `variant` prop.
 */
const TemplateMain: React.FC<React.PropsWithChildren<TemplateMainProps>> = ({
  children,
  id = "mainContent",
}) => (
  <Box as="main" className="reservoir-template-main" id={id}>
    {children}
  </Box>
);

/**
 * This optional component is used to render content in a sidebar column. For
 * proper rendering, this component must be paired with the `TemplateMain`
 * component and the `variant` prop must be set to "sidebarLeft" or
 * "sidebarRight".
 */
const TemplateSidebar: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box className="reservoir-template-sidebar">{children}</Box>
);

export {
  Template,
  TemplateBreakout,
  TemplateFull,
  TemplateMain,
  TemplateSidebar,
};
