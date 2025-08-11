import { aw as j, ax as t, j as e, z as m, Y as c } from "./iframe-D93LbwGv.js";
const v = {
    title: "Components/Navigation/Menu",
    component: t,
    argTypes: {
      className: { control: !1 },
      highlightColor: {
        control: "select",
        options: j,
        defaultValue: { summary: "blogs" },
      },
      id: { control: !1 },
      labelText: { description: "Set menu button text." },
      listAlignment: {
        options: ["left", "right"],
        table: { defaultValue: { summary: "left" } },
      },
      showSelectionAsLabel: {
        control: { type: "boolean" },
        defaultValue: { summary: "false" },
      },
      listItemsData: { control: !1 },
      selectedItem: { description: "Set item id to be selected on open." },
      showBorder: {
        control: { type: "boolean" },
        defaultValue: { summary: "true" },
      },
      showLabel: {
        control: { type: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
  l = [
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
    {
      type: "action",
      id: "item-title-3",
      label: "I'm item 3",
      onClick: () => {
        console.log("Item Title 3 clicked");
      },
    },
  ],
  r = [
    {
      type: "action",
      id: "ascending",
      label: "Ascending",
      onClick: () => {
        console.log("Ascending clicked");
      },
    },
    {
      type: "action",
      id: "descending",
      label: "Descending",
      onClick: () => {
        console.log("Descending clicked");
      },
    },
    {
      type: "action",
      id: "alphabetical",
      label: "Alphabetical",
      onClick: () => {
        console.log("Alphabetical clicked");
      },
    },
  ],
  A = [
    {
      type: "action",
      id: "item-title-1",
      label: "I'm item 1",
      media: { type: "icon", name: "search" },
      onClick: () => {
        console.log("Item Title 1 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-2",
      label: "I'm item 2",
      media: { type: "icon", name: "arrow" },
      onClick: () => {
        console.log("Item Title 2 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-3",
      label: "I'm item 3",
      media: { type: "icon", name: "actionCheckCircle" },
      onClick: () => {
        console.log("Item Title 3 clicked");
      },
    },
  ],
  B = [
    {
      type: "action",
      id: "item-title-1",
      label: "I'm item 1",
      media: { type: "image", src: c("smaller"), alt: "" },
      onClick: () => {
        console.log("Item Title 1 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-2",
      label: "I'm item 2",
      media: { type: "image", src: c("smaller"), alt: "" },
      onClick: () => {
        console.log("Item Title 2 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-3",
      label: "I'm item 3",
      media: { type: "image", src: c("smaller"), alt: "" },
      onClick: () => {
        console.log("Item Title 3 clicked");
      },
    },
  ],
  H = [
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
    {
      type: "group",
      id: "group-2",
      label: "I'm group 2",
      children: [
        {
          type: "action",
          id: "item-title-3",
          label: "I'm item 3",
          onClick: () => {
            console.log("Item Title 3 clicked");
          },
        },
        {
          type: "action",
          id: "item-title-4",
          label: "I'm item 4",
          onClick: () => {
            console.log("Item Title 4 clicked");
          },
        },
      ],
    },
  ],
  O = [
    {
      type: "action",
      id: "item-title-1",
      label: "I'm item 1",
      onClick: () => {
        console.log("Item Title 1 clicked");
      },
    },
    { type: "divider", id: "divider-0" },
    {
      type: "action",
      id: "item-title-2",
      label: "I'm item 2",
      onClick: () => {
        console.log("Item Title 2 clicked");
      },
    },
    { type: "divider", id: "divider-1" },
    {
      type: "action",
      id: "item-title-3",
      label: "I'm item 3",
      onClick: () => {
        console.log("Item Title 3 clicked");
      },
    },
    { type: "divider", id: "divider-2" },
    {
      type: "action",
      id: "item-title-4",
      label: "I'm item 4",
      onClick: () => {
        console.log("Item Title 4 clicked");
      },
    },
  ],
  z = [
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
    {
      type: "group",
      id: "group-2",
      label: "I'm group 2",
      children: [
        {
          type: "action",
          id: "item-title-3",
          label: "I'm item 3",
          onClick: () => {
            console.log("Item Title 3 clicked");
          },
        },
        {
          type: "action",
          id: "item-title-4",
          label: "I'm item 4",
          onClick: () => {
            console.log("Item Title 4 clicked");
          },
        },
      ],
    },
    {
      type: "group",
      id: "group-3",
      label: "I'm group 3",
      children: [
        {
          type: "action",
          id: "item-title-5",
          label: "I'm item 5",
          onClick: () => {
            console.log("Item Title 5 clicked");
          },
        },
        {
          type: "action",
          id: "item-title-6",
          label: "I'm item 6",
          onClick: () => {
            console.log("Item Title 6 clicked");
          },
        },
      ],
    },
    { type: "divider", id: "divider-1" },
    {
      type: "action",
      id: "item-title-7",
      label: "I'm item 7",
      onClick: () => {
        console.log("Item Title 7 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-8",
      label: "I'm item 8",
      onClick: () => {
        console.log("Item Title 8 clicked");
      },
    },
  ],
  N = [
    {
      type: "action",
      id: "item-title-1",
      label: "I'm item 1 and I'm very long, too long even, I should be shorter",
      onClick: () => {
        console.log("Item Title 1 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-2",
      label: "I'm item 2 and I'm also very very long",
      onClick: () => {
        console.log("Item Title 2 clicked");
      },
    },
    {
      type: "action",
      id: "item-title-3",
      label: "I'm item 3",
      onClick: () => {
        console.log("Item Title 3 clicked");
      },
    },
  ],
  i = {
    args: {
      className: void 0,
      highlightColor: "blogs",
      id: "Menu-id",
      labelText: "I'm the menu",
      listAlignment: "left",
      listItemsData: void 0,
      selectedItem: void 0,
      showBorder: !0,
      showLabel: !0,
    },
    render: (d) => e.jsx(t, { ...d, labelText: d.labelText, listItemsData: l }),
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80460%3A101982",
      },
      jest: ["Menu.test.tsx"],
      docs: { story: { height: "170px" } },
    },
  },
  a = {
    render: () =>
      e.jsxs(m, {
        children: [
          e.jsx(t, { labelText: "Default Button", listItemsData: l }),
          e.jsx(t, {
            showBorder: !1,
            labelText: "Text Button",
            listItemsData: l,
          }),
          e.jsx(t, { showLabel: !1, labelText: "Menu", listItemsData: l }),
          e.jsx(t, {
            showBorder: !1,
            labelText: "Menu",
            showLabel: !1,
            listItemsData: l,
          }),
        ],
      }),
    parameters: { docs: { story: { height: "170px" } } },
  },
  s = {
    render: () =>
      e.jsxs(m, {
        children: [
          e.jsx(t, { labelText: "Sort By", listItemsData: r }),
          e.jsx(t, {
            showSelectionAsLabel: !0,
            labelText: "Sort By",
            listItemsData: r,
          }),
          e.jsx(t, {
            showSelectionAsLabel: !0,
            selectedItem: "ascending",
            labelText: "Sort By",
            listItemsData: r,
          }),
        ],
      }),
    parameters: { docs: { story: { height: "200px" } } },
  },
  o = {
    render: () =>
      e.jsxs(m, {
        children: [
          e.jsx(t, { labelText: "I have images", listItemsData: B }),
          e.jsx(t, { labelText: "I have icons", listItemsData: A }),
          e.jsx(t, { labelText: "I have groups", listItemsData: H }),
          e.jsx(t, { labelText: "I have dividers", listItemsData: O }),
          e.jsx(t, { labelText: "I have max height", listItemsData: z }),
          e.jsx(t, { labelText: "I have max width", listItemsData: N }),
        ],
      }),
    parameters: { docs: { story: { height: "350px" } } },
  },
  n = {
    render: () =>
      e.jsxs(m, {
        children: [
          e.jsx(t, {
            labelText: "Blogs (default) ",
            highlightColor: "blogs",
            selectedItem: "item-title-2",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "Research",
            highlightColor: "research",
            selectedItem: "item-title-3",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "Books And More",
            highlightColor: "booksAndMore",
            selectedItem: "item-title-1",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "Education",
            highlightColor: "education",
            selectedItem: "item-title-2",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "Schomburg",
            highlightColor: "researchLibrarySchomburg",
            selectedItem: "item-title-3",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "LPA",
            highlightColor: "researchLibraryLpa",
            selectedItem: "item-title-1",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "Schwarzman",
            highlightColor: "researchLibrarySchwarzman",
            selectedItem: "item-title-2",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "What's On",
            highlightColor: "whatsOn",
            selectedItem: "item-title-3",
            listItemsData: l,
          }),
          e.jsx(t, {
            labelText: "Connect",
            highlightColor: "connect",
            selectedItem: "item-title-1",
            listItemsData: l,
          }),
        ],
      }),
    parameters: { docs: { story: { height: "170px" } } },
  };
var I, h, g, u, p;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((I = i.parameters) == null ? void 0 : I.docs),
    source: {
      originalSource: `{
  args: {
    className: undefined,
    highlightColor: "blogs",
    id: "Menu-id",
    labelText: "I'm the menu",
    listAlignment: "left",
    listItemsData: undefined,
    selectedItem: undefined,
    showBorder: true,
    showLabel: true
  },
  render: (args: any) => <Menu {...args} labelText={args.labelText} listItemsData={defaultListItems} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80460%3A101982"
    },
    jest: ["Menu.test.tsx"],
    docs: {
      story: {
        height: "170px"
      }
    }
  }
}`,
      ...((g = (h = i.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : g.source),
    },
    description: {
      story:
        "Main Story for the Menu component. This must contain the `args`\nand `parameters` properties in this object.",
      ...((p = (u = i.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : p.description),
    },
  },
};
var b, x, y;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((b = a.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => <HStack>
      <Menu labelText={"Default Button"} listItemsData={defaultListItems} />
      <Menu showBorder={false} labelText={"Text Button"} listItemsData={defaultListItems} />
      <Menu showLabel={false} labelText={"Menu"} listItemsData={defaultListItems} />
      <Menu showBorder={false} labelText={"Menu"} showLabel={false} listItemsData={defaultListItems} />
    </HStack>,
  parameters: {
    docs: {
      story: {
        height: "170px"
      }
    }
  }
}`,
      ...((y = (x = a.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : y.source),
    },
  },
};
var T, k, C;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((T = s.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  render: () => <HStack>
      <Menu labelText={"Sort By"} listItemsData={labelListItems} />
      <Menu showSelectionAsLabel labelText={"Sort By"} listItemsData={labelListItems} />
      <Menu showSelectionAsLabel selectedItem="ascending" labelText={"Sort By"} listItemsData={labelListItems} />
    </HStack>,
  parameters: {
    docs: {
      story: {
        height: "200px"
      }
    }
  }
}`,
      ...((C = (k = s.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var L, f, M;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((L = o.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  render: () => <HStack>
      <Menu labelText={"I have images"} listItemsData={imageListItems} />
      <Menu labelText={"I have icons"} listItemsData={iconListItems} />
      <Menu labelText={"I have groups"} listItemsData={groupListItems} />
      <Menu labelText={"I have dividers"} listItemsData={dividerListItems} />
      <Menu labelText={"I have max height"} listItemsData={reallyLongListItems} />
      <Menu labelText={"I have max width"} listItemsData={wideListItems} />
    </HStack>,
  parameters: {
    docs: {
      story: {
        height: "350px"
      }
    }
  }
}`,
      ...((M = (f = o.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : M.source),
    },
  },
};
var D, S, w;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((D = n.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  render: () => <HStack>
      <Menu labelText={"Blogs (default) "} highlightColor={"blogs"} selectedItem={"item-title-2"} listItemsData={defaultListItems} />
      <Menu labelText={"Research"} highlightColor={"research"} selectedItem={"item-title-3"} listItemsData={defaultListItems} />
      <Menu labelText={"Books And More"} highlightColor={"booksAndMore"} selectedItem={"item-title-1"} listItemsData={defaultListItems} />
      <Menu labelText={"Education"} highlightColor={"education"} selectedItem={"item-title-2"} listItemsData={defaultListItems} />
      <Menu labelText={"Schomburg"} highlightColor={"researchLibrarySchomburg"} selectedItem={"item-title-3"} listItemsData={defaultListItems} />
      <Menu labelText={"LPA"} highlightColor={"researchLibraryLpa"} selectedItem={"item-title-1"} listItemsData={defaultListItems} />
      <Menu labelText={"Schwarzman"} highlightColor={"researchLibrarySchwarzman"} selectedItem={"item-title-2"} listItemsData={defaultListItems} />
      <Menu labelText={"What's On"} highlightColor={"whatsOn"} selectedItem={"item-title-3"} listItemsData={defaultListItems} />
      <Menu labelText={"Connect"} highlightColor={"connect"} selectedItem={"item-title-1"} listItemsData={defaultListItems} />
    </HStack>,
  parameters: {
    docs: {
      story: {
        height: "170px"
      }
    }
  }
}`,
      ...((w = (S = n.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : w.source),
    },
  },
};
const _ = [
    "WithControls",
    "MenuTypes",
    "MenuLabel",
    "MenuContent",
    "MenuHighlightColors",
  ],
  W = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        MenuContent: o,
        MenuHighlightColors: n,
        MenuLabel: s,
        MenuTypes: a,
        WithControls: i,
        __namedExportsOrder: _,
        default: v,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { W as M, i as W, a, s as b, o as c, n as d };
