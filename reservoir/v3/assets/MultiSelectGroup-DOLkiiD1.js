import {
  u as d,
  j as e,
  M as r,
  L as n,
  bv as h,
  C as s,
  bw as a,
  S as u,
} from "./iframe-D93LbwGv.js";
import { C as x } from "./ComponentChangelogTable-Ck_3mwrR.js";
import {
  M as i,
  W as c,
  L as j,
  c as p,
} from "./MultiSelectGroup.stories-DwXlTBLa.js";
import "./useMultiSelect-amaASZqv.js";
const m = [
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: ["Uses CSS to decrease reliance on `useNYPLBreakpoints` hook."],
  },
  {
    date: "2024-07-03",
    version: "3.1.7",
    type: "Update",
    affects: ["Documentation"],
    notes: [
      "Added an example of a `MultiSelectGroup` with the `MultiSelect`'s `closeOnBlur` set to true",
    ],
  },
  {
    date: "2024-04-11",
    version: "3.1.0",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: [
      "V2 refactor of the `MultiSelectGroup` component including updating to Chakra 2.8.",
    ],
  },
];
function o(l) {
  const t = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
      e.jsx(r, { of: i }),
      `
`,
      e.jsx(t.h1, { id: "multiselectgroup", children: "MultiSelectGroup" }),
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
                    children: e.jsx(t.code, { children: "1.4.0" }),
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
                href: "#layout-patterns",
                target: "_self",
                children: "Layout Patterns",
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
                href: "#passing-multiselect-children",
                target: "_self",
                children: "Passing `MultiSelect` Children",
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
                href: "#close-on-blur-state",
                target: "_self",
                children: "Close on Blur State",
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
      e.jsx(s, { of: c }),
      `
`,
      e.jsx(a, { of: c }),
      `
`,
      e.jsx(t.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "MultiSelectGroup" }),
          " renders a group of ",
          e.jsx(t.code, { children: "MultiSelect" }),
          ` components that are
wrapped in a `,
          e.jsx(t.code, { children: "<fieldset>" }),
          " element. The ",
          e.jsx(t.code, { children: "<fieldset>" }),
          " element renders a ",
          e.jsx(t.code, { children: "<legend>" }),
          `
element that can be visually hidden through the `,
          e.jsx(t.code, { children: "showLabel" }),
          ` prop. If the
`,
          e.jsx(t.code, { children: "<legend>" }),
          " is hidden an ",
          e.jsx(t.code, { children: "aria-label" }),
          " attribute with ",
          e.jsx(t.code, { children: "labelText" }),
          ` value will be
rendered instead.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "For accessibility information on the ",
          e.jsx(t.code, { children: "MultiSelect" }),
          ` component, see the
`,
          e.jsx(t.a, {
            href: "../?path=/docs/components-form-elements-multiselect--docs#accessibility",
            children: "MultiSelect Accessibility",
          }),
          " documentation.",
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "layout-patterns", children: "Layout Patterns" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          `The width of the MultiSelect components can be passed through the
`,
          e.jsx(t.code, { children: "multiSelectWidth" }),
          " prop, with values of ",
          e.jsx(t.code, { children: '"fitContent"' }),
          " or ",
          e.jsx(t.code, { children: '"full"' }),
          `.
On screen width under 600px width the `,
          e.jsx(t.code, { children: "layout" }),
          ` is automatically set to "column"
and the `,
          e.jsx(t.code, { children: "multiSelectWidth" }),
          ' to "full".',
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          e.jsx(t.strong, { children: "IMPORTANT" }),
          ": It is recommended to not set ",
          e.jsx(t.code, { children: "multiSelectWidth" }),
          " to ",
          e.jsx(t.code, { children: '"full"' }),
          ` and
`,
          e.jsx(t.code, { children: "layout" }),
          " to ",
          e.jsx(t.code, { children: '"row"' }),
          " at the same time. When the ",
          e.jsx(t.code, { children: "MultiSelect" }),
          ` components are
