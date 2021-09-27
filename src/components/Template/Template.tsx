import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

export interface TemplateProps {}
export interface TemplateSidebarProps {
  /** Renders the `TemplateContentSidebar` component either on the left or
   * right side of the `TemplateContentPrimary` component. */
  sidebar?: "none" | "left" | "right";
}
export interface TemplateContentProps extends TemplateSidebarProps {}
export interface TemplateAppContainerProps extends TemplateSidebarProps {
  /** DOM that will be rendered in the `TemplateBreakout` component section. */
  breakout?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateContentPrimary` component section. */
  contentPrimary?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateContentSidebar` component section. */
  contentSidebar?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateContentTop` component section. */
  contentTop?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateFooter` component section. */
  footer?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateHeader` component section. */
  header?: React.ReactElement;
}

/**
 * The main top-level parent component that wraps all template-related
 * components. For backwards compatibility, this renders a `nypl-ds` CSS class.
 */
const Template = (props: React.PropsWithChildren<TemplateProps>) => {
  const styles = useStyleConfig("Template", {});
  return (
    <Box __css={styles} className="nypl-ds">
      {props.children}
    </Box>
  );
};

/**
 * This optional component should be the first child of the `Template`
 * component. This is rendered as an HTML `<header>` element.
 */
const TemplateHeader = (props: React.PropsWithChildren<TemplateProps>) => {
  const styles = useStyleConfig("TemplateHeader", {});
  return (
    <Box as="header" __css={styles}>
      {props.children}
    </Box>
  );
};

/**
 * This optional component should be used inside the `TemplateHeader` component.
 * This is meant to render its children from edge to edge and is most useful
 * for the `Breadcrumbs` and `Hero` components, and other banner-like components.
 */
const TemplateBreakout = (props: React.PropsWithChildren<TemplateProps>) => {
  const styles = useStyleConfig("TemplateBreakout", {});
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This component is most useful to render content on the page. This renders an
 * HTML `<main>` element and takes a `sidebar` prop with optional "left" or
 * "right" values. This will set the correct styling needed for the
 * `TemplateContentPrimary` and `TemplateContentSidebar` components. Note that
 * `TemplateContentPrimary` and `TemplateContentSidebar` must be ordered
 * correctly as children elements for the appropriate styles to take effect.
 */
const TemplateContent = (
  props: React.PropsWithChildren<TemplateContentProps>
) => {
  const { sidebar = "none", children } = props;
  const styles = useStyleConfig("TemplateContent", {
    variant: sidebar !== "none" ? "sidebar" : null,
  });
  // Manually pass in the `sidebar` prop to the `TemplateContentPrimary` and
  // `TemplateContentSidebar` components.
  const newChildren = React.Children.map(
    children,
    (child: React.ReactElement) => {
      let newChild = child;
      if (
        (child && child?.type === TemplateContentPrimary) ||
        (child?.props && child.props?.mdxType === "TemplateContentPrimary") ||
        child?.type === TemplateContentSidebar ||
        (child?.props && child.props?.mdxType === "TemplateContentSidebar")
      ) {
        newChild = React.cloneElement(child, { sidebar });
      }

      return newChild;
    }
  );

  return (
    <Box as="main" __css={styles}>
      {newChildren}
    </Box>
  );
};

/**
 * This optional component must be used inside the `TemplateContent` component.
 * This renders content in the main width of the container and will always render
 * above the primary component and the sidebar component (if any).
 */
const TemplateContentTop = (props: React.PropsWithChildren<TemplateProps>) => {
  const styles = useStyleConfig("TemplateContentTop", {});
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This component is used to render content in a column when there must be a
 * sidebar component on either its left or right side. It must go inside the
 * `TemplateContent` component. An optional `sidebar` prop value of "left" or
 * "right" can be passed to render the correct CSS styles. If the `sidebar`
 * prop is used in the `TemplateContent` component, there is no need to pass
 * the `sidebar` prop to this component -- `TemplateContent` will handle it.
 */
const TemplateContentPrimary = (
  props: React.PropsWithChildren<TemplateContentProps>
) => {
  const { sidebar } = props;
  const styles = useStyleConfig("TemplateContentPrimary", {
    variant: sidebar,
  });
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This component is used to render content in a sidebar column. It must go
 * inside the `TemplateContent` component and must be paired with the
 * `TemplateContentPrimary` component. If this is a left sidebar, it needs to be
 * rendered before the `TemplateContentPrimary` component. If this is a right
 * sidebar, it needs to be rendered after the `TemplateContentPrimary` component.
 * An optional `sidebar` prop value of "left" or "right" can be passed to render
 * the correct CSS styles. If the `sidebar` prop is used in the `TemplateContent`
 * component, there is no need to pass the `sidebar` prop to this component --
 * `TemplateContent` will handle it.
 */
const TemplateContentSidebar = (
  props: React.PropsWithChildren<TemplateContentProps>
) => {
  const { sidebar } = props;
  const styles = useStyleConfig("TemplateContentSidebar", {
    variant: sidebar,
  });
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This optional component should be the last child of the `Template`
 * component. This is rendered as an HTML `<footer>` element and spans the full
 * width of the page.
 */
const TemplateFooter = (props: React.PropsWithChildren<TemplateProps>) => {
  return <Box as="footer">{props.children}</Box>;
};

/**
 * This single component can be used instead of all the individual template
 * components. Instead of importing and rendering the needed "template"
 * components, each section is passed as a prop to the section where it should
 * be rendered. For example, if you want to render content in the
 * `TemplateContentPrimary` section, then pass it as a prop to `contentPrimary`.
 */
const TemplateAppContainer = (
  props: React.PropsWithChildren<TemplateAppContainerProps>
) => {
  const {
    breakout,
    contentPrimary,
    contentSidebar,
    contentTop,
    footer,
    header,
    sidebar = "none",
  } = props;
  const breakoutElem = breakout && (
    <TemplateBreakout>{breakout}</TemplateBreakout>
  );
  const contentTopElem = contentTop && (
    <TemplateContentTop>{contentTop}</TemplateContentTop>
  );
  const contentPrimaryElem = contentPrimary && (
    <TemplateContentPrimary>{contentPrimary}</TemplateContentPrimary>
  );
  const contentSidebarElem = contentSidebar && (
    <TemplateContentSidebar>{contentSidebar}</TemplateContentSidebar>
  );
  return (
    <Template>
      {(header || breakoutElem) && (
        <TemplateHeader>
          {header}
          {breakoutElem}
        </TemplateHeader>
      )}
      {/* Note that setting `sidebar` as a prop here affects the
       TemplateContentSidebar and TemplateContentPrimary components. */}
      <TemplateContent sidebar={sidebar}>
        {contentTopElem}

        {sidebar === "left" && contentSidebarElem}

        {contentPrimaryElem}

        {sidebar === "right" && contentSidebarElem}
      </TemplateContent>
      {footer && <TemplateFooter>{footer}</TemplateFooter>}
    </Template>
  );
};

export {
  TemplateAppContainer,
  Template,
  TemplateHeader,
  TemplateBreakout,
  TemplateContent,
  TemplateContentTop,
  TemplateContentPrimary,
  TemplateContentSidebar,
  TemplateFooter,
};
