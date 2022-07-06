import React from "react";
import { Box, chakra, useMultiStyleConfig, VStack } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import Text from "../../Text/Text";
import { loginLinks, loggedInLinks } from "../utils/headerUtils";

export interface HeaderLoginProps {
  catalogRef?: React.RefObject<HTMLAnchorElement>;
  greetingRef?: React.RefObject<HTMLDivElement>;
  isMobile?: boolean;
  patronName?: string;
}

const HeaderLogin = chakra(
  ({ catalogRef, greetingRef, isMobile, patronName }: HeaderLoginProps) => {
    const styles = useMultiStyleConfig("HeaderLogin", {
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
              key="logInCatalog"
              href={patronName ? loggedInLinks.catalog : loginLinks.catalog}
              ref={catalogRef}
              type="button"
            >
              <Icon
                align="left"
                color="ui.white"
                name="utilityAccountFilled"
                size={isMobile ? "xlarge" : "medium"}
                title="Log in to your account"
              />
              <span>
                {patronName ? "Go To The Catalog" : "Log Into The Catalog"}
              </span>
            </Link>,
            <Link
              href={patronName ? loggedInLinks.research : loginLinks.research}
              key="logInResearch"
              type="button"
            >
              <Icon
                align="left"
                color="ui.white"
                name="building"
                size={isMobile ? "xlarge" : "medium"}
                title="Log in to your account"
              />
              <span>
                {patronName
                  ? "Go To The Research Catalog"
                  : "Log Into The Research Catalog"}
              </span>
            </Link>,
          ]}
          noStyling
          type="ul"
        />
        {patronName && (
          <Link href={logOutLink} type="button" __css={styles.logoutButton}>
            {!isMobile && (
              <Icon align="left" name="actionLaunch" size="medium" />
            )}
            Log Out
          </Link>
        )}
      </VStack>
    );
  }
);

export default HeaderLogin;
