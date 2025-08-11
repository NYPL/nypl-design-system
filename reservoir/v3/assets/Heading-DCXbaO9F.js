import {
  u as r,
  j as e,
  M as a,
  L as t,
  bv as c,
  C as s,
  bw as x,
  S as i,
} from "./iframe-D93LbwGv.js";
import { C as p } from "./ComponentChangelogTable-Ck_3mwrR.js";
import {
  H as l,
  W as o,
  D as j,
  a as g,
  S as u,
  b as f,
  O as m,
  c as y,
  d as b,
  B as v,
  L as w,
} from "./Heading.stories-DfULPba-.js";
import "./storybookUtils-BmTl87w5.js";
const z = [
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Increase the font weight for the `size` styles."],
  },
  {
    date: "2025-01-30",
    version: "3.5.3",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds `line-height` styles for mobile."],
  },
  {
    date: "2024-11-07",
    version: "3.4.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Adds the `heading7` and `heading8` options for the `size` prop."],
  },
  {
    date: "2024-06-20",
    version: "3.1.6",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates the styles for links within the heading."],
  },
  {
    date: "2024-05-09",
    version: "3.1.2",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Extends prop type to allow heading HTML attributes."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Chakra 2.8 update.",
      "Updates the component's theme file to use native Chakra responsive styles of the font sizes and removed the conditional logic that handled that previously.",
    ],
  },
  {
    date: "2024-02-22",
    version: "2.1.6",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: ['Fixed the desktop font size for the "heading5" variant.'],
  },
  {
    date: "2024-02-05",
    version: "2.1.5",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updated to use a custom `@media query` method to handle the responsive `font-size` styles.",
    ],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Styles"],
    notes: [
      'Updates the `font-weight` to "regular" for the `subtitle1` and `subtitle2` text styles.',
    ],
  },
  {
    date: "2023-10-26",
    version: "2.1.1",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      'Updated the `aria-roledescription` value to "subtitle" (a more familiar and recognizable term) for the `overline` element.',
    ],
  },
  {
    date: "2023-9-28",
    version: "2.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Applied Typo2023 styles, including font size and font color."],
  },
];
function h(d) {
  const n = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...r(),
    ...d.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(a, { of: l }),
      `
`,
      e.jsx(n.h1, { id: "heading", children: "Heading" }),
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
                    children: e.jsx(n.code, { children: "0.0.4" }),
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
                href: "#updated-typographic-styles",
                target: "_self",
                children: "Updated Typographic Styles",
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
                href: "#native-heading-elements",
                target: "_self",
                children: "Native Heading Elements",
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
                href: "#size-styles",
                target: "_self",
                children: "Size Styles",
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
                href: "#overline-and-subtitle",
                target: "_self",
                children: "Overline and Subtitle Elements",
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
                href: "#heading-with-bold-text",
                target: "_self",
                children: "Heading with Bold Text",
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
                href: "#heading-with-links",
                target: "_self",
                children: "Heading with Links",
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
      e.jsx(c, { of: l }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "A ",
          e.jsx(n.code, { children: "Heading" }),
          " component will render a standard HTML ",
          e.jsx(n.code, { children: "<h>" }),
          ` tag (1-6). The heading's
text can be passed in through a `,
          e.jsx(n.code, { children: "text" }),
          ` prop or as a child. Default styles for
semantic elements can be overwritten using the `,
          e.jsx(n.code, { children: "size" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(s, { of: o }),
      `
`,
      e.jsx(x, { of: o }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `When adding headings to a webpage, it is important to ensure that the heading
hierarchy is consistent. This means they should start with only one `,
          e.jsx(n.code, { children: "h1" }),
          ` for the
page title and then proceed with `,
          e.jsx(n.code, { children: "h2" }),
          "s, ",
          e.jsx(n.code, { children: "h3" }),
          "s, ",
          e.jsx(n.code, { children: "h4" }),
          "s, ",
          e.jsx(n.code, { children: "h5" }),
          "s and ",
          e.jsx(n.code, { children: "h6" }),
          `s in the
proper order and not skipping any. For example, the following is invalid HTML:`,
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<h1>Page Title</h1>
<h2>Subtitle</h2>
<h4>Sub-subtitle</h4>
`,
        language: "html",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `When either the overline or subtitle elements are rendered as part of the
heading, then the whole lockup will be wrapped in an `,
          e.jsx(n.code, { children: "<hgroup>" }),
          ` element with
proper `,
          e.jsx(n.code, { children: "role" }),
          " and ",
          e.jsx(n.code, { children: "aria-roledescription" }),
          ` attributes applied. Please note that
both the overline and subtitle elements use `,
          e.jsx(n.code, { children: '"Subtitle"' }),
          ` - a familiar and
recognizable term - for the `,
          e.jsx(n.code, { children: "aria-roledescription" }),
          " attribute.",
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<hgroup role="group" aria-roledescription="Heading group">
<p aria-roledescription="Subtitle">Overline</p>
<h2>Heading Title</h2>
<p aria-roledescription="Subtitle">Subtitle</p>
</hgroup>
`,
        language: "html",
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
              href: "https://www.w3.org/WAI/tutorials/page-structure/headings/",
              rel: "nofollow",
              children: "W3C WAI Headings",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.a11yproject.com/posts/how-to-accessible-heading-structure/",
              rel: "nofollow",
              children: "A11y Project Accessible heading structure",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://chakra-ui.com/docs/components/typography/heading",
              rel: "nofollow",
              children: "Chakra UI Heading",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "updated-typographic-styles",
        children: "Updated Typographic Styles",
      }),
      `
`,
      e.jsx(n.p, {
        children: `New typographic styles were introduced in June 2023 and the new styles are the
supported options. The old typographic styles are still available, but they have
been deprecated.`,
      }),
      `
`,
      e.jsx(n.h2, {
        id: "native-heading-elements",
        children: "Native Heading Elements",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "level" }),
          " prop can be used to set a native heading element (ex. ",
          e.jsx(n.code, { children: "<h1>" }),
          `,
`,
          e.jsx(n.code, { children: "<h2>" }),
          ", ...).",
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<Heading level="h1" />
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `The default text styles for the native heading element levels correspond
directly with the values of the `,
          e.jsx(n.code, { children: "size" }),
          " prop. For example, the ",
          e.jsx(n.code, { children: "heading1" }),
          ` size is
the default style for the `,
          e.jsx(n.code, { children: "<h1>" }),
          " element. The ",
          e.jsx(n.code, { children: "heading2" }),
          ` size is the default
style for the `,
          e.jsx(n.code, { children: "<h2>" }),
          " element. And so on.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Based on the June 2023 updates, the following values should be used for the
`,
          e.jsx(n.code, { children: "level" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "h1" }),
          ", ",
          e.jsx(n.code, { children: "h2" }),
          ", ",
          e.jsx(n.code, { children: "h3" }),
          ", ",
          e.jsx(n.code, { children: "h4" }),
          ", ",
          e.jsx(n.code, { children: "h5" }),
          ", ",
          e.jsx(n.code, { children: "h6" }),
        ],
      }),
      `
`,
      e.jsx(s, { of: j }),
      `
`,
      e.jsx(n.h3, { id: "deprecated-options", children: "Deprecated Options" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The older ",
          e.jsx(n.code, { children: "level" }),
          ` values and the associated styles are still available, but the
values have been deprecated and they should only used to fulfill older design
requirements.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "For the deprecated options, the ",
          e.jsx(n.code, { children: "primary" }),
          ` size is the default style for the
`,
          e.jsx(n.code, { children: "<h1>" }),
          " element. The ",
          e.jsx(n.code, { children: "secondary" }),
          " size is the default style for the ",
          e.jsx(n.code, { children: "<h2>" }),
          `
element. The `,
          e.jsx(n.code, { children: "tertiary" }),
          " size is the default style for the ",
          e.jsx(n.code, { children: "<h3>" }),
          ` element. And
the `,
          e.jsx(n.code, { children: "callout" }),
          " size is the default style for the ",
          e.jsx(n.code, { children: "<h4>" }),
          " element. ",
          e.jsx(n.code, { children: "<h5>" }),
          ` and
`,
          e.jsx(n.code, { children: "<h6>" }),
          " do not have corresponding ",
          e.jsx(n.code, { children: "size" }),
          " styles.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "one" }),
          ", ",
          e.jsx(n.code, { children: "two" }),
          ", ",
          e.jsx(n.code, { children: "three" }),
          ", ",
          e.jsx(n.code, { children: "four" }),
          ", ",
          e.jsx(n.code, { children: "five" }),
          ", ",
          e.jsx(n.code, { children: "six" }),
        ],
      }),
      `
`,
      e.jsx(s, { of: g }),
      `
`,
      e.jsx(n.h3, {
        id: "migrating-from-old-to-new",
        children: "Migrating from Old to New",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When adopting the new ",
          e.jsx(n.code, { children: "level" }),
          ` values, there is a direct relationship between the
deprecated values and the new values. For example, from a DOM persepctive, `,
          e.jsx(n.code, { children: "two" }),
          `
should be replaced with `,
          e.jsx(n.code, { children: "h2" }),
          ", as they will both render the ",
          e.jsx(n.code, { children: "<h2>" }),
          ` element.
Please note that migrating to the new `,
          e.jsx(n.code, { children: "level" }),
          ` values will change the styles for
the headings. Make sure to use the `,
          e.jsx(n.code, { children: "size" }),
          " prop to make adjustments as needed.",
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "size-styles", children: "Size Styles" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "size" }),
          ` prop can be used to override the default styles of the native heading
elements.`,
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<Heading size="heading1" />
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Based on the June 2023 updates, the following values should be used for the
`,
          e.jsx(n.code, { children: "size" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "display1" }),
          ", ",
          e.jsx(n.code, { children: "heading1" }),
          ", ",
          e.jsx(n.code, { children: "heading2" }),
          ", ",
          e.jsx(n.code, { children: "heading3" }),
          ", ",
          e.jsx(n.code, { children: "heading4" }),
          ", ",
          e.jsx(n.code, { children: "heading5" }),
          `,
