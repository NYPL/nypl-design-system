import { u as r, j as e, M as i, S as s } from "./iframe-D93LbwGv.js";
function o(t) {
  const n = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...r(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(i, { title: "Hooks/useNYPLTheme" }),
      `
`,
      e.jsx(n.h1, { id: "usenypltheme", children: "useNYPLTheme" }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: "Hook Version" }),
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
                    children: e.jsx(n.code, { children: "0.25.2" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "0.25.2" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This custom hook is based on Chakra UI's ",
          e.jsx(n.code, { children: "useTheme" }),
          ` hook. If your application
does not use CSS or SCSS files and you want to write CSS-in-JS styles in your
React components, the `,
          e.jsx(n.code, { children: "useNYPLTheme" }),
          ` hook will provide you with NYPL-specific
style values.`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "usage", children: "Usage" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "This hook depends on the ",
          e.jsx(n.code, { children: "DSProvider" }),
          ` component and if the function is used
outside of this wrapper component, then the theme object will be empty. After
importing and rendering the `,
          e.jsx(n.code, { children: "DSProvider" }),
          ` wrapper component, your children
components can use this hook function.`,
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
import { useNYPLTheme } from "@nypl/design-system-react-components";
// ...
const theme = useNYPLTheme();
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "theme" }),
          ` variable will be a JS object with design token style values.
This will allow you to use NYPL-specific styles in your components through CSS-in-JS.`,
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
// theme:
{
breakpoints: { ... },
colors: {
  brand: { ... },
  section: { ... },
  transparent: { ... },
  ui: { ... },
},
fontSizes: { ... },
fontWeights: { ... },
fonts: { ... },
radii: { ... },
space: { ... },
}
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.ol, {
        children: [
          `
`,
          e.jsx(n.li, { children: "NYPL DS Components" }),
          `
`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "All DS components ",
          e.jsx(n.em, { children: "should" }),
          ` be used with their current styles. If a DS component
needs an updated style, first contact the Design System and UX teams about this
update. If you really `,
          e.jsx(n.em, { children: "need" }),
          ` to update a style and there is no available
variant, then you can add styles directly as style prop.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "For example, if the ",
          e.jsx(n.code, { children: "Heading" }),
          ` component should render the text in NYPL's green
color used for "success primary" and add a bold font weight, then you can do
the following:`,
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
const theme = useNYPLTheme();
// ...
return (
<div>
  <Heading
    level={2}
    color={theme.colors.ui.success.primary}
    fontWeight={theme.fontWeights.bold}
  >
    Get a Digital Library Card Today in a Few Easy Steps
  </Heading>
  {/* Other components */}
</div>
);
`,
        language: "jsx",
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Of course, you can destructure the ",
          e.jsx(n.code, { children: "theme" }),
          ` object to only get the object keys
you need for your component (this is a general example). Log the object to the
console to see all the available styles.`,
        ],
      }),
      `
`,
      e.jsxs(n.ol, {
        start: "2",
        children: [
          `
`,
          e.jsx(n.li, { children: "HTML Components" }),
          `
`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "Use the ",
          e.jsx(n.code, { children: "style" }),
          " attribute in HTML components to add inline styles.",
        ],
      }),
      `
`,
      e.jsx(s, {
        code: `
<p style={{ color: theme.colors.ui.success.primary }}>
If you are 13 or older and live, work, attend school, or pay property taxes in
New York State, you can get a free digital library card right now using this
online form. Visitors to New York State can also use this form to apply for a
temporary card.
</p>
`,
        language: "jsx",
      }),
    ],
  });
}
function l(t = {}) {
  const { wrapper: n } = { ...r(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(o, { ...t }) }) : o(t);
}
export { l as default };
