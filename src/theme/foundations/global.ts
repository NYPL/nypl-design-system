import { activeFocus } from "../components/global";
import { textMargin } from "../components/global";

/**
 * These rules affect all the global elements on the `body` element of the
 * page when the `DSProvider` component is used.
 */
const global = {
  // styles for the `body` element
  body: {
    boxSizing: "border-box",
    bg: "ui.white",
    color: "ui.black",
    fontFamily: "body",
    fontSize: "text.default",
    fontWeight: "text.default",
    lineHeight: "1.5",
    overflowX: "hidden",
    _dark: {
      bg: "dark.ui.bg.page",
      color: "dark.ui.typography.body",
    },
  },
  // styles for the `a` element
  a: {
    color: "ui.link.primary",
  },
  svg: {
    display: "inline",
  },
  "button, select, input, textarea": {
    "&:not([disabled])": {
      _focus: activeFocus(),
    },
  },
  "iframe, [href], [tabindex], [contentEditable='true']": {
    _focus: activeFocus(),
  },
  p: textMargin,
  ul: textMargin,
  ol: textMargin,
  "*, *::before, &::after": {
    boxSizing: "inherit",
  },
};

export default global;
