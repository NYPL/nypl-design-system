import {
  u as h,
  j as e,
  M as a,
  L as t,
  bv as d,
  C as s,
  bw as p,
  S as o,
} from "./iframe-D93LbwGv.js";
import { C as m } from "./ComponentChangelogTable-Ck_3mwrR.js";
import {
  M as l,
  W as r,
  a as x,
  b as u,
  c as j,
  d as g,
} from "./Menu.stories-Cg93fwfB.js";
const f = [
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Sets the font weight for the `group` headings to `bold`."],
  },
  {
    date: "2025-02-13",
    version: "3.5.4",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Sets the line height to 1.5 for menu options.",
      "Fixes the rounded styles for menu option images.",
    ],
  },
  {
    date: "2024-08-29",
    version: "3.3.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: ["Adds new `showSelectionAsLabel` prop, updates `aria-label`s."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Chakra 2.8 update."],
  },
];
function c(i) {
  const n = {
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
    ...h(),
    ...i.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(a, { of: l }),
      `
`,
      e.jsx(n.h1, { id: "menu", children: "Menu" }),
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
                    children: e.jsx(n.code, { children: "3.0.0" }),
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
                href: "#menu-types",
                target: "_self",
                children: "Menu Types",
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
                href: "#menu-label",
                target: "_self",
                children: "Menu Label",
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
                href: "#menu-content",
                target: "_self",
                children: "Menu Content",
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
                href: "#menu-highlight-colors",
                target: "_self",
                children: "Menu Highlight Colors",
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
      e.jsx(d, { of: l }),
      `
`,
      e.jsx(n.p, {
        children: `The Menu component renders a collection of button and/or link elements within a dropdown menu format.
The component allows users to perform multiple actions from an element with a small footprint.`,
      }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(s, { of: r }),
      `
`,
      e.jsx(p, { of: r }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When the menu is open, the menu items are keyboard accessible with the ",
          e.jsx(n.code, { children: "ArrowDown" }),
          " and ",
          e.jsx(n.code, { children: "ArrowUp" }),
          ` keys, but not tabbable.
The focus indicator is the gray background and bolded text.
The `,
          e.jsx(n.code, { children: "Enter" }),
          ` key, or a click, selects an item and closes the menu.
The menu can also be closed with a click outside of its container or the `,
          e.jsx(n.code, { children: "Escape" }),
          " key.",
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "After a list action item is clicked, consuming apps should be mindful of the action that is performed by the action item's onClick handler and adjust the focus accordingly.",
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "The menu itself requires a label to provide meaningful accessible text, even when only the vertical ellipsis is used instead of a visible label.",
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
              href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role",
              rel: "nofollow",
              children: "MDN Menu accessibility",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "menu-types", children: "Menu Types" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "There are four types: button, text button, icon (with container), and icon (without container). These types are toggled with ",
          e.jsx(n.code, { children: "showLabel" }),
          " and ",
          e.jsx(n.code, { children: "showBorder" }),
          `.
Use the icon type when there is limited space such as a table or on mobile.`,
        ],
      }),
      `
`,
      e.jsx(s, { of: x }),
      `
`,
      e.jsx(n.h2, { id: "menu-label", children: "Menu Label" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The default label of the menu will be ",
          e.jsx(n.code, { children: "labelText" }),
          ". With ",
          e.jsx(n.code, { children: "showSelectionAsLabel" }),
          ` enabled, the selected item will then display as the menu's label. This is useful when the choice
should be displayed after selection, like choosing sort/filter criteria, or if an option needs to be selected and displayed when the page first loads.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.code, { children: "labelText" }),
          " is still required even if ",
          e.jsx(n.code, { children: "showSelectionAsLabel" }),
          " is true, because it is used for the ",
          e.jsx(n.code, { children: "aria-label" }),
          ".",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "IMPORTANT:" }),
          " A Menu with ",
          e.jsx(n.code, { children: "showSelectionAsLabel" }),
          ' enabled should be accompanied by nearby directions ("Sort By", "Select theme", etc.) so that the function of the menu is clear.',
        ],
      }),
      `
`,
      e.jsx(s, { of: u }),
      `
`,
      e.jsx(n.h2, { id: "menu-content", children: "Menu Content" }),
      `
`,
      e.jsx(n.p, {
        children:
          "Menu items can be displayed with images, icons, or just as text. They can be grouped with headings, dividers, or both.",
      }),
      `
`,
      e.jsx(n.p, {
        children:
          "The menu can be aligned to the left or right by its consuming app.",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The maximum height of the menu list container is ",
          e.jsx(n.code, { children: "320px" }),
          `, or roughly eight menu items. Past that height, it will scroll. The
maximum width is `,
          e.jsx(n.code, { children: "300px" }),
          ". Past that width, menu items will wrap onto the next line.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          e.jsx(n.strong, { children: "IMPORTANT:" }),
          " Avoid long labels for list items. Keep the item labels short and avoid sentences from wrapping to the next line.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Content is passed to the menu through ",
          e.jsx(n.code, { children: "listItemsData" }),
          `, and each menu item needs to be one of three types: Action, Group, or Divider.
Each type expects different properties, as shown below:`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
const exampleListItemsData = [
{
  type: "group",
  id: "group-1",
  label: "I'm group 1",
  children: [
    {
      type: "action",
      id: "item-title-1",
      label: "I'm item 1",
      onClick: () => {
        console.log("Item Title 1 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-2",
      label: "I'm item 2",
      onClick: () => {
        console.log("Item Title 2 clicked");
      },
    },
  ],
},
{ type: "divider", id: "divider-1" },
{
  type: "action",
  id: "item-title-3",
  label: "I'm item 3",
  onClick: () => {
    console.log("Item Title 3 clicked");
  }
},
];

...

<Menu labelText={"Menu"} listItemsData={exampleListItemsData} />
`,
        language: "tsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "All ",
          e.jsx(n.code, { children: "ActionItem" }),
          "s require an ",
          e.jsx(n.code, { children: "onClick" }),
          " function, but the ",
          e.jsx(n.code, { children: "media" }),
          ` prop is optional. Media will display
to the left of the menu text, and will render either an `,
          e.jsx(t, {
            href: "../?path=/docs/components-media-icons-icon--docs",
            target: "",
            children: "Icon",
          }),
          `
or `,
          e.jsx(t, {
            href: "../?path=/docs/components-media-icons-image--docs",
            target: "",
            children: "Image",
          }),
          ". The ",
          e.jsx(n.code, { children: "media" }),
          ` prop requires a type (icon or image)
and then either the name of the icon or the source url and alt text of the image.`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
    {
      type: "action",
      id: "item-title-1",
      label: "I have an icon",
      media: { type: "icon", name: "search" },
      onClick: () => {
        console.log("Item Title 1 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-2",
      label: "I have an image",
      media: { type: "image", src: "//loremflickr.com/300/300/new+york+public+library", alt: "" },
      onClick: () => {
        console.log("Item Title 2 clicked");
      },
    },
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(n.p, {
        children: "Below are examples of different content variations:",
      }),
      `
`,
      e.jsx(s, { of: j }),
      `
`,
      e.jsx(n.h2, {
        id: "menu-highlight-colors",
        children: "Menu Highlight Colors",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The default coloring for highlighting the selected item is grayscale, but the highlight color can be set using the ",
          e.jsx(n.code, { children: "highlightColor" }),
          ` prop.
These colors correspond to the NYPL section colors. These options are displayed below:`,
        ],
      }),
      `
`,
      e.jsx(s, { of: g }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(m, { changelogData: f }),
    ],
  });
}
function T(i = {}) {
  const { wrapper: n } = { ...h(), ...i.components };
  return n ? e.jsx(n, { ...i, children: e.jsx(c, { ...i }) }) : c(i);
}
export { T as default };
