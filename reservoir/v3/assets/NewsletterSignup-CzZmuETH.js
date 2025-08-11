import {
  u as c,
  j as e,
  M as d,
  L as t,
  bv as h,
  C as i,
  bw as p,
  S as o,
} from "./iframe-D93LbwGv.js";
import {
  N as r,
  W as a,
  D as m,
  C as u,
  a as x,
  b as g,
  H as j,
} from "./NewsletterSignup.stories-Bsf1RITj.js";
import { C as f } from "./ComponentChangelogTable-Ck_3mwrR.js";
const b = [
  {
    date: "2025-05-22",
    version: "3.6.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Removes use of `useNYPLBreakpoints` and replaces with equivalent Chakra syntax.",
    ],
  },
  {
    date: "2025-04-10",
    version: "3.6.0",
    type: "Update",
    affects: ["Styles"],
    notes: ["Updates styles to match the VDL."],
  },
  {
    date: "2024-07-25",
    version: "3.2.0",
    type: "Update",
    affects: ["Functionality"],
    notes: [
      "Removes default text values.",
      "Replaces `sectionTypes` with `HighlightColorTypes` and renames the related component prop.",
      "Updates component prop requirement.",
    ],
  },
  {
    date: "2024-03-14",
    version: "3.0.0",
    type: "Update",
    affects: ["Styles", "Functionality"],
    notes: [
      "Chakra 2.8 update.",
      "Updated the email field error message to following NYPL recommendations and use more direct language.",
    ],
  },
  {
    date: "2023-12-07",
    version: "2.1.3",
    type: "Update",
    affects: ["Accessibility", "Documentation"],
    notes: [
      "Updated the `title` prop to allow JSX to render custom heading elements for accessible heading hierarchy.",
    ],
  },
  {
    date: "2023-11-09",
    version: "2.1.2",
    type: "Update",
    affects: ["Styles"],
    notes: [
      "Updates the dark mode color variants for the `newsletterSignupType` prop.",
    ],
  },
  {
    date: "2023-10-26",
    version: "2.1.1",
    type: "Update",
    affects: ["Accessibility"],
    notes: [
      "Updates `tabindex` value from 0 to -1. See Accessibility section for details.",
    ],
  },
  {
    date: "2023-10-18",
    version: "2.1.0",
    type: "New Feature",
    affects: ["Accessibility", "Documentation", "Functionality", "Styles"],
    notes: ["Adds the NewsletterSignup component to the DS library"],
  },
];
function l(s) {
  const n = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...c(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { of: r }),
      `
`,
      e.jsx(n.h1, { id: "newslettersignup", children: "NewsletterSignup" }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: "Component Version" }),
                e.jsx(n.th, { children: "DS Version" }),
              ],
            }),
          }),
          e.jsxs(n.tbody, {
            children: [
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Added" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "2.1.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "3.6.2" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#overview",
                target: "_self",
                children: "Overview",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#component-props",
                target: "_self",
                children: "Component Props",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#accessibility",
                target: "_self",
                children: "Accessibility",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#jsx-elements-passed-to-descriptiontext-prop",
                children: "JSX Elements passed to descriptionText Prop",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#custom-title-heading",
                target: "_self",
                children: "Custom Title Heading",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#form-submission-data",
                target: "_self",
                children: "Form Submission Data",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#interactive-example-with-onchange-and-onsubmit",
                target: "_self",
                children: "Interactive Example with onChange and onSubmit",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#component-states",
                target: "_self",
                children: "Component States",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#component-color-styles-using-highlight-color",
                target: "_self",
                children: "Component color styles using Highlight Color",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(n.li, {
            children: [
              `
`,
              e.jsx(t, {
                href: "#changelog",
                target: "_self",
                children: "Changelog",
              }),
              `
`,
            ],
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "overview", children: "Overview" }),
      `
`,
      e.jsx(h, { of: r }),
      `
`,
      e.jsx(n.h2, { id: "component-props", children: "Component Props" }),
      `
`,
      e.jsx(i, { of: a }),
      `
`,
      e.jsx(p, { of: a }),
      `
`,
      e.jsx(n.h2, { id: "accessibility", children: "Accessibility" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "NewsletterSignup" }),
          ` component is a complex component built from various
Reservoir DS and Chakra components.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "title" }),
          " prop of the ",
          e.jsx(n.code, { children: "NewsletterSignup" }),
          " component accepts a ",
          e.jsx(n.code, { children: "string" }),
          ", a ",
          e.jsx(n.code, { children: "HTML Element" }),
          ` or
a `,
          e.jsx(n.code, { children: "React Component" }),
          ". When passing a string, it will render as a ",
          e.jsx(n.code, { children: "h2" }),
          ` tag but it is the
responsibility of the consuming app to pass the heading tag (`,
          e.jsx(n.code, { children: "h*" }),
          `) that aligns with the page
structure and ensures accessibility.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Within the ",
          e.jsx(n.code, { children: "NewsletterSignup" }),
          " component, the DS ",
          e.jsx(n.code, { children: "form" }),
          ` component wraps around
two DS `,
          e.jsx(n.code, { children: "FormField" }),
          " components. Those",
          e.jsx(n.code, { children: "FormField" }),
          " components hold a DS ",
          e.jsx(n.code, { children: "TextInput" }),
          `
component of `,
          e.jsx(n.code, { children: 'type="email"' }),
          " and a DS ",
          e.jsx(n.code, { children: "Button" }),
          " component of ",
          e.jsx(n.code, { children: 'type="submit"' }),
          `
respectively. Each of these components has their own accessibility features
documented in their respective Storybook pages.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "After the ",
          e.jsx(n.code, { children: "NewsletterSignup" }),
          ` form is submitted, focus is set to the confirmation
message or the error message if an error occurs. The `,
          e.jsx(n.code, { children: "tabindex" }),
          ` for the focused
element is set to `,
          e.jsx(n.code, { children: '"-1"' }),
          `, allowing for programmatic focus to be set. After focus
is set programmatically, the user will be in control of focus and will not be
able to tab back to the confirmation message or error message after tabbing
away. This is standard accessibility behavior and the user should not expect to
be able to tab back to a non-interactive element.`,
        ],
      }),
      `
`,
      e.jsx(n.p, { children: "Resources:" }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "https://www.w3.org/WAI/tutorials/page-structure/headings/",
              rel: "nofollow",
              children: "W3C WAI Headings",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-form--docs#accessibility",
              children: "DS Form Accessibility",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-button--docs#accessibility",
              children: "DS Button Accessibility",
            }),
          }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.a, {
              href: "../?path=/docs/components-form-elements-textinput--docs#accessibility",
              children: "DS TextInput Accessibility",
            }),
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, {
        id: "jsx-elements-passed-to-descriptiontext-prop",
        children: "JSX Elements passed to descriptionText Prop",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Alternatively to a ",
          e.jsx(n.code, { children: "descriptionText" }),
          " of type ",
          e.jsx(n.code, { children: "string" }),
          `, a HTML Element or React
component can be passed. When passing a JSX Element, the consuming app is
responsible to assure its accessibility.`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.em, {
          children:
            "NOTE: This is applicable for all component props accepting HTML/JSX elements.",
        }),
      }),
      `
`,
      e.jsx(i, { of: m }),
      `
`,
      e.jsx(n.h2, {
        id: "custom-title-heading",
        children: "Custom Title Heading",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "title" }),
          " prop accepts either a ",
          e.jsx(n.code, { children: "string" }),
          " or a ",
          e.jsx(n.code, { children: "Element" }),
          ". If a ",
          e.jsx(n.code, { children: "string" }),
          ` is passed
it will render the `,
          e.jsx(n.code, { children: "Newsletter" }),
          "'s heading as an ",
          e.jsx(n.code, { children: "h2" }),
          " with the size set to ",
          e.jsx(n.code, { children: "heading3" }),
          `.
If the `,
          e.jsx(n.code, { children: "h2" }),
          ` does not fit into the page's heading hierarchy or the heading size needs
to be customized, a custom `,
          e.jsx(n.code, { children: "Heading" }),
          " element can be passed instead.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the following example, the heading is an ",
          e.jsx(n.code, { children: "h4" }),
          " defined as:",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
// String Heading Example
const stringHeading = "String heading";
// ...

<NewsletterSignup title={stringHeading} {...otherArgs} />

// JSX Heading Example

const jsxHeading = <Heading level="h4">Custom h4 DS Heading</Heading>;
// ...

<NewsletterSignup title={jsxHeading} {...otherArgs} />
`,
        language: "jsx",
      }),
      `
`,
      e.jsx(i, { of: u }),
      `
`,
      e.jsx(n.h2, {
        id: "form-submission-data",
        children: "Form Submission Data",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Submitted form data can be retrieved when the ",
          e.jsx(n.code, { children: "NewsletterSignup" }),
          ` component is
submitted through the required `,
          e.jsx(n.code, { children: "onSubmit" }),
          ` prop. This prop expects a function and
it will be called when the form is submitted. Similar to other DS
form-components that have function props, the data from the component will be
returned in the function's argument. In this case, it will be a single object.`,
        ],
      }),
      `
`,
      e.jsx(n.p, {
        children: `The submitted form data will be passed as an object that the parent component
can use. The returned object will always contain the "email" field.`,
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Below is an example callback function named ",
          e.jsx(n.code, { children: "onSubmit" }),
          ` that is passed to the
`,
          e.jsx(n.code, { children: "NewsletterSignup" }),
          " component's ",
          e.jsx(n.code, { children: "onSubmit" }),
          ` prop and how the view is controlled in
the data submission process. The form data will be returned through the
function's argument as an object, called `,
          e.jsx(n.code, { children: "values" }),
          " in the example below.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
const [view, setView] = React.useState("form");
const onSubmit = async (values) => {
e.preventDefault();
setView("submitting");
const endpoint = "...";
//Form the request for sending data to the server.
const options = {
  method: "POST",
  headers: {Content-Type: "application/json"},
  body: JSON.stringify(values),
};
//Send the form and await response.
try {
  const response = await fetch(endpoint, options);
  const result = await response.json();
  setView("confirmation");
} catch (error) {
  setView("error");
}
};

//....

<NewsletterSignup onChange={onChange} onSubmit={onSubmit} view={view} />

`,
        language: "jsx",
      }),
      `
`,
      e.jsx(n.h2, {
        id: "interactive-example-with-onchange-and-onsubmit",
        children: "Interactive Example with onChange and onSubmit",
      }),
      `
`,
      e.jsx(n.p, {
        children: e.jsx(n.em, {
          children:
            "NOTE: open the browser console to see the values logged in the example below.",
        }),
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The input value typed into the ",
          e.jsx(n.code, { children: "TextInput" }),
          " of the ",
          e.jsx(n.code, { children: "NewsletterSignup" }),
          ` component
can be accessed by the functions passed to the `,
          e.jsx(n.code, { children: "onChange" }),
          " and ",
          e.jsx(n.code, { children: "onSubmit" }),
          " prop.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Both the ",
          e.jsx(n.code, { children: "onChange" }),
          " and ",
          e.jsx(n.code, { children: "onSubmit" }),
          ` callback functions can retrieved the
submitted value as `,
          e.jsx(n.code, { children: "event.target.email.value" }),
          " through the ",
          e.jsx(n.code, { children: "event" }),
          ` object passed
as the single argument.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The following example logs the ",
          e.jsx(n.code, { children: "event.target.email.value" }),
          ` to the console on each
`,
          e.jsx(n.code, { children: "onChange" }),
          ` call and upon clicking the Submit button which triggers the
`,
          e.jsx(n.code, { children: "onSubmit" }),
          ` function and simulate a submission. The component will transition
through a `,
          e.jsx(n.code, { children: '"submitting"' }),
          " view to an alternating ",
          e.jsx(n.code, { children: '"confirmation"' }),
          ", ",
          e.jsx(n.code, { children: '"error"' }),
          ` or
"invalid Email" view.`,
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
function NewsletterSignupOnSubmitExampleComponent() {
const [view, setView] = React.useState("form");
const [inputVal, setInputVal] = React.useState("");
const handleChange = (event) => {
  console.log(\`onChange Email Input value: \${event.target.value}\`);
  setInputVal(event.target.value);
};
const handleSubmit = (event) => {
  event.preventDefault();
  console.log(\`onSubmit Email Input value: \${event.target.email.value}\`);
};
return (
  <NewsletterSignup
  id="interactive"
  view={view}
  isInvalidEmail={counter === 3}
  valueEmail={inputVal}
  onChange={handleChange}
  onSubmit={handleSubmit}
  confirmationHeading="Thank you for signing up!"
  confirmationText="You can update your email subscription preferences at any time using the links at the bottom of the email."
  />
);
} `,
        language: "jsx",
      }),
      `
`,
      e.jsx(i, { of: x }),
      `
`,
      e.jsx(n.h2, { id: "component-states", children: "Component States" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The display state can be controlled by setting the ",
          e.jsx(n.code, { children: "view" }),
          " prop to one of the following values:",
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsxs(n.li, {
            children: [e.jsx(n.code, { children: "form" }), " (default)"],
          }),
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "submitting" }) }),
          `
`,
          e.jsx(n.li, {
            children: e.jsx(n.code, { children: "confirmation" }),
          }),
          `
`,
          e.jsx(n.li, { children: e.jsx(n.code, { children: "error" }) }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(i, { of: g }),
      `
`,
      e.jsx(n.h2, {
        id: "component-color-styles-using-highlight-color",
        children: "Component color styles using Highlight Color",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "highlightColor" }),
          " prop accepts a ",
          e.jsx(n.code, { children: "string" }),
          " value of a color defined in the ",
          e.jsx(n.code, { children: "HighlightColorTypes" }),
          `.
`,
          e.jsx(n.code, { children: "HighlightColorTypes" }),
          " is a selection of Design System's ",
          e.jsx(n.code, { children: "NYPL Section Colors" }),
          ` and offers a way to
integrate the section color of a particular page into the `,
          e.jsx(n.code, { children: "NewsletterSignup" }),
          " component.",
        ],
      }),
      `
`,
      e.jsx(o, {
        code: `
function NewsletterSignupHighlightColorExampleComponent() {
return (
  <NewsletterSignup
    highlightColor="section.education.primary"
    {...other Args}
  />
);
} `,
        language: "jsx",
      }),
      `
`,
      e.jsx(i, { of: j }),
      `
`,
      e.jsx(n.h2, { id: "changelog", children: "Changelog" }),
      `
`,
      e.jsx(f, { changelogData: b }),
    ],
  });
}
function y(s = {}) {
  const { wrapper: n } = { ...c(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(l, { ...s }) }) : l(s);
}
export { y as default };
