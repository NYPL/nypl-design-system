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

export const fetchPatronData = (accessToken, cb) => {
  const patronApiUrl = "https://platform.nypl.org/api/v0.1/auth/patron/tokens/";
  const fetchErrorMessage =
    "NYPL Reservoir Header: There was an error fetching NYPL patron data.";

  fetch(`${patronApiUrl}${accessToken}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        throw new Error(fetchErrorMessage);
      }
    })
    .then(cb)
    .catch((response) => {
      console.warn(response.message);
    });
};

export const extractPatronName = (data) => {
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
    return null;
  }
};
