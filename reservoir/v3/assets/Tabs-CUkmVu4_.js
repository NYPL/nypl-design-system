import {
  u as c,
  j as e,
  M as d,
  L as s,
  bv as b,
  C as a,
  bw as p,
  B as i,
  S as o,
} from "./iframe-D93LbwGv.js";
import {
  T as l,
  W as r,
  E as x,
  C as j,
  U as m,
  a as u,
} from "./Tabs.stories-BtIlIuaG.js";
import { C as f } from "./ComponentChangelogTable-Ck_3mwrR.js";
import "./storybookUtils-BmTl87w5.js";
const g = [
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Uses the explicitly defined `tabs` design tokens for font size and weight.",
    ],
  },
  {
    date: "2025-04-24",
    version: "3.6.1",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates the border color to sync with the VDL."],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Accessibility", "Documentation", "Styles"],
    notes: [
      "Updates mobile view of tabs to be scrollable and arrow buttons updates the active tab",
      "Chakra 2.8 update.",
    ],
  },
  {
    date: "2024-02-05",
    version: "2.1.5",
    type: "Update",
    affects: ["Accessibility", "Documentation"],
    notes: [
      "Updates tab set to be scrollable when the width of the tab set is greater than the viewport",
    ],
  },
];
function h(t) {
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
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { of: l }),
      `
`,
      e.jsx(n.h1, { id: "tabs", children: "Tabs" }),
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
                    children: e.jsx(n.code, { children: "3.6.2" }),
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
                href: "#composing-with-a-data-object",
                target: "_self",
                children: "Composing with a Data Object",
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
                href: "#responsive-mobile-carousel",
                target: "_self",
                children: "Responsive Mobile Carousel",
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
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(s, {
                href: "#callback-event-function",
                target: "_self",
                children: "Callback Event Function",
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
                href: "#url-hash-option",
                target: "_self",
                children: "URL Hash Option",
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
                href: "#children-components",
                target: "_self",
                children: "Children Components",
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
      e.jsx(b, { of: l }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(a, { of: r }),
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
          "Using the DS ",
          e.jsx(n.code, { children: "Tabs" }),
          ` component renders HTML for button tabs and panels that are
associated with each other. In order to simplify the content and reduce
cognitive load for a user, we recommend to not use more than a six (6) button
tabs and panels. Likewise, button tab labels should be clear and concise. Do not
use icons for tab labels.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "Tabs" }),
          ` component is fully accessible through keyboard usage. The initial
focus on the UI is set on the first tab. To move between tabs, use the left and
right key arrows. The `,
          e.jsx(n.code, { children: "home" }),
          ` key can be used to navigate to the first tab and
the `,
          e.jsx(n.code, { children: "end" }),
          ` key can be used to navigate to the last tab. To move from a tab to its
panel, use the `,
          e.jsx(n.code, { children: "tab" }),
          " key. Likewise, use the ",
          e.jsx(n.code, { children: "tab + shift" }),
          ` key combination to
move from the panel to its tab. A user cannot navigate between panels; they must
navigate through the tabs.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This ",
          e.jsx(n.code, { children: "Tabs" }),
          ` component is implemented with Chakra UI and this library handles the
appropriate `,
          e.jsx(n.code, { children: "aria-selected" }),
          " and ",
          e.jsx(n.code, { children: "aria-controls" }),
          ` attributes for the tabs, the
related `,
          e.jsx(n.code, { children: "aria-labelledby" }),
          " and ",
          e.jsx(n.code, { children: "id" }),
          " attributes for the panels, and the ",
          e.jsx(n.code, { children: "tablist" }),
          `,
`,
          e.jsx(n.code, { children: "tab" }),
          ", and ",
          e.jsx(n.code, { children: "tabpanel" }),
          " roles for the relevant HTML elements.",
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: "mobile-carousel", children: "Mobile Carousel" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "When viewing the ",
          e.jsx(n.code, { children: "Tabs" }),
          ` component on a narrow screen, an additional carousel
interface is wrapped around the button tabs. "Next" and "Previous" arrow buttons
changes the active tab by moving the same direction as the arrow, but all initial
functionality for the `,
          e.jsx(n.code, { children: "Tabs" }),
          " component doesn't change.",
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
              href: "https://inclusive-components.design/tabbed-interfaces/",
              rel: "nofollow",
              children: "Inclusive Design Tabbed Interfaces",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html",
              rel: "nofollow",
              children: "W3C WAI Example of Tabs with Automatic Activation",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://chakra-ui.com/docs/components/disclosure/tabs",
              rel: "nofollow",
              children: "Chakra UI Tabs",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "composing-with-a-data-object",
        children: "Composing with a Data Object",
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.em, {
          children: "Note: this is the recommended approach.",
        }),
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              "It is recommended to use the ",
              e.jsx(n.code, { children: "tabsData" }),
              ` prop to populate the component. This
ensures the consumer passes well-formed data and always generate the correct
DOM.`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "Tabs" }),
              " component will map through the ",
              e.jsx(n.code, { children: "tabsData" }),
              ` array and generate the
appropriate components needed for the layout.`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "Tabs" }),
              " component will add the carousel feature for the mobile view.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(i, {
        content: e.jsxs(e.Fragment, {
          children: [
            e.jsx(n.strong, { children: "IMPORTANT:" }),
            " HTML is allowed in the ",
            e.jsx(n.code, { children: "content" }),
            " ",
            "property in each object as part of a string or as straight HTML.",
          ],
        }),
        type: "informative",
      }),
      `
`,
      e.jsx(o, {
        code: `
import { Tabs } from "@nypl/design-system-react-components";
const animalCrossingData = [
{
  label: "Tom Nook",
  content: (
    <p>
      Tom Nook, <b>known in Japan as Tanukichi</b>, is a...
    </p>
  ),
},
{
  label: "Isabelle",
  content: "Isabelle, known as Shizue in Japan, is a fictional ...",
},
{
  label: "K.K. Slider",
  content:
    "<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is ...",
},
{
  label: "Mr. Resetti",
  content:
    "<strong>Mr. Resetti</strong>, full name Sonny Resetti, is a ...",
},
{
  label: "Zucker",
  content:
    "<strong>Zucker</strong> is a lazy octopus villager who first ...",
},
];

<Tabs tabsData={animalCrossingData} />; `,
        language: "tsx",
      }),
      `
`,
      e.jsx(n.h2, {
        id: "responsive-mobile-carousel",
        children: "Responsive Mobile Carousel",
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              "For mobile viewports, the ",
              e.jsx(n.code, { children: "Tabs" }),
              " component will generate a carousel feature.",
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The carousel feature adds ",
              e.jsx(n.code, { children: '"previous"' }),
              " and ",
              e.jsx(n.code, { children: '"next"' }),
              ` buttons that can be used to scroll through
all tabs while the panel stays static.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: `To view and test this in Storybook, go to the "Canvas" tab and change the
viewport in the Storybook toolbar at the top of the page.`,
      }),
      `
`,
      e.jsx(n.h2, {
        id: "horizontal-scrolling",
        children: "Horizontal Scrolling",
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: `When the width of the full tab set is greater than the available horizontal
space, the overflow will be hidden and horizontal scrolling will be enabled.`,
          }),
          `
`,
          e.jsx(n.li, {
            children:
              "This functionality is the same for desktop, tablet, and mobile.",
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `Horizontal scrolling can be accomplished by using the trackpad, the
`,
              e.jsx(n.code, { children: "shift + scroll wheel" }),
              ` combination, or the keyboard to tab through the available
tabs.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(a, { of: x }),
      `
`,
      e.jsx(n.h2, {
        id: "callback-event-function",
        children: "Callback Event Function",
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              `The index (0-based) of the current tab will be returned to an event handler
passed via the `,
              e.jsx(n.code, { children: "onChange" }),
              " prop.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
export const onChange = (value) => {
window.alert(\`Tab index selected was \${value}\`);
};
<Tabs tabsData={animalCrossing} onChange={onChange} />;
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(a, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "url-hash-option", children: "URL Hash Option" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              "Set the ",
              e.jsx(n.code, { children: "useHash" }),
              ` prop to true to have selected tabs update the URL with a
hash value.`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(a, { of: m }),
      `
`,
      e.jsx(n.h2, {
        id: "children-components",
        children: "Children Components",
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.em, {
          children: "Note: not recommended but available.",
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "There are five components that make up the Design System ",
          e.jsx(n.code, { children: "Tabs" }),
          " component:",
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "Tabs" }) }),
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "TabList" }) }),
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "Tab" }) }),
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "TabPanels" }) }),
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "TabPanel" }) }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.p, { children: "DOM structure:" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "Tabs" }),
              " component only takes ",
              e.jsx(n.code, { children: "TabList" }),
              " and ",
              e.jsx(n.code, { children: "TabPanels" }),
              " as children.",
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "TabList" }),
              " component only takes ",
              e.jsx(n.code, { children: "Tab" }),
              " components as children.",
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              "The ",
              e.jsx(n.code, { children: "TabPanels" }),
              " component only take ",
              e.jsx(n.code, { children: "TabPanel" }),
              " component as children.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "While you can compose the ",
          e.jsx(n.code, { children: "Tabs" }),
          ` components with these available components, you
will probably have to iterate or map through an array to get the desired
outcome. The `,
          e.jsx(n.code, { children: "Tabs" }),
          " component does this internally when using the ",
          e.jsx(n.code, { children: "tabsData" }),
          `
prop, so using the child components method should be a last resort option.`,
        ],
      }),
      `
`,
      e.jsx(n.p, { children: "Make sure that:" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: "all five components are imported to use this approach.",
          }),
          `
`,
          e.jsx(n.li, {
            children: `the structure follows the example below for the mobile carousel to render
properly.`,
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(i, {
        content: e.jsxs(e.Fragment, {
          children: [
            e.jsx(n.strong, { children: "IMPORTANT:" }),
            " For the children component approach, the",
            " ",
            e.jsx(n.code, { children: "Tabs" }),
            " component expects a ",
            e.jsx(n.code, { children: "TabList" }),
            " component to be passed or else the mobile carousel will ",
            e.jsx(n.strong, { children: "not" }),
            " be built.",
          ],
        }),
        type: "informative",
      }),
      `
`,
      e.jsx(o, {
        code: `
import {
Tabs,
TabList,
Tab,
TabPanels,
TabPanel,
} from "@nypl/design-system-react-components";
<Tabs>
<TabList>
  <Tab>Tom Nook</Tab>
  <Tab>Isabelle</Tab>
  <Tab>K.K. Slider</Tab>
  <Tab>Mr. Resetti</Tab>
  <Tab>Zucker</Tab>
</TabList>
<TabPanels>
  <TabPanel>
    <p>
      Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
      character in the Animal Crossing series who operates the village
      store.
    </p>
  </TabPanel>
  <TabPanel>
    Isabelle, known as Shizue in Japan, is a fictional character from the
    Animal Crossing series of video games. She is a kindly Shih Tzu that
    debuted in the 2012 release Animal Crossing: New Leaf, where she
    serves as the secretary to the player character.
  </TabPanel>
  <TabPanel>
    <p>
      Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a
      fictional character within the Animal Crossing franchise. One of the
      franchise's most popular characters, he debuted in the title Animal
      Crossing, and has appeared in every installment since.
    </p>
  </TabPanel>
  <TabPanel>
    <strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional
    character from the Animal Crossing series of video games by Nintendo.
    His first appearance was in the Nintendo 64 game Dōbutsu no Mori,
    released in Europe and North America on the GameCube as Animal
    Crossing.
  </TabPanel>
  <TabPanel>
    <strong>Zucker</strong> is a lazy octopus villager who first appeared
    in New Leaf. His Japanese name and general appearance refers to the
    Japanese snack takoyaki, which is a fried ball of dough commonly
    filled with minced octopus. His catchphrase is a reference to how he
    is an underwater animal. He has the same initial phrase as Bertha. He
    has the nature hobby.
  </TabPanel>
</TabPanels>
</Tabs>
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(a, { of: u }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(f, { changelogData: g }),
    ],
  });
}
function k(t = {}) {
  const { wrapper: n } = { ...c(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(h, { ...t }) }) : h(t);
}
export { k as default };
