import{j as t,a as n,F as d}from"./jsx-runtime-fdf4db99.js";import{M as c,b as i}from"./index-445595fc.js";import{u as s}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";function r(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",h2:"h2",ol:"ol",li:"li",em:"em"},s(),o.components);return n(d,{children:[t(c,{title:"Hooks/useNYPLTheme"}),`
`,t(e.h1,{id:"usenypltheme",children:"useNYPLTheme"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Hook Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.25.2"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"0.25.2"})})]})]})]}),`
`,n(e.p,{children:["This custom hook is based on Chakra UI's ",t(e.code,{children:"useTheme"}),` hook. If your application
does not use CSS or SCSS files and you want to write CSS-in-JS styles in your
React components, the `,t(e.code,{children:"useNYPLTheme"}),` hook will provide you with NYPL-specific
style values.`]}),`
`,t(e.h2,{id:"usage",children:"Usage"}),`
`,n(e.p,{children:["This hook depends on the ",t(e.code,{children:"DSProvider"}),` component and if the function is used
outside of this wrapper component, then the theme object will be empty. After
importing and rendering the `,t(e.code,{children:"DSProvider"}),` wrapper component, your children
components can use this hook function.`]}),`
`,t(i,{code:`
import { useNYPLTheme } from "@nypl/design-system-react-components";
// ...
const theme = useNYPLTheme();
`,language:"jsx"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"theme"}),` variable will be a JS object with design token style values.
This will allow you to use NYPL-specific styles in your components through CSS-in-JS.`]}),`
`,t(i,{code:`
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
`,language:"jsx"}),`
`,n(e.ol,{children:[`
`,t(e.li,{children:"NYPL DS Components"}),`
`]}),`
`,n(e.p,{children:["All DS components ",t(e.em,{children:"should"}),` be used with their current styles. If a DS component
needs an updated style, first contact the Design System and UX teams about this
update. If you really `,t(e.em,{children:"need"}),` to update a style and there is no available
variant, then you can add styles directly as style prop.`]}),`
`,n(e.p,{children:["For example, if the ",t(e.code,{children:"Heading"}),` component should render the text in NYPL's green
color used for "success primary" and add a bold font weight, then you can do
the following:`]}),`
`,t(i,{code:`
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
`,language:"jsx"}),`
`,n(e.p,{children:["Of course, you can destructure the ",t(e.code,{children:"theme"}),` object to only get the object keys
you need for your component (this is a general example). Log the object to the
console to see all the available styles.`]}),`
`,n(e.ol,{start:"2",children:[`
`,t(e.li,{children:"HTML Components"}),`
`]}),`
`,n(e.p,{children:["Use the ",t(e.code,{children:"style"})," attribute in HTML components to add inline styles."]}),`
`,t(i,{code:`
<p style={{ color: theme.colors.ui.success.primary }}>
  If you are 13 or older and live, work, attend school, or pay property taxes in
  New York State, you can get a free digital library card right now using this
  online form. Visitors to New York State can also use this form to apply for a
  temporary card.
</p>
`,language:"jsx"})]})}function x(o={}){const{wrapper:e}=Object.assign({},s(),o.components);return e?t(e,Object.assign({},o,{children:t(r,o)})):r(o)}export{x as default};
//# sourceMappingURL=useNYPLTheme-f67493da.js.map
