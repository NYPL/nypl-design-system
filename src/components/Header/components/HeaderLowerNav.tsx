import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React from "react";

import Link from "../../Link/Link";
import List from "../../List/List";
import HeaderSearchButton from "./HeaderSearchButton";
import { siteNavLinks } from "../utils/headerUtils";
import gaUtils from "../utils/googleAnalyticsUtils";

const HeaderLowerNav = chakra(() => {
  const styles = useStyleConfig("HeaderLowerNav");
  const listItems = siteNavLinks.map(({ href, text }) => (
    <Link
      href={href}
      key={text}
      onClick={() => gaUtils.trackEvent("Go to...", text)}
    >
      {text}
    </Link>
  ));

  return (
    <Box as="nav" aria-label="Header bottom links" __css={styles}>
      <List
        id="header-nav-lower"
        inline
        listItems={[...listItems, <HeaderSearchButton key="search" />]}
        noStyling
        type="ul"
      />
    </Box>
  );
});

export default HeaderLowerNav;
