import React from "react";
import { Box, chakra, useStyleConfig } from "@chakra-ui/react";

import Link from "../../Link/Link";
import List from "../../List/List";
import SearchButton from "./SearchButton";
import { lowerNavLinks } from "../utils/headerUtils";
import gaUtils from "../utils/googleAnalyticsUtils";

const LowerNav = chakra(() => {
  const styles = useStyleConfig("HeaderLowerNav");

  return (
    <Box as="nav" aria-label="Header bottom links" __css={styles}>
      <List
        id="header-nav-lower"
        inline
        listItems={[
          <Link
            href={lowerNavLinks.books}
            onClick={() => gaUtils.trackEvent("Go to...", "Books/Music/Movies")}
            key="booksMusicMoviesLink"
          >
            Books/Music/Movies
          </Link>,
          <Link
            href={lowerNavLinks.research}
            onClick={() => gaUtils.trackEvent("Go to...", "Research")}
            key="researchLink"
          >
            Research
          </Link>,
          <Link
            href={lowerNavLinks.education}
            onClick={() => gaUtils.trackEvent("Go to...", "Education")}
            key="educationLink"
          >
            Education
          </Link>,
          <Link
            href={lowerNavLinks.events}
            onClick={() => gaUtils.trackEvent("Go to...", "Events")}
            key="eventsLink"
          >
            Events
          </Link>,
          <Link
            href={lowerNavLinks.connect}
            onClick={() => gaUtils.trackEvent("Go to...", "Connect")}
            key="connectLink"
          >
            Connect
          </Link>,
          <Link
            href={lowerNavLinks.give}
            onClick={() => gaUtils.trackEvent("Go to...", "Give")}
            key="giveLink"
          >
            Give
          </Link>,
          <Link
            href={lowerNavLinks.getHelp}
            onClick={() => gaUtils.trackEvent("Go to...", "Get Help")}
            key="getHelpLink"
          >
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
