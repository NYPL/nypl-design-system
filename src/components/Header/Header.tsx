import React, { useState } from "react";
import {
  chakra,
  Box,
  HStack,
  useMultiStyleConfig,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Notification from "../Notification/Notification";
import useWindowSize from "../../hooks/useWindowSize";
import UpperNav from "./components/UpperNav";
import LowerNav from "./components/LowerNav";
import Mobile from "./components/Mobile";

export const Header = chakra(() => {
  const windowDimensions = useWindowSize();
  // These values are based on the breakpoints md and lg
  // from the NYPL theme object.
  const breakpointMedium = 600;
  const breakpointLarge = 960;

  const styles = useMultiStyleConfig("Header", {
    width: windowDimensions.width,
    breakpointMedium,
  });

  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  return (
    <Box __css={styles.container}>
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
      <HStack
        marginX={windowDimensions.width > breakpointLarge ? "50px" : "0px"}
        justifyContent="space-between"
      >
        <Link
          aria-label="The New York Public Library"
          href="/"
          __css={styles.logo}
        >
          <Logo
            id="header-nypl-logo"
            name={
              windowDimensions.width > breakpointLarge
                ? "nyplFullBlack"
                : "nyplLionBlack"
            }
            size={
              windowDimensions.width > breakpointLarge ? "small" : "xxsmall"
            }
            title="NYPL Header Logo"
          />
        </Link>
        <Spacer />
        {windowDimensions.width > breakpointMedium ? (
          <VStack spacing="65px">
            <UpperNav loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
            <LowerNav />
          </VStack>
        ) : (
          <Mobile />
        )}
      </HStack>
      <HorizontalRule __css={styles.horizontalRule} />
    </Box>
  );
});

export default Header;
