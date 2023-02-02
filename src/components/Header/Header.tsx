import React, { useEffect } from "react";
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
import useNYPLBreakpoints from "../../hooks/useNYPLBreakpoints";

/** Internal Header-only components */
import HeaderLowerNav from "./components/HeaderLowerNav";
import HeaderMobileIconNav from "./components/HeaderMobileIconNav";
import HeaderSitewideAlerts from "./components/HeaderSitewideAlerts";
import HeaderUpperNav from "./components/HeaderUpperNav";
/** Internal Header-only utils */
import { HeaderProvider } from "./context/headerContext";
import gaUtils from "./utils/googleAnalyticsUtils";

export interface GAOptionProps {
  debug?: boolean;
  standardImplementation?: boolean;
  testMode?: boolean;
  titleCase?: boolean;
}
export interface HeaderProps {
  /** Whether to render sitewide alerts or not. True by default. */
  fetchSitewideAlerts?: boolean;
  /** Google Analytics options to override the default settings. */
  gaOptions?: GAOptionProps;
  /** Whether or not the `Header` is in production mode. True by default. */
  isProduction?: boolean;
}

/**
 * The NYPL `Header` component is the top-level component of the site. It
 * contains features for logging in, logging out, searching, and navigating
 * the NYPL.org site.
 */
export const Header = chakra(
  ({
    fetchSitewideAlerts = true,
    gaOptions = {},
    isProduction = true,
  }: HeaderProps) => {
    const { isLargerThanMobile, isLargerThanLarge } = useNYPLBreakpoints();
    const styles = useMultiStyleConfig("Header", {});

    useEffect(() => {
      if (!(window as any)?.ga) {
        // @TODO not sure if we still want this to be logged.
        // console.log('Analytics not available - loading through React.');
        console.info(
          "NYPL Reservoir Header: Loading Google Analytics through the Header component."
        );
        const gaOpts = {
          testMode: !isProduction,
          ...gaOptions,
        };

        // Passing false to get the dev GA code.
        gaUtils.initialize(gaOpts, isProduction);
      }
    }, [gaOptions, isProduction]);

    return (
      <HeaderProvider isProduction={isProduction}>
        <Box __css={styles}>
          <SkipNavigation />
          {fetchSitewideAlerts ? <HeaderSitewideAlerts /> : null}
          <header>
            <HStack __css={styles.container}>
              <Link
                aria-label="The New York Public Library"
                href="https://nypl.org"
                onClick={() => gaUtils.trackEvent("Click Logo", "")}
                __css={styles.logo}
              >
                <Logo
                  aria-label="NYPL Header Logo"
                  name={isLargerThanLarge ? "nyplFullBlack" : "nyplLionBlack"}
                  size={isLargerThanMobile ? "large" : "small"}
                  title="NYPL Header Logo"
                />
              </Link>
              <Spacer />
              {isLargerThanMobile ? (
                <VStack
                  alignItems="end"
                  spacing={isLargerThanLarge ? "85px" : "40px"}
                >
                  <HeaderUpperNav />
                  <HeaderLowerNav />
                </VStack>
              ) : (
                <HeaderMobileIconNav />
              )}
            </HStack>
            <HorizontalRule __css={styles.horizontalRule} />
          </header>
        </Box>
      </HeaderProvider>
    );
  }
);

export default Header;
