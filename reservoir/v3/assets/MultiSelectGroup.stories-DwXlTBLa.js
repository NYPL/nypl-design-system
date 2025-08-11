import {
  aA as k,
  P as N,
  a5 as c,
  j as n,
  r as M,
  a7 as p,
  V as I,
} from "./iframe-D93LbwGv.js";
import { u as y } from "./useMultiSelect-amaASZqv.js";
const { action: f } = __STORYBOOK_MODULE_ACTIONS__,
  u = [
    {
      id: "colors",
      name: "Colors",
      items: [
        { id: "red", name: "Red" },
        { id: "blue", name: "Blue" },
        { id: "yellow", name: "Yellow" },
      ],
    },
    {
      id: "pets",
      name: "Pets",
      items: [
        { id: "cat", name: "Cat" },
        {
          id: "dog",
          name: "Dog",
          children: [
            { id: "corgy", name: "Corgy" },
            { id: "german-sheperd", name: "German Sheperd" },
            { id: "afghan-hound", name: "Afghan Hound" },
          ],
        },
        { id: "rat", name: "Rat" },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      items: [
        { id: "hammer", name: "Hammer" },
        {
          id: "skrewdriver",
          name: "Skrewdriver",
          children: [
            { id: "slottet", name: "Slotted Skrewdriver" },
            { id: "phillips", name: "Phillips Skrewdriver" },
            { id: "allen", name: "Allen Skrewdriver" },
          ],
        },
        { id: "whisk", name: "Whisk" },
      ],
    },
  ],
  g = 5,
  v = (i) => {
    const {
        onChange: s,
        onMixedStateChange: d,
        onClear: l,
        selectedItems: t,
      } = y(),
      [r, e] = M.useState("");
    return (
      M.useEffect(() => {
        Object.keys(t).length !== 0 && f(r)(t), r === "onClear" && f(r)(t);
      }, [r, t]),
      n.jsx(c, {
        ...i,
        renderMultiSelect: ({ isBlockElement: a, multiSelectWidth: S }) =>
          u &&
          u.map((o) =>
            n.jsx(
              p,
              {
                buttonText: "MultiSelect",
                defaultItemsVisible: g,
                id: o.id,
                isBlockElement: a,
                items: o.items,
                onChange: (m) => {
                  s(m.target.id, o.id), e("onChange");
                },
                onMixedStateChange: (m) => {
                  d(m.target.id, o.id, o.items), e("onMixedStateChange");
                },
                onClear: () => {
                  l(o.id), e("onClear");
                },
                selectedItems: t,
                width: S,
              },
              o.id
            )
          ),
      })
    );
  },
  B = (i) => {
    const {
        onChange: s,
        onMixedStateChange: d,
        onClear: l,
        selectedItems: t,
      } = y(),
      [r, e] = M.useState("");
    return (
      M.useEffect(() => {
        Object.keys(t).length !== 0 && f(r)(t), r === "onClear" && f(r)(t);
      }, [r, t]),
      n.jsx(c, {
        ...i,
        renderMultiSelect: ({ isBlockElement: a, multiSelectWidth: S }) =>
          u &&
          u.map((o) =>
            n.jsx(
              p,
              {
                buttonText: "MultiSelect",
                closeOnBlur: !0,
                defaultItemsVisible: g,
                id: o.id,
                isBlockElement: a,
                items: o.items,
                onChange: (m) => {
                  s(m.target.id, o.id), e("onChange");
                },
                onMixedStateChange: (m) => {
                  d(m.target.id, o.id, o.items), e("onMixedStateChange");
                },
                onClear: () => {
                  l(o.id), e("onClear");
                },
                selectedItems: t,
                width: S,
              },
              o.id
            )
          ),
      })
    );
  },
  E = () => {
    const {
      onChange: i,
      onMixedStateChange: s,
      onClear: d,
      selectedItems: l,
    } = y();
    return n.jsxs(I, {
      align: "stretch",
      spacing: "s",
      children: [
        n.jsx(c, {
          id: "row",
          labelText: "Row (default) & multiSelectWidth='fitContent'",
          showLabel: !0,
          layout: "row",
          multiSelectWidth: "fitContent",
          renderMultiSelect: ({ isBlockElement: t, multiSelectWidth: r }) =>
            u.map((e) =>
              n.jsx(
                p,
                {
                  buttonText: "MultiSelect",
                  defaultItemsVisible: g,
                  id: e.id,
                  isBlockElement: t,
                  items: e.items,
                  onChange: (a) => {
                    i(a.target.id, e.id);
                  },
                  onMixedStateChange: (a) => {
                    s(a.target.id, e.id, e.items);
                  },
                  onClear: () => {
                    d(e.id), f("onClear")({});
                  },
                  selectedItems: l,
                  width: r,
                },
                e.id
              )
            ),
        }),
        n.jsx(c, {
          showLabel: !0,
          id: "column",
          layout: "column",
          labelText: "Column & multiSelectWidth='fitContent'",
          multiSelectWidth: "fitContent",
          renderMultiSelect: ({ isBlockElement: t, multiSelectWidth: r }) =>
            u.map((e) =>
              n.jsx(
                p,
                {
                  buttonText: "MultiSelect",
                  defaultItemsVisible: g,
                  id: `${e.id}-1`,
                  isBlockElement: t,
                  items: e.items,
                  onChange: (a) => {
                    i(a.target.id, `${e.id}-1`);
                  },
                  onMixedStateChange: (a) => {
                    s(a.target.id, `${e.id}-1`, e.items);
                  },
                  onClear: () => {
                    d(`${e.id}-1`);
                  },
                  selectedItems: l,
                  width: r,
                },
                `${e.id}-1`
              )
            ),
        }),
        n.jsx(c, {
          showLabel: !0,
          id: "row-full",
          layout: "row",
          labelText: "Row (default) & multiSelectWidth='full' (default)",
          multiSelectWidth: "full",
          renderMultiSelect: ({ isBlockElement: t, multiSelectWidth: r }) =>
            u.map((e) =>
              n.jsx(
                p,
                {
                  buttonText: "MultiSelect",
                  defaultItemsVisible: g,
                  id: `${e.id}-2`,
                  isBlockElement: t,
                  items: e.items,
                  onChange: (a) => {
                    i(a.target.id, `${e.id}-2`);
                  },
                  onMixedStateChange: (a) => {
                    s(a.target.id, `${e.id}-2`, e.items);
                  },
                  onClear: () => {
                    d(`${e.id}-2`);
                  },
                  selectedItems: l,
                  width: r,
                },
                `${e.id}-2`
              )
            ),
        }),
        n.jsx(c, {
          showLabel: !0,
          id: "column-full",
          layout: "column",
          labelText: "Column & multiSelectWidth='full' (default)",
          multiSelectWidth: "full",
          renderMultiSelect: ({ isBlockElement: t, multiSelectWidth: r }) =>
            u.map((e) =>
              n.jsx(
                p,
                {
                  buttonText: "MultiSelect",
                  defaultItemsVisible: g,
                  id: `${e.id}-3`,
                  isBlockElement: t,
                  items: e.items,
                  onChange: (a) => {
                    i(a.target.id, `${e.id}-3`);
                  },
                  onMixedStateChange: (a) =>
                    s(a.target.id, `${e.id}-3`, e.items),
                  onClear: () => {
                    d(`${e.id}-3`);
                  },
                  selectedItems: l,
                  width: r,
                },
                `${e.id}-3`
              )
            ),
        }),
      ],
    });
  },
  P = {
    title: "Components/Form Elements/MultiSelectGroup",
    component: c,
    argTypes: {
      className: { control: !1 },
      id: { control: !1 },
      layout: {
        control: { type: "radio" },
        options: N,
        table: { defaultValue: { summary: "row" } },
      },
      multiSelectWidth: {
        control: { type: "radio" },
        options: k,
        table: { defaultValue: { summary: "default" } },
      },
      showLabel: { table: { defaultValue: { summary: "true" } } },
    },
  },
  h = {
    args: {
      className: void 0,
      id: "multiselect-group",
      labelText: "Label Text",
      layout: "row",
      multiSelectWidth: "fitContent",
      showLabel: !0,
    },
    render: (i) => n.jsx(v, { ...i }),
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611",
      },
      jest: ["MultiSelectGroup.test.tsx"],
    },
  },
  C = {
    render: () =>
      n.jsx(B, { id: "multiselect-group", labelText: "Label Text" }),
  },
  x = { render: (i) => n.jsx(E, {}) };
