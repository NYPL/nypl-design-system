import {
  u as d,
  j as e,
  M as c,
  L as t,
  bv as a,
  C as s,
  bw as r,
  S as x,
} from "./iframe-D93LbwGv.js";
import {
  S as i,
  C as l,
  W as j,
  a as g,
  b as m,
  E as u,
  c as p,
  d as f,
} from "./StructuredContent.stories-ClAc5xQW.js";
import { C as T } from "./ComponentChangelogTable-Ck_3mwrR.js";
const C = [
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Accessibility", "Documentation"],
    notes: [
      "Updated the `headingText` and `calloutText` props to allow JSX to render custom heading elements for accessible heading hierarchy.",
    ],
  },
];
function h(o) {
  const n = {
    code: "code",
    em: "em",
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
    ...d(),
    ...o.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { of: i }),
      `
`,
      e.jsx(n.h1, { id: "structuredcontent", children: "StructuredContent" }),
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
                    children: e.jsx(n.code, { children: "0.25.9" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.0.0" }),
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
                href: "#with-html-string-text-content",
                target: "_self",
                children: "With HTML String Text Content",
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
                href: "#with-html-element-text-content",
                target: "_self",
                children: "With HTML Element Text Content",
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
                href: "#with-custom-heading-levels",
                target: "_self",
                children: "With Custom Heading Levels",
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
                href: "#examples",
                target: "_self",
                children: "Examples",
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
      e.jsx(a, { of: i }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(s, { of: l }),
      `
`,
      e.jsx(r, { of: l }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "StructuredContent" }),
          ` component is a structured container around a specific
set of content. While the main image can be controlled through the `,
          e.jsx(n.code, { children: "imageProps" }),
          `
prop, the content will not always be controlled. If the content that is being
passed is coming from a CMS, the content can contain any set of HTML elements that
are `,
          e.jsx(n.em, { children: "not" }),
          ` controlled through Reservoir DS components. While this component
attempts to style the added elements, we cannot guarantee that the content will
be accessible. Please review your content and make sure that:`,
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children:
              "The content's font-size to be scaled to 200% without content overlapping.",
          }),
          `
`,
          e.jsx(n.li, {
            children:
              "Any additional images have descriptive (but not too lengthy) alt text.",
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "Any additional heading levels should not be skipped. Meaning, a ",
              e.jsx(n.code, { children: "<h2>" }),
              ` should
not be followed by a `,
              e.jsx(n.code, { children: "<h4>" }),
              ".",
            ],
          }),
          `
`,
          e.jsx(n.li, {
            children:
              "Any links or text with colors should have a 4.5:1 contrast ratio.",
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "with-html-string-text-content",
        children: "With HTML String Text Content",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The following body content is passed as a string to the ",
          e.jsx(n.code, { children: "bodyContent" }),
          ` prop. It
includes HTML tags in the string.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: j }),
      `
`,
      e.jsx(n.h2, {
        id: "with-html-element-text-content",
        children: "With HTML Element Text Content",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The following content is passed as HTML DOM elements to the ",
          e.jsx(n.code, { children: "bodyContent" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(s, { of: g }),
      `
`,
      e.jsx(n.h2, {
        id: "with-custom-heading-levels",
        children: "With Custom Heading Levels",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "By default, the ",
          e.jsx(n.code, { children: "StructuredContent" }),
          " component will render its ",
          e.jsx(n.code, { children: "headingText" }),
          ` as
an `,
          e.jsx(n.code, { children: "h2" }),
          " and its ",
          e.jsx(n.code, { children: "calloutText" }),
          " as an ",
          e.jsx(n.code, { children: "h3" }),
          `. If this needs to be updated in a
consuming application, it's possible to pass custom `,
          e.jsx(n.code, { children: "Heading" }),
          ` or h* HTML
elements.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the following examples, the ",
          e.jsx(n.code, { children: "headingText" }),
          " is rendered as an ",
          e.jsx(n.code, { children: "h3" }),
          ` and the
`,
          e.jsx(n.code, { children: "calloutText" }),
          " is rendered as an ",
          e.jsx(n.code, { children: "h4" }),
          `. Note that both headings are rendered
sequentially, so the callout heading level MUST be the next heading after the
`,
          e.jsx(n.code, { children: "headingText" }),
          " level.",
        ],
      }),
      `
`,
      e.jsx(x, {
        code: `

const customH3heading = <Heading level="h3">Custom H3 Heading Text</Heading>;
const customH4callout = <Heading level="h4">Custom H4 callout Text</Heading>;

<StructuredContent
headingText={customH3heading}
calloutText={customH4callout}
{...otherProps}
/>
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(s, { of: m }),
      `
`,
      e.jsx(n.h2, { id: "examples", children: "Examples" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The following has two ",
          e.jsx(n.code, { children: "StructuredContent" }),
          ` components. The first one has an image
but no callout content. The second component does not have an image.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: u }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The following has three ",
          e.jsx(n.code, { children: "StructuredContent" }),
          ` components. The first one only has
the callout content. The second has no callout content but an image and text content.
The third one does not contain an image.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: p }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The following has two ",
          e.jsx(n.code, { children: "StructuredContent" }),
          ` components. The first one only displays
text content. The second one has a callout content and image spanning full width.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: f }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(T, { changelogData: C }),
    ],
  });
}
function v(o = {}) {
  const { wrapper: n } = { ...d(), ...o.components };
  return n ? e.jsx(n, { ...o, children: e.jsx(h, { ...o }) }) : h(o);
}
export { v as default };
