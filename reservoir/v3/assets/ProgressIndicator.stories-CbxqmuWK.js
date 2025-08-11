import {
  aH as K,
  aI as Z,
  aJ as Q,
  aK as a,
  j as e,
  Z as r,
  z as b,
  r as g,
} from "./iframe-D93LbwGv.js";
const U = {
    title: "Components/Feedback/ProgressIndicator",
    component: a,
    argTypes: {
      darkMode: { control: !1 },
      id: { control: !1 },
      indicatorType: {
        controls: { type: "select" },
        options: Q,
        table: { defaultValue: { summary: "linear" } },
      },
      isIndeterminate: { table: { defaultValue: { summary: "false" } } },
      labelPlacement: {
        control: "select",
        options: Z,
        table: { defaultValue: { summary: "bottom" } },
      },
      showLabel: { table: { defaultValue: { summary: "true" } } },
      size: {
        controls: { type: "select" },
        options: K,
        table: { defaultValue: { summary: "default" } },
      },
      value: { table: { defaultValue: { summary: "0" } } },
    },
  },
  l = {
    args: {
      id: "progressIndicator-id",
      indicatorType: "linear",
      isIndeterminate: !1,
      labelText: "Progress",
      showLabel: !0,
      size: "default",
      value: 50,
    },
    render: (u) => e.jsx(a, { ...u }),
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=37638%3A23842",
      },
      jest: ["ProgressIndicator.test.tsx"],
    },
  },
  s = {
    argTypes: { indicatorType: { table: { disable: !0 } } },
    render: () =>
      e.jsx(a, {
        id: "linear",
        indicatorType: "linear",
        labelText: "Linear Progress Type",
        value: 50,
      }),
  },
  t = {
    argTypes: { indicatorType: { table: { disable: !0 } } },
    render: () =>
      e.jsx(a, {
        id: "circular",
        indicatorType: "circular",
        labelText: "Circular Progress Type",
        value: 50,
      }),
  },
  i = {
    render: () =>
      e.jsxs(r, {
        columns: 1,
        gap: "grid.m",
        children: [
          e.jsx(a, {
            id: "default-size",
            labelText: "Default 8px size",
            value: 50,
          }),
          e.jsx(a, {
            id: "small-size",
            labelText: "Small 4px size",
            size: "small",
            value: 50,
          }),
        ],
      }),
  },
  n = {
    render: () =>
      e.jsxs(r, {
        columns: 1,
        gap: "grid.m",
        children: [
          e.jsx(a, {
            id: "default-size",
            indicatorType: "circular",
            labelText: "Default 48px size",
            value: 50,
          }),
          e.jsx(a, {
            id: "small-size",
            indicatorType: "circular",
            labelText: "Small 24px size",
            size: "small",
            value: 50,
          }),
        ],
      }),
  },
  o = {
    render: () =>
      e.jsxs(r, {
        columns: 1,
        gap: "grid.m",
        children: [
          e.jsx(a, {
            id: "label",
            labelText: "This label will be added through aria-label",
            showLabel: !1,
            value: 50,
          }),
          e.jsx(a, {
            id: "label-hidden",
            indicatorType: "circular",
            labelText: "This label will be added through aria-label",
            showLabel: !1,
            value: 50,
          }),
        ],
      }),
  },
  c = {
    render: () =>
      e.jsxs(r, {
        columns: 1,
        gap: "grid.xl",
        children: [
          e.jsxs(b, {
            spacing: "l",
            children: [
              e.jsx(a, {
                id: "default-label-bottom",
                indicatorType: "circular",
                labelText: "Bottom label (default size)",
                value: 50,
              }),
              e.jsx(a, {
                id: "default-label-top",
                indicatorType: "circular",
                labelPlacement: "top",
                labelText: "Top label (default size)",
                value: 50,
              }),
              e.jsx(a, {
                id: "default-label-left",
                indicatorType: "circular",
                labelPlacement: "left",
                labelText: "Left label (default size)",
                value: 50,
              }),
              e.jsx(a, {
                id: "default-label-right",
                indicatorType: "circular",
                labelPlacement: "right",
                labelText: "Right label (default size)",
                value: 50,
              }),
            ],
          }),
          e.jsxs(b, {
            spacing: "l",
            children: [
              e.jsx(a, {
                id: "small-label-bottom",
                indicatorType: "circular",
                labelPlacement: "bottom",
                labelText: "Bottom label (small size)",
                size: "small",
                value: 50,
              }),
              e.jsx(a, {
                id: "small-label-right",
                indicatorType: "circular",
                labelPlacement: "top",
                labelText: "Top label (small size)",
                size: "small",
                value: 50,
              }),
              e.jsx(a, {
                id: "small-label-left",
                indicatorType: "circular",
                labelPlacement: "left",
                labelText: "Left label (small size)",
                size: "small",
                value: 50,
              }),
              e.jsx(a, {
                id: "small-label-right",
                indicatorType: "circular",
                labelPlacement: "right",
                labelText: "Right label (small size)",
                size: "small",
                value: 50,
              }),
            ],
          }),
        ],
      }),
  },
  d = {
    render: () =>
      e.jsxs(r, {
        columns: 1,
        gap: "grid.m",
        children: [
          e.jsx(a, {
            id: "indeterminate",
            isIndeterminate: !0,
            labelText: "Indeterminate state",
            value: 50,
          }),
          e.jsx(a, {
            id: "indeterminate-circular",
            indicatorType: "circular",
            isIndeterminate: !0,
            labelText: "Indeterminate state",
            value: 50,
          }),
        ],
      }),
  };
