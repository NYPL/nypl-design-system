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
import UpperNav from "./components/UpperNav";
import LowerNav from "./components/LowerNav";
import Mobile from "./components/Mobile";
import SitewideAlerts from "./components/SitewideAlerts";
import {
  extractPatronName,
  fetchPatronData,
  getCookieValue,
} from "./headerUtils";

export const Header = chakra(() => {
  const { isLargerThanMobile, isLargerThanLarge } = useNYPLBreakpoints();
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [patronDataReceived, setPatronDataReceived] = useState<boolean>(false);
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

  useEffect(() => {
    const { cookieValue, accessToken } = getCookieValue();
    if (cookieValue) {
      if (!patronDataReceived) {
        fetchPatronData(accessToken, (data) => {
          const fullName = extractPatronName(data);
          setPatronName(fullName);
          setPatronDataReceived(true);
        });
      }
    }
  }, [patronDataReceived]);

  return (
    <Box __css={styles}>
      <SkipNavigation />
      <SitewideAlerts isMobile={!isLargerThanMobile} />
      <header>
        <HStack __css={styles.container}>
          <Link
            aria-label="The New York Public Library"
            href="https://nypl.org"
            __css={styles.logo}
          >
            <Logo
              id="header-nypl-logo"
              name={isLargerThanLarge ? "nyplFullBlack" : "nyplLionBlack"}
              size={isLargerThanLarge ? "small" : "xxsmall"}
              title="NYPL Header Logo"
            />
          </Link>
          <Spacer />
          {isLargerThanMobile ? (
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
