import React from "react";
import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import LoginButton from "./LoginButton";
import { upperNavLinks } from "../headerUtils";

export interface LoginProps {
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
      <Box as="nav" aria-label="Header top links" __css={styles}>
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
            <Link href={upperNavLinks.locations} key="locationsLink">
              Locations
            </Link>,
            <Link href={upperNavLinks.libraryCard} key="libraryCardLink">
              Get A Library Card
            </Link>,
            <Link
              href={upperNavLinks.emailUpdates}
              key="emailUpdatesLink"
              __css={styles.emailUpdatesLink}
            >
              <>
                Get Email Updates
                <Icon name="arrow" align="right" size="small" />
              </>
            </Link>,
            <Link
              href={upperNavLinks.donate}
              id="donateLink"
              key="donateLink"
              type="button"
              __css={styles.donateLink}
            >
              Donate
            </Link>,
            <Link href={upperNavLinks.shop} key="shopLink">
              Shop
            </Link>,
          ]}
          noStyling
          type="ul"
        />
      </Box>
    );
  }
);

export default UpperNav;
