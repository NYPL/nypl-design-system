import React, { useState } from "react";
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
import { ButtonTypes } from "../Button/ButtonTypes";
import Icon from "../Icons/Icon";
import {
  IconAlign,
  IconColors,
  IconNames,
  IconSizes,
} from "../Icons/IconTypes";
import Link from "../Link/Link";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import Logo from "../Logo/Logo";
import { LogoNames, LogoSizes } from "../Logo/LogoTypes";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Notification from "../Notification/Notification";
import useWindowSize from "../../hooks/useWindowSize";

export const Header = chakra(() => {
  const windowDimensions = useWindowSize();
  // These values are based on the breakpoints md and lg
  // from the NYPL theme object.
  const breakpointMedium = 600;
  const breakpointLarge = 960;

  const styles = useMultiStyleConfig("Header", {});

  const [logInOpen, setLogInOpen] = useState<boolean>(false);

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
                ? LogoNames.NYPLBlack
                : LogoNames.NYPLLionBlack
            }
            size={
              windowDimensions.width > breakpointLarge
                ? LogoSizes.Small
                : LogoSizes.ExtraExtraSmall
            }
            title="NYPL Header Logo"
          />
          <VStack spacing="65px" align="flex-end">
            <List
              __css={styles.upperLinksList}
              id="header-nav-upper"
              inline
              listItems={[
                <>
                  <Button
                    buttonType={ButtonTypes.Link}
                    className="buttonWithIcon"
                    id={logInOpen ? "closeLogInButton" : "logInButton"}
                    key={logInOpen ? "closeLogInButton" : "logInButton"}
                    onClick={() => setLogInOpen(!logInOpen)}
                  >
                    {logInOpen ? "Close" : "Log In"}
                    <Icon
                      align={IconAlign.Right}
                      name={logInOpen ? IconNames.Close : IconNames.Arrow}
                      size={IconSizes.Small}
                    />
                  </Button>
                  <List
                    id={logInOpen ? "logInMenuOpen" : "logInMenuClosed"}
                    noStyling
                    type={ListTypes.Unordered}
                    listItems={[
                      <Button
                        buttonType={ButtonTypes.Pill}
                        id="logInCatalog"
                        key="logInCatalog"
                      >
                        <Icon
                          align={IconAlign.Left}
                          color={IconColors.UiWhite}
                          id="log-in-icon"
                          name={IconNames.UtilityAccountFilled}
                          size={IconSizes.Medium}
                          title="Log in to your account"
                        />
                        Log Into The Catalog
                      </Button>,
                      <Button
                        buttonType={ButtonTypes.Pill}
                        id="logInResearchCatalog"
                        key="logInResearchCatalog"
                      >
                        <Icon
                          align={IconAlign.Left}
                          color={IconColors.UiWhite}
                          id="log-in-icon"
                          name={IconNames.ActionHelpDefault}
                          size={IconSizes.Medium}
                          title="Log in to your account"
                        />
                        Log Into The Research Catalog
                      </Button>,
                    ]}
                  />
                </>,
                <Link href="#" key="locationsLink">
                  Locations
                </Link>,
                <Link href="#" key="libraryCardLink">
                  Get A Library Card
                </Link>,
                <Button
                  buttonType={ButtonTypes.Link}
                  className="buttonWithIcon"
                  id="emailUpdatesButton"
                  key="emailUpdatesButton"
                >
                  Get Email Updates
                  <Icon
                    name={IconNames.Arrow}
                    align={IconAlign.Right}
                    size={IconSizes.Small}
                  />
                </Button>,
                <Button
                  buttonType={ButtonTypes.Callout}
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
              type={ListTypes.Unordered}
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
                <Button
                  buttonType={ButtonTypes.Link}
                  id="searchButton"
                  key="searchButton"
                >
                  Search
                  <Icon
                    name={IconNames.Search}
                    align={IconAlign.Right}
                    size={IconSizes.Small}
                  />
                </Button>,
              ]}
              noStyling
              type={ListTypes.Unordered}
            />
          </VStack>
        </Flex>
      ) : (
        <Flex>
          <Box>
            <Logo
              __css={{ ...styles.logo, marginTop: "13px", height: "30px" }}
              id="header-nypl-logo"
              name={LogoNames.NYPLLionBlack}
              size={LogoSizes.ExtraExtraSmall}
              title="NYPL Header Logo"
            />
          </Box>
          <Spacer />
          <HStack __css={styles.icons}>
            <Icon
              id="log-in-icon"
              name={IconNames.UtilityAccountUnfilled}
              size={IconSizes.Medium}
              title="Log in to your account"
            />
            <Icon
              id="locator-icon"
              name={IconNames.ActionHelpOutline}
              size={IconSizes.Medium}
              title="NYPL Locator"
            />
            <Icon
              id="search-icon"
              name={IconNames.Search}
              size={IconSizes.Medium}
              title="Search"
            />
            <Icon
              id="hamburger-icon"
              name={IconNames.UtilityHamburger}
              size={IconSizes.Medium}
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
