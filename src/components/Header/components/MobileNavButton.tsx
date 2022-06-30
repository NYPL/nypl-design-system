import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra, useStyleConfig } from "@chakra-ui/react";
import React, { useState, useRef } from "react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import MobileNav from "./MobileNav";
import { useCloseDropDown } from "../../../hooks/useCloseDropDown";
import gaUtils from "../utils/googleAnalyticsUtils";

const MobileNavButton = chakra(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = useStyleConfig("HeaderMobileNavButton", { isOpen });
  const ref = useRef<HTMLDivElement>(null);

  useCloseDropDown(setIsOpen, ref);

  return (
    <Box ref={ref}>
      <FocusLock isDisabled={!isOpen}>
        <Button
          aria-haspopup="true"
          aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
          aria-expanded={isOpen ? true : null}
          buttonType="link"
          id="mobileNav-btn"
          onClick={() => {
            gaUtils.trackEvent("Click", "Mobile mobileMenu");
            setIsOpen(!isOpen);
          }}
          __css={styles}
        >
          <Icon name={isOpen ? "close" : "utilityHamburger"} size="large" />
        </Button>
        {isOpen && <MobileNav />}
      </FocusLock>
    </Box>
  );
});

export default MobileNavButton;
