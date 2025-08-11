import { u as o, j as e, M as t, L as n, S as a } from "./iframe-D93LbwGv.js";
function s(i) {
  const r = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...o(),
    ...i.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(t, { title: "Accessibility Guide/Errors" }),
      `
`,
      e.jsx(r.h1, { id: "error-messages", children: "Error Messages" }),
      `
`,
      e.jsx(r.h2, { id: "table-of-contents", children: "Table of Contents" }),
      `
`,
      e.jsxs(r.ul, {
        children: [
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#general-information",
                target: "_self",
                children: "General Information",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#making-errors-explicit-and-providing-instructions",
                target: "_self",
                children: "Making Errors Explicit and Providing Instructions",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#avoiding-reliance-on-color",
                target: "_self",
                children: "Avoiding Reliance on Color",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#programmatic-indicator-of-error",
                target: "_self",
                children: "Programmatic Indicator of Error",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#associating-inline-errors-with-their-field",
                target: "_self",
                children: "Associating Inline Errors with their Fields",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#shifting-focus-to-errors",
                target: "_self",
                children: "Shifting Focus to Errors",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#NYPL-patterns",
                target: "_self",
                children: "NYPL Patterns",
              }),
              `
`,
            ],
          }),
          `
`,
          e.jsxs(r.li, {
            children: [
              `
`,
              e.jsx(n, {
                href: "#resources",
                target: "_self",
                children: "Resources",
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
      e.jsx(r.h2, {
        id: "general-information",
        children: "General Information",
      }),
      `
`,
      e.jsx(r.p, {
        children: `Accessible error handling ensures errors are easily perceived, understood, and
corrected by a wide range of users both with and without using assistive technology.
Some core features of accessible errors include:`,
      }),
      `
`,
      e.jsxs(r.ul, {
        children: [
          `
`,
          e.jsx(r.li, {
            children:
              "Explicit statements of error and instructions for correction",
          }),
          `
`,
          e.jsx(r.li, {
            children:
              "Avoiding reliance on color alone to indicate the error state",
          }),
          `
`,
          e.jsx(r.li, { children: "Using a programmatic indicator of error" }),
          `
`,
          e.jsx(r.li, {
            children:
              "Associating inline error messages programmatically with their respective fields",
          }),
          `
`,
          e.jsx(r.li, {
            children: `Shifting focus to either the error summary (if provided) or the first field in error
if form submission failed`,
          }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(r.h2, {
        id: "making-errors-explicit-and-providing-instructions",
        children: "Making Errors Explicit and Providing Instructions",
      }),
      `
`,
      e.jsxs(r.p, {
        children: [
          `Avoid merely reiterating the requirement as the error, for example “First Name
is required”. Instead, include either the word error (or another clear word or
phrase indicating an error state) or an error icon that has a text equivalent
(such as `,
          e.jsx(r.code, { children: "alt=”error”" }),
          " or off-screen text, etc.)",
        ],
      }),
      `
`,
      e.jsx(r.p, { children: "Example: “Error: First Name is required”" }),
      `
`,
      e.jsx(r.p, {
        children: `Whenever possible, provide as much instruction for resolving the error as
feasible. For example, if the user enters a password that does not meet the
minimum requirements, have the error message include details about which
requirements were not met. (Such requirements should also always be explicitly
provided on the page so users can avoid making errors in the first place.)`,
      }),
      `
`,
      e.jsx(r.h2, {
        id: "avoiding-reliance-on-color",
        children: "Avoiding Reliance on Color",
      }),
      `
`,
      e.jsx(r.p, {
        children: `Ensure errors are not solely indicated through color, such as outlining a text
field in red. This does not mean that color cannot be used, but that there must
also be a secondary visual indication, such as an icon or the word “error” such
as described in the previous section.`,
      }),
      `
`,
      e.jsx(r.h2, {
        id: "programmatic-indicator-of-error",
        children: "Programmatic Indicator of Error",
      }),
      `
`,
      e.jsxs(r.p, {
        children: [
          "Errors can also be indicated programmatically by setting ",
          e.jsx(r.code, { children: "aria-invalid=”true”" }),
          ` on
the input element. This should not be set until after the form is submitted or
validation occurs and an error state is triggered. It may be confusing to have
inputs set to an invalid state before a user even starts to fill out a form.`,
        ],
      }),
      `
`,
      e.jsx(r.h2, {
        id: "associating-inline-errors-with-their-fields",
        children: "Associating Inline Errors with their Fields",
      }),
      `
`,
      e.jsxs(r.p, {
        children: [
          `When a text error is added inline with a field, the error should be programmatically
associated with the field. The most common way of doing this is by adding the
`,
          e.jsx(r.code, { children: "aria-describedby" }),
          " attribute to the input and having that reference the ",
          e.jsx(r.code, { children: "id" }),
          ` of the
element containing the error. Another technique is to add the error into the form
label itself dynamically.`,
        ],
      }),
      `
`,
      e.jsxs(r.p, {
        children: [
          e.jsx(r.code, { children: "aria-describedby" }),
          " example:",
        ],
      }),
      `
`,
      e.jsx(a, {
        code: `
<label for=”fname”>First Name (required)</label>
<input type=”text” id=”fname” aria-describedby=”fnameerror”>
<span id=”fnameerror”>Error: Please enter your first name</span>
`,
        language: "html",
      }),
      `
`,
      e.jsx(r.h2, {
        id: "shifting-focus-to-errors",
        children: "Shifting Focus to Errors",
      }),
      `
`,
      e.jsxs(r.p, {
        children: [
          `When a form is submitted and errors are added, focus should move either to the list
of errors (if provided) or to the first field in error if using inline validation. If
you submit a form, and an error message is added in its place, then focus should be
placed on the error message. See more about `,
          e.jsx(r.a, {
            href: "https://nypl.github.io/nypl-design-system/reservoir/v3/?path=/docs/accessibility-guide-managing-focus--docs#how-to-manage-focus",
            rel: "nofollow",
            children: "how to manage focus",
          }),
          ".",
        ],
      }),
      `
`,
      e.jsx(r.h2, { id: "nypl-patterns", children: "NYPL Patterns" }),
      `
`,
      e.jsx(r.p, {
        children: "NYPL will use a formal tone when writing error messages.",
      }),
      `
`,
      e.jsx(r.h3, { id: "form-inputs", children: "Form Inputs" }),
      `
`,
      e.jsx(r.p, {
        children: `Error messages applied to form input fields should be prepended with "There was a problem."
The remainder of the error message should give details about the "problem."`,
      }),
      `
`,
      e.jsx(r.h2, { id: "resources", children: "Resources" }),
      `
`,
      e.jsxs(r.ul, {
        children: [
          `
`,
          e.jsx(r.li, {
            children: e.jsx(r.a, {
              href: "https://webaim.org/techniques/formvalidation/",
              rel: "nofollow",
              children: "Usable and Accessible Form Validation and Recovery",
            }),
          }),
          `
`,
        ],
      }),
    ],
  });
}
function d(i = {}) {
  const { wrapper: r } = { ...o(), ...i.components };
  return r ? e.jsx(r, { ...i, children: e.jsx(s, { ...i }) }) : s(i);
}
export { d as default };
