import React, { useState } from "react";
import { chakra, useMultiStyleConfig, HStack } from "@chakra-ui/react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import TextInput from "../../TextInput/TextInput";

const LowerNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderLowerNav", {});

  const [searchOpen] = useState<boolean>(false);

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
          <>
            <Button
              buttonType="link"
              id={searchOpen ? "closeSearchButton" : "searchButton"}
              key={searchOpen ? "closeSearchButton" : "searchButton"}
              // Commenting out the following event for this PR.
              // onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? "Close" : "Search"}
              <Icon
                name={searchOpen ? "close" : "search"}
                align="right"
                size="small"
              />
            </Button>
            <HStack id={searchOpen ? "searchOpen" : "searchClosed"}>
              <TextInput
                id="searchInput"
                labelText="Enter Search Keyword"
                placeholder="What would you like to find?"
              />
              <Icon name="search" size="medium" color="ui.white" />
            </HStack>
          </>,
        ]}
        noStyling
        type="ul"
      />
    </nav>
  );
});

export default LowerNav;
