import {
  u as o,
  j as e,
  M as c,
  L as s,
  bv as d,
  C as r,
  bw as h,
  S as x,
} from "./iframe-D93LbwGv.js";
import {
  P as i,
  W as a,
  L as p,
  C as j,
  a as u,
  b as f,
  c as g,
  d as m,
  I as b,
  e as v,
} from "./ProgressIndicator.stories-CbxqmuWK.js";
import { C as y } from "./ComponentChangelogTable-Ck_3mwrR.js";
const w = [
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Syncs the margin styles with the VDL."],
  },
  {
    date: "2024-10-24",
    version: "3.4.1",
    type: "Update",
    affects: ["Documentation", "Functionality"],
    notes: [
      "Adds `labelPlacement` prop to allow for custom placement of a label for circular indicators.",
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
function l(t) {
  const n = {
    a: "a",
    code: "code",
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
    ...o(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { of: i }),
      `
`,
      e.jsx(n.h1, { id: "progressindicator", children: "ProgressIndicator" }),
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
                    children: e.jsx(n.code, { children: "0.25.4" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.6.0" }),
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
                href: "#linear-type",
                target: "_self",
                children: "Linear Type",
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
                href: "#circular-type",
                target: "_self",
                children: "Circular Type",
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
                href: "#sizing",
                target: "_self",
                children: "Sizing",
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
                href: "#labels",
                target: "_self",
                children: "Labels",
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
                href: "#indeterminate-state",
                target: "_self",
                children: "Indeterminate State",
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
                href: "#dark-mode",
                target: "_self",
                children: "Dark Mode",
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
                href: "#get-input-values",
                target: "_self",
                children: "Get Input Values",
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
      e.jsx(d, { of: i }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(r, { of: a }),
      `
`,
      e.jsx(h, { of: a }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Chakra UI takes care of the internal accessibility attributes for this
component. Specifically, the `,
          e.jsx(n.code, { children: "role" }),
          " attribute is set to ",
          e.jsx(n.code, { children: "progressbar" }),
          ` and the
`,
          e.jsx(n.code, { children: "aria-valuenow" }),
          " attribute is set to the value of the ",
          e.jsx(n.code, { children: "value" }),
          ` prop, or the
percentage completion value. The min and max values are set to "0" and "100",
respectively, and are set with the `,
          e.jsx(n.code, { children: "aria-valuemin" }),
          " and ",
          e.jsx(n.code, { children: "aria-valuemax" }),
          `
attributes. This makes this component and its value(s) visible to screen
readers.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When ",
          e.jsx(n.code, { children: "showLabel" }),
          " is set to false, the ",
          e.jsx(n.code, { children: "labelText" }),
          ` value will be set to the main
`,
          e.jsx(n.code, { children: "<div>" }),
          "'s ",
          e.jsx(n.code, { children: "aria-label" }),
          ` attribute. This is the same div that contains the
`,
          e.jsx(n.code, { children: "aria-valuemin" }),
          ", ",
          e.jsx(n.code, { children: "aria-valuemax" }),
          ", and ",
          e.jsx(n.code, { children: "aria-valuenow" }),
          " attributes.",
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
              href: "https://www.digitala11y.com/progressbar-role/",
              rel: "nofollow",
              children: "DigitalA11y WAI-ARIA: ROLE=PROGRESSBAR",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role",
              rel: "nofollow",
              children: "MDN Using the progressbar role",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://chakra-ui.com/docs/components/feedback/progress",
              rel: "nofollow",
              children: "Chakra UI Progress",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://chakra-ui.com/docs/components/feedback/circular-progress",
              rel: "nofollow",
              children: "Chakra UI Circular Progress",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "linear-type", children: "Linear Type" }),
      `
`,
      e.jsx(n.p, {
        children: `Progress bars are preferred in vertically narrow areas such as tables, cards,
dialogs, etc.`,
      }),
      `
`,
      e.jsx(r, { of: p }),
      `
`,
      e.jsx(n.h2, { id: "circular-type", children: "Circular Type" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `The circular progress type is preferred for large content areas and for
full-screen loading. Set the `,
          e.jsx(n.code, { children: "indicatorType" }),
          " prop to ",
          e.jsx(n.code, { children: '"circular"' }),
          " for this type.",
        ],
      }),
      `
`,
      e.jsx(r, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "sizing", children: "Sizing" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `The starting height for the progress bar is 4px on mobile and 8px for desktop.
The `,
          e.jsx(n.code, { children: "size" }),
          ` prop can be used to optionally set the height to 4px for desktop
through the `,
          e.jsx(n.code, { children: "ProgressIndicatorSizes.Small" }),
          " value.",
        ],
      }),
      `
`,
      e.jsx(n.p, { children: e.jsx(n.code, { children: 'size="small"' }) }),
      `
`,
      e.jsx(r, { of: u }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `The starting size for the circular progress is 48px and can be made smaller to
24px with the `,
          e.jsx(n.code, { children: "size" }),
          ` prop. The small 24px size can be used for inline local
changes in content. Note that in the small size, the label text and the
percentage will not displayed.`,
        ],
      }),
      `
`,
      e.jsx(n.p, { children: e.jsx(n.code, { children: 'size="small"' }) }),
      `
`,
      e.jsx(r, { of: f }),
      `
`,
      e.jsx(n.h2, { id: "labels", children: "Labels" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "labelText" }),
          " value and the ",
          e.jsx(n.code, { children: "value" }),
          ` percentage are displayed by default. They
can be hidden through the `,
          e.jsx(n.code, { children: "showLabel" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.code, { children: "showLabel={false}" }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Accessibility Note: when ",
          e.jsx(n.code, { children: "showLabel" }),
          " is false, the ",
          e.jsx(n.code, { children: "aria-label" }),
          ` prop is set in
the progress element to provide a description of the progress for screen
readers.`,
        ],
      }),
      `
`,
      e.jsx(r, { of: g }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "For circular indicator variants, the ",
          e.jsx(n.code, { children: "labelPlacement" }),
          ` prop can be used to set the
placement of a label relative to the indicator. By default, the label will be
displayed below the indicator.`,
        ],
      }),
      `
`,
      e.jsx(r, { of: m }),
      `
`,
      e.jsx(n.h2, {
        id: "indeterminate-state",
        children: "Indeterminate State",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When the ",
          e.jsx(n.code, { children: "isIndeterminate" }),
          " prop is set to true, the ",
          e.jsx(n.code, { children: "value" }),
          ` prop is ignored and
the state is set to an animated indeterminate state. This is often used when the
exact value or progress of the task is unknown.`,
        ],
      }),
      `
`,
      e.jsx(r, { of: b }),
      `
`,
      e.jsx(n.h2, { id: "dark-mode", children: "Dark Mode" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "darkMode" }),
          ` prop is deprecated and should not be used. This component comes
with built-in dark mode styles that display automatically if dark mode is turned
on.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "get-input-values", children: "Get Input Values" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the following example, we are setting the ",
          e.jsx(n.code, { children: "value" }),
          ` prop based on a timer that
increases the value every second by 10. Once it reaches 100, it resets to 0.
This is a very simple example using `,
          e.jsx(n.code, { children: "React.useState" }),
          ` to manage the state but in
a real application the value would come from a data source or server.`,
        ],
      }),
      `
`,
      e.jsx(x, {
        code: `
// Example code
function ProgressIndicatorExample() {
const [value, setValue] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setValue((value) => (value === 100 ? 0 : value + 10));
  }, 1000);
  return () => clearInterval(interval);
}, []);
return (
  <SimpleGrid columns={1} gap="grid.m">
    <ProgressIndicator
      id="example"
      labelText="Progress example"
      value={value}
    />
    <ProgressIndicator
      id="example-circular"
      indicatorType="circular"
      labelText="Progress example"
      value={value}
    />
  </SimpleGrid>
);
}
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(r, { of: v }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(y, { changelogData: w }),
    ],
  });
}
function k(t = {}) {
  const { wrapper: n } = { ...o(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(l, { ...t }) }) : l(t);
}
export { k as default };
