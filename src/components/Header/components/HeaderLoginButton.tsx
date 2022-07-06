import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import FocusLock from "@chakra-ui/focus-lock";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import HeaderLogin from "./HeaderLogin";
import { useCloseDropDown } from "../../../hooks/useCloseDropDown";
import { HeaderPatronContext } from "../context/headerPatronContext";

export interface HeaderLoginButtonProps {
  isMobile?: boolean;
}

const HeaderLoginButton = chakra(
  ({ isMobile = false }: HeaderLoginButtonProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const patronName = useContext(HeaderPatronContext);
    const catalogRef = useRef<HTMLAnchorElement>(null);
    const greetingRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const styles = useStyleConfig("HeaderLoginButton", {
      isOpen,
    });
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

    useCloseDropDown(setIsOpen, wrapperRef);

    useEffect(() => {
      if (isOpen) {
        if (patronName) {
          greetingRef.current.focus();
        } else {
          catalogRef.current.focus();
        }
      }
    }, [isOpen, patronName]);

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
            <HeaderLogin
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

export default HeaderLoginButton;
