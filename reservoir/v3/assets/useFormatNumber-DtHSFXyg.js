import { u as i, j as e, M as d, S as r } from "./iframe-D93LbwGv.js";
function t(s) {
  const n = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...i(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { title: "Hooks/useFormatNumber" }),
      `
`,
      e.jsx(n.h1, { id: "useformatnumber", children: "useFormatNumber" }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: "Hook Version" }),
                e.jsx(n.th, { children: "DS Version" }),
              ],
            }),
          }),
          e.jsxs(n.tbody, {
            children: [
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Added" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.5.3" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.5.3" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "useFormatNumber" }),
          ` provides a number with commas and handles a range of numbers.
The formatting is based on standards from the NYPL Writing Style Guide.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "usage", children: "Usage" }),
      `
`,
      e.jsx(r, {
        code: `
import {
formatNumber
} from "@nypl/design-system-react-components";
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "formatNumber" }),
          ` function formats a number to use commas when
appropriate and also handles the formatting of a number range.`,
        ],
      }),
      `
`,
      e.jsxs(n.ol, {
        children: [
          `
`,
          e.jsx(n.li, {
            children:
              "If one number is passed, it formats that number with commas.",
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "If two numbers are passed, it creates a range:",
              `
`,
              e.jsxs(n.ul, {
                children: [
                  `
`,
                  e.jsx(n.li, {
                    children: "Numbers are formatted with commas.",
                  }),
                  `
`,
                  e.jsxs(n.li, {
                    children: [
                      "En dash (",
                      e.jsx(n.code, { children: "–" }),
                      ") is used for the range.",
                    ],
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
          e.jsx(n.li, {
            children: 'Allows numbers passed as strings (e.g., "123456").',
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.p, { children: "Examples:" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, { children: '(4382) -> "4,382"' }),
          `
`,
          e.jsx(n.li, { children: '(4276835) -> "4,276,835"' }),
          `
`,
          e.jsx(n.li, { children: '(1, 99) -> "1–99"' }),
          `
`,
          e.jsx(n.li, { children: '(141, 58) -> "58–141"' }),
          `
`,
          e.jsx(n.li, { children: '(100, 102) -> "100–102"' }),
          `
`,
          e.jsx(n.li, { children: '(10, 100) -> "10–100"' }),
          `
`,
          e.jsx(n.li, { children: '("200", "100") -> "100–200"' }),
          `
`,
          e.jsx(n.li, { children: '("200XX", "100") -> null' }),
          `
`,
          e.jsx(n.li, { children: '("200XX", "100XX") -> null' }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(r, {
        code: `
const copiesSold = formatNumber(81450000);
const suggestedPriceRange = formatNumber(100, 20000);

<Text>
As of June 2024, the Animal Crossing franchise has sold over {copiesSold}
copies worldwide. Suggested retail price: $ {suggestedPriceRange}.
</Text>
`,
        language: "jsx",
      }),
    ],
  });
}
function o(s = {}) {
  const { wrapper: n } = { ...i(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(t, { ...s }) }) : t(s);
}
export { o as default };
