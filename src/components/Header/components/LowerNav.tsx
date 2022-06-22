import React from "react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Link from "../../Link/Link";
import List from "../../List/List";
import SearchButton from "./SearchButton";

const LowerNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderLowerNav", {});

  return (
    <nav aria-label="Header bottom links">
      <List
        __css={styles.lowerNav}
        id="header-nav-lower"
        inline
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
          <SearchButton key="search" />,
        ]}
        noStyling
        type="ul"
      />
    </nav>
  );
});

export default LowerNav;
