import React from "react";
import { chakra, Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";

const Mobile = chakra(() => {
  const styles = useMultiStyleConfig("HeaderMobile", {});
  return (
    <Flex>
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

export default Mobile;
