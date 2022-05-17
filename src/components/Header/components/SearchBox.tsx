import { Box, chakra, useMultiStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";

import Button from "../../Button/Button";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Fieldset from "../../Fieldset/Fieldset";
import Form, { FormField, FormRow } from "../../Form/Form";
import Icon from "../../Icons/Icon";
import Radio from "../../Radio/Radio";
import RadioGroup from "../../RadioGroup/RadioGroup";
import TextInput from "../../TextInput/TextInput";

const SearchBox = chakra(() => {
  const [placeholder, setPlaceholder] = useState<string>(
    "What would you like to find?"
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchOption, setSearchOption] = useState<string>("catalog");
  const styles = useMultiStyleConfig("HeaderSearchBox", {});
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchInput, searchOption);

    const searchInputValue = searchInput;
    const searchOptionValue = searchOption;
    const encoreBaseUrl = "https://browse.nypl.org/iii/encore/search/";
    let catalogBaseUrl = "//www.nypl.org/search/";
    let requestUrl;

    if (searchInputValue !== "") {
      if (searchOptionValue === "catalog") {
        requestUrl = setEncoreUrl(searchInputValue, encoreBaseUrl, "eng");
      } else {
        requestUrl = setCatalogUrl(searchInputValue, catalogBaseUrl);
      }
      window.location.assign(requestUrl);
      return true;
    }
    setPlaceholder("Please enter a search term");
    return false;
  };
  /**
   * Enchances the encore url with a possible scope.
   * If no scope is set, adds the required string to
   * be returned as the final url.
   */
  const encoreAddScope = (baseUrl, searchString, scopeString) => {
    return scopeString
      ? `${baseUrl}C__S${searchString}${scopeString}__Orightresult__U`
      : `${baseUrl}C__S${searchString}__Orightresult__U`;
  };
  /**
   * Generates the queries to be added to the URL of Encore search page. It is for the scripts
   * of GA on Encore to tell where the search request is coming from.
   * @return {string} the queries to add to the URL for Encore search.
   */
  const generateQueriesForGA = () => {
    // the time stamp here is for the purpose of telling when this search query is made.
    const currentTimeStamp = new Date().getTime();
    return currentTimeStamp
      ? `?searched_from=header_search&timestamp=${currentTimeStamp}`
      : "?searched_from=header_search";
  };
  /**
   * base64_encoding_map includes special characters that need to be
   * encoded using base64 - these chars are "=","/", "\", "?"
   * character : base64 encoded
   */
  const encoreEncodeSearchString = (str) => {
    const base64EncMap = {
      "=": "PQ==",
      "/": "Lw==",
      "\\": "XA==",
      "?": "Pw==",
    };
    let encodedString = str;
    let charRegExString;
    let base64Regex;

    Object.keys(base64EncMap).forEach((specialChar) => {
      charRegExString = specialChar.replace(
        /([\.\*\+\?\^\=\!\:\$\{\}\(\)\|\[\]\/\\])/g,
        "\\$1"
      );
      base64Regex = new RegExp(charRegExString, "g");
      encodedString = encodedString.replace(
        base64Regex,
        base64EncMap[specialChar]
      );
    });

    return encodedString;
  };
  /**
   * Returns the final URL for encore search which,
   * is first encoded, then concatenated by the
   * base encore root url. An optional scope and
   * language may be concatenated as well.
   */
  const setEncoreUrl = (searchInput?, baseUrl?, language?, scopeString?) => {
    const searchTerm = encoreEncodeSearchString(searchInput);
    const rootUrl = baseUrl || "https://browse.nypl.org/iii/encore/search/";
    const defaultLang = language ? `&lang=${language}` : "";
    let finalEncoreUrl;

    if (searchTerm) {
      finalEncoreUrl =
        encoreAddScope(rootUrl, searchTerm, scopeString) +
        generateQueriesForGA() +
        defaultLang;
    }

    return finalEncoreUrl;
  };
  /**
   * Returns the final URL for the catalog search.
   */
  const setCatalogUrl = (searchString, catalogBaseUrl) => {
    const catalogUrl = catalogBaseUrl || "//www.nypl.org/search/";

    if (searchString) {
      return (
        catalogUrl + encodeURIComponent(searchString) + generateQueriesForGA()
      );
    }
    return null;
  };

  return (
    <Box __css={styles}>
      <Form id="search-header" onSubmit={onSubmit} __css={styles.form}>
        <FormRow>
          <FormField>
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
                value={searchInput}
                __css={styles.textInput}
              />
            </Fieldset>
          </FormField>
          <FormField>
            <ButtonGroup>
              <Button
                aria-label="Search"
                id="search-btn"
                buttonType="pill"
                onClick={onSubmit}
                __css={styles.button}
              >
                <Icon name="search" size="large" />
              </Button>
            </ButtonGroup>
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
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
          </FormField>
        </FormRow>
      </Form>
    </Box>
  );
});

export default SearchBox;
