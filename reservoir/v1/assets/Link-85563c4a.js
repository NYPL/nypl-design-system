import{j as e,a as i,F as c}from"./jsx-runtime-09ad29cb.js";import{M as p,D as m,C as a,A as k,b as o}from"./index-5d3bb37f.js";import{r as f}from"./index-f2bd0723.js";import{L as r}from"./Link-0ed02cf7.js";import{I as g}from"./Icon-6616a4b9.js";import{L as l,W as s,A as L,a as u}from"./Link.stories-5d9c8abe.js";import{u as d}from"./index-a14fc4fc.js";import{B as w}from"./chakra-ui-layout.esm-b2fa9d31.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./_commonjsHelpers-042e6b4d.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./index-6148c31a.js";const y=t=>f.cloneElement(t.children,{href:t.href},t.children.props.children);function h(t){const n=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3"},d(),t.components);return i(c,{children:[e(p,{of:l}),`
`,e(n.h1,{id:"link",children:"Link"}),`
`,i(n.table,{children:[e(n.thead,{children:i(n.tr,{children:[e(n.th,{children:"Component Version"}),e(n.th,{children:"DS Version"})]})}),i(n.tbody,{children:[i(n.tr,{children:[e(n.td,{children:"Added"}),e(n.td,{children:e(n.code,{children:"0.0.4"})})]}),i(n.tr,{children:[e(n.td,{children:"Latest"}),e(n.td,{children:e(n.code,{children:"1.6.0"})})]})]})]}),`
`,e(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(n.ul,{children:[`
`,i(n.li,{children:[`
`,e(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(n.li,{children:[`
`,e(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(n.li,{children:[`
`,e(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(n.li,{children:[`
`,e(r,{href:"#links-with-icons",target:"_self",children:"Links With Icons"}),`
`]}),`
`,i(n.li,{children:[`
`,e(r,{href:"#anchor-element-rendering",target:"_self",children:"Anchor Element Rendering"}),`
`]}),`
`,i(n.li,{children:[`
`,e(r,{href:"#link-with-routers",target:"_self",children:"Link with Routers"}),`
`]}),`
`]}),`
`,e(n.h2,{id:"overview",children:"Overview"}),`
`,e(m,{of:l}),`
`,e(n.h2,{id:"component-props",children:"Component Props"}),`
`,e(a,{of:s}),`
`,e(k,{of:s}),`
`,e(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(n.p,{children:["The ",e(n.code,{children:"Link"})," component should be used for navigation. If an ",e(n.code,{children:"onClick"}),` user
interface action is required, a `,e(n.code,{children:"Button"}),` component should be used instead. The
`,e(n.code,{children:"Link"})," component renders an ",e(n.code,{children:"<a>"})," element with the ",e(n.code,{children:"href"})," attribute."]}),`
`,i(n.p,{children:["The ",e(n.code,{children:'"external"'})," variant of the ",e(n.code,{children:"Link"})," component includes ",e(n.code,{children:'"screen reader only"'}),`
descriptive text to clarify that the link will open in a new tab/window.
Additionally it renders with the `,e(n.code,{children:"rel"}),` attribute containing
the relation names "nofollow", "noopener" and "noreferrer".`]}),`
`,e(a,{of:L}),`
`,e(n.p,{children:"Resources:"}),`
`,i(n.ul,{children:[`
`,e(n.li,{children:e(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/link/link.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Link Examples"})}),`
`,e(n.li,{children:e(n.a,{href:"https://usability.yale.edu/web-accessibility/articles/links",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yale Usability & Web Accessibility Links"})}),`
`,e(n.li,{children:e(n.a,{href:"https://webaim.org/techniques/css/invisiblecontent/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM: Invisible Content Just for Screen Reader Users"})}),`
`,e(n.li,{children:e(n.a,{href:"https://www.iana.org/assignments/link-relations/link-relations.xhtml",target:"_blank",rel:"nofollow noopener noreferrer",children:"IANA: Link Relation Types"})}),`
`]}),`
`,e(n.h2,{id:"links-with-icons",children:"Links With Icons"}),`
`,i(n.p,{children:["To render an ",e(n.code,{children:"Icon"})," as part of the link, make sure that the ",e(n.code,{children:"Link"}),` component
wraps the `,e(n.code,{children:"Icon"}),". Use ",e(n.code,{children:'type="action"'}),` to apply appropriate styling to
links with icons. Icons can be rendered to the left or right of the link text.`]}),`
`,e(a,{of:u}),`
`,e(n.h2,{id:"anchor-element-rendering",children:"Anchor Element Rendering"}),`
`,i(n.p,{children:[e(n.code,{children:"Link"})," can wrap an existing ",e(n.code,{children:"<a>"})," element (and ",e(n.code,{children:"Icon"}),` component) or it
can use the `,e(n.code,{children:"href"})," prop to generate an ",e(n.code,{children:"<a>"})," element."]}),`
`,e(o,{code:`
// Existing anchor element
<Link type="action">
  <a href="#existing-anchor-tag">link</a>
