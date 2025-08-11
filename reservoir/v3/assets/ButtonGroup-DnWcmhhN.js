import {
  u as r,
  j as e,
  M as c,
  L as t,
  bv as h,
  C as o,
  bw as a,
} from "./iframe-D93LbwGv.js";
import { C as x } from "./ComponentChangelogTable-Ck_3mwrR.js";
import {
  B as i,
  W as d,
  a as j,
  L as p,
  D as u,
} from "./ButtonGroup.stories-DQVliP1k.js";
const f = [
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `ButtonGroupProps` interface."],
  },
  {
    date: "2024-05-15",
    version: "3.1.3",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Fixes desktop flicker issue where the mobile view was briefly displayed before the desktop styles were applied.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
function l(s) {
  const n = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...r(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { of: i }),
      `
`,
      e.jsx(n.h1, { id: "buttongroup", children: "ButtonGroup" }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: "Component Version" }),
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
                    children: e.jsx(n.code, { children: "0.28.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.2.0" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
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
                href: "#overview",
                target: "_self",
                children: "Overview",
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
                href: "#component-props",
                target: "_self",
                children: "Component Props",
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
                href: "#accessibility",
                target: "_self",
                children: "Accessibility",
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
                href: "#button-width",
                target: "_self",
                children: "Button Width",
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
                href: "#layout",
                target: "_self",
                children: "Layout",
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
                href: "#isDisabled",
                target: "_self",
                children: "isDisabled",
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
                href: "#changelog",
                target: "_self",
                children: "Changelog",
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
      e.jsx(n.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsx(h, { of: i }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Note: The ",
          e.jsx(n.code, { children: "ButtonGroup" }),
          ` component does not come from Chakra because we want to
display the `,
          e.jsx(n.code, { children: "Button" }),
          `s in a column layout as an option, as well as control the
width.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(o, { of: d }),
      `
`,
      e.jsx(a, { of: d }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This component is a wrapper around the ",
          e.jsx(n.code, { children: "Button" }),
          ` component. For accessibility
information on the `,
          e.jsx(n.code, { children: "Button" }),
          " component, see the ",
          e.jsx(n.a, {
            href: "../?path=/docs/components-form-elements-button--docs#accessibility",
            children: `Button
Accessibility`,
          }),
          `
documentation.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "button-width", children: "Button Width" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "buttonWidth" }),
          " prop can be used to set the width of the internal ",
          e.jsx(n.code, { children: "Button" }),
          `
components. The default value is `,
          e.jsx(n.code, { children: "default" }),
          ` and it sets the width to
`,
          e.jsx(n.code, { children: '"fit-content"' }),
          " so the buttons will expand to its content. The ",
          e.jsx(n.code, { children: '"full"' }),
          ` value
will set the width to the parent's width.`,
        ],
      }),
      `
`,
      e.jsx(o, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "layout", children: "Layout" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "layout" }),
          " prop can be used to set the layout to either ",
          e.jsx(n.code, { children: "row" }),
          " or ",
          e.jsx(n.code, { children: "column" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(o, { of: p }),
      `
`,
      e.jsx(n.h2, { id: "disabled", children: "Disabled" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "isDisabled" }),
          " prop can be used to disable all the ",
          e.jsx(n.code, { children: "Button" }),
          ` children at once.
Individual `,
          e.jsx(n.code, { children: "Button" }),
          "s can still be disabled with their own ",
          e.jsx(n.code, { children: "isDisabled" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(o, { name: "isDisabled", of: u }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(x, { changelogData: f }),
    ],
  });
}
function w(s = {}) {
  const { wrapper: n } = { ...r(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(l, { ...s }) }) : l(s);
}
export { w as default };
