import React from "react";
import { chakra, Flex } from "@chakra-ui/react";

import HeaderComponents from "./index";
import Icon from "../../Icons/Icon";
import { LoginProps } from "./UpperNav";

const Mobile = chakra(
  ({ isLoginOpen, patronName, setIsLoginOpen }: LoginProps) => (
    <Flex>
      <HeaderComponents.LoginButton
        isMobile
        isLoginOpen={isLoginOpen}
        patronName={patronName}
        setIsLoginOpen={setIsLoginOpen}
      />
      <Icon name="locator" size="medium" title="NYPL Locator" />
      <HeaderComponents.SearchButton isMobile />
      <HeaderComponents.MobileNavButton />
    </Flex>
  )
);

export default Mobile;
