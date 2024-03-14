import{j as n,a as o,F as h}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,b as a,C as i,A as g}from"./index-445595fc.js";import{A as c,W as d,F as f,P as u,a as w,I as b}from"./Accordion.stories-d5a8558c.js";import{L as r}from"./Link-24c1437a.js";import{u as s}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Accordion-ddc955e7.js";import"./Icon-4eeffe51.js";import"./chakra-ui-transition.esm-3069754e.js";import"./index-13103a50.js";import"./chakra-ui-descendant.esm-f106b18c.js";import"./chakra-ui-hooks.esm-539e7d47.js";import"./tiny-invariant-dd7d57d2.js";import"./Card-4cbdbbf1.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./Image-ed70f474.js";import"./HelperErrorText-55c57f50.js";import"./Checkbox-6e7b1e16.js";import"./ComponentWrapper-aa2910be.js";import"./useDSHeading-94e72700.js";import"./chakra-ui-checkbox.esm-772830ca.js";import"./chakra-ui-form-control.esm-5c4917b4.js";import"./chakra-ui-visually-hidden.esm-a796d0b5.js";import"./CheckboxGroup-6c26da72.js";import"./Fieldset-46002ef9.js";import"./spacing-06362f80.js";function l(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a"},s(),t.components);return o(h,{children:[n(p,{of:c}),`
`,n(e.h1,{id:"accordion",children:"Accordion"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.1.0"})})]}),o(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"2.0.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[`
`,n(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,o(e.li,{children:[`
`,n(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,o(e.li,{children:[`
`,n(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,o(e.li,{children:[`
`,n(r,{href:"#faq-example",target:"_self",children:"FAQ Example"}),`
`]}),`
`,o(e.li,{children:[`
`,n(r,{href:"#example-with-panelmaxheight-prop",target:"_self",children:"Example with panelMaxHeight Prop"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(m,{of:c}),`
`,o(e.p,{children:["The ",n(e.code,{children:"Accordion"}),` component displays a list of high-level options that can
expand and collapse to reveal associated sections of content. This component
pushes existing content on the page down. Each accordion item is self contained,
but when the data for multiple accordions is passed in through the `,n(e.code,{children:"accordionData"}),`
prop, the `,n(e.code,{children:"Accordion"}),` components are grouped together and rendered under a single
element. When grouped like this, each `,n(e.code,{children:"Accordion"}),` component still opens and
closes independent from the others in the group.`]}),`
`,o(e.p,{children:["The only way to render an ",n(e.code,{children:"Accordion"}),` component is to pass in an array of objects
with `,n(e.code,{children:"label"}),", ",n(e.code,{children:"panel"}),", and optional ",n(e.code,{children:"accordionType"}),` properties for each accordion item.
Note that you can pass in a string or DOM elements into the `,n(e.code,{children:"panel"}),` property in each
object. This approach is needed because, internally, we deal with the logic to render
the necessary icon, Chakra components, and styles.`]}),`
`,o(e.p,{children:["The ",n(e.code,{children:"accordionType"}),` prop can be used to change the accordion button's background color.
It takes a value of `,n(e.code,{children:'"default"'})," for ",n(e.code,{children:'"ui.white"'}),", ",n(e.code,{children:'"warning"'})," for ",n(e.code,{children:'"ui.status.primary"'}),`,
and `,n(e.code,{children:'"error"'})," for ",n(e.code,{children:'"ui.status.secondary"'}),". The optional ",n(e.code,{children:"panelMaxHeight"}),` prop determines
the maximum height of the `,n(e.code,{children:"Accordion"}),`'s panel when expanded. If the content within the
panel exceeds the `,n(e.code,{children:"panelMaxHeight"}),", a scrollbar will appear."]}),`
`,n(a,{code:`
const accordionData = [
  {
    accordionType: "default",
    label: "Tom Nook",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h4" id="heading1">
          Tom Nook
        </CardHeading>
        <CardContent>
          Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
          character in the Animal Crossing series who operates the
          village store.
        </CardContent>
      </Card>
    ),
  },
];

...

<Accordion accordionData={accordionData} />
`,language:"tsx"}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:d}),`
`,n(g,{of:d}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["Follows ",n(e.a,{href:"https://designsystem.digital.gov/components/accordion/",target:"_blank",rel:"nofollow noopener noreferrer",children:"U.S. Web Design System (USWDS)"}),`
guidelines:`,`
`,o(e.ul,{children:[`
`,o(e.li,{children:["Use the ",n(e.code,{children:"button"})," HTML element for screenreaders and keyboards."]}),`
`,o(e.li,{children:["Use the ",n(e.code,{children:"aria-expanded"})," attribute to indicate whether the ",n(e.code,{children:"Accordion"}),` is
expanded (`,n(e.code,{children:"true"}),") or collapsed (",n(e.code,{children:"false"}),")."]}),`
`,o(e.li,{children:["Use the ",n(e.code,{children:"aria-controls"})," attribute to associate the control with the panel."]}),`
`]}),`
`]}),`
`,n(e.li,{children:`Deviates from USWDS in that the user can open multiple panels. Opening one,
does not collapse already expanded panel.`}),`
`,o(e.li,{children:["The open and close icons are decorative (",n(e.code,{children:"aria-hidden"})," is ",n(e.code,{children:"true"}),")."]}),`
`,n(e.li,{children:"Visible focus goes around full button and full button is clickable."}),`
`]}),`
`,n(e.p,{children:"Resources:"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#accordion",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI-Aria Practices - Accordion"})}),`
`,n(e.li,{children:n(e.a,{href:"https://designsystem.digital.gov/components/accordion/",target:"_blank",rel:"nofollow noopener noreferrer",children:"USWDS Accordion"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/disclosure/accordion",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra Accordion"})}),`
`]}),`
`,n(e.h2,{id:"faq-example",children:"FAQ Example"}),`
`,o(e.p,{children:[`Building out FAQ-like accordions happens automatically when there are more than
one object in the array passed into the `,n(e.code,{children:"accordionData"})," prop."]}),`
`,n(i,{of:f}),`
`,n(a,{code:`
export const faqContent: AccordionDataProps[] = [
  {
    accordionType: "default",
    label: "Tom Nook",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Tom_FRYtwIN.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h4" id="heading1-tom">
          Tom Nook
        </CardHeading>
        <CardContent>
          Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional character
          in the Animal Crossing series who operates the village store.
        </CardContent>
      </Card>
    ),
  },
  {
    accordionType: "warning",
    label: "Isabelle",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_Isabelle_7XU6aGu.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h4" id="heading1-isabelle">
          Isabelle
        </CardHeading>
        <CardContent>
          Isabelle, known as Shizue in Japan, is a fictional character from the
          Animal Crossing series of video games. She is a kindly Shih Tzu that
          debuted in the 2012 release Animal Crossing: New Leaf, where she
          serves as the secretary to the player character.
        </CardContent>
      </Card>
    ),
  },
  {
    accordionType: "error",
    label: "K.K. Slider",
    panel: (
      <Card
        imageProps={{
          alt: "Alt text",
          aspectRatio: "twoByOne",
          src: "https://play.nintendo.com/images/AC_KK_jh4yj5t.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
        }}
        isCentered
        layout="row"
      >
        <CardHeading level="h4" id="heading1-kkslider">
          K.K. Slider
        </CardHeading>
        <CardContent>
          <p>
            Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a
            fictional character within the Animal Crossing franchise. One of the
            franchise's most popular characters, he debuted in the title Animal
            Crossing, and has appeared in every installment since.
          </p>
        </CardContent>
      </Card>
    ),
  },
];

...

<Accordion accordionData={faqContent} />
`,language:"tsx"}),`
`,n(e.h2,{id:"examples-with-panelmaxheight-prop",children:"Examples with panelMaxHeight Prop"}),`
`,n(e.p,{children:"Example with image and text"}),`
`,n(i,{of:u}),`
`,n(e.p,{children:"Example with multiple paragraphs"}),`
`,n(i,{of:w}),`
`,n(e.h2,{id:"always-render-the-accordion-content",children:"Always Render the Accordion Content"}),`
`,o(e.p,{children:["By default, the content in an ",n(e.code,{children:"Accordion"}),` is only rendered when it is opened. When
it is closed, the content gets removed from the DOM. This is an intentional
optimization. However, there will be occasions when you want to always render the
content inside an `,n(e.code,{children:"Accordion"}),` whether it's opened or closed. Use the
`,n(e.code,{children:"isAlwaysRendered"})," prop to always render the ",n(e.code,{children:"Accordion"}),"'s content."]}),`
`,o(e.p,{children:["In the following examples, the first ",n(e.code,{children:"Accordion"}),` has the default behavior where
the content is removed when it is closed. The second `,n(e.code,{children:"Accordion"}),` always renders
its content. This is important in this scenario because we want to keep the state
of the content when it is closed. Click on subjects inside both `,n(e.code,{children:"Accordion"}),`s and
toggle them closed and opened to see the difference.`]}),`
`,n(i,{of:b})]})}function de(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?n(e,Object.assign({},t,{children:n(l,t)})):l(t)}export{de as default};
//# sourceMappingURL=Accordion-1f794f08.js.map
