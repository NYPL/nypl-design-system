import React from "react";
import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";

import Icon from "../../Icons/Icon";
import Link from "../../Link/Link";
import List from "../../List/List";
import LoginButton from "./LoginButton";
import gaUtils from "../utils/googleAnalyticsUtils";
import { upperNavLinks } from "../utils/headerUtils";

const UpperNav = chakra(() => {
  const styles = useMultiStyleConfig("HeaderUpperNav", {});

  return (
    <Box as="nav" aria-label="Header top links" __css={styles}>
      <List
        id="header-nav-upper"
        inline
        listItems={[
          <LoginButton key="login" />,
          <Link
            href={upperNavLinks.locations.href}
            key="locationsLink"
            onClick={() => gaUtils.trackEvent("Locations", "Header Top Links")}
          >
            {upperNavLinks.locations.text}
          </Link>,
          <Link
            href={upperNavLinks.libraryCard.href}
            key="libraryCardLink"
            onClick={() =>
              gaUtils.trackEvent("Get a Library Card", "Header Top Links")
            }
          >
            {upperNavLinks.libraryCard.text}
          </Link>,
          <Link
            href={upperNavLinks.emailUpdates.href}
            key="emailUpdatesLink"
            onClick={() =>
              // This is a new event not in the original NYPL Header.
              // The old implementation used a dropdown for subcription.
              gaUtils.trackEvent("Subscribe", "Subscription")
            }
            __css={styles.emailUpdatesLink}
          >
            <>
              {upperNavLinks.emailUpdates.text}
              <Icon name="arrow" align="right" size="small" />
            </>
          </Link>,
          <Link
            href={upperNavLinks.donate.href}
            key="donateLink"
            onClick={() => gaUtils.trackEvent("Donate", "Header Top Links")}
            type="button"
            __css={styles.donateLink}
          >
            {upperNavLinks.donate.text}
          </Link>,
          <Link
            href={upperNavLinks.shop.href}
            key="shopLink"
            onClick={() => gaUtils.trackEvent("Shop", "Header Top Links")}
          >
            {upperNavLinks.shop.text}
          </Link>,
        ]}
        noStyling
        type="ul"
      />
    </Box>
  );
});

export default UpperNav;
