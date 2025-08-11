import {
  j as e,
  A as n,
  b as c,
  c as l,
  d,
  V as L,
  H as m,
  e as _,
  f as o,
} from "./iframe-D93LbwGv.js";
import { a as g } from "./storybookUtils-BmTl87w5.js";
const h = [
    {
      accordionType: "default",
      label: "Tom Nook",
      panel: e.jsxs(c, {
        imageProps: {
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        },
        isCentered: !0,
        layout: "row",
        children: [
          e.jsx(l, { level: "h4", id: "heading1", children: "Tom Nook" }),
          e.jsxs(d, {
            children: [
              "Tom Nook, ",
              e.jsx("b", { children: "known in Japan as Tanukichi" }),
              ", is a fictional character in the Animal Crossing series who operates the village store.",
            ],
          }),
        ],
      }),
    },
  ],
  R = [
    {
      accordionType: "default",
      label: "Tom Nook",
      panel: e.jsxs(c, {
        children: [
          e.jsx(l, { level: "h4", id: "heading1", children: "Tom Nook" }),
          e.jsxs(d, {
            children: [
              e.jsx("p", {
                children:
                  "Tom Nook (たぬきち Tanukichi?, a Tanuki) is a character who plays the most important role in all of the games. He is termed a raccoon in the western versions of the game but a tanuki in the Japanese version.",
              }),
              e.jsx("p", {
                children:
                  "In all games leading to New Leaf, he is the manager of the town shop. After the final expansion, Nookington's, he will employ his 'nephews' Timmy and Tommy, who work on the second floor in every Animal Crossing series game except New Leaf and New Horizons.",
              }),
              e.jsx("p", {
                children:
                  "In New Leaf, Nook has taken his interest in real estate to a whole new level, opening Nook's Homes, whilst Timmy and Tommy run the town shop. In New Horizons, Nook acts as the head of Nook Incorporated. He acts as the leader on the island, acting as task giver and island upgrader. In Wild World, he will give out his picture if the player gives him the safe from the Golden Axe Trading Event.",
              }),
            ],
          }),
        ],
      }),
    },
  ],
  E = [
    ...h,
    {
      accordionType: "warning",
      label: "Isabelle",
      panel: e.jsxs(c, {
        imageProps: {
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        },
        isCentered: !0,
        layout: "row",
        children: [
          e.jsx(l, {
            level: "h4",
            id: "heading1-isabelle",
            children: "Isabelle",
          }),
          e.jsx(d, {
            children:
              "Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character.",
          }),
        ],
      }),
    },
    {
      accordionType: "error",
      label: "K.K. Slider",
      panel: e.jsxs(c, {
        imageProps: {
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        },
        isCentered: !0,
        layout: "row",
        children: [
          e.jsx(l, {
            level: "h4",
            id: "heading1-kkslider",
            children: "K.K. Slider",
          }),
          e.jsx(d, {
            children: e.jsxs("p", {
              children: [
                "Totakeke, more commonly known as ",
                e.jsx("b", { children: "K.K. Slider or K.K." }),
                ", is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since.",
              ],
            }),
          }),
        ],
      }),
    },
  ],
  O = {
    title: "Components/Overlays & Switchers/Accordion",
    component: n,
    argTypes: {
      accordionData: {
        options: ["defaultData", "longTextData", "faqData"],
        mapping: { defaultData: h, longTextData: R, faqData: E },
      },
      ariaLabel: { control: !1 },
      id: { control: !1 },
      isDefaultOpen: g(),
      isAlwaysRendered: g(),
      panelMaxHeight: { control: { type: "text" } },
    },
  },
  a = {
    args: {
      accordionData: h,
      ariaLabel: void 0,
      id: "accordion-id",
      isDefaultOpen: !1,
      isAlwaysRendered: !1,
      panelMaxHeight: void 0,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520",
      },
      jest: "Accordion.test.tsx",
    },
  },
  s = { render: () => e.jsx(n, { accordionData: E }), name: "FAQ Content" },
  t = {
    render: () => e.jsx(n, { accordionData: h, panelMaxHeight: "100px" }),
    name: "panelMaxHeight Example",
  },
  r = {
    render: () => e.jsx(n, { accordionData: R, panelMaxHeight: "100px" }),
    name: "panelMaxHeight Example with Long Text",
  },
  K = (p) => {
    console.log(p);
  },
  x = (p) => [
    {
      accordionType: "default",
      label: "Subjects",
      panel: e.jsxs(_, {
        id: "accordion-checkbox-example",
        labelText: "Subjects",
        name: `accordionExample${p}`,
        showLabel: !1,
        defaultValue: ["music"],
        onChange: K,
        children: [
          e.jsx(o, { id: "1", value: "art", labelText: "Art" }),
          e.jsx(o, { id: "2", value: "chemistry", labelText: "Chemistry" }),
          e.jsx(o, { id: "3", value: "history", labelText: "History" }),
          e.jsx(o, { id: "4", value: "music", labelText: "Music" }),
          e.jsx(o, { id: "5", value: "science", labelText: "Science" }),
        ],
      }),
    },
  ],
  i = {
    render: () =>
      e.jsxs(L, {
        align: "stretch",
        spacing: "s",
        children: [
          e.jsx(m, {
            level: "h3",
            size: "heading5",
            children: "Accordion panel is removed when closed",
          }),
          e.jsx(n, { accordionData: x(0) }),
          e.jsx(m, {
            level: "h3",
            size: "heading5",
            children: "Accordion panel is always rendered",
          }),
          e.jsx(n, { accordionData: x(1), isAlwaysRendered: !0 }),
        ],
      }),
    name: "isAlwaysRendered",
  };
