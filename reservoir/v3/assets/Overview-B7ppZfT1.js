import { u as l, j as e, M as r, L as t } from "./iframe-D93LbwGv.js";
function s(i) {
  const n = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...l(),
    ...i.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(r, { title: "Style Guide/Filtering/Overview" }),
      `
`,
      e.jsx(n.h1, {
        id: "ux-recommendations-for-filtering",
        children: "UX recommendations for filtering",
      }),
      `
`,
      e.jsx(n.p, {
        children: `Categorization and filtering is a key part of NYPL's business. Across the NYPL
websites, various methods are provided for users to find what they are looking
for, often in the context of a filtered search. Filtering helps a user find what
they are looking for. It allows user to refine content by selecting criteria
that is relevant to their needs.`,
      }),
      `
`,
      e.jsx(n.p, {
        children: `The NYPL Product and Design UX recommendations and patterns for filtering help
bring visual and functional uniformity and consistency to all NYPL websites.`,
      }),
      `
`,
      e.jsx(n.h2, { id: "table-of-contents", children: "Table of contents" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "?path=/docs/style-guide-filtering-page-composition--docs",
              children: "Page composition",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "?path=/docs/style-guide-filtering-applying-clearing-filters--docs",
              children: "Applying & clearing filters",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "?path=/docs/style-guide-filtering-accessibility--docs",
              children: "Filtering accessibility",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "?path=/docs/style-guide-filtering-javascript-disabled--docs",
              children: "Filtering when JavaScript is disabled",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "design-examples", children: "Design examples" }),
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
                href: "https://www.figma.com/design/qpllPO7SRpgaXdhk5mG9BH/Example-Page-Design?node-id=1361-11781&t=CVP20UTxu75HE0YX-11",
                target: "_blank",
                type: "external",
                children: "Row filtering example",
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
                href: "https://www.figma.com/design/qpllPO7SRpgaXdhk5mG9BH/Example-Page-Design?node-id=1871-10399&t=CVP20UTxu75HE0YX-11",
                target: "_blank",
                type: "external",
                children: "Column filtering example",
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
      e.jsx(n.h2, {
        id: "functional-examples",
        children: "Functional examples",
      }),
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
                href: "https://www.mylibrarynyc.org/teacher_set_data?keyword=dogs",
                target: "_blank",
                type: "external",
                children: "MyLibraryNYC",
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
                href: "https://www.nypl.org/research/research-catalog/bib/b21148115",
                target: "_blank",
                type: "external",
                children: "Research Catalog",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(t, {
                href: "https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification",
                target: "_blank",
                type: "external",
                children: "Turbine example",
              }),
              " (still in development)",
            ],
          }),
          `
`,
        ],
      }),
    ],
  });
}
function o(i = {}) {
  const { wrapper: n } = { ...l(), ...i.components };
  return n ? e.jsx(n, { ...i, children: e.jsx(s, { ...i }) }) : s(i);
}
export { o as default };
