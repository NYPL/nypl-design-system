import {
  u as r,
  j as e,
  M as d,
  L as t,
  bv as h,
  C as c,
  bw as a,
} from "./iframe-D93LbwGv.js";
import { C as x } from "./ComponentChangelogTable-Ck_3mwrR.js";
import { F as o, W as i } from "./Fieldset.stories-CaTq0Ngd.js";
const j = [
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Styles"],
    notes: ['Changes the font weight for the `(required)` label to `"light"`.'],
  },
  {
    date: "2024-09-19",
    version: "3.3.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Changes 'r' in '(required)' label from upper- to lowercase"],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `FieldsetProps` interface."],
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
      e.jsx(d, { of: o }),
      `
`,
      e.jsx(n.h1, { id: "fieldset", children: "Fieldset" }),
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
                    children: e.jsx(n.code, { children: "0.25.3" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.5.5" }),
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
      e.jsx(h, { of: o }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(c, { of: i }),
      `
`,
      e.jsx(a, { of: i }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `This is a simple component but is very important to use when building web forms.
Syntactically, the `,
          e.jsx(n.code, { children: "Fieldset" }),
          ` component is used to group form elements. Semantically,
the form elements that are group should have a similar theme or context. For
example, when building out a form for a user to create an account, one `,
          e.jsx(n.code, { children: "Fieldset" }),
          `
should be used to group the user's first and last names and another `,
          e.jsx(n.code, { children: "Fieldset" }),
          `
to group the user's address information.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The Reservoir DS implements the ",
          e.jsx(n.code, { children: "Fieldset" }),
          ` component in the following form
components:`,
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              e.jsx(n.code, { children: "CheckboxGroup" }),
              ", ",
              e.jsx(n.code, { children: "DatePicker" }),
              ", ",
              e.jsx(n.code, { children: "RadioGroup" }),
              ".",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.p, { children: "Resources:" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20080430/H82.html",
              rel: "nofollow",
              children: "W3C Grouping form controls with FIELDSET and LEGEND",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/",
              rel: "nofollow",
              children: "GOV.UK Using the fieldset and legend elements",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",
              rel: "nofollow",
              children: "MDN fieldset: The Field Set element",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(x, { changelogData: j }),
    ],
  });
}
function u(s = {}) {
  const { wrapper: n } = { ...r(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(l, { ...s }) }) : l(s);
}
export { u as default };
