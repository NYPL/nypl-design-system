import{j as e,a as n,F as h}from"./jsx-runtime-fdf4db99.js";import{M as p}from"./index-445595fc.js";import{H as d}from"./Heading-7eebc756.js";import{L as a}from"./Link-24c1437a.js";import{S as o}from"./SimpleGrid-bd04b221.js";import{T as m}from"./Text-d88b2f7a.js";import{g as i}from"./ColorCard-e61dd049.js";import{u as c}from"./index-09eae0a8.js";import{B as l}from"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./Icon-4eeffe51.js";import"./Table-64c6aa77.js";function t(s){const r=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",code:"code",h3:"h3"},c(),s.components);return n(h,{children:[e(p,{title:"Style Guide/Colors"}),`
`,e(r.h1,{id:"nypl-colors",children:"NYPL Colors"}),`
`,e(r.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(r.ul,{children:[`
`,n(r.li,{children:[`
`,e(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(r.li,{children:[`
`,e(a,{href:"#brand-colors",target:"_self",children:"Brand Colors"}),`
`,n(r.ul,{children:[`
`,n(r.li,{children:[`
`,e(a,{href:"#nypl-brand-colors",target:"_self",children:"NYPL Brand Colors"}),`
`]}),`
`,n(r.li,{children:[`
`,e(a,{href:"#nypl-section-colors",target:"_self",children:"NYPL Section Colors"}),`
`]}),`
`]}),`
`]}),`
`,n(r.li,{children:[`
`,e(a,{href:"#ui-colors",target:"_self",children:"UI Colors"}),`
`,n(r.ul,{children:[`
`,n(r.li,{children:[`
`,e(a,{href:"#semantic-colors",target:"_self",children:"Semantic Colors"}),`
`]}),`
`,n(r.li,{children:[`
`,e(a,{href:"#grayscale-colors",target:"_self",children:"Grayscale Colors"}),`
`]}),`
`]}),`
`]}),`
`,n(r.li,{children:[`
`,e(a,{href:"#dark-mode-ui-colors",target:"_self",children:"Dark Mode UI Colors"}),`
`]}),`
`,n(r.li,{children:[`
`,e(a,{href:"#figma-reference",target:"_self",children:"Figma Reference"}),`
`]}),`
`]}),`
`,e(r.h2,{id:"overview",children:"Overview"}),`
`,n(r.p,{children:[`The Reservoir Design System (DS) provides the NYPL branded and approved
color palette. The NYPL color palette is used to style the DS components and
is also available for consuming applications in the form of javascript and
CSS design tokens. Please refer to the `,e(r.a,{href:"../?path=/docs/development-guide-design-tokens--docs",children:"Design Tokens"}),`
page for information about consuming and using all style tokens.`]}),`
`,n(r.p,{children:[`Whenever using these colors, designer must ensure that the foreground and
background colors pass, at a minimum, the `,e(r.code,{children:"WCAG 2.1 AA"}),` accessibility guidelines for
color contrast. For reference, to meet the `,e(r.code,{children:"WCAG 2.1 AA"}),` standard, the contrast ratio
must be at least 4.5:1. To meet the `,e(r.code,{children:"WCAG 2.1 AAA"}),` standard, the contrast ratio must
be at least 7:1.`]}),`
`,e(r.p,{children:"Resources:"}),`
`,n(r.ul,{children:[`
`,e(r.li,{children:e(r.a,{href:"https://www.w3.org/TR/WCAG21/#contrast-minimum",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WCAG 2.1 Contrast Minimum"})}),`
`]}),`
`,e(r.p,{children:`NOTE: There are a handful of colors that are semi-transpararent. Colors that use
transparency are tough to talk about when it comes to color combinations and
color contrast. That being the case, we have used question marks for the
contrast values and WCAG status.`}),`
`,e(r.h2,{id:"brand-colors",children:"Brand Colors"}),`
`,e(r.p,{children:"These colors are connected to the NYPL brand and are not intended to be generic."}),`
`,e(r.h3,{id:"nypl-brand-colors",children:"NYPL Brand Colors"}),`
`,e(r.p,{children:"NYPL Brand Colors are the NYPL branded primary and secondary colors."}),`
`,e(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:e(o,{columns:1,gap:"s",children:i("brand")})}),`
`,e(r.h3,{id:"nypl-section-colors",children:"NYPL Section Colors"}),`
`,e(r.p,{children:`NYPL Section Colors are branding colors only in use at NYPL. These colors are
used to add visual context for a user's location on an NYPL website.`}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Blogs"}),e("p",{children:"Blogs is used for the Blogs section."}),e(o,{columns:1,gap:"s",children:i("blogs")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Books and More"}),e("p",{children:e(r.p,{children:`Books and More is used for the Catalog, Staff Picks, Recommendations, New
Arrivals, and E-Book Central.`})}),e(o,{columns:1,gap:"s",children:i("booksAndMore")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Connect"}),e("p",{children:"Connect is used for the Connect and Get Help section fronts."}),e(o,{columns:1,gap:"s",children:i("connect")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Education"}),e("p",{children:e(r.p,{children:`Education is used for the Education section front and all associated
sub-sections.`})}),e(o,{columns:1,gap:"s",children:i("education")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Locations"}),e("p",{children:e(r.p,{children:`Locations is used for Location Finder and all branch pages with the
exceptions of some research libraries.`})}),e(o,{columns:1,gap:"s",children:i("locations")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Research"}),e("p",{children:"Research is used for the Research Catalog and SCC."}),e(o,{columns:1,gap:"s",children:i("research")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"Research Libraries"}),e("p",{children:"Research libraries with specific brand colors to adhere to."}),e(o,{columns:1,gap:"s",children:i("researchLibraries")})]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(d,{children:"What's On"}),e("p",{children:"What's On is used for Events, Exhibitions & Audio Guides."}),e(o,{columns:1,gap:"s",children:i("whatsOn")})]}),`
`,e(r.h2,{id:"ui-colors",children:"UI Colors"}),`
`,e(r.p,{children:"UI color are not connected to the NYPL brand and are intended to be generic."}),`
`,e(r.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e(r.p,{children:`Semantic colors are named to match their function. They are generally used in
common UI and typography patterns, and to communicate component and/or
application state.`}),`
`,e(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:e(o,{columns:1,gap:"s",children:i("ui")})}),`
`,e(r.h3,{id:"grayscale-colors",children:"Grayscale Colors"}),`
`,n(r.p,{children:[`Grayscale colors are used as a base for the semantic colors. Outside of
`,e(r.code,{children:"ui.black"})," and ",e(r.code,{children:"ui.white"}),`, these colors should not be used directly in designs
and coding.`]}),`
`,n(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:[e(o,{columns:1,gap:"s",children:i("grayscaleRoot")}),e(d,{level:"h4",size:"heading6",marginTop:"l",children:e(r.p,{children:"Cool (standard options)"})}),e(o,{columns:1,gap:"s",children:i("grayscaleCool")}),e(d,{level:"h4",size:"heading6",marginTop:"l",children:e(r.p,{children:"Warm"})}),e(m,{children:"The warm grays are alternate options to the cool grays."}),e(o,{columns:1,gap:"s",marginTop:"s",children:i("grayscaleWarm")})]}),`
`,e(r.h2,{id:"dark-mode-ui-colors",children:"Dark Mode UI Colors"}),`
`,e(r.p,{children:`The following "dark mode" color fills are used for body copy and to communicate
component and/or application state in dark mode.`}),`
`,e(r.p,{children:"These colors are not connected to the NYPL brand, but are intended to be generic."}),`
`,e(l,{border:"1px",borderColor:"ui.border.default",borderRadius:"5px",mb:"m",p:"s",children:e(o,{columns:1,gap:"s",bg:"dark.ui.bg.page",p:"m",children:i("dark")})}),`
`,e(r.h2,{id:"figma-reference",children:"Figma Reference"}),`
`,e(r.p,{children:"For additional information, please refer to the Figma Main file."}),`
`,n(r.ul,{children:[`
`,e(r.li,{children:e(r.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=15454%3A47007",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL Brand Colors"})}),`
`,e(r.li,{children:e(r.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=47083%3A27674",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL UI Colors"})}),`
`,e(r.li,{children:e(r.a,{href:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=61991%3A45315",target:"_blank",rel:"nofollow noopener noreferrer",children:"NYPL Dark Mode UI Colors"})}),`
`]})]})}function O(s={}){const{wrapper:r}=Object.assign({},c(),s.components);return r?e(r,Object.assign({},s,{children:e(t,s)})):t(s)}export{O as default};
//# sourceMappingURL=Colors-11277bd4.js.map
