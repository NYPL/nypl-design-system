import FocusLock from "@chakra-ui/focus-lock";
import { Box, chakra, useOutsideClick, useStyleConfig } from "@chakra-ui/react";
import React, { useState, useRef } from "react";

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
  const labelText = isOpen ? "Close Search" : "Open Search";
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
          aria-label={labelText}
          aria-expanded={isOpen ? true : null}
          buttonType="link"
          id="searchButton"
          onClick={() => setIsOpen(!isOpen)}
          __css={styles}
        >
          {buttonText}
          <Icon
            align={isMobile ? "none" : "right"}
            name={isOpen ? "close" : "search"}
            size={isMobile ? "large" : "medium"}
            title={labelText}
          />
        </Button>
        {isOpen && <SearchForm isMobile={isMobile} />}
      </FocusLock>
    </Box>
  );
});

export default SearchButton;