</Link>
// ...
// Also works with an icon component. Make sure to wrap the icon and anchor
// in a single element for this pattern.
<Link type="action">
  <>
    <Icon name="check" align="left" size="small" />
    <a href="#existing-anchor-tag">check link</a>
  </>
</Link>
// ...
// Otherwise, the \`href\` prop will generate an \`<a>\` tag.
<Link type="action" href="#passed-in-link">
  link
</Link>
`,language:"jsx"}),`
`,i(c,{children:["This is a"," ",e(r,{type:"action",children:e(n.a,{href:"#existing-anchor-tag",children:"link"})})," ","with the <a> element as a child of the `Link` component. This is a"," ",e(r,{type:"action",href:"#passed-in-link",children:"link"})," ","where the `Link` component uses the `href` prop and has a string-only child. Finally, this is a"," ",e(r,{type:"action",children:i(c,{children:[e(g,{name:"check",align:"left",size:"small"}),e(n.a,{href:"#existing-anchor-tag",children:"link"})]})})," ","with a check icon.",e(w,{mb:"20px"})]}),`
`,e(n.h2,{id:"link-with-routers",children:"Link with Routers"}),`
`,e(n.h3,{id:"react-router",children:"React Router"}),`
`,i(n.p,{children:["The Design System's ",e(n.code,{children:"Link"})," component should wrap around ",e(n.code,{children:"react-router"}),`'s own
`,e(n.code,{children:"Link"}),` component. To avoid name conflicts, rename either the Design System's
or `,e(n.code,{children:"react-router"}),"'s ",e(n.code,{children:"Link"})," component. Any of the following patterns are valid."]}),`
`,e(o,{code:`
// In this first example, React Router's \`Link\` component
// is renamed as \`ReactRouterLink\`.
import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
} from "react-router-dom";
import { Link } from "@nypl/design-system-react-components";
// ...
<Link type="action">
  <ReactRouterLink to="#">Next Page</ReactRouterLink>
</Link>;
`,language:"jsx"}),`
`,e(o,{code:`
// In this second example, React Router's \`Link\` component
// is not renamed but the DS's \`Link\` component is renamed
// to \`DSLink\`.
import { BrowserRouter, Link } from "react-router-dom";
import { Link as DSLink } from "@nypl/design-system-react-components";
// ...
<DSLink type="action">
  <Link to="#">Next Page</Link>
</DSLink>;
`,language:"jsx"}),`
`,e(o,{code:`
// In this third example, React Router's \`Link\` component
// is not renamed and the DS's \`Link\` component is
// imported and rendered as \`DS.Link\`.
import { BrowserRouter, Link } from "react-router-dom";
import DS from "@nypl/design-system-react-components";
// ...
<DS.Link type="action">
  <Link to="#">Next Page</Link>
</DS.Link>;
`,language:"jsx"}),`
`,e(n.h3,{id:"nextjs",children:"NextJS"}),`
`,i(n.p,{children:["NextJS's ",e(n.code,{children:"Link"})," component should wrap the Design System's ",e(n.code,{children:"Link"}),` component.
The `,e(n.code,{children:"href"})," and ",e(n.code,{children:"passHref"})," props MUST be passed into NextJS' ",e(n.code,{children:"Link"}),` component.
These props, along with an implicit `,e(n.code,{children:"ref"}),` from NextJS and the Design System's
`,e(n.code,{children:"Link"})," component ",e(n.code,{children:"forwardRef"}),` implementation, handle correctly routing between
pages in a NextJS app.`]}),`
`,e(o,{code:`
import { Link } from "@nypl/design-system-react-components";
// ...
/**
 * This is just an example wrapper that works similarly to NextJS' \`Link\`
 * component. In real life, NextJS's \`Link\` component will pass down the
 * \`href\` and \`passHref\` props and a \`ref\` to make routing functional.
 */
export const NextJsLink = (props: HTMLAnchorElement) =>
  React.cloneElement(
    props.children,
    { ...props },
    props.children.props.children
  );
// ...
// Note that NextJS' \`href\` and \`passHref\` props are required.
<NextJsLink href="#" passHref>
  <Link type="action">Next Page</Link>
</NextJsLink>;
`,language:"jsx"}),`
`,`
`,e(y,{href:"#",passHref:!0,children:e(r,{type:"action",children:"Next Page"})})]})}function X(t={}){const{wrapper:n}=Object.assign({},d(),t.components);return n?e(n,Object.assign({},t,{children:e(h,t)})):h(t)}export{y as NextJsLink,X as default};
//# sourceMappingURL=Link-85563c4a.js.map
