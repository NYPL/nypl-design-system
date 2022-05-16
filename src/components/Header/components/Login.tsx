import React from "react";
import { chakra } from "@chakra-ui/react";
import FocusLock from "@chakra-ui/focus-lock";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import { LoginProps } from "./UpperNav";

const Login = chakra(({ loginOpen, setLoginOpen }: LoginProps) => {
  return (
    <FocusLock isDisabled={!loginOpen}>
      <Button
        buttonType="link"
        className={`withIcon ${loginOpen ? "closeLoginButton" : "loginButton"}`}
        id="loginButton"
        onClick={() => setLoginOpen(!loginOpen)}
      >
        {loginOpen ? "Close" : "Log In"}
        <Icon align="right" name={loginOpen ? "close" : "arrow"} size="small" />
      </Button>
      {loginOpen && (
        <List
          id="login"
          className="loginMenu"
          noStyling
          type="ul"
          listItems={[
            <Link id="logInCatalog" key="logInCatalog" href="#" type="button">
              <Icon
                align="left"
                color="ui.white"
                id="log-in-catalog-icon"
                name="utilityAccountFilled"
                size="medium"
                title="Log in to your account"
              />
              Log Into The Catalog
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
              Log Into The Research Catalog
            </Link>,
          ]}
        />
      )}
    </FocusLock>
  );
});

export default Login;