`,
          e.jsx(n.code, { children: "heading6" }),
          ", ",
          e.jsx(n.code, { children: "heading7" }),
          ", ",
          e.jsx(n.code, { children: "heading8" }),
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "For usage recommendations of each of the ",
          e.jsx(n.code, { children: "size" }),
          ` options, please refer to the
`,
          e.jsx(n.a, {
            href: "../?path=/docs/style-guide-typography--docs#size-options",
            children: `Typography Style
Guide`,
          }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "Note:" }),
          " In the examples below, the ",
          e.jsx(n.code, { children: "level" }),
          " prop is set to ",
          e.jsx(n.code, { children: 'level="h1"' }),
          ` for
each `,
          e.jsx(n.code, { children: "Heading" }),
          " component and the ",
          e.jsx(n.code, { children: "size" }),
          " prop is used to adjust the text size.",
        ],
      }),
      `
`,
      e.jsx(s, { of: u }),
      `
`,
      e.jsx(n.h3, {
        id: "deprecated-options-1",
        children: "Deprecated Options",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The older ",
          e.jsx(n.code, { children: "size" }),
          ` values and the associated styles are still available, but the
values have been deprecated and they should only used to fulfill older design
requirements.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "primary" }),
          ", ",
          e.jsx(n.code, { children: "secondary" }),
          ", ",
          e.jsx(n.code, { children: "tertiary" }),
          ", ",
          e.jsx(n.code, { children: "callout" }),
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "Note:" }),
          " In the examples below, the ",
          e.jsx(n.code, { children: "level" }),
          " prop is set to ",
          e.jsx(n.code, { children: 'level="one"' }),
          ` for
each `,
          e.jsx(n.code, { children: "Heading" }),
          " component and the ",
          e.jsx(n.code, { children: "size" }),
          " prop is used to adjust the text size.",
        ],
      }),
      `
`,
      e.jsx(s, { of: f }),
      `
`,
      e.jsx(n.h2, {
        id: "overline-and-subtitle",
        children: "Overline and Subtitle",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Heading" }),
          ` component offers two additional text elements as part of the full
heading lockup: overline and subtitle. When the `,
          e.jsx(n.code, { children: "overline" }),
          " or ",
          e.jsx(n.code, { children: "subtitle" }),
          ` props
are passed, the `,
          e.jsx(n.code, { children: "Heading" }),
          ` component will handle the DOM structure and styling
for the corresponding text elements.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `The styling of the overline and subtitle elements include differentiating the
font size for both elements based on the `,
          e.jsx(n.code, { children: "size" }),
          " prop. For ",
          e.jsx(n.code, { children: "display1" }),
          `,
`,
          e.jsx(n.code, { children: "heading1" }),
          ", and ",
          e.jsx(n.code, { children: "heading2" }),
          `, the text for these elements will be one size. And
for `,
          e.jsx(n.code, { children: "heading3" }),
          ", ",
          e.jsx(n.code, { children: "heading4" }),
          ", ",
          e.jsx(n.code, { children: "heading5" }),
          ", ",
          e.jsx(n.code, { children: "heading6" }),
          ", ",
          e.jsx(n.code, { children: "heading7" }),
          ", and ",
          e.jsx(n.code, { children: "heading8" }),
          `,
the text for these elements will be another (smaller) size.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "Note:" }),
          " In the examples below, the ",
          e.jsx(n.code, { children: "level" }),
          " prop is set to ",
          e.jsx(n.code, { children: 'level="h1"' }),
          ` for
each `,
          e.jsx(n.code, { children: "Heading" }),
          " component and the ",
          e.jsx(n.code, { children: "size" }),
          " prop is used to adjust the text size.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "overline", children: "Overline" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Use the ",
          e.jsx(n.code, { children: "overline" }),
          ` prop to set the text for an eyebrow text element that sits
above the heading text. The overline text is styled to be all uppercase.`,
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<Heading
overline="Overline"
text="Lorem ipsum dolor"
/>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: m }),
      `
`,
      e.jsx(n.h3, { id: "subtitle", children: "Subtitle" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Use the ",
          e.jsx(n.code, { children: "subtitle" }),
          ` prop to set the text for a text element that sits below the
heading text.`,
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<Heading
subtitle="The subtitle text sits below the main heading text."
text="Lorem ipsum dolor"
/>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: y }),
      `
`,
      e.jsx(n.h3, {
        id: "full-heading-lockup",
        children: "Full Heading Lockup",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Or use both the ",
          e.jsx(n.code, { children: "overline" }),
          " and ",
          e.jsx(n.code, { children: "subtitle" }),
          ` props in combination to render a fully
composed heading lockup.`,
        ],
      }),
      `
`,
      e.jsx(i, {
        code: `
<Heading
overline="Overline"
subtitle="The subtitle text sits below the main heading text."
text="Lorem ipsum dolor"
/>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: b }),
      `
`,
      e.jsx(n.h2, {
        id: "heading-with-bold-text",
        children: "Heading with Bold Text",
      }),
      `
`,
      e.jsx(s, { of: v }),
      `
`,
      e.jsx(n.h2, { id: "heading-with-links", children: "Heading with Links" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The recommended pattern to make headings linkable is to use the ",
          e.jsx(n.code, { children: "url" }),
          ` prop. This
will create a child `,
          e.jsx(n.code, { children: "<a>" }),
          ` element within the heading element. Alternatively, you
can pass a DS `,
          e.jsx(n.code, { children: "Link" }),
          " component, a custom ",
          e.jsx(n.code, { children: "Link" }),
          " component, or an HTML ",
          e.jsx(n.code, { children: "anchor" }),
          `
element as the `,
          e.jsx(n.strong, { children: "only child" }),
          " of the ",
          e.jsx(n.code, { children: "Heading" }),
          " component.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "Important" }),
          ": Linked headings should have the link color but not be underlined.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If only a specific portion of the heading should be linked, then the ",
          e.jsx(n.code, { children: "url" }),
          ` prop
cannot be used. Instead, use a `,
          e.jsx(n.code, { children: "Link" }),
          " or HTML ",
          e.jsx(n.code, { children: "anchor" }),
          ` element to wrap the text
that should be linked. Note that the non-linked text should be passed as a text
node and not wrapped in span or other elements.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `This treatment allows for individual words within the full heading text to be
set as a link, however, this is not a recommended pattern. While this treatment
is possible with the `,
          e.jsx(n.code, { children: "Heading" }),
          " component, this pattern SHOULD NOT be used.",
        ],
      }),
      `
`,
      e.jsx(s, { of: w }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(p, { changelogData: z }),
    ],
  });
}
function L(d = {}) {
  const { wrapper: n } = { ...r(), ...d.components };
  return n ? e.jsx(n, { ...d, children: e.jsx(h, { ...d }) }) : h(d);
}
export { L as default };
