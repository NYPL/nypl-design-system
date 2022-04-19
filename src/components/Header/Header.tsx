import React from "react";
import {
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
import { IconAlign, IconNames, IconSizes } from "../Icons/IconTypes";
import Link from "../Link/Link";
import List from "../List/List";
import { ListTypes } from "../List/ListTypes";
import Logo from "../Logo/Logo";
import { LogoNames, LogoSizes } from "../Logo/LogoTypes";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Notification from "../Notification/Notification";

const Header = () => {
  const styles = useMultiStyleConfig("Header", {});
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpointLarge = 1025;
  const breakpointMedium = 769;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

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
      {width > breakpointMedium ? (
        <Flex marginX={{ xl: "70px", lg: "40px" }}>
          <Logo
            __css={styles.logo}
            id="header-nypl-logo"
            name={
              width > breakpointLarge
                ? LogoNames.NYPLBlack
                : LogoNames.NYPLLionBlack
            }
            size={
              width > breakpointLarge
                ? LogoSizes.Small
                : LogoSizes.ExtraExtraSmall
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
                  buttonType={ButtonTypes.Link}
                  className="withIcon"
                  id="logInButton"
                  key="logInButton"
                >
                  Log In
                  <Icon
                    name={IconNames.Arrow}
                    align={IconAlign.Right}
                    size={IconSizes.Small}
                  />
                </Button>,
                <Link href="#" key="locationsLink">
                  Locations
                </Link>,
                <Link href="#" key="libraryCardLink">
                  Get A Library Card
                </Link>,
                <Button
                  buttonType={ButtonTypes.Link}
                  className="withIcon"
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
                <Button id="donateButton" key="donateButton">
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
};
export default Header;
