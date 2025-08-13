import{u as m,j as e,M as c,L as o,bv as a,bC as h,S as n,C as r,bw as i,bD as T,bE as x,bF as j,bG as C,bH as u,bI as b,bJ as f,bK as g,bL as y,bM as v}from"./iframe-CFLVJZOZ.js";import{C as H}from"./ComponentChangelogTable-DvY0SxTs.js";import{T as k,W as s,C as d,F as w}from"./Template.stories-DoW8K_kI.js";import"./storybookUtils-BmTl87w5.js";const A=[{date:"2024-12-05",version:"3.5.0",type:"Bug Fix",affects:["Styles"],notes:["Adjusts padding to fix an issue where focus indicators were being cut off in the primary content section."]},{date:"2024-10-02",version:"3.4.0",type:"Update",affects:["Styles"],notes:["Updates the styles to better accommodate the horizontal scrolling in the `Table` component."]},{date:"2024-05-09",version:"3.1.2",type:"Update",affects:["Functionality","Accessibility"],notes:["Adds `id` prop."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}],M="With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";function p(l){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...m(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:k}),`
`,e.jsx(t.h1,{id:"template",children:"Template"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Component Version"}),e.jsx(t.th,{children:"DS Version"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Added"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"0.3.6"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Latest"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"3.5.0"})})]})]})]}),`
`,e.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#templateappcontainer-overview",target:"_self",children:"TemplateAppContainer Overview"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#templateappcontainer-component-props",target:"_self",children:"TemplateAppContainer Component Props"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#templateappcontainer-accessibility",target:"_self",children:"TemplateAppContainer Accessibility"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#template-children-overview",target:"_self",children:"Template Children Overview"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#template-children-component-props",target:"_self",children:"Template Children Component Props"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#full-example-with-template-children-components",target:"_self",children:"Full Example with Template Children Components"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"templateappcontainer-overview",children:"TemplateAppContainer Overview"}),`
`,e.jsx(a,{of:h}),`
`,e.jsxs(t.p,{children:["If you have a custom ",e.jsx(t.code,{children:"Header"})," component that ",e.jsx(t.em,{children:"already"})," renders an HTML ",e.jsx(t.code,{children:"<header>"}),`
element, set `,e.jsx(t.code,{children:"renderHeaderElement"})," to false so only one ",e.jsx(t.code,{children:"<header>"}),` element is
rendered.`]}),`
`,e.jsxs(t.p,{children:["If you need to render the ",e.jsx(t.code,{children:"SkipNavigation"})," component, set ",e.jsx(t.code,{children:"renderSkipNavigation"}),`
to true.`]}),`
`,e.jsxs(t.p,{children:["Likewise, if you have a custom ",e.jsx(t.code,{children:"Footer"})," component that ",e.jsx(t.em,{children:"already"}),` renders an HTML
`,e.jsx(t.code,{children:"<footer>"})," element, set ",e.jsx(t.code,{children:"renderFooterElement"})," to false so only one ",e.jsx(t.code,{children:"<footer>"}),`
element is rendered.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"This is the recommended way to render an app page template."})}),`
`,e.jsx(n,{code:`
import { TemplateAppContainer } from "@nypl/design-system-react-components";
// ...
<TemplateAppContainer
aboveHeader={<Placeholder variant="short">Above Header</Placeholder>}
header={<Placeholder variant="short">Header</Placeholder>}
breakout={
  <>
    <Placeholder variant="short">Breadcrumbs</Placeholder>
    <Placeholder>Hero</Placeholder>
  </>
}
sidebar="left"
contentTop={<Placeholder variant="short">Content Top</Placeholder>}
contentSidebar={<Placeholder>Left Sidebar</Placeholder>}
contentPrimary={
  <>
    <Placeholder>Main Content</Placeholder>
    <Placeholder variant="short">More Content</Placeholder>
  </>
}
contentBottom={<Placeholder variant="short">Content Bottom</Placeholder>}
footer={<Placeholder>Footer</Placeholder>}
renderSkipNavigation={true}
/>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"templateappcontainer-component-props",children:"TemplateAppContainer Component Props"}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h2,{id:"templateappcontainer-accessibility",children:"TemplateAppContainer Accessibility"}),`
`,e.jsxs(t.p,{children:[e.jsxs(t.strong,{children:["The ",e.jsx(t.code,{children:"TemplateAppContainer"}),` component is the recommended way to render the entire
application.`]}),` Therefore, this accessibility section is specifically for the
`,e.jsx(t.code,{children:"TemplateAppContainer"}),` but the same rules apply to the individual "Template"
components.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TemplateAppContainer"})," component renders the header as a ",e.jsx(t.code,{children:"<header>"}),` element,
the content as a `,e.jsx(t.code,{children:"<main>"})," element, and the footer as a ",e.jsx(t.code,{children:"<footer>"})," element."]}),`
`,e.jsxs(t.p,{children:[`If you need to render an alert or notification at the top of the page with an
`,e.jsx(t.code,{children:"aside"})," HTML element or HTML element with the ",e.jsx(t.code,{children:'role="complementary"'}),` attribute,
then pass that alert or notification component to the `,e.jsx(t.code,{children:"aboveHeader"}),` prop. These
elements should `,e.jsx(t.em,{children:"not"})," be rendered in the ",e.jsx(t.code,{children:"header"}),` HTML section since that's an
accessibility violation.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TemplateAppContainer"}),` component renders a full DOM and one of the children
is the `,e.jsx(t.code,{children:"main"}),' HTML element with a default "id" of ',e.jsx(t.code,{children:'"mainContent"'}),`. This should
be used as the anchor element that the skip navigation link points to. If your
application is using the current Header, it already contains the skip
navigation feature but make sure it is pointing to the correct anchor element.`]}),`
`,e.jsxs(t.p,{children:[`If you are using a custom header component or you need to use the Reservoir
Design System (DS) `,e.jsx(t.code,{children:"SkipNavigation"})," component, then set the ",e.jsx(t.code,{children:"renderSkipNavigation"}),`
prop to true. This will render the `,e.jsx(t.code,{children:"SkipNavigation"}),` component at the top of the
page before any other elements. The main link will point to the `,e.jsx(t.code,{children:"#mainContent"}),`
`,e.jsx(t.code,{children:"main"})," element."]}),`
`,e.jsx(t.p,{children:"Resources"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/landmarks/complementary.html",rel:"nofollow",children:"W3C Aria Landmarks Example"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.digitala11y.com/complementary-role/",rel:"nofollow",children:"Digital A11y Role=Complementary"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://webaim.org/techniques/skipnav/",rel:"nofollow",children:"WebAim Skip Navigation Link"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://www.a11ymatters.com/pattern/skip-link/",rel:"nofollow",children:"A11ymatters Skip Navigation Link"})}),`
`]}),`
`,e.jsx(t.h2,{id:"template-children-overview",children:"Template Children Overview"}),`
`,e.jsxs(t.p,{children:[`The Reservoir Design System (DS) also provides a set of "template" components
that work together to render a consistent mobile and desktop layout. More
information on individual components and how they should be composed can be
found below. Even though these component are available for use, we recommend
using the `,e.jsx(t.code,{children:"TemplateAppContainer"}),` component and passing down children component
as props as needed.`]}),`
`,e.jsxs(t.p,{children:["Note: If you need to render the ",e.jsx(t.code,{children:"SkipNavigation"}),` component, you need to explicitly
render it immediately before the `,e.jsx(t.code,{children:"Template"}),` component. This is done
automatically in the `,e.jsx(t.code,{children:"TemplateAppContainer"})," component."]}),`
`,e.jsxs(t.p,{children:["Note: All components that go above the main content ",e.jsx(t.code,{children:"TemplateContent"}),` component
should be wrapped in a `,e.jsx(t.code,{children:"<div>"})," element or a ",e.jsx(t.code,{children:"<Box>"})," component."]}),`
`,e.jsx(t.p,{children:'Basic "template" components structure:'}),`
`,e.jsx(n,{code:`
import {
Template,
TemplateAboveHeader,
TemplateBreakout,
TemplateContent,
TemplateContentBottom,
TemplateContentPrimary,
TemplateContentSidebar,
TemplateContentTop,
TemplateFooter,
TemplateHeader,
} from "@nypl/design-system-react-components";
// ...
<>
<SkipNavigation />
<Template>
  <TemplateBreakout>
    <TemplateAboveHeader>
      // ...
    </TemplateAboveHeader>
    <TemplateHeader>
      // ...
    </TemplateHeader>
  </TemplateBreakout>
  <TemplateContent sidebar="...">
    <TemplateContentTop>
      // ...
    </TemplateContentTop>
    <TemplateContentPrimary>
      // ...
    </TemplateContentPrimary>
    <TemplateContentBottom>
      // ...
    </TemplateContentBottom>
  </TemplateContent>
  <TemplateFooter>
    // ...
  </TemplateFooter>
</Template>
</>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"template-children-component-props",children:"Template Children Component Props"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h3,{id:"template-components",children:"Template Components"}),`
`,e.jsx(t.p,{children:"The components consist of, listed in DOM structure order:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"Template"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateAboveHeader"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateHeader"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateBreakout"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateContent"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateContentTop"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateContentPrimary"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateContentSidebar"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateContentBottom"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TemplateFooter"})}),`
`]}),`
`,e.jsx(t.h4,{id:"template-1",children:"Template"}),`
`,e.jsx(n,{code:`
<Template>
// ...
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:T}),`
`,e.jsx(t.h4,{id:"templatebreakout",children:"TemplateBreakout"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  // ...
</TemplateBreakout>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:x}),`
`,e.jsx(t.h4,{id:"templateaboveheader",children:"TemplateAboveHeader"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
</TemplateBreakout>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:j}),`
`,e.jsx(t.h4,{id:"templateheader",children:"TemplateHeader"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:C}),`
`,e.jsx(t.h4,{id:"templatecontent",children:"TemplateContent"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
<TemplateContent id="mainContent">
  // ...
</TemplateContent>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(t.h4,{id:"templatecontenttop",children:"TemplateContentTop"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
<TemplateContent>
  <TemplateContentTop>
    // ...
  </TemplateContentTop>
</TemplateContent>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:b}),`
`,e.jsx(t.h4,{id:"templatecontentprimary",children:"TemplateContentPrimary"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
<TemplateContent>
  <TemplateContentPrimary>
    // ...
  </TemplateContentPrimary>
</TemplateContent>
<Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:f}),`
`,e.jsx(t.h4,{id:"templatecontentsidebar",children:"TemplateContentSidebar"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
<TemplateBreakout>
<TemplateContent sidebar="right">
  <TemplateContentPrimary>
    // ...
  </TemplateContentPrimary>
  <TemplateContentSidebar>
    // RIGHT SIDEBAR
  </TemplateContentSidebar>
</TemplateContent>
</Template>

<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
<TemplateContent sidebar="left">
  <TemplateContentSidebar>
    // LEFT SIDEBAR
  </TemplateContentSidebar>
  <TemplateContentPrimary>
    // ...
  </TemplateContentPrimary>
</TemplateContent>
<Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(t.h4,{id:"templatecontentbottom",children:"TemplateContentBottom"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
<TemplateContent>
  <TemplateContentTop>
    // ...
  </TemplateContentTop>
  <TemplateContentPrimary>
    // ...
  </TemplateContentPrimary>
  <TemplateContentBottom>
    // ...
  </TemplateContentBottom>
</TemplateContent>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:y}),`
`,e.jsx(t.h4,{id:"templatefooter",children:"TemplateFooter"}),`
`,e.jsx(n,{code:`
<Template>
<TemplateBreakout>
  <TemplateAboveHeader>
    // ...
  </TemplateAboveHeader>
  <TemplateHeader>
    // ...
  </TemplateHeader>
</TemplateBreakout>
<TemplateContent sidebar="right">
  //...
</TemplateContent>
<TemplateFooter>
  // ...
</TemplateFooter>
</Template>
`,language:"jsx"}),`
`,e.jsx(a,{of:v}),`
`,e.jsx(t.h3,{id:"template-children-components-sidebar-configuration",children:"Template Children Components Sidebar Configuration"}),`
`,e.jsx(t.p,{children:"In order to render a sidebar, two steps must be taken."}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["The ",e.jsx(t.code,{children:"TemplateContent"}),` component needs to be aware of it. Pass the location
of the sidebar to the `,e.jsx(t.code,{children:"sidebar"}),' prop as either "left" or "right".']}),`
`]}),`
`,e.jsx(n,{code:`
<TemplateContent sidebar="left">
`,language:"jsx"}),`
`,e.jsxs(t.ol,{start:"2",children:[`
`,e.jsxs(t.li,{children:["Render ",e.jsx(t.code,{children:"TemplateContentSidebar"})," and ",e.jsx(t.code,{children:"TemplateContentPrimary"}),` next to each
other in the appropriate order. If the sidebar must show left, then
`,e.jsx(t.code,{children:"TemplateContentSidebar"})," comes before ",e.jsx(t.code,{children:"TemplateContentPrimary"}),`. Otherwise,
`,e.jsx(t.code,{children:"TemplateContentPrimary"})," must come before ",e.jsx(t.code,{children:"TemplateContentSidebar"}),"."]}),`
`]}),`
`,e.jsx(n,{code:`
// Render left sidebar
<TemplateContent sidebar="left">
<TemplateContentSidebar>
  // ...
</TemplateContentSidebar>
<TemplateContentPrimary>
  // ...
</TemplateContentPrimary>
</TemplateContent>
// Render right sidebar
<TemplateContent sidebar="right">
<TemplateContentPrimary>// ...</TemplateContentPrimary>
<TemplateContentSidebar>// ...</TemplateContentSidebar>
</TemplateContent>
`,language:"jsx"}),`
`,e.jsx(t.h2,{id:"full-example-with-template-children-components",children:"Full Example with Template Children Components"}),`
`,`
`,e.jsx(t.p,{children:'This is best viewed in the Storybook "Canvas" and not "Docs" section.'}),`
`,e.jsx(r,{of:w}),`
`,e.jsx(t.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(H,{changelogData:A})]})}function D(l={}){const{wrapper:t}={...m(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(p,{...l})}):p(l)}export{D as default,M as otherSubHeaderText};
