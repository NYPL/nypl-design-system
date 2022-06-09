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

import { getEncoreCatalogUrl, getNYPLSearchURl } from "../headerUtils";

interface SearchFormProps {
  isMobile?: boolean;
}

/**
 * Displays the search form for the Header's search interface. On mobile, two
 * buttons are displayed and on desktop, two radio inputs are displayed.
 */
const SearchForm = chakra(({ isMobile = false }: SearchFormProps) => {
  const [placeholder, setPlaceholder] = useState<string>(
    "What would you like to find?"
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOption, setSearchOption] = useState<string>("catalog");
  const styles = useMultiStyleConfig("HeaderSearchForm", { isMobile });
  const onSubmit = (e: any, mobileType = "") => {
    e.preventDefault();
    let requestUrl;

    // If there is a search input, make the request.
    if (searchInput) {
      if (searchOption === "catalog" || mobileType === "catalog") {
        requestUrl = getEncoreCatalogUrl(searchInput);
      }
      if (searchOption === "website" || mobileType === "website") {
        requestUrl = getNYPLSearchURl(searchInput);
      }

      if (requestUrl) {
        window.location.assign(requestUrl);
        return true;
      }
    }
    // Otherwise, don't do anything and update the placeholder message.
    setPlaceholder("Please enter a search term.");
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
              id="fieldset-search"
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
                  <Icon name="search" size="medium" />
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
                  aria-label="Submit Catalog Search"
                  id="mobile-catalog"
                  onClick={(e) => onSubmit(e, "catalog")}
                  __css={styles.mobileBtns}
                >
                  CATALOG
                  <Icon name="arrow" size="small" iconRotation="rotate270" />
                </Button>
                <Button
                  aria-label="Submit NYPL Website Search"
                  id="mobile-website"
                  onClick={(e) => onSubmit(e, "website")}
                  __css={styles.mobileBtns}
                >
                  NYPL.ORG
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
