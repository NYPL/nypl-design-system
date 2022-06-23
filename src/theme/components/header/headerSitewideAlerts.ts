import { headerYellow } from "./header";

const SitewideAlerts = {
  baseStyle: {
    backgroundColor: headerYellow,
    borderBottom: { base: "1px solid", md: "none" },
    minHeight: { base: "85px", md: "65px" },
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
  },
};

export default SitewideAlerts;
