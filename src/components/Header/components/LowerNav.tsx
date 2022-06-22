import React from "react";
import { Box, chakra, useStyleConfig } from "@chakra-ui/react";

import HeaderComponents from "./index";
import Link from "../../Link/Link";
import List from "../../List/List";
import { lowerNavLinks } from "../utils/headerUtils";

const LowerNav = chakra(() => {
  const styles = useStyleConfig("HeaderLowerNav");

  return (
    <Box as="nav" aria-label="Header bottom links" __css={styles}>
      <List
        id="header-nav-lower"
        inline
        listItems={[
          <Link href={lowerNavLinks.books} key="booksMusicMoviesLink">
            Books/Music/Movies
          </Link>,
          <Link href={lowerNavLinks.research} key="researchLink">
            Research
          </Link>,
          <Link href={lowerNavLinks.education} key="educationLink">
            Education
          </Link>,
          <Link href={lowerNavLinks.events} key="eventsLink">
            Events
          </Link>,
          <Link href={lowerNavLinks.connect} key="connectLink">
            Connect
          </Link>,
          <Link href={lowerNavLinks.give} key="giveLink">
            Give
          </Link>,
          <Link href={lowerNavLinks.getHelp} key="getHelpLink">
            Get Help
          </Link>,
          <HeaderComponents.SearchButton key="search" />,
        ]}
        noStyling
        type="ul"
      />
    </Box>
  );
});

export default LowerNav;
