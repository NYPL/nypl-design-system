import React from "react";
import { chakra, Flex, HStack } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import LoginButton from "./LoginButton";
import { LoginProps } from "./UpperNav";
import MobileNavButton from "./MobileNavButton";
import SearchButton from "./SearchButton";

const Mobile = chakra(({ loginOpen, patronName, setLoginOpen }: LoginProps) => (
  <Flex>
    <HStack>
      <LoginButton
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
      <SearchButton isMobile />
      <MobileNavButton />
    </HStack>
  </Flex>
));

export default Mobile;
