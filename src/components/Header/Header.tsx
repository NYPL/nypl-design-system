import React, { useEffect, useState } from "react";
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
import { HeaderPatronProvider } from "./context/headerPatronContext";
import {
  deleteCookieValue,
  extractPatronName,
  getLoginData,
  getCookieValue,
  refreshAccessToken,
  tokenRefreshLink,
} from "./utils/headerUtils";
import gaUtils from "./utils/googleAnalyticsUtils";

export interface GAOptionProps {
  debug?: boolean;
  standardImplementation?: boolean;
  testMode?: boolean;
  titleCase?: boolean;
}
export interface HeaderProps {
  gaOptions?: GAOptionProps;
  isProduction?: boolean;
}

export const Header = chakra(({ gaOptions = {}, isProduction = true }) => {
  const [patronName, setPatronName] = useState<string>("");
  const { isLargerThanMobile, isLargerThanLarge } = useNYPLBreakpoints();
  const styles = useMultiStyleConfig("Header", {});

  const loginDataCallback = (data) => {
    // If the `statusCode` of the returned data is 401 and the expired
    // key is set to true, try to refresh the accessToken.
    if (data?.data?.statusCode === 401 && data?.data?.expired === true) {
      refreshAccessToken(
        tokenRefreshLink,
        loginDataCallback,
        deleteCookieValue
      );
      // Else, extract the patron's name from the returned data.
    } else {
      const fullName = extractPatronName(data);
      setPatronName(fullName);
    }
  };

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

  useEffect(() => {
    // After mounting,look for a cookie named "nyplIdentityPatron"
    // and try to grab its value.
    const { accessToken, cookieValue } = getCookieValue();
    // If the cookie exists, use its `accessToken` to make a fetch
    // request for the patron's data.
    if (cookieValue) {
      getLoginData(accessToken, loginDataCallback);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HeaderPatronProvider patronName={patronName}>
      <Box __css={styles}>
        <SkipNavigation />
        <HeaderSitewideAlerts />
        <header>
          <HStack __css={styles.container}>
            <Link
              aria-label="The New York Public Library"
              href="https://nypl.org"
              onClick={() => gaUtils.trackEvent("Click Logo", "")}
              __css={styles.logo}
            >
              <Logo
                name={isLargerThanLarge ? "nyplFullBlack" : "nyplLionBlack"}
                size={isLargerThanMobile ? "medium" : "small"}
                title="NYPL Header Logo"
              />
            </Link>
            <Spacer />
            {isLargerThanMobile ? (
              <VStack
                alignItems="end"
                spacing={isLargerThanLarge ? "75px" : "50px"}
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
    </HeaderPatronProvider>
  );
});

export default Header;
