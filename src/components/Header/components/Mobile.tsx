import React from "react";
import { chakra, Flex, HStack } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import LoginButton from "./LoginButton";
import { LoginProps } from "./UpperNav";
import MobileNavButton from "./MobileNavButton";
import SearchButton from "./SearchButton";

const Mobile = chakra(
  ({ isLoginOpen, patronName, setIsLoginOpen }: LoginProps) => (
    <Flex>
      <HStack>
        <LoginButton
          isMobile
          isLoginOpen={isLoginOpen}
          patronName={patronName}
          setIsLoginOpen={setIsLoginOpen}
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
  )
);

export default Mobile;
