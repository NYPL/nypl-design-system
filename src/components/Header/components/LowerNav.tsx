import React from "react";
import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Link from "../../Link/Link";
import List from "../../List/List";
import SearchButton from "./SearchButton";
import { lowerNavLinks } from "../headerUtils";

const LowerNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderLowerNav", {});

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
          <SearchButton key="search" />,
        ]}
        noStyling
        type="ul"
      />
    </Box>
  );
});

export default LowerNav;
