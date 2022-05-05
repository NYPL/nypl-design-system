import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import * as React from "react";

import Icon from "../Icons/Icon";

export type LinkTypes =
  | "action"
  | "backwards"
  | "button"
  | "default"
  | "external"
  | "forwards";
export interface LinkProps {
  /** Additional attributes, such as `rel=nofollow`, to pass to the `<a>` tag. */
  attributes?: { [key: string]: any };
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Additional class name to render in the `Link` component. */
  className?: string;
  /** The `href` attribute for the anchor element. */
  href?: string;
  /** ID used for accessibility purposes. */
  id?: string;
  /** Controls the link visuals: action, button, backwards, forwards, or default. */
  type?: LinkTypes;
}

/**
 * Renders the `Link` children components with a direction arrow icon based
 * on the `"backwards"` or `"forwards"` `linkType` value.
 */
function getWithDirectionIcon(children, type: LinkTypes, linkId) {
  let iconRotation;
  let iconAlign;
  let icon = null;

  // An icon needs a position in order for it to be created and
  // rendered in the link.
  if (type === "backwards") {
    iconRotation = "rotate90";
    iconAlign = "left";
  } else if (type === "forwards") {
    iconRotation = "rotate270";
    iconAlign = "right";
  }

  const iconId = `${linkId}-icon`;

  icon = (
    <Icon
      align={iconAlign}
      className="more-link"
      iconRotation={iconRotation}
      id={iconId}
      name="arrow"
      size="medium"
    />
  );

  return (
    <>
      {type === "backwards" && icon}
      {children}
      {type === "forwards" && icon}
    </>
  );
}

function getExternalIcon(children, linkId) {
  const iconId = `${linkId}-icon`;
  const icon = (
    <Icon
      align={"right"}
      className="more-link"
      id={iconId}
      name="action_launch"
      size="medium"
    />
  );

  return (
    <>
      {children}
      {icon}
    </>
  );
}

/**
 * A component that uses an `href` prop or a child anchor element, to create
 * an anchor element with added styling and conventions.
 */
export const Link = chakra(
  React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref: any) => {
    const {
      attributes,
      children,
      className,
      href,
      id,
      type = "default",
      ...rest
    } = props;

    // Merge the necessary props alongside any extra props for the
    // anchor element.
    const linkProps = {
      id,
      href,
      ...attributes,
    };
    // The "default" type.
    let variant = "link";

    if (typeof children === "string" && !href) {
      throw new Error("`Link` needs the `href` prop.");
    }

    if (
      type === "action" ||
      type === "forwards" ||
      type === "backwards" ||
      type === "external"
    ) {
      variant = "moreLink";
    } else if (type === "button") {
      variant = "button";
    }
    const style = useStyleConfig("Link", { variant });
    // Render with specific direction arrows if the type is
    // Forwards or Backwards.  Or render with the launch icon
    // if the type is External.  Otherwise, do not add an icon.
    const newChildren =
      ((type === "forwards" || type === "backwards") &&
        getWithDirectionIcon(children, type, id)) ||
      (type === "external" && getExternalIcon(children, id)) ||
      children;

    const rel = type === "external" ? "nofollow" : null;
    const target = type === "external" ? "_blank" : null;

    if (!href) {
      // React Types error makes this fail:
      // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32832
      // let children = React.Children.only(children);
      if (React.Children.count(children) > 1) {
        throw new Error("Please pass only one child into `Link`.");
      }
      const childrenToClone: any = children[0] ? children[0] : children;
      const childProps = childrenToClone.props;
      return (
        <Box as="span" __css={style} {...rest}>
          {React.cloneElement(
            childrenToClone,
            {
              className,
              ...linkProps,
              ...childProps,
              ref,
              rel,
              target,
            },
            [childrenToClone.props.children]
          )}
        </Box>
      );
    } else {
      return (
        <Box
          as="a"
          className={className}
          ref={ref}
          rel={rel}
          target={target}
          {...linkProps}
          __css={style}
          {...rest}
        >
          {newChildren}
        </Box>
      );
    }
  })
);

export default Link;
