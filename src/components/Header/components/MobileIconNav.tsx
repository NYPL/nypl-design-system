import React from "react";
import { chakra, Flex, useStyleConfig } from "@chakra-ui/react";

import HeaderComponents from "./index";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";

const MobileIconNav = chakra(() => {
  const styles = useStyleConfig("HeaderMobileIconNav");

  return (
    <Flex sx={styles}>
      <HeaderComponents.LoginButton isMobile />
      <Link
        aria-label="NYPL Locations Near Me"
        href="https://nypl.org/locations"
      >
        <Icon name="locator" size="large" title="NYPL Locator" />
      </Link>
      <HeaderComponents.SearchButton isMobile />
      <HeaderComponents.MobileNavButton />
    </Flex>
  );
});

export default MobileIconNav;
