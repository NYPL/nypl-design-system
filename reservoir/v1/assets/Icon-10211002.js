import{j as c,a as n,F as h}from"./jsx-runtime-09ad29cb.js";import{M as s,D as p,C as o,A as m,b as l}from"./index-5d3bb37f.js";import{I as u,W as d,R as y,C as g,S as f,A as b,a as w}from"./Icon.stories-1334eec3.js";import{L as r}from"./Link-0ed02cf7.js";import{u as a}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./Icon-6616a4b9.js";import"./iconVariables-e95a44bb.js";function t(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},a(),i.components);return n(h,{children:[c(s,{of:u}),`
`,c(e.h1,{id:"icon",children:"Icon"}),`
`,n(e.table,{children:[c(e.thead,{children:n(e.tr,{children:[c(e.th,{children:"Component Version"}),c(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[c(e.td,{children:"Added"}),c(e.td,{children:c(e.code,{children:"0.0.4"})})]}),n(e.tr,{children:[c(e.td,{children:"Latest"}),c(e.td,{children:c(e.code,{children:"1.5.0"})})]})]})]}),`
`,c(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,c(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#rotations",target:"_self",children:"Rotations"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#colors",target:"_self",children:"Colors"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#sizes",target:"_self",children:"Sizes"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#all-icons",target:"_self",children:"All Icons"}),`
`]}),`
`,n(e.li,{children:[`
`,c(r,{href:"#custom-icons",target:"_self",children:"Custom Icons"}),`
`]}),`
`]}),`
`,c(e.h2,{id:"overview",children:"Overview"}),`
`,c(p,{of:d}),`
`,c(e.h2,{id:"component-props",children:"Component Props"}),`
`,c(o,{of:d}),`
`,c(m,{of:d}),`
`,c(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["For accessibility purposes, every Reservoir Design System (DS) ",c(e.code,{children:"Icon"}),` will
render the `,c(e.code,{children:"svg"})," element with its icon name in the ",c(e.code,{children:"title"}),` element. The default
text in the `,c(e.code,{children:"title"}),` element is the icon's code name. Pass in better descriptive
text in the `,c(e.code,{children:"title"})," prop when using the ",c(e.code,{children:"Icon"}),` component in your application.
This will give screenreaders a better descriptive title for the `,c(e.code,{children:"svg"})," graphic."]}),`
`,n(e.p,{children:[c(e.code,{children:"Icon"}),`s are decorative by default. This means that they are presentational and
screenreaders will not read them because the `,c(e.code,{children:"aria-hidden"}),` attribute is set to
`,c(e.code,{children:"true"}),"."]}),`
`,c(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,c(e.li,{children:c(e.a,{href:"https://design-system.w3.org/styles/svg-icons.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Design System SVG Icons"})}),`
`,c(e.li,{children:c(e.a,{href:"https://css-tricks.com/accessible-svg-icons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS-Tricks Accessible SVG Icons"})}),`
`,c(e.li,{children:c(e.a,{href:"https://chakra-ui.com/docs/components/media-and-icons/icon",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Icon"})}),`
`]}),`
`,c(e.h2,{id:"rotations",children:"Rotations"}),`
`,n(e.p,{children:["Passing an ",c(e.code,{children:"iconRotation"})," prop with a value from ",c(e.code,{children:"IconRotationTypes"}),` allows
the icon to be rotated when it is rendered. The values are:
`,c(e.code,{children:'"rotate0"'}),", ",c(e.code,{children:'"rotate90"'}),", ",c(e.code,{children:'"rotate180"'}),", and ",c(e.code,{children:'"rotate270"'}),"."]}),`
`,n(e.p,{children:["Note: All of the examples below have been rendered with the ",c(e.code,{children:"size"}),` prop set to
`,c(e.code,{children:"xxlarge"}),"."]}),`
`,c(l,{code:`
// Example
<Icon iconRotation="rotate180" name="arrow" size="xxlarge" />
`,language:"jsx"}),`
`,c(o,{of:y}),`
`,c(e.h2,{id:"colors",children:"Colors"}),`
`,n(e.p,{children:["Update an SVG icon by passing a ",c(e.code,{children:"color"})," prop with a value from the ",c(e.code,{children:"IconColors"}),`
type. The values are: `,c(e.code,{children:'"ui.black"'}),", ",c(e.code,{children:'"ui.white"'}),", ",c(e.code,{children:'"brand.primary"'}),", ",c(e.code,{children:'"brand.secondary"'}),`,
`,c(e.code,{children:'"ui.error.primary"'}),", ",c(e.code,{children:'"ui.error.secondary"'}),", ",c(e.code,{children:'"ui.status.primary"'}),", ",c(e.code,{children:'"ui.status.secondary"'}),`,
`,c(e.code,{children:'"ui.success.primary"'}),", ",c(e.code,{children:'"ui.success.secondary"'}),", ",c(e.code,{children:'"ui.warning.primary"'}),", ",c(e.code,{children:'"ui.warning.secondary"'}),`,
`,c(e.code,{children:'"section.blogs.primary"'}),", ",c(e.code,{children:'"section.blogs.secondary"'}),", ",c(e.code,{children:'"section.books-and-more.primary"'}),`,
`,c(e.code,{children:'"section.books-and-more.secondary"'}),", ",c(e.code,{children:'"section.education.primary"'}),", ",c(e.code,{children:'"section.education.secondary"'}),`,
`,c(e.code,{children:'"section.locations.primary"'}),", ",c(e.code,{children:'"section.locations.secondary"'}),", ",c(e.code,{children:'"section.research.primary"'}),`,
`,c(e.code,{children:'"section.research.secondary"'}),", ",c(e.code,{children:'"section.research-library.lpa"'}),", ",c(e.code,{children:'"section.research-library.schomburg"'}),`,
`,c(e.code,{children:'"section.research-library.schwartzman"'}),", ",c(e.code,{children:'"section.whats-on.primary"'}),", ",c(e.code,{children:'"section.whats-on.secondary"'}),`,
`,c(e.code,{children:'"dark.ui.error.primary"'}),", ",c(e.code,{children:'"dark.ui.error.secondary"'}),", ",c(e.code,{children:'"dark.ui.status.primary"'}),`,
`,c(e.code,{children:'"dark.ui.status.secondary"'}),", ",c(e.code,{children:'"dark.ui.success.primary"'}),", ",c(e.code,{children:'"dark.ui.success.secondary"'}),`,
`,c(e.code,{children:'"dark.ui.warning.primary"'}),", ",c(e.code,{children:'"dark.ui.warning.secondary",'}),"."]}),`
`,n(e.p,{children:["Note: All of the examples below have been rendered with the ",c(e.code,{children:"size"}),` prop set to
`,c(e.code,{children:"xxlarge"}),"."]}),`
`,c(l,{code:`
// Example
<Icon color="brand.primary" name="errorFilled" size="xxlarge" />
`,language:"jsx"}),`
`,c(o,{of:g}),`
`,c(e.h2,{id:"sizes",children:"Sizes"}),`
`,n(e.p,{children:["Update an SVG icon by passing a ",c(e.code,{children:"size"})," prop with a value from ",c(e.code,{children:"IconSizes"}),`. The
values are: `,c(e.code,{children:'"default"'}),", ",c(e.code,{children:'"small"'}),", ",c(e.code,{children:'"medium"'}),", ",c(e.code,{children:'"large"'}),", ",c(e.code,{children:'"xlarge"'}),`,
`,c(e.code,{children:'"xxlarge"'}),", ",c(e.code,{children:'"xxxlarge"'}),"."]}),`
`,n(e.p,{children:["Note: ",c(e.code,{children:'"default"'})," sets the width to ",c(e.code,{children:"100%"}),` and the rendered icon will expand to
fill the full width of the parent element.`]}),`
`,c(l,{code:`
// Example
<Icon name="actionCheckCircle" size="xxlarge" />
`,language:"jsx"}),`
`,c(o,{of:f}),`
`,c(e.h2,{id:"all-icons",children:"All Icons"}),`
`,n(e.p,{children:[`The following icons are for generic purposes. All the available icon names can
be found in the `,c(e.code,{children:"IconNames"})," type. They are: ",c(e.code,{children:'"accessibilityFull"'}),`,
`,c(e.code,{children:'"accessibilityPartial"'}),", ",c(e.code,{children:'"actionCheckCircle"'}),", ",c(e.code,{children:'"actionExit"'}),", ",c(e.code,{children:'"actionHelpDefault"'}),`,
`,c(e.code,{children:'"actionHelpOutline"'}),", ",c(e.code,{children:'"alertNotificationImportant"'}),", ",c(e.code,{children:'"actionLaunch"'}),", ",c(e.code,{children:'"actionPower"'}),`,
`,c(e.code,{children:'"actionSettings"'}),", ",c(e.code,{children:'"arrow"'}),", ",c(e.code,{children:'"building"'}),", ",c(e.code,{children:'"check"'}),", ",c(e.code,{children:'"clock"'}),", ",c(e.code,{children:'"close"'}),`,
`,c(e.code,{children:'"decorativeEnvelope"'}),", ",c(e.code,{children:'"decorativeLibraryCard"'}),", ",c(e.code,{children:'"decorativeShoppingBag"'}),", ",c(e.code,{children:'"download"'}),`,
`,c(e.code,{children:'"errorFilled"'}),", ",c(e.code,{children:'"errorOutline"'}),", ",c(e.code,{children:'"fileTypeAudio"'}),", ",c(e.code,{children:'"fileTypeDoc"'}),`,
`,c(e.code,{children:'"fileTypeGenericDoc"'}),", ",c(e.code,{children:'"fileTypeImage"'}),", ",c(e.code,{children:'"fileTypePdf"'}),", ",c(e.code,{children:'"fileTypeSpreadsheet"'}),`,
`,c(e.code,{children:'"fileTypeVideo"'}),", ",c(e.code,{children:'"headset"'}),", ",c(e.code,{children:'"legacyAccountFilled"'}),", ",c(e.code,{children:'"legacyAccountUnfilled"'}),`,
`,c(e.code,{children:'"legacySocialFacebook"'}),", ",c(e.code,{children:'"legacySocialInstagram"'}),", ",c(e.code,{children:'"legacySocialTwitter"'}),`,
`,c(e.code,{children:'"legacySocialYoutube"'}),", ",c(e.code,{children:'"locator"'}),", ",c(e.code,{children:'"minus"'}),",",c(e.code,{children:'"plus"'}),", ",c(e.code,{children:'"search"'}),", ",c(e.code,{children:'"socialFacebook"'}),`,
`,c(e.code,{children:'"socialInstagram"'}),", ",c(e.code,{children:'"socialTumblr"'}),", ",c(e.code,{children:'"socialTwitter"'}),", ",c(e.code,{children:'"socialYoutube"'}),", ",c(e.code,{children:'"speakerNotes"'}),`,
`,c(e.code,{children:'"utilityAccountFilled"'}),", ",c(e.code,{children:'"utilityAccountUnfilled"'}),", ",c(e.code,{children:'"utilityHamburger"'}),", ",c(e.code,{children:'"utilitySearch"'}),"."]}),`
`,n(e.p,{children:["Note: All of the examples below have been rendered with the ",c(e.code,{children:"size"}),` prop set to
`,c(e.code,{children:"xxlarge"}),"."]}),`
`,c(o,{of:b}),`
`,c(e.h2,{id:"custom-icons",children:"Custom Icons"}),`
`,n(e.p,{children:[`If you'd like to pass a custom svg to your application, you can pass it a
child to the `,c(e.code,{children:"Icon"})," component."]}),`
`,c(l,{code:`
<Icon {...props}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750" fill="#6BE9D8">
    <g>
      <path d="M709.9 399.9c-4.5-145.7-115.8-169.6-151.1-170.3-4.2-.1-6.7-4.9-4.2-8.4L632 110.6c3.4-4.8 2.4-11.7-2.3-15.3-15.9-12-36.3-21.4-60.3-28.8-4.3-1.3-8.6 2-8.5 6.5 1.2 50.5-27.6 114.3-36.5 132.9-1 2-3.9 1.9-4.8-.1C485.1 124 397.7 95.1 327.9 104.4c-71.3 9.5-101.6 26.5-163.5 96.6-61.9 70.1-80.2 260.7-82.1 309.4C80.4 559 40 617.1 40 617.1c154 81.4 340.9 68.2 402.2 61.9 44.4-4.6 68.5-21.8 78.5-30.9 2.5-2.3 1.4-6.6-2-7.3-73.8-15.7-80.7-37.2-94.8-63.5-14.5-27.1 8.2-135.7 104.2-108.6 79.6 22.5 51.5 114.9 39.6 145.8-1.4 3.7 2.4 7.3 6 5.6 34-16.5 140.5-79.5 136.2-220.2zM234.7 181.3c17.7-17 69-56.7 167.1-38 99.8 18.9 98.5 109.5 80.4 141.7-2.3 4.1-7 4.5-8.8.1-11.1-27.7-45.5-97.4-112-108-61.8-9.8-105.6 1.7-124.2 8.3-2.5.8-4.4-2.3-2.5-4.1zm-60.2 72l16.9-27.4c5.1-8.3 13.2-14.3 22.6-16.6 16.3-4.1 33-6.9 49.5-8.9 40.3-4.8 79.4-2.1 116.7 15.1 17.4 8 33.6 18.2 46.1 32.9 11.4 13.4 19 29.6 23.7 46.5 1.8 6.3 3.2 12.8 4.3 19.3.6 3.2-.1 6.6-1.7 9.4l-15.8 27.1c-1.7 3-6.1 2.4-7.1-.9-6.7-22-17.9-43.9-32.8-61-12.6-14.4-29.1-23.5-46.1-31.6-12.2-5.8-24.9-10.5-38-13.6-35.3-8.4-71.9-4.4-106.3 5.9-9.2 2.8-18.3 5.9-27.2 9.5-2.3.9-4.9-.7-5.2-3.2-.2-1 0-1.8.4-2.5zm-21.9 64.2l11.7-40.8c1.2-4.3 5-7.5 9.5-7.9l5.2-.5s87.8-25.9 160.4 9.8c56.9 28 68.3 78.8 70.5 99.5.6 5.5-1.4 11-5.3 14.8L389 407.5c-3.8 3.7-10.2 2.2-12-2.8-6-17.2-13.8-34.1-23.5-49.3-5.8-9.1-12.7-18.3-21.6-24.6-16.2-11.5-36.5-19.2-55.7-23.9-14.4-3.6-29.3-4.8-44.1-3.8-12.9.8-25.6 3.2-38 6.7-7.2 2-14.3 4.4-21.3 7.1-3.8 1.5-7.6 3-11.3 4.7-.6.2-1.9.7-3.4 1.3-3.2 1.1-6.5-2-5.5-5.4zM410 465.8c4.4 2 5.8 7.5 3 11.4l-14.8 20.7c-3.5 4.9-9.9 6.6-15.4 4.3l-25.5-10.9c-4.5-1.9-5.5-7.8-1.9-11.1l17.3-15.7c5.8-5.7 14.6-9.1 22-5.8l15.3 7.1zm-270.3-96.3l4.5-23.6c1.2-6.5 5.7-11.9 11.8-14.3 15.7-6.2 50.5-14.3 109.2-.1 62.6 15.1 83.4 66.2 90 91.6 2.2 8.5-.7 17.5-7.5 23.1l-13.4 11.1c-4.2 3.4-10.5 1.5-12-3.7-5.3-18.5-21.2-54.5-66.1-73.7-45.5-19.5-88.3-9.3-107.8-2.6-4.8 1.5-9.7-2.8-8.7-7.8zm-4.4 29.7c.1-5.4 4.2-9.9 9.6-10.6 30.7-3.8 127.8-7.6 155.8 89.7 1.6 5.4-.5 11.3-5.2 14.4l-15.1 10.1c-5 3.4-11.9 1.2-14-4.5-9.5-26-40.2-85.6-119.7-68.3-6.2 1.3-12-3.4-11.9-9.7l.5-21.1zm-9.1 72.9l3.3-19.1c1.4-8.3 9-14.1 17.4-13.1 21.2 2.4 60.2 11.5 85.5 44.9 5.8 7.7 9.2 16.8 10 26.4l.3 3.4c.6 7.1-2.7 14-8.7 18l-12.1 8.2c-4.4 3-10.5 1.2-12.6-3.7l-8.2-24.4c-3.5-10.4-11-19.1-20.8-24.1l-11.1-5.6c-6.7-3.4-14.2-5-21.7-4.5l-14.8.9c-4 .2-7.1-3.4-6.5-7.3zm-15.5 55.7l9.4-30.7c1.8-5.9 8-9.2 13.9-7.4 18.3 5.6 53.5 21.9 54.3 65.2 0 2.7-1.3 5.1-3.6 6.4-8.5 4.9-26.8 12.9-27.8 12-1.2-1.1.8-42.6-39.7-37.7-1.2.1-2.5-.1-3.6-.7-2.5-1.3-3.8-4.3-2.9-7.1zm63.8 100.5c-1.1 6.4-7.4 10.5-13.7 8.9l-85.5-21.9c-3.9-1-5.7-5.5-3.6-8.9l31.4-51.7c1.8-3 5.5-4.5 8.9-3.4 8.3 2.6 22.4 9 24.4 23.2.6 4.3-.9 8.7-4 11.8-1.4 1.4-3 2.5-4.8 3.2l-26.8 10.4c-2.1.8-2.6 3.5-1 5 .6.5 1.3.8 2.1.8l19.5-.2c3.7 0 7.4-.4 11.1-1 12.8-2.1 47-5 42 23.8zm72.1 12.7c-2.3 2.8-5 5.9-8.8 6.3-1.5.2-2.9 0-4.4-.2-1.5-.2-2.9-.2-4.4-.3l-10.5-.9c-3.8-.3-7.5-.7-11.3-1.2-2.9-.3-5.8-.7-8.6-1.2-4-.7-6.6-4.7-5.4-8.6 2.5-8.6 4.2-23.7-8.4-37.6-2-2.2-1.4-5.8 1.2-7.3l24.8-14.1c3.6-2.1 8-2.1 11.6-.1 8.2 4.5 22.3 14.1 29 28.8 5.4 12.1 3.4 26.2-4.8 36.4zm67 3.1c-4.2 4.1-9.8 6.5-15.7 6.8l-24.2 1.1c-4.2.2-7.1-4.2-5.3-8 8.1-17 20.6-55.5-19.4-76.9-3-1.6-3.3-5.9-.4-7.8l15.3-10.2c4.7-3.2 10.8-3.5 15.8-.7 22.8 12.3 80.6 50.2 33.9 95.7zm118.2-5.2c3.5 2.7 1.6 8.2-2.8 8.3l-77.5.8c-4.8.1-8.1-5-6-9.3 30.8-64.1-17.7-97.3-37.5-107.6-3.5-1.8-4-6.7-.9-9.1l9.6-7.7c7.2-5.7 16.7-7.7 25.6-5.4 14.1 3.7 26.1 11.8 33.7 18 5.4 4.4 8.6 10.9 8.8 17.9.9 51.1 29.9 80.9 47 94.1zm76.6-205c-12.4 0-36.1 1.2-52.5 10.2-4.7 2.6-10.2 3.1-15.4 1.7l-26.8-7.4c-4-1.1-5.6-5.9-3-9.2l14.9-18.8c5.2-7.1 13-11.6 21.6-10.2 17.4 2.9 46.3 10.1 63.6 27.4 2.6 2.3 1 6.3-2.4 6.3zm115 112c-1.7 2.2-5 2.2-6.8 0l-.1-.1c-1.8-2.3-7.3-138.3-146.4-168.7-5.4-1.2-7.7-7.5-4.3-11.9l19.6-25.6c4.6-6 12.2-8.9 19.7-7.5 28.1 5.5 95.7 25.7 120.5 96.6 29.5 84.5 13.9 96.8-2.2 117.2zm46.4-88.4c-.8 4.1-6.6 4.2-7.5.1-9.8-43.6-44.3-150.3-147.6-150.8-4.4 0-7.2-4.8-5-8.6l17.6-31.4c4.4-7.9 19.3-9.1 28.1-7 41.1 9.9 143 47.6 114.4 197.7z" />
    </g>
  </svg>
</Icon>
`,language:"jsx"}),`
`,c(o,{of:w})]})}function X(i={}){const{wrapper:e}=Object.assign({},a(),i.components);return e?c(e,Object.assign({},i,{children:c(t,i)})):t(i)}export{X as default};
//# sourceMappingURL=Icon-10211002.js.map
