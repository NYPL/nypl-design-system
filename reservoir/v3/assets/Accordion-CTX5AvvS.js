import{u as d,j as e,M as l,L as a,bv as h,S as t,C as i,bw as p}from"./iframe-CFLVJZOZ.js";import{C as x}from"./ComponentChangelogTable-DvY0SxTs.js";import{A as s,W as c,F as j,P as m,a as u,I as g}from"./Accordion.stories-DaaAKqeT.js";import"./storybookUtils-BmTl87w5.js";const f=[{date:"2025-02-21",version:"3.5.4",type:"Update",affects:["Styles"],notes:["Fixes styles including padding, active hover state, and double-border issue."]},{date:"2024-07-03",version:"3.1.7",type:"Update",affects:["Accessibility","Functionality"],notes:["Adds logic to close accordion when element within panel is focused and 'esc' key is pressed"]},{date:"2024-05-23",version:"3.1.4",type:"Update",affects:["Accessibility","Functionality"],notes:["Adds logic to close accordion when accordion button is focused and 'esc' key is pressed"]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Accessibility","Functionality"],notes:["Chakra 2.8 update.","Added the ariaLabel and buttonInteractionRef prop."]}];function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:s}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.1.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.1.7"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#faq-example",target:"_self",children:"FAQ Example"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#example-with-panelmaxheight-prop",target:"_self",children:"Example with panelMaxHeight Prop"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(h,{of:s}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Accordion"}),` component displays a list of high-level options that can expand
and collapse to reveal associated sections of content. This component pushes
existing content on the page down. Each accordion item is self contained, but
when the data for multiple accordions is passed in through the `,e.jsx(n.code,{children:"accordionData"}),`
prop, the `,e.jsx(n.code,{children:"Accordion"}),` components are grouped together and rendered under a
single element. When grouped like this, each `,e.jsx(n.code,{children:"Accordion"}),` component still opens
and closes independent from the others in the group.`]}),`
`,e.jsxs(n.p,{children:["The only way to render an ",e.jsx(n.code,{children:"Accordion"}),` component is to pass in an array of
objects with `,e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"panel"}),", optional ",e.jsx(n.code,{children:"accordionType"}),", optional ",e.jsx(n.code,{children:"ariaLabel"}),`,
and optional `,e.jsx(n.code,{children:"buttonInteractionRef"}),` properties for each accordion item. Note
that you can pass in a string or DOM elements into the `,e.jsx(n.code,{children:"panel"}),` property in each
object. This approach is needed because, internally, we deal with the logic to
render the necessary icon, Chakra components, and styles.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"accordionType"}),` prop can be used to change the accordion button's background
color. It takes a value of `,e.jsx(n.code,{children:'"default"'})," for ",e.jsx(n.code,{children:'"ui.white"'}),", ",e.jsx(n.code,{children:'"warning"'}),` for
`,e.jsx(n.code,{children:'"ui.status.primary"'}),", and ",e.jsx(n.code,{children:'"error"'})," for ",e.jsx(n.code,{children:'"ui.status.secondary"'}),`. The optional
`,e.jsx(n.code,{children:"panelMaxHeight"})," prop determines the maximum height of the ",e.jsx(n.code,{children:"Accordion"}),`'s panel
when expanded. If the content within the panel exceeds the `,e.jsx(n.code,{children:"panelMaxHeight"}),`, a
scrollbar will appear.`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"buttonInteractionRef"}),` prop can be used to set a programmatic reference to
the main button element in each accordion with an accordion group.`]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.code,{children:"ariaLabel"}),` prop is also available on the component level. When this prop is
set, the value will set the same `,e.jsx(n.code,{children:"aria-label"}),` value on all accordions in an
accordion group. Please note, however, that the `,e.jsx(n.code,{children:"ariaLabel"}),` key in the
`,e.jsx(n.code,{children:"accordionData"})," entries will override the value of the ",e.jsx(n.code,{children:"ariaLabel"}),` component
prop.`]}),`
`,e.jsx(t,{code:`
const accordionData = [
{
  accordionType: "default",
  ariaLabel: "Tom Nook, known in Japan as Tanukichi",
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
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(p,{of:c}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Follows ",e.jsx(n.a,{href:"https://designsystem.digital.gov/components/accordion/",rel:"nofollow",children:"U.S. Web Design System (USWDS)"}),`
guidelines:`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"button"})," HTML element for screenreaders and keyboards."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"aria-expanded"})," attribute to indicate whether the ",e.jsx(n.code,{children:"Accordion"}),` is
expanded (`,e.jsx(n.code,{children:"true"}),") or collapsed (",e.jsx(n.code,{children:"false"}),")."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"aria-controls"})," attribute to associate the control with the panel."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`Deviates from USWDS in that the user can open multiple panels. Opening one,
does not collapse already expanded panel.`}),`
`,e.jsxs(n.li,{children:["The open and close icons are decorative (",e.jsx(n.code,{children:"aria-hidden"})," is ",e.jsx(n.code,{children:"true"}),")."]}),`
`,e.jsx(n.li,{children:"Visible focus goes around full button and full button is clickable."}),`
`,e.jsxs(n.li,{children:["An ",e.jsx(n.code,{children:"aria-label"}),` attribute can be applied to the main accordion button using
one of the following methods:`,`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The global ",e.jsx(n.code,{children:"ariaLabel"}),` prop can set a general value that will be applied to
all accordions within an accordion group.`]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"ariaLabel"})," key available within the ",e.jsx(n.code,{children:"accordionData"}),` array entries can set
a unique value for each accordion within an accordion group.`]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:`If the user presses the 'esc' key and focus is on an open accordion panel,
that panel will close and focus will return to the accordion's button.`}),`
`]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#accordion",rel:"nofollow",children:"W3C WAI-Aria Practices - Accordion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://designsystem.digital.gov/components/accordion/",rel:"nofollow",children:"USWDS Accordion"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://chakra-ui.com/docs/components/disclosure/accordion",rel:"nofollow",children:"Chakra Accordion"})}),`
`]}),`
`,e.jsx(n.h2,{id:"faq-example",children:"FAQ Example"}),`
`,e.jsxs(n.p,{children:[`Building out FAQ-like accordions happens automatically when there are more than
one object in the array passed into the `,e.jsx(n.code,{children:"accordionData"})," prop."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(t,{code:`
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
`,e.jsx(n.h2,{id:"examples-with-panelmaxheight-prop",children:"Examples with panelMaxHeight Prop"}),`
`,e.jsx(n.p,{children:"Example with image and text"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.p,{children:"Example with multiple paragraphs"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"always-render-the-accordion-content",children:"Always Render the Accordion Content"}),`
`,e.jsxs(n.p,{children:["By default, the content in an ",e.jsx(n.code,{children:"Accordion"}),` is only rendered when it is opened. When
it is closed, the content gets removed from the DOM. This is an intentional
optimization. However, there will be occasions when you want to always render the
content inside an `,e.jsx(n.code,{children:"Accordion"}),` whether it's opened or closed. Use the
`,e.jsx(n.code,{children:"isAlwaysRendered"})," prop to always render the ",e.jsx(n.code,{children:"Accordion"}),"'s content."]}),`
`,e.jsxs(n.p,{children:["In the following examples, the first ",e.jsx(n.code,{children:"Accordion"}),` has the default behavior where
the content is removed when it is closed. The second `,e.jsx(n.code,{children:"Accordion"}),` always renders
its content. This is important in this scenario because we want to keep the state
of the content when it is closed. Click on subjects inside both `,e.jsx(n.code,{children:"Accordion"}),`s and
toggle them closed and opened to see the difference.`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:f})]})}function A(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{A as default};
