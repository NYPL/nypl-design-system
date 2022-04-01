import * as React from "react";
import { Box, useStyleConfig } from "@chakra-ui/react";

import { LinkTypes } from "./LinkTypes";
import Icon from "../Icons/Icon";
import {
  IconRotationTypes,
  IconNames,
  IconAlign,
  IconSizes,
} from "../Icons/IconTypes";
import generateUUID from "../../helpers/generateUUID";

export interface LinkProps {
  /** Optionally pass in additional Chakra-based styles. */
  additionalStyles?: { [key: string]: any };
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
 * on the `Backwards` or `Forwards` `LinkTypes` type.
 */
function getWithDirectionIcon(children, type: LinkTypes, linkId) {
  let iconRotation;
  let iconAlign;
  let icon = null;

  // An icon needs a position in order for it to be created and
  // rendered in the link.
  if (type === LinkTypes.Backwards) {
    iconRotation = IconRotationTypes.Rotate90;
    iconAlign = IconAlign.Left;
  } else if (type === LinkTypes.Forwards) {
    iconRotation = IconRotationTypes.Rotate270;
    iconAlign = IconAlign.Right;
  }

  const iconId = `${linkId}-icon`;

  icon = (
    <Icon
      align={iconAlign}
      className="more-link"
      iconRotation={iconRotation}
      id={iconId}
      name={IconNames.Arrow}
      size={IconSizes.Medium}
    />
  );

  return (
    <>
      {type === LinkTypes.Backwards && icon}
      {children}
      {type === LinkTypes.Forwards && icon}
    </>
  );
}

function getExternalIcon(children, linkId) {
  const iconId = `${linkId}-icon`;
  const icon = (
    <Icon
      align={IconAlign.Right}
      className="more-link"
      id={iconId}
      name={IconNames.ActionLaunch}
      size={IconSizes.Medium}
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
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref: any) => {
    const {
      additionalStyles = {},
      attributes,
      children,
      className,
      href,
      id = generateUUID(),
      type = LinkTypes.Default,
    } = props;

    // Merge the necessary props alongside any extra props for the
    // anchor element.
    const linkProps = {
      id,
      href,
      ...attributes,
    };
    // The LinkTypes.Default type.
    let variant = "link";

    if (typeof children === "string" && !href) {
      throw new Error("`Link` needs the `href` prop.");
    }

    if (
      type === LinkTypes.Action ||
      type === LinkTypes.Forwards ||
      type === LinkTypes.Backwards ||
      type === LinkTypes.External
    ) {
      variant = "moreLink";
    } else if (type === LinkTypes.Button) {
      variant = "button";
    }
    const style = useStyleConfig("Link", { variant });
    // Render with specific direction arrows if the type is
    // Forwards or Backwards.  Or render with the launch icon
    // if the type is External.  Otherwise, do not add an icon.
    const newChildren =
      ((type === LinkTypes.Forwards || type === LinkTypes.Backwards) &&
        getWithDirectionIcon(children, type, id)) ||
      (type === LinkTypes.External && getExternalIcon(children, id)) ||
      children;

    const rel = type === LinkTypes.External ? "nofollow" : null;
    const target = type === LinkTypes.External ? "_blank" : null;

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
        <Box as="span" __css={style}>
          {React.cloneElement(
            childrenToClone,
            {
              className,
              ...linkProps,
              ...childProps,
              ref,
              rel,
              target,
              // Useful if more styles are needed for the custom
              // anchor element or link component.
              style: additionalStyles,
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
          __css={{ ...style, ...additionalStyles }}
        >
          {newChildren}
        </Box>
      );
    }
  }
);

export default Link;
