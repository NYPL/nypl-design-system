import{j as i,a as n,F as a}from"./jsx-runtime-09ad29cb.js";import{M as p,D as m,C as s,A as f,b as d}from"./index-5d3bb37f.js";import{L as o,W as l,D as u,a as b,b as L}from"./List.stories-b601406b.js";import{L as r}from"./Link-0ed02cf7.js";import{u as c}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./List-b2e63895.js";import"./Heading-2ec2ea62.js";import"./Icon-6616a4b9.js";function h(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",em:"em",h3:"h3"},c(),t.components);return n(a,{children:[i(p,{of:o}),`
`,i(e.h1,{id:"list",children:"List"}),`
`,n(e.table,{children:[i(e.thead,{children:n(e.tr,{children:[i(e.th,{children:"Component Version"}),i(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[i(e.td,{children:"Added"}),i(e.td,{children:i(e.code,{children:"0.7.0"})})]}),n(e.tr,{children:[i(e.td,{children:"Latest"}),i(e.td,{children:i(e.code,{children:"1.5.3"})})]})]})]}),`
`,i(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,i(r,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,n(e.li,{children:[`
`,i(r,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,n(e.li,{children:[`
`,i(r,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,n(e.li,{children:[`
`,i(r,{href:"#description-list",target:"_self",children:"Description List"}),`
`]}),`
`,n(e.li,{children:[`
`,i(r,{href:"#description-list-of-links",target:"_self",children:"Description List of Links"}),`
`]}),`
`,n(e.li,{children:[`
`,i(r,{href:"#lists-with-data-props",target:"_self",children:"Lists with Data Props"}),`
`]}),`
`]}),`
`,i(e.h2,{id:"overview",children:"Overview"}),`
`,i(m,{of:o}),`
`,i(s,{of:l}),`
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
`,i(d,{code:`
<List type="dl">
  <dt>Term</dt>
  <dd>Description</dd>
</List>
`,language:"jsx"}),`
`,i(s,{of:u}),`
`,i(e.h2,{id:"description-list-of-links",children:"Description List of Links"}),`
`,n(e.p,{children:["An example with HTML elements inside of the ",i(e.code,{children:"dd"})," elements."]}),`
`,i(s,{of:b}),`
`,i(e.h2,{id:"lists-with-data-props",children:"Lists with Data Props"}),`
`,n(e.p,{children:["If ",i(e.code,{children:"li"})," or ",i(e.code,{children:"dt"}),"/",i(e.code,{children:"dd"})," elements cannot be passed as children to the ",i(e.code,{children:"List"}),` element,
an array with data can be passed into the `,i(e.code,{children:"listItems"}),` prop. Note: either
children elements or the `,i(e.code,{children:"listItems"})," prop should be passed but not both."]}),`
`,i(e.h3,{id:"unordered-and-ordered",children:"Unordered and Ordered"}),`
`,n(e.p,{children:["For lists of type ",i(e.code,{children:'"ul"'})," (unorderd) or ",i(e.code,{children:'"ol"'})," (ordered), ",i(e.code,{children:"li"}),` list item elements
can be passed as children. If that's not possible but the data to render is
stored as an array of strings, then that data array can be passed into `,i(e.code,{children:"listItems"}),"."]}),`
`,i(d,{code:`
// With \`li\` elements
<List type={ul}>
  <li>Mahi-mahi</li>
  <li>Golden trout</li>
  <li>Rainbowfish</li>
  <li>Suckerfish</li>
</List>
`,language:"jsx"}),`
`,i(d,{code:`
// With \`itemList\` data prop
const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
<List type={ul} listItems={fishArray} />
`,language:"jsx"}),`
`,i(e.h3,{id:"description",children:"Description"}),`
`,n(e.p,{children:["For lists of type ",i(e.code,{children:'"dl"'})," (description), ",i(e.code,{children:"dt"})," and ",i(e.code,{children:"dd"}),` elements can be
passed as children. If that's not possible but the data to render is stored as
an array of objects, then that data array can be passed into `,i(e.code,{children:"listItems"}),`. The
object must have two keys, `,i(e.code,{children:"term"})," and ",i(e.code,{children:"description"}),"."]}),`
`,i(d,{code:`
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
`,i(d,{code:`
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
`,i(s,{of:L})]})}function V(t={}){const{wrapper:e}=Object.assign({},c(),t.components);return e?i(e,Object.assign({},t,{children:i(h,t)})):h(t)}export{V as default};
//# sourceMappingURL=List-e22548ae.js.map
