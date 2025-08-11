import { u as r, j as e, M as a } from "./iframe-D93LbwGv.js";
function n(i) {
  const t = { h1: "h1", p: "p", ...r(), ...i.components };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(a, { title: "Style Guide/Filtering/JavaScript disabled" }),
      `
`,
      e.jsx(t.h1, {
        id: "filtering-when-javascript-is-disabled",
        children: "Filtering when JavaScript is disabled",
      }),
      `
`,
      e.jsx(t.p, {
        children: `Our engineering implementation goal is to reach parity of outcomes instead of
parity of interaction. Live or real-time filtering is not achievable when a
browser does not have JavaScript enabled. This means that selecting filtering
options will not automatically render the new set of results, but rather there
needs to be a way for the user to submit the selected filters. While this
increases the risk of encountering no results with all the selected filters, it
still provides the ability to filter and reach the same outcome as real-time
filtering with JavaScript.`,
      }),
      `
`,
      e.jsx(t.p, {
        children: `At a base default level, the filter UIs should include “apply” or “submit”
buttons that get removed once JavaScript loads. Developers need to keep in mind
that the HTML form implementation and individual input elements need to be
either uncontrolled or controlled for their specific application-needs and
architecture.`,
      }),
      `
`,
      e.jsx(t.p, {
        children: `Additionally, text should be updated to reflect the number of results available
in all applicable locations. This is most apparent in the mobile “Show results”
button where, with real-time filtering available, would instead render “Show X
results” where X is the number of results returned from the server.`,
      }),
      `
`,
      e.jsx(t.p, {
        children: `When JavaScript is disabled, it is generally in desktop browsers and rarely in
mobile browsers. Still, in order to support a sensible default for the mobile
filter component, the popup should work without JavaScript.`,
      }),
    ],
  });
}
function l(i = {}) {
  const { wrapper: t } = { ...r(), ...i.components };
  return t ? e.jsx(t, { ...i, children: e.jsx(n, { ...i }) }) : n(i);
}
export { l as default };
