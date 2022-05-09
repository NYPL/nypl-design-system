import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Spacer,
  useMultiStyleConfig,
} from "@chakra-ui/react";

import Link from "../../Link/Link";
import Icon from "../../Icons/Icon";
import Logo from "../../Logo/Logo";

const HeaderBreakpointSmall = chakra(() => {
  const styles = useMultiStyleConfig("Header", {});
  return (
    <Flex>
      <Link href="/" __css={{ ...styles.logo, marginTop: "13px" }}>
        <Logo
          __css={{ height: "30px" }}
          id="header-nypl-logo"
          name="nyplLionBlack"
          size="xxsmall"
          title="NYPL Header Logo"
        />
      </Link>
      <Spacer />
      <HStack __css={styles.icons}>
        <Icon
          id="log-in-icon"
          name="utilityAccountUnfilled"
          size="medium"
          title="Log in to your account"
        />
        <Icon
          id="locator-icon"
          name="actionHelpOutline"
          size="medium"
          title="NYPL Locator"
        />
        <Icon id="search-icon" name="search" size="medium" title="Search" />
        <Icon
          id="hamburger-icon"
          name="utilityHamburger"
          size="medium"
          title="Menu"
        />
      </HStack>
    </Flex>
  );
});

export default HeaderBreakpointSmall;
