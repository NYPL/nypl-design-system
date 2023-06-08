import{j as r,a as n,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as m,b as o,C as d,A as g}from"./index-42243e0e.js";import{H as c,W as t,P as u,S as y,T as f,C as b,F as T,a as H}from"./Hero.stories-9d768286.js";import{L as a}from"./Link-0ed02cf7.js";import{u as l}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Heading-2ec2ea62.js";import"./Hero-2040dfe5.js";import"./Image-3405777f.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./SimpleGrid-e54e0b68.js";import"./Text-eabcdc0a.js";import"./Icon-6616a4b9.js";function h(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3"},l(),i.components);return n(s,{children:[r(p,{of:c}),`
`,r(e.h1,{id:"hero",children:"Hero"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.2.0"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"1.5.1"})})]})]})]}),`
`,r(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,r(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,r(a,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,r(a,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,r(a,{href:"#all-variations",target:"_self",children:"All Variations"}),`
`]}),`
`,n(e.li,{children:[`
`,r(a,{href:"#color-variations-for-secondary-hero",target:"_self",children:"Color Variations for Secondary Hero"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(m,{of:c}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Hero"}),` component is used to display a full width banner at the top of a page.
The `,r(e.code,{children:"Hero"})," will contain a required ",r(e.code,{children:"h1"}),` page title and may also include optional
descriptive text and images.`]}),`
`,n(e.p,{children:["There are currently five main hero types: ",r(e.code,{children:'"primary"'}),", ",r(e.code,{children:'"secondary"'}),`,
`,r(e.code,{children:'"tertiary"'}),", ",r(e.code,{children:'"campaign"'}),", and ",r(e.code,{children:'"fiftyFifty"'}),". Under the ",r(e.code,{children:'"secondary"'}),` hero type,
there are four additional subtypes: `,r(e.code,{children:'"secondaryBooksAndMore"'}),", ",r(e.code,{children:'"secondaryLocations"'}),`,
`,r(e.code,{children:'"secondaryResearch"'}),", and ",r(e.code,{children:'"secondaryWhatsOn"'}),"."]}),`
`,n(e.p,{children:['For the variations that use image "alt" and "src" attributes, the ',r(e.code,{children:"imageProps"}),`
prop should be used:`]}),`
`,r(o,{code:`
<Hero
  backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
  heroType="campaign"
  heading={<Heading level="one" id="campaign-hero" text="Hero Campaign" />}
  imageProps={{
    alt: "Image example",
    src: "https://placeimg.com/800/400/animals",
  }}
  subHeaderText="Campaign Hero Subheader Text"
/>
`,language:"jsx"}),`
`,n(e.p,{children:["Note: the ",r(e.code,{children:"imageProps"})," prop is not the same as the ",r(e.code,{children:"backgroundImageSrc"}),` prop used
for some variations. For a full list of what props to use for each variant, check
the `,r(a,{href:"#all-variations",target:"_self",children:"All Variations"})," section."]}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(d,{of:t}),`
`,r(g,{of:t}),`
`,r(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Hero"}),` component is commonly used as a banner below the page's header and
breadcrumbs and above the main content. This means that if the `,r(e.code,{children:"Hero"}),` displays
a heading element, it should be the first on the page and an `,r(e.code,{children:"h1"}),` element set
through `,r(e.code,{children:"Heading"}),"'s ",r(e.code,{children:'level="one"'}),"."]}),`
`,r(e.h2,{id:"all-variations",children:"All Variations"}),`
`,n(e.p,{children:["Each ",r(e.code,{children:"Hero"})," variation can be rendered through the ",r(e.code,{children:"heroType"})," prop."]}),`
`,r(e.h3,{id:"primary",children:"Primary"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"primary"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),", ",r(e.code,{children:"backgroundImageSrc"}),`,
`,r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"locationDetails"}),", and ",r(e.code,{children:"subHeaderText"}),` props. The
minimum props that should be used are `,r(e.code,{children:"backgroundImageSrc"})," and ",r(e.code,{children:"heading"}),"."]}),`
`,r(o,{code:`
backgroundImageSrc="https://placeimg.com/1600/800/arch"
heading={<Heading level="one" id="primary-hero" text="Hero Primary" />}
`,language:"jsx"}),`
`,r(d,{of:u}),`
`,r(e.h3,{id:"secondary",children:"Secondary"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"secondary"'})," hero type can be used with the ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"imageProps"}),`, and
`,r(e.code,{children:"subHeaderText"})," props."]}),`
`,r(o,{code:`
heading={
  <Heading level="one" id="secondary-hero" text="Hero Secondary" />
}
imageProps={imageProps}
subHeaderText={secondarySubHeaderText}
`,language:"jsx"}),`
`,r(d,{of:y}),`
`,r(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"tertiary"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),", ",r(e.code,{children:"foregroundColor"}),`,
`,r(e.code,{children:"heading"}),", and ",r(e.code,{children:"subHeaderText"})," props. The minimum prop to use is the ",r(e.code,{children:"heading"}),`
prop.`]}),`
`,r(o,{code:`
heading={
  <Heading
    level="one"
    id="tertiary-hero"
    text="Hero Tertiary with Sub-Header"
  />
}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(d,{of:f}),`
`,r(e.h3,{id:"campaign",children:"Campaign"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"campaign"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),`,
`,r(e.code,{children:"backgroundImageSrc"}),", ",r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"imageProps"}),`, and
`,r(e.code,{children:"subHeaderText"})," props. The minimum props to use are ",r(e.code,{children:"backgroundImageSrc"}),`,
`,r(e.code,{children:"heading"}),", and ",r(e.code,{children:"imageProps"}),"."]}),`
`,r(o,{code:`
backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale"
heading={
  <Heading level="one" id="campaign-hero" text="Hero Campaign" />
}
imageProps={imageProps}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(d,{of:b}),`
`,r(e.h3,{id:"fiftyfifty",children:"FiftyFifty"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"fiftyFifty"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),`,
`,r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"imageProps"}),", and ",r(e.code,{children:"subHeaderText"}),` props. The
minimum props to use are `,r(e.code,{children:"imageProps"})," and ",r(e.code,{children:"subHeaderText"}),"."]}),`
`,r(o,{code:`
imageProps={imageProps}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(d,{of:T}),`
`,r(e.h2,{id:"color-variations-for-secondary-hero",children:"Color Variations for Secondary Hero"}),`
`,n(e.p,{children:["The background color for the title bar in the ",r(e.code,{children:'"secondary"'})," ",r(e.code,{children:"Hero"}),` changes based
on the `,r(e.code,{children:"heroType"})," variants for the ",r(e.code,{children:'"secondary"'}),` main variant. There are four
subtypes: `,r(e.code,{children:'"secondaryBooksAndMore"'}),", ",r(e.code,{children:'"secondaryLocations"'}),", ",r(e.code,{children:'"secondaryResearch"'}),`,
and `,r(e.code,{children:'"secondaryWhatsOn"'}),"."]}),`
`,r(o,{code:`
// Example \`heroType\` "secondary" variant.
<Hero heroType="secondaryBooksAndMore" {...props} />
`,language:"jsx"}),`
`,r(d,{of:H})]})}function Y(i={}){const{wrapper:e}=Object.assign({},l(),i.components);return e?r(e,Object.assign({},i,{children:r(h,i)})):h(i)}export{Y as default};
//# sourceMappingURL=Hero-3be5213e.js.map
