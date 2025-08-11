import {
  aj as K,
  ak as Q,
  H as i,
  j as e,
  V as n,
  L as x,
} from "./iframe-D93LbwGv.js";
import { a as u } from "./storybookUtils-BmTl87w5.js";
const X = {
    title: "Components/Typography & Styles/Heading",
    component: i,
    argTypes: {
      className: { control: !1 },
      id: { control: !1 },
      isCapitalized: u(),
      isUppercase: u(),
      isLowercase: u(),
      level: {
        control: { type: "select" },
        options: Q,
        table: { defaultValue: { summary: "h2" } },
      },
      noSpace: { table: { defaultValue: { summary: "false" } } },
      overline: { control: { type: "text" } },
      size: { control: { type: "select" }, options: K },
      subtitle: { control: { type: "text" } },
      text: { control: { type: "text" } },
      url: { control: { type: "text" } },
      urlClass: { control: !1 },
    },
  },
  t = {
    args: {
      className: void 0,
      id: "heading-id",
      isCapitalized: !1,
      isUppercase: !1,
      isLowercase: !1,
      level: "h2",
      noSpace: !0,
      overline: void 0,
      size: void 0,
      subtitle: void 0,
      text: "Default Heading",
      url: void 0,
      urlClass: void 0,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16",
      },
      jest: ["Heading.test.tsx"],
    },
    render: (m) =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, { ...m }),
          e.jsx(i, { ...m, color: "brand.primary" }),
          e.jsx(i, {
            ...m,
            bgColor: "brand.primary",
            color: "ui.typography.inverse.heading",
            px: "s",
            py: "xs",
          }),
        ],
      }),
  },
  a = {
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-h1",
            level: "h1",
            noSpace: !0,
            text: "(h1) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-h2",
            level: "h2",
            text: "(h2) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-h3",
            level: "h3",
            text: "(h3) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-h4",
            level: "h4",
            text: "(h4) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-h5",
            level: "h5",
            text: "(h5) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-h6",
            level: "h6",
            text: "(h6) Lorem ipsum dolor",
          }),
        ],
      }),
  },
  l = {
    name: "Sizes",
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-display1",
            level: "h1",
            noSpace: !0,
            size: "display1",
            text: "(display1) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading1",
            level: "h1",
            size: "heading1",
            text: "(heading1) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading2",
            level: "h1",
            size: "heading2",
            text: "(heading2) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading3",
            level: "h1",
            size: "heading3",
            text: "(heading3) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading4",
            level: "h1",
            size: "heading4",
            text: "(heading4) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading5",
            level: "h1",
            size: "heading5",
            text: "(heading5) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading6",
            level: "h1",
            size: "heading6",
            text: "(heading6) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading7",
            level: "h1",
            size: "heading7",
            text: "(heading7) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading8",
            level: "h1",
            size: "heading8",
            text: "(heading8) Lorem ipsum dolor",
          }),
        ],
      }),
  },
  d = {
    name: "Deprecated Styles",
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-one",
            level: "one",
            noSpace: !0,
            text: "(one) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-two",
            level: "two",
            text: "(two) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-three",
            level: "three",
            text: "(three) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-four",
            level: "four",
            text: "(four) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-five",
            level: "five",
            text: "(five) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-six",
            color: "inheret",
            level: "six",
            text: "(six) Lorem ipsum dolor",
          }),
        ],
      }),
  },
  s = {
    name: "Deprecated Sizes",
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-primary",
            level: "one",
            noSpace: !0,
            size: "primary",
            text: "(primary) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-secondary",
            level: "one",
            size: "secondary",
            text: "(secondary) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-tertiary",
            level: "one",
            size: "tertiary",
            text: "(tertiary) Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-callout",
            level: "one",
            size: "callout",
            text: "(callout) Lorem ipsum dolor",
          }),
        ],
      }),
  },
  o = {
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-display1",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "display1",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading1",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading1",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading2",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading2",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading3",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading3",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading4",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading4",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading5",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading5",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading6",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading6",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading7",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading7",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading8",
            level: "h1",
            noSpace: !0,
            overline: "Overline",
            size: "heading8",
            text: "Lorem ipsum dolor",
          }),
        ],
      }),
  },
  r = {
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-display1",
            level: "h1",
            noSpace: !0,
            size: "display1",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading1",
            level: "h1",
            noSpace: !0,
            size: "heading1",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading2",
            level: "h1",
            noSpace: !0,
            size: "heading2",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading3",
            level: "h1",
            noSpace: !0,
            size: "heading3",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading4",
            level: "h1",
            noSpace: !0,
            size: "heading4",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading5",
            level: "h1",
            noSpace: !0,
            size: "heading5",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading6",
            level: "h1",
            noSpace: !0,
            size: "heading6",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading7",
            level: "h1",
            noSpace: !0,
            size: "heading7",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading8",
            level: "h1",
            noSpace: !0,
            size: "heading8",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
        ],
      }),
  },
  h = {
    name: "Overline and Subtitle",
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-display1",
            level: "h1",
            overline: "Overline",
            size: "display1",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading1",
            level: "h1",
            overline: "Overline",
            size: "heading1",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading2",
            level: "h1",
            overline: "Overline",
            size: "heading2",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading3",
            level: "h1",
            overline: "Overline",
            size: "heading3",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading4",
            level: "h1",
            overline: "Overline",
            size: "heading4",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading5",
            level: "h1",
            overline: "Overline",
            size: "heading5",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading6",
            level: "h1",
            overline: "Overline",
            size: "heading6",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading7",
            level: "h1",
            overline: "Overline",
            size: "heading7",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
          e.jsx(i, {
            id: "heading-heading8",
            level: "h1",
            overline: "Overline",
            size: "heading8",
            subtitle: "The subtitle text sits below the main heading text.",
            text: "Lorem ipsum dolor",
          }),
        ],
      }),
  },
  g = {
    render: () =>
      e.jsx(i, {
        id: "headingWithBold",
        level: "h2",
        noSpace: !0,
        children: e.jsxs(e.Fragment, {
          children: [
            "Heading with a ",
            e.jsx("b", { children: "Bold" }),
            " Word",
          ],
        }),
      }),
  },
  p = {
    name: "Links",
    render: () =>
      e.jsxs(n, {
        align: "left",
        spacing: "l",
        children: [
          e.jsx(i, {
            id: "heading-with-text-url-values",
            level: "h3",
            noSpace: !0,
            text: "Heading with `url` and `text` props",
            url: "http://apple.com",
            urlClass: "special-link",
          }),
          e.jsx(i, {
            id: "heading-with-link-url",
            level: "h3",
            noSpace: !0,
            url: "http://apple.com",
            urlClass: "special-link",
            children: "Heading with `url` prop value",
          }),
          e.jsx(i, {
            id: "heading-with-anchor",
            level: "h3",
            noSpace: !0,
            children: e.jsx("a", {
              href: "#hello",
              children: "Link from HTML anchor element",
            }),
          }),
          e.jsx(i, {
            id: "heading-with-DS-link",
            level: "h3",
            noSpace: !0,
            children: e.jsx(x, {
              href: "#hello",
              children: "Link using DS `Link` component",
            }),
          }),
          e.jsx(i, {
            id: "heading-with-link-child",
            level: "h3",
            noSpace: !0,
            children: e.jsxs(e.Fragment, {
              children: [
                "Not acceptable. Do not use. ",
                e.jsx("a", { href: "#hello", children: "Link" }),
              ],
            }),
          }),
          e.jsx(i, {
            id: "heading-with-DS-link-child",
            level: "h3",
            noSpace: !0,
            children: e.jsxs(e.Fragment, {
              children: [
                e.jsx("span", { children: "Text wrapped in a span " }),
                e.jsx(x, { href: "#hello", children: "Link" }),
                e.jsx("span", { children: " Not a recommended pattern" }),
              ],
            }),
          }),
        ],
      }),
  };
