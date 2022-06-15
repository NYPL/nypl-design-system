import React from "react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import LoginButton from "./LoginButton";

export interface LoginProps {
  catalogRef?: React.RefObject<HTMLAnchorElement>;
  greetingRef?: React.RefObject<HTMLDivElement>;
  isMobile?: boolean;
  isLoginOpen?: boolean;
  patronName: string;
  setIsLoginOpen?: (boolean) => void;
}

const UpperNav = chakra(
  ({ isLoginOpen, patronName, setIsLoginOpen }: LoginProps) => {
    const styles = useMultiStyleConfig("HeaderUpperNav", {});
    return (
      <nav aria-label="Header top links">
        <List
          id="header-nav-upper"
          inline
          listItems={[
            <LoginButton
              key="login"
              isLoginOpen={isLoginOpen}
              patronName={patronName}
              setIsLoginOpen={setIsLoginOpen}
            />,
            <Link href="#" key="locationsLink">
              Locations
            </Link>,
            <Link href="#" key="libraryCardLink">
              Get A Library Card
            </Link>,
            <Link id="emailUpdatesButton" key="emailUpdatesButton" href="#">
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
          __css={styles.upperNav}
        />
      </nav>
    );
  }
);

export default UpperNav;
