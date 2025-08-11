import {
  u as c,
  j as e,
  M as l,
  L as i,
  bv as h,
  S as o,
  C as t,
  bw as p,
} from "./iframe-D93LbwGv.js";
import {
  C as a,
  W as d,
  I as x,
  a as m,
  b as g,
  c as j,
  d as f,
  F as u,
  H as C,
  e as y,
  f as w,
  g as b,
  h as k,
  G as v,
  S as T,
  i as I,
} from "./Card.stories-BioAIfDy.js";
import { C as H } from "./ComponentChangelogTable-Ck_3mwrR.js";
const A = [
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates styles with container queries to be more responsive."],
  },
  {
    date: "2024-09-19",
    version: "3.3.2",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Adds `fallbackSrc` and `onError` to the `imageProps` prop."],
  },
  {
    date: "2024-05-09",
    version: "3.1.2",
    type: "Update",
    affects: ["Functionality", "Accessibility"],
    notes: ["Adds `id` to the `imageProps` prop."],
  },
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
    affects: ["Functionality", "Documentation"],
    notes: [
      "Propagates the `imageProps.isLazy` property down to the `Card`'s internal `Image` component implementation.",
    ],
  },
];
function r(s) {
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
    ...c(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(l, { of: a }),
      `
`,
      e.jsx(n.h1, { id: "card", children: "Card" }),
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
                    children: e.jsx(n.code, { children: "0.24.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.3.5" }),
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
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(i, {
                href: "#image-position",
                target: "_self",
                children: "Image Position",
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
                href: "#image-size",
                target: "_self",
                children: "Image Size",
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
                href: "#custom-image-component",
                target: "_self",
                children: "Custom Image Component",
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
                href: "#fallback-image",
                target: "_self",
                children: "Fallback Image",
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
                href: "#card-with-link-heading",
                target: "_self",
                children: "Card With Link Heading",
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
                href: "#card-with-full-click-functionality",
                target: "_self",
                children: "Card With Full-Click Functionality",
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
                href: "#card-with-full-click-functionality-and-tooltip",
                target: "_self",
                children: "Card With Full-Click Functionality and Tooltip",
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
                href: "#card-with-right-side-cardactions",
                target: "_self",
                children: "Card with Right Side CardActions",
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
                href: "#cards-in-a-grid",
                target: "_self",
                children: "Cards in a Grid",
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
                href: "#cards-in-a-stack",
                target: "_self",
                children: "Cards in a Stack",
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
                href: "#cards-without-images",
                target: "_self",
                children: "Cards Without Images",
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
      e.jsx(h, { of: a }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Card" }),
          ` component is viewed as a contained, stand-alone element. It is highly
configurable and composable. It can be shown with or without an image and the
content area is composed using Card-specific child components: `,
          e.jsx(n.code, { children: "CardHeading" }),
          `,
`,
          e.jsx(n.code, { children: "CardActions" }),
          " and ",
          e.jsx(n.code, { children: "CardContent" }),
          `. These child components can be arranged in any
order and each child component may be used multiple times within the content
area. Although a `,
          e.jsx(n.code, { children: "Card" }),
          " is a self-contained unit, ",
          e.jsx(n.code, { children: "Card" }),
          ` components are often
grouped together and displayed in some type of grid layout.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Note: all of the examples have images with the ",
          e.jsx(n.code, { children: "isLazy" }),
          " set to true.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "cardheading", children: "CardHeading" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "CardHeading" }),
          ` component mirrors the standard Reservoir Design System (DS)
`,
          e.jsx(n.code, { children: "Heading" }),
          " component and accepts the ",
          e.jsx(n.a, {
            href: "../?path=/story/components-typography-styles-heading--with-controls",
            children: "same props",
          }),
          ".",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "cardactions", children: "CardActions" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "CardActions" }),
          ` component is used to display "call to action" (CTA) buttons
and links for the card. The DS `,
          e.jsx(n.code, { children: "Button" }),
          " and ",
          e.jsx(n.code, { children: "Link" }),
          ` components should be passed
as children into the `,
          e.jsx(n.code, { children: "CardActions" }),
          " component.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Set the ",
          e.jsx(n.code, { children: "isAlignedRightActions" }),
          " prop to true in the ",
          e.jsx(n.code, { children: "Card" }),
          ` component to align the
`,
          e.jsx(n.code, { children: "CardActions" }),
          ` to the right of the the main content area. This is only applicable
in the row layout of the `,
          e.jsx(n.code, { children: "Card" }),
          " component.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "cardcontent", children: "CardContent" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "CardContent" }),
          ` component should be used to display all content other than
headings and CTAs.`,
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "cardimage", children: "CardImage" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "CardImage" }),
          " component is ",
          e.jsx(n.em, { children: "not" }),
          ` exported and is used internally only in the
`,
          e.jsx(n.code, { children: "Card" }),
          ` component. It is a convenience component that mirrors the standard DS
`,
          e.jsx(n.code, { children: "Image" }),
          " component. This means that the ",
          e.jsx(n.code, { children: "CardImage" }),
          ` component accepts the same
props as the `,
          e.jsx(n.code, { children: "Image" }),
          " component, in addition to the ",
          e.jsx(n.code, { children: "isAtEnd" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Developers do ",
          e.jsx(n.em, { children: "not" }),
          ` need to implement this component. Instead, it will be
rendered in the `,
          e.jsx(n.code, { children: "Card" }),
          " component through its ",
          e.jsx(n.code, { children: "imageProps" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
<Card
imageProps={{
  alt: "Alt text",
  aspectRatio: "twoByOne",
  caption: "caption text",
  credit: "credit text",
  isAtEnd: true,
  isLazy: true,
  size: "medium",
  src: "//loremflickr.com/400/200/new+york+public+library",
}}
{...otherCardProps}
>
<CardHeading level="h3" id="heading-id">
  Heading Text
</CardHeading>
<CardContent>
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
  Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
  facilisis in, egestas eget quam.
</CardContent>
</Card>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(t, { of: d }),
      `
`,
      e.jsx(p, { of: d }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsx(n.h3, { id: "headings", children: "Headings" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In general, headings from ",
          e.jsx(n.code, { children: "h1" }),
          " through ",
          e.jsx(n.code, { children: "h6" }),
          ` must be in sequential order in the
DOM tree. Rendering an `,
          e.jsx(n.code, { children: "h4" }),
          " following an ",
          e.jsx(n.code, { children: "h2" }),
          ` will throw an accessibility error.
Therefore, when adding `,
          e.jsx(n.code, { children: "CardHeading" }),
          ` components, make sure to add them in
sequential order with the proper `,
          e.jsx(n.code, { children: "level" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
// Correct

<CardHeading level="h3" id="headingthree">
Heading level three
</CardHeading>
<CardHeading level="h4" id="headingfour">
Heading level four
</CardHeading>

// Incorrect

<CardHeading level="h2" id="headingtwo">
Heading level Two
</CardHeading>
<CardHeading level="h4" id="headingfour">
Heading level four
</CardHeading>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h3, {
        id: "full-click-functionality",
        children: "Full-Click Functionality",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Passing in a URL in the ",
          e.jsx(n.code, { children: "mainActionLink" }),
          " prop will make the entire ",
          e.jsx(n.code, { children: "Card" }),
          `
clickable. Other links in the `,
          e.jsx(n.code, { children: "CardActions" }),
          ` component can still be accessed by
tabbing through and pressing "enter" or by clicking as you normally would on a
link.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "image-position", children: "Image Position" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "By default, the image is always the first element within a ",
          e.jsx(n.code, { children: "Card" }),
          `. This means
the image is at the top of a `,
          e.jsx(n.code, { children: "Card" }),
          ` with a column layout and on the left side of
a `,
          e.jsx(n.code, { children: "Card" }),
          " with a row layout. However, you can use the ",
          e.jsx(n.code, { children: "imageProps.isAtEnd" }),
          ` boolean
prop to override the default placement and move the image to the last element
within a `,
          e.jsx(n.code, { children: "Card" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "column-cards", children: "Column Cards" }),
      `
`,
      e.jsx(t, { of: x }),
      `
`,
      e.jsx(n.h3, { id: "row-cards", children: "Row Cards" }),
      `
`,
      e.jsx(t, { of: m }),
      `
`,
      e.jsx(n.h2, { id: "image-size", children: "Image Size" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "By default, the image width is ",
          e.jsx(n.code, { children: "100%" }),
          " for a ",
          e.jsx(n.code, { children: "Card" }),
          ` with a column layout and
`,
          e.jsx(n.code, { children: "225px" }),
          " for a ",
          e.jsx(n.code, { children: "Card" }),
          " with a row layout. However, you can use the ",
          e.jsx(n.code, { children: "imageProps.size" }),
          `
prop to override the default width.`,
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "column-cards-1", children: "Column Cards" }),
      `
`,
      e.jsx(t, { of: g }),
      `
`,
      e.jsx(n.h3, { id: "row-cards-1", children: "Row Cards" }),
      `
`,
      e.jsx(t, { of: j }),
      `
`,
      e.jsx(n.h2, {
        id: "custom-image-component",
        children: "Custom Image Component",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Instead of passing a path for the ",
          e.jsx(n.code, { children: "imageProps.src" }),
          ` prop, you can pass a custom
image component in using the `,
          e.jsx(n.code, { children: "imageProps.component" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(t, { of: f }),
      `
`,
      e.jsx(n.h2, { id: "fallback-image", children: "Fallback Image" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Following the same pattern as the ",
          e.jsx(n.code, { children: "Image" }),
          " component, the ",
          e.jsx(n.code, { children: "Card" }),
          ` component can
also render a fallback image when the main image fails to load. Set a fallback
image source through the `,
          e.jsx(n.code, { children: "fallbackSrc" }),
          " property in the ",
          e.jsx(n.code, { children: "imageProps" }),
          ` prop. If an
`,
          e.jsx(n.em, { children: "additional" }),
          ` action needs to be performed when the fallback image is
loaded, pass a callback function to the `,
          e.jsx(n.code, { children: "onError" }),
          " property.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "For more details, see the ",
          e.jsx(n.a, {
            href: "./?path=/docs/components-media-icons-image--docs#fallback-image",
            children: "Image component documentation",
          }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Note that the following example renders a fallback image used in
Digital Collections and is not from `,
          e.jsx(n.code, { children: "loremflickr" }),
          `. The code snippet below is
a general example.`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
<Card
imageProps={{
  alt: "Alt text",
  fallbackSrc="https://loremflickr.com/540/420/cat"
  onError: (_event) => console.log("Card fallback image loaded"),
  src: "some-broken-image-url",
}}
>
// ...
</Card>
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(t, { of: u }),
      `
`,
      e.jsx(n.h2, {
        id: "card-with-link-heading",
        children: "Card with Link Heading",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "CardHeading" }),
          " component works just like the DS ",
          e.jsx(n.code, { children: "Heading" }),
          ` component. This
means that a URL can be passed in the `,
          e.jsx(n.code, { children: "url" }),
          " prop for ",
          e.jsx(n.code, { children: "CardHeading" }),
          " or a ",
          e.jsx(n.code, { children: "Link" }),
          `
component can be used as a child. Click on "Show code" in the example below to
see both patterns.`,
        ],
      }),
      `
`,
      e.jsx(t, { of: C }),
      `
`,
      e.jsx(n.h2, {
        id: "card-with-full-click-functionality",
        children: "Card With Full-Click Functionality",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "To enable the full-click functionality in the ",
          e.jsx(n.code, { children: "Card" }),
          ` component, pass a URL in
the `,
          e.jsx(n.code, { children: "mainActionLink" }),
          " prop. This will make the entire ",
          e.jsx(n.code, { children: "Card" }),
          ` component clickable.
If the `,
          e.jsx(n.code, { children: "Card" }),
          ` has action links or buttons, they can still be accessed by tabbing
through the `,
          e.jsx(n.code, { children: "Card" }),
          " and pressing ",
          e.jsx(n.code, { children: "enter" }),
          " or clicking like a regular link.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Internally, if multiple ",
          e.jsx(n.code, { children: "CardHeading" }),
          ` components are passed, only the first one
will have the full-click link. This, however, does not affect the `,
          e.jsx(n.code, { children: "Card" }),
          ` itself
from being having the full-click functionality.`,
        ],
      }),
      `
`,
      e.jsx(t, { of: y }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This example can be found in the ",
          e.jsx(n.a, {
            href: "https://nypl-ds-test-app.vercel.app/",
            rel: "nofollow",
            children: "Turbine homepage",
          }),
          ".",
        ],
      }),
      `
`,
      e.jsx(t, { of: w }),
      `
`,
      e.jsx(n.h2, {
        id: "card-with-full-click-functionality-and-tooltip",
        children: "Card With Full-Click Functionality and Tooltip",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When the ",
          e.jsx(n.code, { children: "Card" }),
          " is fully clickable, an internal component wraps everything in a link, which in turn overrides the pointer events that trigger a ",
          e.jsx(n.code, { children: "Tooltip" }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If you need a tooltip within a clickable ",
          e.jsx(n.code, { children: "Card" }),
          ", wrap the entire ",
          e.jsx(n.code, { children: "Card" }),
          " component inside the ",
          e.jsx(n.code, { children: "Tooltip" }),
          " and use the ",
          e.jsx(n.code, { children: "Tooltip" }),
          "'s ",
          e.jsx(n.code, { children: "placement" }),
          " and ",
          e.jsx(n.code, { children: "offset" }),
          " props to move the ",
          e.jsx(n.code, { children: "Tooltip" }),
          ` to display next to the intended reference.
Keep in mind that `,
          e.jsx(n.code, { children: "offset" }),
          " is static pixel values, so check where the ",
          e.jsx(n.code, { children: "Tooltip" }),
          " displays on all breakpoints.",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "You may need to keep track of the offset values through state, and update accordingly– see below example.",
      }),
      `
`,
      e.jsx(o, {
        code: `
const [offset, setOffset] = useState<[number, number]>([0, 0]);
const cardRef = useRef<HTMLDivElement>(null);
const getOffset = () => {
  if (cardRef.current) {
    const image = cardRef.current.children[0] as HTMLElement;
    const percentageHeightOffset = image.offsetHeight * 1.01;
    const percentageWidthOffset = image.offsetWidth * 0.4;
    setOffset([-percentageWidthOffset, -percentageHeightOffset]);
  }
};
useEffect(() => {
setTimeout(getOffset, 0);
window.addEventListener("resize", getOffset);
return () => {
    window.removeEventListener("resize", getOffset);
}}
[]);

return (

<Tooltip offset={offset} content={"Tooltip text"}>
<Card
  ref={cardRef}
  // ..
/>
</Tooltip>
)

`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t, { of: b }),
      `
`,
      e.jsx(n.h2, {
        id: "card-with-right-side-cardactions",
        children: "Card with Right Side CardActions",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "It's possible to set only the ",
          e.jsx(n.code, { children: "CardActions" }),
          ` component on the right side of the
main content area of the `,
          e.jsx(n.code, { children: "Card" }),
          ". This is possible only in the ",
          e.jsx(n.code, { children: 'layout="row"' }),
          `
layout and through the `,
          e.jsx(n.code, { children: "Card" }),
          " component's ",
          e.jsx(n.code, { children: "isAlignedRightActions" }),
          ` prop which
must be set to `,
          e.jsx(n.code, { children: "true" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(t, { of: k }),
      `
`,
      e.jsx(n.h2, { id: "cards-in-a-grid", children: "Cards in a Grid" }),
      `
`,
      e.jsx(t, { of: v }),
      `
`,
      e.jsx(n.h2, { id: "cards-in-a-stack", children: "Cards in a Stack" }),
      `
`,
      e.jsx(t, { of: T }),
      `
`,
      e.jsx(n.h2, {
        id: "cards-without-images",
        children: "Cards Without Images",
      }),
      `
`,
      e.jsx(t, { of: I }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(H, { changelogData: A }),
    ],
  });
}
function P(s = {}) {
  const { wrapper: n } = { ...c(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(r, { ...s }) }) : r(s);
}
export { P as default };
