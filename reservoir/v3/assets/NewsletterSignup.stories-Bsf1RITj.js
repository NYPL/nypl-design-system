import {
  aC as b,
  aD as n,
  j as e,
  m as w,
  L as S,
  V as Y,
  H as s,
  a as l,
  r as v,
} from "./iframe-D93LbwGv.js";
const { action: C } = __STORYBOOK_MODULE_ACTIONS__,
  q = {
    title: "Components/Form Elements/NewsletterSignup",
    component: n,
    parameters: { jest: ["NewsletterSignup.test.tsx"] },
    argTypes: {
      className: { control: !1 },
      confirmationHeading: { control: "text" },
      confirmationText: { control: "text" },
      descriptionText: { control: "text" },
      errorHeading: { control: "text" },
      errorText: { control: "text" },
      formHelperText: { control: "text" },
      id: { control: !1 },
      highlightColor: {
        control: "select",
        options: b,
        table: {
          type: {
            summary: "HighlightColorTypes",
            detail: `${b
              .map(
                (i) => `${i}
`
              )
              .join("")}`,
          },
          defaultValue: { summary: "ui.gray.medium" },
        },
      },
      onChange: { control: !1, action: "onChange" },
      onSubmit: { control: !1, action: "onSubmit" },
      privacyPolicyLink: {
        control: "text",
        table: {
          defaultValue: {
            summary:
              "https://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",
          },
        },
      },
      title: { control: !1 },
      valueEmail: { control: !1 },
      view: {
        control: "select",
        options: ["form", "submitting", "confirmation", "error"],
        table: { defaultValue: { summary: "form" } },
      },
    },
  },
  a = "Sign Up for Our Newsletter",
  r =
    "Stay connected with the latest research news from NYPL, including information about our events, programs, exhibitions, and collections.",
  t = "Thank you for signing up!",
  o = "Oops! Something went wrong.",
  m = {
    args: {
      className: void 0,
      confirmationHeading: t,
      confirmationText: void 0,
      descriptionText: r,
      errorHeading: o,
      errorText: void 0,
      formHelperText: void 0,
      id: void 0,
      isInvalidEmail: !1,
      highlightColor: void 0,
      onChange: (i) => {
        C("onChange")(i.target.value);
      },
      onSubmit: (i) => {
        i.preventDefault(), C("onSubmit")(i.target[0].value);
      },
      privacyPolicyLink: void 0,
      title: a,
      valueEmail: void 0,
      view: void 0,
    },
    parameters: {
      design: {
        type: "figma",
        url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80849%3A174194&mode=dev",
      },
      jest: "NewsletterSignup.test.tsx",
    },
    render: (i) => e.jsx(n, { ...i }),
  };
