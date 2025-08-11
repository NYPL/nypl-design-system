import { P as B, aN as j, aO as a, j as e, Z as n } from "./iframe-D93LbwGv.js";
const A = {
    title: "Components/Feedback/SkeletonLoader",
    component: a,
    argTypes: {
      className: { control: !1 },
      contentSize: { table: { defaultValue: { summary: "3" } } },
      headingSize: { table: { defaultValue: { summary: "1" } } },
      imageAspectRatio: {
        control: { type: "radio" },
        options: j,
        table: { defaultValue: { summary: "square" } },
      },
      isBordered: { table: { defaultValue: { summary: "false" } } },
      layout: {
        control: { type: "radio" },
        options: B,
        table: { defaultValue: { summary: "column" } },
      },
      showButton: { table: { defaultValue: { summary: "false" } } },
      showContent: { table: { defaultValue: { summary: "true" } } },
      showHeading: { table: { defaultValue: { summary: "true" } } },
      showImage: { table: { defaultValue: { summary: "true" } } },
      width: { table: { defaultValue: { summary: "100%" } } },
    },
  },
  t = {
    args: {
      className: void 0,
      contentSize: 3,
      headingSize: 1,
      imageAspectRatio: "square",
      isBordered: !1,
      layout: "column",
      showButton: !1,
      showContent: !0,
      showHeading: !0,
      showImage: !0,
      width: "300px",
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36817-23677&t=G4pu0KkGDGyMdjnR-4",
      },
      jest: ["SkeletonLoader.test.tsx"],
    },
  },
  o = {
    render: () =>
      e.jsxs(n, {
        columns: 3,
        children: [
          e.jsx(a, { imageAspectRatio: "landscape", isBordered: !0 }),
          e.jsx(a, { imageAspectRatio: "landscape", isBordered: !0 }),
          e.jsx(a, { imageAspectRatio: "landscape", isBordered: !0 }),
          e.jsx(a, { imageAspectRatio: "landscape", isBordered: !0 }),
          e.jsx(a, { imageAspectRatio: "landscape", isBordered: !0 }),
          e.jsx(a, { imageAspectRatio: "landscape", isBordered: !0 }),
        ],
      }),
  },
  s = {
    render: () =>
      e.jsxs(n, {
        columns: 1,
        children: [
          e.jsx(a, { layout: "row", showImage: !1 }),
          e.jsx(a, { layout: "row", showImage: !1 }),
          e.jsx(a, { layout: "row", showImage: !1 }),
          e.jsx(a, { layout: "row", showImage: !1 }),
          e.jsx(a, { layout: "row", showImage: !1 }),
        ],
      }),
  },
  r = {
    render: () =>
      e.jsxs(n, {
        columns: 1,
        children: [
          e.jsxs(n, {
            columns: 3,
            children: [
              e.jsx(a, {
                contentSize: 2,
                imageAspectRatio: "landscape",
                showButton: !0,
              }),
              e.jsx(a, {
                contentSize: 2,
                imageAspectRatio: "landscape",
                showButton: !0,
              }),
              e.jsx(a, {
                contentSize: 2,
                imageAspectRatio: "landscape",
                showButton: !0,
              }),
            ],
          }),
          e.jsxs(n, {
            columns: 1,
            children: [
              e.jsx(a, {
                contentSize: 4,
                imageAspectRatio: "square",
                layout: "row",
                showButton: !0,
              }),
              e.jsx(a, {
                contentSize: 4,
                imageAspectRatio: "square",
                layout: "row",
                showButton: !0,
              }),
              e.jsx(a, {
                contentSize: 4,
                imageAspectRatio: "square",
                layout: "row",
                showButton: !0,
              }),
            ],
          }),
        ],
      }),
  };
var i, l, d, u, m;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    className: undefined,
    contentSize: 3,
    headingSize: 1,
    imageAspectRatio: "square",
    isBordered: false,
    layout: "column",
    showButton: false,
    showContent: true,
    showHeading: true,
    showImage: true,
    width: "300px"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36817-23677&t=G4pu0KkGDGyMdjnR-4"
    },
    jest: ["SkeletonLoader.test.tsx"]
  }
}`,
      ...((d = (l = t.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : d.source),
    },
    description: {
      story:
        "Main Story for the SkeletonLoader component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((m = (u = t.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : m.description),
    },
  },
};
var c, p, g;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((c = o.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={3}>
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
    </SimpleGrid>
}`,
      ...((g = (p = o.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var S, w, h;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((S = s.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1}>
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
    </SimpleGrid>
}`,
      ...((h = (w = s.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var y, f, x;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((y = r.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1}>
      <SimpleGrid columns={3}>
        <SkeletonLoader contentSize={2} imageAspectRatio="landscape" showButton />
        <SkeletonLoader contentSize={2} imageAspectRatio="landscape" showButton />
        <SkeletonLoader contentSize={2} imageAspectRatio="landscape" showButton />
      </SimpleGrid>
      <SimpleGrid columns={1}>
        <SkeletonLoader contentSize={4} imageAspectRatio="square" layout="row" showButton />
        <SkeletonLoader contentSize={4} imageAspectRatio="square" layout="row" showButton />
        <SkeletonLoader contentSize={4} imageAspectRatio="square" layout="row" showButton />
      </SimpleGrid>
    </SimpleGrid>
}`,
      ...((x = (f = r.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : x.source),
    },
  },
};
const R = ["WithControls", "GridExample", "ListExample", "WithButtons"],
  L = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GridExample: o,
        ListExample: s,
        WithButtons: r,
        WithControls: t,
        __namedExportsOrder: R,
        default: A,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { o as G, s as L, L as S, t as W, r as a };
