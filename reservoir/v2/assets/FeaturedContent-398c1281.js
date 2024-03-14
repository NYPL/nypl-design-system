import{j as n,a as t,F as h}from"./jsx-runtime-fdf4db99.js";import{M as c,C as r,A as s}from"./index-445595fc.js";import{C as p}from"./ComponentChangelogTable-310bbbfd.js";import{F as m,W as a,L as f,I as g,i as u,t as b}from"./FeaturedContent.stories-17c72448.js";import{L as i}from"./Link-24c1437a.js";import{u as d}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./SimpleGrid-bd04b221.js";import"./FeaturedContent-3ad5c9c0.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";const w=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:['Updated the spacing in the "fullScreen" variant to better align the component text content with the page text content.']},{date:"2023-10-18",version:"2.1.0",type:"New Feature",affects:["Accessibility","Documentation","Functionality","Styles"],notes:["Adds FeaturedContent component."]}];function l(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},d(),o.components);return t(h,{children:[n(c,{of:m}),`
`,n(e.h1,{id:"featured-content",children:"Featured Content"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"2.1.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.1.3"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#component-width-variations",target:"_self",children:"Component Width Variations"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#image-position-variations",target:"_self",children:"Image Position Variations"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#image-width-variations",target:"_self",children:"Image Width Variations"}),`
`]}),`
`,t(e.li,{children:[`
`,n(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"FeaturedContent"}),` component provides a method to visually emphasize a text
block with an image, within a full page layout.`]}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(r,{of:a}),`
`,n(s,{of:a}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["The ",n(e.code,{children:"FeaturedContent"}),` component combines a text block and an image. The text
block (`,n(e.code,{children:"textContent"}),`) can be any JSX element, so accessibility for child input
elements should follow the accessibility requirements specified for each input
component (for example,
`,n(e.a,{href:"https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-form-elements-button--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Button"}),`).
All images must have an `,n(e.code,{children:"alt"})," attribute, even if it's empty. The ",n(e.code,{children:"alt"}),` prop
should be used to concisely describe the image. If the image is decorative, then
the `,n(e.code,{children:"alt"})," prop should be an empty string ",n(e.code,{children:'""'}),"."]}),`
`,n(e.p,{children:"Resources for text accessibility:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/typography/text",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Text"})}),`
`]}),`
`,n(e.p,{children:"Resources for image accessibility:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/WAI/tutorials/images/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Images Tutorial"})}),`
`,n(e.li,{children:n(e.a,{href:"https://webaim.org/techniques/images/",target:"_blank",rel:"nofollow noopener noreferrer",children:"WebAIM Accessible Images"})}),`
`,n(e.li,{children:n(e.a,{href:"https://usability.yale.edu/web-accessibility/articles/images",target:"_blank",rel:"nofollow noopener noreferrer",children:"Yale Usability & Web Accessibility"})}),`
`]}),`
`,n(e.h2,{id:"component-width-variations",children:"Component Width Variations"}),`
`,t(e.p,{children:["The width variations of the ",n(e.code,{children:"FeaturedContent"}),` component can be rendered through
the `,n(e.code,{children:"isFullWidth"})," prop. The default is ",n(e.code,{children:"isFullWidth = false"}),`, and the component
will fill only its parent. If `,n(e.code,{children:"isFullWidth = true"}),`, component will fill the
screen's width (max 1280px), breaking out of its parent container. This full
layout is best viewed on a full screen, not as shown below.`]}),`
`,n(r,{of:f}),`
`,n(e.h2,{id:"image-position-variations",children:"Image Position Variations"}),`
`,t(e.p,{children:["The image position variations of the ",n(e.code,{children:"FeaturedContent"}),` component can be rendered
through the `,n(e.code,{children:"imageProps.position"})," prop. The default is ",n(e.code,{children:"end"}),`, and the image will
appear after the text block in a row (on mobile, it will appear below). The
other option is `,n(e.code,{children:"start"}),`, where the image will appear before the text block in
the row on desktop (and above it on mobile).`]}),`
`,n(r,{of:g}),`
`,n(e.h2,{id:"image-width-variations",children:"Image Width Variations"}),`
`,t(e.p,{children:["The image width variations of the ",n(e.code,{children:"FeaturedContent"}),` component can be rendered
through the `,n(e.code,{children:"imageProps.width"})," prop. The options for width are ",n(e.code,{children:"oneQuarter"}),`,
`,n(e.code,{children:"oneThird"}),", ",n(e.code,{children:"oneHalf"}),", ",n(e.code,{children:"twoThirds"}),", and ",n(e.code,{children:"threeQuarters"}),`. The default width is
`,n(e.code,{children:"oneHalf"}),"."]}),`
`,n(r,{of:u}),`
`,n(e.h2,{id:"text-content",children:"Text Content"}),`
`,t(e.p,{children:[n(e.code,{children:"textContent"})," is a string or JSX element passed into ",n(e.code,{children:"FeaturedContent"}),`, so
accessibility standards and spacing should be considered independently of the
`,n(e.code,{children:"FeaturedContent"})," styling."]}),`
`,n(e.p,{children:`The above example with an overline, a heading, a short paragraph of body text,
and a CTA button is the recommended usage. While other configurations are
possible, keep in mind that the minimum height of the component is 320px and it
is best to avoid excessive white space.`}),`
`,n(r,{of:b}),`
`,n(e.h2,{id:"changelog",children:"Changelog"}),`
`,n(p,{changelogData:w})]})}function te(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?n(e,Object.assign({},o,{children:n(l,o)})):l(o)}export{te as default};
//# sourceMappingURL=FeaturedContent-398c1281.js.map
