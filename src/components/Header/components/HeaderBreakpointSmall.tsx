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
import { IconNames, IconSizes } from "../../Icons/IconTypes";
import Logo from "../../Logo/Logo";
import { LogoNames, LogoSizes } from "../../Logo/LogoTypes";

const HeaderBreakpointSmall = chakra(() => {
  const styles = useMultiStyleConfig("Header", {});
  return (
    <Flex>
      <Link href="/" __css={{ ...styles.logo, marginTop: "13px" }}>
        <Logo
          __css={{ height: "30px" }}
          id="header-nypl-logo"
          name={LogoNames.NYPLLionBlack}
          size={LogoSizes.ExtraExtraSmall}
          title="NYPL Header Logo"
        />
      </Link>
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
  );
});

export default HeaderBreakpointSmall;
