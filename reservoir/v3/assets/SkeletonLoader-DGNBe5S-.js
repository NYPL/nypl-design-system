import {
  u as a,
  j as e,
  M as d,
  L as s,
  bv as c,
  C as i,
  bw as h,
} from "./iframe-D93LbwGv.js";
import {
  S as o,
  W as l,
  G as x,
  L as j,
  a as p,
} from "./SkeletonLoader.stories-BXvmwy_S.js";
import { C as f } from "./ComponentChangelogTable-Ck_3mwrR.js";
const u = [
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the styles to make the button placeholder look more like a button.",
    ],
  },
  {
    date: "2024-05-09",
    version: "3.1.2",
    type: "Update",
    affects: ["Functionality", "Accessibility"],
    notes: ["Adds `id` prop."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
function r(t) {
  const n = {
    a: "a",
    blockquote: "blockquote",
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
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { of: o }),
      `
`,
      e.jsx(n.h1, { id: "skeletonloader", children: "SkeletonLoader" }),
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
                    children: e.jsx(n.code, { children: "0.17.3" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.6.1" }),
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
                href: "#in-a-grid",
                target: "_self",
                children: "In a Grid",
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
                href: "#in-a-list",
                target: "_self",
                children: "In a List",
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
                href: "#with-buttons",
                target: "_self",
                children: "With Buttons",
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
      e.jsx(c, { of: o }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "layout" }),
          ", ",
          e.jsx(n.code, { children: "width" }),
          ", and placeholder elements within the ",
          e.jsx(n.code, { children: "SkeletonLoader" }),
          ` can
be customized.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Please note that the initial rendering below has the ",
          e.jsx(n.code, { children: "width" }),
          " prop set to ",
          e.jsx(n.code, { children: "300px" }),
          `
to better view the example. The default value is `,
          e.jsx(n.code, { children: "100%" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(i, { of: l }),
      `
`,
      e.jsx(h, { of: l }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsx(n.p, {
        children:
          "According to W3C's success criterion 2.2.2 for operable user interfaces:",
      }),
      `
`,
      e.jsxs(n.blockquote, {
        children: [
          `
`,
          e.jsx(n.p, {
            children: `For any moving, blinking or scrolling information that (1) starts
automatically, (2) lasts more than five seconds, and (3) is presented in
parallel with other content, there is a mechanism for the user to pause, stop,
or hide it unless the movement, blinking, or scrolling is part of an activity
where it is essential;`,
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "SkeletonLoader" }),
          ` component can be used as a placeholder for local content
that is loaded in parallel but it typically does not last more than five (5)
seconds. For the DS usage, this is purely a visual cue and should not be picked
up by screen readers.`,
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
              href: "https://www.w3.org/TR/WCAG/#pause-stop-hide",
              rel: "nofollow",
              children: "W3C Perceivable Pause, Stop, Hide",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://adrianroselli.com/2020/11/more-accessible-skeletons.html",
              rel: "nofollow",
              children: "More Accessible Skeletons",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "in-a-grid", children: "In a Grid" }),
      `
`,
      e.jsx(i, { of: x }),
      `
`,
      e.jsx(n.h2, { id: "in-a-list", children: "In a List" }),
      `
`,
      e.jsx(i, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "with-buttons", children: "With Buttons" }),
      `
`,
      e.jsx(i, { of: p }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(f, { changelogData: u }),
    ],
  });
}
function y(t = {}) {
  const { wrapper: n } = { ...a(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(r, { ...t }) }) : r(t);
}
export { y as default };