var c, v, b, L, S;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((c = t.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    className: undefined,
    id: "heading-id",
    isCapitalized: false,
    isUppercase: false,
    isLowercase: false,
    level: "h2",
    noSpace: true,
    overline: undefined,
    size: undefined,
    subtitle: undefined,
    text: "Default Heading",
    url: undefined,
    urlClass: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16"
    },
    jest: ["Heading.test.tsx"]
  },
  render: args => <VStack align="left" spacing="l">
      <Heading {...args} />
      <Heading {...args} color="brand.primary" />
      <Heading {...args} bgColor="brand.primary" color="ui.typography.inverse.heading" px="s" py="xs" />
    </VStack>
}`,
      ...((b = (v = t.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : b.source),
    },
    description: {
      story:
        "Main Story for the Heading component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((S = (L = t.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : S.description),
    },
  },
};
var z, j, H;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((z = a.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-h1" level="h1" noSpace text="(h1) Lorem ipsum dolor" />
      <Heading id="heading-h2" level="h2" text="(h2) Lorem ipsum dolor" />
      <Heading id="heading-h3" level="h3" text="(h3) Lorem ipsum dolor" />
      <Heading id="heading-h4" level="h4" text="(h4) Lorem ipsum dolor" />
      <Heading id="heading-h5" level="h5" text="(h5) Lorem ipsum dolor" />
      <Heading id="heading-h6" level="h6" text="(h6) Lorem ipsum dolor" />
    </VStack>
}`,
      ...((H = (j = a.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : H.source),
    },
  },
};
var y, f, w;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((y = l.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  name: "Sizes",
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-display1" level="h1" noSpace size="display1" text="(display1) Lorem ipsum dolor" />
      <Heading id="heading-heading1" level="h1" size="heading1" text="(heading1) Lorem ipsum dolor" />
      <Heading id="heading-heading2" level="h1" size="heading2" text="(heading2) Lorem ipsum dolor" />
      <Heading id="heading-heading3" level="h1" size="heading3" text="(heading3) Lorem ipsum dolor" />
      <Heading id="heading-heading4" level="h1" size="heading4" text="(heading4) Lorem ipsum dolor" />
      <Heading id="heading-heading5" level="h1" size="heading5" text="(heading5) Lorem ipsum dolor" />
      <Heading id="heading-heading6" level="h1" size="heading6" text="(heading6) Lorem ipsum dolor" />
      <Heading id="heading-heading7" level="h1" size="heading7" text="(heading7) Lorem ipsum dolor" />
      <Heading id="heading-heading8" level="h1" size="heading8" text="(heading8) Lorem ipsum dolor" />
    </VStack>
}`,
      ...((w = (f = l.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var k, T, O;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((k = d.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  name: "Deprecated Styles",
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-one" level="one" noSpace text="(one) Lorem ipsum dolor" />
      <Heading id="heading-two" level="two" text="(two) Lorem ipsum dolor" />
      <Heading id="heading-three" level="three" text="(three) Lorem ipsum dolor" />
      <Heading id="heading-four" level="four" text="(four) Lorem ipsum dolor" />
      <Heading id="heading-five" level="five" text="(five) Lorem ipsum dolor" />
      <Heading id="heading-six" color="inheret" level="six" text="(six) Lorem ipsum dolor" />
    </VStack>
}`,
      ...((O = (T = d.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : O.source),
    },
  },
};
var D, V, C;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((D = s.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  name: "Deprecated Sizes",
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-primary" level="one" noSpace size="primary" text="(primary) Lorem ipsum dolor" />
      <Heading id="heading-secondary" level="one" size="secondary" text="(secondary) Lorem ipsum dolor" />
      <Heading id="heading-tertiary" level="one" size="tertiary" text="(tertiary) Lorem ipsum dolor" />
      <Heading id="heading-callout" level="one" size="callout" text="(callout) Lorem ipsum dolor" />
    </VStack>
}`,
      ...((C = (V = s.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var N, A, B;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((N = o.parameters) == null ? void 0 : N.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-display1" level="h1" noSpace overline="Overline" size="display1" text="Lorem ipsum dolor" />
      <Heading id="heading-heading1" level="h1" noSpace overline="Overline" size="heading1" text="Lorem ipsum dolor" />
      <Heading id="heading-heading2" level="h1" noSpace overline="Overline" size="heading2" text="Lorem ipsum dolor" />
      <Heading id="heading-heading3" level="h1" noSpace overline="Overline" size="heading3" text="Lorem ipsum dolor" />
      <Heading id="heading-heading4" level="h1" noSpace overline="Overline" size="heading4" text="Lorem ipsum dolor" />
      <Heading id="heading-heading5" level="h1" noSpace overline="Overline" size="heading5" text="Lorem ipsum dolor" />
      <Heading id="heading-heading6" level="h1" noSpace overline="Overline" size="heading6" text="Lorem ipsum dolor" />
      <Heading id="heading-heading7" level="h1" noSpace overline="Overline" size="heading7" text="Lorem ipsum dolor" />
      <Heading id="heading-heading8" level="h1" noSpace overline="Overline" size="heading8" text="Lorem ipsum dolor" />
    </VStack>
}`,
      ...((B = (A = o.parameters) == null ? void 0 : A.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var M, W, _;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((M = r.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-display1" level="h1" noSpace size="display1" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading1" level="h1" noSpace size="heading1" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading2" level="h1" noSpace size="heading2" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading3" level="h1" noSpace size="heading3" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading4" level="h1" noSpace size="heading4" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading5" level="h1" noSpace size="heading5" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading6" level="h1" noSpace size="heading6" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading7" level="h1" noSpace size="heading7" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading8" level="h1" noSpace size="heading8" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
    </VStack>
}`,
      ...((_ = (W = r.parameters) == null ? void 0 : W.docs) == null
        ? void 0
        : _.source),
    },
  },
};
var F, U, q;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((F = h.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  name: "Overline and Subtitle",
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-display1" level="h1" overline="Overline" size="display1" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading1" level="h1" overline="Overline" size="heading1" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading2" level="h1" overline="Overline" size="heading2" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading3" level="h1" overline="Overline" size="heading3" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading4" level="h1" overline="Overline" size="heading4" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading5" level="h1" overline="Overline" size="heading5" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading6" level="h1" overline="Overline" size="heading6" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading7" level="h1" overline="Overline" size="heading7" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
      <Heading id="heading-heading8" level="h1" overline="Overline" size="heading8" subtitle="The subtitle text sits below the main heading text." text="Lorem ipsum dolor" />
    </VStack>
}`,
      ...((q = (U = h.parameters) == null ? void 0 : U.docs) == null
        ? void 0
        : q.source),
    },
  },
};
var E, I, J;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((E = g.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: () => <Heading id="headingWithBold" level="h2" noSpace>
      <>
        Heading with a <b>Bold</b> Word
      </>
    </Heading>
}`,
      ...((J = (I = g.parameters) == null ? void 0 : I.docs) == null
        ? void 0
        : J.source),
    },
  },
};
var P, R, G;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((P = p.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  name: "Links",
  render: () => <VStack align="left" spacing="l">
      <Heading id="heading-with-text-url-values" level="h3" noSpace text="Heading with \`url\` and \`text\` props" url="http://apple.com" urlClass="special-link" />
      <Heading id="heading-with-link-url" level="h3" noSpace url="http://apple.com" urlClass="special-link">
        Heading with \`url\` prop value
      </Heading>
      <Heading id="heading-with-anchor" level="h3" noSpace>
        <a href="#hello">Link from HTML anchor element</a>
      </Heading>
      <Heading id="heading-with-DS-link" level="h3" noSpace>
        <Link href="#hello">Link using DS \`Link\` component</Link>
      </Heading>
      <Heading id="heading-with-link-child" level="h3" noSpace>
        <>
          Not acceptable. Do not use. <a href="#hello">Link</a>
        </>
      </Heading>
      <Heading id="heading-with-DS-link-child" level="h3" noSpace>
        <>
          <span>Text wrapped in a span </span>
          <Link href="#hello">Link</Link>
          <span> Not a recommended pattern</span>
        </>
      </Heading>
    </VStack>
}`,
      ...((G = (R = p.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : G.source),
    },
  },
};
const Y = [
    "WithControls",
    "DefaultStyles",
    "SizeStyles",
    "DefaultStylesDeprecated",
    "SizeStylesDeprecated",
    "Overline",
    "Subtitle",
    "OverlineAndSubtitle",
    "BoldText",
    "Links",
  ],
  ee = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BoldText: g,
        DefaultStyles: a,
        DefaultStylesDeprecated: d,
        Links: p,
        Overline: o,
        OverlineAndSubtitle: h,
        SizeStyles: l,
        SizeStylesDeprecated: s,
        Subtitle: r,
        WithControls: t,
        __namedExportsOrder: Y,
        default: X,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  g as B,
  a as D,
  ee as H,
  p as L,
  o as O,
  l as S,
  t as W,
  d as a,
  s as b,
  r as c,
  h as d,
};
