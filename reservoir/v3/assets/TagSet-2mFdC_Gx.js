import {
  u as h,
  j as e,
  M as p,
  L as i,
  bv as x,
  C as s,
  bw as r,
  S as a,
} from "./iframe-D93LbwGv.js";
import { C as j } from "./ComponentChangelogTable-Ck_3mwrR.js";
import {
  T as l,
  E as o,
  F as g,
  a as c,
  b,
} from "./TagSet.stories-DQUZ1_hy.js";
import "./storybookUtils-BmTl87w5.js";
const u = [
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Functionality", "Styles"],
    notes: [
      "Fixes an overflow bug in the `filter` variant when `isDismissible` is false.",
      "Syncs the border colors styles with the VDL.",
    ],
  },
  {
    date: "2025-03-20",
    version: "3.5.5",
    type: "Update",
    affects: ["Documentation", "Accessibility"],
    notes: [
      "Updated the `'filter'` variant to remove button wrapper on each tag when `isDismissible` is false and no `onClick` is passed.",
    ],
  },
  {
    date: "2024-04-25",
    version: "3.1.1",
    type: "Update",
    affects: ["Documentation", "Styles"],
    notes: [
      "Updated the styles for the UI colors, text treatment, and `Clear all` button.",
      'Updated the component category to "Content Display."',
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Allows for more properties in the tag data object and returns the entire data object in the onClick callback.",
      "Chakra 2.8 update.",
    ],
  },
];
function d(n) {
  const t = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...h(),
    ...n.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(p, { of: l }),
      `
`,
      e.jsx(t.h1, { id: "tagset", children: "TagSet" }),
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
                    children: e.jsx(t.code, { children: "1.2.0" }),
                  }),
                ],
              }),
              e.jsxs(t.tr, {
                children: [
                  e.jsx(t.td, { children: "Latest" }),
                  e.jsx(t.td, {
                    children: e.jsx(t.code, { children: "3.6.0" }),
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
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(i, {
                href: "#explore-variant",
                target: "_self",
                children: "Explore Variant",
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
              e.jsx(i, {
                href: "#filter-variant",
                target: "_self",
                children: "Filter Variant",
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
          e.jsxs(t.li, {
            children: [
              `
`,
              e.jsx(i, {
                href: "#examples",
                target: "_self",
                children: "Examples",
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
      e.jsx(t.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsx(x, { of: l }),
      `
`,
      e.jsx(t.h2, { id: "explore-variant", children: "Explore Variant" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          'An "explore" ',
          e.jsx(t.code, { children: "TagSet" }),
          ` variant is used to display content that can help a user
start a search and promote exploration. These tags are not dismissible and
should be used as links to other pages with the content highlighted on the new
page.`,
        ],
      }),
      `
`,
      e.jsx(t.p, { children: "Notes:" }),
      `
`,
      e.jsxs(t.ul, {
        children: [
          `
`,
          e.jsxs(t.li, {
            children: [
              "The ",
              e.jsx(t.code, { children: "isDismissible" }),
              " and ",
              e.jsx(t.code, { children: "onClick" }),
              " props are not used in this variant.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(s, { of: o }),
      `
`,
      e.jsx(r, { of: o }),
      `
`,
      e.jsx(t.h3, {
        id: "tagsetdata-prop-for-explore-variant",
        children: "`tagSetData` Prop for Explore Variant",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "tagSetData" }),
          " prop is an array of objects that contain ",
          e.jsx(t.code, { children: "iconName" }),
          " and ",
          e.jsx(t.code, { children: "label" }),
          `
properties. The `,
          e.jsx(t.code, { children: "iconName" }),
          ` is the name of the icon to display through the
Reservoir `,
          e.jsx(t.code, { children: "Icon" }),
          " component and is optional. The ",
          e.jsx(t.code, { children: "label" }),
          " ",
          e.jsx(t.em, { children: "MUST" }),
          ` be a React
element; typically, links are expected to be used for the "explore" variant.`,
        ],
      }),
      `
`,
      e.jsx(a, {
        code: `
const tagSetData = [
{
  label: (
    <a href="https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/story/components-basic-elements-card--with-controls">
      Card
    </a>
  ),
},
{
  iconName: "fileTypeDoc",
  label: (
    <a href="https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/story/components-page-layout-structuredcontent--controls">
      StructuredContent
    </a>
  ),
},
{
  iconName: "alertWarningOutline",
  label: (
    <a href="https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/story/components-feedback-progressindicator--with-controls">
      ProgressIndicator
    </a>
  ),
},
{
  iconName: "actionSettings",
  label: (
    <a href="https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/docs/hooks-usenyplbreakpoints--docs">
      useNYPLBreakpoints React hook
    </a>
  ),
},
];
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t.h2, { id: "filter-variant", children: "Filter Variant" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          'A "filter" ',
          e.jsx(t.code, { children: "TagSet" }),
          ` variant is used to display keywords the user selected to
filter content on a page. For example, in a search results page, the filter
criteria a user selects would be displayed back to the user through the "filter"
`,
          e.jsx(t.code, { children: "TagSet" }),
          ` variant. These tags can be dismissed by the user and the scope of the
content should be updated accordingly -- but the update to display the proper
filters and updated results are the responsibility of the consuming application.`,
        ],
      }),
      `
`,
      e.jsx(t.p, { children: "Notes:" }),
      `
`,
      e.jsxs(t.ul, {
        children: [
          `
`,
          e.jsxs(t.li, {
            children: [
              "The ",
              e.jsx(t.code, { children: "isDismissible" }),
              " and ",
              e.jsx(t.code, { children: "onClick" }),
              ` props are optional for this variant. However,
when `,
              e.jsx(t.code, { children: "isDismissible" }),
              " is true, the ",
              e.jsx(t.code, { children: "onClick" }),
              " prop is required. The ",
              e.jsx(t.code, { children: "onClick" }),
              `
prop will only fire when `,
              e.jsx(t.code, { children: "isDismissible" }),
              ` is true and the user clicks a tag.
The function will return the entire tag object that was clicked to remove.`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              "Icons will not be rendered when ",
              e.jsx(t.code, { children: "isDismissible" }),
              " is true so the ",
              e.jsx(t.code, { children: "iconName" }),
              `
property will be ignored. In this case, the "X" close icon will be
rendered instead.`,
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              "When the ",
              e.jsx(t.code, { children: "isDismissible" }),
              ` prop is true, a "Clear Filters" button will be
rendered at the end of the list of tags when there are two or more tags.
Clicking this button will also trigger the `,
              e.jsx(t.code, { children: "onClick" }),
              " prop. The ",
              e.jsx(t.code, { children: "onClick" }),
              `
function will return the following object as an argument:
`,
              e.jsx(t.code, {
                children: '{ label: "Clear Filters", id: "clear-filters" }',
              }),
            ],
          }),
          `
`,
          e.jsxs(t.li, {
            children: [
              "When ",
              e.jsx(t.code, { children: "isDismissible" }),
              ` is false, the tags will not render as buttons, since they
have no `,
              e.jsx(t.code, { children: "onClick" }),
              ". In this case, they should be used as a static list of keywords.",
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(t.h3, { id: "dismissible", children: "Dismissible" }),
      `
`,
      e.jsx(s, { of: g }),
      `
`,
      e.jsx(t.h3, { id: "not-dismissible", children: "Not dismissible" }),
      `
`,
      e.jsx(s, { of: c }),
      `
`,
      e.jsx(a, {
        code: `
// Code for the working example above.
const FilterVariantStory = () => {
const [tagSetData, setTagSetData] =
  useState<TagSetFilterDataProps[]>(defaultTagSetData);
const handleOnClick = (tagSet) => {
  if (tagSet.id === "clear-filters") {
    setTagSetData([]);
    return;
  }
  setTagSetData((prevTagSetData) =>
    prevTagSetData.filter((tag) => {
      return tag.id !== tagSet.id;
    })
  );
};
// Just to restart the Storybook example
if (tagSetData.length === 0) {
  return (
    <Button id="reset-tags" onClick={() => setTagSetData(defaultTagSetData)}>
      Reset Tags
    </Button>
  );
}
return (
  <TagSet
    id="tagSet-id-filter"
    isDismissible
    onClick={handleOnClick}
    tagSetData={tagSetData}
    type="filter"
  />
);
};
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(r, { of: c }),
      `
`,
      e.jsx(t.h3, {
        id: "tagsetdata-prop-for-filter-variant",
        children: "`tagSetData` Prop for Filter Variant",
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          "The ",
          e.jsx(t.code, { children: "tagSetData" }),
          " prop is an array of objects that contain ",
          e.jsx(t.code, { children: "iconName" }),
          ", ",
          e.jsx(t.code, { children: "id" }),
          `, and
`,
          e.jsx(t.code, { children: "label" }),
          " properties. The ",
          e.jsx(t.code, { children: "iconName" }),
          ` is the name of the icon to display through
the Reservoir `,
          e.jsx(t.code, { children: "Icon" }),
          " component and is optional. The ",
          e.jsx(t.code, { children: "label" }),
          " ",
          e.jsx(t.em, { children: "MUST" }),
          ` be a string
for the filter type.`,
        ],
      }),
      `
`,
      e.jsx(t.p, {
        children: `Additionally, the data object can take in any additional properties that the
consuming application may need for logic filtering.`,
      }),
      `
`,
      e.jsx(a, {
        code: `
const tagSetData = [
{ iconName: "utilityAccountFilled", label: "Abbey Road", id: "abby-road" },
{ iconName: "actionLaunch", label: "The Beatles", id: "the-beatles" },
{ iconName: "alertWarningOutline", label: "Revolver", id: "revolver" },
{ iconName: "check", label: "Sgt. Pepper's Lonely Hearts Club Band", id: "sgt-pepper" },
];
`,
        language: "tsx",
      }),
      `
`,
      e.jsx(t.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(t.p, {
        children: [
          'All properly implemented tags in the "explore" and "filter" ',
          e.jsx(t.code, { children: "TagSet" }),
          ` variants
are accessible.`,
        ],
      }),
      `
`,
      e.jsx(t.p, {
        children: `For the "explore" variant, tags are expected to be set as links and are
therefore focusable.`,
      }),
      `
`,
      e.jsxs(t.p, {
        children: [
          `For the "filter" variant, tags are rendered as buttons to perform in-page
clicking behavior. When `,
          e.jsx(t.code, { children: "isDismissible" }),
          " is true, the ",
          e.jsx(t.code, { children: "aria-label" }),
          ` attribute is
updated to include `,
          e.jsx(t.code, { children: '", click to remove filter"' }),
          `. For example, for a tag with a
label of `,
          e.jsx(t.code, { children: '"Abbey Road"' }),
          ", the ",
          e.jsx(t.code, { children: "aria-label" }),
          " will be ",
          e.jsx(t.code, { children: '"Abbey Road, click to remove filter"' }),
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
              href: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
              rel: "nofollow",
              children: "W3C WAI-ARIA Button",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(t.h2, { id: "examples", children: "Examples" }),
      `
`,
      e.jsx(s, { of: b }),
      `
`,
      e.jsx(t.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(j, { changelogData: u }),
      `
`,
      e.jsx(t.pre, { children: e.jsx(t.code, {}) }),
    ],
  });
}
function S(n = {}) {
  const { wrapper: t } = { ...h(), ...n.components };
  return t ? e.jsx(t, { ...n, children: e.jsx(d, { ...n }) }) : d(n);
}
export { S as default };
