import {
  u as c,
  j as e,
  M as d,
  L as a,
  bv as h,
  C as s,
  bw as x,
  S as t,
} from "./iframe-D93LbwGv.js";
import {
  S as o,
  W as l,
  A as j,
  L as p,
  a as u,
  C as m,
  B as f,
  b,
} from "./SocialMediaLinks.stories-CotYFoJS.js";
import { C as g } from "./ComponentChangelogTable-Ck_3mwrR.js";
const y = [
  {
    date: "2024-11-07",
    version: "3.4.2",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Added support for the `socialX` icon."],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Refined the component with updated props."],
  },
  {
    date: "2024-03-28",
    version: "3.0.1",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updated the mobile styles so that links are center-aligned in a row (when rendered without labels) and in a column (when rendered with labels)",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
function r(i) {
  const n = {
    a: "a",
    code: "code",
    em: "em",
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
    ...c(),
    ...i.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { of: o }),
      `
`,
      e.jsx(n.h1, { id: "socialmedialinks", children: "SocialMediaLinks" }),
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
                    children: e.jsx(n.code, { children: "2.0.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.4.2" }),
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
              e.jsx(a, {
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
              e.jsx(a, {
                href: "#with-controls",
                target: "_self",
                children: "With Controls",
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
              e.jsx(a, {
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
              e.jsx(a, {
                href: "#variations",
                target: "_self",
                children: "Variations",
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
              e.jsx(a, {
                href: "#responsive-design",
                target: "_self",
                children: "Responsive Design",
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
              e.jsx(a, {
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
      e.jsx(h, { of: o }),
      `
`,
      e.jsx(n.h2, { id: "with-controls", children: "With Controls" }),
      `
`,
      e.jsx(s, { of: l }),
      `
`,
      e.jsx(x, { of: l }),
      `
`,
      e.jsx(n.h3, {
        id: "expected-data-structure-for-linkdata-and-available-social-media-link-icons",
        children:
          "Expected data structure for linkData and available Social Media Link Icons",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "linksData" }),
          " prop accepts an array of objects. Each item requires the properties: ",
          e.jsx(n.code, { children: "icon" }),
          ", ",
          e.jsx(n.code, { children: "labelText" }),
          `,
and `,
          e.jsx(n.code, { children: "url" }),
          ". The ",
          e.jsx(n.code, { children: "icon" }),
          " property relates to the icon rendered on page.",
        ],
      }),
      `
`,
      e.jsx(t, {
        code: `
interface SocialMediaLinkDataProps {
icon: IconNames;
labelText: string;
url: string;
}

type IconNames =
| "fileTypeGenericDoc"
| "socialFacebook"
| "socialInstagram"
| "socialPinterest"
| "socialSoundCloud"
| "socialTikTok"
| "socialTumblr"
| "socialTwitter"
| "socialX"
| "socialYoutube"
`,
        language: "ts",
      }),
      `
`,
      e.jsx(n.p, { children: "All available icons:" }),
      `
`,
      e.jsx(s, { of: j }),
      `
`,
      e.jsx(n.p, { children: "For example:" }),
      `
`,
      e.jsx(t, {
        code: `
import {
SocialMediaLinks,
SocialMediaLinkDataProps,
} from "@nypl/design-system-react-components";

const myLinksData: SocialMediaLinkDataProps[] = [
{ icon: "socialX", labelText: "NYPL Educators", url: "https://x.com/NYPLEducators"},
{ icon: "socialInstagram", labelText: "NYPL Educators", url: "https://www.instagram.com/nypleducators"},
{ icon: "socialFacebook", labelText: "NYPL Educators", url: "https://www.facebook.com/NYPLEducators"},
];

<SocialMediaLinks linksData={myLinksData} />
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Internally, links are organized in a ",
          e.jsx(n.code, { children: "ul" }),
          ` list element using the
`,
          e.jsx(n.a, {
            href: "/?path=/docs/components-typography-styles-list--docs",
            children: "List",
          }),
          `,
`,
          e.jsx(n.a, {
            href: "/?path=/docs/components-navigation-link--docs",
            children: "Link",
          }),
          `, and
`,
          e.jsx(n.a, {
            href: "/?path=/docs/components-media-icons-icon--docs",
            children: "Icon",
          }),
          " components.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If the ",
          e.jsx(n.code, { children: "showLabels" }),
          " prop is set to ",
          e.jsx(n.code, { children: "false" }),
          " the labels are still visible to screen reader software.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "resources", children: "Resources" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://dequeuniversity.com/tips/list-markup",
              rel: "nofollow",
              children: "Deque University Semantic Markup for Lists",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://design-system.w3.org/styles/svg-icons.html",
              rel: "nofollow",
              children: "W3C SVG icons",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://css-tricks.com/accessible-svg-icons/",
              rel: "nofollow",
              children: "Accessible SVG icons",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "variations", children: "Variations" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The below variations can be combined in any way EXCEPT ONE. You may ",
          e.jsx(n.em, { children: "NOT" }),
          " combine circular borders with labels.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "layout-variations", children: "Layout Variations" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "NOTE:" }),
          ` This layout prop is effectively limited to desktop views. For any viewport less than or equal to
the "md" breakpoint (currently 600px), links `,
          e.jsx(n.em, { children: "with labels" }),
          " will stack vertically and those ",
          e.jsx(n.em, { children: "without labels" }),
          `
will align horizontally automatically.`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children:
          'Also, for any viewport less than or equal to the "md" breakpoint, links will be center-aligned.',
      }),
      `
`,
      e.jsx(s, { of: p }),
      `
`,
      e.jsx(n.h3, { id: "size-variations", children: "Size Variations" }),
      `
`,
      e.jsx(s, { of: u }),
      `
`,
      e.jsx(n.h3, { id: "color-variations", children: "Color Variations" }),
      `
`,
      e.jsx(s, { of: m }),
      `
`,
      e.jsx(n.h3, { id: "border-variations", children: "Border Variations" }),
      `
`,
      e.jsx(s, { of: f }),
      `
`,
      e.jsx(n.h3, { id: "label-variations", children: "Label Variations" }),
      `
`,
      e.jsx(s, { of: b }),
      `
`,
      e.jsx(n.h2, { id: "responsive-design", children: "Responsive Design" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              `For any viewport less than or equal to the "md" breakpoint (currently 600px),
links `,
              e.jsx(n.em, { children: "with labels" }),
              " will stack vertically and those ",
              e.jsx(n.em, { children: "without labels" }),
              " will align horizontally automatically.",
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The minimum height is ",
              e.jsx(n.code, { children: "44px" }),
              " and the minumum width is ",
              e.jsx(n.code, { children: "44px" }),
              " regardless of the ",
              e.jsx(n.code, { children: "size" }),
              " prop value.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(g, { changelogData: y }),
    ],
  });
}
function L(i = {}) {
  const { wrapper: n } = { ...c(), ...i.components };
  return n ? e.jsx(n, { ...i, children: e.jsx(r, { ...i }) }) : r(i);
}
export { L as default };