let d = 0;
function R() {
  const [i, x] = v.useState("form"),
    [J, H] = v.useState(""),
    U = () => {
      d++,
        x(d === 1 ? "confirmation" : d === 2 ? "error" : "form"),
        setTimeout(() => {
          x("form"), H("");
        }, 2e3);
    };
  v.useEffect(() => {
    d === 3 && (d = 0);
  });
  const $ = (c) => {
      console.log(`onChange Email Input value: ${c.target.value}`),
        H(c.target.value);
    },
    W = (c) => {
      c.preventDefault(),
        x("submitting"),
        console.log(`onSubmit Email Input value: ${c.target.email.value}`),
        setTimeout(U, 2e3);
    };
  return e.jsx(n, {
    id: "interactive",
    view: i,
    isInvalidEmail: d === 3,
    valueEmail: J,
    onChange: $,
    onSubmit: W,
    confirmationHeading: t,
    descriptionText: r,
    errorHeading: o,
    title: a,
  });
}
const g = { render: () => e.jsx(R, {}), name: "Interactive Example" },
  u = {
    render: () =>
      e.jsx(n, {
        id: "jsx-description-text",
        view: "form",
        title: a,
        errorHeading: o,
        onChange: () => {},
        onSubmit: () => {},
        descriptionText: e.jsxs(w, {
          noSpace: !0,
          size: "body2",
          children: [
            "If the description text needs to have ",
            e.jsx("i", { children: "special" }),
            " styling or needs to have a ",
            e.jsx(S, {
              href: "https://corgiorgy.com/",
              children: "nested link",
            }),
          ],
        }),
        confirmationHeading: t,
      }),
  },
  h = {
    render: () =>
      e.jsxs(Y, {
        align: "stretch",
        spacing: "l",
        children: [
          e.jsx(n, {
            id: "string-title",
            view: "form",
            onChange: () => {},
            onSubmit: () => {},
            title: "String heading",
            confirmationHeading: t,
            errorHeading: o,
            descriptionText: r,
          }),
          e.jsx(n, {
            id: "custom-element-heading",
            view: "form",
            confirmationHeading: t,
            errorHeading: o,
            onChange: () => {},
            onSubmit: () => {},
            title: e.jsx(s, { level: "h4", text: "Custom h4 DS Heading" }),
            descriptionText: r,
          }),
        ],
      }),
  },
  p = {
    render: () =>
      e.jsxs(Y, {
        align: "stretch",
        spacing: "l",
        children: [
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children: "Form View (default)",
              }),
              e.jsx(n, {
                id: "form-view",
                view: "form",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                title: a,
                descriptionText: r,
                errorHeading: o,
              }),
            ],
          }),
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children: "Form View with Invalid Email",
              }),
              e.jsx(n, {
                id: "invalid-email",
                isInvalidEmail: !0,
                view: "form",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                title: a,
                descriptionText: r,
                errorHeading: o,
              }),
            ],
          }),
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children: "Submitting View (disabled inputs)",
              }),
              e.jsx(n, {
                id: "submitting-view",
                view: "submitting",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                title: a,
                descriptionText: r,
                errorHeading: o,
              }),
            ],
          }),
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children: "Confirmation View",
              }),
              e.jsx(n, {
                id: "confirmation-view",
                view: "confirmation",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                confirmationText:
                  "You can update your email subscription preferences at any time using the links at the bottom of the email.",
                title: a,
                descriptionText: r,
                errorHeading: o,
              }),
            ],
          }),
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children:
                  "Confirmation View with Custom Element Confirmation Message",
              }),
              e.jsx(n, {
                id: "confirmation-view",
                view: "confirmation",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                confirmationText: e.jsxs(w, {
                  noSpace: !0,
                  size: "body2",
                  children: [
                    "You are now receiving our Newsletter. Find out more about",
                    e.jsx(S, {
                      href: "https://www.nypl.org/spotlight/live",
                      children: "upcoming Live from NYPL events",
                    }),
                    ".",
                  ],
                }),
                descriptionText: r,
                title: a,
                errorHeading: o,
              }),
            ],
          }),
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children: "Error View",
              }),
              e.jsx(n, {
                id: "error-view",
                view: "error",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                title: a,
                descriptionText: r,
                errorHeading: o,
                errorText: "Please refresh this page and try again.",
              }),
            ],
          }),
          e.jsxs(l, {
            children: [
              e.jsx(s, {
                level: "h3",
                size: "heading6",
                children: "Error View with Custom Element Error Message",
              }),
              e.jsx(n, {
                id: "error-view",
                view: "error",
                onChange: () => {},
                onSubmit: () => {},
                confirmationHeading: t,
                descriptionText: r,
                title: a,
                errorHeading: "An error has occurred.",
                errorText: e.jsxs(w, {
                  noSpace: !0,
                  size: "body2",
                  children: [
                    "Please refresh this page and try again. If this error persists,",
                    " ",
                    e.jsx(S, {
                      href: "mailto:enews@nypl.org?subject=Please re-activate my e-mail address",
                      children: "contact our e-mail team",
                    }),
                    ".",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
  },
  f = {
    render: () =>
      e.jsx(n, {
        id: "highlight-color-education",
        view: "form",
        onChange: () => {},
        onSubmit: () => {},
        title: "Education Newsletter Color",
        highlightColor: "section.education.primary",
        confirmationHeading: t,
        errorHeading: o,
        descriptionText: r,
      }),
  },
  X = () => {
    const i = document.getElementById(
      "anchor--components-form-elements-newslettersignup--with-controls"
    );
    i.focus(), i.scrollIntoView({ behavior: "smooth" });
  };
setTimeout(X, 2e3);
var T, y, j;
m.parameters = {
  ...m.parameters,
  docs: {
    ...((T = m.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    className: undefined,
    confirmationHeading,
    confirmationText: undefined,
    descriptionText,
    errorHeading,
    errorText: undefined,
    formHelperText: undefined,
    id: undefined,
    isInvalidEmail: false,
    highlightColor: undefined,
    onChange: event => {
      action("onChange")(event.target.value);
    },
    onSubmit: event => {
      event.preventDefault();
      action("onSubmit")(event.target[0].value);
    },
    privacyPolicyLink: undefined,
    title: title,
    valueEmail: undefined,
    view: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=80849%3A174194&mode=dev"
    },
    jest: "NewsletterSignup.test.tsx"
  },
  render: args => <NewsletterSignup {...args} />
}`,
      ...((j = (y = m.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : j.source),
    },
  },
};
var E, N, V;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((E = g.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: () => <NewsletterSignupOnSubmitExampleComponent />,
  name: "Interactive Example"
}`,
      ...((V = (N = g.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : V.source),
    },
  },
};
var z, I, k;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((z = u.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  render: () => <NewsletterSignup id="jsx-description-text" view="form" title={title} errorHeading={errorHeading} onChange={() => {}} onSubmit={() => {}} descriptionText={<Text noSpace size="body2">
          If the description text needs to have <i>special</i> styling or needs
          to have a <Link href="https://corgiorgy.com/">nested link</Link>
        </Text>} confirmationHeading={confirmationHeading} />
}`,
      ...((k = (I = u.parameters) == null ? void 0 : I.docs) == null
        ? void 0
        : k.source),
    },
  },
};
var B, L, O;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((B = h.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="stretch" spacing="l">
      <NewsletterSignup id="string-title" view="form" onChange={() => {}} onSubmit={() => {}} title="String heading" confirmationHeading={confirmationHeading} errorHeading={errorHeading} descriptionText={descriptionText} />
      <NewsletterSignup id="custom-element-heading" view="form" confirmationHeading={confirmationHeading} errorHeading={errorHeading} onChange={() => {}} onSubmit={() => {}} title={<Heading level="h4" text="Custom h4 DS Heading" />} descriptionText={descriptionText} />
    </VStack>
}`,
      ...((O = (L = h.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : O.source),
    },
  },
};
var P, _, D;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((P = p.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Form View (default)
        </Heading>
        <NewsletterSignup id="form-view" view="form" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} title={title} descriptionText={descriptionText} errorHeading={errorHeading} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Form View with Invalid Email
        </Heading>
        <NewsletterSignup id="invalid-email" isInvalidEmail view="form" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} title={title} descriptionText={descriptionText} errorHeading={errorHeading} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Submitting View (disabled inputs)
        </Heading>
        <NewsletterSignup id="submitting-view" view="submitting" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} title={title} descriptionText={descriptionText} errorHeading={errorHeading} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Confirmation View
        </Heading>
        <NewsletterSignup id="confirmation-view" view="confirmation" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email." title={title} descriptionText={descriptionText} errorHeading={errorHeading} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Confirmation View with Custom Element Confirmation Message
        </Heading>
        <NewsletterSignup id="confirmation-view" view="confirmation" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} confirmationText={<Text noSpace size="body2">
              You are now receiving our Newsletter. Find out more about
              <Link href="https://www.nypl.org/spotlight/live">
                upcoming Live from NYPL events
              </Link>
              .
            </Text>} descriptionText={descriptionText} title={title} errorHeading={errorHeading} />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Error View
        </Heading>
        <NewsletterSignup id="error-view" view="error" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} title={title} descriptionText={descriptionText} errorHeading={errorHeading} errorText="Please refresh this page and try again." />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Error View with Custom Element Error Message
        </Heading>
        <NewsletterSignup id="error-view" view="error" onChange={() => {}} onSubmit={() => {}} confirmationHeading={confirmationHeading} descriptionText={descriptionText} title={title} errorHeading="An error has occurred." errorText={<Text noSpace size="body2">
              Please refresh this page and try again. If this error persists,{" "}
              <Link href="mailto:enews@nypl.org?subject=Please re-activate my e-mail address">
                contact our e-mail team
              </Link>
              .
            </Text>} />
      </Box>
    </VStack>
}`,
      ...((D = (_ = p.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var F, M, A;
f.parameters = {
  ...f.parameters,
  docs: {
    ...((F = f.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  render: () => <NewsletterSignup id="highlight-color-education" view="form" onChange={() => {}} onSubmit={() => {}} title="Education Newsletter Color" highlightColor="section.education.primary" confirmationHeading={confirmationHeading} errorHeading={errorHeading} descriptionText={descriptionText} />
}`,
      ...((A = (M = f.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : A.source),
    },
  },
};
const K = [
    "WithControls",
    "NewsletterSignupOnSubmitExample",
    "DescriptionUsingJSXElements",
    "CustomHeadings",
    "ComponentStates",
    "HightlightColors",
  ],
  Q = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ComponentStates: p,
        CustomHeadings: h,
        DescriptionUsingJSXElements: u,
        HightlightColors: f,
        NewsletterSignupOnSubmitExample: g,
        WithControls: m,
        __namedExportsOrder: K,
        default: q,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
export { h as C, u as D, f as H, Q as N, m as W, g as a, p as b };
