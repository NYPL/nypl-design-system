import {
  aV as E,
  aW as P,
  aX as A,
  aY as t,
  j as e,
  T as l,
  a as N,
  V as D,
  I as d,
} from "./iframe-D93LbwGv.js";
const L = {
    title: "Components/Content Display/StatusBadge",
    component: t,
    argTypes: {
      className: { control: !1 },
      fontSize: {
        description: "**Only used for Storybook** - Set the label font size.",
        table: { defaultValue: { summary: "desktop.body.body2" } },
        type: { name: "string" },
        control: { type: "radio" },
        options: A,
      },
      id: { control: !1 },
      level: {
        table: { defaultValue: { summary: "low" } },
        control: { type: "radio" },
        options: P,
      },
      type: { control: { type: "select" }, options: E },
    },
  },
  a = {
    args: {
      className: void 0,
      fontSize: void 0,
      id: "statusBadge-id",
      level: void 0,
      type: void 0,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0",
      },
      jest: "StatusBadge.test.tsx",
    },
    render: ({ ...C }) => e.jsx(t, { ...C, children: "Registration required" }),
  },
  n = {
    render: () =>
      e.jsx(l, {
        columnHeaders: ["", "Variant", "Purpose", "Examples"],
        tableData: [
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "neutral", children: "Neutral" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(N, {
                whiteSpace: "nowrap",
                children: "Neutral (default)",
              }),
            }),
            "Indicates a general, non-critical status update.",
            "Unavailable, Draft, Not started",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "informative",
                children: "Informative",
              }),
            }),
            "Informative",
            "Communicates helpful information or an important attribute.",
            "Available, New, Help, Active, In-use, Live",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "positive", children: "Positive" }),
            }),
            "Positive",
            "Indicates a constructive or successful state.",
            "Completed, Approved, Success, Published",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "negative", children: "Negative" }),
            }),
            "Negative",
            "Informs users of problems or errors that require potential action to correct.",
            "Error, Deleted, Failed",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "warning", children: "Warning" }),
            }),
            "Warning",
            "Communicates cautionary or time-sensitive information.",
            "Missing, Warning, Cancelled, Busy",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "recommendation",
                children: "Recommendation",
              }),
            }),
            "Recommendation",
            "Highlights a suggestion that will improve the experience and achieve better results.",
            "Recommended for you, Related",
          ],
        ],
        tableTextSize: "body2",
      }),
  },
  i = {
    render: () =>
      e.jsx(l, {
        columnHeaders: ["", "Variant", "Purpose", "Examples"],
        tableData: [
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { level: "low", children: "Low level" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(N, {
                whiteSpace: "nowrap",
                children: "Low (default)",
              }),
            }),
            "Used to indicate standard or low priority.",
            "Library Card Required",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { level: "medium", children: "Medium level" }),
            }),
            "Medium",
            "Indicates moderate priority – something is important, but not critical.",
            "Pending, Cancelled",
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { level: "high", children: "High level" }),
            }),
            "High",
            "Indicates the highest priority – this is critical and very important; destructive",
            "On-Site Access Only, Closed, Unavailable",
          ],
        ],
        tableTextSize: "body2",
      }),
  },
  s = {
    render: () =>
      e.jsx(l, {
        columnHeaders: ["Body1", "Body2 (default)", "Caption"],
        tableData: [
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.body.body1",
                type: "neutral",
                children: "Neutral",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "neutral", children: "Neutral" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.caption",
                type: "neutral",
                children: "Neutral",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.body.body1",
                type: "informative",
                children: "Informative",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "informative",
                children: "Informative",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.caption",
                type: "informative",
                children: "Informative",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.body.body1",
                type: "positive",
                children: "Positive",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "positive", children: "Positive" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.caption",
                type: "positive",
                children: "Positive",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.body.body1",
                type: "negative",
                children: "Negative",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "negative", children: "Negative" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.caption",
                type: "negative",
                children: "Negative",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.body.body1",
                type: "warning",
                children: "Warning",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "warning", children: "Warning" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.caption",
                type: "warning",
                children: "Warning",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.body.body1",
                type: "recommendation",
                children: "Recommendation",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "recommendation",
                children: "Recommendation",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                fontSize: "desktop.caption",
                type: "recommendation",
                children: "Recommendation",
              }),
            }),
          ],
        ],
      }),
  },
  r = {
    render: () =>
      e.jsx(l, {
        columnHeaders: ["Standard", "All Caps"],
        tableData: [
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "neutral",
                children: "Request pending",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "neutral",
                children: "REQUEST PENDING",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "informative",
                children: "In progress",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "informative",
                children: "IN PROGRESS",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "positive",
                children: "Ready for pickup",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "positive",
                children: "READY FOR PICKUP",
              }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "negative", children: "Closed" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "negative", children: "CLOSED" }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "warning", children: "Cancelled" }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, { type: "warning", children: "CANCELLED" }),
            }),
          ],
          [
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "recommendation",
                children: "Related",
              }),
            }),
            e.jsx(e.Fragment, {
              children: e.jsx(t, {
                type: "recommendation",
                children: "RELATED",
              }),
            }),
          ],
        ],
      }),
  },
  o = {
    render: () =>
      e.jsxs(D, {
        spacing: "s",
        align: "stretch",
        children: [
          e.jsxs(t, {
            level: "high",
            children: [
              e.jsx(d, {
                color: "brand.primary",
                mr: "xs",
                name: "errorFilled",
                size: "medium",
              }),
              "On-Site Access Only",
            ],
          }),
          e.jsxs(t, {
            fontSize: "desktop.caption",
            type: "warning",
            children: [
              e.jsx(d, {
                color: "ui.warning.secondary",
                mr: "xs",
                name: "actionHelpDefault",
                size: "medium",
              }),
              "Mising information",
            ],
          }),
          e.jsxs(t, {
            level: "low",
            children: [
              "Registration Required",
              e.jsx(d, {
                color: "ui.black",
                ml: "xs",
                name: "actionIdentityFilled",
                size: "medium",
              }),
            ],
          }),
          e.jsxs(t, {
            fontSize: "desktop.body.body1",
            type: "informative",
            children: [
              "Includes audio",
              e.jsx(d, {
                color: "ui.link.secondary",
                ml: "xs",
                name: "headset",
                size: "medium",
              }),
            ],
          }),
        ],
      }),
  };
