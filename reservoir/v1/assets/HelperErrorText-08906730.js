import{j as t,a as n,F as h}from"./jsx-runtime-09ad29cb.js";import{M as s,D as p,C as r,A as m}from"./index-42243e0e.js";import{H as l,W as d,T as f,A as b,a as u,I as v}from"./HelperErrorText.stories-c698a185.js";import{L as o}from"./Link-0ed02cf7.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./TextInput-3683470d.js";import"./Label-2b2058d3.js";import"./utils-acca7d12.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./chakra-ui-form-control.esm-c23b95fa.js";function a(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a"},c(),i.components);return n(h,{children:[t(s,{of:l}),`
`,t(e.h1,{id:"helpererrortext",children:"HelperErrorText"}),`
`,n(e.table,{children:[t(e.thead,{children:n(e.tr,{children:[t(e.th,{children:"Component Version"}),t(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[t(e.td,{children:"Added"}),t(e.td,{children:t(e.code,{children:"0.0.10"})})]}),n(e.tr,{children:[t(e.td,{children:"Latest"}),t(e.td,{children:t(e.code,{children:"1.5.0"})})]})]})]}),`
`,t(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,t(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#html-and-jsx-children",target:"_self",children:"HTML and JSX Children"}),`
`]}),`
`,n(e.li,{children:[`
`,t(o,{href:"#invalid-state",target:"_self",children:"Invalid State"}),`
`]}),`
`]}),`
`,t(e.h2,{id:"overview",children:"Overview"}),`
`,t(p,{of:l}),`
`,t(e.h2,{id:"component-props",children:"Component Props"}),`
`,t(r,{of:d}),`
`,t(m,{of:d}),`
`,t(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["In the Reservoir Design System (DS), the ",t(e.code,{children:"HelperErrorText"}),` component is always
used as a child component when composing more complex components.`]}),`
`,n(e.p,{children:["In the case of form components, the ",t(e.code,{children:"HelperErrorText"}),` component is associated
with a related input field by using the `,t(e.code,{children:"aria-describedby"}),` attribute in the
associated element. This pattern ensures that the content of the
`,t(e.code,{children:"HelperErrorText"})," component is made available to screenreaders."]}),`
`,n(e.p,{children:["This component will always render at least an empty ",t(e.code,{children:"<div>"}),` element with an
`,t(e.code,{children:'aria-live="polite"'}),` attribute set even if no text content is passed. This is to
ensure that the accessibility guideline for dynamic content is met. One expected
use case of the `,t(e.code,{children:"HelperErrorText"}),` component is to dynamically render error text
when a form field is invalid. In that scenario, the dynamically updated error
text will be read by assistive technologies.`]}),`
`,n(e.p,{children:["The example below is shows a ",t(e.code,{children:"TextInput"})," component. The ",t(e.code,{children:"TextInput"}),` component
uses the `,t(e.code,{children:"HelperErrorText"})," component to render the red-colored ",t(e.code,{children:'"This is error text :("'}),` text below the input field and that text element is referenced with
the `,t(e.code,{children:"aria-describedby"}),` attribute on the HTML input element. This type of
association is handled automatically by all DS `,t(e.code,{children:"Form Elements"})," components."]}),`
`,t(r,{of:f}),`
`,t(e.h3,{id:"ariaatomic",children:"ariaAtomic"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"ariaAtomic"})," prop sets the ",t(e.code,{children:"aria-atomic"}),` HTML attribute. This allows the
entire DOM element to be presented to assistive technologies. When it is set to
`,t(e.code,{children:"false"}),", only additions or removals will be read by assistive technologies."]}),`
`,n(e.p,{children:["By default, this prop is set to ",t(e.code,{children:"true"}),"."]}),`
`,t(e.h3,{id:"arialive",children:"ariaLive"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"ariaLive"})," prop sets the ",t(e.code,{children:"aria-live"}),` HTML attribute. This determines the
priority of when text updates in this component should be read to users by
assistive technologies. The possible values are the same as the native HTML
`,t(e.code,{children:"aria-live"})," attribute: ",t(e.code,{children:'"off"'}),", ",t(e.code,{children:'"polite"'}),", and ",t(e.code,{children:'"assertive"'}),"."]}),`
`,n(e.p,{children:["The ",t(e.code,{children:'"off"'}),` value indicates that updates should not be announced and when this
value is passed, the `,t(e.code,{children:"aria-live"}),` attribute will not be added at all. The
`,t(e.code,{children:'"polite"'}),` value indicates that updates will be announced at the next available
time slot. The `,t(e.code,{children:'"assertive"'}),` value indicates that updates should be announced
immediately, but this is not recommended as it can interruptive to the user.`]}),`
`,n(e.p,{children:[`In order to meet the accessibility guidelines for dynamic content updates, this
attribute is set in the wrapper `,t(e.code,{children:"<div>"}),` element that is always rendered by the
`,t(e.code,{children:"HelperErrorText"})," component."]}),`
`,n(e.p,{children:["By default, this prop is set to ",t(e.code,{children:'"polite"'}),"."]}),`
`,t(r,{of:b}),`
`,t(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN aria-describedby Attribute"})}),`
`,t(e.li,{children:t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN ARIA live regions"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.w3.org/TR/wai-aria-1.1/#aria-live",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-ARIA 1.1 - aria-live (property)"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA19.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C ARIA19: Using ARIA role=alert or Live Regions to Identify Errors"})}),`
`,t(e.li,{children:t(e.a,{href:"https://www.digitala11y.com/aria-live-properties/",target:"_blank",rel:"nofollow noopener noreferrer",children:"DigitalA11y WAI-ARIA:aria-live (Property)"})}),`
`]}),`
`,t(e.h2,{id:"html-and-jsx-children",children:"HTML and JSX Children"}),`
`,n(e.p,{children:["The ",t(e.code,{children:"HelperErrorText"}),` component can render any HTML element or React component
through the `,t(e.code,{children:"text"})," prop."]}),`
`,t(r,{of:u}),`
`,t(e.h2,{id:"invalid-state",children:"Invalid State"}),`
`,n(e.p,{children:["Set the ",t(e.code,{children:"isInvalid"})," prop to ",t(e.code,{children:"true"}),` to render the passed text content with the
NYPL "invalid" styling.`]}),`
`,t(r,{of:v})]})}function Z(i={}){const{wrapper:e}=Object.assign({},c(),i.components);return e?t(e,Object.assign({},i,{children:t(a,i)})):a(i)}export{Z as default};
//# sourceMappingURL=HelperErrorText-08906730.js.map
