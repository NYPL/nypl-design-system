import {
  p as L,
  q as a,
  j as e,
  L as T,
  V as k,
  a as s,
  H as n,
} from "./iframe-D93LbwGv.js";
const r = [
    { url: "#", text: "Parent" },
    { url: "#", text: "Child" },
    { url: "#", text: "Grandchild" },
  ],
  f = [
    { url: "#", text: "Parent", linkProps: { target: "_top" } },
    { url: "#", text: "Child", linkProps: { target: "_top" } },
    { url: "#", text: "Grandchild", linkProps: { target: "_top" } },
  ],
  v = [
    { url: "#", text: "Parent with a Long Name" },
    { url: "#", text: "Child with an Even Longer Name" },
    { url: "#", text: "Grandchild with an Exceptionally Long Name" },
    {
      url: "#",
      text: "Great-Grandchild with the Longest Name That Will Wrap onto the Second Line of the Breadcrumb Component Under the Right Circumstances",
    },
  ],
  H = {
    title: "Components/Navigation/Breadcrumbs",
    component: a,
    argTypes: {
      breadcrumbsData: { control: !1 },
      customLinkComponent: { control: !1 },
      breadcrumbsType: {
        table: { defaultValue: { summary: "whatsOn" } },
        control: { type: "select" },
        options: L,
      },
      className: { control: !1 },
      id: { control: !1 },
    },
  },
  t = {
    args: {
      breadcrumbsData: r,
      breadcrumbsType: "whatsOn",
      className: void 0,
      customLinkComponent: void 0,
      id: "breadcrumbs-id",
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031",
      },
      jest: ["Breadcrumbs.test.tsx"],
    },
  },
  o = { render: () => e.jsx(a, { breadcrumbsData: v }) },
  d = {
    render: () => e.jsx(a, { customLinkComponent: T, breadcrumbsData: f }),
  },
  c = {
    render: () =>
      e.jsxs(k, {
        align: "stretch",
        spacing: "l",
        children: [
          e.jsxs(s, {
            children: [
              e.jsx(n, { level: "h3", size: "heading6", children: "Blogs" }),
              e.jsx(a, {
                breadcrumbsData: r,
                breadcrumbsType: "blogs",
                customLinkComponent: T,
              }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, {
                level: "h3",
                size: "heading6",
                children: "Books and More",
              }),
              e.jsx(a, { breadcrumbsData: r, breadcrumbsType: "booksAndMore" }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, { level: "h3", size: "heading6", children: "Connect" }),
              e.jsx(a, { breadcrumbsData: r, breadcrumbsType: "connect" }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, {
                level: "h3",
                size: "heading6",
                children: "Digital Collections",
              }),
              e.jsx(a, {
                breadcrumbsData: r,
                breadcrumbsType: "digitalCollections",
              }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, {
                level: "h3",
                size: "heading6",
                children: "Education",
              }),
              e.jsx(a, { breadcrumbsData: r, breadcrumbsType: "education" }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, {
                level: "h3",
                size: "heading6",
                children: "Locations",
              }),
              e.jsx(a, { breadcrumbsData: r, breadcrumbsType: "locations" }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, { level: "h3", size: "heading6", children: "Research" }),
              e.jsx(a, { breadcrumbsData: r, breadcrumbsType: "research" }),
            ],
          }),
          e.jsxs(s, {
            children: [
              e.jsx(n, {
                level: "h3",
                size: "heading6",
                children: "What's On",
              }),
              e.jsx(a, { breadcrumbsData: r, breadcrumbsType: "whatsOn" }),
            ],
          }),
        ],
      }),
  };
var i, l, m, b, u;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    breadcrumbsData,
    breadcrumbsType: "whatsOn",
    className: undefined,
    customLinkComponent: undefined,
    id: "breadcrumbs-id"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031"
    },
    jest: ["Breadcrumbs.test.tsx"]
  }
}`,
      ...((m = (l = t.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : m.source),
    },
    description: {
      story:
        "Main Story for the Accordion component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((u = (b = t.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : u.description),
    },
  },
};
var h, p, g;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((h = o.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `{
  render: () => <Breadcrumbs breadcrumbsData={breadcrumbsLongTextData} />
}`,
      ...((g = (p = o.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var x, B, j;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((x = d.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: () => <Breadcrumbs customLinkComponent={Link} breadcrumbsData={linkPropsBreadcrumbsData} />
}`,
      ...((j = (B = d.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : j.source),
    },
  },
};
var y, C, D;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((y = c.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Blogs
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="blogs" customLinkComponent={Link} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Books and More
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="booksAndMore" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Connect
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="connect" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Digital Collections
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="digitalCollections" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Education
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="education" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Locations
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="locations" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Research
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="research" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          What's On
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="whatsOn" />
      </Box>
    </VStack>
}`,
      ...((D = (C = c.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : D.source),
    },
  },
};
const z = [
    "WithControls",
    "LongText",
    "CustomLinkComponent",
    "ColorVariations",
  ],
  S = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ColorVariations: c,
        CustomLinkComponent: d,
        LongText: o,
        WithControls: t,
        __namedExportsOrder: z,
        default: H,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { S as B, d as C, o as L, t as W, c as a };
