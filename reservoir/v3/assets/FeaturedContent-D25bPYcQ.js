import{u as r,j as e,M as d,L as t,C as s,bw as l}from"./iframe-D93LbwGv.js";import{C as h}from"./ComponentChangelogTable-Ck_3mwrR.js";import{F as c,W as o,L as p,I as x,i as m,t as j}from"./FeaturedContent.stories-BqMFobqc.js";const f=[{date:"2025-03-20",version:"3.5.5",type:"Update",affects:["Styles"],notes:["Updates styles with container queries to be more responsive."]},{date:"2024-08-29",version:"3.3.0",type:"Update",affects:["Documentation"],notes:["Removes `imageProps.alt` missing warning message as the prop is not always required."]},{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `FeaturedContentWidthType` and `FeaturedContentPositionType` types and the `FeaturedContentImageProps` interface."]},{date:"2024-04-25",version:"3.1.1",type:"Update",affects:["Functionality"],notes:["Adds workaround to fix Chakra bug that causes certain image URLs to not render through the `background-image` CSS property."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update.","Fixed the responsive styles related to the image."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:['Updated the spacing in the "fullScreen" variant to better align the component text content with the page text content.']},{date:"2023-10-18",version:"2.1.0",type:"New Feature",affects:["Accessibility","Documentation","Functionality","Styles"],notes:["Adds FeaturedContent component."]}];function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"featured-content",children:"Featured Content"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"2.1.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.3.5"})})]})]})]}),`
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
`,e.jsx(t,{href:"#component-width-variations",target:"_self",children:"Component Width Variations"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#image-position-variations",target:"_self",children:"Image Position Variations"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#image-width-variations",target:"_self",children:"Image Width Variations"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FeaturedContent"}),` component provides a method to visually emphasize a text
block with an image, within a full page layout.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"FeaturedContent"}),` component combines a text block and an image. The text
block (`,e.jsx(n.code,{children:"textContent"}),`) can be any JSX element, so accessibility for child input
elements should follow the accessibility requirements specified for each input
component (for example,
`,e.jsx(n.a,{href:"https://nypl.github.io/nypl-design-system/reservoir/v1/?path=/docs/components-form-elements-button--docs",rel:"nofollow",children:"Button"}),`).
All images must have an `,e.jsx(n.code,{children:"alt"})," attribute, even if it's empty. The ",e.jsx(n.code,{children:"alt"}),` prop
should be used to concisely describe the image. If the image is decorative, then
the `,e.jsx(n.code,{children:"alt"})," prop should be an empty string ",e.jsx(n.code,{children:'""'}),"."]}),`
`,e.jsx(n.p,{children:"Resources for text accessibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/typography/text",rel:"nofollow",children:"Chakra UI Text"})}),`
`]}),`
`,e.jsx(n.p,{children:"Resources for image accessibility:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/images/",rel:"nofollow",children:"W3C WAI Images Tutorial"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://webaim.org/techniques/images/",rel:"nofollow",children:"WebAIM Accessible Images"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://usability.yale.edu/web-accessibility/articles/images",rel:"nofollow",children:"Yale Usability & Web Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"component-width-variations",children:"Component Width Variations"}),`
`,e.jsxs(n.p,{children:["The width variations of the ",e.jsx(n.code,{children:"FeaturedContent"}),` component can be rendered through
the `,e.jsx(n.code,{children:"isFullWidth"})," prop. The default is ",e.jsx(n.code,{children:"isFullWidth = false"}),`, and the component
will fill only its parent. If `,e.jsx(n.code,{children:"isFullWidth = true"}),`, component will fill the
screen's width (max 1280px), breaking out of its parent container. This full
layout is best viewed on a full screen, not as shown below.`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"image-position-variations",children:"Image Position Variations"}),`
`,e.jsxs(n.p,{children:["The image position variations of the ",e.jsx(n.code,{children:"FeaturedContent"}),` component can be rendered
through the `,e.jsx(n.code,{children:"imageProps.position"})," prop. The default is ",e.jsx(n.code,{children:"end"}),`, and the image will
appear after the text block in a row (on mobile, it will appear below). The
other option is `,e.jsx(n.code,{children:"start"}),`, where the image will appear before the text block in
the row on desktop (and above it on mobile).`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"image-width-variations",children:"Image Width Variations"}),`
`,e.jsxs(n.p,{children:["The image width variations of the ",e.jsx(n.code,{children:"FeaturedContent"}),` component can be rendered
through the `,e.jsx(n.code,{children:"imageProps.width"})," prop. The options for width are ",e.jsx(n.code,{children:"oneQuarter"}),`,
`,e.jsx(n.code,{children:"oneThird"}),", ",e.jsx(n.code,{children:"oneHalf"}),", ",e.jsx(n.code,{children:"twoThirds"}),", and ",e.jsx(n.code,{children:"threeQuarters"}),`. The default width is
`,e.jsx(n.code,{children:"oneHalf"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"text-content",children:"Text Content"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"textContent"})," is a string or JSX element passed into ",e.jsx(n.code,{children:"FeaturedContent"}),`, so
accessibility standards and spacing should be considered independently of the
`,e.jsx(n.code,{children:"FeaturedContent"})," styling."]}),`
`,e.jsx(n.p,{children:`The above example with an overline, a heading, a short paragraph of body text,
and a CTA button is the recommended usage. While other configurations are
possible, keep in mind that the minimum height of the component is 320px and it
is best to avoid excessive white space.`}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(h,{changelogData:f})]})}function y(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{y as default};
