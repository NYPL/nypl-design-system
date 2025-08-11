import {
  u as d,
  j as e,
  M as c,
  L as n,
  bv as h,
  C as s,
  bw as x,
  S as o,
} from "./iframe-D93LbwGv.js";
import {
  T as i,
  W as r,
  S as p,
  H as j,
  R as u,
  a as m,
  C as b,
  N as f,
  b as w,
  c as y,
  J as g,
} from "./Table.stories-A7XgIbq0.js";
import { C as v } from "./ComponentChangelogTable-Ck_3mwrR.js";
import "./storybookUtils-BmTl87w5.js";
const T = [
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Removes use of `useNYPLBreakpoints` and replaces with equivalent Chakra syntax.",
    ],
  },
  {
    date: "2024-11-07",
    version: "3.4.2",
    type: "Bug Fix",
    affects: ["Styles"],
    notes: ["Fixes spacing issues and dark mode color styles."],
  },
  {
    date: "2024-10-02",
    version: "3.4.0",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: [
      "Added the `isScrollable` prop to enable horizontal scrolling.",
      "Added the `columnStyles` prop to allow for custom column styles (i.e. width, text alignment, etc.).",
      "Added the `tableTextSize` prop to set the size of the text within the table.",
      "Added the `titleText` and `showTitleText` props to control the <caption> element and arial-label attribute.",
    ],
  },
  {
    date: "2024-05-09",
    version: "3.1.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Adds inline responsive styles and removes the use of the useWindowSize hook.",
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
function a(l) {
  const t = {
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
    ...l.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { of: i }),
      `
`,
      e.jsx(t.h1, { id: "table", children: "Table" }),
      `
`,
      e.jsxs(t.table, {
        children: [
          e.jsx(t.thead, {
            children: e.jsxs(t.tr, {
              children: [
                e.jsx(t.th, { children: "Component Version" }),
                e.jsx(t.th, { children: "DS Version" }),
              ],
            }),
          }),
          e.jsxs(t.tbody, {
            children: [
              e.jsxs(t.tr, {
                children: [
                  e.jsx(t.td, { children: "Added" }),
                  e.jsx(t.td, {
                    children: e.jsx(t.code, { children: "0.25.9" }),
                  }),
                ],
              }),
              e.jsxs(t.tr, {
                children: [
                  e.jsx(t.td, { children: "Latest" }),
                  e.jsx(t.td, {
                    children: e.jsx(t.code, { children: "3.6.2" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(t.ul, {
        children: [
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
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
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
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
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
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
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#title-text",
                target: "_self",
                children: "Title Text",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#row-dividers",
                target: "_self",
                children: "Row Dividers",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#row-headers",
                target: "_self",
                children: "Row Headers",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#custom-header-colors",
                target: "_self",
                children: "Custom Header Colors",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#custom-column-styles",
                target: "_self",
                children: "Custom Column Styles",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#horizontal-scrolling",
                target: "_self",
                children: "Horizontal Scrolling",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#responsive-mobile-layout",
                target: "_self",
                children: "Responsive Mobile Layout",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#jsx-elements",
                target: "_self",
                children: "JSX Elements",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(n, {
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
      e.jsx(t.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsx(h, { of: i }),
      `
`,
      e.jsx(t.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(s, { of: r }),
      `
`,
      e.jsx(x, { of: r }),
      `
`,
      e.jsx(t.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Internally, the HTML for the ",
          e.jsx(t.code, { children: "Table" }),
          ` element is structured with proper semantic
use of the `,
          e.jsx(t.code, { children: "table" }),
          ", ",
          e.jsx(t.code, { children: "caption" }),
          ", ",
          e.jsx(t.code, { children: "thead" }),
          ", ",
          e.jsx(t.code, { children: "tbody" }),
          ", ",
          e.jsx(t.code, { children: "tr" }),
          ", and ",
          e.jsx(t.code, { children: "td" }),
          ` HTML elements.
When titles are added through the `,
          e.jsx(t.code, { children: "titleText" }),
          " prop, the ",
          e.jsx(t.code, { children: "caption" }),
          ` element will
be rendered above the `,
          e.jsx(t.code, { children: "thead" }),
          " element.",
        ],
      }),
      `
`,
      e.jsx(t.p, {
        children: `This component should be used to render tabular data only and not used for layout
purposes.`,
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          `For improved accessibility, column headers are required and the first row
in the table will always be rendered as a `,
          e.jsx(t.code, { children: "thead" }),
          " with a child ",
          e.jsx(t.code, { children: "tr" }),
          ` and
corresponsing `,
          e.jsx(t.code, { children: "th" }),
          " cells. Additionally, the first cell in a ",
          e.jsx(t.code, { children: "tr" }),
          " row can be a ",
          e.jsx(t.code, { children: "th" }),
          `
header cell. Each `,
          e.jsx(t.code, { children: "th" }),
          ` header cell has an appropriate scope attribute set to
either `,
          e.jsx(t.code, { children: 'scope="col"' }),
          " or ",
          e.jsx(t.code, { children: 'scope="row"' }),
          ". For example, every ",
          e.jsx(t.code, { children: "th" }),
          " cell in a ",
          e.jsx(t.code, { children: "thead" }),
          `
`,
          e.jsx(t.code, { children: "tr" }),
          " row will have ",
          e.jsx(t.code, { children: 'scope="col"' }),
          ". Every ",
          e.jsx(t.code, { children: "th" }),
          " cell in a ",
          e.jsx(t.code, { children: "tbody" }),
          " ",
          e.jsx(t.code, { children: "tr" }),
          ` row will
have `,
          e.jsx(t.code, { children: 'scope="row"' }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          `Header cells are visually different from the standard table data. Use the
`,
          e.jsx(t.code, { children: "columnHeaders" }),
          ` prop to pass the data for the column headers. Use the
`,
          e.jsx(t.code, { children: "useRowHeaders" }),
          ` prop to render the first cell in every row as a header. If a
table has two levels of headers (such as two levels of horizontal headers), break
the data into two separate tables.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "When horizontal scrolling is enabled for the ",
          e.jsx(t.code, { children: "Table" }),
          ` component, the scrolling
element (the `,
          e.jsx(t.code, { children: "table" }),
          ` container) should have a proper role defined using
`,
          e.jsx(t.code, { children: 'role="region"' }),
          " and it should be set as focusable using ",
          e.jsx(t.code, { children: 'tabindex="0"' }),
          ".",
        ],
      }),
      `
`,
      e.jsx(t.p, { children: "Resources:" }),
      `
`,
      e.jsxs(t.ul, {
        children: [
          `
`,
          e.jsx(t.li, {
            children: e.jsx(t.a, {
              href: "https://www.w3.org/WAI/tutorials/tables/",
              rel: "nofollow",
              children: "W3C Tables Tutorial",
            }),
          }),
          `
`,
          e.jsx(t.li, {
            children: e.jsx(t.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table",
              rel: "nofollow",
              children: "MDN table: The Table element",
            }),
          }),
          `
`,
          e.jsx(t.li, {
            children: e.jsx(t.a, {
              href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced",
              rel: "nofollow",
              children: "MDN HTML table advance features and accessibility",
            }),
          }),
          `
`,
          e.jsx(t.li, {
            children: e.jsx(t.a, {
              href: "https://chakra-ui.com/docs/components/data-display/table",
              rel: "nofollow",
              children: "Chakra UI Table",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "title-text", children: "Title Text" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "titleText" }),
          ` prop can be used to add a visible title above the table or to
add an `,
          e.jsx(t.code, { children: "aria-label" }),
          " attribute. If the ",
          e.jsx(t.code, { children: "titleText" }),
          ` prop is passed, by default a
visibel header will be rendered.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          e.jsx(t.strong, { children: "IMPORTANT:" }),
          " While the ",
          e.jsx(t.code, { children: "titleText" }),
          ` prop is not required, it is recommended to
always use this prop for better accessibility.`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `<Table
columnHeaders={columnHeaders}
id="table-title-text"
tableData={tableData}
titleText="Table with visible title"
/>`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: p }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Use the ",
          e.jsx(t.code, { children: "showTitleText" }),
          ` prop to control the visibility of the title. When
`,
          e.jsx(t.code, { children: "showTitleText" }),
          " is set to ",
          e.jsx(t.code, { children: "false" }),
          ", the ",
          e.jsx(t.code, { children: "aria-label" }),
          ` attribute will be applied
instead of rendering the visisble header.`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `<Table
columnHeaders={columnHeaders}
id="table-aria-label"
showTitleText={false}
tableData={tableData}
titleText="Table with aria-label"
/>`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: j }),
      `
`,
      e.jsx(t.h2, { id: "row-dividers", children: "Row Dividers" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Use the ",
          e.jsx(t.code, { children: "showRowDividers" }),
          " prop to render a divider between each row.",
        ],
      }),
      `
`,
      e.jsx(s, { of: u }),
      `
`,
      e.jsx(t.h2, { id: "row-headers", children: "Row Headers" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Use the ",
          e.jsx(t.code, { children: "useRowHeaders" }),
          ` prop to render the first cell in every row as a header.
Notice that they are now bold and have a background color.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: m }),
      `
`,
      e.jsx(t.h2, {
        id: "custom-header-colors",
        children: "Custom Header Colors",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "It's possible to customize the header colors by using the ",
          e.jsx(t.code, { children: "columnHeadersBackgroundColor" }),
          `
and `,
          e.jsx(t.code, { children: "columnHeadersTextColor" }),
          ` props. Note that the colors need to have sufficient
color contrast.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: b }),
      `
`,
      e.jsx(t.h2, {
        id: "custom-column-styles",
        children: "Custom Column Styles",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "columnStyles" }),
          ` prop can be used to apply custom styles to to each column.
The most column use case for this is to control the column widths and/or text
alignment for each column. Any style prop can be passed using the `,
          e.jsx(t.code, { children: "columnStyles" }),
          `
prop, but it is recommended to use the default styles of the `,
          e.jsx(t.code, { children: "Table" }),
          ` component
as much as possible and to avoid excessive style overrides.`,
        ],
      }),
      `
`,
      e.jsx(t.h3, {
        id: "native-column-widths",
        children: "Native Column Widths",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Column widths in HTML ",
          e.jsx(t.code, { children: "<table>" }),
          ` elements can be a bit confusing and
unpredictable when relying on the default styles. Default table styles allow
column widths to resize enough to let a table fit fully within a given width.
With that treatment, all of the table content will be visible, but often the
resizing is unbalanced and text content within the columns becomes unreadable.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: f }),
      `
`,
      e.jsx(t.h3, {
        id: "custom-column-widths",
        children: "Custom Column Widths",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Using the ",
          e.jsx(t.code, { children: "columnStyles" }),
          " prop, specific ",
          e.jsx(t.code, { children: "width" }),
          " and ",
          e.jsx(t.code, { children: "min-width" }),
          ` values can be
set for each column in a table. Additional styles may also be set to format
table content as needed. Using custom styles will allow consuming apps to format
tables for better UX.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "For improved UX, it is recommended to apply a ",
          e.jsx(t.code, { children: "min-width" }),
          ` value of at least
`,
          e.jsx(t.code, { children: '"200px"' }),
          " to each column in a table.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `const columnStyles = [
{ minWidth: "200px", width: "15%" },
{ minWidth: "400px", width: "auto" },
{ minWidth: "200px", width: "15%", textAlign: "right" },
];`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          e.jsx(t.strong, { children: "IMPORTANT:" }),
          " The length of the array that makes up the ",
          e.jsx(t.code, { children: "columnStyles" }),
          ` prop
must match the length of the arrays that make up the `,
          e.jsx(t.code, { children: "tableData" }),
          ` and
`,
          e.jsx(t.code, { children: "columnHeaders" }),
          ` props. If a column does not require custom styles, an empty
object must be included in the `,
          e.jsx(t.code, { children: "columnStyles" }),
          " array. See the ",
          e.jsx(t.code, { children: "With Empty Style Object" }),
          " example below.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `const columnStyles = [
{ minWidth: "200px", width: "15%" },
{ },
{ minWidth: "200px", width: "15%", textAlign: "right" },
];`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: w }),
      `
`,
      e.jsx(t.h2, {
        id: "horizontal-scrolling",
        children: "Horizontal Scrolling",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "When using ",
          e.jsx(t.code, { children: "columnStyles" }),
          ", if the ",
          e.jsx(t.code, { children: "min-width" }),
          ` values cause a table to exceed the
width of its parent element, the `,
          e.jsx(t.code, { children: "isScrollable" }),
          ` prop can be used to enable
horizontal scrolling. Additionally, if `,
          e.jsx(t.code, { children: "useRowHeaders" }),
          ` is true in that same
situation, the first column will remain fixed as the subsequent columns scroll
beneath it.`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `const columnStyles = [
{ minWidth: "200px", width: "15%" },
{ minWidth: "200px", width: "15%" },
{ minWidth: "200px", width: "15%" },
{ minWidth: "500px", width: "auto" },
{ minWidth: "500px", width: "auto" },
{ minWidth: "200px", width: "15%", textAlign: "right" },
];`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: y }),
      `
`,
      e.jsx(t.h2, {
        id: "responsive-mobile-layout",
        children: "Responsive Mobile Layout",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "If the ",
          e.jsx(t.code, { children: "isScrollable" }),
          " prop is true, the layout of the ",
          e.jsx(t.code, { children: "Table" }),
          ` component is the
same for all viewports and horizontal scrolling will always be enabled. The only
difference between desktop and mobile views is that the row headers column will
not be locked in place for mobile viewports.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "If the ",
          e.jsx(t.code, { children: "isScrollable" }),
          " prop is false (or omitted), the ",
          e.jsx(t.code, { children: "Table" }),
          ` component layout
will be responsive and the standard horizontal layout of an HTML table will be
converted to a stacked vertical layout, with each "row" visually separated by a
prominent horizontal rule. Despite the significant visual changes in the
responsive layout, all component props are still functional.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "To view and test this in Storybook, go to the ",
          e.jsx(t.a, {
            href: "../?path=/story/components-page-layout-table--with-controls",
            children: "With Controls",
          }),
          `
Story and change the viewport in the Storybook toolbar at the top of the page.`,
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "jsx-elements", children: "JSX Elements" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "It's possible to pass in JSX elements in the ",
          e.jsx(t.code, { children: "tableData" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
export const charactersData = [
[
  "Tom",
  "Nook",
  <Image
    alt="Tom Nook"
    size="small"
    src="https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
  />,
],
[
  "Isabelle",
  "-",
  <Image
    alt="Isabelle"
    size="small"
    src="https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
  />,
],
[
  "K.K.",
  "Slider",
  <Image
    alt="K.K Slider"
    size="small"
    src="https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png"
  />,
],
];
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(s, { of: g }),
      `
`,
      e.jsx(t.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(v, { changelogData: T }),
    ],
  });
}
function A(l = {}) {
  const { wrapper: t } = { ...d(), ...l.components };
  return t ? e.jsx(t, { ...l, children: e.jsx(a, { ...l }) }) : a(l);
}
export { A as default };
