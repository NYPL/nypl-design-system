import React from "react";
import { Box, chakra, useMultiStyleConfig, VStack } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import Text from "../../Text/Text";
import { LoginProps } from "./UpperNav";
import { loginLinks, loggedInLinks } from "../headerUtils";

const Login = chakra(
  ({ catalogRef, greetingRef, isMobile, patronName }: LoginProps) => {
    const styles = useMultiStyleConfig("HeaderLogin", {
      isMobile,
      patronName,
    });
    const logOutLink = `${loggedInLinks.logOutLink}?redirect_uri=${window.location.href}`;
    return (
      <VStack __css={styles}>
        {patronName && (
          <Box
            data-testid="patronGreeting"
            ref={greetingRef}
            tabIndex={0}
            __css={styles.patronGreeting}
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
              href={patronName ? loggedInLinks.catalog : loginLinks.catalog}
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
              href={patronName ? loggedInLinks.research : loginLinks.research}
              key="logInResearch"
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
          <Link href={logOutLink} type="button" __css={styles.logoutButton}>
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
