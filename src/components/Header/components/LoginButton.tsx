import React, { useEffect, useRef } from "react";
import { chakra, useMultiStyleConfig } from "@chakra-ui/react";
import FocusLock from "@chakra-ui/focus-lock";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import Login from "./Login";
import { LoginProps } from "./UpperNav";

const LoginButton = chakra(
  ({ isMobile, loginOpen, patronName, setLoginOpen }: LoginProps) => {
    const desktopIcon = loginOpen ? "close" : "arrow";
    const mobileIcon = loginOpen
      ? "close"
      : patronName
      ? "utilityAccountFilled"
      : "utilityAccountUnfilled";
    const desktopButtonLabel = loginOpen
      ? "Close"
      : patronName
      ? "My Account"
      : "Log In";
    const greetingRef = useRef(null);
    const styles = useMultiStyleConfig("HeaderLoginButton", {
      isMobile,
      loginOpen,
    });

    useEffect(() => {
      if (patronName && loginOpen) {
        greetingRef.current.focus();
      }
    }, [loginOpen, patronName]);

    return (
      <FocusLock isDisabled={!loginOpen}>
        <Button
          buttonType="link"
          id="loginButton"
          onClick={() => setLoginOpen(!loginOpen)}
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
        {loginOpen && (
          <Login
            greetingRef={greetingRef}
            isMobile={isMobile}
            patronName={patronName}
          />
        )}
      </FocusLock>
    );
  }
);

export default LoginButton;
