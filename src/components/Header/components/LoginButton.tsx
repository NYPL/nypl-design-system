import React, { useEffect, useRef, useState } from "react";
import { Box, chakra, useOutsideClick, useStyleConfig } from "@chakra-ui/react";
import FocusLock from "@chakra-ui/focus-lock";

import Button from "../../Button/Button";
import HeaderComponents from "./index";
import Icon from "../../Icons/Icon";
import { LoginProps } from "./UpperNav";

const LoginButton = chakra(({ isMobile, patronName }: LoginProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const desktopIcon = isOpen ? "close" : "arrow";
  const mobileIcon = isOpen
    ? "close"
    : patronName
    ? "utilityAccountFilled"
    : "utilityAccountUnfilled";
  const desktopButtonLabel = isOpen
    ? "Close"
    : patronName
    ? "My Account"
    : "Log In";
  const catalogRef = useRef<HTMLAnchorElement>(null);
  const greetingRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const styles = useStyleConfig("HeaderLoginButton", {
    isOpen,
  });

  useEffect(() => {
    if (isOpen) {
      if (patronName) {
        greetingRef.current.focus();
      } else {
        catalogRef.current.focus();
      }
    }
  }, [isOpen, patronName]);

  useOutsideClick({
    ref: wrapperRef,
    handler: () => setIsOpen(false),
  });

  return (
    <Box ref={wrapperRef}>
      <FocusLock isDisabled={!isOpen}>
        <Button
          aria-label={desktopButtonLabel}
          buttonType="link"
          id="loginButton"
          onClick={() => setIsOpen(!isOpen)}
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
        {isOpen && (
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
});

export default LoginButton;
