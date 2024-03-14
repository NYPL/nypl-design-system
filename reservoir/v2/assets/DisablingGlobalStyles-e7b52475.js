import{j as t,a as n,F as a}from"./jsx-runtime-fdf4db99.js";import{M as d,b as s}from"./index-445595fc.js";import{L as o}from"./Link-24c1437a.js";import{u as i}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function r(l){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",h3:"h3",a:"a",strong:"strong",em:"em"},i(),l.components);return n(a,{children:[t(d,{title:"Development Guide/Disabling Global Styles"}),`
`,t(e.h1,{id:"disabling-global-styles",children:"Disabling Global Styles"}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(o,{href:"global-styles",target:"_self",children:"Global Styles"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#disabling-styles",target:"_self",children:"Disabling Styles"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"global-styles",children:"Global Styles"}),`
`,n(e.p,{children:["By default, the ",t(e.code,{children:"DSProvider"}),` component will add CSS reset rules and global base
styles defined in the DS. These are intentional and necessary to style elements
and components based on the Reservoir Design System (DS).`]}),`
`,t(s,{code:`
<DSProvider>
  <div className="my-app">
    {children}
  </div>
</DSProvider>
`,language:"tsx"}),`
`,t(e.h3,{id:"reset-css",children:"Reset CSS"}),`
`,n(e.p,{children:["The CSS reset styles are based on ",t(e.a,{href:"https://github.com/chakra-ui/chakra-ui/blob/%40chakra-ui/react%401.8.8/packages/css-reset/src/css-reset.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra's CSS reset"}),`
rules. These rules affect native HTML elements but are general conventions that
help normalize the appearance of elements across browsers.`]}),`
`,t(e.h3,{id:"global-styles-1",children:"Global Styles"}),`
`,n(e.p,{children:["The DS global styles are based on its own ",t(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/theme/foundations/global.ts",target:"_blank",rel:"nofollow noopener noreferrer",children:"global styles"}),`.
These styles are intentional and affect the native HTML `,t(e.code,{children:"body"}),", ",t(e.code,{children:"a"}),", ",t(e.code,{children:"svg"}),", ",t(e.code,{children:"button"}),`,
`,t(e.code,{children:"select"}),", ",t(e.code,{children:"input"}),", ",t(e.code,{children:"textarea"}),", ",t(e.code,{children:"iframe"}),", ",t(e.code,{children:"p"}),", ",t(e.code,{children:"ul"}),", and ",t(e.code,{children:"ol"}),`. These rules help
keep DS components consistent across applications and websites.`]}),`
`,t(e.h2,{id:"disabling-styles",children:"Disabling Styles"}),`
`,n(e.p,{children:[t(e.strong,{children:"We recommend to not disable the CSS reset rules and to include global styles."}),`
If you think your app may require disabling either or both, please reach out to
the DS team to discuss.`]}),`
`,n(e.p,{children:[`There are situations where you may want to disable these global styles. For
example, the NYPL `,t(e.code,{children:"Header"}),` app is a DS-based application that is rendered on top
of other applications and websites. These digital products `,t(e.em,{children:"may"}),` not be built
with the DS and, therefore, the global base styles of the application may
conflict with the styles of the DS.`]}),`
`,n(e.p,{children:["In order to disable the CSS reset rules, set the ",t(e.code,{children:"resetCSS"})," prop to ",t(e.code,{children:"false"}),`. In
order to disable the global styles, set the `,t(e.code,{children:"disableGlobalStyles"})," prop to ",t(e.code,{children:"true"}),"."]}),`
`,t(s,{code:`
<DSProvider resetCSS={false} disableGlobalStyle>
  <div className="my-app">
    {children}
  </div>
</DSProvider>
`,language:"tsx"})]})}function j(l={}){const{wrapper:e}=Object.assign({},i(),l.components);return e?t(e,Object.assign({},l,{children:t(r,l)})):r(l)}export{j as default};
//# sourceMappingURL=DisablingGlobalStyles-e7b52475.js.map
