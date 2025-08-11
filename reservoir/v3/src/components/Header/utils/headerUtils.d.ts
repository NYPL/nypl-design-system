export interface Alert {
  id: string;
  link: string;
  description: string;
  startDate: string;
  endDate: string;
}
export declare const alertsApiUrl =
  "https://refinery.nypl.org/api/nypl/ndo/v0.1/content/alerts?filter%5Bscope%5D=all";
export declare const getLoginLinks: (
  patronName?: string,
  isProduction?: boolean
) => {
  catalogLink: string;
  researchLink: string;
  logOutLink: string;
};
export declare const upperNavLinks: {
  locations: {
    href: string;
    text: string;
  };
  libraryCard: {
    href: string;
    text: string;
  };
  emailUpdates: {
    href: string;
    text: string;
  };
  donate: {
    href: string;
    text: string;
  };
  shop: {
    href: string;
    text: string;
  };
};
export declare const siteNavLinks: {
  href: string;
  text: string;
}[];
/**
 * Returns the final URL for the NYPL Catalog search.
 */
export declare const getCatalogURL: (searchValue: any) => any;
/**
 * Returns the final URL for the NYPL Research Catalog search.
 */
export declare const getResearchCatalogURL: (searchValue: any) => string;
/**
 * Returns the final URL for the NYPL catalog search.
 */
export declare const getNYPLSearchURL: (searchString: any) => string;
/**
 * The `alertsApiUrl` fetches NYPL alerts from the Refinery API. This API
 * returns JSONAPI-formatted data. We could use a better JSONAPI parser, but
 * this is the only endpoint we will use that is JSONAPI. Eventually, this
 * endpoint will be replaced. This function parses the JSONAPI data in a very
 * naive and quick way to get the necessary alerts data. The data is then
 * filtered to include active alerts.
 */
export declare const parseAlertsData: (data: any) => Alert[];
/**
 * getCookieValue uses the js.cookie package to get the value
 * of the "nyplIdentityPatron" cookie (if it exists) and extract
 * the cookie's `access_token`.
 */
export declare const getCookieValue: () => {
  cookieValue: any;
  accessToken: any;
};
export declare const deleteCookieValue: () => void;
