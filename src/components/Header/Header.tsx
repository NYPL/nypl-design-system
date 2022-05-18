import React, { useState } from "react";
import {
  chakra,
  Box,
  HStack,
  useMultiStyleConfig,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import Notification from "../Notification/Notification";
import SkipNavigation from "../SkipNavigation/SkipNavigation";
import useWindowSize from "../../hooks/useWindowSize";
/** Internal Header-only components */
import UpperNav from "./components/UpperNav";
import LowerNav from "./components/LowerNav";
import Mobile from "./components/Mobile";

export const Header = chakra(() => {
  const windowDimensions = useWindowSize();
  // These values are based on the breakpoints md and lg
  // from the NYPL theme object.
  const breakpointMedium = 600;
  const breakpointLarge = 960;

  const isWidthMobile = windowDimensions.width < breakpointMedium;
  const isWidthLarge = windowDimensions.width > breakpointLarge;

  const styles = useMultiStyleConfig("Header", {
    isWidthMobile,
    isWidthLarge,
  });

  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  return (
    <Box __css={styles.container}>
      <SkipNavigation />
      <Notification
        __css={styles.notification}
        id="above-header-notification"
        isCentered
        noMargin
        notificationContent={
          <>
            Masks are encouraged at all NYPL locations.{" "}
            <Link href="https://nypl.org/reopening" id="reopening-link">
              Learn more and find information about our hours and services.
            </Link>
          </>
        }
        showIcon={false}
      />
      <header>
        <HStack id="headerMain" justifyContent="space-between">
          <Link
            aria-label="The New York Public Library"
            href="/"
            __css={styles.logo}
          >
            <Logo
              id="header-nypl-logo"
              name={isWidthLarge ? "nyplFullBlack" : "nyplLionBlack"}
              size={isWidthLarge ? "small" : "xxsmall"}
              title="NYPL Header Logo"
            />
          </Link>
          <Spacer />
          {!isWidthMobile ? (
            <VStack spacing="65px">
              <UpperNav loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
              <LowerNav />
            </VStack>
          ) : (
            <Mobile />
          )}
        </HStack>
        <HorizontalRule __css={styles.horizontalRule} />
      </header>
    </Box>
  );
});

export default Header;
