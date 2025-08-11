import { u as o, j as e, M as c, S as d } from "./iframe-D93LbwGv.js";
function t(s) {
  const n = {
    code: "code",
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
    ...o(),
    ...s.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { title: "Hooks/useCloseDropDown" }),
      `
`,
      e.jsx(n.h1, { id: "useclosedropdown", children: "useCloseDropDown" }),
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
                    children: e.jsx(n.code, { children: "1.1.0" }),
                  }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: "Latest" }),
                  e.jsx(n.td, {
                    children: e.jsx(n.code, { children: "1.5.2" }),
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
          `This hook sets event listeners on the document to "close" or set the state of an
open and close UI to `,
          e.jsx(n.code, { children: "false" }),
          `. Typically, this is used for dropdown components
that need to close when:`,
        ],
      }),
      `
`,
      e.jsxs(n.ul, {
        children: [
          `
`,
          e.jsx(n.li, {
            children: "mouse clicks are made outside of the component,",
          }),
          `
`,
          e.jsx(n.li, { children: "the user presses the escape key." }),
          `
`,
        ],
      }),
      `
`,
      e.jsx(n.h2, { id: "usage", children: "Usage" }),
      `
`,
      e.jsxs(n.p, {
        children: [
          `Two arguments are required for this hook, a callback function and a React
`,
          e.jsx(n.code, { children: "ref" }),
          " based on a ",
          e.jsx(n.code, { children: "div" }),
          " element.",
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The callback function is invoked with the ",
          e.jsx(n.code, { children: "false" }),
          ` value passed to it. It expects
the developer to pass a function that accepts a boolean value that updates the
state of the component where the hook is called. This callback function is
triggered when the user clicks outside of the component, or presses the escape
key.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "The ",
          e.jsx(n.code, { children: "ref" }),
          " argument is used in Chakra's ",
          e.jsx(n.code, { children: "useOutsideClick" }),
          ` function to "close" a
component. The `,
          e.jsx(n.code, { children: "ref" }),
          ` allows the function to know where "outside the component"
is.`,
        ],
      }),
      `
`,
      e.jsxs(n.p, {
        children: [
          "In the example below, the ",
          e.jsx(n.code, { children: "ButtonDropDownExample" }),
          ` component keeps track of its
own open/close state and passes the `,
          e.jsx(n.code, { children: "setIsOpen" }),
          ` function to the
`,
          e.jsx(n.code, { children: "useCloseDropDown" }),
          " hook.",
        ],
      }),
      `
`,
      e.jsx(d, {
        code: `
const ButtonDropDownExample = () => {
const [isOpen, setIsOpen] = useState<boolean>(false);
const ref = useRef<HTMLDivElement>(null);
useCloseDropDown(setIsOpen, ref);
// ...
return (
  <div ref={ref}>
    <Button onClick={() => setIsOpen(!isOpen)}>Button Drop Down</Button>
    {isOpen && <div>Your dropdown content here.</div>}
  </div>
);
}`,
        language: "jsx",
      }),
    ],
  });
}
function i(s = {}) {
  const { wrapper: n } = { ...o(), ...s.components };
  return n ? e.jsx(n, { ...s, children: e.jsx(t, { ...s }) }) : t(s);
}
export { i as default };
