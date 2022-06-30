import {
  Box,
  chakra,
  Flex,
  Spacer,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import Logo from "../../Logo/Logo";
import SimpleGrid from "../../Grid/SimpleGrid";
import gaUtils from "../utils/googleAnalyticsUtils";
import { upperNavLinks, lowerNavLinks } from "../utils/headerUtils";

/**
 * The Header navigation for the mobile view.
 */
const MobileNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderMobileNav", {});

  return (
    <Box __css={styles}>
      <Flex>
        <Box>
          <Logo
            decorative={false}
            name="nyplTextWhite"
            size="xsmall"
            title="NYPL Header Logo"
            __css={styles.logo}
          />
        </Box>
        <Spacer />
        <nav aria-label="Header mobile links">
          <List
            id="header-mobile-nav"
            listItems={[
              <Link href={lowerNavLinks.books} key="booksMusicMoviesLink">
                Books/Music/Movies
              </Link>,
              <Link href={lowerNavLinks.research} key="researchLink">
                Research
              </Link>,
              <Link href={lowerNavLinks.education} key="educationLink">
                Education
              </Link>,
              <Link href={lowerNavLinks.events} key="eventsLink">
                Events
              </Link>,
              <Link href={lowerNavLinks.connect} key="connectLink">
                Connect
              </Link>,
              <Link href={lowerNavLinks.give} key="giveLink">
                Give
              </Link>,
              <Link href={lowerNavLinks.getHelp} key="getHelpLink">
                Get Help
              </Link>,
            ]}
            noStyling
            type="ul"
            __css={styles.sideNav}
          />
        </nav>
      </Flex>
      <SimpleGrid gap="0" data-testid="bottomLinks" __css={styles.bottomLinks}>
        <Link
          href={upperNavLinks.libraryCard}
          borderTop="1px solid rgb(54, 54, 54)"
          borderRight="1px solid rgb(54, 54, 54)"
          gridColumn="1 / span 1"
          onClick={() =>
            gaUtils.trackEvent("Click", "Mobile Bottom Buttons - Library Card")
          }
        >
          <Icon
            align="left"
            color="ui.white"
            name="decorativeLibraryCard"
            size="large"
          />
          Get a Library Card
        </Link>
        <Link
          href={upperNavLinks.emailUpdates}
          borderTop="1px solid rgb(54, 54, 54)"
          gridColumn="2 / span 1"
          onClick={() =>
            gaUtils.trackEvent("Click", "Mobile Bottom Buttons - Email Updates")
          }
        >
          <Icon
            align="left"
            color="ui.white"
            name="decorativeEnvelope"
            size="large"
          />
          Get Email Updates
        </Link>
        <Link
          href={upperNavLinks.shop}
          borderTop="1px solid rgb(54, 54, 54)"
          gridColumn="1 / span 2"
          onClick={() =>
            gaUtils.trackEvent("Click", "Mobile Bottom Buttons - Shop NYPL")
          }
        >
          <Icon
            align="left"
            color="ui.white"
            name="decorativeShoppingBag"
            size="large"
          />
          Shop NYPL
        </Link>
        <Link
          href={upperNavLinks.donate}
          gridColumn="1 / span 2"
          onClick={() => gaUtils.trackEvent("Donate", "Mobile Buttons Donate")}
        >
          Donate
        </Link>
      </SimpleGrid>
    </Box>
  );
});

export default MobileNav;
