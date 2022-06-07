import React from "react";
import { chakra, Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Login from "./Login";
import { LoginProps } from "./UpperNav";

const Mobile = chakra(({ loginOpen, patronName, setLoginOpen }: LoginProps) => {
  const styles = useMultiStyleConfig("HeaderMobile", {});
  return (
    <Flex>
      <HStack __css={styles.icons}>
        <Login
          key="login"
          isMobile
          loginOpen={loginOpen}
          patronName={patronName}
          setLoginOpen={setLoginOpen}
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
