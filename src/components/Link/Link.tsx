import * as React from "react";
import bem from "../../utils/bem";
import { LinkTypes } from "./LinkTypes";
import Icon, { IconProps } from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

export interface LinkProps {
  /** Additional attributes, such as `rel=nofollow`, to pass to the `<a>` tag. */
  attributes?: { [key: string]: any };
  /** BlockName for use with BEM. See how to work with blockNames and BEM here: http://getbem.com/introduction/ */
  blockName?: string;
  /** className that appears in addition to "link" */
  className?: string;
  /** Href attribute */
  href?: string;
  /** ID */
  id?: string;
  /** Controls the link visuals—action, button, or default. */
  type?: LinkTypes;
  /** Modifiers array for use with BEM. See how to work with modifiers and BEM here: http://getbem.com/introduction/ */
  modifiers?: string[];
  /** Any child node passed to the component. */
  children: React.ReactNode;
}

/**
 * A component that uses an `href` prop or a child anchor element, to create an
 * anchor element with added styling and conventions.
 */
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    attributes,
    blockName,
    className,
    href,
    id,
    type = LinkTypes.Default,
    modifiers = [],
    children,
  } = props;

  // Merge the necessary props alongside any extra props for the
  // anchor element.
  const linkProps = {
    id,
    href,
    ...attributes,
  };
  let baseClass = "link";

  let childProps = {};

  if (typeof children === "string" && !href) {
    throw new Error("Link needs prop 'href'");
  }

  if (
    type === LinkTypes.Action ||
    type === LinkTypes.Forwards ||
    type === LinkTypes.Backwards
  ) {
    baseClass = "more-link";
  } else if (type === LinkTypes.Button) {
    baseClass = "button";
  }

  let iconRotation, iconPosition, iconLeft, iconRight;
  // An icon needs a position in order for it to be created and
  // rendered in the link.
  if (type === LinkTypes.Backwards) {
    iconRotation = IconRotationTypes.rotate90;
    iconPosition = "left";
  } else if (type === LinkTypes.Forwards) {
    iconRotation = IconRotationTypes.rotate270;
    iconPosition = "right";
  }

  const navigationIconProps: IconProps = {
    name: IconNames.arrow,
    modifiers: [iconPosition, iconRotation, ...modifiers],
    blockName: "more-link",
    decorative: true,
  };

  if (type === LinkTypes.Backwards) {
    iconLeft = <Icon {...navigationIconProps} />;
  } else if (type === LinkTypes.Forwards) {
    iconRight = <Icon {...navigationIconProps} />;
  }
  const linkClassName = bem(baseClass, modifiers, blockName, [className]);

  if (!props.href) {
    // React Types error makes this fail:  https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32832
    // let children = React.Children.only(props.children);
    if (React.Children.count(props.children) > 1) {
      throw new Error("Please pass only one child into Link");
    }
    const children = props.children[0] ? props.children[0] : props.children;
    childProps = children.props;

    return React.cloneElement(
      children,
      {
        className: linkClassName,
        ...linkProps,
        ...childProps,
        ref,
      },
      [children.props.children]
    );
  } else {
    return React.createElement(
      "a",
      {
        ...linkProps,
        className: linkClassName,
        ref,
      },
      iconLeft,
      props.children,
      iconRight
    );
  }
});

Link.displayName = "Link";

export default Link;
