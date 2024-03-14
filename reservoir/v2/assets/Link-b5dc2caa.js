import{j as n,a as i,F as l}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,C as a,A as k,b as o}from"./index-445595fc.js";import{r as f}from"./index-0cbcd92a.js";import{C as g}from"./ComponentChangelogTable-310bbbfd.js";import{L as t}from"./Link-24c1437a.js";import{I as u}from"./Icon-4eeffe51.js";import{L as s,W as c,A as w,a as L,b}from"./Link.stories-cdf6ba55.js";import{u as d}from"./index-09eae0a8.js";import{B as y}from"./chakra-ui-layout.esm-e0dbb94e.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./_commonjsHelpers-de833af9.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";const x=[{date:"2023-11-14",version:"2.1.3",type:"Update",affects:["Styles"],notes:["Added `hasVisitedStyles` prop which is used to include or omit the component's visited state styles. Default value is true.","Removed `disabled` variant from theme file, as it isn't being used."]}],v=r=>f.cloneElement(r.children,{href:r.href},r.children.props.children);function h(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",strong:"strong",a:"a",h3:"h3"},d(),r.components);return i(l,{children:[n(p,{of:s}),`
`,n(e.h1,{id:"link",children:"Link"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.4"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#all-link-types",target:"_self",children:"All Link Types"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#links-with-icons",target:"_self",children:"Links With Icons"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#anchor-element-rendering",target:"_self",children:"Anchor Element Rendering"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#link-with-routers",target:"_self",children:"Link with Routers"}),`
`]}),`
`,i(e.li,{children:[`
`,n(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:s}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(a,{of:c}),`
`,n(k,{of:c}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Link"})," component renders an ",n(e.code,{children:"<a>"})," element with the ",n(e.code,{children:"href"}),` attribute, so the
`,n(e.code,{children:"Link"})," component should be used for navigation. If an ",n(e.code,{children:"onClick"}),` action is
required, a `,n(e.code,{children:"Button"}),` component should be used instead. In simple terms, a link
goes somewhere and a button does something.`]}),`
`,i(e.p,{children:[`Despite these best practices and recommendations, it is possible to pass an
`,n(e.code,{children:"onClick"})," prop to the ",n(e.code,{children:"Link"}),` component because there are some very specific use
cases within NYPL web apps that require this. Additionally, the `,n(e.code,{children:"onclick"}),`
attribute (intentially all lowercase) is a native HTML pattern that is allowed.
Having said that, `,i(e.strong,{children:["you are highly urged to not use the ",n(e.code,{children:"onClick"}),` prop unless
you know what you are doing`]}),"."]}),`
`,i(e.p,{children:["The ",n(e.code,{children:'"external"'})," variant of the ",n(e.code,{children:"Link"})," component includes ",n(e.code,{children:'"screen reader only"'}),`
descriptive text to clarify that the link will open in a new tab/window.
Additionally it renders with the `,n(e.code,{children:"rel"}),` attribute containing
the relation names "nofollow", "noopener" and "noreferrer".`]}),`
`,n(a,{of:w}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Link"})," component also has a ",n(e.code,{children:"screenreaderOnlyText"}),` prop that can be used to
add additional text to the link that is only visible to screen readers. This can
be used to provide additional context to the link when the text is short, such
as visible "Read more..." text.`]}),`
`,i(e.p,{children:["For details about NYPL link patterns, refer to the ",n(e.a,{href:"/?path=/docs/accessibility-guide-links--docs",children:`Links Accessibility
Guide`}),"."]}),`
`,n(e.p,{children:"Resources:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/link/link.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Link Examples"})}),`
`,n(e.li,{children:n(e.a,{href:"https://usability.yale.edu/web-accessibility/articles/links",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yale Usability & Web Accessibility Links"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/css/invisiblecontent/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM: Invisible Content Just for Screen Reader Users"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.iana.org/assignments/link-relations/link-relations.xhtml",target:"_blank",rel:"nofollow noopener noreferrer",children:"IANA: Link Relation Types"})}),`
`]}),`
`,n(e.h2,{id:"all-link-types",children:"All Link Types"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Link"})," component offers multiple variants for differing UX situations."]}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"default"})," and ",n(e.code,{children:"action"}),` variants for text links that sit within a block
of plain (unlinked) text — a paragraph, a single sentence, or even just a few
words — and point to other pages within the current website.`]}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"external"}),` variant for text links that sit within a block of plain
(unlinked) text and point to something outside the current website. This variant
will open a new browser tab by default.`]}),`
`,i(e.p,{children:["Use the ",n(e.code,{children:"standalone"}),` variant for text links that sit alone within the page
content area. For example, a Read More link at the end of a short description or
a View In Catalog link on a book detail page. The `,n(e.code,{children:"backawards"})," and ",n(e.code,{children:"forwards"}),`
variants should be used for specific situations when navigating through a series
or related pages.`]}),`
`,i(e.p,{children:[`Use the button variants when a link needs to be highlighted or emphasized within
a CTA element. For example, a link to a book detail page from cards within a
search results set. Please note that the actual `,n(e.code,{children:"button"}),` variant has been
deprecated.`]}),`
`,i(e.p,{children:[`IMPORTANT: Links that look like buttons should still act like links and not act
like buttons. Refer to the `,n(t,{href:"#accessibility",target:"_self",children:"Accessibility"})," section above for clarification."]}),`
`,n(a,{of:L}),`
`,n(e.h2,{id:"links-with-icons",children:"Links With Icons"}),`
`,i(e.p,{children:["To render an ",n(e.code,{children:"Icon"})," as part of the link, make sure that the ",n(e.code,{children:"Link"}),` component
wraps the `,n(e.code,{children:"Icon"}),". Use ",n(e.code,{children:'type="action"'}),` to apply appropriate styling to
links with icons. Icons can be rendered to the left or right of the link text.`]}),`
`,n(a,{of:b}),`
`,n(e.h2,{id:"anchor-element-rendering",children:"Anchor Element Rendering"}),`
`,i(e.p,{children:[n(e.code,{children:"Link"})," can wrap an existing ",n(e.code,{children:"<a>"})," element (and ",n(e.code,{children:"Icon"}),` component) or it
can use the `,n(e.code,{children:"href"})," prop to generate an ",n(e.code,{children:"<a>"})," element."]}),`
`,n(o,{code:`
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
`,i(l,{children:["This is a"," ",n(t,{type:"action",children:n(e.a,{href:"#existing-anchor-tag",children:"link"})})," ","with the <a> element as a child of the `Link` component. This is a"," ",n(t,{type:"action",href:"#passed-in-link",children:"link"})," ","where the `Link` component uses the `href` prop and has a string-only child. Finally, this is a"," ",n(t,{type:"action",children:i(l,{children:[n(u,{name:"check",align:"left",size:"small"}),n(e.a,{href:"#existing-anchor-tag",children:"link"})]})})," ","with a check icon.",n(y,{mb:"20px"})]}),`
`,n(e.h2,{id:"link-with-routers",children:"Link with Routers"}),`
`,n(e.h3,{id:"react-router",children:"React Router"}),`
`,i(e.p,{children:["The Design System's ",n(e.code,{children:"Link"})," component should wrap around ",n(e.code,{children:"react-router"}),`'s own
`,n(e.code,{children:"Link"}),` component. To avoid name conflicts, rename either the Design System's
or `,n(e.code,{children:"react-router"}),"'s ",n(e.code,{children:"Link"})," component. Any of the following patterns are valid."]}),`
`,n(o,{code:`
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
`,n(o,{code:`
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
`,n(o,{code:`
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
`,n(e.h3,{id:"nextjs",children:"NextJS"}),`
`,i(e.p,{children:["NextJS's ",n(e.code,{children:"Link"})," component should wrap the Design System's ",n(e.code,{children:"Link"}),` component.
The `,n(e.code,{children:"href"})," and ",n(e.code,{children:"passHref"})," props MUST be passed into NextJS' ",n(e.code,{children:"Link"}),` component.
These props, along with an implicit `,n(e.code,{children:"ref"}),` from NextJS and the Design System's
`,n(e.code,{children:"Link"})," component ",n(e.code,{children:"forwardRef"}),` implementation, handle correctly routing between
pages in a NextJS app.`]}),`
`,n(o,{code:`
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
`,n(v,{href:"#",passHref:!0,children:n(t,{type:"action",children:"Next Page"})}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(g,{changelogData:x})]})}function $(r={}){const{wrapper:e}=Object.assign({},d(),r.components);return e?n(e,Object.assign({},r,{children:n(h,r)})):h(r)}export{v as NextJsLink,$ as default};
//# sourceMappingURL=Link-b5dc2caa.js.map
