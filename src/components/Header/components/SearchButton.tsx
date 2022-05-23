import FocusLock from "@chakra-ui/focus-lock";
import { chakra, useStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import SearchForm from "./SearchForm";

interface SearchButtonProps {
  isMobile?: boolean;
}

const SearchButton = chakra(({ isMobile = false }: SearchButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = useStyleConfig("HeaderSearchButton", { isMobile, isOpen });
  const buttonText = isMobile ? null : isOpen ? "Close" : "Search";
  const buttonTextColor = isOpen
    ? "ui.white"
    : isMobile
    ? "ui.black"
    : "ui.focus";

  return (
    <FocusLock isDisabled={!isOpen}>
      <Button
        aria-haspopup="true"
        aria-label={isOpen ? "Close Search" : "Open Search"}
        aria-expanded={isOpen ? true : null}
        buttonType="link"
        id="searchButton"
        onClick={() => setIsOpen(!isOpen)}
        __css={styles}
      >
        {buttonText}
        <Icon
          align={isMobile ? "none" : "right"}
          color={buttonTextColor}
          name={isOpen ? "close" : "search"}
          size={isMobile ? "large" : "medium"}
        />
      </Button>
      {isOpen && <SearchForm isMobile={isMobile} />}
    </FocusLock>
  );
});

export default SearchButton;
