import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Spacer,
  useMultiStyleConfig,
  VStack,
} from "@chakra-ui/react";

import Button from "../Button/Button";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Icon from "../Icons/Icon";
import Link from "../Link/Link";
import List from "../List/List";
import Logo from "../Logo/Logo";
import Notification from "../Notification/Notification";
import useWindowSize from "../../hooks/useWindowSize";

export const Header = chakra(() => {
  const styles = useMultiStyleConfig("Header", {});
  const windowDimensions = useWindowSize();
  // These values are based on the breakpoints md and lg
  // from the NYPL theme object.
  const breakpointMedium = 600;
  const breakpointLarge = 960;

  return (
    <Box __css={styles.container}>
      <Notification
        __css={styles.notification}
        id="above-header-notification"
        isCentered
        noMargin
        notificationContent={
          <>
            Masks are encouraged at all NYPL locations.{" "}
            <Link href="https://nypl.org/reopening" id="reopening-link">
              Learn more and find information about our hours and services.
            </Link>
          </>
        }
        showIcon={false}
      />
      {windowDimensions.width > breakpointMedium ? (
        <Flex marginX={{ xl: "150px", lg: "75px" }}>
          <Logo
            __css={styles.logo}
            id="header-nypl-logo"
            name={
              windowDimensions.width > breakpointLarge
                ? "logo_nypl_full_black"
                : "logo_nypl_lion_black"
            }
            size={
              windowDimensions.width > breakpointLarge ? "small" : "xxsmall"
            }
            title="NYPL Header Logo"
          />
          <VStack spacing="65px" align="flex-end">
            <List
              __css={styles.upperLinks}
              id="header-nav-upper"
              inline
              listItems={[
                <Button
                  buttonType="link"
                  className="withIcon"
                  id="logInButton"
                  key="logInButton"
                >
                  Log In
                  <Icon name="arrow" align="right" size="small" />
                </Button>,
                <Link href="#" key="locationsLink">
                  Locations
                </Link>,
                <Link href="#" key="libraryCardLink">
                  Get A Library Card
                </Link>,
                <Button
                  buttonType="link"
                  className="withIcon"
                  id="emailUpdatesButton"
                  key="emailUpdatesButton"
                >
                  Get Email Updates
                  <Icon name="arrow" align="right" size="small" />
                </Button>,
                <Button
                  buttonType="callout"
                  id="donateButton"
                  key="donateButton"
                >
                  Donate
                </Button>,
                <Link href="#" key="shopLink">
                  Shop
                </Link>,
              ]}
              noStyling
              type="ul"
            />
            <List
              __css={styles.lowerLinks}
              id="header-nav-lower"
              inline
              listItems={[
                <Link href="#" key="booksMusicMoviesLink">
                  Books/Music/Movies
                </Link>,
                <Link href="#" key="researchLink">
                  Research
                </Link>,
                <Link href="#" key="educationLink">
                  Education
                </Link>,
                <Link href="#" key="eventsLink">
                  Events
                </Link>,
                <Link href="#" key="connectLink">
                  Connect
                </Link>,
                <Link href="#" key="giveLink">
                  Give
                </Link>,
                <Link href="#" key="getHelpLink">
                  Get Help
                </Link>,
                <Button buttonType="link" id="searchButton" key="searchButton">
                  Search
                  <Icon name="search" align="right" size="small" />
                </Button>,
              ]}
              noStyling
              type="ul"
            />
          </VStack>
        </Flex>
      ) : (
        <Flex>
          <Box>
            <Logo
              __css={{ ...styles.logo, marginTop: "13px", height: "30px" }}
              id="header-nypl-logo"
              name="logo_nypl_full_black"
              size="xxsmall"
              title="NYPL Header Logo"
            />
          </Box>
          <Spacer />
          <HStack __css={styles.icons}>
            <Icon
              id="log-in-icon"
              name="utility_account_unfilled"
              size="medium"
              title="Log in to your account"
            />
            <Icon
              id="locator-icon"
              name="action_help_outline"
              size="medium"
              title="NYPL Locator"
            />
            <Icon id="search-icon" name="search" size="medium" title="Search" />
            <Icon
              id="hamburger-icon"
              name="utility_hamburger"
              size="medium"
              title="Menu"
            />
          </HStack>
        </Flex>
      )}
      <HorizontalRule __css={styles.horizontalRule} />
    </Box>
  );
});

export default Header;
