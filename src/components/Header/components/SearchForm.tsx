import { Box, chakra, HStack, useMultiStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";

import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Fieldset from "../../Fieldset/Fieldset";
import Form, { FormField, FormRow } from "../../Form/Form";
import Icon from "../../Icons/Icon";
import Radio from "../../Radio/Radio";
import RadioGroup from "../../RadioGroup/RadioGroup";
import TextInput from "../../TextInput/TextInput";

import { getEncoreUrl, getCatalogUrl } from "../headerUtils";

const SearchForm = chakra(({ isMobile = false }) => {
  const [placeholder, setPlaceholder] = useState<string>(
    "What would you like to find?"
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOption, setSearchOption] = useState<string>("catalog");
  const styles = useMultiStyleConfig("HeaderSearchForm", { isMobile });
  const onSubmit = (e: any) => {
    e.preventDefault();
    let requestUrl;

    // If there is a search input, make the request.
    if (searchInput !== "") {
      if (searchOption === "catalog") {
        requestUrl = getEncoreUrl(searchInput);
      } else {
        requestUrl = getCatalogUrl(searchInput);
      }
      if (requestUrl) {
        window.location.assign(requestUrl);
        return true;
      }
    }
    // Otherwise, don't do anything and update the placeholder message.
    setPlaceholder("Please enter a search term");
    return false;
  };

  return (
    <Box __css={styles}>
      <Form
        id="search-header"
        gap="grid.m"
        onSubmit={onSubmit}
        __css={styles.form}
      >
        <FormRow>
          <FormField gridColumn="1 / 3">
            <Fieldset
              id="someid"
              isLegendHidden
              legendText="Enter a keyword, then choose to search either the catalog or the website"
            >
              <TextInput
                // eslint-disable-next-line jsx-a11y/no-autofocus
                // autoFocus
                id="searchInput"
                isRequired
                labelText="Enter Search Keyword"
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={placeholder}
                showRequiredLabel={false}
                showLabel={!isMobile}
                value={searchInput}
                __css={styles.textInput}
              />
            </Fieldset>
          </FormField>
          {!isMobile && (
            <FormField gridColumn="4">
              <ButtonGroup>
                <Button
                  aria-label="Search"
                  id="search-btn"
                  buttonType="pill"
                  onClick={onSubmit}
                  __css={styles.desktopSearchBtn}
                >
                  <Icon name="search" size="large" />
                </Button>
              </ButtonGroup>
            </FormField>
          )}
        </FormRow>
        <FormRow>
          <FormField>
            {isMobile ? (
              <HStack spacing="0" align="stretch" height="45px">
                <Button
                  id="mobile-catalog"
                  onClick={onSubmit}
                  __css={styles.mobileBtns}
                >
                  Catalog
                  <Icon name="arrow" size="small" iconRotation="rotate270" />
                </Button>
                <Button
                  id="mobile-website"
                  onClick={onSubmit}
                  __css={styles.mobileBtns}
                >
                  NYPL.org
                  <Icon name="arrow" size="small" iconRotation="rotate270" />
                </Button>
              </HStack>
            ) : (
              <RadioGroup
                defaultValue="catalog"
                id="search-type"
                labelText="Type of search"
                layout="row"
                name="catalogWebsiteSearch"
                onChange={(val) => setSearchOption(val)}
                showLabel={false}
              >
                <Radio
                  id="catalogSearch"
                  labelText="Search the Catalog"
                  value="catalog"
                  __css={styles.radio}
                />
                <Radio
                  id="websiteSearch"
                  labelText="Search NYPL.org"
                  value="website"
                  __css={styles.radio}
                />
              </RadioGroup>
            )}
          </FormField>
        </FormRow>
      </Form>
    </Box>
  );
});

export default SearchForm;
