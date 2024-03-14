import{j as i,a as n,F as c}from"./jsx-runtime-fdf4db99.js";import{M as p,D as m,C as o,A as f,b as r}from"./index-445595fc.js";import{L as s,W as l,D as u,a as g,b as w,c as b}from"./List.stories-1802254c.js";import{L as d}from"./Link-24c1437a.js";import{C as L}from"./ComponentChangelogTable-310bbbfd.js";import{u as a}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-6148c31a.js";import"./Heading-7eebc756.js";import"./Text-d88b2f7a.js";import"./List-582282a6.js";import"./useDSHeading-94e72700.js";import"./Icon-4eeffe51.js";import"./Table-64c6aa77.js";const y=[{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `title` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function h(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",h3:"h3"},a(),t.components);return n(c,{children:[i(p,{of:s}),`
`,i(e.h1,{id:"list",children:"List"}),`
`,n(e.table,{children:[i(e.thead,{children:n(e.tr,{children:[i(e.th,{children:"Component Version"}),i(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[i(e.td,{children:"Added"}),i(e.td,{children:i(e.code,{children:"0.7.0"})})]}),n(e.tr,{children:[i(e.td,{children:"Latest"}),i(e.td,{children:i(e.code,{children:"2.1.3"})})]})]})]}),`
`,i(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,i(d,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,i(d,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,i(d,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,i(d,{href:"#description-list",target:"_self",children:"Description List"}),`
`]}),`
`,n(e.li,{children:[`
`,i(d,{href:"#lists-with-data-props",target:"_self",children:"Lists with Data Props"}),`
`]}),`
`,n(e.li,{children:[`
`,i(d,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,i(e.h2,{id:"overview",children:"Overview"}),`
`,i(m,{of:s}),`
`,i(o,{of:l}),`
`,i(f,{of:l}),`
`,i(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["Internally, the ",i(e.code,{children:"List"}),` component implements native HTML markup for unordered,
ordered, and description lists. This includes `,i(e.code,{children:"ul"}),", ",i(e.code,{children:"ol"}),", and ",i(e.code,{children:"dl"}),` elements.
When data is passed into the `,i(e.code,{children:"listItems"}),` data prop, the appropriate children
HTML elements are used. This includes `,i(e.code,{children:"li"}),` for unorder and ordered lists, and
`,i(e.code,{children:"dt"})," and ",i(e.code,{children:"dd"})," elements for description lists."]}),`
`,n(e.p,{children:["The description type for the ",i(e.code,{children:"List"})," component is wrapped in a ",i(e.code,{children:"section"}),` element
with an `,i(e.code,{children:"h2"})," header. Keep that in mind when ordering headings on the page."]}),`
`,i(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:i(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/content/",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Content Structure"})}),`
`,i(e.li,{children:i(e.a,{href:"https://dequeuniversity.com/tips/list-markup",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Appropriate Semantic Markup for Lists"})}),`
`]}),`
`,i(e.h2,{id:"description-list",children:"Description List"}),`
`,i(e.p,{children:i(e.em,{children:`Note: This element is officially called the "Description List" element in HTML5.
Before HTML5, it was called the "Definition List" element and some online resources
may still use this name. In the Reservoir Design System, we will use the
"Description List" name.`})}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:i(e.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Using description lists"})}),`
`,i(e.li,{children:i(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDN dl: The Description List element"})}),`
`]}),`
`,n(e.p,{children:["To render a description list, pass in ",i(e.code,{children:'"dl"'})," to the ",i(e.code,{children:"type"}),` prop. The optional
`,i(e.code,{children:"title"}),` prop will now render above the description list element. This type of
list renders `,i(e.code,{children:"dt"})," and ",i(e.code,{children:"dd"})," elements."]}),`
`,i(r,{code:`
<List type="dl">
  <dt>Term</dt>
  <dd>Description</dd>
</List>
`,language:"jsx"}),`
`,i(o,{of:u}),`
`,i(e.h3,{id:"description-list-with-custom-headings",children:"Description List with Custom Headings"}),`
`,n(e.p,{children:["The optional ",i(e.code,{children:"title"})," prop will render the description list's heading as an ",i(e.code,{children:"h2"}),`
element by default when the `,i(e.code,{children:"title"}),` value is a string. It's possible that the
`,i(e.code,{children:"h2"}),` element will not fit in an app's heading hierarchy. If this is the case,
`,i(e.code,{children:"title"})," can also take a ",i(e.code,{children:"JSX.Element"})," type value."]}),`
`,n(e.p,{children:["In the following example, the heading is an ",i(e.code,{children:"h4"})," defined as:"]}),`
`,i(r,{code:`
const listHeading = <Heading level="h4">Middle-Earth Peoples</Heading>;
// ...

<List type="dl" title={listHeading}>
  <dt>Balrogs</dt>
  <dd>Demonic creatures of fire and shadow...</dd>
  <dt>Dwarves</dt>
  <dd>The race of Dwarves...</dd>
</List>
`,language:"jsx"}),`
`,i(o,{of:g}),`
`,i(e.h3,{id:"description-list-of-links",children:"Description List of Links"}),`
`,n(e.p,{children:["An example with HTML elements inside of the ",i(e.code,{children:"dd"})," elements."]}),`
`,i(o,{of:w}),`
`,i(e.h2,{id:"lists-with-data-props",children:"Lists with Data Props"}),`
`,n(e.p,{children:["If ",i(e.code,{children:"li"})," or ",i(e.code,{children:"dt"}),"/",i(e.code,{children:"dd"})," elements cannot be passed as children to the ",i(e.code,{children:"List"}),` element,
an array with data can be passed into the `,i(e.code,{children:"listItems"}),` prop. Note: either
children elements or the `,i(e.code,{children:"listItems"})," prop should be passed but not both."]}),`
`,i(e.h3,{id:"unordered-and-ordered",children:"Unordered and Ordered"}),`
`,n(e.p,{children:["For lists of type ",i(e.code,{children:'"ul"'})," (unorderd) or ",i(e.code,{children:'"ol"'})," (ordered), ",i(e.code,{children:"li"}),` list item elements
can be passed as children. If that's not possible but the data to render is
stored as an array of strings, then that data array can be passed into `,i(e.code,{children:"listItems"}),"."]}),`
`,i(r,{code:`
// With \`li\` elements
<List type={ul}>
  <li>Mahi-mahi</li>
  <li>Golden trout</li>
  <li>Rainbowfish</li>
  <li>Suckerfish</li>
</List>
`,language:"jsx"}),`
`,i(r,{code:`
// With \`itemList\` data prop
const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
<List type={ul} listItems={fishArray} />
`,language:"jsx"}),`
`,i(e.h3,{id:"description",children:"Description"}),`
`,n(e.p,{children:["For lists of type ",i(e.code,{children:'"dl"'})," (description), ",i(e.code,{children:"dt"})," and ",i(e.code,{children:"dd"}),` elements can be
passed as children. If that's not possible but the data to render is stored as
an array of objects, then that data array can be passed into `,i(e.code,{children:"listItems"}),`. The
object must have two keys, `,i(e.code,{children:"term"})," and ",i(e.code,{children:"description"}),"."]}),`
`,i(r,{code:`
// With \`dt\`/\`dd\` elements
<List type="dl" title="Animal Crossing Fish">
  <dt>Mahi-mahi</dt>
  <dd>The mahi-mahi is an ocean fish known...</dd>
  <dt>Golden trout</dt>
  <dd>The golden trout is a beautifully colored fish...</dd>
  <dt>Rainbowfish</dt>
  <dd>The rainbowfish is a tropical fish known...</dd>
  <dt>Suckerfish</dt>
  <dd>The suckerfish is a curious fish that...</dd>
</List>
`,language:"jsx"}),`
`,i(r,{code:`
// With \`itemList\` data prop
const fishDescriptions = [
  {
    term: "Mahi-mahi",
    description: "The mahi-mahi is an ocean fish known..."
  },
  {
    term: "Golden trout",
    description: "The golden trout is a beautifully colored fish..."
  },
  {
    term: "Rainbowfish",
    description: "The rainbowfish is a tropical fish known..."
  },
  {
    term: "Suckerfish"
    description: "he suckerfish is a curious fish that..."
  }
];
// ...
<List listItems={fishDescriptions} title="Animal Crossing Fish" type="dl" />
`,language:"jsx"}),`
`,i(o,{of:b}),`
`,i(e.h2,{id:"changelog",children:"Changelog"}),`
`,i(L,{changelogData:y})]})}function Q(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?i(e,Object.assign({},t,{children:i(h,t)})):h(t)}export{Q as default};
//# sourceMappingURL=List-ab6e67f6.js.map