var c, p, u, g, m;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    className: undefined,
    fontSize: undefined,
    id: "statusBadge-id",
    level: undefined,
    type: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0"
    },
    jest: "StatusBadge.test.tsx"
  },
  render: ({
    ...args
  }) => {
    return <StatusBadge {...args}>Registration required</StatusBadge>;
  }
}`,
      ...((u = (p = a.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : u.source),
    },
    description: {
      story:
        "Main Story for the StatusBadge component. This must contains the `args`\n and `parameters` properties in this object.",
      ...((m = (g = a.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : m.description),
    },
  },
};
var y, S, h;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((y = n.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <Table columnHeaders={["", "Variant", "Purpose", "Examples"]} tableData={[[<>
            <StatusBadge type="neutral">Neutral</StatusBadge>
          </>, <>
            <Box whiteSpace="nowrap">Neutral (default)</Box>
          </>, "Indicates a general, non-critical status update.", "Unavailable, Draft, Not started"], [<>
            <StatusBadge type="informative">Informative</StatusBadge>
          </>, "Informative", "Communicates helpful information or an important attribute.", "Available, New, Help, Active, In-use, Live"], [<>
            <StatusBadge type="positive">Positive</StatusBadge>
          </>, "Positive", "Indicates a constructive or successful state.", "Completed, Approved, Success, Published"], [<>
            <StatusBadge type="negative">Negative</StatusBadge>
          </>, "Negative", "Informs users of problems or errors that require potential action to correct.", "Error, Deleted, Failed"], [<>
            <StatusBadge type="warning">Warning</StatusBadge>
          </>, "Warning", "Communicates cautionary or time-sensitive information.", "Missing, Warning, Cancelled, Busy"], [<>
            <StatusBadge type="recommendation">Recommendation</StatusBadge>
          </>, "Recommendation", "Highlights a suggestion that will improve the experience and achieve better results.", "Recommended for you, Related"]]} tableTextSize="body2" />
}`,
      ...((h = (S = n.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var x, v, B;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((x = i.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: () => <Table columnHeaders={["", "Variant", "Purpose", "Examples"]} tableData={[[<>
            <StatusBadge level="low">Low level</StatusBadge>
          </>, <>
            <Box whiteSpace="nowrap">Low (default)</Box>
          </>, "Used to indicate standard or low priority.", "Library Card Required"], [<>
            <StatusBadge level="medium">Medium level</StatusBadge>
          </>, "Medium", "Indicates moderate priority – something is important, but not critical.", "Pending, Cancelled"], [<>
            <StatusBadge level="high">High level</StatusBadge>
          </>, "High", "Indicates the highest priority – this is critical and very important; destructive", "On-Site Access Only, Closed, Unavailable"]]} tableTextSize="body2" />
}`,
      ...((B = (v = i.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var f, j, b;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((f = s.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  render: () => <Table columnHeaders={["Body1", "Body2 (default)", "Caption"]} tableData={[[<>
            <StatusBadge fontSize="desktop.body.body1" type="neutral">
              Neutral
            </StatusBadge>
          </>, <>
            <StatusBadge type="neutral">Neutral</StatusBadge>
          </>, <>
            <StatusBadge fontSize="desktop.caption" type="neutral">
              Neutral
            </StatusBadge>
          </>], [<>
            <StatusBadge fontSize="desktop.body.body1" type="informative">
              Informative
            </StatusBadge>
          </>, <>
            <StatusBadge type="informative">Informative</StatusBadge>
          </>, <>
            <StatusBadge fontSize="desktop.caption" type="informative">
              Informative
            </StatusBadge>
          </>], [<>
            <StatusBadge fontSize="desktop.body.body1" type="positive">
              Positive
            </StatusBadge>
          </>, <>
            <StatusBadge type="positive">Positive</StatusBadge>
          </>, <>
            <StatusBadge fontSize="desktop.caption" type="positive">
              Positive
            </StatusBadge>
          </>], [<>
            <StatusBadge fontSize="desktop.body.body1" type="negative">
              Negative
            </StatusBadge>
          </>, <>
            <StatusBadge type="negative">Negative</StatusBadge>
          </>, <>
            <StatusBadge fontSize="desktop.caption" type="negative">
              Negative
            </StatusBadge>
          </>], [<>
            <StatusBadge fontSize="desktop.body.body1" type="warning">
              Warning
            </StatusBadge>
          </>, <>
            <StatusBadge type="warning">Warning</StatusBadge>
          </>, <>
            <StatusBadge fontSize="desktop.caption" type="warning">
              Warning
            </StatusBadge>
          </>], [<>
            <StatusBadge fontSize="desktop.body.body1" type="recommendation">
              Recommendation
            </StatusBadge>
          </>, <>
            <StatusBadge type="recommendation">Recommendation</StatusBadge>
          </>, <>
            <StatusBadge fontSize="desktop.caption" type="recommendation">
              Recommendation
            </StatusBadge>
          </>]]} />
}`,
      ...((b = (j = s.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : b.source),
    },
  },
};
var F, z, w;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((F = r.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  render: () => <Table columnHeaders={["Standard", "All Caps"]} tableData={[[<>
            <StatusBadge type="neutral">Request pending</StatusBadge>
          </>, <>
            <StatusBadge type="neutral">REQUEST PENDING</StatusBadge>
          </>], [<>
            <StatusBadge type="informative">In progress</StatusBadge>
          </>, <>
            <StatusBadge type="informative">IN PROGRESS</StatusBadge>
          </>], [<>
            <StatusBadge type="positive">Ready for pickup</StatusBadge>
          </>, <>
            <StatusBadge type="positive">READY FOR PICKUP</StatusBadge>
          </>], [<>
            <StatusBadge type="negative">Closed</StatusBadge>
          </>, <>
            <StatusBadge type="negative">CLOSED</StatusBadge>
          </>], [<>
            <StatusBadge type="warning">Cancelled</StatusBadge>
          </>, <>
            <StatusBadge type="warning">CANCELLED</StatusBadge>
          </>], [<>
            <StatusBadge type="recommendation">Related</StatusBadge>
          </>, <>
            <StatusBadge type="recommendation">RELATED</StatusBadge>
          </>]]} />
}`,
      ...((w = (z = r.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var I, R, k;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((I = o.parameters) == null ? void 0 : I.docs),
    source: {
      originalSource: `{
  render: () => <VStack spacing="s" align="stretch">
      <StatusBadge level="high">
        <Icon color="brand.primary" mr="xs" name="errorFilled" size="medium" />
        On-Site Access Only
      </StatusBadge>
      <StatusBadge fontSize="desktop.caption" type="warning">
        <Icon color="ui.warning.secondary" mr="xs" name="actionHelpDefault" size="medium" />
        Mising information
      </StatusBadge>
      <StatusBadge level="low">
        Registration Required
        <Icon color="ui.black" ml="xs" name="actionIdentityFilled" size="medium" />
      </StatusBadge>
      <StatusBadge fontSize="desktop.body.body1" type="informative">
        Includes audio
        <Icon color="ui.link.secondary" ml="xs" name="headset" size="medium" />
      </StatusBadge>
    </VStack>
}`,
      ...((k = (R = o.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : k.source),
    },
  },
};
const T = ["WithControls", "Types", "Levels", "FontSize", "Labeling", "Icons"],
  O = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        FontSize: s,
        Icons: o,
        Labeling: r,
        Levels: i,
        Types: n,
        WithControls: a,
        __namedExportsOrder: T,
        default: L,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { s as F, o as I, i as L, O as S, n as T, a as W, r as a };
