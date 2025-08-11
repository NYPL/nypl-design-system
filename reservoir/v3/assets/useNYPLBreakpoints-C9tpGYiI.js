import{u as i,j as e,M as r,S as o}from"./iframe-D93LbwGv.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Hooks/useNYPLBreakpoints"}),`
`,e.jsx(n.h1,{id:"usenyplbreakpoints",children:"useNYPLBreakpoints"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Hook Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.0.4"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.0.5"})})]})]})]}),`
`,e.jsxs(n.p,{children:["This custom hook is inspired by Chakra's ",e.jsx(n.code,{children:"useMediaQuery"}),` hook. Internally, the
hook uses the `,e.jsx(n.code,{children:"useMediaQuery"})," hook and the ",e.jsx(n.code,{children:"MediaMatch"}),` API to determine the
current breakpoint size based on NYPL's breakpoint configuration.`]}),`
`,e.jsx(n.h2,{id:"mobile-first",children:"Mobile-First"}),`
`,e.jsxs(n.p,{children:[`In order to follow mobile-first responsive design patterns, the "min-width"
media query is used with the breakpoint configuration. The list of breakpoints
can be found on the `,e.jsx(n.a,{href:"../?path=/docs/style-guide-breakpoints--docs",children:`Reservoir's
Breakpoints`})," style guide."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"The hook returns an object with five boolean values:"}),`
`,e.jsx(o,{code:`
const {
isLargerThanSmall,
isLargerThanMedium,
isLargerThanMobile,
isLargerThanLarge,
isLargerThanXLarge,
} = useNYPLBreakpoints();
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:[`For the following example, we'll use the NYPL specific mobile breakpoint value.
This breakpoint value is based on the "medium" breakpoint value of `,e.jsx(n.code,{children:'"38em"'}),`
(or `,e.jsx(n.code,{children:'"600px"'}),`). If different components need to be conditionally rendered based
on the current size of the viewport, we can use the `,e.jsx(n.code,{children:"isLargerThanMobile"}),`
boolean value.`]}),`
`,e.jsx(o,{code:`
const DesktopLayout = () => ...
const MobileLayout = () => ...
// ...
<Box>
<Text>
  {isLargerThanMobile ? "Larger than mobile" : "Smaller than mobile"}
</Text>
{isLargerThanMobile ? <DesktopLayout /> : <MobileLayout />}
</Box>
`,language:"jsx"})]})}function d(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default};
