import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import SkipNavigation from "../SkipNavigation/SkipNavigation";

export interface TemplateProps {}
export interface TemplateHeaderProps {
  /** Flag to render an HTML header element. True by default. */
  renderHeaderElement?: boolean;
}
export interface TemplateFooterProps {
  /** Flag to render an HTML footer element. True by default. */
  renderFooterElement?: boolean;
}
export interface TemplateSidebarProps {
  /** Renders the `TemplateContentSidebar` component either on the left or
   * right side of the `TemplateContentPrimary` component. */
  sidebar?: "none" | "left" | "right";
}
export interface TemplateContentProps extends TemplateSidebarProps {
  /** ID used for the `main` HTML element. Defaults to "mainContent". Useful
   * anchor for the application skip navigation. */
  id?: string;
}

export interface TemplateAppContainerProps
  extends TemplateFooterProps,
    TemplateHeaderProps,
    TemplateSidebarProps {
  /** DOM that will be rendered before the rest of the components in
   * `TemplateAppContainer` and immediately before the `TemplateHeader` component. */
  aboveHeader?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateBreakout` component section. */
  breakout?: React.ReactElement;
  /** DOM that will be rendered in the `TemplateContentBottom` component section. */
  contentBottom?: React.ReactElement;
  /** ID used for the `main` HTML element. Defaults to "mainContent". Useful
   * anchor for the application skip navigation. */
  contentId?: string;
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
  /** Render the `SkipNavigation` component or not. False by default. */
  renderSkipNavigation?: boolean;
}

/**
 * The main top-level parent component that wraps all template-related
 * components.
 */
const Template: React.FC<any> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<TemplateProps>>(
    (props, ref?) => {
      const styles = useStyleConfig("Template", {});
      return (
        <Box ref={ref} __css={styles} {...props}>
          {props.children}
        </Box>
      );
    }
  )
);

/**
 * This optional component renders its children from edge-to-edge and should
 * be used for alerts or notifications that are typically site-wide. This must
 * be rendered immediately before the `TemplateHeader` component. This is meant
 * for components that render an `aside` HTML element or HTML element with the
 * `role="complementary"` attribute. These elements should *not* be rendered
 * in the `header` HTML section since that's an accessibility violation.
 */
const TemplateAboveHeader: React.FC<any> = (
  props: React.PropsWithChildren<TemplateProps>
) => {
  const styles = useStyleConfig("TemplateBreakout", {});
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This optional component should be the first child of the `Template`
 * component. This is rendered as an HTML `<header>` element. If an HTML
 * `<header>` element is already passed in a custom component as the children,
 * set `renderFooterElement` to `false`. Otherwise, the parent wrapper will
 * render an HTML `<header>` element.
 */
const TemplateHeader: React.FC<any> = ({
  children,
  renderHeaderElement = true,
}: React.PropsWithChildren<TemplateHeaderProps>) => {
  const styles = useStyleConfig("TemplateBreakout", {});
  let headerElement = <Box __css={styles}>{children}</Box>;

  // The user wants to render the `header` HTML element.
  if (renderHeaderElement) {
    // But if they passed in a component that renders an HTML `<header>`,
    // then log a warning.
    React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
      if (child?.type === "header" || child?.props?.mdxType === "header") {
        console.warn(
          "NYPL Reservoir TemplateHeader: An HTML `header` element was passed " +
            "in. Set `renderHeaderElement` to `false` to avoid nested HTML " +
            "`header` elements."
        );
      }
    });
    headerElement = (
      <Box as="header" __css={styles}>
        {children}
      </Box>
    );
  }
  return headerElement;
};

/**
 * This component should be used inside the `Template` component to contain both
 * the `TemplateAboveHeader` and `TemplateHeader` components. This is meant to
 * render its children from edge to edge and is most useful for the headers,
 * `Breadcrumbs`, and `Hero` components or other banner-like components.
 */
const TemplateBreakout: React.FC<any> = (
  props: React.PropsWithChildren<TemplateProps>
) => {
  const styles = useStyleConfig("TemplateBreakout", {});
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This component is most useful to render content on the page. This renders an
 * HTML `<main>` element with an id of "mainContent". The "mainContent" id should
 * be used as the consuming application's skip navigation link. The `TemplateContent`
 * component also takes a `sidebar` prop with optional "left" or "right" values.
 * This will set the correct *styling* needed for the `TemplateContentPrimary`
 * and `TemplateContentSidebar` components. Note that `TemplateContentPrimary`
 * and `TemplateContentSidebar` must be ordered correctly as children elements
 * for the appropriate styles to take effect.
 */
const TemplateContent: React.FC<any> = (
  props: React.PropsWithChildren<TemplateContentProps>
) => {
  const { children, id = "mainContent", sidebar = "none" } = props;
  const styles = useStyleConfig("TemplateContent", {
    variant: sidebar,
  });
  // Manually pass in the `sidebar` prop to the `TemplateContentPrimary` and
  // `TemplateContentSidebar` components.
  const newChildren = React.Children.map(
    children as JSX.Element,
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
    <Box as="main" id={id} __css={styles}>
      {newChildren}
    </Box>
  );
};

/**
 * This optional component must be used inside the `TemplateContent` component.
 * This renders content in the main width of the container and will always render
 * above the primary component and the sidebar component (if any).
 */
const TemplateContentTop: React.FC<any> = (
  props: React.PropsWithChildren<TemplateProps>
) => {
  const styles = useStyleConfig("TemplateContentTopBottom", {});
  return <Box __css={styles}>{props.children}</Box>;
};

/**
 * This optional component must be used inside the `TemplateContent` component
 * and after the `TemplateContentPrimary` or `TemplateContentSidebar` component.
 * This renders content in the main width of the container and should always
 * render below the primary component and the sidebar component (if any).
 */
const TemplateContentBottom: React.FC<any> = (
  props: React.PropsWithChildren<TemplateProps>
) => {
  const styles = useStyleConfig("TemplateContentTopBottom", {});
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
const TemplateContentPrimary: React.FC<any> = (
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
const TemplateContentSidebar: React.FC<any> = (
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
 * width of the page. If an HTML `<footer>` element is already passed in a
 * custom component, set `renderFooterElement` to `false`.
 */
const TemplateFooter: React.FC<any> = ({
  children,
  renderFooterElement = true,
}: React.PropsWithChildren<TemplateFooterProps>) => {
  const styles = useStyleConfig("TemplateBreakout", {});
  let footerElement = <Box __css={styles}>{children}</Box>;

  // The user wants to render the `footer` HTML element.
  if (renderFooterElement) {
    // But give a warning if one was passed.
    React.Children.map(children as JSX.Element, (child: React.ReactElement) => {
      if (child?.type === "footer" || child?.props?.mdxType === "footer") {
        console.warn(
          "NYPL Reservoir TemplateFooter: An HTML `footer` element was passed " +
            "in. Set `renderFooterElement` to `false` to avoid nested HTML " +
            "`footer` elements."
        );
      }
    });
    footerElement = (
      <Box as="footer" __css={styles}>
        {children}
      </Box>
    );
  }
  return footerElement;
};

/**
 * This single component can be used instead of all the individual template
 * components. Instead of importing and rendering the needed "template"
 * components, each section is passed as a prop to the section where it should
 * be rendered. For example, if you want to render content in the
 * `TemplateContentPrimary` section, then pass it as a prop to `contentPrimary`.
 */
export const TemplateAppContainer: React.FC<any> = chakra(
  forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<TemplateAppContainerProps>
  >((props, ref?) => {
    const {
      aboveHeader,
      breakout,
      contentId = "mainContent",
      contentBottom,
      contentPrimary,
      contentSidebar,
      contentTop,
      footer,
      header,
      sidebar = "none",
      renderFooterElement = true,
      renderHeaderElement = true,
      renderSkipNavigation = false,
      ...rest
    } = props;
    const aboveHeaderElem = aboveHeader && (
      <TemplateAboveHeader>{aboveHeader}</TemplateAboveHeader>
    );
    const contentTopElem = contentTop && (
      <TemplateContentTop>{contentTop}</TemplateContentTop>
    );
    const contentPrimaryElem = contentPrimary && (
      <TemplateContentPrimary>{contentPrimary}</TemplateContentPrimary>
    );
    const contentBottomElem = contentBottom && (
      <TemplateContentBottom>{contentBottom}</TemplateContentBottom>
    );
    const contentSidebarElem = contentSidebar && (
      <TemplateContentSidebar>{contentSidebar}</TemplateContentSidebar>
    );
    return (
      <>
        {renderSkipNavigation ? <SkipNavigation /> : null}
        <Template ref={ref} {...rest}>
          <TemplateBreakout>
            {aboveHeaderElem}
            {(header || breakout) && (
              <TemplateHeader renderHeaderElement={renderHeaderElement}>
                {header}
                {breakout}
              </TemplateHeader>
            )}
          </TemplateBreakout>
          {/* Note that setting `sidebar` as a prop here affects the
          TemplateContentSidebar and TemplateContentPrimary components. */}
          <TemplateContent id={contentId} sidebar={sidebar}>
            {contentTopElem}

            {sidebar === "left" && contentSidebarElem}

            {contentPrimaryElem}

            {sidebar === "right" && contentSidebarElem}

            {contentBottomElem}
          </TemplateContent>
          {footer && (
            <TemplateFooter renderFooterElement={renderFooterElement}>
              {footer}
            </TemplateFooter>
          )}
        </Template>
      </>
    );
  })
);

export {
  Template,
  TemplateAboveHeader,
  TemplateBreakout,
  TemplateContent,
  TemplateContentBottom,
  TemplateContentPrimary,
  TemplateContentSidebar,
  TemplateContentTop,
  TemplateFooter,
  TemplateHeader,
};
export default TemplateAppContainer;
