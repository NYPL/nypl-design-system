import {
  u as r,
  j as e,
  M as l,
  y as o,
  bu as a,
  L as s,
} from "./iframe-D93LbwGv.js";
const d = "" + new URL("resultsList-BoaK_PXL.png", import.meta.url).href;
function i(n) {
  const t = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...r(),
    ...n.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(l, { title: "Style Guide/Filtering/Page elements/Results list" }),
      `
`,
      e.jsx(t.h1, { id: "results-list", children: "Results list" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "results list" }),
          " represents the items that are being filtered.",
        ],
      }),
      `
`,
      e.jsx(o, { alt: "Example of results list", src: d, ...a }),
      `
`,
      e.jsx(t.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(t.ul, {
        children: [
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(s, {
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
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#presentation",
                target: "_self",
                children: "Presentation",
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
      e.jsx(t.h2, { id: "rendering", children: "Rendering" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "results list" }),
          " will most commonly be rendered using the DS ",
          e.jsx(t.code, { children: "Card" }),
          ` component
presented in a list or grid format, but ultimately the items in the `,
          e.jsx(t.code, { children: "results list" }),
          `
should be composed as needed by consuming apps.`,
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "presentation", children: "Presentation" }),
      `
`,
      e.jsx(t.p, {
        children: `For results that are presented in either a list or grid format, it is
recommended to show 12, 24, 36, or 48 results on each page in a set of results,
depending on the size and complexity of the individual result items. For
example, simple result items that contain a book title and a short description
should show 36 or 48 items per page, while complex result items that include a
photo, a book title, a long description, an availability indicator, and CTA
buttons might be best limited to 12 or 24 items per page.`,
      }),
      `
`,
      e.jsx(t.p, {
        children: `The number of items per page should initially be set by the product designer and
the product owner, but the final number should also take into account
limitations imposed by the data architecture and infrastructure of a consuming
app.`,
      }),
    ],
  });
}
function c(n = {}) {
  const { wrapper: t } = { ...r(), ...n.components };
  return t ? e.jsx(t, { ...n, children: e.jsx(i, { ...n }) }) : i(n);
}
export { c as default };
