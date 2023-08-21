import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { forwardRef } from "react";

import Icon from "../Icons/Icon";
import { sanitizeStringForAttribute } from "../../utils/utils";

export const linkTypesArray = [
  "action",
  "backwards",
  // The "button" type is deprecated as of 1.2.x.
  "button",
  // Instead, use the following "buttonX" types.
  "buttonPrimary",
  "buttonSecondary",
  "buttonPill",
  "buttonCallout",
  "buttonNoBrand",
  "buttonDisabled",
  "default",
  "external",
  "forwards",
  "standalone",
] as const;
export type LinkTypes = typeof linkTypesArray[number];

export interface LinkProps {
  /** Any child node passed to the component. */
  children: React.ReactNode;
  /** Additional class name to render in the `Link` component. */
  className?: string;
  /** The `href` attribute for the anchor element. */
  href?: string;
  /** ID used for accessibility purposes. */
  id?: string;
  /** Used to explicitly set the underline style for a text link. If true, link
   * text will always be underlined; if false, link text will only show
   * underline in hover state. */
  isUnderlined?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
  ) => void;
  /** Visibly hidden text that will only be read by screenreaders. */
  screenreaderOnlyText?: string;
  /** Prop that sets the HTML attribute to target where the link should go. */
  target?: "_blank" | "_parent" | "_self" | "_top";
  /** Controls the link visuals: action, button, backwards, forwards,
   * standalone, or default. */
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

  const iconId = `${linkId}-direction-icon`;

  icon = (
    <Icon
      align={iconAlign}
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

function getExternalExtraElements(
  children: JSX.Element,
  linkId: string,
  styles: object
) {
  const iconId = `${linkId}-external-icon`;
  const extraElements = (
    <>
      <Box as="span" __css={styles}>
        This link opens in a new window
      </Box>
      <Icon
        align={"right"}
        id={iconId}
        name="actionLaunch"
        size="medium"
        title="External link"
      />
    </>
  );

  return (
    <>
      {children}
      {extraElements}
    </>
  );
}

function getStandaloneIcon(children: JSX.Element, linkId: string) {
  const iconId = `${linkId}-standalone-icon`;
  const extraElements = (
    <Icon
      align={"right"}
      iconRotation="rotate270"
      id={iconId}
      name="arrow"
      size="xsmall"
      title="Navigation arrow"
    />
  );

  return (
    <>
      {children}
      {extraElements}
    </>
  );
}

/**
 * A component that uses an `href` prop or a child anchor element, to create
 * an anchor element with added styling and conventions.
 */
export const Link = chakra(
  forwardRef<HTMLDivElement & HTMLAnchorElement, LinkProps>((props, ref?) => {
    const {
      children,
      className,
      href,
      id,
      isUnderlined,
      onClick,
      screenreaderOnlyText,
      target,
      type = "default",
      ...rest
    } = props;

    // Set initial underline style for certain variants
    const finalIsUnderlined =
      type === "backwards" || type === "forwards" || type === "standalone"
        ? isUnderlined
          ? true
          : false
        : true;

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
      type === "backwards" ||
      type === "external" ||
      type === "forwards" ||
      type === "standalone"
    ) {
      variant = "moreLink";
    } else if (type.includes("button")) {
      /** This deprecation warning is temporarily being removed, but it will be
       * reinstated once teams are able to update their `Link`s appropriately. */
      // if (type === "button") {
      //   console.warn(
      //     `NYPL Reservoir Link: The "button" type is deprecated. Instead, use either "buttonPrimary", "buttonSecondary", "buttonPill", "buttonCallout", "buttonNoBrand", or "buttonDisabled".`
      //   );
      // }
      variant = type;
    }
    const styles = useMultiStyleConfig("Link", { variant, finalIsUnderlined });
    const rel = type === "external" ? "nofollow noopener noreferrer" : null;
    const internalTarget =
      type === "external" ? "_blank" : target ? target : null;
    const sanitizedId = id
      ? id
      : sanitizeStringForAttribute(`link-${children as string}`);
    // Render with specific direction arrows if the type is "forwards" or
    // "backwards". Or render with the launch icon if the type is "external". Or
    // render with a smaller right-arrow if the type is "standalone." Otherwise,
    // do not add an icon.
    const newChildren =
      ((type === "forwards" || type === "backwards") &&
        getWithDirectionIcon(children as JSX.Element, type, sanitizedId)) ||
      (type === "external" &&
        getExternalExtraElements(
          children as JSX.Element,
          sanitizedId,
          styles.screenreaderOnly
        )) ||
      (type === "standalone" &&
        getStandaloneIcon(children as JSX.Element, sanitizedId)) ||
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
        <>
          <Box as="span" __css={styles} {...rest}>
            {React.cloneElement(
              childrenToClone,
              {
                className,
                ...linkProps,
                ...childProps,
                ref,
                rel,
                target: internalTarget,
              },
              [childrenToClone.props.children]
            )}
          </Box>
          {screenreaderOnlyText && (
            <Box as="span" __css={styles.screenreaderOnly}>
              {screenreaderOnlyText}
            </Box>
          )}
        </>
      );
    } else {
      return (
        <Box
          as="a"
          className={className}
          ref={ref}
          rel={rel}
          onClick={onClick}
          target={internalTarget}
          {...linkProps}
          __css={styles}
        >
          {newChildren}
          {screenreaderOnlyText && (
            <Box as="span" __css={styles.screenreaderOnly}>
              {screenreaderOnlyText}
            </Box>
          )}
        </Box>
      );
    }
  })
);

export default Link;
