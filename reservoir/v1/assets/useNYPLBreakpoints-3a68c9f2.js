import{j as o,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as d,b as r}from"./index-42243e0e.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";function i(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",a:"a",h2:"h2"},a(),t.components);return n(s,{children:[o(d,{title:"Hooks/useNYPLBreakpoints"}),`
`,o(e.h1,{id:"usenyplbreakpoints",children:"useNYPLBreakpoints"}),`
`,n(e.table,{children:[o(e.thead,{children:n(e.tr,{children:[o(e.th,{children:"Hook Version"}),o(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[o(e.td,{children:"Added"}),o(e.td,{children:o(e.code,{children:"1.0.4"})})]}),n(e.tr,{children:[o(e.td,{children:"Latest"}),o(e.td,{children:o(e.code,{children:"1.0.5"})})]})]})]}),`
`,n(e.p,{children:["This custom hook is inspired by Chakra's ",o(e.code,{children:"useMediaQuery"}),` hook. Internally,
the hook uses the `,o(e.code,{children:"useMediaQuery"})," hook and the ",o(e.code,{children:"MediaMatch"}),` API to determine
the current breakpoint size based on NYPL's breakpoint configuration. In order
to follow responsive design patterns, the "min-width" media query is used
with the breakpoint configuration. The list of breakpoints can be found on
the `,o(e.a,{href:"../?path=/docs/style-guide-breakpoints--docs",children:"Reservoir's Breakpoints"}),`
style guide.`]}),`
`,o(e.h2,{id:"usage",children:"Usage"}),`
`,o(e.p,{children:"The hook returns an object with four boolean values:"}),`
`,o(r,{code:`
const {
  isLargerThanSmall,
  isLargerThanMedium,
  isLargerThanMobile,
  isLargerThanLarge,
  isLargerThanXLarge,
} = useNYPLBreakpoints();
`,language:"jsx"}),`
`,n(e.p,{children:[`For the following example, we'll use the NYPL specific mobile breakpoint value.
This breakpoint value is based on the "medium" breakpoint value of `,o(e.code,{children:'"38em"'}),`
(or `,o(e.code,{children:'"600px"'}),`). If different components need to be conditionally rendered based
on the current size of the viewport, we can use the `,o(e.code,{children:"isLargerThanMobile"}),`
boolean value.`]}),`
`,o(r,{code:`
const DesktopLayout = () => ...
const MobileLayout = () => ...
// ...
<Box>
  <Text>
    {isLargerThanMobile ? "Larger than mobile" : "Smaller than mobile"}
  </Text>
  {isLargerThanMobile ? <DesktopLayout /> : <MobileLayout />}
</Box>
`,language:"jsx"})]})}function B(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?o(e,Object.assign({},t,{children:o(i,t)})):i(t)}export{B as default};
//# sourceMappingURL=useNYPLBreakpoints-3a68c9f2.js.map
