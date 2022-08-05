import { headerYellow } from "./header";

const SitewideAlerts = {
  baseStyle: {
    backgroundColor: headerYellow,
    borderBottom: { base: "1px solid", md: "none" },
    fontSize: "text.default",
    fontWeight: "regular",
    lineHeight: "1.1rem",
    minHeight: { base: "85px", md: "65px" },
    paddingX: "s",
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
