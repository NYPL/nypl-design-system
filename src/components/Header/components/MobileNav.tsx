import {
  Box,
  chakra,
  Flex,
  Spacer,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";

import Link from "../../Link/Link";
import List from "../../List/List";
import Logo from "../../Logo/Logo";
import SimpleGrid from "../../Grid/SimpleGrid";

/**
 * The Header navigation for the mobile view.
 */
const MobileNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderMobileNav", {});

  return (
    <Box __css={styles}>
      <Flex>
        <Box>
          <Logo
            name="nyplLionWhite"
            size="xxsmall"
            marginTop="15px"
            marginLeft="15px"
            decorative={false}
            title="NYPL Header Logo"
          />
        </Box>
        <Spacer />
        <nav aria-label="Header mobile links">
          <List
            id="header-mobile-nav"
            listItems={[
              <Link href="#" key="booksMusicMoviesLink">
                Books/Music/Movies
              </Link>,
              <Link href="#" key="researchLink">
                Research
              </Link>,
              <Link href="#" key="educationLink">
                Education
              </Link>,
              <Link href="#" key="eventsLink">
                Events
              </Link>,
              <Link href="#" key="connectLink">
                Connect
              </Link>,
              <Link href="#" key="giveLink">
                Give
              </Link>,
              <Link href="#" key="getHelpLink">
                Get Help
              </Link>,
            ]}
            noStyling
            type="ul"
            __css={styles.sideNav}
          />
        </nav>
      </Flex>
      <SimpleGrid gap="0" data-testid="bottomLinks" __css={styles.bottomLinks}>
        <Link
          href="#"
          borderTop="1px solid rgb(54, 54, 54)"
          borderRight="1px solid rgb(54, 54, 54)"
          gridColumn="1 / span 1"
        >
          Get a Library Card
        </Link>
        <Link
          href="#"
          borderTop="1px solid rgb(54, 54, 54)"
          gridColumn="2 / span 1"
        >
          Get Email Updates
        </Link>
        <Link
          href="#"
          borderTop="1px solid rgb(54, 54, 54)"
          gridColumn="1 / span 2"
        >
          Shop NYPL
        </Link>
        <Link href="#" gridColumn="1 / span 2">
          Donate
        </Link>
      </SimpleGrid>
    </Box>
  );
});

export default MobileNav;
