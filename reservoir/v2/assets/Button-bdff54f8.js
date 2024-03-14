import{j as n,a as t,F as s}from"./jsx-runtime-fdf4db99.js";import{M as a,D as p,C as o,A as u}from"./index-445595fc.js";import{B as d,W as l,a as m,T as b,I as f,P as g,b as w,D as y,c as B}from"./Button.stories-63c770bf.js";import{L as r}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./ButtonGroup-c2c033a6.js";import"./useNYPLBreakpoints-2881f83d.js";import"./iconVariables-437578de.js";import"./Table-64c6aa77.js";function c(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},h(),i.components);return t(s,{children:[n(a,{of:d}),`
`,n(e.h1,{id:"button",children:"Button"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.4"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.0.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#button-groups",target:"_self",children:"Button Groups"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#with-icons",target:"_self",children:"With Icons"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#patterns",target:"_self",children:"Patterns"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#other-examples",target:"_self",children:"Other Examples"}),`
`]}),`
`,t(e.li,{children:[`
`,n(r,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:d}),`
`,t(e.p,{children:["Update the ",n(e.code,{children:"buttonType"}),` in the Controls section to see the types of buttons
that can be rendered.`]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:'"primary"'})," is used for actions that move the user forward. This is the default."]}),`
`,t(e.li,{children:[n(e.code,{children:'"secondary"'})," is used for actions that move the user back, such as cancellations."]}),`
`,t(e.li,{children:[n(e.code,{children:'"text"'})," is used for equally weighted actions in a text based list."]}),`
`,t(e.li,{children:[n(e.code,{children:'"callout"'}),' is used for call to action text such as "Donate".']}),`
`,t(e.li,{children:[n(e.code,{children:'"noBrand"'}),` is a variant used when there is no brand and will display the
background color as black.`]}),`
`,t(e.li,{children:[n(e.code,{children:'"pill"'})," is used for equally weighted actions within cards and always in a set."]}),`
`,t(e.li,{children:[n(e.code,{children:'"link"'})," has been deprecated and should not be used."]}),`
`]}),`
`,t(e.p,{children:["When one and only one ",n(e.code,{children:"Icon"})," component is passed inside a ",n(e.code,{children:"Button"}),` component with
no text, it will automatically be configured to use the `,n(e.code,{children:'"iconOnly"'})," type."]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(o,{of:l}),`
`,n(u,{of:l}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The Reservoir ",n(e.code,{children:"Button"})," component renders an HTML ",n(e.code,{children:"<button>"}),` element that is
accessible. `,n(e.code,{children:"Button"}),`s should be used to perform user actions or submit forms,
never to link and go to another page. For `,n(e.code,{children:"Button"}),`s without text and only an
icon, make sure to pass an `,n(e.code,{children:"aria-label"})," value to the ",n(e.code,{children:"Button"}),". ",n(e.code,{children:"Button"}),`s cannot
have images of text.`]}),`
`,t(e.p,{children:[n(e.code,{children:"Button"}),"s can be rendered in three sizes through the ",n(e.code,{children:"size"})," prop: ",n(e.code,{children:'"small"'}),`,
`,n(e.code,{children:'"medium"'}),", and ",n(e.code,{children:'"large"'}),". The default size is ",n(e.code,{children:'"medium"'}),". Even though the ",n(e.code,{children:'"small"'}),`
size is available, we recommend to use the `,n(e.code,{children:'"medium"'})," and ",n(e.code,{children:'"large"'})," sizes."]}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Button"})," component also has a ",n(e.code,{children:"screenreaderOnlyText"}),` prop that can be used to
add additional text to the component that is only visible to screen readers. This
can be used to provide additional context to the `,n(e.code,{children:"Button"}),` when the text is short,
such as visible "Read more..." text.`]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#button",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI ARIA Button"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI ARIA Button Examples"})}),`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA: button role"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/form/button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Button"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/WCAG21/Understanding/target-size.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI WCAG Target Size"})}),`
`]}),`
`,n(e.h2,{id:"button-groups",children:"Button Groups"}),`
`,t(e.p,{children:[`Primary and secondary buttons should be grouped like in the following example.
The `,n(e.code,{children:"ButtonGroup"})," component should be used to wrap the ",n(e.code,{children:"Button"})," component."]}),`
`,n(o,{of:m}),`
`,n(e.h2,{id:"with-icons",children:"With Icons"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Icon"})," component collaborates great with the ",n(e.code,{children:"Button"}),` component. Check out
`,n(e.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/Icons/Icon.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.code,{children:"src/components/Icons/Icon.tsx"})}),`
to see the full list of icon names that can be rendered.`]}),`
`,n(e.p,{children:"The icon can be placed to the left or the right of the button text."}),`
`,n(o,{of:b}),`
`,t(e.p,{children:[`Text in a button is optional if an icon is rendered, but make sure that there
is an `,n(e.code,{children:"aria-label"})," passed to the ",n(e.code,{children:"Button"})," component ",n(e.code,{children:'aria-label="Previous"'}),"."]}),`
`,n(o,{of:f}),`
`,n(e.h2,{id:"patterns",children:"Patterns"}),`
`,t(e.p,{children:[`Buttons are blue by default but should be red when it is intended to be used as
a call out. The "Back to Top" button must be of `,n(e.code,{children:'buttonType="secondary"'}),` and
must include an up arrow icon on the right side.`]}),`
`,n(o,{of:g}),`
`,n(e.h2,{id:"other-examples",children:"Other Examples"}),`
`,t(e.p,{children:["The variations modified by the ",n(e.code,{children:"buttonType"})," prop:"]}),`
`,n(o,{of:w}),`
`,t(e.p,{children:["Modifying the ",n(e.code,{children:"isDisabled"})," prop:"]}),`
`,n(o,{of:y}),`
`,n(e.h2,{id:"sizes",children:"Sizes"}),`
`,t(e.p,{children:["Update the size of the ",n(e.code,{children:"Button"})," component with the ",n(e.code,{children:"size"}),` prop and values:
`,n(e.code,{children:'"small"'}),", ",n(e.code,{children:'"medium"'}),", ",n(e.code,{children:'"large"'}),". The default size is ",n(e.code,{children:'"medium"'}),"."]}),`
`,n(o,{of:B})]})}function Z(i={}){const{wrapper:e}=Object.assign({},h(),i.components);return e?n(e,Object.assign({},i,{children:n(c,i)})):c(i)}export{Z as default};
//# sourceMappingURL=Button-bdff54f8.js.map
