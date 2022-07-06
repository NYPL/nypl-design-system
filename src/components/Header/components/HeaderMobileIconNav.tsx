import React from "react";
import { chakra, Flex, useStyleConfig } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderMobileNavButton from "./HeaderMobileNavButton";
import HeaderSearchButton from "./HeaderSearchButton";

const HeaderMobileIconNav = chakra(() => {
  const styles = useStyleConfig("HeaderMobileIconNav");

  return (
    <Flex sx={styles}>
      <HeaderLoginButton isMobile />
      <Link
        aria-label="NYPL Locations Near Me"
        href="https://nypl.org/locations"
      >
        <Icon name="locator" size="large" title="NYPL Locator" />
      </Link>
      <HeaderSearchButton isMobile />
      <HeaderMobileNavButton />
    </Flex>
  );
});

export default HeaderMobileIconNav;
