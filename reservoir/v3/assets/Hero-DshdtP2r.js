import{u as h,j as e,M as l,L as r,bv as p,S as a,C as t,bw as g,bB as o}from"./iframe-CFLVJZOZ.js";import{C as u}from"./ComponentChangelogTable-DvY0SxTs.js";import{H as s,W as d,P as x,T as m,C as j,a as f,b,c as y,d as k,S as T,F as w,e as v}from"./Hero.stories-Cj4GGT9D.js";const H=[{date:"2025-02-13",version:"3.5.4",type:"Update",affects:["Styles"],notes:["Updates the `primary` variant to have appropriate padding for desktop and mobile, and `max-width` of 860px","Updates the `campaign` variant to have consistent padding."]},{date:"2024-10-24",version:"3.4.1",type:"Update",affects:["Functionality"],notes:["Updates `imageProps` to accept custom image component."]},{date:"2024-05-09",version:"3.1.2",type:"Update",affects:["Functionality","Accessibility"],notes:["Adds `id` prop."]},{date:"2024-04-25",version:"3.1.1",type:"Update",affects:["Functionality","Styles"],notes:["Added the `isDarkText` prop.","Added conditional logic to handle how the `foregroundColor` and `isDarkText` props are used.","Added the `fallbackSrc` and `onError` properties to the `imageProps` prop for the internal `Image` component.","Adds workaround to fix Chakra bug that causes certain image URLs to not render through the `background-image` CSS property."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Styles"],notes:['Updated the "campaign" variant to improve the spacing around the component.',"Added the `isDarkBackgroundImage` prop."]},{date:"2023-11-09",version:"2.1.2",type:"Update",affects:["Styles"],notes:['Updated the layout for the "campaign" variant to have consistent padding on its left and right sides.']},{date:"2023-10-26",version:"2.1.1",type:"Update",affects:["Documentation","Functionality"],notes:['Deprecated the "secondary" and "fiftyFifty" variants.','Fixed a bug where custom background colors were not rendering properly in dark mode for the "campaign" and "tertiary" variants.']},{date:"2023-10-18",version:"2.1.0",type:"Bug Fix",affects:["Functionality"],notes:["Fixed an issue with `backgroundColor` and `foregroundColor` props not prioritizing the passed design token values for the `Hero` component."]},{date:"2023-9-28",version:"2.0.0",type:"Update",affects:["Styles"],notes:["Applied Typo2023 styles, including font size, font color, and text link patterns."]}];function c(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(n.h1,{id:"hero",children:"Hero"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.2.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.4.1"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#active-variants",target:"_self",children:"Active Variants"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#text-colors",target:"_self",children:"Text Colors"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#custom-image-component",target:"_self",children:"Custom Image Component"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#fallback-campaign-image",target:"_self",children:"Fallback Campaign Image"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#deprecated-variants",target:"_self",children:"Deprecated Variants"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#color-variations-for-secondary-hero",target:"_self",children:"Color Variations for Secondary Hero"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(p,{of:s}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Hero"}),` component is used to display a full width banner at the top of a page.
The `,e.jsx(n.code,{children:"Hero"})," will contain a required ",e.jsx(n.code,{children:"h1"}),` page title and may also include optional
descriptive text and images.`]}),`
`,e.jsxs(n.p,{children:["There are currently three main hero types: ",e.jsx(n.code,{children:'"primary"'}),", ",e.jsx(n.code,{children:'"tertiary"'}),`, and
`,e.jsx(n.code,{children:'"campaign"'}),"."]}),`
`,e.jsxs(n.p,{children:["Two hero types have been deprecated: ",e.jsx(n.code,{children:'"secondary"'})," and ",e.jsx(n.code,{children:'"fiftyFifty"'}),`. The
deprecated variants will be removed from the DS in a future release.`]}),`
`,e.jsxs(n.p,{children:["Under the ",e.jsx(n.code,{children:'"secondary"'}),` hero type, there are four additional subtypes:
`,e.jsx(n.code,{children:'"secondaryBooksAndMore"'}),", ",e.jsx(n.code,{children:'"secondaryLocations"'}),", ",e.jsx(n.code,{children:'"secondaryResearch"'}),`, and
`,e.jsx(n.code,{children:'"secondaryWhatsOn"'}),"."]}),`
`,e.jsxs(n.p,{children:["For the variations that use image ",e.jsx(n.code,{children:"alt"}),", ",e.jsx(n.code,{children:"fallbackSrc"}),", ",e.jsx(n.code,{children:"onError"}),", and ",e.jsx(n.code,{children:"src"}),`
properties, the `,e.jsx(n.code,{children:"imageProps"})," prop should be used:"]}),`
`,e.jsx(a,{code:`
<Hero
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_243025&t=w"
heroType="campaign"
heading={<Heading level="h1" id="campaign-hero" text="Hero Campaign" />}
imageProps={{
  alt: "Image example",
  fallbackSrc: "https://images.nypl.org/index.php?id=swope_244712&t=w",
  onError: (_event) => console.log("Image failed to load") },
  src: "https://images.nypl.org/index.php?id=swope_243048&t=w",
}}
subHeaderText="Campaign Hero Subheader Text"
/>
`,language:"jsx"}),`
`,e.jsxs(n.p,{children:["Note: the ",e.jsx(n.code,{children:"imageProps"})," prop is not the same as the ",e.jsx(n.code,{children:"backgroundImageSrc"}),` prop
used for some variations. For a full list of what props to use for each variant,
check the `,e.jsx(r,{href:"#active-variants",target:"_self",children:"Active Variants"}),`
section.`]}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(g,{of:d}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Hero"}),` component is commonly used as a banner below the page's header and
breadcrumbs and above the main content. This means that if the `,e.jsx(n.code,{children:"Hero"}),` displays
a heading element, it should be the first on the page and an `,e.jsx(n.code,{children:"h1"}),` element set
through `,e.jsx(n.code,{children:"Heading"}),"'s ",e.jsx(n.code,{children:'level="h1"'}),"."]}),`
`,e.jsx(n.h2,{id:"active-variants",children:"Active Variants"}),`
`,e.jsxs(n.p,{children:["Each ",e.jsx(n.code,{children:"Hero"})," variation can be rendered through the ",e.jsx(n.code,{children:"heroType"})," prop."]}),`
`,e.jsx(n.h3,{id:"primary",children:"Primary"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"primary"'})," hero type can be used with the ",e.jsx(n.code,{children:"backgroundColor"}),", ",e.jsx(n.code,{children:"backgroundImageSrc"}),`,
`,e.jsx(n.code,{children:"foregroundColor"}),", ",e.jsx(n.code,{children:"heading"}),", ",e.jsx(n.code,{children:"locationDetails"}),", and ",e.jsx(n.code,{children:"subHeaderText"}),` props. The
minimum props that should be used are `,e.jsx(n.code,{children:"backgroundImageSrc"})," and ",e.jsx(n.code,{children:"heading"}),"."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(a,{code:`
<Hero
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
heading={
  <Heading
    id="primary-hero"
    level="h1"
    noSpace
    overline="Hero Example"
    subtitle="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam."
    text="Hero Primary"
  />
}
heroType="primary"
/>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"tertiary",children:"Tertiary"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"tertiary"'})," hero type can be used with the ",e.jsx(n.code,{children:"backgroundColor"}),", ",e.jsx(n.code,{children:"foregroundColor"}),`,
`,e.jsx(n.code,{children:"heading"}),", and ",e.jsx(n.code,{children:"subHeaderText"})," props. The minimum prop to use is the ",e.jsx(n.code,{children:"heading"}),`
prop.`]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(a,{code:`
<Hero
heading={
  <Heading
    level="h1"
    id="tertiary-hero-subtitle-subheading"
    size="heading2"
    subtitle="This is the subtitle"
    text="Hero Tertiary with Subtitle & Sub-Heading"
  />
}
heroType="tertiary"
subHeaderText={
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
heading={
  <Heading
    level="h1"
    id="tertiary-hero-subheading"
    size="heading2"
    text="Hero Tertiary with Sub-Heading"
  />
}
heroType="tertiary"
subHeaderText={
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
heading={
  <Heading
    level="h1"
    id="tertiary-hero"
    size="heading2"
    text="Hero Tertiary without Additional Elements"
  />
}
heroType="tertiary"
/>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"campaign",children:"Campaign"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"campaign"'})," hero type can be used with the ",e.jsx(n.code,{children:"backdropBackgroundColor"}),`,
`,e.jsx(n.code,{children:"backgroundColor"}),", ",e.jsx(n.code,{children:"backgroundImageSrc"}),", ",e.jsx(n.code,{children:"foregroundColor"}),", ",e.jsx(n.code,{children:"heading"}),`,
`,e.jsx(n.code,{children:"imageProps"}),", and ",e.jsx(n.code,{children:"subHeaderText"}),` props. The minimum props to use are
`,e.jsx(n.code,{children:"backgroundImageSrc"}),", ",e.jsx(n.code,{children:"heading"}),", and ",e.jsx(n.code,{children:"imageProps"}),"."]}),`
`,e.jsx(n.p,{children:`This variant has the special use case of having a background and foreground. We
do understand that the naming can be confusing, but it helps to think of this
variant having two layers. The bottom is the backdrop and the top is the
foreground.`}),`
`,e.jsxs(n.p,{children:["To modify the foreground, the ",e.jsx(n.code,{children:"backgroundColor"}),", ",e.jsx(n.code,{children:"foregroundColor"}),", ",e.jsx(n.code,{children:"imageProps"}),`
props should be used.`]}),`
`,e.jsx(o,{of:j}),`
`,e.jsx(a,{code:`
<Hero
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-default-heading"
    text="Hero Campaign"
  />
}
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
subHeaderText={
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-default-heading"
    text="Hero Campaign"
  />
}
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
subHeaderText={
  <>
    <Heading
      level="h2"
      size="heading3"
      subtitle="Lorem Parturient Bibendum Aenean Cras"
    >
      Subheading
    </Heading>
    <Heading level="h3" noSpace size="heading6">
      Subheading
    </Heading>
    <Text>
      Donec ullamcorper nulla non metus auctor fringilla. Cras mattis elit{" "}
      <Link href="https://www.nypl.org/locations/snfl/childrens">
        The New York Public Library
      </Link>{" "}
      consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra
      augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Aenean lacinia{" "}
      <Link href="https://google.com" type="external">
        Google
      </Link>{" "}
      bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod
      semper. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
      eu leo.
    </Text>
    <ButtonGroup>
      <Button id="other-button-example-1">Button</Button>
      <Button id="other-button-example-2" buttonType="secondary">
        Button
      </Button>
    </ButtonGroup>
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(n.h4,{id:"isdarkbackgroundimage",children:"isDarkBackgroundImage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"isDarkBackgroundImage"})," prop can be used in the ",e.jsx(n.code,{children:'"campaign"'}),` hero to toggle
the visual treatment of the background image. If true, the background image will
be converted to black & white and darkened to 60% black.`]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(a,{code:`
<Hero
backgroundImageSrc="https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-default-heading"
    text="Hero Campaign"
  />
}
imageProps={
  alt: "Image example",
  src: "https://iiif.nypl.org/iiif/2/5164274/full/!900,900/0/default.jpg",
}
isDarkBackgroundImage
subHeaderText={
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(n.h4,{id:"backdropbackgroundcolor",children:"backdropBackgroundColor"}),`
`,e.jsxs(n.p,{children:[`The "backdrop" is what we call the background and that can be set through either
the `,e.jsx(n.code,{children:"backdropBackgroundColor"})," or ",e.jsx(n.code,{children:"backgroundImageSrc"}),` props. When both are set,
the `,e.jsx(n.code,{children:"backgroundImageSrc"})," will take precedence."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(a,{code:`
<Hero
backdropBackgroundColor="section.research.primary"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-long-text-heading"
    text="Hero Campaign"
  />
}
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
isDarkBackgroundImage
subHeaderText={
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
backdropBackgroundColor="section.education.primary"
backgroundColor="ui.warning.primary"
foregroundColor="ui.typography.heading"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-long-text-heading"
    text="Hero Campaign"
  />
}
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
isDarkBackgroundImage
subHeaderText={
  <>
    With 92 locations across the Bronx, Manhattan, and Staten Island,{" "}
    <Link href="https://www.nypl.org/locations/snfl/childrens">
      The New York Public Library
    </Link>{" "}
    is an essential part of neighborhoods across the city. Visit us today.
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"Hero"}),` component renders a dark background color with light
text. This color treatment can be overridden using a combination of the
`,e.jsx(n.code,{children:"backgroundColor"}),", ",e.jsx(n.code,{children:"foregroundColor"})," and ",e.jsx(n.code,{children:"isDarkText"})," props."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOTE:"})," The ",e.jsx(n.code,{children:"foregroundColor"})," prop will override the ",e.jsx(n.code,{children:"isDarkText"}),` prop, so they
should not be used at the same time.`]}),`
`,e.jsx(o,{of:y}),`
`," ",`
`,e.jsx(a,{code:`
<Hero
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-default-heading"
    text="Hero Campaign"
  />
}
imageProps={imageProps}
isDarkBackgroundImage
subHeaderText={otherSubHeaderText}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
backgroundColor="ui.status.primary"
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
foregroundColor="ui.error.secondary"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-default-heading"
    text="Hero Campaign"
  />
}
imageProps={imageProps}
isDarkBackgroundImage
subHeaderText={otherSubHeaderText}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
backgroundColor="ui.status.primary"
backgroundImageSrc="https://images.nypl.org/index.php?id=swope_244712&t=w"
heroType="campaign"
heading={
  <Heading
    level="h1"
    id="campaign-hero-default-heading"
    text="Hero Campaign"
  />
}
imageProps={imageProps}
isDarkBackgroundImage
isDarkText
subHeaderText={otherSubHeaderText}
/>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"fallback-campaign-image",children:"Fallback Campaign Image"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"imageProps"})," prop can be used to set a fallback for the ",e.jsx(n.strong,{children:"main"}),` image in
the `,e.jsx(n.code,{children:'"campaign"'})," variant. The internal ",e.jsx(n.code,{children:"Image"})," component will use the ",e.jsx(n.code,{children:"onerror"}),`
event to load the `,e.jsx(n.code,{children:"fallbackSrc"})," image."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Hero"})," component does not use the ",e.jsx(n.code,{children:"Image"}),` component, however, for the
background image. The background image is rendered through the CSS
`,e.jsx(n.code,{children:"background-image"}),` property. This means that more work is needed to set a
fallback for the background image.`]}),`
`,e.jsx(n.p,{children:`The following example demonstrates how to set a fallback image for both the main
image and the background image. Note: this example assumes that both the main
and background images should be the same.`}),`
`,e.jsx(a,{code:`
const CampaignFallBackExample = () => {
const [imageSrc, setImageSrc] = useState("foobar.jpg");
const fallbackImageSrc = "https://images.nypl.org/index.php?id=swope_244712&t=w";
return (
  <Hero
    backgroundImageSrc={imageSrc}
    heroType="campaign"
    heading={
      <Heading
        level="h1"
        id="campaign-fallback-image"
        text="Hero Campaign"
      />
    }
    imageProps={{
      alt: "Custom NYPL Image",
      src: imageSrc,
      fallbackSrc: fallbackImageSrc,
      onError: (_event) => {
        setImageSrc(fallbackImageSrc);
      }
    }}
    subHeaderText={otherSubHeaderText}
  />
);
};
`,language:"jsx"}),`
`,e.jsx(t,{of:k}),`
`,e.jsx(n.h2,{id:"deprecated-variants",children:"Deprecated Variants"}),`
`,e.jsx(n.h3,{id:"secondary",children:"Secondary"}),`
`,e.jsxs(n.p,{children:["This ",e.jsx(n.code,{children:'"secondary"'})," variant of the ",e.jsx(n.code,{children:"Hero"}),` component has been deprecated. This
variant will be removed from the DS in a future release.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"secondary"'})," hero type can be used with the ",e.jsx(n.code,{children:"heading"}),", ",e.jsx(n.code,{children:"imageProps"}),`, and
`,e.jsx(n.code,{children:"subHeaderText"})," props."]}),`
`,e.jsx(o,{of:T}),`
`,e.jsx(a,{code:`
<Hero
heading={
  <Heading
    level="h1"
    id="secondary-hero"
    size="heading2"
    text="Hero Secondary (deprecated)"
  />
}
heroType="secondary"
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
isDarkBackgroundImage
subHeaderText={
  <>
    Explore our <Link href="#">collection</Link> of hundreds of online resources
    and databases. Use our free online content to help with your research,
    whether it's finding a single article, tracing a family tree, learning a new
    language, or anything in between.
    <Text mt="s" noSpace>
      This variant has been deprecated.
    </Text>
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(n.h3,{id:"fiftyfifty",children:"FiftyFifty"}),`
`,e.jsxs(n.p,{children:["This ",e.jsx(n.code,{children:'"fiftyFifty"'})," variant of the ",e.jsx(n.code,{children:"Hero"}),` component has been deprecated. This
variant will be removed from the DS in a future release.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:'"fiftyFifty"'})," hero type can be used with the ",e.jsx(n.code,{children:"backgroundColor"}),`,
`,e.jsx(n.code,{children:"foregroundColor"}),", ",e.jsx(n.code,{children:"heading"}),", ",e.jsx(n.code,{children:"imageProps"}),", and ",e.jsx(n.code,{children:"subHeaderText"}),` props. The
minimum props to use are `,e.jsx(n.code,{children:"imageProps"})," and ",e.jsx(n.code,{children:"subHeaderText"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"NOTE:"})," The layout offered in the ",e.jsx(n.code,{children:"fiftyFifty"}),` variant has been replaced by
the `,e.jsx(n.a,{href:"../?path=/docs/components-basic-elements-featuredcontent--docs",children:"FeaturedContent"})," component."]}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(a,{code:`
<Hero
heroType="fiftyFifty"
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
isDarkBackgroundImage
subHeaderText={
  <>
    Explore our <Link href="#">collection</Link> of hundreds of online resources
    and databases. Use our free online content to help with your research,
    whether it's finding a single article, tracing a family tree, learning a new
    language, or anything in between.
    <Text mt="s" noSpace>
      This variant has been deprecated.
    </Text>
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(a,{code:`
<Hero
heroType="fiftyFifty"
imageProps={
  alt: "Image example",
  src: "https://images.nypl.org/index.php?id=swope_244712&t=w",
}
isDarkBackgroundImage
subHeaderText={
  <>
    <Heading
      level="h2"
      size="heading3"
      subtitle="Lorem Parturient Bibendum Aenean Cras"
    >
      Subheading
    </Heading>
    <Heading level="h3" noSpace size="heading6">
      Subheading
    </Heading>
    <Text>
      Donec ullamcorper nulla non metus auctor fringilla. Cras mattis elit{" "}
      <Link href="https://www.nypl.org/locations/snfl/childrens">
        The New York Public Library
      </Link>{" "}
      consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra
      augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      Aenean lacinia{" "}
      <Link href="https://google.com" type="external">
        Google
      </Link>{" "}
      bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod
      semper. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel
      eu leo.
    </Text>
    <ButtonGroup>
      <Button id="other-button-example-1">Button</Button>
      <Button id="other-button-example-2" buttonType="secondary">
        Button
      </Button>
    </ButtonGroup>
    <Text mt="s" noSpace>
      This variant has been deprecated.
    </Text>
  </>
}
/>
`,language:"jsx"}),`
`,e.jsx(n.h2,{id:"color-variations-for-secondary-hero",children:"Color Variations for Secondary Hero"}),`
`,e.jsxs(n.p,{children:["This ",e.jsx(n.code,{children:'"secondary"'})," variant of the ",e.jsx(n.code,{children:"Hero"}),` component has been deprecated. This
variant and the associated color variations will be removed from the DS in a
future release.`]}),`
`,e.jsxs(n.p,{children:["The background color for the title bar in the ",e.jsx(n.code,{children:'"secondary"'})," ",e.jsx(n.code,{children:"Hero"}),` changes based
on the `,e.jsx(n.code,{children:"heroType"})," variants for the ",e.jsx(n.code,{children:'"secondary"'}),` main variant. There are four
subtypes: `,e.jsx(n.code,{children:'"secondaryBooksAndMore"'}),", ",e.jsx(n.code,{children:'"secondaryLocations"'}),", ",e.jsx(n.code,{children:'"secondaryResearch"'}),`,
and `,e.jsx(n.code,{children:'"secondaryWhatsOn"'}),"."]}),`
`,e.jsx(a,{code:`
// Example \`heroType\` "secondary" variant.
<Hero heroType="secondaryBooksAndMore" {...props} />
`,language:"jsx"}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(u,{changelogData:H})]})}function B(i={}){const{wrapper:n}={...h(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{B as default};
