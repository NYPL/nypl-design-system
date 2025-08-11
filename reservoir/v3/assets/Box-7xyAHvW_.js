import { u as t, j as e, M as s, a as d, x as i } from "./iframe-D93LbwGv.js";
function r(o) {
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
    ...o.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(s, { title: "Components/Chakra Exports/Layout/Box" }),
      `
`,
      e.jsx(n.h1, { id: "box", children: "Box" }),
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
          "This component is directly exported from Chakra UI. The ",
          e.jsx(n.code, { children: "Box" }),
          ` is a simple and
composable component that can be used for many situations. By default it renders
a `,
          e.jsx(n.code, { children: "div" }),
          " but can render another element using the ",
          e.jsx(n.code, { children: "as" }),
          " prop.",
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
      e.jsxs(n.p, {
        children: [
          `In the following example, the padding, background color, and text color are
updated with the `,
          e.jsx(n.code, { children: "p" }),
          ", ",
          e.jsx(n.code, { children: "bg" }),
          ", and ",
          e.jsx(n.code, { children: "color" }),
          " props respectively.",
        ],
      }),
      `
`,
      e.jsx(d, {
        p: "s",
        mb: "s",
        bg: "brand.primary",
        color: "ui.white",
        children: "This text is inside a `Box` component.",
      }),
      `
`,
      e.jsx(n.h2, {
        id: "with-videoplayer-component-example",
        children: "With VideoPlayer Component Example",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In this example, the props added to the ",
          e.jsx(n.code, { children: "Box" }),
          " component are ",
          e.jsx(n.code, { children: "borderWidth" }),
          `,
`,
          e.jsx(n.code, { children: "padding" }),
          ", ",
          e.jsx(n.code, { children: "borderRadius" }),
          ", and ",
          e.jsx(n.code, { children: "overflow" }),
          ` to create a wrapper around the
`,
          e.jsx(n.code, { children: "VideoPlayer" }),
          " component.",
        ],
      }),
      `
`,
      e.jsx(d, {
        borderWidth: "3px",
        padding: "s",
        borderRadius: "lg",
        overflow: "hidden",
        children: e.jsx(i, {
          videoId: "nm-dD2tx6bk",
          videoType: "youtube",
          aspectRatio: "sixteenByNine",
        }),
      }),
    ],
  });
}
function a(o = {}) {
  const { wrapper: n } = { ...t(), ...o.components };
  return n ? e.jsx(n, { ...o, children: e.jsx(r, { ...o }) }) : r(o);
}
export { a as default };
