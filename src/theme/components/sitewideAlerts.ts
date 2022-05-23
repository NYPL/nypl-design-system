const SitewideAlerts = {
  baseStyle: ({ isMobile }) => ({
    borderBottom: isMobile ? "1px solid" : null,
    ul: {
      marginBottom: "0",
      // Target any anchor and paragraph HTML passed in from
      // the API response in `alert.description`.
      a: {
        textDecoration: "underline",
      },
      p: {
        marginBottom: "0",
      },
    },
  }),
};

export default SitewideAlerts;
