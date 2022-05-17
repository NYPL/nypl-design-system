import FocusLock from "@chakra-ui/focus-lock";
import { chakra, useStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";

import Button from "../../Button/Button";
import Icon from "../../Icons/Icon";
import SearchBox from "./SearchBox";

const SearchButton = chakra(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const styles = useStyleConfig("HeaderSearchButton", { isOpen });

  return (
    <FocusLock isDisabled={!isOpen}>
      <Button
        aria-haspopup="true"
        aria-expanded={isOpen ? true : null}
        buttonType="link"
        id="searchButton"
        onClick={() => setIsOpen(!isOpen)}
        __css={styles}
      >
        {isOpen ? "Close" : "Search"}
        <Icon align="right" name={isOpen ? "close" : "search"} size="small" />
      </Button>
      {isOpen && <SearchBox />}
    </FocusLock>
  );
});

export default SearchButton;
