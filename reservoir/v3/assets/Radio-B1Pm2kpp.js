import {
  u as a,
  j as e,
  M as d,
  L as s,
  bv as h,
  C as t,
  bw as c,
} from "./iframe-D93LbwGv.js";
import {
  R as i,
  C as o,
  B as x,
  H as j,
  L as p,
} from "./Radio.stories-B_l3KaTo.js";
import { C as m } from "./ComponentChangelogTable-Ck_3mwrR.js";
import "./storybookUtils-BmTl87w5.js";
const f = [
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Syncs the focus color styles with the VDL."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
function l(r) {
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
    ...a(),
    ...r.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { of: i }),
      `
`,
      e.jsx(n.h1, { id: "radio", children: "Radio" }),
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
                    children: e.jsx(n.code, { children: "0.22.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.6.0" }),
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
              e.jsx(s, {
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
              e.jsx(s, {
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
              e.jsx(s, {
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
              e.jsx(s, {
                href: "#browser-states",
                target: "_self",
                children: "Browser States",
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
              e.jsx(s, {
                href: "#helper-and-error-text",
                target: "_self",
                children: "Helper and Error Text",
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
              e.jsx(s, {
                href: "#label-using-jsx-elements",
                target: "_self",
                children: "Label Using JSX Elements",
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
              e.jsx(s, {
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
          `This component renders a radio button form element. Note that all these examples
show the `,
          e.jsx(n.code, { children: "Radio" }),
          " button in isolation. We recommend to always use the ",
          e.jsx(n.code, { children: "Radio" }),
          `
component inside the Design System `,
          e.jsx(n.code, { children: "RadioGroup" }),
          " component. The ",
          e.jsx(n.code, { children: "RadioGroup" }),
          `
component will handle all the states and data management.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(t, { of: o }),
      `
`,
      e.jsx(c, { of: o }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Radio" }),
          " component renders an ",
          e.jsx(n.code, { children: "input" }),
          " element with the ",
          e.jsx(n.code, { children: 'type="radio"' }),
          ` attribute.
This HTML element is accessible by default.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When ",
          e.jsx(n.code, { children: "showLabel" }),
          " is set to false, the ",
          e.jsx(n.code, { children: "labelText" }),
          ` value will be set to the
`,
          e.jsx(n.code, { children: "<input>" }),
          "'s ",
          e.jsx(n.code, { children: "aria-label" }),
          " attribute.",
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
              href: "https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html",
              rel: "nofollow",
              children: "W3C ARIA radiogroup and radio example",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/examples/radio/radio-1/radio-1.html",
              rel: "nofollow",
              children: "W3C Radio Button Example",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio",
              rel: "nofollow",
              children: 'MDN input type="radio"',
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://dequeuniversity.com/library/aria/radio-and-radio-group",
              rel: "nofollow",
              children: "Deque University Radio and Radio Group",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://chakra-ui.com/docs/components/form/radio",
              rel: "nofollow",
              children: "Chakra UI Radio",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "browser-states", children: "Browser States" }),
      `
`,
      e.jsx(t, { of: x }),
      `
`,
      e.jsx(n.h2, {
        id: "helper-and-error-text",
        children: "Helper and Error Text",
      }),
      `
`,
      e.jsx(t, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "jsx-element-labels", children: "JSX Element Labels" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `This is useful when you want to add dynamic content to the label or add
a layout to the label. View the `,
          e.jsx(n.code, { children: "RadioGroup" }),
          ` documentation for this
usage.`,
        ],
      }),
      `
`,
      e.jsx(t, { of: p }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(m, { changelogData: f }),
    ],
  });
}
function y(r = {}) {
  const { wrapper: n } = { ...a(), ...r.components };
  return n ? e.jsx(n, { ...r, children: e.jsx(l, { ...r }) }) : l(r);
}
export { y as default };
