import React from "react";
import { chakra } from "@chakra-ui/react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";

interface LoginProps {
  loginOpen: boolean;
  setLoginOpen: (boolean) => void;
}

const Login = chakra(({ loginOpen, setLoginOpen }: LoginProps) => {
  return (
    <>
      <Button
        buttonType="link"
        className="withIcon"
        id={loginOpen ? "closeLogInButton" : "logInButton"}
        onClick={() => setLoginOpen(!loginOpen)}
      >
        {loginOpen ? "Close" : "Log In"}
        <Icon align="right" name={loginOpen ? "close" : "arrow"} size="small" />
      </Button>
      <List
        id={loginOpen ? "logInMenuOpen" : "logInMenuClosed"}
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
    </>
  );
});

export default Login;
