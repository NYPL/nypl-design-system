import{u as h,j as e,M as a,L as t,bv as c,C as d,bw as p,S as n}from"./iframe-D93LbwGv.js";import{C as x}from"./ComponentChangelogTable-Ck_3mwrR.js";import{L as r,W as o,D as j,a as f,b as m,c as u}from"./List.stories-DHCko3tr.js";import"./storybookUtils-BmTl87w5.js";const w=[{date:"2025-04-10",version:"3.6.0",type:"Update",affects:["Styles"],notes:['Updates the "dl" variant to use 2rem for column spacing and to set the width of the "term" columnm to be a full 250px for tablet and desktop viewports.']},{date:"2024-05-23",version:"3.1.4",type:"New Feature",affects:["Styles"],notes:["Adds `showRowDividers` prop to show/hide dividers between rows only for the description list variant."]},{date:"2024-03-28",version:"3.0.1",type:"Update",affects:["Styles","Accessibility"],notes:["List <ul> bullet color updated."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]},{date:"2023-12-07",version:"2.1.3",type:"Update",affects:["Accessibility","Documentation"],notes:["Updated the `title` prop to allow JSX to render custom heading elements for accessible heading hierarchy."]}];function l(i){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r}),`
`,e.jsx(s.h1,{id:"list",children:"List"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Component Version"}),e.jsx(s.th,{children:"DS Version"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Added"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"0.7.0"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Latest"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"3.6.0"})})]})]})]}),`
`,e.jsx(s.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{href:"#description-list",target:"_self",children:"Description List"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{href:"#lists-with-data-props",target:"_self",children:"Lists with Data Props"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(t,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(p,{of:o}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["Internally, the ",e.jsx(s.code,{children:"List"}),` component implements native HTML markup for unordered,
ordered, and description lists. This includes `,e.jsx(s.code,{children:"ul"}),", ",e.jsx(s.code,{children:"ol"}),", and ",e.jsx(s.code,{children:"dl"}),` elements.
When data is passed into the `,e.jsx(s.code,{children:"listItems"}),` data prop, the appropriate children
HTML elements are used. This includes `,e.jsx(s.code,{children:"li"}),` for unorder and ordered lists, and
`,e.jsx(s.code,{children:"dt"})," and ",e.jsx(s.code,{children:"dd"})," elements for description lists."]}),`
`,e.jsxs(s.p,{children:["The description type for the ",e.jsx(s.code,{children:"List"})," component is wrapped in a ",e.jsx(s.code,{children:"section"}),` element
with an `,e.jsx(s.code,{children:"h2"})," header. Keep that in mind when ordering headings on the page."]}),`
`,e.jsx(s.p,{children:"Resources:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/content/",rel:"nofollow",children:"W3C WAI Content Structure"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://dequeuniversity.com/tips/list-markup",rel:"nofollow",children:"Deque University Appropriate Semantic Markup for Lists"})}),`
`]}),`
`,e.jsx(s.h2,{id:"description-list",children:"Description List"}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:`Note: This element is officially called the "Description List" element in HTML5.
Before HTML5, it was called the "Definition List" element and some online resources
may still use this name. In the Reservoir Design System, we will use the
"Description List" name.`})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/html/H40.html",rel:"nofollow",children:"W3C Using description lists"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl",rel:"nofollow",children:"MDN dl: The Description List element"})}),`
`]}),`
`,e.jsxs(s.p,{children:["To render a description list, pass in ",e.jsx(s.code,{children:'"dl"'})," to the ",e.jsx(s.code,{children:"type"}),` prop. The optional
`,e.jsx(s.code,{children:"title"}),` prop will now render above the description list element. This type of
list renders `,e.jsx(s.code,{children:"dt"})," and ",e.jsx(s.code,{children:"dd"})," elements."]}),`
`,e.jsxs(s.p,{children:["By default, the ",e.jsx(s.code,{children:'"dl"'}),` description list will render row dividers between each
`,e.jsx(s.code,{children:"dt"}),"/",e.jsx(s.code,{children:"dd"})," pair. To remove the row dividers, pass ",e.jsx(s.code,{children:"false"}),` to the
`,e.jsx(s.code,{children:"showRowDividers"})," prop."]}),`
`,e.jsx(n,{code:`
<List type="dl">
<dt>Term</dt>
<dd>Description</dd>
</List>
`,language:"jsx"}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(s.h3,{id:"description-list-with-custom-headings",children:"Description List with Custom Headings"}),`
`,e.jsxs(s.p,{children:["The optional ",e.jsx(s.code,{children:"title"})," prop will render the description list's heading as an ",e.jsx(s.code,{children:"h2"}),`
element by default when the `,e.jsx(s.code,{children:"title"}),` value is a string. It's possible that the
`,e.jsx(s.code,{children:"h2"}),` element will not fit in an app's heading hierarchy. If this is the case,
`,e.jsx(s.code,{children:"title"})," can also take a ",e.jsx(s.code,{children:"JSX.Element"})," type value."]}),`
`,e.jsxs(s.p,{children:["In the following example, the heading is an ",e.jsx(s.code,{children:"h4"})," defined as:"]}),`
`,e.jsx(n,{code:`
const listHeading = <Heading level="h4">Middle-Earth Peoples</Heading>;
// ...

<List type="dl" title={listHeading}>
<dt>Balrogs</dt>
<dd>Demonic creatures of fire and shadow...</dd>
<dt>Dwarves</dt>
<dd>The race of Dwarves...</dd>
</List>
`,language:"jsx"}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(s.h3,{id:"description-list-of-links",children:"Description List of Links"}),`
`,e.jsxs(s.p,{children:["An example with HTML elements inside of the ",e.jsx(s.code,{children:"dd"})," elements."]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(s.h2,{id:"lists-with-data-props",children:"Lists with Data Props"}),`
`,e.jsxs(s.p,{children:["If ",e.jsx(s.code,{children:"li"})," or ",e.jsx(s.code,{children:"dt"}),"/",e.jsx(s.code,{children:"dd"})," elements cannot be passed as children to the ",e.jsx(s.code,{children:"List"}),` element,
an array with data can be passed into the `,e.jsx(s.code,{children:"listItems"}),` prop. Note: either
children elements or the `,e.jsx(s.code,{children:"listItems"})," prop should be passed but not both."]}),`
`,e.jsx(s.h3,{id:"unordered-and-ordered",children:"Unordered and Ordered"}),`
`,e.jsxs(s.p,{children:["For lists of type ",e.jsx(s.code,{children:'"ul"'})," (unorderd) or ",e.jsx(s.code,{children:'"ol"'})," (ordered), ",e.jsx(s.code,{children:"li"}),` list item elements
can be passed as children. If that's not possible but the data to render is
stored as an array of strings, then that data array can be passed into `,e.jsx(s.code,{children:"listItems"}),"."]}),`
`,e.jsx(n,{code:`
// With \`li\` elements
<List type={ul}>
<li>Mahi-mahi</li>
<li>Golden trout</li>
<li>Rainbowfish</li>
<li>Suckerfish</li>
</List>
`,language:"jsx"}),`
`,e.jsx(n,{code:`
// With \`itemList\` data prop
const fishArray = ["Mahi-mahi", "Golden trout", "Rainbowfish", "Suckerfish"];
<List type={ul} listItems={fishArray} />
`,language:"jsx"}),`
`,e.jsx(s.h3,{id:"description",children:"Description"}),`
`,e.jsxs(s.p,{children:["For lists of type ",e.jsx(s.code,{children:'"dl"'})," (description), ",e.jsx(s.code,{children:"dt"})," and ",e.jsx(s.code,{children:"dd"}),` elements can be
passed as children. If that's not possible but the data to render is stored as
an array of objects, then that data array can be passed into `,e.jsx(s.code,{children:"listItems"}),`. The
object must have two keys, `,e.jsx(s.code,{children:"term"})," and ",e.jsx(s.code,{children:"description"}),"."]}),`
`,e.jsx(n,{code:`
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
`,e.jsx(n,{code:`
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
`,e.jsx(d,{of:u}),`
`,e.jsx(s.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(x,{changelogData:w})]})}function v(i={}){const{wrapper:s}={...h(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(l,{...i})}):l(i)}export{v as default};
