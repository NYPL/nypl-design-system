import React, { useEffect, useState } from "react";
import {
  chakra,
  Box,
  HStack,
  useMultiStyleConfig,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import {
  deleteCookieValue,
  extractPatronName,
  getLoginData,
  getCookieValue,
  refreshAccessToken,
  tokenRefreshLink,
} from "./headerUtils";
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

  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [patronName, setPatronName] = useState<string>("");

  // Allows user to use esc key to close the login menu.
  useEffect(() => {
    const close = (e) => {
      const key = e.key || e.keyCode;
      if (key === "Escape" || key === "Esc" || key === 27) {
        setIsLoginOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

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
    <Box __css={styles.container}>
      <SkipNavigation />
      <SitewideAlerts isMobile={isWidthMobile} />
      <header>
        <HStack id="headerMain">
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
            <VStack alignItems="end" spacing="65px">
              <UpperNav
                patronName={patronName}
                isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
              />
              <LowerNav />
            </VStack>
          ) : (
            <Mobile
              patronName={patronName}
              isLoginOpen={isLoginOpen}
              setIsLoginOpen={setIsLoginOpen}
            />
          )}
        </HStack>
        <HorizontalRule __css={styles.horizontalRule} />
      </header>
    </Box>
  );
});

export default Header;
