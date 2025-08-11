import{u as a,j as e,M as i,L as l,S as t}from"./iframe-D93LbwGv.js";function o(n){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Development Guide/Disabling Global Styles"}),`
`,e.jsx(s.h1,{id:"disabling-global-styles",children:"Disabling Global Styles"}),`
`,e.jsx(s.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(l,{href:"#global-styles",target:"_self",children:"Global Styles"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(l,{href:"#disabling-styles",target:"_self",children:"Disabling Styles"}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"global-styles",children:"Global Styles"}),`
`,e.jsxs(s.p,{children:["By default, the ",e.jsx(s.code,{children:"DSProvider"}),` component will add CSS reset rules and global base
styles defined in the DS. These are intentional and necessary to style elements
and components based on the Reservoir Design System (DS).`]}),`
`,e.jsx(t,{code:`
<DSProvider>
<div className="my-app">
  {children}
</div>
</DSProvider>
`,language:"tsx"}),`
`,e.jsx(s.h3,{id:"reset-css",children:"Reset CSS"}),`
`,e.jsxs(s.p,{children:["The CSS reset styles are based on ",e.jsx(s.a,{href:"https://github.com/chakra-ui/chakra-ui/blob/%40chakra-ui/react%401.8.8/packages/css-reset/src/css-reset.tsx",rel:"nofollow",children:"Chakra's CSS reset"}),`
rules. These rules affect native HTML elements but are general conventions that
help normalize the appearance of elements across browsers.`]}),`
`,e.jsx(s.h3,{id:"global-styles-1",children:"Global Styles"}),`
`,e.jsxs(s.p,{children:["The DS global styles are based on its own ",e.jsx(s.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/theme/foundations/global.ts",rel:"nofollow",children:"global styles"}),`.
These styles are intentional and affect the native HTML `,e.jsx(s.code,{children:"body"}),", ",e.jsx(s.code,{children:"a"}),", ",e.jsx(s.code,{children:"svg"}),", ",e.jsx(s.code,{children:"button"}),`,
`,e.jsx(s.code,{children:"select"}),", ",e.jsx(s.code,{children:"input"}),", ",e.jsx(s.code,{children:"textarea"}),", ",e.jsx(s.code,{children:"iframe"}),", ",e.jsx(s.code,{children:"p"}),", ",e.jsx(s.code,{children:"ul"}),", and ",e.jsx(s.code,{children:"ol"}),`. These rules help
keep DS components consistent across applications and websites.`]}),`
`,e.jsx(s.h2,{id:"disabling-styles",children:"Disabling Styles"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"We recommend to not disable the CSS reset rules and to include global styles."}),`
If you think your app may require disabling either or both, please reach out to
the DS team to discuss.`]}),`
`,e.jsxs(s.p,{children:[`There are situations where you may want to disable these global styles. For
example, the NYPL `,e.jsx(s.code,{children:"Header"}),` app is a DS-based application that is rendered on top
of other applications and websites. These digital products `,e.jsx(s.em,{children:"may"}),` not be built
with the DS and, therefore, the global base styles of the application may
conflict with the styles of the DS.`]}),`
`,e.jsxs(s.p,{children:["In order to disable the CSS reset rules, set the ",e.jsx(s.code,{children:"resetCSS"})," prop to ",e.jsx(s.code,{children:"false"}),`. In
order to disable the global styles, set the `,e.jsx(s.code,{children:"disableGlobalStyles"})," prop to ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsx(t,{code:`
<DSProvider resetCSS={false} disableGlobalStyle>
<div className="my-app">
  {children}
</div>
</DSProvider>
`,language:"tsx"})]})}function d(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
