import{j as e,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as T,D as a,b as o,C as i,A as p}from"./index-42243e0e.js";import{T as C,W as d,C as m,F as u}from"./Template.stories-a117a96f.js";import{T as b,a as f,b as g,c as v,d as y,e as k,f as H,g as A,h as w,i as P,j as B}from"./Template-d57a7289.js";import{L as l}from"./Link-0ed02cf7.js";import{u as h}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Accordion-9b4f5ad6.js";import"./Icon-6616a4b9.js";import"./chakra-ui-transition.esm-402cd1c1.js";import"./index-fb519959.js";import"./chakra-ui-descendant.esm-237bc145.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./Breadcrumbs-983ea904.js";import"./Tooltip-aeab1bc9.js";import"./Image-3405777f.js";import"./ComponentWrapper-82a15cf7.js";import"./Heading-2ec2ea62.js";import"./Text-eabcdc0a.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-c70f6466.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./utils-acca7d12.js";import"./Button-a3ea41e0.js";import"./Card-ecb67591.js";import"./Form-7babaf24.js";import"./SimpleGrid-e54e0b68.js";import"./Hero-2040dfe5.js";import"./HorizontalRule-da9b0069.js";import"./Notification-69d32803.js";import"./SkipNavigation-9bb818ff.js";import"./List-b2e63895.js";import"./TextInput-3683470d.js";import"./Label-2b2058d3.js";import"./chakra-ui-form-control.esm-c23b95fa.js";const Pe="With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";function c(r){const t=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",strong:"strong",a:"a",h3:"h3",h4:"h4",ol:"ol"},h(),r.components);return n(s,{children:[e(T,{of:C}),`
`,e(t.h1,{id:"template",children:"Template"}),`
`,n(t.table,{children:[e(t.thead,{children:n(t.tr,{children:[e(t.th,{children:"Component Version"}),e(t.th,{children:"DS Version"})]})}),n(t.tbody,{children:[n(t.tr,{children:[e(t.td,{children:"Added"}),e(t.td,{children:e(t.code,{children:"0.3.6"})})]}),n(t.tr,{children:[e(t.td,{children:"Latest"}),e(t.td,{children:e(t.code,{children:"1.5.0"})})]})]})]}),`
`,e(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(t.ul,{children:[`
`,n(t.li,{children:[`
`,e(l,{href:"#templateappcontainer-overview",children:"TemplateAppContainer Overview"}),`
`]}),`
`,n(t.li,{children:[`
`,e(l,{href:"#templateappcontainer-component-props",children:"TemplateAppContainer Component Props"}),`
`]}),`
`,n(t.li,{children:[`
`,e(l,{href:"#templateappcontainer-accessibility",children:"TemplateAppContainer Accessibility"}),`
`]}),`
`,n(t.li,{children:[`
`,e(l,{href:"#template-children-overview",children:"Template Children Overview"}),`
`]}),`
`,n(t.li,{children:[`
`,e(l,{href:"#template-children-component-props",children:"Template Children Component Props"}),`
`]}),`
`,n(t.li,{children:[`
`,e(l,{href:"#full-example-with-template-children-components",children:"Full Example with Template Children Components"}),`
`]}),`
`]}),`
`,e(t.h2,{id:"templateappcontainer-overview",children:"TemplateAppContainer Overview"}),`
`,e(a,{of:b}),`
`,n(t.p,{children:["If you have a custom ",e(t.code,{children:"Header"})," component that ",e(t.em,{children:"already"})," renders an HTML ",e(t.code,{children:"<header>"}),`
element, set `,e(t.code,{children:"renderHeaderElement"})," to false so only one ",e(t.code,{children:"<header>"}),` element is
rendered.`]}),`
`,n(t.p,{children:["If you need to render the ",e(t.code,{children:"SkipNavigation"})," component, set ",e(t.code,{children:"renderSkipNavigation"}),`
to true.`]}),`
`,n(t.p,{children:["Likewise, if you have a custom ",e(t.code,{children:"Footer"})," component that ",e(t.em,{children:"already"}),` renders an HTML
`,e(t.code,{children:"<footer>"})," element, set ",e(t.code,{children:"renderFooterElement"})," to false so only one ",e(t.code,{children:"<footer>"}),`
element is rendered.`]}),`
`,e(t.p,{children:e(t.strong,{children:"This is the recommended way to render an app page template."})}),`
`,e(o,{code:`
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
`,e(t.h2,{id:"templateappcontainer-component-props",children:"TemplateAppContainer Component Props"}),`
`,e(i,{of:d}),`
`,e(p,{of:d}),`
`,e(t.h2,{id:"templateappcontainer-accessibility",children:"TemplateAppContainer Accessibility"}),`
`,n(t.p,{children:[n(t.strong,{children:["The ",e(t.code,{children:"TemplateAppContainer"}),` component is the recommended way to render the entire
application.`]}),` Therefore, this accessibility section is specifically for the
`,e(t.code,{children:"TemplateAppContainer"}),` but the same rules apply to the individual "Template"
components.`]}),`
`,n(t.p,{children:["The ",e(t.code,{children:"TemplateAppContainer"})," component renders the header as a ",e(t.code,{children:"<header>"}),` element,
the content as a `,e(t.code,{children:"<main>"})," element, and the footer as a ",e(t.code,{children:"<footer>"})," element."]}),`
`,n(t.p,{children:[`If you need to render an alert or notification at the top of the page with an
`,e(t.code,{children:"aside"})," HTML element or HTML element with the ",e(t.code,{children:'role="complementary"'}),` attribute,
then pass that alert or notification component to the `,e(t.code,{children:"aboveHeader"}),` prop. These
elements should `,e(t.em,{children:"not"})," be rendered in the ",e(t.code,{children:"header"}),` HTML section since that's an
accessibility violation.`]}),`
`,n(t.p,{children:["The ",e(t.code,{children:"TemplateAppContainer"}),` component renders a full DOM and one of the children
is the `,e(t.code,{children:"main"}),' HTML element with a default "id" of ',e(t.code,{children:'"mainContent"'}),`. This should
be used as the anchor element that the skip navigation link points to. If your
application is using the current Header, it already contains the skip
navigation feature but make sure it is pointing to the correct anchor element.`]}),`
`,n(t.p,{children:[`If you are using a custom header component or you need to use the Reservoir
Design System (DS) `,e(t.code,{children:"SkipNavigation"})," component, then set the ",e(t.code,{children:"renderSkipNavigation"}),`
prop to true. This will render the `,e(t.code,{children:"SkipNavigation"}),` component at the top of the
page before any other elements. The main link will point to the `,e(t.code,{children:"#mainContent"}),`
`,e(t.code,{children:"main"})," element."]}),`
`,e(t.p,{children:"Resources"}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:e(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/landmarks/complementary.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Aria Landmarks Example"})}),`
`,e(t.li,{children:e(t.a,{href:"https://www.digitala11y.com/complementary-role/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Digital A11y Role=Complementary"})}),`
`,e(t.li,{children:e(t.a,{href:"https://webaim.org/techniques/skipnav/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAim Skip Navigation Link"})}),`
`,e(t.li,{children:e(t.a,{href:"https://www.a11ymatters.com/pattern/skip-link/",target:"_blank",rel:"nofollow noopener noreferrer",children:"A11ymatters Skip Navigation Link"})}),`
`]}),`
`,e(t.h2,{id:"template-children-overview",children:"Template Children Overview"}),`
`,n(t.p,{children:[`The Reservoir Design System (DS) also provides a set of "template" components
that work together to render a consistent mobile and desktop layout. More
information on individual components and how they should be composed can be
found below. Even though these component are available for use, we recommend
using the `,e(t.code,{children:"TemplateAppContainer"}),` component and passing down children component
as props as needed.`]}),`
`,n(t.p,{children:["Note: If you need to render the ",e(t.code,{children:"SkipNavigation"}),` component, you need to explicitly
render it immediately before the `,e(t.code,{children:"Template"}),` component. This is done
automatically in the `,e(t.code,{children:"TemplateAppContainer"})," component."]}),`
`,n(t.p,{children:["Note: All components that go above the main content ",e(t.code,{children:"TemplateContent"}),` component
should be wrapped in a `,e(t.code,{children:"<div>"})," element or a ",e(t.code,{children:"<Box>"})," component."]}),`
`,e(t.p,{children:'Basic "template" components structure:'}),`
`,e(o,{code:`
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
`,e(t.h2,{id:"template-children-component-props",children:"Template Children Component Props"}),`
`,e(i,{of:m}),`
`,e(p,{of:m}),`
`,e(t.h3,{id:"template-components",children:"Template Components"}),`
`,e(t.p,{children:"The components consist of, listed in DOM structure order:"}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:e(t.code,{children:"Template"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateAboveHeader"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateHeader"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateBreakout"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateContent"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateContentTop"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateContentPrimary"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateContentSidebar"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateContentBottom"})}),`
`,e(t.li,{children:e(t.code,{children:"TemplateFooter"})}),`
`]}),`
`,e(t.h4,{id:"template-1",children:"Template"}),`
`,e(o,{code:`
<Template>
  // ...
</Template>
`,language:"jsx"}),`
`,e(a,{of:f}),`
`,e(t.h4,{id:"templatebreakout",children:"TemplateBreakout"}),`
`,e(o,{code:`
<Template>
  <TemplateBreakout>
    // ...
  </TemplateBreakout>
</Template>
`,language:"jsx"}),`
`,e(a,{of:g}),`
`,e(t.h4,{id:"templateaboveheader",children:"TemplateAboveHeader"}),`
`,e(o,{code:`
<Template>
  <TemplateBreakout>
    <TemplateAboveHeader>
      // ...
    </TemplateAboveHeader>
  </TemplateBreakout>
</Template>
`,language:"jsx"}),`
`,e(a,{of:v}),`
`,e(t.h4,{id:"templateheader",children:"TemplateHeader"}),`
`,e(o,{code:`
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
`,e(a,{of:y}),`
`,e(t.h4,{id:"templatecontent",children:"TemplateContent"}),`
`,e(o,{code:`
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
`,e(a,{of:k}),`
`,e(t.h4,{id:"templatecontenttop",children:"TemplateContentTop"}),`
`,e(o,{code:`
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
`,e(a,{of:H}),`
`,e(t.h4,{id:"templatecontentprimary",children:"TemplateContentPrimary"}),`
`,e(o,{code:`
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
`,e(a,{of:A}),`
`,e(t.h4,{id:"templatecontentsidebar",children:"TemplateContentSidebar"}),`
`,e(o,{code:`
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
`,e(a,{of:w}),`
`,e(t.h4,{id:"templatecontentbottom",children:"TemplateContentBottom"}),`
`,e(o,{code:`
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
`,e(a,{of:P}),`
`,e(t.h4,{id:"templatefooter",children:"TemplateFooter"}),`
`,e(o,{code:`
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
`,e(a,{of:B}),`
`,e(t.h3,{id:"template-children-components-sidebar-configuration",children:"Template Children Components Sidebar Configuration"}),`
`,e(t.p,{children:"In order to render a sidebar, two steps must be taken."}),`
`,n(t.ol,{children:[`
`,n(t.li,{children:["The ",e(t.code,{children:"TemplateContent"}),` component needs to be aware of it. Pass the location
of the sidebar to the `,e(t.code,{children:"sidebar"}),' prop as either "left" or "right".']}),`
`]}),`
`,e(o,{code:`
<TemplateContent sidebar="left">
`,language:"jsx"}),`
`,n(t.ol,{start:"2",children:[`
`,n(t.li,{children:["Render ",e(t.code,{children:"TemplateContentSidebar"})," and ",e(t.code,{children:"TemplateContentPrimary"}),` next to each
other in the appropriate order. If the sidebar must show left, then
`,e(t.code,{children:"TemplateContentSidebar"})," comes before ",e(t.code,{children:"TemplateContentPrimary"}),`. Otherwise,
`,e(t.code,{children:"TemplateContentPrimary"})," must come before ",e(t.code,{children:"TemplateContentSidebar"}),"."]}),`
`]}),`
`,e(o,{code:`
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
`,e(t.h2,{id:"full-example-with-template-children-components",children:"Full Example with Template Children Components"}),`
`,`
`,e(t.p,{children:'This is best viewed in the Storybook "Canvas" and not "Docs" section.'}),`
`,e(i,{of:u})]})}function Be(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e(t,Object.assign({},r,{children:e(c,r)})):c(r)}export{Be as default,Pe as otherSubHeaderText};
//# sourceMappingURL=Template-83acd25b.js.map
