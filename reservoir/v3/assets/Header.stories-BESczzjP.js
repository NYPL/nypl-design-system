import { ah as n, j as e, ai as o } from "./iframe-D93LbwGv.js";
const p = { title: "Components/Temp/Header", component: n, argTypes: {} },
  r = {
    args: {},
    parameters: {},
    render: () =>
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(n, {}),
          e.jsx(o, { pageCount: 10 }),
          e.jsx("h1", { children: "test " }),
        ],
      }),
  };
var t, a, s;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {},
  parameters: {},
  render: () => <>
      <Header />
      <Pagination pageCount={10} />
      <h1>test </h1>
    </>
}`,
      ...((s = (a = r.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : s.source),
    },
  },
};
const i = ["WithControls"],
  m = Object.freeze(
    Object.defineProperty(
      { __proto__: null, WithControls: r, __namedExportsOrder: i, default: p },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { m as H, r as W };
