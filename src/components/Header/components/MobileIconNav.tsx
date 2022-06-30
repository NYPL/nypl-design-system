import React from "react";
import { chakra, Flex, useStyleConfig } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import LoginButton from "./LoginButton";
import MobileNavButton from "./MobileNavButton";
import SearchButton from "./SearchButton";
import gaUtils from "../utils/googleAnalyticsUtils";

const MobileIconNav = chakra(() => {
  const styles = useStyleConfig("HeaderMobileIconNav");

  return (
    <Flex sx={styles}>
      <LoginButton isMobile />
      <Link
        aria-label="NYPL Locations Near Me"
        href="https://nypl.org/locations"
        onClick={() => gaUtils.trackEvent("Click", "Mobile Locations Button")}
      >
        <Icon name="locator" size="large" title="NYPL Locator" />
      </Link>
      <SearchButton isMobile />
      <MobileNavButton />
    </Flex>
  );
});

export default MobileIconNav;
