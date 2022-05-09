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
import { LogoNames, LogoSizes } from "../Logo/LogoTypes";
import HorizontalRule from "../HorizontalRule/HorizontalRule";
import Notification from "../Notification/Notification";
import useWindowSize from "../../hooks/useWindowSize";
import HeaderUpperNav from "./components/HeaderUpperNav";
import HeaderLowerNav from "./components/HeaderLowerNav";
import HeaderBreakpointSmall from "./components/HeaderBreakpointSmall";

export const Header = chakra(() => {
  const windowDimensions = useWindowSize();
  // These values are based on the breakpoints md and lg
  // from the NYPL theme object.
  const breakpointMedium = 600;
  const breakpointLarge = 960;

  const styles = useMultiStyleConfig("Header", {});

  const [logInOpen, setLogInOpen] = useState<boolean>(false);

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
      {windowDimensions.width > breakpointMedium ? (
        <HStack
          marginX={windowDimensions.width > breakpointLarge ? "50px" : "0px"}
          justifyContent="space-between"
        >
          <Link href="/" __css={styles.logo}>
            <Logo
              id="header-nypl-logo"
              name={
                windowDimensions.width > breakpointLarge
                  ? LogoNames.NYPLBlack
                  : LogoNames.NYPLLionBlack
              }
              size={
                windowDimensions.width > breakpointLarge
                  ? LogoSizes.Small
                  : LogoSizes.ExtraExtraSmall
              }
              title="NYPL Header Logo"
            />
          </Link>
          <Spacer />
          <VStack spacing="65px">
            <HeaderUpperNav logInOpen={logInOpen} setLogInOpen={setLogInOpen} />
            <HeaderLowerNav />
          </VStack>
        </HStack>
      ) : (
        <HeaderBreakpointSmall />
      )}
      <HorizontalRule __css={styles.horizontalRule} />
    </Box>
  );
});

export default Header;
