import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";

export type LinkTypes =
  | "action"
  | "backwards"
  | "button"
  | "default"
  | "external"
  | "forwards";
export interface LinkProps {
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
function getWithDirectionIcon(
  children: JSX.Element,
  type: LinkTypes,
  linkId: string
) {
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

function getExternalIcon(children: JSX.Element, linkId: string) {
  const iconId = `${linkId}-icon`;
  const icon = (
    <Icon
      align={"right"}
      className="more-link"
      id={iconId}
      name="actionLaunch"
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
  forwardRef<HTMLDivElement & HTMLAnchorElement, LinkProps>((props, ref?) => {
    const { children, className, href, id, type = "default", ...rest } = props;

    // Merge the necessary props alongside any extra props for the
    // anchor element.
    const linkProps = {
      id,
      href,
      ...rest,
    };
    // The "default" type.
    let variant = "link";

    if (typeof children === "string" && !href) {
      throw new Error(
        "NYPL Reservoir Link: The `Link` component needs the `href` prop if its child element is a string."
      );
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
    const rel = type === "external" ? "nofollow" : null;
    const target = type === "external" ? "_blank" : null;
    // Render with specific direction arrows if the type is
    // Forwards or Backwards.  Or render with the launch icon
    // if the type is External.  Otherwise, do not add an icon.
    const newChildren =
      ((type === "forwards" || type === "backwards") &&
        getWithDirectionIcon(children as JSX.Element, type, id)) ||
      (type === "external" && getExternalIcon(children as JSX.Element, id)) ||
      children;

    if (!href) {
      // React Types error makes this fail:
      // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32832
      // let children = React.Children.only(children);
      if (React.Children.count(children) > 1) {
        throw new Error(
          "NYPL Reservoir Link: Please pass only one child into the `Link` component."
        );
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
        >
          {newChildren}
        </Box>
      );
    }
  })
);

export default Link;
