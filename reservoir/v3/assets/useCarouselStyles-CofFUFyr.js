import { u as o, j as e, M as d } from "./iframe-D93LbwGv.js";
function n(t) {
  const s = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...o(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { title: "Hooks/useCarouselStyles" }),
      `
`,
      e.jsx(s.h1, { id: "usecarouselstyles", children: "useCarouselStyles" }),
      `
`,
      e.jsxs(s.table, {
        children: [
          e.jsx(s.thead, {
            children: e.jsxs(s.tr, {
              children: [
                e.jsx(s.th, { children: "Hook Version" }),
                e.jsx(s.th, { children: "DS Version" }),
              ],
            }),
          }),
          e.jsxs(s.tbody, {
            children: [
              e.jsxs(s.tr, {
                children: [
                  e.jsx(s.td, { children: "Added" }),
                  e.jsx(s.td, {
                    children: e.jsx(s.code, { children: "0.25.2" }),
                  }),
                ],
              }),
              e.jsxs(s.tr, {
                children: [
                  e.jsx(s.td, { children: "Latest" }),
                  e.jsx(s.td, {
                    children: e.jsx(s.code, { children: "3.0.0" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsxs(s.p, {
        children: [
          "This custom hook, inspired by this ",
          e.jsx(s.a, {
            href: "https://codesandbox.io/s/fxjeo",
            rel: "nofollow",
            children: "codesandbox example",
          }),
          `,
exposes functions used for carousel-like components that have sliding features.
The two main functions are `,
          e.jsx(s.code, { children: "prevSlide" }),
          " and ",
          e.jsx(s.code, { children: "nextSlide" }),
          ` used for buttons to
navigate between slides, and a `,
          e.jsx(s.code, { children: "carouselStyle" }),
          ` style object for the main wrapper
element. If the carousel should programmatically slide to the first slide, use
the `,
          e.jsx(s.code, { children: "goToStart" }),
          " function.",
        ],
      }),
      `
`,
      e.jsx(s.p, { children: "Note: This hook is currently not being used." }),
    ],
  });
}
function i(t = {}) {
  const { wrapper: s } = { ...o(), ...t.components };
  return s ? e.jsx(s, { ...t, children: e.jsx(n, { ...t }) }) : n(t);
}
export { i as default };
