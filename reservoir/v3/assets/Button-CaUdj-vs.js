import{u as l,j as e,M as c,L as s,bv as h,C as t,bw as a}from"./iframe-CFLVJZOZ.js";import{C as x}from"./ComponentChangelogTable-DvY0SxTs.js";import{B as i,W as r,a as j,T as u,I as p,P as f,b as m,D as b,c as g}from"./Button.stories-CQ19UAkB.js";import"./iconVariables-Bcc5qynd.js";const y=[{date:"2025-05-22",version:"3.6.2",type:"Bug Fix",affects:["Styles"],notes:["Fixes the style transitions."]},{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Styles"],notes:["Explicitly assigns the height value for each size option to align with VDL."]},{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `ButtonProps` interface."]},{date:"2024-04-25",version:"3.1.1",type:"Update",affects:["Styles"],notes:["Updated the background colors for the `noBrand` variant."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function d(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:i}),`
`,e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.0.4"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.2"})})]})]})]}),`
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
`,e.jsx(s,{href:"#button-groups",target:"_self",children:"Button Groups"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#with-icons",target:"_self",children:"With Icons"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#patterns",target:"_self",children:"Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#other-examples",target:"_self",children:"Other Examples"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:i}),`
`,e.jsxs(n.p,{children:["Update the ",e.jsx(n.code,{children:"buttonType"}),` in the Controls section to see the types of buttons
that can be rendered.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"primary"'})," is used for actions that move the user forward. This is the default."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"secondary"'})," is used for actions that move the user back, such as cancellations."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"text"'})," is used for equally weighted actions in a text based list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"callout"'}),' is used for call to action text such as "Donate".']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"noBrand"'}),` is a variant used when there is no brand and will display the
background color as black.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"pill"'})," is used for equally weighted actions within cards and always in a set."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"link"'})," has been deprecated and should not be used."]}),`
`]}),`
`,e.jsxs(n.p,{children:["When one and only one ",e.jsx(n.code,{children:"Icon"})," component is passed inside a ",e.jsx(n.code,{children:"Button"}),` component with
no text, it will automatically be configured to use the `,e.jsx(n.code,{children:'"iconOnly"'})," type."]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The Reservoir ",e.jsx(n.code,{children:"Button"})," component renders an HTML ",e.jsx(n.code,{children:"<button>"}),` element that is
accessible. `,e.jsx(n.code,{children:"Button"}),`s should be used to perform user actions or submit forms,
never to link and go to another page. For `,e.jsx(n.code,{children:"Button"}),`s without text and only an
icon, make sure to pass an `,e.jsx(n.code,{children:"aria-label"})," value to the ",e.jsx(n.code,{children:"Button"}),". ",e.jsx(n.code,{children:"Button"}),`s cannot
have images of text.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Button"}),"s can be rendered in three sizes through the ",e.jsx(n.code,{children:"size"})," prop: ",e.jsx(n.code,{children:'"small"'}),`,
`,e.jsx(n.code,{children:'"medium"'}),", and ",e.jsx(n.code,{children:'"large"'}),". The default size is ",e.jsx(n.code,{children:'"medium"'}),". Even though the ",e.jsx(n.code,{children:'"small"'}),`
size is available, we recommend to use the `,e.jsx(n.code,{children:'"medium"'})," and ",e.jsx(n.code,{children:'"large"'})," sizes."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Button"})," component also has a ",e.jsx(n.code,{children:"screenreaderOnlyText"}),` prop that can be used to
add additional text to the component that is only visible to screen readers. This
can be used to provide additional context to the `,e.jsx(n.code,{children:"Button"}),` when the text is short,
such as visible "Read more..." text.`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#button",rel:"nofollow",children:"W3C WAI ARIA Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html",rel:"nofollow",children:"W3C WAI ARIA Button Examples"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role",rel:"nofollow",children:"MDN ARIA: button role"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/form/button",rel:"nofollow",children:"Chakra UI Button"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/target-size.html",rel:"nofollow",children:"W3C WAI WCAG Target Size"})}),`
`]}),`
`,e.jsx(n.h2,{id:"button-groups",children:"Button Groups"}),`
`,e.jsxs(n.p,{children:[`Primary and secondary buttons should be grouped like in the following example.
The `,e.jsx(n.code,{children:"ButtonGroup"})," component should be used to wrap the ",e.jsx(n.code,{children:"Button"})," component."]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"with-icons",children:"With Icons"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Icon"})," component collaborates great with the ",e.jsx(n.code,{children:"Button"}),` component. Check out
`,e.jsx(n.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/Icons/Icon.tsx",rel:"nofollow",children:e.jsx(n.code,{children:"src/components/Icons/Icon.tsx"})}),`
to see the full list of icon names that can be rendered.`]}),`
`,e.jsx(n.p,{children:"The icon can be placed to the left or the right of the button text."}),`
`,e.jsx(t,{of:u}),`
`,e.jsxs(n.p,{children:[`Text in a button is optional if an icon is rendered, but make sure that there
is an `,e.jsx(n.code,{children:"aria-label"})," passed to the ",e.jsx(n.code,{children:"Button"})," component ",e.jsx(n.code,{children:'aria-label="Previous"'}),"."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.h2,{id:"patterns",children:"Patterns"}),`
`,e.jsxs(n.p,{children:[`Buttons are blue by default but should be red when it is intended to be used as
a call out. The "Back to Top" button must be of `,e.jsx(n.code,{children:'buttonType="secondary"'}),` and
must include an up arrow icon on the right side.`]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"other-examples",children:"Other Examples"}),`
`,e.jsxs(n.p,{children:["The variations modified by the ",e.jsx(n.code,{children:"buttonType"})," prop:"]}),`
`,e.jsx(t,{of:m}),`
`,e.jsxs(n.p,{children:["Modifying the ",e.jsx(n.code,{children:"isDisabled"})," prop:"]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsxs(n.p,{children:["Update the size of the ",e.jsx(n.code,{children:"Button"})," component with the ",e.jsx(n.code,{children:"size"}),` prop and values:
`,e.jsx(n.code,{children:'"small"'}),", ",e.jsx(n.code,{children:'"medium"'}),", ",e.jsx(n.code,{children:'"large"'}),". The default size is ",e.jsx(n.code,{children:'"medium"'}),"."]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:y})]})}function C(o={}){const{wrapper:n}={...l(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{C as default};
