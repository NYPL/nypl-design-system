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
            href={upperNavLinks.locations}
            key="locationsLink"
            onClick={() => gaUtils.trackEvent("Locations", "Header Top Links")}
          >
            Locations
          </Link>,
          <Link
            href={upperNavLinks.libraryCard}
            key="libraryCardLink"
            onClick={() =>
              gaUtils.trackEvent("Get a Library CArd", "Header Top Links")
            }
          >
            Get A Library Card
          </Link>,
          <Link
            href={upperNavLinks.emailUpdates}
            key="emailUpdatesLink"
            onClick={() =>
              // This is a new event not in the original NYPL Header.
              // The old implementation used a dropdown for subcription.
              gaUtils.trackEvent("Subscribe", "Subscription")
            }
            __css={styles.emailUpdatesLink}
          >
            <>
              Get Email Updates
              <Icon name="arrow" align="right" size="small" />
            </>
          </Link>,
          <Link
            href={upperNavLinks.donate}
            key="donateLink"
            onClick={() => gaUtils.trackEvent("Donate", "Header Top Links")}
            type="button"
            __css={styles.donateLink}
          >
            Donate
          </Link>,
          <Link
            href={upperNavLinks.shop}
            key="shopLink"
            onClick={() => gaUtils.trackEvent("Shop", "Header Top Links")}
          >
            Shop
          </Link>,
        ]}
        noStyling
        type="ul"
      />
    </Box>
  );
});

export default UpperNav;
