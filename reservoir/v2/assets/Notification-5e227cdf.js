import{j as n,a as i,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,C as t,A as f,b as r}from"./index-445595fc.js";import{N as a,W as d,a as g,C as u,b,c as w,H as y,D as v}from"./Notification.stories-c14bd585.js";import{L as o}from"./Link-24c1437a.js";import{C as N}from"./ComponentChangelogTable-310bbbfd.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Icon-4eeffe51.js";import"./Notification-715070ee.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Button-948e9be8.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./List-582282a6.js";import"./Table-64c6aa77.js";const H=[{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles"],notes:["Updates focus ring color to match color of text."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `notificationHeading` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function l(c){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a"},h(),c.components);return i(s,{children:[n(p,{of:a}),`
`,n(e.h1,{id:"notification",children:"Notification"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.23.2"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.6"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(o,{href:"#overiew",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#notification-heading",target:"_self",children:"Notification Heading"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#notification-icon",target:"_self",children:"Notification Icon"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#dismissible",target:"_self",children:"Dismissible"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:a}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"}),` component is a configurable callout that should be used to
display important messages.`]}),`
`,i(e.p,{children:["In the preview below, the border around the ",n(e.code,{children:"Notification"}),` is not part of the
component. It has been added to help illustrate how the `,n(e.code,{children:"Notification"}),` sits
within a parent element.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(t,{of:d}),`
`,n(f,{of:d}),`
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
`,n(r,{code:`
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
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"}),` component can be rendered with and without a heading. By
default, when a title is passed to the `,n(e.code,{children:"notificationHeading"}),` prop, the
`,n(e.code,{children:"Notification"})," component will render an ",n(e.code,{children:"h4"})," element sized as a ",n(e.code,{children:"heading6"}),`
heading. If this causes accessibility issues in your app, you can pass in a
custom `,n(e.code,{children:"Heading"})," element."]}),`
`,n(t,{of:g}),`
`,i(e.p,{children:["In the following examples, the ",n(e.code,{children:"Notification"})," component will render custom ",n(e.code,{children:"h3"}),`
and `,n(e.code,{children:"h5"}),` elements. Note that no matter what heading level is set, the size will
always be set to `,n(e.code,{children:"heading6"}),"."]}),`
`,n(r,{code:`

const customH3 = <Heading level="h3">Custom H3 Heading</Heading>;
const customH5 = <Heading level="h5">Custom H5 Heading</Heading>;

<Notification notificationHeading={customH3} {...props} />
<Notification notificationHeading={customH5} {...props} />
`,language:"tsx"}),`
`,n(t,{of:u}),`
`,n(e.h2,{id:"notification-icon",children:"Notification Icon"}),`
`,n(e.h3,{id:"default-icon",children:"Default Icon"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Notification"}),` icon can be displayed with or without an icon. The icon can
be hidden with the `,n(e.code,{children:"showIcon"})," prop set to ",n(e.code,{children:"false"}),"."]}),`
`,n(t,{of:b}),`
`,n(e.h3,{id:"custom-icon",children:"Custom Icon"}),`
`,i(e.p,{children:["The default icon can be overridden by using the ",n(e.code,{children:"icon"})," prop to pass a custom ",n(e.code,{children:"Icon"})," component."]}),`
`,n(t,{of:w}),`
`,n(e.h2,{id:"with-html-content",children:"With HTML Content"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"notificationContent"})," prop can accept HTML."]}),`
`,n(t,{of:y}),`
`,n(e.h2,{id:"dismissible",children:"Dismissible"}),`
`,i(e.p,{children:["A dismissible ",n(e.code,{children:"Notification"}),` component can be created by setting the
`,n(e.code,{children:"dismissible"})," prop to ",n(e.code,{children:"true"}),`. Once the "X" close icon on the upper right is
clicked, the `,n(e.code,{children:"Notification"}),` will be removed from the DOM, therefore it only
appears once.`]}),`
`,n(t,{of:v}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(N,{changelogData:H})]})}function te(c={}){const{wrapper:e}=Object.assign({},h(),c.components);return e?n(e,Object.assign({},c,{children:n(l,c)})):l(c)}export{te as default};
//# sourceMappingURL=Notification-5e227cdf.js.map
