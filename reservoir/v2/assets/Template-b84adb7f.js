import{j as e,a as n,F as s}from"./jsx-runtime-fdf4db99.js";import{M as T,D as a,b as o,C as i,A as p}from"./index-445595fc.js";import{T as C,W as d,C as m,F as u}from"./Template.stories-887f0f47.js";import{T as b,a as f,b as g,c as v,d as y,e as k,f as H,g as A,h as w,i as P,j as B}from"./Template-004c0517.js";import{L as l}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Accordion-ddc955e7.js";import"./Icon-4eeffe51.js";import"./chakra-ui-transition.esm-3069754e.js";import"./index-13103a50.js";import"./chakra-ui-descendant.esm-f106b18c.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./Breadcrumbs-527e5d08.js";import"./Tooltip-88733f7d.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./popper-f3391c26.js";import"./chakra-ui-portal.esm-6752a0d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./Button-948e9be8.js";import"./Card-4cbdbbf1.js";import"./Form-b79b3734.js";import"./SimpleGrid-bd04b221.js";import"./Hero-42312d27.js";import"./HorizontalRule-3ade1aff.js";import"./Notification-715070ee.js";import"./SkipNavigation-d3aa0043.js";import"./List-582282a6.js";import"./TextInput-70995d87.js";import"./Label-d380cca8.js";import"./chakra-ui-form-control.esm-5c4917b4.js";const Be="With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.";function c(r){const t=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",em:"em",strong:"strong",a:"a",h3:"h3",h4:"h4",ol:"ol"},h(),r.components);return n(s,{children:[e(T,{of:C}),`
`,e(t.h1,{id:"template",children:"Template"}),`
`,n(t.table,{children:[e(t.thead,{children:n(t.tr,{children:[e(t.th,{children:"Component Version"}),e(t.th,{children:"DS Version"})]})}),n(t.tbody,{children:[n(t.tr,{children:[e(t.td,{children:"Added"}),e(t.td,{children:e(t.code,{children:"0.3.6"})})]}),n(t.tr,{children:[e(t.td,{children:"Latest"}),e(t.td,{children:e(t.code,{children:"1.7.0"})})]})]})]}),`
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
`,e(i,{of:u})]})}function Se(r={}){const{wrapper:t}=Object.assign({},h(),r.components);return t?e(t,Object.assign({},r,{children:e(c,r)})):c(r)}export{Se as default,Be as otherSubHeaderText};
//# sourceMappingURL=Template-b84adb7f.js.map
