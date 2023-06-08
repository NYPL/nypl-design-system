import{j as n,a as i,F as h}from"./jsx-runtime-09ad29cb.js";import{M as s,D as p,C as o,A as m,b as f}from"./index-42243e0e.js";import{N as c,W as d,a as b,b as u,C as g,H as w,D as y}from"./Notification.stories-85dd7a0f.js";import{L as r}from"./Link-0ed02cf7.js";import{u as l}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Icon-6616a4b9.js";import"./Notification-69d32803.js";import"./Button-a3ea41e0.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";function a(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a"},l(),t.components);return i(h,{children:[n(s,{of:c}),`
`,n(e.h1,{id:"notification",children:"Notification"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.23.2"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(r,{href:"#overiew",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#variants",target:"_self",children:"Variants"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#custom-icon",target:"_self",children:"Custom Icon"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#dismissible",target:"_self",children:"Dismissible"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(p,{of:c}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"}),` component is a configurable callout that should be used to
display important messages.`]}),`
`,i(e.p,{children:["In the preview below, the border around the ",n(e.code,{children:"Notification"}),` is not part of the
component. It has been added to help illustrate how the `,n(e.code,{children:"Notification"}),` sits
within a parent element.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(o,{of:d}),`
`,n(m,{of:d}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"})," component renders with an HTML ",n(e.code,{children:"aside"}),` element as its
wrapper. This is an HTML landmark element that is similar to adding an attribute
of `,n(e.code,{children:'role="complementary"'}),`. For accessibility purposes, landmark elements should
not be rendered inside other landmark elements such as the `,n(e.code,{children:"header"})," and ",n(e.code,{children:"footer"}),`
landmark elements. Adding a `,n(e.code,{children:"Notification"})," component inside an HTML ",n(e.code,{children:"main"}),`
landmark element is acceptable.`]}),`
`,n(e.h3,{id:"aria-label",children:"ARIA Label"}),`
`,i(e.p,{children:["Every ",n(e.code,{children:"Notification"})," component must have a unique ",n(e.code,{children:"aria-label"}),` attribute. This
is set through the `,n(e.code,{children:"ariaLabel"})," prop. A unique ",n(e.code,{children:"aria-label"}),` value, along with the
`,n(e.code,{children:"aside"}),` HTML landmark element, helps screen readers better navigate a page with
multiple `,n(e.code,{children:"Notification"}),"s."]}),`
`,n(e.h3,{id:"icons",children:"Icons"}),`
`,i(e.p,{children:["Icons rendered in the ",n(e.code,{children:"Notification"}),` component are decorative by default which
means that they are hidden to screen readers. Since the "X" close icon inside
the dismissible button is decorative and because there is no discernible text
inside the button, an `,n(e.code,{children:"aria-label"})," attribute is added to the button."]}),`
`,n(e.h3,{id:"language-patterns",children:"Language Patterns"}),`
`,i(e.p,{children:["When the ",n(e.code,{children:"Notification"}),` component is rendered, the text within the component
should always include wording that aligns with the type of notitication that is
being delivered. For example, if the notification is a warning or error, the
heading or body copy within the notification should use the words `,n(e.code,{children:'"warning"'}),` or
`,n(e.code,{children:'"error"'})," and provide a clear description of the existing or potential isssue."]}),`
`,n(e.h3,{id:"dynamic-notifications",children:"Dynamic Notifications"}),`
`,i(e.p,{children:[`If dynamically generated notifications are required, a container into which the
notification will be injected should be included in the DOM. The container
element should have `,n(e.code,{children:'aria-live="polite"'}),` applied. The container element should
always be rendered in the DOM regardless of the presence of the Notification
component. This DOM structure will allow the newly generated content to be
recognized and announced by assistive technology.`]}),`
`,n(f,{code:`
<div aria-live="polite">
  <Notification {...props} />
</div>
`,language:"tsx"}),`
`,n(e.h3,{id:"resources",children:"Resources"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN Aria: complementary role"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.deque.com/blog/creating-accessible-svgs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque Creating Accessible SVGs"})}),`
`,n(e.li,{children:n(e.a,{href:"https://css-tricks.com/accessible-svg-icons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Tricks Accessible SVG Icons"})}),`
`]}),`
`,n(e.h2,{id:"notification-heading",children:"Notification Heading"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"})," component can be rendered with and without a heading."]}),`
`,n(o,{of:b}),`
`,n(e.h2,{id:"notification-icon",children:"Notification Icon"}),`
`,n(e.h3,{id:"default-icon",children:"Default Icon"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"}),` icon can be displayed with or without an icon. The icon can
be hidden with the `,n(e.code,{children:"showIcon"})," prop set to ",n(e.code,{children:"false"}),"."]}),`
`,n(o,{of:u}),`
`,n(e.h3,{id:"custom-icon",children:"Custom Icon"}),`
`,i(e.p,{children:["The default icon can be overridden by using the ",n(e.code,{children:"icon"})," prop to pass a custom ",n(e.code,{children:"Icon"})," component."]}),`
`,n(o,{of:g}),`
`,n(e.h2,{id:"with-html-content",children:"With HTML Content"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"notificationContent"})," prop can accept HTML."]}),`
`,n(o,{of:w}),`
`,n(e.h2,{id:"dismissible",children:"Dismissible"}),`
`,i(e.p,{children:["A dismissible ",n(e.code,{children:"Notification"}),` component can be created by setting the
`,n(e.code,{children:"dismissible"})," prop to ",n(e.code,{children:"true"}),`. Once the "X" close icon on the upper right is
clicked, the `,n(e.code,{children:"Notification"}),` will be removed from the DOM, therefore it only
appears once.`]}),`
`,n(o,{of:y})]})}function Q(t={}){const{wrapper:e}=Object.assign({},l(),t.components);return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{Q as default};
//# sourceMappingURL=Notification-fa5b3e13.js.map
