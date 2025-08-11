import {
  u as m,
  j as e,
  M as j,
  L as r,
  S as l,
  a as i,
  V as s,
  H as a,
  F as c,
  y as h,
  m as d,
  o as p,
  a_ as o,
} from "./iframe-D93LbwGv.js";
function x(t) {
  const n = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...m(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(j, { title: "Style Guide/Bidirectionality" }),
      `
`,
      e.jsx(n.h1, { id: "bidirectionality", children: "Bidirectionality" }),
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
              e.jsx(r, { href: "#terms", target: "_self", children: "Terms" }),
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
              e.jsx(r, {
                href: "#general-information",
                target: "_self",
                children: "General Information",
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
              e.jsx(r, {
                href: "#reservoir-bidirectionality-goal",
                target: "_self",
                children: "Reservoir Bidirectionality Goal",
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
              e.jsx(r, {
                href: "#reservoir-component-implementation",
                target: "_self",
                children: "Reservoir Component Implementation",
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
              e.jsx(r, {
                href: "#application-implementation",
                target: "_self",
                children: "Application Implementation",
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
      e.jsx(n.h2, { id: "terms", children: "Terms" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, { children: "LTR = left-to-right" }),
          `
`,
          e.jsx(n.li, { children: "RTL = right-to-left" }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "general-information",
        children: "General Information",
      }),
      `
`,
      e.jsx(n.p, {
        children: `When building user interfaces (UIs) and page layouts, we tend to think in terms
of left-to-right for layout direction. This is because the default language we
build UIs for is English. At NYPL, we serve patrons who speak a variety of
languages including languages such as Arabic or Hebrew which are right-to-left
languages. To correctly render any language, UIs should be mirrored to accomodate
navigation and the passage of time, for example.`,
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
              href: "https://material.io/design/usability/bidirectionality.html",
              rel: "nofollow",
              children: "Material Design's Bidirectionality documentation",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "reservoir-bidirectionality-goal",
        children: "Reservoir Bidirectionality Goal",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `While the majority of applications at NYPL will have a LTR direction,
applications will introduce internationalization through different means. While
the Reservoir Design System (DS) has `,
          e.jsx(n.em, { children: "no preference" }),
          ` in how an application is
internationalized, DS components should work appropriately in RTL configurations
in any browser.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "reservoir-component-implementation",
        children: "Reservoir Component Implementation",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `In order to accomplish the goal described above, the DS implementation for RTL
support includes using the CSS properties `,
          e.jsx(n.code, { children: "margin-inline-start" }),
          `,
`,
          e.jsx(n.code, { children: "margin-inline-end" }),
          ", ",
          e.jsx(n.code, { children: "padding-inline-start" }),
          ", and ",
          e.jsx(n.code, { children: "padding-inline-end" }),
          ` instead of
`,
          e.jsx(n.code, { children: "margin-left" }),
          ", ",
          e.jsx(n.code, { children: "margin-right" }),
          ", ",
          e.jsx(n.code, { children: "padding-left" }),
          ", and ",
          e.jsx(n.code, { children: "padding-right" }),
          `. These updated
properties are used to apply the correct direction to the HTML element it targets.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `In the DS, the components that use these properties use the Chakra shorthands
`,
          e.jsx(n.code, { children: "marginStart" }),
          ", ",
          e.jsx(n.code, { children: "marginEnd" }),
          ", ",
          e.jsx(n.code, { children: "paddingStart" }),
          ", and ",
          e.jsx(n.code, { children: "paddingEnd" }),
          `. Internally, Chakra
converts these shorthands to the corresponding CSS properties. The DS components
should also use the `,
          e.jsx(n.code, { children: "inline" }),
          " modifier instead of the ",
          e.jsx(n.code, { children: "block" }),
          ` modifier because the
`,
          e.jsx(n.code, { children: "block" }),
          " modifier renders elements unexpectedly in RTL configurations.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In LTR configurations, the ",
          e.jsx(n.code, { children: "marginStart" }),
          " and ",
          e.jsx(n.code, { children: "paddingStart" }),
          ` properties match
with the `,
          e.jsx(n.code, { children: "marginLeft" }),
          " and ",
          e.jsx(n.code, { children: "paddingLeft" }),
          " properties, and the ",
          e.jsx(n.code, { children: "marginEnd" }),
          ` and
`,
          e.jsx(n.code, { children: "paddingEnd" }),
          " properties match with the ",
          e.jsx(n.code, { children: "marginRight" }),
          " and ",
          e.jsx(n.code, { children: "paddingRight" }),
          `. In the
RTL configurations, the `,
          e.jsx(n.code, { children: "marginStart" }),
          " and ",
          e.jsx(n.code, { children: "paddingStart" }),
          ` properties now match
with the `,
          e.jsx(n.code, { children: "marginRight" }),
          " and ",
          e.jsx(n.code, { children: "paddingRight" }),
          " properties, and the ",
          e.jsx(n.code, { children: "marginEnd" }),
          ` and
`,
          e.jsx(n.code, { children: "paddingEnd" }),
          " properties now match with the ",
          e.jsx(n.code, { children: "marginLeft" }),
          " and ",
          e.jsx(n.code, { children: "paddingLeft" }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: "CSS Property" }),
                e.jsx(n.th, { children: "RTL Support Property" }),
                e.jsx(n.th, { children: "Equivalent Chakra Shorthand" }),
              ],
            }),
          }),
          e.jsxs(n.tbody, {
            children: [
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "margin-left" }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, {
                      children: "margin-inline-start",
                    }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "marginStart" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "margin-right" }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "margin-inline-end" }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "marginEnd" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "padding-left" }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, {
                      children: "padding-inline-start",
                    }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "paddingStart" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "padding-right" }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "padding-inline-end" }),
                  }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "paddingEnd" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "layout-example", children: "Layout Example" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the following example, the ",
          e.jsx(n.code, { children: "marginStart" }),
          " and ",
          e.jsx(n.code, { children: "marginEnd" }),
          ` properties are used
to give space between the image, the text area, and the button. In the RTL
configuration, these same properties are applied appropriately and mirroring
the original and intentional design layout is achieved in the RTL direction.`,
        ],
      }),
      `
`,
      e.jsx(l, {
        code: `
<Flex alignItems="center">
<Box marginEnd="30px">
  <Image
    alt="Alt text"
    imageType="circle"
    marginEnd="30px"
    size="xsmall"
    src="https://loremflickr.com/400/400/new+york+public+library"
  />
</Box>
<VStack align="stretch">
  <Text>Bark Twain</Text>
  <Text size="caption">This is my profile</Text>
</VStack>
<Button marginStart="50px">Follow me</Button>
</Flex>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(i, {
        border: "1px",
        borderColor: "ui.border.default",
        borderRadius: "5px",
        mb: "m",
        p: "s",
        children: e.jsxs(s, {
          align: "stretch",
          gap: "30px",
          children: [
            e.jsxs(i, {
              children: [
                e.jsx(a, {
                  level: "h3",
                  size: "heading6",
                  children: e.jsx(n.p, { children: "LTR" }),
                }),
                e.jsxs(c, {
                  alignItems: "center",
                  children: [
                    e.jsx(i, {
                      marginEnd: "30px",
                      children: e.jsx(h, {
                        alt: "Alt text",
                        imageType: "circle",
                        marginEnd: "30px",
                        size: "xsmall",
                        src: "https://loremflickr.com/400/400/new+york+public+library",
                      }),
                    }),
                    e.jsxs(s, {
                      align: "stretch",
                      children: [
                        e.jsx(d, { children: "Bark Twain" }),
                        e.jsx(d, {
                          size: "caption",
                          children: "This is my profile",
                        }),
                      ],
                    }),
                    e.jsx(p, { marginStart: "50px", children: "Follow me" }),
                  ],
                }),
              ],
            }),
            e.jsxs(i, {
              dir: "rtl",
              children: [
                e.jsx(a, {
                  level: "h3",
                  size: "heading6",
                  children: e.jsx(n.p, { children: "RTL" }),
                }),
                e.jsxs(c, {
                  alignItems: "center",
                  children: [
                    e.jsx(i, {
                      marginEnd: "30px",
                      children: e.jsx(h, {
                        alt: "Alt text",
                        imageType: "circle",
                        marginEnd: "30px",
                        size: "xsmall",
                        src: "https://loremflickr.com/400/400/new+york+public+library",
                      }),
                    }),
                    e.jsxs(s, {
                      align: "stretch",
                      children: [
                        e.jsx(d, { children: "Bark Twain" }),
                        e.jsx(d, {
                          size: "caption",
                          children: "This is my profile",
                        }),
                      ],
                    }),
                    e.jsx(p, { marginStart: "50px", children: "Follow me" }),
                  ],
                }),
              ],
            }),
          ],
        }),
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
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start",
              rel: "nofollow",
              children: "MDN padding-inline-start",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end",
              rel: "nofollow",
              children: "MDN padding-inline-end",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start",
              rel: "nofollow",
              children: "MDN margin-inline-start",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end",
              rel: "nofollow",
              children: "MDN margin-inline-end",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "application-implementation",
        children: "Application Implementation",
      }),
      `
`,
      e.jsx(n.p, {
        children: `Components in the DS will support layout and component mirroring, but application
directionality should be implemented at the application level. The following are
general guidelines on how to set up directionality but implementation will be up
to the application and its architecture.`,
      }),
      `
`,
      e.jsx(n.h3, { id: "dir-html-attribute", children: "dir HTML attribute" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "dir" }),
          ` HTML attribute can be added to elements to indicate its directionality.
The default direction is `,
          e.jsx(n.code, { children: '"ltr"' }),
          ` or left to right. For languages, such as Arabic
or Hebrew, the correct direction is right to left and the proper attribute
implementation is `,
          e.jsx(n.code, { children: 'dir="rtl"' }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The placement of this attribute can be added at the root ",
          e.jsx(n.code, { children: "<html>" }),
          ` element but can
also be placed in specific DOM elements within a page to target specific page
sections. For example, if you only want to target NYPL DS components within your
top-level `,
          e.jsx(n.code, { children: "app" }),
          " class, the ",
          e.jsx(n.code, { children: "dir" }),
          " attribute can be added to that element:",
        ],
      }),
      `
`,
      e.jsx(l, {
        code: `
// Do this
<div className="app" dir="rtl">
...
</div>
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "An anti-pattern is to add ",
          e.jsx(n.code, { children: "dir" }),
          ` to all the elements you want to change
directionality in. This HTML rule cascades down to its children elements so
there is no need to do the following:`,
        ],
      }),
      `
`,
      e.jsx(l, {
        code: `
// Don't do this
<div className="app" dir="rtl">
<div dir="rtl">
  <p dir="rtl">
    Some text <button dir="rtl">Button</button>
  </p>
</div>
</div>
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "dir" }),
          ` HTML attribute is the recommended way to change directionality, but
note that this attribute is not supported in Internet Explorer.`,
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
              href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir",
              rel: "nofollow",
              children: "MDN dir Documentation",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/International/questions/qa-html-dir",
              rel: "nofollow",
              children: "W3C internationalization dir QA",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h3, {
        id: "direction-css-rule",
        children: "`direction` CSS rule",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Another option to change text and UI directionality is through the CSS ",
          e.jsx(n.code, { children: "direction" }),
          `
rule. The default value for all elements is `,
          e.jsx(n.code, { children: "direction: ltr;" }),
          `. This rule is
supported by all major browsers and can target specific elements through CSS rules:`,
        ],
      }),
      `
`,
      e.jsx(l, {
        code: `
.rightToLeft {
direction: rtl;
}
.leftToRight {
direction: ltr;
}
`,
        language: "css",
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/CSS/direction",
              rel: "nofollow",
              children: "MDN direction Documentation",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://css-tricks.com/almanac/properties/d/direction/",
              rel: "nofollow",
              children: "CSS Tricks direction",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h3, {
        id: "examples-using-dir-and-direction",
        children: "Examples using `dir` and `direction`",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `For the following examples, the main element we are targeting is a div wrapper
that sets a 400px width container for a `,
          e.jsx(n.code, { children: "SearchBar" }),
          ` component. Notice that in both
RTL examples (#2 and #3), it's not just the text that aligns right but the element
itself that aligns right. This is why using the CSS rule `,
          e.jsx(n.code, { children: "text-align: right;" }),
          ` is
not the proper way to handle RTL languages since the UI needs to be mirrored (see above).`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: `In both RTL (#2 and #3) examples, the directionality changes for the div wrapper
and there is no significant difference, but implementing both in a real application
won't hurt.`,
      }),
      `
`,
      e.jsx(n.p, { children: "#1 - Left to right default" }),
      `
`,
      e.jsx(i, {
        border: "1px",
        borderColor: "ui.border.default",
        borderRadius: "5px",
        mb: "m",
        p: "s",
        children: e.jsx("div", {
          style: { width: "400px" },
          children: e.jsx(o, {
            helperText: "Use a keyword or phrase to search!",
            id: "example1",
            isRequired: !0,
            textInputProps: {
              labelText: "Item Search",
              name: "textInputName",
              placeholder: "Item Search",
            },
          }),
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "#2 - Right to left using ",
          e.jsx(n.code, { children: 'dir="rtl"' }),
          `. Click on "Show code" in the following
block to see its code implementation.`,
        ],
      }),
      `
`,
      e.jsx(i, {
        border: "1px",
        borderColor: "ui.border.default",
        borderRadius: "5px",
        mb: "m",
        p: "s",
        children: e.jsx("div", {
          dir: "rtl",
          children: e.jsx("div", {
            style: { width: "400px" },
            children: e.jsx(o, {
              helperText: "استخدم كلمة رئيسية أو عبارة للبحث!",
              id: "example2",
              isRequired: !0,
              textInputProps: {
                labelText: "Item Search",
                name: "textInputName",
                placeholder: "Item Search",
              },
            }),
          }),
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "#3 - Right to left using ",
          e.jsx(n.code, { children: "direction: rtl;" }),
          `. Click on "Show code" in the following
block to see its code implementation.`,
        ],
      }),
      `
`,
      e.jsx(i, {
        border: "1px",
        borderColor: "ui.border.default",
        borderRadius: "5px",
        mb: "m",
        p: "s",
        children: e.jsx("div", {
          style: { direction: "rtl" },
          children: e.jsx("div", {
            style: { width: "400px" },
            children: e.jsx(o, {
              helperText: "استخدم كلمة رئيسية أو عبارة للبحث!",
              id: "example3",
              isRequired: !0,
              textInputProps: {
                labelText: "Item Search",
                name: "textInputName",
                placeholder: "Item Search",
              },
            }),
          }),
        }),
      }),
    ],
  });
}
function u(t = {}) {
  const { wrapper: n } = { ...m(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(x, { ...t }) }) : x(t);
}
export { u as default };
