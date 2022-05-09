import React from "react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Button from "../../Button/Button";
import { ButtonTypes } from "../../Button/ButtonTypes";
import Icon from "../../Icons/Icon";
import {
  IconAlign,
  IconColors,
  IconNames,
  IconSizes,
} from "../../Icons/IconTypes";
import Link from "../../Link/Link";
import List from "../../List/List";
import { ListTypes } from "../../List/ListTypes";
import { LinkTypes } from "../../Link/LinkTypes";

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
            buttonType={ButtonTypes.Link}
            className="withIcon"
            id={logInOpen ? "closeLogInButton" : "logInButton"}
            key={logInOpen ? "closeLogInButton" : "logInButton"}
            onClick={() => setLogInOpen(!logInOpen)}
          >
            {logInOpen ? "Close" : "Log In"}
            <Icon
              align={IconAlign.Right}
              name={logInOpen ? IconNames.Close : IconNames.Arrow}
              size={IconSizes.Small}
            />
          </Button>
          <List
            id={logInOpen ? "logInMenuOpen" : "logInMenuClosed"}
            noStyling
            type={ListTypes.Unordered}
            listItems={[
              <Link
                id="logInCatalog"
                key="logInCatalog"
                href="#"
                type={LinkTypes.Button}
              >
                <Icon
                  align={IconAlign.Left}
                  color={IconColors.UiWhite}
                  id="log-in-catalog-icon"
                  name={IconNames.UtilityAccountFilled}
                  size={IconSizes.Medium}
                  title="Log in to your account"
                />
                Log Into The Catalog
              </Link>,
              <Link
                id="logInResearchCatalog"
                key="logInResearchCatalog"
                href="#"
                type={LinkTypes.Button}
              >
                <Icon
                  align={IconAlign.Left}
                  color={IconColors.UiWhite}
                  id="log-in-research-icon"
                  name={IconNames.ActionHelpDefault}
                  size={IconSizes.Medium}
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
            <Icon
              name={IconNames.Arrow}
              align={IconAlign.Right}
              size={IconSizes.Small}
            />
          </>
        </Link>,
        <Button
          buttonType={ButtonTypes.Callout}
          id="donateButton"
          key="donateButton"
        >
          Donate
        </Button>,
        <Link href="#" key="shopLink">
          Shop
        </Link>,
      ]}
      noStyling
      type={ListTypes.Unordered}
    />
  );
});

export default HeaderUpperNav;
