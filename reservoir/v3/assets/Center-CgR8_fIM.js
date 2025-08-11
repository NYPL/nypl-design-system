import {
  u as a,
  j as e,
  M as h,
  a as l,
  y as x,
  z as i,
  D as t,
  I as s,
  E as o,
} from "./iframe-D93LbwGv.js";
import { C as c } from "./chunk-FAWTVNS3-BdARbYPQ.js";
function d(r) {
  const n = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...a(),
    ...r.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(h, {
        title: "Components/Chakra Exports/Layout/Center, Circle, Square",
      }),
      `
`,
      e.jsx(n.h1, {
        id: "center-circle-square",
        children: "Center, Circle, Square",
      }),
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
          e.jsx(n.tbody, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.td, { children: "Added" }),
                e.jsx(n.td, {
                  children: e.jsx(n.code, { children: "0.24.0" }),
                }),
              ],
            }),
          }),
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Note: This needs the use of the ",
          e.jsx(n.code, { children: "DSProvider" }),
          ` component. See the
`,
          e.jsx(n.a, {
            href: "../?path=/docs/chakra-ui--docs#dsprovider",
            children: "Chakra UI docs",
          }),
          " for more information.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "These components are directly exported from Chakra UI. The ",
          e.jsx(n.code, { children: "Center" }),
          ", ",
          e.jsx(n.code, { children: "Circle" }),
          `,
and `,
          e.jsx(n.code, { children: "Square" }),
          " are layout component that center their child.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "All available props can be found on the ",
          e.jsx(n.a, {
            href: "https://chakra-ui.com/docs/features/style-props",
            rel: "nofollow",
            children: "Style Props",
          }),
          `
guide on the Chakra UI site.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "center", children: "Center" }),
      `
`,
      e.jsxs(l, {
        mt: "s",
        mb: "s",
        children: [
          "Some text at the beginning.",
          e.jsx(c, {
            p: "s",
            bg: "brand.primary",
            color: "ui.white",
            children: "This text is centered inside a `Center` component.",
          }),
          "Some text at the end.",
        ],
      }),
      `
`,
      e.jsx(c, {
        border: "1px solid",
        borderColor: "ui.gray.medium",
        children: e.jsx(x, {
          alt: "Centered Image",
          size: "medium",
          src: "//loremflickr.com/300/400/new+york+public+library",
        }),
      }),
      `
`,
      e.jsx(n.h2, { id: "circle", children: "Circle" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This component is similar to the ",
          e.jsx(n.code, { children: "Center" }),
          ` component but it is always rendered as
a circle.`,
        ],
      }),
      `
`,
      e.jsxs(i, {
        spacing: "s",
        children: [
          e.jsx(t, {
            size: "50px",
            bg: "brand.secondary",
            children: e.jsx(s, {
              name: "download",
              color: "ui.white",
              size: "large",
            }),
          }),
          e.jsx(t, {
            size: "50px",
            bg: "ui.link.primary",
            children: e.jsx(s, {
              name: "check",
              color: "ui.white",
              size: "large",
            }),
          }),
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "square", children: "Square" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This component is similar to the ",
          e.jsx(n.code, { children: "Circle" }),
          ` component but always has equal height
and width.`,
        ],
      }),
      `
`,
      e.jsxs(i, {
        spacing: "s",
        children: [
          e.jsx(o, {
            size: "50px",
            bg: "brand.secondary",
            children: e.jsx(s, {
              name: "download",
              color: "ui.white",
              size: "large",
            }),
          }),
          e.jsx(o, {
            size: "50px",
            bg: "ui.link.primary",
            children: e.jsx(s, {
              name: "check",
              color: "ui.white",
              size: "large",
            }),
          }),
        ],
      }),
    ],
  });
}
function p(r = {}) {
  const { wrapper: n } = { ...a(), ...r.components };
  return n ? e.jsx(n, { ...r, children: e.jsx(d, { ...r }) }) : d(r);
}
export { p as default };
