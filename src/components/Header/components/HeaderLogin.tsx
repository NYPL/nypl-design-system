import React, { useContext } from "react";
import { Box, chakra, useMultiStyleConfig, VStack } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import Text from "../../Text/Text";
import { getLoginLinks } from "../utils/headerUtils";
import gaUtils from "../utils/googleAnalyticsUtils";
import { HeaderContext } from "../context/headerContext";

export interface HeaderLoginProps {
  catalogRef?: React.RefObject<HTMLDivElement & HTMLAnchorElement>;
  greetingRef?: React.RefObject<HTMLDivElement>;
  isMobile?: boolean;
  patronName?: string;
}

const HeaderLogin = chakra(
  ({ catalogRef, greetingRef, isMobile, patronName }: HeaderLoginProps) => {
    const { isProduction } = useContext(HeaderContext);
    const { catalogLink, researchLink, logOutLink } = getLoginLinks(
      patronName,
      isProduction
    );
    const styles = useMultiStyleConfig("HeaderLogin", {
      patronName,
    });
    const updatedLogOutLink = `${logOutLink}?redirect_uri=${window.location.href}`;
    const gaAction = `${isMobile ? "Mobile " : ""}${
      patronName ? "Go To" : "Log In"
    }`;

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
              href={catalogLink}
              onClick={() => gaUtils.trackEvent(gaAction, "Catalog")}
              ref={catalogRef}
              type="button"
            >
              <Icon
                align="left"
                color="ui.white"
                name="legacyAccountUnfilled"
                size={isMobile ? "xlarge" : "medium"}
                title="Log in to your account"
              />
              <span>
                {patronName ? "Go To The Catalog" : "Log Into The Catalog"}
              </span>
            </Link>,
            <Link
              href={researchLink}
              key="logInResearch"
              onClick={() => gaUtils.trackEvent(gaAction, "Research")}
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
          <Link
            href={updatedLogOutLink}
            type="button"
            onClick={() => gaUtils.trackEvent("My Account", "Log Out")}
            __css={styles.logoutButton}
          >
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
