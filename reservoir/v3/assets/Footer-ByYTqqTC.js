import { u as s, j as e, M as t, L as i, S as l } from "./iframe-D93LbwGv.js";
function r(o) {
  const n = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...s(),
    ...o.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(t, { title: "Development Guide/Footer" }),
      `
`,
      e.jsx(n.h1, { id: "footer", children: "Footer" }),
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
              e.jsx(i, {
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
              e.jsx(i, {
                href: "#implementation",
                target: "_self",
                children: "Implementation",
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
              e.jsx(i, {
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
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This ",
          e.jsx(n.code, { children: "Footer" }),
          ` component renders the NYPL-branded footer elements such as
navigational NYPL.org links, social media links, copyright, and NYPL building
facade image. This component is expected to be rendered at the end of a webpage,
before the closing `,
          e.jsx(n.code, { children: "</body>" }),
          " tag. This component lives on the NYPL ",
          e.jsx(n.code, { children: "Header" }),
          " app.",
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://ds-header.nypl.org/footer",
              rel: "nofollow",
              children: "NYPL Footer Preview",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://github.com/NYPL/nypl-header-app",
              rel: "nofollow",
              children: "NYPL Header App Github repo",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "implementation", children: "Implementation" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Footer" }),
          " can be embedded on an NYPL app through the following code snippet:",
        ],
      }),
      `
`,
      e.jsx(l, {
        code: `
<div id="nypl-footer"></div>
<script type="module" src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer" async><\/script>
`,
        language: "html",
      }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Footer" }),
          " component renders as an HTML ",
          e.jsx(n.code, { children: "<footer>" }),
          ` element with a WAI-ARIA role
of `,
          e.jsx(n.code, { children: 'role="contentinfo"' }),
          `. This is the common practice for the footer landmark
region on a page to maximize its accessibility in browsers and assistive
technologies.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Special consideration should be made regarding the placement of the ",
          e.jsx(n.code, { children: "Footer" }),
          `
component in the DOM. Rendering this component, or similar HTML landmark region
components, inside another landmark region causes accessibility issues. For
example, rendering the `,
          e.jsx(n.code, { children: "Footer" }),
          " component inside an ",
          e.jsx(n.code, { children: "aside" }),
          ` HTML element is
an error.`,
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
              href: "https://www.w3.org/WAI/tutorials/page-structure/example/",
              rel: "nofollow",
              children: "W3C WAI Page Structure Code Example",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/WAI/tutorials/page-structure/regions/",
              rel: "nofollow",
              children: "W3C WAI Page Regions",
            }),
          }),
          `
`,
        ],
      }),
    ],
  });
}
function d(o = {}) {
  const { wrapper: n } = { ...s(), ...o.components };
  return n ? e.jsx(n, { ...o, children: e.jsx(r, { ...o }) }) : r(o);
}
export { d as default };
