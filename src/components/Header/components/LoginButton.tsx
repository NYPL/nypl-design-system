import React, { useEffect, useRef } from "react";
import { Box, chakra, useOutsideClick, useStyleConfig } from "@chakra-ui/react";
import FocusLock from "@chakra-ui/focus-lock";

import Button from "../../Button/Button";
import HeaderComponents from "./index";
import Icon from "../../Icons/Icon";
import { LoginProps } from "./UpperNav";

const LoginButton = chakra(
  ({
    isMobile,
    isLoginOpen = false,
    patronName,
    setIsLoginOpen,
  }: LoginProps) => {
    const desktopIcon = isLoginOpen ? "close" : "arrow";
    const mobileIcon = isLoginOpen
      ? "close"
      : patronName
      ? "utilityAccountFilled"
      : "utilityAccountUnfilled";
    const desktopButtonLabel = isLoginOpen
      ? "Close"
      : patronName
      ? "My Account"
      : "Log In";
    const catalogRef = useRef<HTMLAnchorElement>(null);
    const greetingRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const styles = useStyleConfig("HeaderLoginButton", {
      isLoginOpen,
    });

    useEffect(() => {
      if (isLoginOpen) {
        if (patronName) {
          greetingRef.current.focus();
        } else {
          catalogRef.current.focus();
        }
      }
    }, [isLoginOpen, patronName]);

    useOutsideClick({
      ref: wrapperRef,
      handler: () => setIsLoginOpen(false),
    });

    return (
      <Box ref={wrapperRef}>
        <FocusLock isDisabled={!isLoginOpen}>
          <Button
            aria-label={desktopButtonLabel}
            buttonType="link"
            id="loginButton"
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            __css={styles}
          >
            {isMobile ? null : desktopButtonLabel}
            <Icon
              align="right"
              name={isMobile ? mobileIcon : desktopIcon}
              size={isMobile ? "large" : "small"}
              title="Log in to your account"
            />
          </Button>
          {isLoginOpen && (
            <HeaderComponents.Login
              catalogRef={catalogRef}
              greetingRef={greetingRef}
              isMobile={isMobile}
              patronName={patronName}
            />
          )}
        </FocusLock>
      </Box>
    );
  }
);

export default LoginButton;
