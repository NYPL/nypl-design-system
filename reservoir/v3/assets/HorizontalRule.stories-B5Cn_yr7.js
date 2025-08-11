import { ag as r } from "./iframe-D93LbwGv.js";
const i = {
    title: "Components/Page Layout/HorizontalRule",
    component: r,
    argTypes: { className: { control: !1 } },
  },
  e = {
    args: { align: void 0, className: void 0 },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36818-25303&t=R7gWIzMTzUAGN7Sw-4",
      },
      jest: "HorizontalRule.test.tsx",
    },
  };
var t, o, n, a, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((t = e.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    align: undefined,
    className: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36818-25303&t=R7gWIzMTzUAGN7Sw-4"
    },
    jest: "HorizontalRule.test.tsx"
  }
}`,
      ...((n = (o = e.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : n.source),
    },
    description: {
      story:
        "Main Story for the HorizontalRule component. This must contains the `args`\n and `parameters` properties in this object.",
      ...((s = (a = e.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : s.description),
    },
  },
};
const l = ["WithControls"],
  d = Object.freeze(
    Object.defineProperty(
      { __proto__: null, WithControls: e, __namedExportsOrder: l, default: i },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { d as H, e as W };
