import FocusLock from "@chakra-ui/focus-lock";
import { chakra, useStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import MobileNav from "./MobileNav";

const mobileNav = chakra(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = useStyleConfig("HeaderMobileNavButton", { isOpen });

  return (
    <FocusLock isDisabled={!isOpen}>
      <Button
        aria-haspopup="true"
        aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
        aria-expanded={isOpen ? true : null}
        buttonType="link"
        id="mobileNav"
        onClick={() => setIsOpen(!isOpen)}
        __css={styles}
      >
        <Icon
          align="none"
          name={isOpen ? "close" : "utilityHamburger"}
          size="large"
        />
      </Button>
      {isOpen && <MobileNav />}
    </FocusLock>
  );
});

export default mobileNav;
