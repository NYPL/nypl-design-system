import{j as r,a as n,F as s}from"./jsx-runtime-fdf4db99.js";import{M as p,D as g,b as o,C as a,A as m}from"./index-445595fc.js";import{C as u}from"./ComponentChangelogTable-310bbbfd.js";import{H as t,W as c,P as f,T as b,C as y,a as v,b as k,S as T,F as H,c as C}from"./Hero.stories-491eb300.js";import{L as d}from"./Link-24c1437a.js";import{u as l}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Table-64c6aa77.js";import"./index-6148c31a.js";import"./Button-948e9be8.js";import"./Icon-4eeffe51.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./ButtonGroup-c2c033a6.js";import"./useNYPLBreakpoints-2881f83d.js";import"./Hero-42312d27.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./SimpleGrid-bd04b221.js";const x=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:['Updated the "campaign" variant to improve the spacing around the component.',"Added the `isDarkBackgroundImage` prop."]},{date:"2023-11-09",version:"2.1.2",type:"Update",affects:["Styles"],notes:['Updated the layout for the "campaign" variant to have consistent padding on its left and right sides.']},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Documentation","Functionality"],notes:['Deprecated the "secondary" and "fiftyFifty" variants.','Fixed a bug where custom background colors were not rendering properly in dark mode for the "campaign" and "tertiary" variants.']},{date:"2023-10-18",version:"2.1.0",type:"Bug Fix",affects:["Functionality"],notes:["Fixed an issue with `backgroundColor` and `foregroundColor` props not prioritizing the passed design token values for the `Hero` component."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size, font color, and text link patterns."]}];function h(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",h4:"h4"},l(),i.components);return n(s,{children:[r(p,{of:t}),`
`,r(e.h1,{id:"hero",children:"Hero"}),`
`,n(e.table,{children:[r(e.thead,{children:n(e.tr,{children:[r(e.th,{children:"Component Version"}),r(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[r(e.td,{children:"Added"}),r(e.td,{children:r(e.code,{children:"0.2.0"})})]}),n(e.tr,{children:[r(e.td,{children:"Latest"}),r(e.td,{children:r(e.code,{children:"2.1.3"})})]})]})]}),`
`,r(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,r(d,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,r(d,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,r(d,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,r(d,{href:"#active-variants",target:"_self",children:"Active Variants"}),`
`]}),`
`,n(e.li,{children:[`
`,r(d,{href:"#deprecated-variants",target:"_self",children:"Deprecated Variants"}),`
`]}),`
`,n(e.li,{children:[`
`,r(d,{href:"#color-variations-for-secondary-hero",target:"_self",children:"Color Variations for Secondary Hero"}),`
`]}),`
`,n(e.li,{children:[`
`,r(d,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,r(e.h2,{id:"overview",children:"Overview"}),`
`,r(g,{of:t}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Hero"}),` component is used to display a full width banner at the top of a page.
The `,r(e.code,{children:"Hero"})," will contain a required ",r(e.code,{children:"h1"}),` page title and may also include optional
descriptive text and images.`]}),`
`,n(e.p,{children:["There are currently three main hero types: ",r(e.code,{children:'"primary"'}),", ",r(e.code,{children:'"tertiary"'}),`, and
`,r(e.code,{children:'"campaign"'}),"."]}),`
`,n(e.p,{children:["Two hero types have been deprecated: ",r(e.code,{children:'"secondary"'})," and ",r(e.code,{children:'"fiftyFifty"'}),`. The
deprecated variants will be removed from the DS in a future release.`]}),`
`,n(e.p,{children:["Under the ",r(e.code,{children:'"secondary"'}),` hero type, there are four additional subtypes:
`,r(e.code,{children:'"secondaryBooksAndMore"'}),", ",r(e.code,{children:'"secondaryLocations"'}),", ",r(e.code,{children:'"secondaryResearch"'}),`, and
`,r(e.code,{children:'"secondaryWhatsOn"'}),"."]}),`
`,n(e.p,{children:['For the variations that use image "alt" and "src" attributes, the ',r(e.code,{children:"imageProps"}),`
prop should be used:`]}),`
`,r(o,{code:`
<Hero
  backgroundImageSrc="https://placekitten.com/g/2400/800"
  heroType="campaign"
  heading={<Heading level="h1" id="campaign-hero" text="Hero Campaign" />}
  imageProps={{
    alt: "Image example",
    src: "https://placekitten.com/800/400",
  }}
  subHeaderText="Campaign Hero Subheader Text"
/>
`,language:"jsx"}),`
`,n(e.p,{children:["Note: the ",r(e.code,{children:"imageProps"})," prop is not the same as the ",r(e.code,{children:"backgroundImageSrc"}),` prop
used for some variations. For a full list of what props to use for each variant,
check the `,r(d,{href:"#active-variants",target:"_self",children:"Active Variants"}),`
section.`]}),`
`,r(e.h2,{id:"component-props",children:"Component Props"}),`
`,r(a,{of:c}),`
`,r(m,{of:c}),`
`,r(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"Hero"}),` component is commonly used as a banner below the page's header and
breadcrumbs and above the main content. This means that if the `,r(e.code,{children:"Hero"}),` displays
a heading element, it should be the first on the page and an `,r(e.code,{children:"h1"}),` element set
through `,r(e.code,{children:"Heading"}),"'s ",r(e.code,{children:'level="h1"'}),"."]}),`
`,r(e.h2,{id:"active-variants",children:"Active Variants"}),`
`,n(e.p,{children:["Each ",r(e.code,{children:"Hero"})," variation can be rendered through the ",r(e.code,{children:"heroType"})," prop."]}),`
`,r(e.h3,{id:"primary",children:"Primary"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"primary"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),", ",r(e.code,{children:"backgroundImageSrc"}),`,
`,r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"locationDetails"}),", and ",r(e.code,{children:"subHeaderText"}),` props. The
minimum props that should be used are `,r(e.code,{children:"backgroundImageSrc"})," and ",r(e.code,{children:"heading"}),"."]}),`
`,r(o,{code:`
backgroundImageSrc="https://placekitten.com/1600/800"
heading={<Heading level="h1" id="primary-hero" text="Hero Primary" />}
`,language:"jsx"}),`
`,r(a,{of:f}),`
`,r(e.h3,{id:"tertiary",children:"Tertiary"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"tertiary"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),", ",r(e.code,{children:"foregroundColor"}),`,
`,r(e.code,{children:"heading"}),", and ",r(e.code,{children:"subHeaderText"})," props. The minimum prop to use is the ",r(e.code,{children:"heading"}),`
prop.`]}),`
`,r(o,{code:`
heading={
  <Heading
    level="h1"
    id="tertiary-hero"
    text="Hero Tertiary with Sub-Header"
  />
}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(a,{of:b}),`
`,r(e.h3,{id:"campaign",children:"Campaign"}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"campaign"'})," hero type can be used with the ",r(e.code,{children:"backdropBackgroundColor"}),`,
`,r(e.code,{children:"backgroundColor"}),", ",r(e.code,{children:"backgroundImageSrc"}),", ",r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"heading"}),`,
`,r(e.code,{children:"imageProps"}),", and ",r(e.code,{children:"subHeaderText"}),` props. The minimum props to use are
`,r(e.code,{children:"backgroundImageSrc"}),", ",r(e.code,{children:"heading"}),", and ",r(e.code,{children:"imageProps"}),"."]}),`
`,r(e.p,{children:`This variant has the special use case of having a background and foreground. We
do understand that the naming can be confusing, but it helps to think of this
variant having two layers. The bottom is the backdrop and the top is the
foreground.`}),`
`,n(e.p,{children:["To modify the foreground, the ",r(e.code,{children:"backgroundColor"}),", ",r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"imageProps"}),`
props should be used.`]}),`
`,r(o,{code:`
backgroundImageSrc="https://placekitten.com/g/2400/800"
heading={
  <Heading level="h1" id="campaign-hero" text="Hero Campaign" />
}
imageProps={imageProps}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(a,{of:y}),`
`,r(e.h4,{id:"isdarkbackgroundimage",children:"isDarkBackgroundImage"}),`
`,n(e.p,{children:["The ",r(e.code,{children:"isDarkBackgroundImage"})," prop can be used in the ",r(e.code,{children:'"campaign"'}),` hero to toggle
the visual treatment of the background image. If true, the background image will
be converted to black & white and darkened to 60% black.`]}),`
`,r(o,{code:`
backgroundImageSrc="https://placekitten.com/g/2400/800"
heading={
  <Heading level="h1" id="campaign-hero" text="Hero Campaign" />
}
imageProps={imageProps}
isDarkBackgroundImage
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(a,{of:v}),`
`,r(e.h4,{id:"backdropbackgroundcolor",children:"backdropBackgroundColor"}),`
`,n(e.p,{children:[`The "backdrop" is what we call the background and that can be set through either
the `,r(e.code,{children:"backdropBackgroundColor"})," or ",r(e.code,{children:"backgroundImageSrc"}),` props. When both are set,
the `,r(e.code,{children:"backgroundImageSrc"})," will take precedence."]}),`
`,r(o,{code:`
backdropBackgroundColor="section.education.primary"
backgroundColor="ui.warning.primary"
foregroundColor="ui.typgraphy.heading"
heading={
  <Heading 
    color="ui.typgraphy.heading" 
    level="h1" 
    id="campaign-hero" 
    text="Hero Campaign" 
  />
}
imageProps={imageProps}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(a,{of:k}),`
`,r(e.h2,{id:"deprecated-variants",children:"Deprecated Variants"}),`
`,r(e.h3,{id:"secondary",children:"Secondary"}),`
`,n(e.p,{children:["This ",r(e.code,{children:'"secondary"'})," variant of the ",r(e.code,{children:"Hero"}),` component has been deprecated. This
variant will be removed from the DS in a future release.`]}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"secondary"'})," hero type can be used with the ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"imageProps"}),`, and
`,r(e.code,{children:"subHeaderText"})," props."]}),`
`,r(o,{code:`
heading={
  <Heading level="h1" id="secondary-hero" text="Hero Secondary" />
}
imageProps={imageProps}
subHeaderText={secondarySubHeaderText}
`,language:"jsx"}),`
`,r(a,{of:T}),`
`,r(e.h3,{id:"fiftyfifty",children:"FiftyFifty"}),`
`,n(e.p,{children:["This ",r(e.code,{children:'"fiftyFifty"'})," variant of the ",r(e.code,{children:"Hero"}),` component has been deprecated. This
variant will be removed from the DS in a future release.`]}),`
`,n(e.p,{children:["The ",r(e.code,{children:'"fiftyFifty"'})," hero type can be used with the ",r(e.code,{children:"backgroundColor"}),`,
`,r(e.code,{children:"foregroundColor"}),", ",r(e.code,{children:"heading"}),", ",r(e.code,{children:"imageProps"}),", and ",r(e.code,{children:"subHeaderText"}),` props. The
minimum props to use are `,r(e.code,{children:"imageProps"})," and ",r(e.code,{children:"subHeaderText"}),"."]}),`
`,r(o,{code:`
imageProps={imageProps}
subHeaderText={otherSubHeaderText}
`,language:"jsx"}),`
`,r(a,{of:H}),`
`,r(e.h2,{id:"color-variations-for-secondary-hero",children:"Color Variations for Secondary Hero"}),`
`,n(e.p,{children:["This ",r(e.code,{children:'"secondary"'})," variant of the ",r(e.code,{children:"Hero"}),` component has been deprecated. This
variant and the associated color variations will be removed from the DS in a
future release.`]}),`
`,n(e.p,{children:["The background color for the title bar in the ",r(e.code,{children:'"secondary"'})," ",r(e.code,{children:"Hero"}),` changes based
on the `,r(e.code,{children:"heroType"})," variants for the ",r(e.code,{children:'"secondary"'}),` main variant. There are four
subtypes: `,r(e.code,{children:'"secondaryBooksAndMore"'}),", ",r(e.code,{children:'"secondaryLocations"'}),", ",r(e.code,{children:'"secondaryResearch"'}),`,
and `,r(e.code,{children:'"secondaryWhatsOn"'}),"."]}),`
`,r(o,{code:`
// Example \`heroType\` "secondary" variant.
<Hero heroType="secondaryBooksAndMore" {...props} />
`,language:"jsx"}),`
`,r(a,{of:C}),`
`,r(e.h2,{id:"changelog",children:"Changelog"}),`
`,r(u,{changelogData:x})]})}function le(i={}){const{wrapper:e}=Object.assign({},l(),i.components);return e?r(e,Object.assign({},i,{children:r(h,i)})):h(i)}export{le as default};
//# sourceMappingURL=Hero-d57c5dd2.js.map
