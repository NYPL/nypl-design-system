import{j as n,a as i,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,b as d,C as t,A as g}from"./index-445595fc.js";import{C as a,W as c,I as u,a as C,b as f,c as y,d as w,H as b,F as k,e as v,f as H,G as I,S as A,g as T}from"./Card.stories-f3564fa8.js";import{L as o}from"./Link-24c1437a.js";import{C as S}from"./ComponentChangelogTable-310bbbfd.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./chunk-AY7I2SME-5eb1ab46.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./Card-4cbdbbf1.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./HorizontalRule-3ade1aff.js";import"./SimpleGrid-bd04b221.js";import"./types-ee6958f5.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Table-64c6aa77.js";const x=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Functionality","Documentation"],notes:["Propagates the `imageProps.isLazy` property down to the `Card`'s internal `Image` component implementation."]}];function h(r){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a",em:"em"},l(),r.components);return i(s,{children:[n(p,{of:a}),`
`,n(e.h1,{id:"card",children:"Card"}),`
`,i(e.table,{children:[n(e.thead,{children:i(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),i(e.tbody,{children:[i(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.24.0"})})]}),i(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(o,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#image-position",target:"_self",children:"Image Position"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#image-size",target:"_self",children:"Image Size"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#custom-image-component",target:"_self",children:"Custom Image Component"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#card-with-link-heading",target:"_self",children:"Card With Link Heading"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#card-with-full-click-functionality",target:"_self",children:"Card With Full-Click Functionality"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#card-with-right-side-cardactions",target:"_self",children:"Card with Right Side CardActions"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#cards-in-a-grid",target:"_self",children:"Cards in a Grid"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#cards-in-a-stack",target:"_self",children:"Cards in a Stack"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#cards-without-images",target:"_self",children:"Cards Without Images"}),`
`]}),`
`,i(e.li,{children:[`
`,n(o,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:a}),`
`,i(e.p,{children:["The ",n(e.code,{children:"Card"}),` component is viewed as a contained, stand-alone element. It is highly
configurable and composable. It can be shown with or without an image and the
content area is composed using Card-specific child components: `,n(e.code,{children:"CardHeading"}),`,
`,n(e.code,{children:"CardActions"})," and ",n(e.code,{children:"CardContent"}),`. These child components can be arranged in any
order and each child component may be used multiple times within the content
area. Although a `,n(e.code,{children:"Card"})," is a self-contained unit, ",n(e.code,{children:"Card"}),` components are often
grouped together and displayed in some type of grid layout.`]}),`
`,i(e.p,{children:["Note: all of the examples have images with the ",n(e.code,{children:"isLazy"})," set to true."]}),`
`,n(e.h3,{id:"cardheading",children:"CardHeading"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"CardHeading"}),` component mirrors the standard Reservoir Design System (DS)
`,n(e.code,{children:"Heading"})," component and accepts the ",n(e.a,{href:"../?path=/story/components-typography-styles-heading--with-controls",children:"same props"}),"."]}),`
`,n(e.h3,{id:"cardactions",children:"CardActions"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"CardActions"}),` component is used to display "call to action" (CTA) buttons
and links for the card. The DS `,n(e.code,{children:"Button"})," and ",n(e.code,{children:"Link"}),` components should be passed
as children into the `,n(e.code,{children:"CardActions"})," component."]}),`
`,i(e.p,{children:["Set the ",n(e.code,{children:"isAlignedRightActions"})," prop to true in the ",n(e.code,{children:"Card"}),` component to align the
`,n(e.code,{children:"CardActions"}),` to the right of the the main content area. This is only applicable
in the row layout of the `,n(e.code,{children:"Card"})," component."]}),`
`,n(e.h3,{id:"cardcontent",children:"CardContent"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"CardContent"}),` component should be used to display all content other than
headings and CTAs.`]}),`
`,n(e.h3,{id:"cardimage",children:"CardImage"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"CardImage"})," component is ",n(e.em,{children:"not"}),` exported and is used internally only in the
`,n(e.code,{children:"Card"}),` component. It is a convenience component that mirrors the standard DS
`,n(e.code,{children:"Image"})," component. This means that the ",n(e.code,{children:"CardImage"}),` component accepts the same
props as the `,n(e.code,{children:"Image"})," component, in addition to the ",n(e.code,{children:"isAtEnd"})," prop."]}),`
`,i(e.p,{children:["Developers do ",n(e.em,{children:"not"}),` need to implement this component. Instead, it will be
rendered in the `,n(e.code,{children:"Card"})," component through its ",n(e.code,{children:"imageProps"})," prop."]}),`
`,n(d,{code:`
<Card
  imageProps={{
    alt: "Alt text",
    aspectRatio: "twoByOne",
    caption: "caption text",
    credit: "credit text",
    isAtEnd: true,
    isLazy: true,
    size: "medium",
    src: "//placekitten.com/400/200",
  }}
  {...otherCardProps}
>
  <CardHeading level="h3" id="heading-id">
    Heading Text
  </CardHeading>
  <CardContent>
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
    Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
    facilisis in, egestas eget quam.
  </CardContent>
</Card>
`,language:"jsx"}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(t,{of:c}),`
`,n(g,{of:c}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.h3,{id:"headings",children:"Headings"}),`
`,i(e.p,{children:["In general, headings from ",n(e.code,{children:"h1"})," through ",n(e.code,{children:"h6"}),` must be in sequential order in the
DOM tree. Rendering an `,n(e.code,{children:"h4"})," following an ",n(e.code,{children:"h2"}),` will throw an accessibility error.
Therefore, when adding `,n(e.code,{children:"CardHeading"}),` components, make sure to add them in
sequential order with the proper `,n(e.code,{children:"level"})," prop."]}),`
`,n(d,{code:`
// Correct

