import React, { useState } from "react";
import { chakra, useMultiStyleConfig, HStack } from "@chakra-ui/react";

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
import TextInput from "../../TextInput/TextInput";

const HeaderLowerNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderLowerNav", {});

  const [searchOpen] = useState<boolean>(false);

  return (
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
            buttonType={ButtonTypes.Link}
            id={searchOpen ? "closeSearchButton" : "searchButton"}
            key={searchOpen ? "closeSearchButton" : "searchButton"}
            // Commenting out the following event for this PR.
            // onClick={() => setSearchOpen(!searchOpen)}
          >
            {searchOpen ? "Close" : "Search"}
            <Icon
              name={searchOpen ? IconNames.Close : IconNames.Search}
              align={IconAlign.Right}
              size={IconSizes.Small}
            />
          </Button>
          <HStack id={searchOpen ? "searchOpen" : "searchClosed"}>
            <TextInput
              id="searchInput"
              labelText="Enter Search Keyword"
              placeholder="What would you like to find?"
            />
            <Icon
              name={IconNames.Search}
              size={IconSizes.Medium}
              color={IconColors.UiWhite}
            />
          </HStack>
        </>,
      ]}
      noStyling
      type={ListTypes.Unordered}
    />
  );
});

export default HeaderLowerNav;
