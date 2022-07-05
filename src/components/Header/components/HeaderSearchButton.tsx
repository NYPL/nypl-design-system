import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { useState, useRef } from "react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import HeaderSearchForm from "./HeaderSearchForm";
import { useCloseDropDown } from "../../../hooks/useCloseDropDown";
import gaUtils from "../utils/googleAnalyticsUtils";

export interface HeaderSearchButtonProps {
  isMobile?: boolean;
}

const HeaderSearchButton = chakra(
  ({ isMobile = false }: HeaderSearchButtonProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const styles = useStyleConfig("HeaderSearchButton", { isOpen });
    const buttonText = isMobile ? null : isOpen ? "Close" : "Search";
    const labelText = isOpen ? "Close Search" : "Open Search";
    const ref = useRef<HTMLDivElement>(null);
    const gaAction = isMobile ? "Click" : "Search";
    const gaLabel = isMobile
      ? "Mobile clickSearch"
      : isOpen
      ? "Close Menu"
      : "Open Menu";

    useCloseDropDown(setIsOpen, ref);

    return (
      <Box ref={ref}>
        <FocusLock isDisabled={!isOpen}>
          <Button
            aria-haspopup="true"
            aria-label={labelText}
            aria-expanded={isOpen ? true : null}
            buttonType="link"
            id="searchButton"
            onClick={() => {
              gaUtils.trackEvent(gaAction, gaLabel);
              setIsOpen(!isOpen);
            }}
            __css={styles}
          >
            {buttonText}
            <Icon
              align={isMobile ? "none" : "right"}
              name={isOpen ? "close" : "search"}
              size={isMobile ? "large" : isOpen ? "medium" : "small"}
              title={labelText}
            />
          </Button>
          {isOpen && <HeaderSearchForm isMobile={isMobile} />}
        </FocusLock>
      </Box>
    );
  }
);

export default HeaderSearchButton;
