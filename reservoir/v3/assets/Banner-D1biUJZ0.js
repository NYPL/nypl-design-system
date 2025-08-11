import {
  u as d,
  j as e,
  M as l,
  L as s,
  bv as h,
  C as t,
  bw as x,
  S as r,
} from "./iframe-D93LbwGv.js";
import {
  B as o,
  W as a,
  T as p,
  a as u,
  C as m,
  H as j,
  b as g,
  D as f,
  S as b,
} from "./Banner.stories-CGW6q7nA.js";
import { C as y } from "./ComponentChangelogTable-Ck_3mwrR.js";
const w = [
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Styles"],
    notes: ["Update space between heading and content."],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Render HTML content when passed as a string in the `content` prop.",
    ],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: ["Exports the `BannerProps` interface."],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updated the `warning` variant to use `ui.warning.tertiary`."],
  },
  {
    date: "2024-04-11",
    version: "3.1.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["New component added to the library."],
  },
];
function c(i) {
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
    ...d(),
    ...i.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(l, { of: o }),
      `
`,
      e.jsx(n.h1, { id: "banner", children: "Banner" }),
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
                    children: e.jsx(n.code, { children: "3.1.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.5.5" }),
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
              e.jsx(s, {
                href: "#overiew",
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
              e.jsx(s, {
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
              e.jsx(s, {
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
              e.jsx(s, {
                href: "#variants",
                target: "_self",
                children: "Variants",
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
              e.jsx(s, {
                href: "#banner-heading",
                target: "_self",
                children: "Banner Heading",
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
              e.jsx(s, {
                href: "#banner-icon",
                target: "_self",
                children: "Banner Icon",
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
              e.jsx(s, {
                href: "#with-html-content",
                target: "_self",
                children: "With HTML Content",
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
              e.jsx(s, {
                href: "#custom-color",
                target: "_self",
                children: "Custom Color",
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
              e.jsx(s, {
                href: "#dismissible",
                target: "_self",
                children: "Dismissible",
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
              e.jsx(s, {
                href: "#with-html-content-passed-as-string",
                target: "_self",
                children: "With HTML content passed as string",
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
              e.jsx(s, {
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
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "IMPORTANT:" }),
          " The ",
          e.jsx(n.code, { children: "Banner" }),
          ` component is similar in form and function to the
`,
          e.jsx(n.code, { children: "Notification" }),
          " component. However, the ",
          e.jsx(n.code, { children: "Notification" }),
          ` component should be used
for global messaging located at the top of the site, above the NYPL header,
while the `,
          e.jsx(n.code, { children: "Banner" }),
          ` component should be used for all messaging that sits within
the flow of the page.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(t, { of: a }),
      `
`,
      e.jsx(x, { of: a }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Banner" }),
          " component renders with an HTML ",
          e.jsx(n.code, { children: "aside" }),
          ` element as its
wrapper. This is an HTML landmark element that is similar to adding an attribute
of `,
          e.jsx(n.code, { children: 'role="complementary"' }),
          `. For accessibility purposes, landmark elements should
not be rendered inside other landmark elements such as the `,
          e.jsx(n.code, { children: "header" }),
          " and ",
          e.jsx(n.code, { children: "footer" }),
          `
landmark elements. Adding a `,
          e.jsx(n.code, { children: "Banner" }),
          " component inside an HTML ",
          e.jsx(n.code, { children: "main" }),
          `
landmark element is acceptable.`,
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "aria-label", children: "ARIA Label" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If an ",
          e.jsx(n.code, { children: "aria-label" }),
          " is needed, it can be set through the ",
          e.jsx(n.code, { children: "ariaLabel" }),
          ` prop. If
there are multiple `,
          e.jsx(n.code, { children: "Banner" }),
          ` components on a page, they must each have unique
`,
          e.jsx(n.code, { children: "aria-label" }),
          " attributes. A unique ",
          e.jsx(n.code, { children: "aria-label" }),
          ` value, along with the
`,
          e.jsx(n.code, { children: "<aside>" }),
          ` HTML landmark element, helps screen readers better navigate a page
with multiple `,
          e.jsx(n.code, { children: "Banner" }),
          "s.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "icons", children: "Icons" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Icons rendered in the ",
          e.jsx(n.code, { children: "Banner" }),
          ` component are decorative by default which
means that they are hidden to screen readers. If `,
          e.jsx(n.code, { children: "isDismissable" }),
          ` is true, the
"X" close icon is wrapped inside a button with an appropriate `,
          e.jsx(n.code, { children: "aria-label" }),
          `
attribute.`,
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "language-patterns", children: "Language Patterns" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When the ",
          e.jsx(n.code, { children: "Banner" }),
          ` component is rendered, the text within the component
should always include wording that aligns with the type of notitication that is
being delivered. For example, if the Banner is a warning or error, the
heading or body copy within the Banner should use the words `,
          e.jsx(n.code, { children: '"warning"' }),
          ` or
`,
          e.jsx(n.code, { children: '"error"' }),
          " and provide a clear description of the existing or potential isssue.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "dynamic-banners", children: "Dynamic Banners" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "If dynamically generated ",
          e.jsx(n.code, { children: "Banners" }),
          ` are required, a container into which the
`,
          e.jsx(n.code, { children: "Banner" }),
          ` will be injected should be included in the DOM. The container
element should have `,
          e.jsx(n.code, { children: 'aria-live="polite"' }),
          ` applied. The container element should
always be rendered in the DOM regardless of the presence of the `,
          e.jsx(n.code, { children: "Banner" }),
          `
component. This DOM structure will allow the newly generated content to be
recognized and announced by assistive technology.`,
        ],
      }),
      `
`,
      e.jsx(r, {
        code: `
<div aria-live="polite">
<Banner {...props} />
</div>
`,
        language: "tsx",
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
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role",
              rel: "nofollow",
              children: "MDN Aria: complementary role",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.deque.com/blog/creating-accessible-svgs/",
              rel: "nofollow",
              children: "Deque Creating Accessible SVGs",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://css-tricks.com/accessible-svg-icons/",
              rel: "nofollow",
              children: "CSS Tricks Accessible SVG Icons",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "..?path=/docs/accessibility-guide-dynamic-content--docs",
              children: "Reservoir Accessibility Guide: Dynamic Content",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "variants", children: "Variants" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "type" }),
          " prop can be used to render different variants of ",
          e.jsx(n.code, { children: "Banner" }),
          `. Each
variant has a different color and iconography.`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: `It is recommended to align the usage of the Banner component to the semantic
meaning of one of the component’s variants. When using the Banner component,
the implementation should not rely on the color alone to convey meaning, as
color is not a universal experience for everyone. The meaning of the heading
and body copy should align with the general meaning associated with the semantic
colors used in a specific variant.`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "IMPORTANT:" }),
          ` The text color for links within the content will NOT use the
DS standard link color. Instead, the color will match the color of the content.
Additionally, links will always be underlined.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "IMPORTANT:" }),
          ` For the "negative" variant only, the heading and text color will
both be set to the same color, `,
          e.jsx(n.code, { children: "ui.error.primary" }),
          " and ",
          e.jsx(n.code, { children: "dark.ui.error.primary" }),
          `
for dark mode.`,
        ],
      }),
      `
`,
      e.jsx(t, { of: p }),
      `
`,
      e.jsx(n.h2, { id: "banner-heading", children: "Banner Heading" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Banner" }),
          ` component can be rendered with and without a heading. By
default, when a string is passed to the `,
          e.jsx(n.code, { children: "heading" }),
          ` prop, the
`,
          e.jsx(n.code, { children: "Banner" }),
          " component will render an ",
          e.jsx(n.code, { children: "h2" }),
          " element sized as a ",
          e.jsx(n.code, { children: "heading6" }),
          `
heading. If this causes accessibility issues in your app, you can set a custom
heading by passing in a DS `,
          e.jsx(n.code, { children: "Heading" }),
          " component.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the following examples, the ",
          e.jsx(n.code, { children: "Banner" }),
          " component will render custom ",
          e.jsx(n.code, { children: "h3" }),
          `
and `,
          e.jsx(n.code, { children: "h5" }),
          ` elements. Note that no matter what heading level is set, the size will
always be set to `,
          e.jsx(n.code, { children: "heading6" }),
          " internally by the ",
          e.jsx(n.code, { children: "Banner" }),
          " component.",
        ],
      }),
      `
`,
      e.jsx(r, {
        code: `

const customH3 = <Heading level="h3">Custom H3 Heading</Heading>;
const customH5 = <Heading level="h5">Custom H5 Heading</Heading>;

<Banner heading={customH3} {...props} />
<Banner heading={customH5} {...props} />
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t, { of: u }),
      `
`,
      e.jsx(n.h2, { id: "banner-icon", children: "Banner Icon" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The default icon can be overridden by using the ",
          e.jsx(n.code, { children: "icon" }),
          ` prop to pass a
custom `,
          e.jsx(n.code, { children: "Icon" }),
          " component. Make sure to set ",
          e.jsx(n.code, { children: 'size="large"' }),
          " and ",
          e.jsx(n.code, { children: 'marginTop="xxxs"' }),
          `
as props to match desired styling.`,
        ],
      }),
      `
`,
      e.jsx(r, {
        code: `
<Banner
content={
  <>
    Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus
    mollis interdum. Morbi leo risus, porta ac consectetur ac,
    vestibulum at eros. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus.
  </>
}
heading="Banner with Custom Icon"
icon={
  <Icon
    name="actionLightbulb"
    title="Banner with custom icon"
    size="large"
    marginTop="xxxs"
  />
}
type="informative"
/>
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t, { of: m }),
      `
`,
      e.jsx(n.h2, { id: "with-html-content", children: "With HTML Content" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "content" }),
          " prop can accept HTML.",
        ],
      }),
      `
`,
      e.jsx(r, {
        code: `
<Banner
heading="Standard Banner with HTML content"
content={
  <>
    <Text>
      Cras mattis consectetur purus sit amet fermentum. Maecenas
      faucibus mollis interdum.
    </Text>
    <Text noSpace>
      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.{" "}
      <b>
        Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus
      </b>
      . <Link href="#">This is a link</Link>.
    </Text>
  </>
}
/>
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "custom-color", children: "Custom Color" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "It is recommended to rely on the color styles set with the ",
          e.jsx(n.code, { children: "type" }),
          ` prop.
However, in cases where a different color is necessary, a value from a defined
set of colors can be used. Both `,
          e.jsx(n.code, { children: "backgroundColor" }),
          " and ",
          e.jsx(n.code, { children: "highlightColor" }),
          ` must be
set in order to override the predefined variant types.`,
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "backgroundColor" }),
              ` prop can be used to set the color of the entire
background.`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "highlightColor" }),
              ` prop can be used to set the color of the left border
and the icon.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(t, { of: g }),
      `
`,
      e.jsx(n.h2, { id: "dismissible", children: "Dismissible" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "A dismissible ",
          e.jsx(n.code, { children: "Banner" }),
          ` component can be created by setting the
`,
          e.jsx(n.code, { children: "isDismissible" }),
          " prop to ",
          e.jsx(n.code, { children: "true" }),
          `. Once the "X" close icon on the upper right is
clicked, the `,
          e.jsx(n.code, { children: "Banner" }),
          ` will be removed from the DOM, therefore it only
renders once.`,
        ],
      }),
      `
`,
      e.jsx(t, { of: f }),
      `
`,
      e.jsx(n.h2, {
        id: "with-html-content-passed-as-string",
        children: "With HTML content passed as string",
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "HTML content passed as a string is rendered as HTML, useful in cases where HTML content is stored in an environment variable or from other sources where the content is stored as strings.",
      }),
      `
`,
      e.jsx(r, {
        code: `
<Banner
heading="Standard Banner with HTML content passed as string"
content="<p>Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.</p><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. <b>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</b>. <a href='#'>This is a link</a>.</p>"
/>
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t, { of: b }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(y, { changelogData: w }),
    ],
  });
}
function C(i = {}) {
  const { wrapper: n } = { ...d(), ...i.components };
  return n ? e.jsx(n, { ...i, children: e.jsx(c, { ...i }) }) : c(i);
}
export { C as default };
