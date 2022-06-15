import Cookies from "js-cookie";
export interface Alert {
  id: string;
  link: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const alertsApiUrl =
  "https://refinery.nypl.org/api/nypl/ndo/v0.1/content/alerts?filter%5Bscope%5D=all";

/**
 * The `alertsApiUrl` fetches NYPL alerts from the Refinery API. This API
 * returns JSONAPI-formatted data. We could use a better JSONAPI parser, but
 * this is the only endpoint we will use that is JSONAPI. Eventually, this
 * endpoint will be replaced. This function parses the JSONAPI data in a very
 * naive and quick way to get the necessary alerts data. The data is then
 * filtered to include active alerts.
 */
export const parseAlertsData = (data: any): Alert[] => {
  const today = new Date();
  if (!data?.data.length) {
    return [];
  }
  // There is an assumption in the JSONAPI data that the description text will
  // be translated into many languages. Only the English description is
  // available so we will use that.
  const alerts = data.data.map((alert) => {
    return {
      id: alert?.id,
      link: alert.links?.self,
      description: alert?.attributes["alert-text"]?.en?.text,
      startDate: alert?.attributes["display-date-start"],
      endDate: alert?.attributes["display-date-end"],
    };
  });

  // Filter alerts based on their timestamps so they are rendered
  // appropriately, no "expired" alert should be rendered.
  const filteredAlerts = alerts.filter((alert) => {
    const startDate = new Date(alert.startDate);
    const endDate = new Date(alert.endDate);
    return (
      startDate.getTime() <= today.getTime() &&
      today.getTime() <= endDate.getTime()
    );
  });

  return filteredAlerts;
};

const patronApiUrl = "https://platform.nypl.org/api/v0.1/auth/patron/tokens/";

const authServerDomain = "https://login.nypl.org/auth";
export const tokenRefreshLink = `${authServerDomain}/refresh`;

/**
 * `refreshAccessToken` attempts to refresh the "nyplIdentityPatron" cookie's
 * `accessToken` by making a request to the `tokenRefreshLink`. If successful,
 * it tries to fetch the patron's data again.
 */

export const refreshAccessToken = (api, cb, fallBackCb) => {
  const refreshErrorMessage =
    "NYPL Reservoir Header: There was an error refreshing NYPL patron data.";

  fetch(api, { credentials: "include" })
    .then((response) => {
      // If the response to the `tokenRefreshLink` is successful, make another
      // request to the patronApiUrl using the refreshed accessToken.
      if (response.status >= 200 && response.status < 300) {
        const { accessToken } = getCookieValue();
        getLoginData(accessToken, cb);
      } else {
        // If the call to the `tokenRefreshLink` is unsuccessful, throw an error.
        // Doing so will drop us down to the catch block below.
        throw new Error(refreshErrorMessage);
      }
    })
    .catch((error) => {
      // The server responded with a status that falls out of the 2xx range
      // or the call to the `tokenRefreshLink` endpoint was unsuccessful.
      console.warn(refreshErrorMessage);
      console.warn(`Error Data: ${error?.data}`);
      console.warn(`Error Status: ${error?.status}`);
      console.warn(`Error Headers: ${error?.headers}`);
      console.warn(`Error Config: ${error?.config}`);
      fallBackCb();
    });
};

/**
 * getCookieValue uses the js.cookie package to get the value
 * of the "nyplIdentityPatron" cookie (if it exists) and extract
 * the cookie's `access_token`.
 */
export const getCookieValue = () => {
  const cookieValue = Cookies.get("nyplIdentityPatron");
  const accessToken = cookieValue ? JSON.parse(cookieValue).access_token : "";

  return { cookieValue, accessToken };
};

export const deleteCookieValue = () => {
  Cookies.remove("nyplIdentityPatron");
};

/**
 * fetchPatronData uses the patronApiUrl combined with the
 * `accessToken` from the "nyplIdentityPatron" cookie to fetch
 * the patron's information from the server.
 */
export const getLoginData = (accessToken, cb) => {
  const fetchErrorMessage =
    "NYPL Reservoir Header: There was an error fetching NYPL patron data.";

  fetch(`${patronApiUrl}${accessToken}`)
    .then((response) => {
      // If the response has a status of 2xx or 401, parse it and pass it
      // to the .then() callback function. We want to include the responses
      // with a status of 401 because they could show the `accessToken` is
      // expired and needs refreshing.
      if (
        (response.status >= 200 && response.status < 300) ||
        response.status === 401
      ) {
        return response.json();
      }
      // If the response's status is not 2xx or 401, throw an error.
      // Doing so will drop us down to the catch block below.
      throw new Error(fetchErrorMessage);
    })
    // The callback function is `loginDataCallback`, declared in `Header.tsx`.
    // It will try to refresh the accessToken if expired or extract the patron's
    // name from the returned data if not.
    .then(cb)
    .catch((error) => {
      // In this scenario, the server responded with a status code that
      // falls out of the range of 2xx and is not 401 with the expired token.
      console.warn(fetchErrorMessage);
      console.warn(`Error Data: ${error?.data}`);
      console.warn(`Error Message: ${error?.message}`);
      console.warn(`Error Status: ${error?.status}`);
      console.warn(`Error Headers: ${error?.headers}`);
      console.warn(`Error Config: ${error?.config}`);
    });
};

/**
 * `extractPatronName` locates and returns the `patronName`
 * from the nested object that is returned from `fetchPatronData`.
 */
export const extractPatronName = (data: any) => {
  try {
    const {
      data: {
        patron: {
          names: [patronName],
        },
      },
    } = data;

    return patronName;
  } catch (e) {
    return "";
  }
};