var u, f, w, y, A;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((u = a.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    accordionData,
    ariaLabel: undefined,
    id: "accordion-id",
    isDefaultOpen: false,
    isAlwaysRendered: false,
    panelMaxHeight: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10734%3A2520"
    },
    jest: "Accordion.test.tsx"
  }
}`,
      ...((w = (f = a.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : w.source),
    },
    description: {
      story:
        "Main Story for the Accordion component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((A = (y = a.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : A.description),
    },
  },
};
var b, j, T;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((b = s.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => <Accordion accordionData={faqContentData} />,
  name: "FAQ Content"
}`,
      ...((T = (j = s.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : T.source),
    },
  },
};
var k, v, C;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((k = t.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  render: () => <Accordion accordionData={accordionData} panelMaxHeight="100px" />,
  name: "panelMaxHeight Example"
}`,
      ...((C = (v = t.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var H, D, S;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((H = r.parameters) == null ? void 0 : H.docs),
    source: {
      originalSource: `{
  render: () => <Accordion accordionData={accordionLongTextData} panelMaxHeight="100px" />,
  name: "panelMaxHeight Example with Long Text"
}`,
      ...((S = (D = r.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var M, N, I;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((M = i.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="stretch" spacing="s">
      <Heading level="h3" size="heading5">
        Accordion panel is removed when closed
      </Heading>
      <Accordion accordionData={getAccordionData(0)} />
      <Heading level="h3" size="heading5">
        Accordion panel is always rendered
      </Heading>
      <Accordion accordionData={getAccordionData(1)} isAlwaysRendered />
    </VStack>,
  name: "isAlwaysRendered"
}`,
      ...((I = (N = i.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : I.source),
    },
  },
};
const z = [
    "WithControls",
    "FaqContent",
    "PanelMaxHeightExample",
    "PanelMaxHeightExample2",
    "IsAlwaysRendered",
  ],
  F = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        FaqContent: s,
        IsAlwaysRendered: i,
        PanelMaxHeightExample: t,
        PanelMaxHeightExample2: r,
        WithControls: a,
        __namedExportsOrder: z,
        default: O,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { F as A, s as F, i as I, t as P, a as W, r as a };
