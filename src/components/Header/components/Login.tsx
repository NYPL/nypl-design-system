import React, { useEffect, useRef } from "react";
import { Box, chakra, useMultiStyleConfig, VStack } from "@chakra-ui/react";
import FocusLock from "@chakra-ui/focus-lock";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import Text from "../../Text/Text";
import { LoginProps } from "./UpperNav";

const Login = chakra(
  ({ isMobile, loginOpen, patronName, setLoginOpen }: LoginProps) => {
    const desktopIcon = loginOpen ? "close" : "arrow";
    const mobileIcon = loginOpen
      ? "utilityAccountFilled"
      : "utilityAccountUnfilled";
    const desktopButtonLabel = loginOpen
      ? "Close"
      : patronName
      ? "My Account"
      : "Log In";
    const greeting = useRef(null);
    const styles = useMultiStyleConfig("HeaderLogin", { isMobile, loginOpen });

    useEffect(() => {
      if (patronName && loginOpen) {
        greeting.current.focus();
      }
    }, [loginOpen, patronName]);

    return (
      <FocusLock isDisabled={!loginOpen}>
        <Button
          buttonType="link"
          className={`withIcon ${
            loginOpen
              ? "closeLoginButton"
              : patronName
              ? "accountButton"
              : "loginButton"
          }`}
          id="loginButton"
          onClick={() => setLoginOpen(!loginOpen)}
          __css={styles.loginBtn}
        >
          {isMobile ? null : desktopButtonLabel}
          <Icon
            align="right"
            name={isMobile ? mobileIcon : desktopIcon}
            size={isMobile ? "large" : "small"}
            title="Log in to your account"
          />
        </Button>
        {loginOpen && (
          <VStack className="loginMenu" __css={styles.loginMenu}>
            {patronName && (
              <Box
                id="patronGreeting"
                data-testid="patronGreeting"
                ref={greeting}
                tabIndex={0}
              >
                <Text className="greeting">You are logged in as: </Text>
                <Text className="name">{patronName}</Text>
              </Box>
            )}
            <List
              id="login"
              noStyling
              type="ul"
              listItems={[
                <Link
                  id="logInCatalog"
                  key="logInCatalog"
                  href="https://browse.nypl.org/iii/encore/myaccount"
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
            />
            {patronName && (
              <Link
                href="https://login.nypl.org/auth/logout?redirect_uri=https://browse.nypl.org/iii/encore/myaccount?lang=eng"
                id="logoutButton"
                type="button"
              >
                <Icon
                  align="left"
                  color="#1B7FA7"
                  name="actionLaunch"
                  size="medium"
                />
                Log Out
              </Link>
            )}
          </VStack>
        )}
      </FocusLock>
    );
  }
);

export default Login;
