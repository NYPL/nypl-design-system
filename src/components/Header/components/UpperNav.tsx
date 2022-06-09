import React from "react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Login from "./Login";
import Link from "../../Link/Link";
import List from "../../List/List";

export interface LoginProps {
  isMobile?: boolean;
  loginOpen: boolean;
  patronName: string;
  setLoginOpen: (boolean) => void;
}

const UpperNav = chakra(
  ({ loginOpen, patronName, setLoginOpen }: LoginProps) => {
    const styles = useMultiStyleConfig("HeaderUpperNav", {});
    return (
      <nav aria-label="Header top links">
        <List
          __css={styles.upperNav}
          id="header-nav-upper"
          inline
          listItems={[
            <Login
              key="login"
              loginOpen={loginOpen}
              patronName={patronName}
              setLoginOpen={setLoginOpen}
            />,
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
      </nav>
    );
  }
);

export default UpperNav;
