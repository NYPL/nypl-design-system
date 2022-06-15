import React from "react";
import { Box, chakra, useMultiStyleConfig, VStack } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import Text from "../../Text/Text";
import { LoginProps } from "./UpperNav";

const Login = chakra(
  ({ catalogRef, greetingRef, isMobile, patronName }: LoginProps) => {
    const styles = useMultiStyleConfig("HeaderLogin", {
      isMobile,
      patronName,
    });
    return (
      <VStack display={isMobile ? "block" : "flex"} __css={styles}>
        {patronName && (
          <Box
            id="patronGreeting"
            data-testid="patronGreeting"
            ref={greetingRef}
            tabIndex={0}
          >
            <Text className="greeting">You are logged in as: </Text>
            <Text className="name">{patronName}</Text>
          </Box>
        )}
        <List
          listItems={[
            <Link
              id="logInCatalog"
              key="logInCatalog"
              href="https://browse.nypl.org/iii/encore/myaccount"
              ref={catalogRef}
              type="button"
            >
              <Icon
                align="left"
                color="ui.white"
                id="log-in-catalog-icon"
                name="utilityAccountFilled"
                size="medium"
                title="Log in to your account"
              />
              {patronName ? "Go To The Catalog" : "Log Into The Catalog"}
            </Link>,
            <Link
              id="logInResearchCatalog"
              key="logInResearchCatalog"
              href="#"
              type="button"
            >
              <Icon
                align="left"
                color="ui.white"
                id="log-in-research-icon"
                name="actionHelpDefault"
                size="medium"
                title="Log in to your account"
              />
              {patronName
                ? "Go To The Research Catalog"
                : "Log Into The Research Catalog"}
            </Link>,
          ]}
          noStyling
          type="ul"
        />
        {patronName && (
          <Link
            href="https://login.nypl.org/auth/logout?redirect_uri=https://browse.nypl.org/iii/encore/myaccount?lang=eng"
            id="logoutButton"
            type="button"
          >
            {!isMobile && (
              <Icon
                align="left"
                color="#1B7FA7"
                name="actionLaunch"
                size="medium"
              />
            )}
            Log Out
          </Link>
        )}
      </VStack>
    );
  }
);

export default Login;
