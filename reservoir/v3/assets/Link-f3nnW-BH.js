import{u as c,j as e,M as h,L as t,bv as d,C as o,bw as p,S as i}from"./iframe-CFLVJZOZ.js";import{C as x}from"./ComponentChangelogTable-DvY0SxTs.js";import{L as r,W as a,A as j,a as m,b as f}from"./Link.stories-DRWZrOuN.js";import"./storybookUtils-BmTl87w5.js";const k=[{date:"2024-11-07",version:"3.4.2",type:"Update",affects:["Styles"],notes:["Updates styles to prevent links with icons breaking onto two lines."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles","Functionality"],notes:["A general refactor of the Link component to improve its usability with other elements and within application frameworks.","Chakra 2.8 update."]},{date:"2023-11-14",version:"2.1.3",type:"Update",affects:["Styles"],notes:["Added `hasVisitedStyles` prop which is used to include or omit the component's visited state styles. Default value is true.","Removed `disabled` variant from theme file, as it isn't being used."]}];function l(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{of:r}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.0.4"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.4.2"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#visited-state-patterns",target:"_self",children:"Visited State Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#all-link-types",target:"_self",children:"All Link Types"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#links-with-icons",target:"_self",children:"Links With Icons"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#anchor-element-rendering",target:"_self",children:"Anchor Element Rendering"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#link-with-routers",target:"_self",children:"Link with Routers"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(d,{of:r}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Link"})," component renders an ",e.jsx(n.code,{children:"<a>"})," element with the ",e.jsx(n.code,{children:"href"}),` attribute, so the
`,e.jsx(n.code,{children:"Link"})," component should be used for navigation. If an ",e.jsx(n.code,{children:"onClick"}),` action is
required, a `,e.jsx(n.code,{children:"Button"}),` component should be used instead. In simple terms, a link
goes somewhere and a button does something.`]}),`
`,e.jsxs(n.p,{children:[`Despite these best practices and recommendations, it is possible to pass an
`,e.jsx(n.code,{children:"onClick"})," prop to the ",e.jsx(n.code,{children:"Link"}),` component because there are some very specific use
cases within NYPL web apps that require this. Additionally, the `,e.jsx(n.code,{children:"onclick"}),`
attribute (intentially all lowercase) is a native HTML pattern that is allowed.
Having said that, `,e.jsxs(n.strong,{children:["you are highly urged to not use the ",e.jsx(n.code,{children:"onClick"}),` prop unless
you know what you are doing`]}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"external"'})," variant of the ",e.jsx(n.code,{children:"Link"})," component includes ",e.jsx(n.code,{children:'"screen reader only"'}),`
descriptive text to clarify that the link will open in a new tab/window.
Additionally it renders with the `,e.jsx(n.code,{children:"rel"}),` attribute containing
the relation names "nofollow", "noopener" and "noreferrer".`]}),`
`,e.jsx(o,{of:j}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Link"})," component also has a ",e.jsx(n.code,{children:"screenreaderOnlyText"}),` prop that can be used to
add additional text to the link that is only visible to screen readers. This can
be used to provide additional context to the link when the text is short, such
as visible "Read more..." text.`]}),`
`,e.jsxs(n.p,{children:["For details about NYPL link patterns, refer to the ",e.jsx(n.a,{href:"/?path=/docs/accessibility-guide-links--docs",children:`Links Accessibility
Guide`}),"."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/examples/link/link.html",rel:"nofollow",children:"W3C WAI Link Examples"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://usability.yale.edu/web-accessibility/articles/links",rel:"nofollow",children:"Yale Usability & Web Accessibility Links"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/css/invisiblecontent/",rel:"nofollow",children:"WebAIM: Invisible Content Just for Screen Reader Users"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.iana.org/assignments/link-relations/link-relations.xhtml",rel:"nofollow",children:"IANA: Link Relation Types"})}),`
`]}),`
`,e.jsx(n.h2,{id:"visited-state-patterns",children:"Visited State Patterns"}),`
`,e.jsxs(n.p,{children:["To improve accessibility, the ",e.jsx(n.code,{children:"Link"})," component by default will render ",e.jsx(n.code,{children:"visited"}),`
state styles when a link's `,e.jsx(n.code,{children:"href"}),` value matches an entry in a browser's history
log. In simple terms, a text link will be purple after a user has clicked on it.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"visited"}),` state styles are most relevant for links within a standard block
of text, but the `,e.jsx(n.code,{children:"visited"}),` state color change may not be applicable for all
links. For example, links in main navigation areas (i.e. header or footer) or
links in a list format may be more effective with standardized styles and
consistent color throughout.`]}),`
`,e.jsxs(n.p,{children:["In cases where the ",e.jsx(n.code,{children:"visited"})," state styles are not appropriate, the ",e.jsx(n.code,{children:"Link"}),`
component's `,e.jsx(n.code,{children:"hasVisitedState"})," prop should be set to ",e.jsx(n.code,{children:"false"}),`. When this is done,
the `,e.jsx(n.code,{children:"Link"})," component will not render the default purple ",e.jsx(n.code,{children:"visited"}),` state color
after a user has clicked on a text link. Rather, the `,e.jsx(n.code,{children:"Link"}),` component will use
the default NYPL link blue or whatever custom color has been applied to the
component.`]}),`
`,e.jsx(i,{code:`
<Link
hasVisitedState={false}
href="https://nypl.org"
type="action"
>
NYPL Website
</Link>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"all-link-types",children:"All Link Types"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Link"})," component offers multiple variants for differing UX situations."]}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"default"})," and ",e.jsx(n.code,{children:"action"}),` variants for text links that sit within a block
of plain (unlinked) text — a paragraph, a single sentence, or even just a few
words — and point to other pages within the current website.`]}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"external"}),` variant for text links that sit within a block of plain
(unlinked) text and point to something outside the current website. This variant
will open a new browser tab by default.`]}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"standalone"}),` variant for text links that sit alone within the page
content area. For example, a Read More link at the end of a short description or
a View In Catalog link on a book detail page. The `,e.jsx(n.code,{children:"backawards"})," and ",e.jsx(n.code,{children:"forwards"}),`
variants should be used for specific situations when navigating through a series
or related pages.`]}),`
`,e.jsxs(n.p,{children:[`Use the button variants when a link needs to be highlighted or emphasized within
a CTA element. For example, a link to a book detail page from cards within a
search results set. Please note that the actual `,e.jsx(n.code,{children:"button"}),` variant has been
deprecated.`]}),`
`,e.jsxs(n.p,{children:[`IMPORTANT: Links that look like buttons should still act like links and not act
like buttons. Refer to the `,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"})," section above for clarification."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h2,{id:"links-with-icons",children:"Links With Icons"}),`
`,e.jsxs(n.p,{children:["To render an ",e.jsx(n.code,{children:"Icon"})," as part of the link, make sure that the ",e.jsx(n.code,{children:"Link"}),` component
wraps the `,e.jsx(n.code,{children:"Icon"}),". Use ",e.jsx(n.code,{children:'type="action"'}),` to apply appropriate styling to
links with icons. Icons can be rendered to the left or right of the link text.`]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h2,{id:"ds-v3-breaking-change",children:"DS v3 Breaking Change"}),`
`,e.jsxs(n.p,{children:[`Previous versions of the Design System allowed an anchor element to be passed
as a child if the `,e.jsx(n.code,{children:"href"})," prop was not used."]}),`
`,e.jsx(i,{code:`
import { Link } from "@nypl/design-system-react-components";
// ...

<Link>
<a href="#">Next Page</a>
</Link>
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["In DS 3.0.0+, this pattern is no longer supported. The ",e.jsx(n.code,{children:"href"}),` prop should be
passed to render an accessible and valid link. There are cases where the `,e.jsx(n.code,{children:"href"}),`
prop is not required, such as when using with an application framework router.
For more information and recommended routing patterns, see the following
sections.`]}),`
`,e.jsx(n.h2,{id:"link-with-routers",children:"Link with Routers"}),`
`,e.jsxs(n.p,{children:["When it comes to routing, the patterns set in ",e.jsxs(n.a,{href:"https://chakra-ui.com/docs/components/link",rel:"nofollow",children:["Chakra's ",e.jsx(n.code,{children:"Link"})]}),`
component can also be used in the Design System's `,e.jsx(n.code,{children:"Link"}),` component. This means
that the routing library's component should be passed to the DS `,e.jsx(n.code,{children:"Link"}),` component
in the `,e.jsx(n.code,{children:"as"})," prop. By default, an anchor ",e.jsx(n.code,{children:"<a>"})," element is rendered."]}),`
`,e.jsx(n.h3,{id:"react-router",children:"React Router"}),`
`,e.jsxs(n.p,{children:["The recommended pattern is to pass the React Router's ",e.jsx(n.code,{children:"Link"}),` component in the
`,e.jsx(n.code,{children:"as"})," prop in the DS' ",e.jsx(n.code,{children:"Link"})," component."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important"}),`: NYPL uses Next.js for their web applications so while the
following pattern is available, it has not been heavily tested.`]}),`
`,e.jsx(i,{code:`
// In this first example, React Router's \`Link\` component
// is renamed as \`ReactRouterLink\`.
import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@nypl/design-system-react-components";
// ...

<Link as={ReactRouterLink} type="action" href="#">
Next Page
</Link>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"nextjs",children:"Next.js"}),`
`,e.jsxs(n.p,{children:["In Next.js 13+, their ",e.jsx(n.code,{children:"Link"}),` component renders an anchor element and this
causes a conflict with the Design System's 2.X `,e.jsx(n.code,{children:"Link"}),` component which also
renders an anchor element. The nested anchor element is an HTML and
accessibility issue. In DS 3.0.0+, we are using React 18 and expect consuming
applications to use Next.js 13+ and React 18 as well.`]}),`
`,e.jsxs(n.p,{children:[`To resolve the conflict, we are following Chakra's recommended pattern to pass
the NextJS `,e.jsx(n.code,{children:"Link"})," component in the ",e.jsx(n.code,{children:"as"})," prop in the DS ",e.jsx(n.code,{children:"Link"})," component."]}),`
`,e.jsx(i,{code:`
import { Link as NextLink } from "next/link";
import { Link } from "@nypl/design-system-react-components";
// ...

<Link as={NextLink} type="action" href="#">
Next Page
</Link>
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:[`If you want to use the previous Next.js pattern, it is still available. Pass in
the `,e.jsx(n.code,{children:"legacyBehavior"})," prop to the Next.js ",e.jsx(n.code,{children:"Link"}),` component along with the
`,e.jsx(n.code,{children:"passHref"})," prop."]}),`
`,e.jsx(i,{code:`
import { Link as NextLink } from "next/link";
import { Link } from "@nypl/design-system-react-components";
// ...

<NextLink href="/about" passHref legacyBehavior>
<Link>About</Link>
</NextLink>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:k})]})}function y(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{y as default};
