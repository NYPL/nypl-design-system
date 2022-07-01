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

import { getEncoreCatalogURL, getNYPLSearchURL } from "../utils/headerUtils";
import gaUtils, { gaConfig } from "../utils/googleAnalyticsUtils";

export interface SearchFormProps {
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
  const [isSearchRequested, setIsSearchRequested] = useState<boolean>(false);
  const [isGAResponseReceived, setIsGAResponseReceived] =
    useState<boolean>(false);
  const styles = useMultiStyleConfig("HeaderSearchForm", { isMobile });
  // GASearchedRepo indicates which kind of search is sent.
  let gaSearchedRepo = "Unknown";

  const onSubmit = (e: any, mobileType = "") => {
    e.preventDefault();
    const newGaConfig = { ...gaConfig };
    let gaSearchLabel;
    let requestUrl;

    // If there is a search input, make the request.
    if (searchInput) {
      if (searchOption === "catalog" || mobileType === "catalog") {
        gaSearchLabel = "Submit Catalog Search";
        gaSearchedRepo = "Encore";
        requestUrl = getEncoreCatalogURL(searchInput);
      }
      if (searchOption === "website" || mobileType === "website") {
        gaSearchLabel = "Submit Search";
        gaSearchedRepo = "DrupalSearch";
        requestUrl = getNYPLSearchURL(searchInput);
      }

      if (requestUrl && gaSearchLabel) {
        gaUtils.trackEvent("Search", gaSearchLabel);
        // Set a dynamic value for custom dimension2 for GA.
        newGaConfig.customDimensions.dimension2 = gaSearchedRepo;

        // There are three phases to handle the GA search event. We need to
        // prevent sending extra GA events after the search request is made.
        if (isSearchRequested && !isGAResponseReceived) {
          return false;
        }

        if (isSearchRequested && isGAResponseReceived) {
          window.location.assign(requestUrl);
          return true;
        }

        // If the search request is not made yet and the GA event hasn't been
        // sent yet, send the GA event, wait until it is received, and then
        // go to the search page.
        if (!isSearchRequested && !isGAResponseReceived) {
          setIsSearchRequested(true);
          // Send GA "Search" category and "QuerySent" action event
          // with custom dimensions for the type of search: Encore or Drupal.
          gaUtils.trackSearchQuerySend(
            searchInput,
            newGaConfig.customDimensions,
            () => {
              // Once the GA event is sent, go to the proper search page.
              setIsGAResponseReceived(true);
              window.location.assign(requestUrl);
            }
          );
        }
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
              <Icon
                name="search"
                size="small"
                __css={styles.mobileSearchIcon}
              />
            </Fieldset>
          </FormField>
          {!isMobile && (
            <FormField gridColumn="4">
              <ButtonGroup>
                <Button
                  aria-label="Search"
                  buttonType="pill"
                  id="search-btn"
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
              <HStack spacing="0">
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
