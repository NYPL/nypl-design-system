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
import { siteNavLinks, upperNavLinks } from "../utils/headerUtils";

/**
 * This component renders the navigational list of links used to navigate
 * NYPL.org for mobile devices.
 */
const HeaderMobileNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderMobileNav", {});
  const listItems = siteNavLinks.map(({ href, text }) => (
    <Link
      href={href}
      key={text}
      onClick={() => gaUtils.trackEvent("Go to...", text)}
    >
      {text}
    </Link>
  ));

  return (
    <Box __css={styles}>
      <Flex>
        <Box>
          <Logo
            aria-label="NYPL Header Logo"
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
            listItems={listItems}
            noStyling
            type="ul"
            __css={styles.sideNav}
          />
        </nav>
      </Flex>
      <SimpleGrid gap="0" data-testid="bottomLinks" __css={styles.bottomLinks}>
        <Link
          href={upperNavLinks.libraryCard.href}
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
          {upperNavLinks.libraryCard.text}
        </Link>
        <Link
          href={upperNavLinks.emailUpdates.href}
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
          {upperNavLinks.emailUpdates.text}
        </Link>
        <Link
          href={upperNavLinks.shop.href}
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
          {upperNavLinks.shop.text} NYPL
        </Link>
        <Link
          href={upperNavLinks.donate.href}
          gridColumn="1 / span 2"
          onClick={() => gaUtils.trackEvent("Donate", "Mobile Buttons Donate")}
        >
          {upperNavLinks.donate.text.toUpperCase()}
        </Link>
      </SimpleGrid>
    </Box>
  );
});

export default HeaderMobileNav;