<CardHeading level="h3" id="headingthree">
  Heading level three
</CardHeading>
<CardHeading level="h4" id="headingfour">
  Heading level four
</CardHeading>

// Incorrect

<CardHeading level="h2" id="headingtwo">
  Heading level Two
</CardHeading>
<CardHeading level="h4" id="headingfour">
  Heading level four
</CardHeading>
`,language:"jsx"}),`
`,n(e.h3,{id:"full-click-functionality",children:"Full-Click Functionality"}),`
`,i(e.p,{children:["Passing in a URL in the ",n(e.code,{children:"mainActionLink"})," prop will make the entire ",n(e.code,{children:"Card"}),`
clickable. Other links in the `,n(e.code,{children:"CardActions"}),` component can still be accessed by
tabbing through and pressing "enter" or by clicking as you normally would on a
link.`]}),`
`,n(e.h2,{id:"image-position",children:"Image Position"}),`
`,i(e.p,{children:["By default, the image is always the first element within a ",n(e.code,{children:"Card"}),`. This means
the image is at the top of a `,n(e.code,{children:"Card"}),` with a column layout and on the left side of
a `,n(e.code,{children:"Card"})," with a row layout. However, you can use the ",n(e.code,{children:"imageProps.isAtEnd"}),` boolean
prop to override the default placement and move the image to the last element
within a `,n(e.code,{children:"Card"}),"."]}),`
`,n(e.h3,{id:"column-cards",children:"Column Cards"}),`
`,n(t,{of:u}),`
`,n(e.h3,{id:"row-cards",children:"Row Cards"}),`
`,n(t,{of:C}),`
`,n(e.h2,{id:"image-size",children:"Image Size"}),`
`,i(e.p,{children:["By default, the image width is ",n(e.code,{children:"100%"})," for a ",n(e.code,{children:"Card"}),` with a column layout and
`,n(e.code,{children:"225px"})," for a ",n(e.code,{children:"Card"})," with a row layout. However, you can use the ",n(e.code,{children:"imageProps.size"}),`
prop to override the default width.`]}),`
`,n(e.h3,{id:"column-cards-1",children:"Column Cards"}),`
`,n(t,{of:f}),`
`,n(e.h3,{id:"row-cards-1",children:"Row Cards"}),`
`,n(t,{of:y}),`
`,n(e.h2,{id:"custom-image-component",children:"Custom Image Component"}),`
`,i(e.p,{children:["Instead of passing a path for the ",n(e.code,{children:"imageProps.src"}),` prop, you can pass a custom
image component in using the `,n(e.code,{children:"imageProps.component"})," prop."]}),`
`,n(t,{of:w}),`
`,n(e.h2,{id:"card-with-link-heading",children:"Card with Link Heading"}),`
`,i(e.p,{children:["The ",n(e.code,{children:"CardHeading"})," component works just like the DS ",n(e.code,{children:"Heading"}),` component. This
means that a URL can be passed in the `,n(e.code,{children:"url"})," prop for ",n(e.code,{children:"CardHeading"})," or a ",n(e.code,{children:"Link"}),`
component can be used as a child. Click on "Show code" in the example below to
see both patterns.`]}),`
`,n(t,{of:b}),`
`,n(e.h2,{id:"card-with-full-click-functionality",children:"Card With Full-Click Functionality"}),`
`,i(e.p,{children:["To enable the full-click functionality in the ",n(e.code,{children:"Card"}),` component, pass a URL in
the `,n(e.code,{children:"mainActionLink"})," prop. This will make the entire ",n(e.code,{children:"Card"}),` component clickable.
If the `,n(e.code,{children:"Card"}),` has action links or buttons, they can still be accessed by tabbing
through the `,n(e.code,{children:"Card"})," and pressing ",n(e.code,{children:"enter"})," or clicking like a regular link."]}),`
`,i(e.p,{children:["Internally, if multiple ",n(e.code,{children:"CardHeading"}),` components are passed, only the first one
will have the full-click link. This, however, does not affect the `,n(e.code,{children:"Card"}),` itself
from being having the full-click functionality.`]}),`
`,n(t,{of:k}),`
`,i(e.p,{children:["This example can be found in the ",n(e.a,{href:"https://nypl-ds-test-app.vercel.app/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Turbine homepage"}),"."]}),`
`,n(t,{of:v}),`
`,n(e.h2,{id:"card-with-right-side-cardactions",children:"Card with Right Side CardActions"}),`
`,i(e.p,{children:["It's possible to set only the ",n(e.code,{children:"CardActions"}),` component on the right side of the
main content area of the `,n(e.code,{children:"Card"}),". This is possible only in the ",n(e.code,{children:'layout="row"'}),`
layout and through the `,n(e.code,{children:"Card"})," component's ",n(e.code,{children:"isAlignedRightActions"}),` prop which
must be set to `,n(e.code,{children:"true"}),"."]}),`
`,n(t,{of:H}),`
`,n(e.h2,{id:"cards-in-a-grid",children:"Cards in a Grid"}),`
`,n(t,{of:I}),`
`,n(e.h2,{id:"cards-in-a-stack",children:"Cards in a Stack"}),`
`,n(t,{of:A}),`
`,n(e.h2,{id:"cards-without-images",children:"Cards Without Images"}),`
`,n(t,{of:T}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(S,{changelogData:x})]})}function ue(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,Object.assign({},r,{children:n(h,r)})):h(r)}export{ue as default};
//# sourceMappingURL=Card-3670c71e.js.map
