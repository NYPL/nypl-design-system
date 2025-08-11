import { au as B, L as n, j as e, V as S, I as l } from "./iframe-D93LbwGv.js";
import { a as o } from "./storybookUtils-BmTl87w5.js";
const w = {
    title: "Components/Navigation/Link",
    component: n,
    argTypes: {
      children: { table: { disable: !0 } },
      className: { control: !1 },
      hasVisitedState: o("true"),
      href: { control: { type: "text" } },
      id: { control: !1 },
      isUnderlined: o("true"),
      onClick: { control: !1 },
      ref: { table: { disable: !0 } },
      rel: { control: { type: "text" } },
      screenreaderOnlyText: { control: { type: "text" } },
      target: { control: !1 },
      type: {
        control: { type: "select" },
        options: B,
        table: { defaultValue: { summary: "default" } },
      },
    },
  },
  t = {
    args: {
      children: "Link",
      className: "custom-class",
      hasVisitedState: !0,
      href: "https://nypl.org",
      id: "nypl-link",
      isUnderlined: !0,
      onClick: void 0,
      rel: void 0,
      screenreaderOnlyText: "Screenreader only text",
      target: void 0,
      type: "action",
    },
    render: (s) => e.jsx(n, { ...s, children: s.children }),
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387",
      },
      jest: ["Link.test.tsx"],
    },
  },
  a = {
    render: () =>
      e.jsx(n, {
        type: "external",
        href: "https://nypl.org",
        children: "NYPL Website",
      }),
  },
  r = {
    render: () =>
      e.jsxs(S, {
        spacing: "l",
        align: "flex-start",
        children: [
          e.jsx(n, {
            type: "default",
            href: "#default-link-example",
            children: "Default",
          }),
          e.jsx(n, {
            type: "action",
            href: "#action-link-example",
            children: "Action",
          }),
          e.jsx(n, {
            type: "external",
            href: "#external-link-example",
            children: "External",
          }),
          e.jsx(n, {
            type: "standalone",
            href: "#standalone-link-example",
            children: "Standalone",
          }),
          e.jsx(n, {
            type: "backwards",
            href: "#backwards-link-example",
            children: "Backwards",
          }),
          e.jsx(n, {
            type: "forwards",
            href: "#forwards-link-example",
            children: "Forwards",
          }),
          e.jsx(n, {
            type: "buttonPrimary",
            href: "#buttonPrimary-link-example",
            children: "Button Primary",
          }),
          e.jsx(n, {
            type: "buttonSecondary",
            href: "#buttonSecondary-link-example",
            children: "Button Secondary",
          }),
          e.jsx(n, {
            type: "buttonPill",
            href: "#buttonPill-link-example",
            children: "Button Pill",
          }),
          e.jsx(n, {
            type: "buttonCallout",
            href: "#buttonCallout-link-example",
            children: "Button Callout",
          }),
          e.jsx(n, {
            type: "buttonNoBrand",
            href: "#buttonNoBrand-link-example",
            children: "Button No Brand",
          }),
          e.jsx(n, {
            type: "buttonDisabled",
            href: "#buttonDisabled-link-example",
            children: "Button Disabled",
          }),
          e.jsx(n, {
            type: "button",
            href: "#button-deprecated",
            width: "auto",
            children: "Button (deprecated)",
          }),
        ],
      }),
  },
  i = {
    render: () =>
      e.jsxs(S, {
        spacing: "xs",
        align: "flex-start",
        children: [
          e.jsxs(n, {
            type: "action",
            href: "#headset-icon-example",
            children: [
              e.jsx(l, { name: "headset", align: "left", size: "small" }),
              "Headset Link",
            ],
          }),
          e.jsxs(n, {
            type: "action",
            href: "#clock-icon-example",
            children: [
              e.jsx(l, { name: "clock", align: "left", size: "small" }),
              "Clock Link",
            ],
          }),
          e.jsxs(n, {
            type: "action",
            href: "#action-check-left",
            children: [
              e.jsx(l, { name: "check", align: "left", size: "small" }),
              "Check Link",
            ],
          }),
          e.jsxs(n, {
            type: "action",
            href: "#action-check-right",
            children: [
              "Check Link Right",
              e.jsx(l, { name: "check", align: "right", size: "small" }),
            ],
          }),
        ],
      }),
  };
var c, d, p, k, h;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((c = t.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    children: "Link",
    className: "custom-class",
    hasVisitedState: true,
    href: "https://nypl.org",
    id: "nypl-link",
    isUnderlined: true,
    onClick: undefined,
    rel: undefined,
    screenreaderOnlyText: "Screenreader only text",
    target: undefined,
    type: "action"
  },
  render: (args: any) => <Link {...args}>{args.children}</Link>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387"
    },
    jest: ["Link.test.tsx"]
  }
}`,
      ...((p = (d = t.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : p.source),
    },
    description: {
      story:
        "Main Story for the Link component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((h = (k = t.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : h.description),
    },
  },
};
var m, u, f;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => <Link type="external" href="https://nypl.org">
      NYPL Website
    </Link>
}`,
      ...((f = (u = a.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : f.source),
    },
  },
};
var y, x, L;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((y = r.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <VStack spacing="l" align="flex-start">
      <Link type="default" href="#default-link-example">
        Default
      </Link>
      <Link type="action" href="#action-link-example">
        Action
      </Link>
      <Link type="external" href="#external-link-example">
        External
      </Link>
      <Link type="standalone" href="#standalone-link-example">
        Standalone
      </Link>
      <Link type="backwards" href="#backwards-link-example">
        Backwards
      </Link>
      <Link type="forwards" href="#forwards-link-example">
        Forwards
      </Link>
      <Link type="buttonPrimary" href="#buttonPrimary-link-example">
        Button Primary
      </Link>
      <Link type="buttonSecondary" href="#buttonSecondary-link-example">
        Button Secondary
      </Link>
      <Link type="buttonPill" href="#buttonPill-link-example">
        Button Pill
      </Link>
      <Link type="buttonCallout" href="#buttonCallout-link-example">
        Button Callout
      </Link>
      <Link type="buttonNoBrand" href="#buttonNoBrand-link-example">
        Button No Brand
      </Link>
      <Link type="buttonDisabled" href="#buttonDisabled-link-example">
        Button Disabled
      </Link>
      <Link type="button" href="#button-deprecated" width="auto">
        Button (deprecated)
      </Link>
    </VStack>
}`,
      ...((L = (x = r.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : L.source),
    },
  },
};
var b, g, j;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((b = i.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => <VStack spacing="xs" align="flex-start">
      <Link type="action" href="#headset-icon-example">
        <Icon name="headset" align="left" size="small" />
        Headset Link
      </Link>
      <Link type="action" href="#clock-icon-example">
        <Icon name="clock" align="left" size="small" />
        Clock Link
      </Link>
      <Link type="action" href="#action-check-left">
        <Icon name="check" align="left" size="small" />
        Check Link
      </Link>
      <Link type="action" href="#action-check-right">
        Check Link Right
        <Icon name="check" align="right" size="small" />
      </Link>
    </VStack>
}`,
      ...((j = (g = i.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : j.source),
    },
  },
};
const C = ["WithControls", "Accessibility", "AllLinkTypes", "LinksWithIcons"],
  A = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Accessibility: a,
        AllLinkTypes: r,
        LinksWithIcons: i,
        WithControls: t,
        __namedExportsOrder: C,
        default: w,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { a as A, A as L, t as W, r as a, i as b };