var b, w, j, T, W;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((b = h.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    className: undefined,
    id: "multiselect-group",
    labelText: "Label Text",
    layout: "row",
    multiSelectWidth: "fitContent",
    showLabel: true
  },
  render: args => <MultiSelectGroupStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"
    },
    jest: ["MultiSelectGroup.test.tsx"]
  }
}`,
      ...((j = (w = h.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : j.source),
    },
    description: {
      story:
        "Main Stories for the MultiSelectGroup component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((W = (T = h.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : W.description),
    },
  },
};
var L, O, $;
C.parameters = {
  ...C.parameters,
  docs: {
    ...((L = C.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  render: () => <MultiSelectGroupWithCloseOnBlurStory id="multiselect-group" labelText="Label Text" />
}`,
      ...(($ = (O = C.parameters) == null ? void 0 : O.docs) == null
        ? void 0
        : $.source),
    },
  },
};
var _, G, A;
x.parameters = {
  ...x.parameters,
  docs: {
    ...((_ = x.parameters) == null ? void 0 : _.docs),
    source: {
      originalSource: `{
  render: _args => <MultiSelectGroupLayoutStory />
}`,
      ...((A = (G = x.parameters) == null ? void 0 : G.docs) == null
        ? void 0
        : A.source),
    },
  },
};
const R = ["WithControls", "closeOnBlurState", "LayoutPatterns"],
  F = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        LayoutPatterns: x,
        WithControls: h,
        __namedExportsOrder: R,
        closeOnBlurState: C,
        default: P,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { x as L, F as M, h as W, C as c };
