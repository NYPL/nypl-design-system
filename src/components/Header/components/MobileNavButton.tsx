import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra, useOutsideClick, useStyleConfig } from "@chakra-ui/react";
import React, { useState, useRef } from "react";

import Button from "../../Button/Button";
import HeaderComponents from "./index";
import Icon from "../../Icons/Icon";

const MobileNavButton = chakra(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = useStyleConfig("HeaderMobileNavButton", { isOpen });
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref,
    handler: () => setIsOpen(false),
  });

  return (
    <Box ref={ref}>
      <FocusLock isDisabled={!isOpen}>
        <Button
          aria-haspopup="true"
          aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
          aria-expanded={isOpen ? true : null}
          buttonType="link"
          id="mobileNav-btn"
          onClick={() => setIsOpen(!isOpen)}
          __css={styles}
        >
          <Icon name={isOpen ? "close" : "utilityHamburger"} size="large" />
        </Button>
        {isOpen && <HeaderComponents.MobileNav />}
      </FocusLock>
    </Box>
  );
});

export default MobileNavButton;
