import{j as n,a as t,F as d}from"./jsx-runtime-09ad29cb.js";import{M as p,D as b,C as i,A as m,b as r}from"./index-5d3bb37f.js";import{T as s,W as l,C as u,U as f,a as T}from"./Tabs.stories-b8303606.js";import{L as a}from"./Link-0ed02cf7.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Tabs-008682e2.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./useNYPLBreakpoints-91c0faa1.js";import"./chakra-ui-descendant.esm-237bc145.js";function h(o){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",h3:"h3",a:"a",em:"em"},c(),o.components);return t(d,{children:[n(p,{of:s}),`
`,n(e.h1,{id:"tabs",children:"Tabs"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.24.0"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.2"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#composing-with-a-data-object",target:"_self",children:"Composing with a Data Object"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#responsive-mobile-carousel",target:"_self",children:"Responsive Mobile Carousel"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#callback-event-function",target:"_self",children:"Callback Event Function"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#url-hash-option",target:"_self",children:"URL Hash Option"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#children-components",target:"_self",children:"Children Components"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(b,{of:s}),`
`,n(e.h2,{id:"component-props",children:"Component Props"}),`
`,n(i,{of:l}),`
`,n(m,{of:l}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["Using the DS ",n(e.code,{children:"Tabs"}),` component renders HTML for button tabs and panels that are
associated with each other. In order to simplify the content and reduce
cognitive load for a user, we recommend to not use more than a six (6) button
tabs and panels. Likewise, button tab labels should be clear and concise. Do not
use icons for tab labels.`]}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Tabs"}),` component is fully accessible through keyboard usage. The initial
focus on the UI is set on the first tab. To move between tabs, use the left and
right key arrows. The `,n(e.code,{children:"home"}),` key can be used to navigate to the first tab and
the `,n(e.code,{children:"end"}),` key can be used to navigate to the last tab. To move from a tab to its
panel, use the `,n(e.code,{children:"tab"})," key. Likewise, use the ",n(e.code,{children:"tab + shift"}),` key combination to
move from the panel to its tab. A user cannot navigate between panels; they must
navigate through the tabs.`]}),`
`,t(e.p,{children:["This ",n(e.code,{children:"Tabs"}),` component is implemented with Chakra UI and this library handles the
appropriate `,n(e.code,{children:"aria-selected"})," and ",n(e.code,{children:"aria-controls"}),` attributes for the tabs, the
related `,n(e.code,{children:"aria-labelledby"})," and ",n(e.code,{children:"id"})," attributes for the panels, and the ",n(e.code,{children:"tablist"}),`,
`,n(e.code,{children:"tab"}),", and ",n(e.code,{children:"tabpanel"})," roles for the relevant HTML elements."]}),`
`,n(e.h3,{id:"mobile-carousel",children:"Mobile Carousel"}),`
`,t(e.p,{children:["When viewing the ",n(e.code,{children:"Tabs"}),` component on a narrow screen, an additional carousel
interface is wrapped around the button tabs. "Next" and "Previous" arrow buttons
slide the view of the tabs to the left and right, but all initial functionality
for the `,n(e.code,{children:"Tabs"})," component doesn't change."]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://inclusive-components.design/tabbed-interfaces/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Inclusive Design Tabbed Interfaces"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Example of Tabs with Automatic Activation"})}),`
`,n(e.li,{children:n(e.a,{href:"https://chakra-ui.com/docs/components/disclosure/tabs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Chakra UI Tabs"})}),`
`]}),`
`,n(e.h2,{id:"composing-with-a-data-object",children:"Composing with a Data Object"}),`
`,n(e.p,{children:n(e.em,{children:"Note: this is the recommended approach."})}),`
`,t(e.p,{children:["We recommended passing in the data for the ",n(e.code,{children:"Tabs"})," component through the ",n(e.code,{children:"data"}),`
prop. This allows the consumer to pass in well-formed data and always generate
the correct DOM.`]}),`
`,t(e.p,{children:["Internally in the Reservoir Design System (DS) ",n(e.code,{children:"Tabs"})," component:"]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:`we map through the data array and generate the appropriate components needed
for the layout.`}),`
`,n(e.li,{children:"adds the carousel feature for the mobile view."}),`
`]}),`
`,t(e.p,{children:["Note that HTML is allowed in the ",n(e.code,{children:"content"}),` property in each object as part of
the string or as straight HTML.`]}),`
`,n(r,{code:`
import { Tabs } from "@nypl/design-system-react-components";
const animalCrossingData = [
  {
    label: "Tom Nook",
    content: <p>Tom Nook, <b>known in Japan as Tanukichi</b>, is a ...,
  {
    label: "Isabelle",
    content: "Isabelle, known as Shizue in Japan, is a fictional ...",
  },
  {
    label: "K.K. Slider",
    content:
      "<p>Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is ...",
  },
  {
    label: "Mr. Resetti",
    content:
      "<strong>Mr. Resetti</strong>, full name Sonny Resetti, is a ...",
  },
  {
    label: "Zucker",
    content:
      "<strong>Zucker</strong> is a lazy octopus villager who first ...",
  },
];

<Tabs tabsData={animalCrossingData} />; `,language:"tsx"}),`
`,n(e.h2,{id:"responsive-mobile-carousel",children:"Responsive Mobile Carousel"}),`
`,t(e.p,{children:["For both, the ",n(e.code,{children:"tabsData"}),` prop approach and the children component approach
(described below in this document), the mobile carousel feature is built. This
adds "previous" and "next" arrows in the tab list for users to scroll through
all the tabs while the panel stays static.`]}),`
`,t(e.p,{children:["Note that for the children component approach, we expect a ",n(e.code,{children:"TabList"}),` component
to be passed or else the mobile carousel will `,n(e.em,{children:"not"}),` be built. More on this in
the `,n(a,{href:"#children-components",target:"_self",children:"Children Components"})," section."]}),`
`,n(e.p,{children:`To view and test this in Storybook, go to the "Canvas" tab and change the
viewport in the Storybook toolbar at the top of the page.`}),`
`,n(e.h2,{id:"callback-event-function",children:"Callback Event Function"}),`
`,t(e.p,{children:[`If you need to keep track of the index of current tab that was selected, pass an
`,n(e.code,{children:"onChange"})," event handler to the ",n(e.code,{children:"onChange"}),` prop. This will return the index
(0-based) of the tab selected.`]}),`
`,n(r,{code:`
export const onChange = (value) => {
  window.alert(\`Tab index selected was \${value}\`);
};
<Tabs tabsData={animalCrossing} onChange={onChange} />;
`,language:"tsx"}),`
`,n(i,{of:u}),`
`,n(e.h2,{id:"url-hash-option",children:"URL Hash Option"}),`
`,t(e.p,{children:[`In some situations, each selected tab should update the URL with a hash value.
To enable this, set the `,n(e.code,{children:"useHash"})," prop to true."]}),`
`,n(i,{of:f}),`
`,n(e.h2,{id:"children-components",children:"Children Components"}),`
`,n(e.p,{children:n(e.em,{children:"Note: not recommended but available."})}),`
`,t(e.p,{children:["There are five components that make up the Design System ",n(e.code,{children:"Tabs"}),` component:
`,n(e.code,{children:"Tabs"}),", ",n(e.code,{children:"TabList"}),", ",n(e.code,{children:"Tab"}),", ",n(e.code,{children:"TabPanels"}),", ",n(e.code,{children:"TabPanel"}),`. The general layout is always
the same such that the `,n(e.code,{children:"Tabs"})," component has ",n(e.code,{children:"TabList"})," and ",n(e.code,{children:"TabPanels"}),` as
children.`]}),`
`,t(e.p,{children:[n(e.code,{children:"TabList"})," only takes ",n(e.code,{children:"Tab"})," components as children and ",n(e.code,{children:"TabPanels"}),` only take
`,n(e.code,{children:"TabPanel"})," as children. While you can compose the DS ",n(e.code,{children:"Tabs"}),` components with
these available components, you will probably have to iterate or map through an
array to get the desired outcome. The DS `,n(e.code,{children:"Tabs"}),` component does this internally
for you so this should be a last resort option.`]}),`
`,n(e.p,{children:"Make sure that:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"all five components are imported to use this approach."}),`
`,n(e.li,{children:`the structure follows the example below for the mobile carousel to render
properly.`}),`
`]}),`
`,n(r,{code:`
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@nypl/design-system-react-components";
<Tabs>
  <TabList>
    <Tab>Tom Nook</Tab>
    <Tab>Isabelle</Tab>
    <Tab>K.K. Slider</Tab>
    <Tab>Mr. Resetti</Tab>
    <Tab>Zucker</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>
        Tom Nook, <b>known in Japan as Tanukichi</b>, is a fictional
        character in the Animal Crossing series who operates the village
        store.
      </p>
    </TabPanel>
    <TabPanel>
      Isabelle, known as Shizue in Japan, is a fictional character from the
      Animal Crossing series of video games. She is a kindly Shih Tzu that
      debuted in the 2012 release Animal Crossing: New Leaf, where she
      serves as the secretary to the player character.
    </TabPanel>
    <TabPanel>
      <p>
        Totakeke, more commonly known as <b>K.K. Slider or K.K.</b>, is a
        fictional character within the Animal Crossing franchise. One of the
        franchise's most popular characters, he debuted in the title Animal
        Crossing, and has appeared in every installment since.
      </p>
    </TabPanel>
    <TabPanel>
      <strong>Mr. Resetti</strong>, full name Sonny Resetti, is a fictional
      character from the Animal Crossing series of video games by Nintendo.
      His first appearance was in the Nintendo 64 game Dōbutsu no Mori,
      released in Europe and North America on the GameCube as Animal
      Crossing.
    </TabPanel>
    <TabPanel>
      <strong>Zucker</strong> is a lazy octopus villager who first appeared
      in New Leaf. His Japanese name and general appearance refers to the
      Japanese snack takoyaki, which is a fried ball of dough commonly
      filled with minced octopus. His catchphrase is a reference to how he
      is an underwater animal. He has the same initial phrase as Bertha. He
      has the nature hobby.
    </TabPanel>
  </TabPanels>
</Tabs>
`,language:"tsx"}),`
`,n(i,{of:T})]})}function B(o={}){const{wrapper:e}=Object.assign({},c(),o.components);return e?n(e,Object.assign({},o,{children:n(h,o)})):h(o)}export{B as default};
//# sourceMappingURL=Tabs-1bc8c8f0.js.map
