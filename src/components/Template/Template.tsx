import {
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  useStyleConfig,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const templateVariantArray = [
  "full",
  "narrow",
  "sidebarLeft",
  "sidebarRight",
] as const;
export type TemplateVariant = typeof templateVariantArray[number];

export interface TemplateProps {
  /** Specifies the layout and DOM structure related to the content region. */
  variant?: TemplateVariant;
}

export interface TemplateChildProps extends BoxProps {}

export interface TemplateMainProps extends TemplateChildProps {}

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
    ({ children, variant = "full", ...rest }, ref?) => {
      const styles = useStyleConfig("Template", { variant });

      return (
        <Box __css={styles} ref={ref} {...rest}>
          {children}
        </Box>
      );
    }
  )
);

/**
 * This component renders an HTML `<header>` element.
 */
const TemplateHeader: React.FC<React.PropsWithChildren<TemplateChildProps>> = ({
  children,
  ...rest
}) => {
  const styles = useStyleConfig("TemplateFull", {});

  return (
    <Box as="header" __css={styles} {...rest}>
      {children}
    </Box>
  );
};

/**
 * This component renders an HTML `<footer>` element.
 */
const TemplateFooter: React.FC<React.PropsWithChildren<TemplateChildProps>> = ({
  children,
  ...rest
}) => {
  const styles = useStyleConfig("TemplateFull", {});

  return (
    <Box as="footer" __css={styles} {...rest}>
      {children}
    </Box>
  );
};

/**
 * This component renders an HTML `<main>` element.
 */
const TemplateMain: React.FC<React.PropsWithChildren<TemplateChildProps>> = ({
  children,
  ...rest
}) => {
  const styles = useStyleConfig("TemplateMain", {});

  return (
    <Box as="main" __css={styles} {...rest}>
      {children}
    </Box>
  );
};

/**
 * This optional component spans the full width of the browser window
 * (edge-to-edge). It is most useful for `Breadcrumbs`, `Hero`, or other
 * banner-like components.
 */
const TemplateBreakout: React.FC<React.PropsWithChildren<TemplateChildProps>> =
  ({ children, ...rest }) => {
    const styles = useStyleConfig("TemplateBreakout", {});

    return (
      <Box __css={styles} {...rest}>
        {children}
      </Box>
    );
  };

/**
 * This optional component will span the full width of the content area and will
 * render content at a max width of 1280px.
 */
const TemplateFull: React.FC<React.PropsWithChildren<TemplateChildProps>> = ({
  children,
  ...rest
}) => {
  const styles = useStyleConfig("TemplateFull", {});

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

/**
 * The width of this component is dependent on the value of the `variant` prop.
 */
const TemplateContent: React.FC<React.PropsWithChildren<TemplateMainProps>> = ({
  children,
  ...rest
}) => (
  <Box className="ds-template-content" {...rest}>
    {children}
  </Box>
);

/**
 * This optional component is used to render content in a sidebar column. For
 * proper rendering, this component must be paired with the `TemplateMain`
 * component and the `variant` prop must be set to "sidebarLeft" or
 * "sidebarRight".
 */
const TemplateSidebar: React.FC<React.PropsWithChildren<TemplateChildProps>> =
  ({ children, ...rest }) => (
    <Box className="ds-template-sidebar" {...rest}>
      {children}
    </Box>
  );

export {
  Template,
  TemplateBreakout,
  TemplateContent,
  TemplateFooter,
  TemplateFull,
  TemplateHeader,
  TemplateMain,
  TemplateSidebar,
};
