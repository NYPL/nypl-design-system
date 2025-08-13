import{u as a,j as e,M as d,L as i,bv as h,C as s,bw as c}from"./iframe-CFLVJZOZ.js";import{H as r,W as o,T as x,A as p,a as j,I as m}from"./HelperErrorText.stories-S-lxMkWz.js";import{C as u}from"./ComponentChangelogTable-DvY0SxTs.js";const f=[{date:"2024-09-19",version:"3.3.2",type:"Bug Fix",affects:["Styles"],notes:["Fixes issue where, if text value was not a string, necessary styles weren't applied."]},{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `HelperErrorTextProps` interface."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function l(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:r}),`
`,e.jsx(n.h1,{id:"helpererrortext",children:"HelperErrorText"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.0.10"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.3.2"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#html-and-jsx-children",target:"_self",children:"HTML and JSX Children"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#invalid-state",target:"_self",children:"Invalid State"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:r}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["In the Reservoir Design System (DS), the ",e.jsx(n.code,{children:"HelperErrorText"}),` component is always
used as a child component when composing more complex components.`]}),`
`,e.jsxs(n.p,{children:["In the case of form components, the ",e.jsx(n.code,{children:"HelperErrorText"}),` component is associated
with a related input field by using the `,e.jsx(n.code,{children:"aria-describedby"}),` attribute in the
associated element. This pattern ensures that the content of the
`,e.jsx(n.code,{children:"HelperErrorText"})," component is made available to screenreaders."]}),`
`,e.jsxs(n.p,{children:["This component will always render at least an empty ",e.jsx(n.code,{children:"<div>"}),` element with an
`,e.jsx(n.code,{children:'aria-live="polite"'}),` attribute set even if no text content is passed. This is to
ensure that the accessibility guideline for dynamic content is met. One expected
use case of the `,e.jsx(n.code,{children:"HelperErrorText"}),` component is to dynamically render error text
when a form field is invalid. In that scenario, the dynamically updated error
text will be read by assistive technologies.`]}),`
`,e.jsxs(n.p,{children:["The example below is shows a ",e.jsx(n.code,{children:"TextInput"})," component. The ",e.jsx(n.code,{children:"TextInput"}),` component
uses the `,e.jsx(n.code,{children:"HelperErrorText"})," component to render the red-colored ",e.jsx(n.code,{children:'"This is error text :("'}),` text below the input field and that text element is referenced with
the `,e.jsx(n.code,{children:"aria-describedby"}),` attribute on the HTML input element. This type of
association is handled automatically by all DS `,e.jsx(n.code,{children:"Form Elements"})," components."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"ariaatomic",children:"ariaAtomic"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ariaAtomic"})," prop sets the ",e.jsx(n.code,{children:"aria-atomic"}),` HTML attribute. This allows the
entire DOM element to be presented to assistive technologies. When it is set to
`,e.jsx(n.code,{children:"false"}),", only additions or removals will be read by assistive technologies."]}),`
`,e.jsxs(n.p,{children:["By default, this prop is set to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsx(n.h3,{id:"arialive",children:"ariaLive"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ariaLive"})," prop sets the ",e.jsx(n.code,{children:"aria-live"}),` HTML attribute. This determines the
priority of when text updates in this component should be read to users by
assistive technologies. The possible values are the same as the native HTML
`,e.jsx(n.code,{children:"aria-live"})," attribute: ",e.jsx(n.code,{children:'"off"'}),", ",e.jsx(n.code,{children:'"polite"'}),", and ",e.jsx(n.code,{children:'"assertive"'}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"off"'}),` value indicates that updates should not be announced and when this
value is passed, the `,e.jsx(n.code,{children:"aria-live"}),` attribute will not be added at all. The
`,e.jsx(n.code,{children:'"polite"'}),` value indicates that updates will be announced at the next available
time slot. The `,e.jsx(n.code,{children:'"assertive"'}),` value indicates that updates should be announced
immediately, but this is not recommended as it can interruptive to the user.`]}),`
`,e.jsxs(n.p,{children:[`In order to meet the accessibility guidelines for dynamic content updates, this
attribute is set in the wrapper `,e.jsx(n.code,{children:"<div>"}),` element that is always rendered by the
`,e.jsx(n.code,{children:"HelperErrorText"})," component."]}),`
`,e.jsxs(n.p,{children:["By default, this prop is set to ",e.jsx(n.code,{children:'"polite"'}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",rel:"nofollow",children:"MDN aria-describedby Attribute"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",rel:"nofollow",children:"MDN ARIA live regions"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-1.1/#aria-live",rel:"nofollow",children:"W3C WAI-ARIA 1.1 - aria-live (property)"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html",rel:"nofollow",children:"W3C ARIA19: Using ARIA role=alert or Live Regions to Identify Errors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.digitala11y.com/aria-live-properties/",rel:"nofollow",children:"DigitalA11y WAI-ARIA:aria-live (Property)"})}),`
`]}),`
`,e.jsx(n.h2,{id:"html-and-jsx-children",children:"HTML and JSX Children"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"HelperErrorText"}),` component can render any HTML element or React component
through the `,e.jsx(n.code,{children:"text"})," prop. Note that the ",e.jsx(n.code,{children:"text"})," value is always wrapped in a ",e.jsx(n.code,{children:"Box"}),` with
margin top, so if the elements you pass have margin or padding on top, the text may appear
to have too much space.`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"invalid-state",children:"Invalid State"}),`
`,e.jsxs(n.p,{children:["Set the ",e.jsx(n.code,{children:"isInvalid"})," prop to ",e.jsx(n.code,{children:"true"}),` to render the passed text content with the
NYPL "invalid" styling.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:f})]})}function w(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{w as default};
