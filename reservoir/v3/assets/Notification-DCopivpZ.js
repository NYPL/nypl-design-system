import{u as r,j as e,M as l,L as i,bv as h,C as t,bw as x,S as s}from"./iframe-CFLVJZOZ.js";import{N as c,W as a,a as p,C as j,b as f,c as m,H as u,D as g}from"./Notification.stories-QSTyNYjz.js";import{C as b}from"./ComponentChangelogTable-DvY0SxTs.js";const w=[{date:"2025-04-24",version:"3.6.1",type:"Update",affects:["Styles"],notes:["Variant font colors updated to sync with the VDL."]},{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Styles"],notes:["Style updates to sync with the VDL."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2024-02-22",version:"2.1.6",type:"Update",affects:["Styles"],notes:["Updates focus ring color to match color of text."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `notificationHeading` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function d(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"notification",children:"Notification"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.23.2"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.6.1"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#overiew",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#notification-heading",target:"_self",children:"Notification Heading"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#notification-icon",target:"_self",children:"Notification Icon"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#dismissible",target:"_self",children:"Dismissible"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:c}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Notification"}),` component is a configurable callout that should be used to
display important messages.`]}),`
`,e.jsxs(n.p,{children:["In the preview below, the border around the ",e.jsx(n.code,{children:"Notification"}),` is not part of the
component. It has been added to help illustrate how the `,e.jsx(n.code,{children:"Notification"}),` sits
within a parent element.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(x,{of:a}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Notification"})," component renders with an HTML ",e.jsx(n.code,{children:"aside"}),` element as its
wrapper. This is an HTML landmark element that is similar to adding an attribute
of `,e.jsx(n.code,{children:'role="complementary"'}),`. For accessibility purposes, landmark elements should
not be rendered inside other landmark elements such as the `,e.jsx(n.code,{children:"header"})," and ",e.jsx(n.code,{children:"footer"}),`
landmark elements. Adding a `,e.jsx(n.code,{children:"Notification"})," component inside an HTML ",e.jsx(n.code,{children:"main"}),`
landmark element is acceptable.`]}),`
`,e.jsx(n.h3,{id:"aria-label",children:"ARIA Label"}),`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.code,{children:"Notification"})," component must have a unique ",e.jsx(n.code,{children:"aria-label"}),` attribute. This
is set through the `,e.jsx(n.code,{children:"ariaLabel"})," prop. A unique ",e.jsx(n.code,{children:"aria-label"}),` value, along with the
`,e.jsx(n.code,{children:"aside"}),` HTML landmark element, helps screen readers better navigate a page with
multiple `,e.jsx(n.code,{children:"Notification"}),"s."]}),`
`,e.jsx(n.h3,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["Icons rendered in the ",e.jsx(n.code,{children:"Notification"}),` component are decorative by default which
means that they are hidden to screen readers. Since the "X" close icon inside
the dismissible button is decorative and because there is no discernible text
inside the button, an `,e.jsx(n.code,{children:"aria-label"})," attribute is added to the button."]}),`
`,e.jsx(n.h3,{id:"language-patterns",children:"Language Patterns"}),`
`,e.jsxs(n.p,{children:["When the ",e.jsx(n.code,{children:"Notification"}),` component is rendered, the text within the component
should always include wording that aligns with the type of notitication that is
being delivered. For example, if the notification is a warning or error, the
heading or body copy within the notification should use the words `,e.jsx(n.code,{children:'"warning"'}),` or
`,e.jsx(n.code,{children:'"error"'})," and provide a clear description of the existing or potential isssue."]}),`
`,e.jsx(n.h3,{id:"dynamic-notifications",children:"Dynamic Notifications"}),`
`,e.jsxs(n.p,{children:[`If dynamically generated notifications are required, a container into which the
notification will be injected should be included in the DOM. The container
element should have `,e.jsx(n.code,{children:'aria-live="polite"'}),` applied. The container element should
always be rendered in the DOM regardless of the presence of the Notification
component. This DOM structure will allow the newly generated content to be
recognized and announced by assistive technology.`]}),`
`,e.jsx(s,{code:`
<div aria-live="polite">
<Notification {...props} />
</div>
`,language:"tsx"}),`
`,e.jsx(n.h3,{id:"resources",children:"Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role",rel:"nofollow",children:"MDN Aria: complementary role"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.deque.com/blog/creating-accessible-svgs/",rel:"nofollow",children:"Deque Creating Accessible SVGs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://css-tricks.com/accessible-svg-icons/",rel:"nofollow",children:"CSS Tricks Accessible SVG Icons"})}),`
`]}),`
`,e.jsx(n.h2,{id:"notification-heading",children:"Notification Heading"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Notification"}),` component can be rendered with and without a heading. By
default, when a title is passed to the `,e.jsx(n.code,{children:"notificationHeading"}),` prop, the
`,e.jsx(n.code,{children:"Notification"})," component will render an ",e.jsx(n.code,{children:"h4"})," element sized as a ",e.jsx(n.code,{children:"heading6"}),`
heading. If this causes accessibility issues in your app, you can pass in a
custom `,e.jsx(n.code,{children:"Heading"})," element."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsxs(n.p,{children:["In the following examples, the ",e.jsx(n.code,{children:"Notification"})," component will render custom ",e.jsx(n.code,{children:"h3"}),`
and `,e.jsx(n.code,{children:"h5"}),` elements. Note that no matter what heading level is set, the size will
always be set to `,e.jsx(n.code,{children:"heading6"}),"."]}),`
`,e.jsx(s,{code:`

const customH3 = <Heading level="h3">Custom H3 Heading</Heading>;
const customH5 = <Heading level="h5">Custom H5 Heading</Heading>;

<Notification notificationHeading={customH3} {...props} />
<Notification notificationHeading={customH5} {...props} />
`,language:"tsx"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"notification-icon",children:"Notification Icon"}),`
`,e.jsx(n.h3,{id:"default-icon",children:"Default Icon"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Notification"}),` icon can be displayed with or without an icon. The icon can
be hidden with the `,e.jsx(n.code,{children:"showIcon"})," prop set to ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h3,{id:"custom-icon",children:"Custom Icon"}),`
`,e.jsxs(n.p,{children:["The default icon can be overridden by using the ",e.jsx(n.code,{children:"icon"})," prop to pass a custom ",e.jsx(n.code,{children:"Icon"})," component."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h2,{id:"with-html-content",children:"With HTML Content"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"notificationContent"})," prop can accept HTML."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.h2,{id:"dismissible",children:"Dismissible"}),`
`,e.jsxs(n.p,{children:["A dismissible ",e.jsx(n.code,{children:"Notification"}),` component can be created by setting the
`,e.jsx(n.code,{children:"dismissible"})," prop to ",e.jsx(n.code,{children:"true"}),`. Once the "X" close icon on the upper right is
clicked, the `,e.jsx(n.code,{children:"Notification"}),` will be removed from the DOM, therefore it only
appears once.`]}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(b,{changelogData:w})]})}function H(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(d,{...o})}):d(o)}export{H as default};
