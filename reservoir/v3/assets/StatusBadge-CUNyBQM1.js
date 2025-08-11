import{u as d,j as e,M as r,L as s,bv as c,C as i,bw as h,S as x}from"./iframe-D93LbwGv.js";import{S as o,W as l,T as p,L as j,F as u,a as f,I as g}from"./StatusBadge.stories-CcTXJSaG.js";import{C as m}from"./ComponentChangelogTable-Ck_3mwrR.js";const y=[{date:"2025-02-13",version:"3.5.4",type:"New Feature",affects:["Styles","Functionality"],notes:["Adds support for the `fontSize` style prop."]},{date:"2024-04-25",version:"3.1.1",type:"Update",affects:["Styles"],notes:["Updated the `warning` variant to use `ui.warning.tertiary`."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Documentation","Functionality","Styles"],notes:["Chakra 2.8 update.","Added the 'type' prop.","Deprecated the `level` prop.","Updated the UI styles."]},{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles","Documentation"],notes:["Updated the styles so that if a dev passes an icon to the badge as well as text, the icon and text line up with one another"]}];function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o}),`
`,e.jsx(n.h1,{id:"statusbadge",children:"StatusBadge"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.18.7"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.5.4"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#visual-style",target:"_self",children:"Visual Style"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#font-size",target:"_self",children:"Font Size"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#label-capitalization",target:"_self",children:"Capitalization"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#icons",target:"_self",children:"Icons"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The visual aspect of the ",e.jsx(n.code,{children:"StatusBadge"}),` component is able to displays multiple
statuses and priorities through the use of different colors, so it is
recommended to align the usage of the component with the semantic meaning of one
of the component's variants.`]}),`
`,e.jsxs(n.p,{children:["However, when using the ",e.jsx(n.code,{children:"StatusBadge"}),` component, the implementation should not
rely on the color alone to convey meaning, as color is not a universal
experience for everyone. It is important that the meaning of the label aligns
with the general meaning associated with the semantic colors used in a specific
variant. In this way, the user will be able to understand the priority of the
`,e.jsx(n.code,{children:"StatusBadge"})," and not rely just on the color."]}),`
`,e.jsx(n.h2,{id:"visual-style",children:"Visual Style"}),`
`,e.jsx(n.p,{children:"The component offers two props for setting the visual style:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"type"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"level"})," (deprecated)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"type",children:"Type"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The semantic ",e.jsx(n.code,{children:"type"})," variants align with specific uses."]}),`
`,e.jsx(n.li,{children:"Refer to the table below for the recommended purpose of each variant."}),`
`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"level-deprecated",children:"Level (deprecated)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"level"})," variants have been deprecated in favor of the semantic ",e.jsx(n.code,{children:"type"}),`
variants.`]}),`
`,e.jsxs(n.li,{children:["For backward compatibility, the ",e.jsx(n.code,{children:"level"})," prop will override the ",e.jsx(n.code,{children:"type"})," prop."]}),`
`]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"font-size",children:"Font Size"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"fontSize"})," prop to set the font size with the following design tokens:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"desktop.body.body1"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"desktop.body.body2"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"desktop.caption"})}),`
`]}),`
`,e.jsxs(n.p,{children:["The default label font size is ",e.jsx(n.code,{children:"desktop.body.body2"}),"."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"capitalization",children:"Capitalization"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Capitalization of a badge label will not be forced by the component."}),`
`,e.jsx(n.li,{children:"Labels will render exactly as they are passed into the component."}),`
`,e.jsx(n.li,{children:`Text capitalization is dependent on each use case and final decisions should
come from Product and UX.`}),`
`]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["An icon can be rendered within the component by passing a DS ",e.jsx(n.code,{children:"Icon"}),` component
as a child.`]}),`
`,e.jsx(n.li,{children:"When using an icon, text should also be included to ensure understanding."}),`
`,e.jsxs(n.li,{children:[`For proper spacing, add a left or right margin to icons, as needed. Use design
tokens for spacing values (ex. `,e.jsx(n.code,{children:'marginRight="xs"'}),")."]}),`
`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(x,{code:`
// Icon first (add margin-right)

<StatusBadge level="high">
<Icon color="brand.primary" mr="xs" name="errorFilled" size="medium" />
On-Site Access Only
</StatusBadge>

<StatusBadge font-size="caption" type="warning">
<Icon
  color="ui.warning.secondary"
  mr="xs"
  name="actionHelpDefault"
  size="medium"
/>
Missing information
</StatusBadge>

// Icon second (add margin-left)

<StatusBadge level="low">
Registration Required
<Icon color="ui.black" ml="xs" name="actionIdentityFilled" size="medium" />
</StatusBadge>

<StatusBadge font-size="body1" type="informative">
Includes audio
<Icon color="ui.link.secondary" ml="xs" name="headset" size="medium" />
</StatusBadge>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(m,{changelogData:y})]})}function S(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{S as default};
