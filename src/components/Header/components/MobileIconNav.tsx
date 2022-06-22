import React from "react";
import { chakra, Flex, useStyleConfig } from "@chakra-ui/react";

import HeaderComponents from "./index";
import Icon from "../../Icons/Icon";
import { LoginProps } from "./UpperNav";
import Link from "../../Link/Link";

const MobileIconNav = chakra(({ patronName }: LoginProps) => {
  const styles = useStyleConfig("HeaderMobileIconNav");

  return (
    <Flex sx={styles}>
      <HeaderComponents.LoginButton isMobile patronName={patronName} />
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
