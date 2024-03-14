import{j as n,a as o,F as s}from"./jsx-runtime-fdf4db99.js";import{M as d,b as i}from"./index-445595fc.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";function r(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",h2:"h2",a:"a"},a(),t.components);return o(s,{children:[n(d,{title:"Hooks/useNYPLBreakpoints"}),`
`,n(e.h1,{id:"usenyplbreakpoints",children:"useNYPLBreakpoints"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Hook Version"}),n(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.0.4"})})]}),o(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.0.5"})})]})]})]}),`
`,o(e.p,{children:["This custom hook is inspired by Chakra's ",n(e.code,{children:"useMediaQuery"}),` hook. Internally, the
hook uses the `,n(e.code,{children:"useMediaQuery"})," hook and the ",n(e.code,{children:"MediaMatch"}),` API to determine the
current breakpoint size based on NYPL's breakpoint configuration.`]}),`
`,n(e.h2,{id:"mobile-first",children:"Mobile-First"}),`
`,o(e.p,{children:[`In order to follow mobile-first responsive design patterns, the "min-width"
media query is used with the breakpoint configuration. The list of breakpoints
can be found on the `,n(e.a,{href:"../?path=/docs/style-guide-breakpoints--docs",children:`Reservoir's
Breakpoints`})," style guide."]}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.p,{children:"The hook returns an object with five boolean values:"}),`
`,n(i,{code:`
const {
  isLargerThanSmall,
  isLargerThanMedium,
  isLargerThanMobile,
  isLargerThanLarge,
  isLargerThanXLarge,
} = useNYPLBreakpoints();
`,language:"jsx"}),`
`,o(e.p,{children:[`For the following example, we'll use the NYPL specific mobile breakpoint value.
This breakpoint value is based on the "medium" breakpoint value of `,n(e.code,{children:'"38em"'}),`
(or `,n(e.code,{children:'"600px"'}),`). If different components need to be conditionally rendered based
on the current size of the viewport, we can use the `,n(e.code,{children:"isLargerThanMobile"}),`
boolean value.`]}),`
`,n(i,{code:`
const DesktopLayout = () => ...
const MobileLayout = () => ...
// ...
<Box>
  <Text>
    {isLargerThanMobile ? "Larger than mobile" : "Smaller than mobile"}
  </Text>
  {isLargerThanMobile ? <DesktopLayout /> : <MobileLayout />}
</Box>
`,language:"jsx"})]})}function w(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}export{w as default};
//# sourceMappingURL=useNYPLBreakpoints-303ec0e7.js.map
