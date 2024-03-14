import{j as n,a as t,F as i}from"./jsx-runtime-fdf4db99.js";import{M as c,b as d}from"./index-445595fc.js";import{u as r}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";function s(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",ul:"ul",li:"li",h2:"h2"},r(),o.components);return t(i,{children:[n(c,{title:"Hooks/useCloseDropDown"}),`
`,n(e.h1,{id:"useclosedropdown",children:"useCloseDropDown"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Hook Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"1.1.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.2"})})]})]})]}),`
`,t(e.p,{children:[`This hook sets event listeners on the document to "close" or set the state of an
open and close UI to `,n(e.code,{children:"false"}),`. Typically, this is used for dropdown components
that need to close when:`]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"mouse clicks are made outside of the component,"}),`
`,n(e.li,{children:"the user presses the escape key."}),`
`]}),`
`,n(e.h2,{id:"usage",children:"Usage"}),`
`,t(e.p,{children:[`Two arguments are required for this hook, a callback function and a React
`,n(e.code,{children:"ref"})," based on a ",n(e.code,{children:"div"})," element."]}),`
`,t(e.p,{children:["The callback function is invoked with the ",n(e.code,{children:"false"}),` value passed to it. It expects
the developer to pass a function that accepts a boolean value that updates the
state of the component where the hook is called. This callback function is
triggered when the user clicks outside of the component, or presses the escape
key.`]}),`
`,t(e.p,{children:["The ",n(e.code,{children:"ref"})," argument is used in Chakra's ",n(e.code,{children:"useOutsideClick"}),` function to "close" a
component. The `,n(e.code,{children:"ref"}),` allows the function to know where "outside the component"
is.`]}),`
`,t(e.p,{children:["In the example below, the ",n(e.code,{children:"ButtonDropDownExample"}),` component keeps track of its
own open/close state and passes the `,n(e.code,{children:"setIsOpen"}),` function to the
`,n(e.code,{children:"useCloseDropDown"})," hook."]}),`
`,n(d,{code:`
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
}`,language:"jsx"})]})}function T(o={}){const{wrapper:e}=Object.assign({},r(),o.components);return e?n(e,Object.assign({},o,{children:n(s,o)})):s(o)}export{T as default};
//# sourceMappingURL=useCloseDropDown-f1ae9a19.js.map
