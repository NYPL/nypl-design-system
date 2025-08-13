import{u as a,j as e,M as r,L as t,S as s}from"./iframe-CFLVJZOZ.js";function l(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Accessibility Guide/Repetitive Actions"}),`
`,e.jsx(n.h1,{id:"repetitive-actions",children:"Repetitive Actions"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#unique-button-labels-and-link-text",target:"_self",children:"Unique Button Labels and Link Text"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"general-information",children:"General Information"}),`
`,e.jsx(n.p,{children:`To navigate a website, screen reader users often tab through buttons and links
on a page or they simply pull up a list of all buttons and links on the page.
When button labels and link text are not unique, it becomes difficult for these
users to determine the purpose or destination of the button or link. For
example, if you have multiple "read more" links on a page, these links are not
descriptive of their destination without the user having to examine the
surrounding content of each link.`}),`
`,e.jsx(n.h2,{id:"unique-button-labels-and-link-text",children:"Unique Button Labels and Link Text"}),`
`,e.jsx(n.p,{children:`Button labels and link text should generally be unique on any given page,
primarily to aid navigation for screen reader users.`}),`
`,e.jsx(n.p,{children:`In cases where the visible text cannot be changed, additional context can be
provided for screen reader users in several ways, including:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`adding additional text within the button or link and hiding it off-screen so
sighted users will not perceive it, but it will be picked up by screen reader
software`}),`
`,e.jsx(n.li,{children:"using aria-label to override the visible text"}),`
`,e.jsx(n.li,{children:`using aria-labelledby to override the visible text by referencing both the
link itself and another element that will add more descriptive text`}),`
`]}),`
`,e.jsx(n.p,{children:'For example, a link that is visibly titled "Read more" can:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["include ",e.jsx(n.code,{children:'<span class="sr-only">about jobs</span>'}),` after the visible text
within the link where `,e.jsx(n.code,{children:"sr-only"}),` is a custom class with styles to position the
`,e.jsx(n.code,{children:"<span>"})," element off-screen"]}),`
`,e.jsxs(n.li,{children:["add the ",e.jsx(n.code,{children:"aria-label"})," attribute with complete descriptive text"]}),`
`,e.jsxs(n.li,{children:["add the ",e.jsx(n.code,{children:"aria-labelledby"}),` attribute with references to multiple element IDs,
including the link itself and another more descriptive piece of text, such as
a nearby heading, resulting in a label such as "read more about jobs"`]}),`
`]}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples:"}),`
`,e.jsx(n.h4,{id:"sr-only",children:"sr-only"}),`
`,e.jsx(s,{code:`
<style>
.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
  width: 1px;
  word-wrap: normal;
}
</style>

<a href="..." id="link1">
Read more <span class="sr-only">about jobs</span>
</a>
`,language:"html"}),`
`,e.jsx(n.h4,{id:"aria-label",children:"aria-label"}),`
`,e.jsx(s,{code:`
<a href="..." id="link1" aria-label="read more about jobs">
Read more
</a>
`,language:"html"}),`
`,e.jsx(n.h4,{id:"aria-labelledby",children:"aria-labelledby"}),`
`,e.jsx(s,{code:`
<h2 id="jobsheading">Jobs</h2>
...
<a href="..." id="link1" aria-labelledby="link1 jobsheading">
Read more
</a>
`,language:"html"}),`
`,e.jsx(n.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,e.jsx(n.p,{children:"TBD"}),`
`,e.jsx(n.h2,{id:"resources",children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html",rel:"nofollow",children:"Scott O'Hara Blog: Inclusively Hidden"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.washington.edu/accessibility/checklist/links-buttons/",rel:"nofollow",children:"University of Washington: Links and Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.washington.edu/accessibility/websites/links-buttons/",rel:"nofollow",children:"University of Washington: Links and Buttons on Websites"})}),`
`]})]})}function d(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{d as default};
