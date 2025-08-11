import {
  N as y,
  by as f,
  j as e,
  K as w,
  bz as S,
  u as i,
  M as C,
  bA as t,
  a as r,
  S as G,
} from "./iframe-D93LbwGv.js";
function d(s) {
  return S(s, (n) => (n === "auto" ? "auto" : `span ${n}/span ${n}`));
}
var o = y(function (n, c) {
  const {
      area: l,
      colSpan: h,
      colStart: p,
      colEnd: m,
      rowEnd: x,
      rowSpan: j,
      rowStart: u,
      ...g
    } = n,
    b = f({
      gridArea: l,
      gridColumn: d(h),
      gridRow: d(j),
      gridColumnStart: p,
      gridColumnEnd: m,
      gridRowStart: u,
      gridRowEnd: x,
    });
  return e.jsx(w.div, { ref: c, __css: b, ...g });
});
o.displayName = "GridItem";
function a(s) {
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
    ...i(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(C, { title: "Components/Chakra Exports/Layout/Grid" }),
      `
`,
      e.jsx(n.h1, { id: "grid", children: "Grid" }),
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
                    children: e.jsx(n.code, { children: "0.25.1" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "0.25.1" }),
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
          "This component is directly exported from Chakra UI. The ",
          e.jsx(n.code, { children: "Grid" }),
          ` component is
useful for grid layouts and offers more complexity and formatting options than
the Reservoir Design System (DS) `,
          e.jsx(n.code, { children: "SimpleGrid" }),
          " component. ",
          e.jsx(n.code, { children: "Grid" }),
          " is ",
          e.jsx(n.code, { children: "Box" }),
          ` with
`,
          e.jsx(n.code, { children: "display: grid" }),
          " and it comes with helpful style shorthand. It renders a ",
          e.jsx(n.code, { children: "div" }),
          `
element.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Details about available props and related child components can be found on the
`,
          e.jsx(n.a, {
            href: "https://chakra-ui.com/docs/layout/grid",
            rel: "nofollow",
            children: "Grid component",
          }),
          ` page on the Chakra UI
site.`,
        ],
      }),
      `
`,
      e.jsxs(t, {
        templateColumns: "repeat(5, 1fr)",
        gap: "grid.default",
        mb: "s",
        children: [
          e.jsx(r, { w: "100%", h: "20", bg: "brand.primary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.secondary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.primary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.secondary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.primary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.secondary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.primary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.secondary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.primary" }),
          e.jsx(r, { w: "100%", h: "20", bg: "brand.secondary" }),
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "complex-layouts-with-grid-child-components",
        children: "Complex Layouts with Grid Child Components",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `In some layouts, you may need certain grid items to span a specific amount of
columns or rows instead of an even distribution. To achieve this, you need to
pass the `,
          e.jsx(n.code, { children: "colSpan" }),
          " prop to the ",
          e.jsx(n.code, { children: "GridItem" }),
          ` component to span across columns and
also pass the `,
          e.jsx(n.code, { children: "rowSpan" }),
          ` component to span across rows. You also need to specify
the `,
          e.jsx(n.code, { children: "templateColumns" }),
          " and ",
          e.jsx(n.code, { children: "templateRows" }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(t, {
        height: "200px",
        templateRows: "repeat(2, 1fr)",
        templateColumns: "repeat(5, 1fr)",
        gap: "grid.default",
        children: [
          e.jsx(o, { rowSpan: 2, colSpan: 1, bg: "ui.link.primary" }),
          e.jsx(o, { colSpan: 2, bg: "ui.success.primary" }),
          e.jsx(o, { colSpan: 2, bg: "ui.success.secondary" }),
          e.jsx(o, { colSpan: 4, bg: "ui.link.secondary" }),
        ],
      }),
      `
`,
      e.jsx(G, {
        code: `
<Grid
height="200px"
templateRows="repeat(2, 1fr)"
templateColumns="repeat(5, 1fr)"
gap="grid.default"
>
<GridItem rowSpan={2} colSpan={1} bg="ui.link.primary" />
<GridItem colSpan={2} bg="ui.success.primary" />
<GridItem colSpan={2} bg="ui.success.secondary" />
<GridItem colSpan={4} bg="ui.link.secondary" />
</Grid>
`,
        language: "jsx",
      }),
    ],
  });
}
function k(s = {}) {
  const { wrapper: n } = { ...i(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(a, { ...s }) }) : a(s);
}
export { k as default };
