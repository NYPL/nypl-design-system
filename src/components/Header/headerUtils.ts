/**
 * Replaces the search string's special characters that need to be encoded
 * using base64. These characters are "=","/", "\", "?".
 */
const encoreEncodeSearchString = (searchString) => {
  const base64EncodeMap = {
    "=": "PQ==",
    "/": "Lw==",
    "\\": "XA==",
    "?": "Pw==",
  };
  let encodedSearchString = searchString;
  Object.keys(base64EncodeMap).forEach((specialChar) => {
    const charRegExString = specialChar.replace(
      /([\.\*\+\?\^\=\!\:\$\{\}\(\)\|\[\]\/\\])/g,
      "\\$1"
    );
    const base64Regex = new RegExp(charRegExString, "g");
    encodedSearchString = searchString.replace(
      base64Regex,
      base64EncodeMap[specialChar]
    );
  });

  return encodedSearchString;
};
/**
 * Generates the queries to be added to the URL of the search pages. It is
 * used by the Google Analytics scripts  to tell where the search request is
 * coming from.
 */
const generateQueriesForGA = () => {
  // the time stamp here is for the purpose of telling when this search query is made.
  const currentTimeStamp = new Date().getTime();
  return `?searched_from=header_search&timestamp=${currentTimeStamp}`;
};
/**
 * Returns the final URL for the NYPL Encore search.
 */
export const getEncoreUrl = (searchValue) => {
  const encodedSearchInput = encoreEncodeSearchString(searchValue);
  const rootUrl = "https://browse.nypl.org/iii/encore/search/";
  let finalEncoreUrl;

  if (encodedSearchInput) {
    finalEncoreUrl =
      `${rootUrl}C__S${encodedSearchInput}__Orightresult__U` +
      generateQueriesForGA() +
      `&lang=eng`;
    return finalEncoreUrl;
  }
  return null;
};
/**
 * Returns the final URL for the NYPL catalog search.
 */
export const getCatalogUrl = (searchString) => {
  const catalogUrl = "//www.nypl.org/search/";

  if (searchString) {
    return (
      catalogUrl + encodeURIComponent(searchString) + generateQueriesForGA()
    );
  }
  return null;
};
