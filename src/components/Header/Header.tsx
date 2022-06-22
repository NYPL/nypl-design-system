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

/** Internal Header-only components and utils */
import HeaderComponents from "./components";
import {
  deleteCookieValue,
  extractPatronName,
  getLoginData,
  getCookieValue,
  refreshAccessToken,
  tokenRefreshLink,
} from "./utils/headerUtils";

export const Header = chakra(() => {
  const { isLargerThanMobile, isLargerThanLarge } = useNYPLBreakpoints();
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [patronName, setPatronName] = useState<string>("");
  const styles = useMultiStyleConfig("Header", {});

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
    <Box __css={styles}>
      <SkipNavigation />
      <HeaderComponents.SitewideAlerts />
      <header>
        <HStack __css={styles.container}>
          <Link
            aria-label="The New York Public Library"
            href="https://nypl.org"
            __css={styles.logo}
          >
            <Logo
              name={isLargerThanLarge ? "nyplFullBlack" : "nyplLionBlack"}
              size={isLargerThanLarge ? "small" : "xxsmall"}
              title="NYPL Header Logo"
            />
          </Link>
          <Spacer />
          {isLargerThanMobile ? (
            <VStack alignItems="end" spacing="65px">
              <HeaderComponents.UpperNav
                patronName={patronName}
                isLoginOpen={isLoginOpen}
                setIsLoginOpen={setIsLoginOpen}
              />
              <HeaderComponents.LowerNav />
            </VStack>
          ) : (
            <HeaderComponents.Mobile
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
