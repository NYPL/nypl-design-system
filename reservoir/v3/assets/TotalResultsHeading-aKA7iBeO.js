import {
  u as l,
  j as e,
  M as r,
  y as d,
  bu as h,
  L as t,
} from "./iframe-D93LbwGv.js";
const a =
  "" + new URL("totalResultsHeading-cQBMs_Gl.png", import.meta.url).href;
function i(s) {
  const n = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...l(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(r, {
        title: "Style Guide/Filtering/Page elements/Total results heading",
      }),
      `
`,
      e.jsx(n.h1, {
        id: "total-results-heading",
        children: "Total results heading",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "total results" }),
          ` heading reflects the current state of a results set,
displaying the number of records in a results set, the current position within a
results set, and, if applicable, the search term used to generate a results set.`,
        ],
      }),
      `
`,
      e.jsx(d, { alt: "Example of total results heading", src: a, ...h }),
      `
`,
      e.jsx(n.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#rendering",
                target: "_self",
                children: "Rendering",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#position",
                target: "_self",
                children: "Position",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#updating",
                target: "_self",
                children: "Updating",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#formatting",
                target: "_self",
                children: "Formatting",
              }),
              `
`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "rendering", children: "Rendering" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "total results" }),
          ` heading should be rendered using the DS
`,
          e.jsx(n.a, {
            href: "./?path=/docs/components-typography-styles-heading--docs",
            children: "Heading",
          }),
          " component.",
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "position", children: "Position" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "total results" }),
          " heading should be positioned below the ",
          e.jsx(n.code, { children: "active filters" }),
          ` list and
aligned to the left.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "updating", children: "Updating" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "total results" }),
          " heading should be updated whenever filters are applied.",
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "formatting", children: "Formatting" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "total results" }),
          " heading should use the following format:",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.code, {
          children: "Displaying 1-24 of 1,234 results",
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `In use cases where a keyword search term has been applied to the search results
using the `,
          e.jsx(n.code, { children: "keyword search" }),
          " field, the ",
          e.jsx(n.code, { children: "total results" }),
          ` heading should use the
following format:`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.code, {
          children: 'Displaying 1-24 of 567 results for "{search_term}"',
        }),
      }),
    ],
  });
}
function c(s = {}) {
  const { wrapper: n } = { ...l(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(i, { ...s }) }) : i(s);
}
export { c as default };
