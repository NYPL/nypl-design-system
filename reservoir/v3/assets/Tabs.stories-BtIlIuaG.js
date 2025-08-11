import {
  b9 as l,
  j as e,
  ba as v,
  bb as n,
  bc as N,
  bd as s,
} from "./iframe-D93LbwGv.js";
import { a as D } from "./storybookUtils-BmTl87w5.js";
const h = [
    {
      label: "Tom Nook",
      content: e.jsxs("p", {
        children: [
          "Tom Nook, ",
          e.jsx("b", { children: "known in Japan as Tanukichi" }),
          ", is a fictional character in the Animal Crossing series who operates the village store.",
        ],
      }),
    },
    {
      label: "Isabelle",
      content:
        "Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character.",
    },
    {
      label: "K.K. Slider",
      content:
        "<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since.</p>",
    },
    {
      label: "Mr. Resetti",
      content:
        "<strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional character from the Animal Crossing series of video games by Nintendo. His first appearance was in the Nintendo 64 game Dōbutsu no Mori, released in Europe and North America on the GameCube as Animal Crossing.",
    },
    {
      label: "Zucker",
      content:
        "<strong>Zucker</strong> is a lazy octopus villager who first appeared in New Leaf. His Japanese name and general appearance refers to the Japanese snack takoyaki, which is a fried ball of dough commonly filled with minced octopus. His catchphrase is a reference to how he is an underwater animal. He has the same initial phrase as Bertha. He has the nature hobby.",
    },
  ],
  K = [
    {
      label: "Filbert",
      content:
        "<strong>Filbert</strong> is a lazy squirrel villager in the Animal Crossing series. His name, like most of his species, comes from a type of nut. In this case, his name comes from an edible type of hazelnut. He has made an appearance in every Animal Crossing game to date. He is the only lazy squirrel villager in the series so far. His initial catchphrase could be based on the fact that squirrels usually appear to have buck teeth. He has the nature hobby.",
    },
    {
      label: "Timmy and Tommy",
      content:
        "<strong>Timothy</strong> (better known as Timmy) and <strong>Thomas</strong> (more often known as Tommy) are the twin apprentices of Tom Nook, the tanuki who runs the town's store. Their last names are said to be Nook.",
    },
  ],
  M = {
    title: "Components/Overlays & Switchers/Tabs",
    component: l,
    argTypes: {
      children: { table: { disable: !0 } },
      defaultIndex: { table: { defaultValue: { summary: "0" } } },
      id: { control: !1 },
      onChange: { control: !1 },
      tabsData: { control: !1 },
      useHash: D(),
    },
  },
  a = {
    args: {
      tabsData: h,
      defaultIndex: 0,
      id: "tabs-id",
      onChange: void 0,
      useHash: !1,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26464",
      },
      jest: ["Tabs.test.tsx"],
    },
  },
  P = (H) => {
    window.alert(`Tab index selected was ${H}`);
  },
  r = { render: () => e.jsx(l, { tabsData: [...h, ...K] }) },
  t = { render: () => e.jsx(l, { tabsData: h, onChange: P }) },
  i = { render: () => e.jsx(l, { tabsData: h, useHash: !0 }) },
  o = {
    render: () =>
      e.jsxs(l, {
        children: [
          e.jsxs(v, {
            children: [
              e.jsx(n, { children: "Tom Nook" }),
              e.jsx(n, { children: "Isabelle" }),
              e.jsx(n, { children: "K.K. Slider" }),
              e.jsx(n, { children: "Mr. Resetti" }),
              e.jsx(n, { children: "Zucker" }),
            ],
          }),
          e.jsxs(N, {
            children: [
              e.jsx(s, {
                children: e.jsxs("p", {
                  children: [
                    "Tom Nook, ",
                    e.jsx("b", { children: "known in Japan as Tanukichi" }),
                    ", is a fictional character in the Animal Crossing series who operates the village store.",
                  ],
                }),
              }),
              e.jsx(s, {
                children:
                  "Isabelle, known as Shizue in Japan, is a fictional character from the Animal Crossing series of video games. She is a kindly Shih Tzu that debuted in the 2012 release Animal Crossing: New Leaf, where she serves as the secretary to the player character.",
              }),
              e.jsx(s, {
                children: e.jsxs("p", {
                  children: [
                    "Totakeke, more commonly known as ",
                    e.jsx("b", { children: "K.K. Slider or K.K." }),
                    ", is a fictional character within the Animal Crossing franchise. One of the franchise's most popular characters, he debuted in the title Animal Crossing, and has appeared in every installment since.",
                  ],
                }),
              }),
              e.jsxs(s, {
                children: [
                  e.jsx("strong", { children: "Mr. Resetti" }),
                  ", full name Sonny Resetti, is a fictional character from the Animal Crossing series of video games by Nintendo. His first appearance was in the Nintendo 64 game Dōbutsu no Mori, released in Europe and North America on the GameCube as Animal Crossing.",
                ],
              }),
              e.jsxs(s, {
                children: [
                  e.jsx("strong", { children: "Zucker" }),
                  " is a lazy octopus villager who first appeared in New Leaf. His Japanese name and general appearance refers to the Japanese snack takoyaki, which is a fried ball of dough commonly filled with minced octopus. His catchphrase is a reference to how he is an underwater animal. He has the same initial phrase as Bertha. He has the nature hobby.",
                ],
              }),
            ],
          }),
        ],
      }),
  };
