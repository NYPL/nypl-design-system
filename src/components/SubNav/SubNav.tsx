import React, { forwardRef } from "react";
import {
  Box,
  chakra,
  ChakraComponent,
  useMultiStyleConfig,
  Flex,
  BoxProps,
} from "@chakra-ui/react";
import Button from "../Button/Button";
import Link from "../Link/Link";
import List from "../List/List";
import useScrollFadeStyles from "../../hooks/useScrollFadeStyles";
import { bgColorsArray, highlightColorsArray } from "../../theme/sharedTypes";

export type actionBackgroundColors = typeof bgColorsArray[number];
export type highlightColors = typeof highlightColorsArray[number];

export interface SubNavProps extends BoxProps {
  /**
   * The background color to be applied to the hover and active states
   * of the SubNavLink and SubNavButton components.
   * This allows for customization of the action items.
   */
  actionBackgroundColor?: actionBackgroundColors;
  /**
   * Custom color for SubNavLink, SubNavButton, and icons.
   */
  highlightColor?: highlightColors;
  /**
   * Primary actions displayed on the left side of the SubNav.
   * Use SubNavButton and SubNavLink components, which mirror
   * the DS Button and Link.
   */
  primaryActions: React.ReactNode;
  /**
   * Secondary actions displayed on the right side of the SubNav.
   * Use SubNavButton and SubNavLink components, which mirror
   * the DS Button and Link.
   */
  secondaryActions?: React.ReactNode;
}

interface SubNavItemProps {
  id: string;
  isOutlined?: boolean;
  isSelected?: boolean;
  screenreaderOnlyText?: string;
}

interface SubNavLinkProps extends SubNavItemProps, Pick<BoxProps, "as"> {
  href: string;
}

interface SubNavButtonProps extends SubNavItemProps {
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export const SubNavButton: React.FC<
  React.PropsWithChildren<SubNavButtonProps>
> = ({
  id,
  children,
  isOutlined,
  isSelected,
  onClick,
  screenreaderOnlyText = "",
}) => {
  const childrenStyles = useMultiStyleConfig("SubNavChildren", {
    isOutlined: isOutlined,
  });

  return (
    <li>
      <Button
        aria-current={isSelected ? "page" : null}
        variant="text"
        className={isSelected ? "ds-subNav-selectedItem" : ""}
        id={id}
        onClick={onClick}
        screenreaderOnlyText={screenreaderOnlyText}
        sx={childrenStyles.outLine}
      >
        {children}
      </Button>
    </li>
  );
};

export const SubNavLink: React.FC<React.PropsWithChildren<SubNavLinkProps>> = ({
  as = "a",
  id,
  children,
  isOutlined,
  isSelected,
  href,
  screenreaderOnlyText = "",
}) => {
  const childrenStyles = useMultiStyleConfig("SubNavChildren", {
    isOutlined: isOutlined,
  });

  return (
    <li>
      <Link
        aria-current={isSelected ? "page" : null}
        className={isSelected ? "ds-subNav-selectedItem" : ""}
        href={href}
        id={id}
        isUnderlined={false}
        key={id}
        screenreaderOnlyText={screenreaderOnlyText}
        type="action"
        sx={childrenStyles.outLine}
        as={as}
      >
        {children}
      </Link>
    </li>
  );
};

/**
 * The `SubNav` component is a navigation element that displays a group of
 * related action items (buttons or links) in a horizontal layout.  The action
 * items in the `SubNav` component will link to children within or perform
 * actions related to the current section of a website.
 */
export const SubNav: ChakraComponent<
  React.ForwardRefExoticComponent<
    React.PropsWithChildren<SubNavProps> & React.RefAttributes<HTMLDivElement>
  >,
  SubNavProps
> = chakra(
  forwardRef<HTMLDivElement, React.PropsWithChildren<SubNavProps>>(
    (
      {
        actionBackgroundColor,
        id,
        highlightColor,
        primaryActions,
        secondaryActions,
        ...rest
      },
      _ref?
    ) => {
      const { scrollableRef, showRightFade } = useScrollFadeStyles();

      if (actionBackgroundColor !== undefined && highlightColor === undefined) {
        console.warn(
          "NYPL Reservoir SubNav: The `actionBackgroundColor` prop has been passed, but the `highlightColor` prop has not been passed. Because of this, the `actionBackgroundColor` prop will be ignored."
        );
      }

      const backgroundColor =
        highlightColor !== undefined ? actionBackgroundColor : undefined;

      const styles = useMultiStyleConfig("SubNav", {
        backgroundColor: backgroundColor,
        highlightColor: highlightColor,
      });

      return (
        <Box
          as="nav"
          aria-label="Sub-navigation menu"
          data-testid="ds-subNav"
          id={id}
          __css={styles.base}
          {...rest}
        >
          <Box __css={styles.container}>
            <Flex alignItems="center" gap="s" justify="space-between">
              <Box sx={styles.primaryList}>
                <List
                  variant="ul"
                  m="0"
                  sx={{
                    ...styles.scrollableList,
                    ...styles.primaryActions,
                  }}
                  ref={scrollableRef}
                  inline
                  noStyling
                >
                  {primaryActions}
                </List>
                {showRightFade && <Box sx={styles.fadeEffect} />}
              </Box>
              {secondaryActions ? (
                <List
                  noStyling
                  inline
                  variant="ul"
                  sx={styles.secondaryActions}
                  m="0"
                  width="fit-content"
                >
                  {secondaryActions}
                </List>
              ) : null}
            </Flex>
          </Box>
        </Box>
      );
    }
  )
);

export default SubNav;
