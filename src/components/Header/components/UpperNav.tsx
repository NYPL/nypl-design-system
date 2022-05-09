import React from "react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";

const HeaderUpperNav = chakra(({ logInOpen, setLogInOpen }) => {
  const styles = useMultiStyleConfig("HeaderUpperNav", {});
  return (
    <List
      __css={styles.upperNav}
      id="header-nav-upper"
      inline
      listItems={[
        <>
          <Button
            buttonType="link"
            className="withIcon"
            id={logInOpen ? "closeLogInButton" : "logInButton"}
            key={logInOpen ? "closeLogInButton" : "logInButton"}
            onClick={() => setLogInOpen(!logInOpen)}
          >
            {logInOpen ? "Close" : "Log In"}
            <Icon
              align="right"
              name={logInOpen ? "close" : "arrow"}
              size="small"
            />
          </Button>
          <List
            id={logInOpen ? "logInMenuOpen" : "logInMenuClosed"}
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
        </>,
        <Link href="#" key="locationsLink">
          Locations
        </Link>,
        <Link href="#" key="libraryCardLink">
          Get A Library Card
        </Link>,
        <Link
          className="withIcon"
          id="emailUpdatesButton"
          key="emailUpdatesButton"
          href="#"
        >
          <>
            Get Email Updates
            <Icon name="arrow" align="right" size="small" />
          </>
        </Link>,
        <Button buttonType="callout" id="donateButton" key="donateButton">
          Donate
        </Button>,
        <Link href="#" key="shopLink">
          Shop
        </Link>,
      ]}
      noStyling
      type="ul"
    />
  );
});

export default HeaderUpperNav;