var c, d, m, p, b;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    tabsData: animalCrossingData,
    defaultIndex: 0,
    id: "tabs-id",
    onChange: undefined,
    useHash: false
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A26464"
    },
    jest: ["Tabs.test.tsx"]
  }
}`,
      ...((m = (d = a.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : m.source),
    },
    description: {
      story:
        "Main Story for the Tabs component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((b = (p = a.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : b.description),
    },
  },
};
var u, f, g;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((u = r.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  render: () => <Tabs tabsData={[...animalCrossingData, ...extraACData]} />
}`,
      ...((g = (f = r.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : g.source),
    },
  },
};
var T, y, w;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((T = t.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  render: () => <Tabs tabsData={animalCrossingData} onChange={onChange} />
}`,
      ...((w = (y = t.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var k, C, x;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((k = i.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  render: () => <Tabs tabsData={animalCrossingData} useHash={true} />
}`,
      ...((x = (C = i.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var A, S, j;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((A = o.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `{
  render: () => <Tabs>
      <TabList>
        <Tab>Tom Nook</Tab>
        <Tab>Isabelle</Tab>
        <Tab>K.K. Slider</Tab>
        <Tab>Mr. Resetti</Tab>
        <Tab>Zucker</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>
            Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
            character in the Animal Crossing series who operates the village
            store.
          </p>
        </TabPanel>
        <TabPanel>
          Isabelle, known as Shizue in Japan, is a fictional character from the
          Animal Crossing series of video games. She is a kindly Shih Tzu that
          debuted in the 2012 release Animal Crossing: New Leaf, where she
          serves as the secretary to the player character.
        </TabPanel>
        <TabPanel>
          <p>
            Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a
            fictional character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </p>
        </TabPanel>
        <TabPanel>
          <strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional
          character from the Animal Crossing series of video games by Nintendo.
          His first appearance was in the Nintendo 64 game Dōbutsu no Mori,
          released in Europe and North America on the GameCube as Animal
          Crossing.
        </TabPanel>
        <TabPanel>
          <strong>Zucker</strong> is a lazy octopus villager who first appeared
          in New Leaf. His Japanese name and general appearance refers to the
          Japanese snack takoyaki, which is a fried ball of dough commonly
          filled with minced octopus. His catchphrase is a reference to how he
          is an underwater animal. He has the same initial phrase as Bertha. He
          has the nature hobby.
        </TabPanel>
      </TabPanels>
    </Tabs>
}`,
      ...((j = (S = o.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : j.source),
    },
  },
};
const J = [
    "WithControls",
    "ExtendedTabSetExample",
    "CallbackEventFunction",
    "URLHashOption",
    "ChildrenComponents",
  ],
  I = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        CallbackEventFunction: t,
        ChildrenComponents: o,
        ExtendedTabSetExample: r,
        URLHashOption: i,
        WithControls: a,
        __namedExportsOrder: J,
        default: M,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { t as C, r as E, I as T, i as U, a as W, o as a };
