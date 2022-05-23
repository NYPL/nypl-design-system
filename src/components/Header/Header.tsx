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
import SkipNavigation from "../SkipNavigation/SkipNavigation";
/** Internal Header-only components */
import UpperNav from "./components/UpperNav";
import LowerNav from "./components/LowerNav";
import Mobile from "./components/Mobile";
import SitewideAlerts from "./components/SitewideAlerts";
import useWindowSize from "../../hooks/useWindowSize";

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
      <SitewideAlerts />
      <header>
        <HStack id="headerMain" justifyContent="space-between">
          <Link
            aria-label="The New York Public Library"
            href="https://nypl.org"
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