opened, the overlap will cause z-index issues with the selected count button.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: j }),
      `
`,
      e.jsx(t.h2, {
        id: "passing-multiselect-children",
        children: "Passing MultiSelect Children",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "In order to control the styling and props passed to children ",
          e.jsx(t.code, { children: "MultiSelect" }),
          `
components, the `,
          e.jsx(t.code, { children: "MultiSelectGroup" }),
          " component only accepts ",
          e.jsx(t.code, { children: "MultiSelect" }),
          ` children
through its `,
          e.jsx(t.code, { children: "renderMultiSelect" }),
          " render prop function.",
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          `This callback prop function returns an object argument with two properties:
`,
          e.jsx(t.code, { children: "isBlockElement" }),
          " and ",
          e.jsx(t.code, { children: "multiSelectWidth" }),
          ". The ",
          e.jsx(t.code, { children: "isBlockElement" }),
          ` argument value
should be passed to the `,
          e.jsx(t.code, { children: "isBlockElement" }),
          " prop, and the ",
          e.jsx(t.code, { children: "multiSelectWidth" }),
          `
argument value should be passed to the `,
          e.jsx(t.code, { children: "width" }),
          " prop of the ",
          e.jsx(t.code, { children: "MultiSelect" }),
          ".",
        ],
      }),
      `
`,
      e.jsx(u, {
        code: `
<MultiSelectGroup
{...otherArgs}
renderMultiSelect={({ isBlockElement, multiSelectWidth }) => {
  return (
    multiSelectItems.map((multiSelect) => (
      <MultiSelect
        buttonText="MultiSelect"
        defaultItemsVisible={defaultItemsVisible}
        id={multiSelect.id}
        isBlockElement={isBlockElement}
        items={multiSelect.items}
        key={multiSelect.id}
        onChange={(e) => onChange(e.target.id, multiSelect.id)}
        onClear={() => onClear(multiSelect.id)}
        onMixedStateChange={(e) =>
          onMixedStateChange(
            e.target.id,
            multiSelect.id,
            multiSelect.items
          )
        }
        selectedItems={selectedItems}
        width={multiSelectWidth}
      />
    ))
  );
}}
/>
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t.h2, {
        id: "close-on-blur-state",
        children: "Close on Blur State",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "When ",
          e.jsx(t.code, { children: "closeOnBlur" }),
          " is set to ",
          e.jsx(t.code, { children: "true" }),
          ", the ",
          e.jsx(t.code, { children: "MultiSelect" }),
          ` accordion will close when
focus leaves the component (the user clicks outside). In the case of a `,
          e.jsx(t.code, { children: "MultiSelectGroup" }),
          `,
this means only one accordion will be open at a time.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: p }),
      `
`,
      e.jsx(t.h2, {
        id: "usemultiselect-hook",
        children: "useMultiSelect hook",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          e.jsx(t.code, { children: "useMultiSelect" }),
          ` is an optional but recommended hook for cases where managing
the state of the component in the consuming app is less of a concern and general
ease of use is prefered.`,
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          `The hook returns an object containing all the props and state needed to
handle the `,
          e.jsx(t.code, { children: "selectedItems" }),
          " object. Included are the functions ",
          e.jsx(t.code, { children: "onChange" }),
          `,
`,
          e.jsx(t.code, { children: "onClearAll" }),
          ", and ",
          e.jsx(t.code, { children: "onMixedStateChange" }),
          ` for handling any changes to the
items that are currently selected. Also included is the `,
          e.jsx(t.code, { children: "selectItems" }),
          ` object
to reflect the current state of the items that are currently selected.
Additionally, the hook returns the `,
          e.jsx(t.code, { children: "setSelectedItems" }),
          ` function for setting
an initial state of `,
          e.jsx(t.code, { children: "selectedItems" }),
          " or, if needed, to manipulate ",
          e.jsx(t.code, { children: "selectedItems" }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "Due to its data structure and the setup of its functions, the ",
          e.jsx(t.code, { children: "useMultiSelect" }),
          `
hook is capable of handling a group of `,
          e.jsx(t.code, { children: "MultiSelect" }),
          ` components. Find the full
documentation under `,
          e.jsx(t.a, {
            href: "../?path=/docs/hooks-usemultiselect--docs",
            children: "useMultiSelect",
          }),
          ".",
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(x, { changelogData: m }),
    ],
  });
}
function M(l = {}) {
  const { wrapper: t } = { ...d(), ...l.components };
  return t ? e.jsx(t, { ...l, children: e.jsx(o, { ...l }) }) : o(l);
}
export { M as default };
