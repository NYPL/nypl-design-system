import {
  u as t,
  j as e,
  M as d,
  F as i,
  a as s,
  V as h,
  H as o,
  G as c,
  L as l,
  S as x,
} from "./iframe-D93LbwGv.js";
function a(r) {
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
    ...t(),
    ...r.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { title: "Components/Chakra Exports/Layout/Flex" }),
      `
`,
      e.jsx(n.h1, { id: "flex", children: "Flex" }),
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
                    children: e.jsx(n.code, { children: "0.25.10" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "0.25.10" }),
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
          e.jsx(n.code, { children: "Flex" }),
          ` component is
useful for simple layouts and can be used along with Chakra's `,
          e.jsx(n.code, { children: "Spacer" }),
          ` component.
The combination can be used to create a container where the children span the
entire width of the container.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Details about available props and related child components can be found on the
`,
          e.jsx(n.a, {
            href: "https://chakra-ui.com/docs/layout/flex",
            rel: "nofollow",
            children: "Flex component",
          }),
          " page on the Chakra UI site.",
        ],
      }),
      `
`,
      e.jsxs(i, {
        alignItems: "baseline",
        mb: "s",
        children: [
          e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
          e.jsx(s, { w: "20", h: "20", bg: "brand.secondary" }),
          e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
          e.jsx(s, { w: "20", h: "20", bg: "brand.secondary" }),
          e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "examples", children: "Examples" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Use the ",
          e.jsx(n.code, { children: "justify" }),
          " prop to move the children around.",
        ],
      }),
      `
`,
      e.jsxs(h, {
        align: "stretch",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", { children: '`justify` set to "center"' }),
              e.jsxs(i, {
                alignItems: "baseline",
                justify: "center",
                children: [
                  e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.secondary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.secondary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("p", { children: '`justify` set to "space-between"' }),
              e.jsxs(i, {
                alignItems: "baseline",
                justify: "space-between",
                children: [
                  e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.secondary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.secondary" }),
                  e.jsx(s, { w: "20", h: "20", bg: "brand.primary" }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "with-spacer", children: "With Spacer" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `A common use-case is displaying a row with two children where the first aligns
left and the second aligns right. Add the `,
          e.jsx(n.code, { children: "Spacer" }),
          ` component between the children.
This is similar to setting `,
          e.jsx(n.code, { children: 'justify="space-between"' }),
          " on the ",
          e.jsx(n.code, { children: "Flex" }),
          ` parent but
the `,
          e.jsx(n.code, { children: "Spacer" }),
          " component is more flexible for most situations.",
        ],
      }),
      `
`,
      e.jsxs(i, {
        alignItems: "baseline",
        children: [
          e.jsx(o, { id: "row-heading", level: "h3", children: "Heading" }),
          e.jsx(c, {}),
          e.jsx(l, {
            href: "#viewmore",
            type: "forwards",
            children: "View more",
          }),
        ],
      }),
      `
`,
      e.jsx(x, {
        code: `
<Flex alignItems="baseline">
<Heading id="row-heading" level="h3">
  Heading
</Heading>
<Spacer />
<Link href="#viewmore" type="forwards">
  View more
</Link>
</Flex>
`,
        language: "jsx",
      }),
    ],
  });
}
function p(r = {}) {
  const { wrapper: n } = { ...t(), ...r.components };
  return n ? e.jsx(n, { ...r, children: e.jsx(a, { ...r }) }) : a(r);
}
export { p as default };
