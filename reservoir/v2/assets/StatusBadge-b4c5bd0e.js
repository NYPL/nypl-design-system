import{j as t,a as n,F as c}from"./jsx-runtime-fdf4db99.js";import{M as l,D as p,C as o,A as m,b as g}from"./index-445595fc.js";import{S as a,W as s,H as u,L as f,I as b}from"./StatusBadge.stories-425ea5c3.js";import{L as r}from"./Link-24c1437a.js";import{C as y}from"./ComponentChangelogTable-310bbbfd.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Icon-4eeffe51.js";import"./StatusBadge-fc3ed616.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";const v=[{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles","Documentation"],notes:["Updated the styles so that if a dev passes an icon to the badge as well as text, the icon and text line up with one another"]}];function d(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3"},h(),i.components);return n(c,{children:[t(l,{of:a}),`
`,t(e.h1,{id:"statusbadge",children:"StatusBadge"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.18.7"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"2.1.6"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#patterns",target:"_self",children:"Patterns"}),`
`]}),`
`,n(e.li,{children:[`
`,t(r,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(p,{of:a}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(o,{of:s}),`
`,t(m,{of:s}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The visual aspect of the ",t(e.code,{children:"StatusBadge"}),` component displays three different status
levels through the use of three different colors. It is important to assign
the appropriate text so that the user can understand the priority level of the
`,t(e.code,{children:"StatusBadge"}),", and not rely just on the color."]}),`
`,t(e.h2,{id:"patterns",children:"Patterns"}),`
`,t(e.h3,{id:"higher-barrier",children:"Higher Barrier"}),`
`,n(e.p,{children:[`Used in instances where the associated message is the highest barrier. Use
`,t(e.code,{children:'"high"'})," and ",t(e.code,{children:'"medium"'})," for these levels."]}),`
`,t(o,{of:u}),`
`,t(e.h3,{id:"lower-barrier",children:"Lower Barrier"}),`
`,n(e.p,{children:[`Used in instances where the associated message is the lower barrier. Use
`,t(e.code,{children:'"low"'})," for this level which is the default."]}),`
`,t(o,{of:f}),`
`,t(e.h3,{id:"icons",children:"Icons"}),`
`,n(e.p,{children:["You may render an icon within the ",t(e.code,{children:"StatusBadge"}),` by passing it as a child to the component.
If you are using an icon, you should still pass text to the badge so that the user can
understand its meaning.`]}),`
`,n(e.p,{children:["You will have to pass a ",t(e.code,{children:"margin-left"})," or ",t(e.code,{children:"margin-right"}),` to add space
between the icon and the text. The use of the design tokens (ie, `,t(e.code,{children:"xs"}),") is encouraged."]}),`
`,t(o,{of:b}),`
`,t(g,{code:`
// Icon first (add margin-right)

<StatusBadge level="high">
  <Icon color="brand.primary" mr="xs" name="errorFilled" size="medium" />
  On-Site Access Only
</StatusBadge>

// Icon second (add margin-left)

<StatusBadge level="low">
  Registration Required
  <Icon color="ui.black" ml="xs" name="actionIdentityFilled" size="medium" />
</StatusBadge>
`,language:"jsx"}),`
`,t(e.h2,{id:"changelog",children:"Changelog"}),`
`,t(y,{changelogData:v})]})}function N(i={}){const{wrapper:e}=Object.assign({},h(),i.components);return e?t(e,Object.assign({},i,{children:t(d,i)})):d(i)}export{N as default};
//# sourceMappingURL=StatusBadge-b4c5bd0e.js.map
