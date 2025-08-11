import {
  Box,
  BoxProps,
  ChakraComponent,
  ChakraProps,
  chakra,
  Link as ChakraLink,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { AnchorHTMLAttributes, forwardRef } from "react";
import Icon from "../Icons/Icon";
import { sanitizeStringForAttribute } from "../../utils/utils";

export const linkVariantsArray = [
  "action",
  "backwards",
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
export type LinkVariants = typeof linkVariantsArray[number];

export interface LinkProps
  extends Pick<BoxProps, "as" | keyof ChakraProps>,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  /** Used to include or remove visited state styles. Default is true. */
  hasVisitedState?: boolean;
  /** Used to explicitly set the underline style for a text link. If true, link
   * text will always be underlined; if false, link text will only show
   * underline in hover state. */
  isUnderlined?: boolean;
  /** Visibly hidden text that will only be read by screenreaders. */
  screenreaderOnlyText?: string;
  /** Controls the link's styles based on the value: action, backwards, default,
   * external, forwards, standalone, and all "button" types. */
  variant?: LinkVariants;
}

/**
 * Renders the `Link` children components with a direction arrow icon based
 * on the `"backwards"` or `"forwards"` `type` prop value.
 */
function getWithDirectionIcon({
  children,
  id,
  variant,
}: {
  children: JSX.Element;
  id: string;
  variant: LinkVariants;
}) {
  const linkProps: any = {
    align: undefined,
    iconRotation: undefined,
    id: `${id}-direction-icon`,
  };
  let icon;

  // An icon needs a position in order for it to be created and
  // rendered in the link.
  if (variant === "backwards") {
    linkProps.align = "left";
    linkProps.iconRotation = "rotate90";
  } else if (variant === "forwards") {
    linkProps.align = "right";
    linkProps.iconRotation = "rotate270";
  }

  icon = <Icon name="arrow" size="medium" {...linkProps} />;

  return (
    <>
      {variant === "backwards" && icon}
      {children}
      {variant === "forwards" && icon}
    </>
  );
}

function getExternalExtraElements({
  children,
  id,
  styles,
}: {
  children: JSX.Element;
  id: string;
  styles: object;
}) {
  const iconId = `${id}-external-icon`;
  const extraElements = (
    <>
      <Box as="span" __css={styles}>
        This link opens in a new window
      </Box>
      <Icon
        align="right"
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

function getStandaloneIcon(children: JSX.Element, id: string) {
  const iconId = `${id}-standalone-icon`;
  const extraElements = (
    <Icon
      align="right"
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
 * A component that renders an anchor element with added styling
 * and conventions.
 */
export const Link: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<LinkProps> &
      React.RefAttributes<HTMLDivElement & HTMLAnchorElement>
  >,
  React.PropsWithChildren<LinkProps>
> = chakra(
  forwardRef<
    HTMLDivElement & HTMLAnchorElement,
    React.PropsWithChildren<LinkProps>
  >((props, ref?) => {
    const {
      as = "a",
      children,
      hasVisitedState = true,
      href,
      id,
      isUnderlined = true,
      onClick,
      screenreaderOnlyText,
      target,
      variant = "default",
      ...rest
    } = props;
    // Set initial underline style for certain variants
    const finalIsUnderlined =
      variant === "backwards" ||
      variant === "forwards" ||
      variant === "standalone"
        ? false
        : isUnderlined;
    const rel = variant === "external" ? "nofollow noopener noreferrer" : null;
    const internalTarget =
      variant === "external" ? "_blank" : target ? target : null;
    // Merge the necessary props alongside any extra props for the
    // anchor element.
    const linkProps = {
      id,
      href,
      onClick,
      rel,
      ref,
      target: internalTarget,
      ...rest,
    };
    // The "default" variant.
    let finalVariant = "link";

    if (
      variant === "action" ||
      variant === "backwards" ||
      variant === "external" ||
      variant === "forwards" ||
      variant === "standalone"
    ) {
      finalVariant = "moreLink";
    } else if (variant.includes("button")) {
      finalVariant = variant;
    }
    const styles = useMultiStyleConfig("Link", {
      finalIsUnderlined,
      hasVisitedState,
      variant: finalVariant,
    });
    const sanitizedId = id
      ? id
      : sanitizeStringForAttribute(`link-${children as string}`);
    // Render with specific direction arrows if the variant is "forwards" or
    // "backwards". Or render with the launch icon if the variant is "external". Or
    // render with a smaller right-arrow if the variant is "standalone." Otherwise,
    // do not add an icon.
    const newChildren =
      ((variant === "forwards" || variant === "backwards") &&
        getWithDirectionIcon({
          children: children as JSX.Element,
          id: sanitizedId,
          variant,
        })) ||
      (variant === "external" &&
        getExternalExtraElements({
          children: children as JSX.Element,
          id: sanitizedId,
          styles: styles.screenreaderOnly,
        })) ||
      (variant === "standalone" &&
        getStandaloneIcon(children as JSX.Element, sanitizedId)) ||
      children;

    const screenReaderOnlyElement = screenreaderOnlyText ? (
      <Box as="span" __css={styles.screenreaderOnly}>
        {screenreaderOnlyText}
      </Box>
    ) : null;

    return (
      <ChakraLink
        as={as}
        data-testid="ds-link"
        {...linkProps}
        sx={styles.base}
        {...rest}
      >
        {newChildren}
        {screenReaderOnlyElement}
      </ChakraLink>
    );
  }),
  { shouldForwardProp: () => true }
);

export default Link;