function X() {
  const [u, q] = g.useState(0);
  return (
    g.useEffect(() => {
      const N = setInterval(() => {
        q((p) => (p === 100 ? 0 : p + 10));
      }, 1e3);
      return () => clearInterval(N);
    }, []),
    e.jsxs(r, {
      columns: 1,
      gap: "grid.m",
      children: [
        e.jsx(a, { id: "example", labelText: "Progress example", value: u }),
        e.jsx(a, {
          id: "example-circular",
          indicatorType: "circular",
          labelText: "Progress example",
          value: u,
        }),
      ],
    })
  );
}
const m = { render: () => e.jsx(X, {}), name: "Get Input Values" };
var T, x, f, y, P;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((T = l.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    id: "progressIndicator-id",
    indicatorType: "linear",
    isIndeterminate: false,
    labelText: "Progress",
    showLabel: true,
    size: "default",
    value: 50
  },
  render: args => <ProgressIndicator {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=37638%3A23842"
    },
    jest: ["ProgressIndicator.test.tsx"]
  }
}`,
      ...((f = (x = l.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : f.source),
    },
    description: {
      story:
        "Main Story for the ProgressIndicator component. This must contains the `args`\nand `parameters` properties in this object.",
      ...((P = (y = l.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : P.description),
    },
  },
};
var z, h, I;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((z = s.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  argTypes: {
    indicatorType: {
      table: {
        disable: true
      }
    }
  },
  render: () => <ProgressIndicator id="linear" indicatorType="linear" labelText="Linear Progress Type" value={50} />
}`,
      ...((I = (h = s.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : I.source),
    },
  },
};
var v, S, j;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((v = t.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  argTypes: {
    indicatorType: {
      table: {
        disable: true
      }
    }
  },
  render: () => <ProgressIndicator id="circular" indicatorType="circular" labelText="Circular Progress Type" value={50} />
}`,
      ...((j = (S = t.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : j.source),
    },
  },
};
var L, w, G;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((L = i.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="default-size" labelText="Default 8px size" value={50} />
      <ProgressIndicator id="small-size" labelText="Small 4px size" size="small" value={50} />
    </SimpleGrid>
}`,
      ...((G = (w = i.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : G.source),
    },
  },
};
var C, k, V;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((C = n.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="default-size" indicatorType="circular" labelText="Default 48px size" value={50} />
      <ProgressIndicator id="small-size" indicatorType="circular" labelText="Small 24px size" size="small" value={50} />
    </SimpleGrid>
}`,
      ...((V = (k = n.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : V.source),
    },
  },
};
var E, H, A;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((E = o.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="label" labelText="This label will be added through aria-label" showLabel={false} value={50} />
      <ProgressIndicator id="label-hidden" indicatorType="circular" labelText="This label will be added through aria-label" showLabel={false} value={50} />
    </SimpleGrid>
}`,
      ...((A = (H = o.parameters) == null ? void 0 : H.docs) == null
        ? void 0
        : A.source),
    },
  },
};
var M, _, R;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((M = c.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1} gap="grid.xl">
      <HStack spacing="l">
        <ProgressIndicator id="default-label-bottom" indicatorType="circular" labelText="Bottom label (default size)" value={50} />
        <ProgressIndicator id="default-label-top" indicatorType="circular" labelPlacement="top" labelText="Top label (default size)" value={50} />
        <ProgressIndicator id="default-label-left" indicatorType="circular" labelPlacement="left" labelText="Left label (default size)" value={50} />
        <ProgressIndicator id="default-label-right" indicatorType="circular" labelPlacement="right" labelText="Right label (default size)" value={50} />
      </HStack>
      <HStack spacing="l">
        <ProgressIndicator id="small-label-bottom" indicatorType="circular" labelPlacement="bottom" labelText="Bottom label (small size)" size="small" value={50} />
        <ProgressIndicator id="small-label-right" indicatorType="circular" labelPlacement="top" labelText="Top label (small size)" size="small" value={50} />
        <ProgressIndicator id="small-label-left" indicatorType="circular" labelPlacement="left" labelText="Left label (small size)" size="small" value={50} />
        <ProgressIndicator id="small-label-right" indicatorType="circular" labelPlacement="right" labelText="Right label (small size)" size="small" value={50} />
      </HStack>
    </SimpleGrid>
}`,
      ...((R = (_ = c.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : R.source),
    },
  },
};
var W, B, D;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((W = d.parameters) == null ? void 0 : W.docs),
    source: {
      originalSource: `{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="indeterminate" isIndeterminate labelText="Indeterminate state" value={50} />
      <ProgressIndicator id="indeterminate-circular" indicatorType="circular" isIndeterminate labelText="Indeterminate state" value={50} />
    </SimpleGrid>
}`,
      ...((D = (B = d.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var F, J, O;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((F = m.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  render: () => <ProgressIndicatorExample />,
  name: "Get Input Values"
}`,
      ...((O = (J = m.parameters) == null ? void 0 : J.docs) == null
        ? void 0
        : O.source),
    },
  },
};
const Y = [
    "WithControls",
    "LinearType",
    "CircularType",
    "LinearSizes",
    "CircularSizes",
    "Labels",
    "LabelPlacements",
    "IndeterminateState",
    "WorkingExample",
  ],
  ee = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        CircularSizes: n,
        CircularType: t,
        IndeterminateState: d,
        LabelPlacements: c,
        Labels: o,
        LinearSizes: i,
        LinearType: s,
        WithControls: l,
        WorkingExample: m,
        __namedExportsOrder: Y,
        default: U,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export {
  t as C,
  d as I,
  s as L,
  ee as P,
  l as W,
  i as a,
  n as b,
  o as c,
  c as d,
  m as e,
};
