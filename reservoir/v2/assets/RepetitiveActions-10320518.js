import{j as n,a as i,F as s}from"./jsx-runtime-fdf4db99.js";import{M as d,b as l}from"./index-445595fc.js";import{L as r}from"./Link-24c1437a.js";import{u as o}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./chakra-ui-layout.esm-e0dbb94e.js";import"./Icon-4eeffe51.js";function a(t){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",p:"p",code:"code",h3:"h3",h4:"h4",a:"a"},o(),t.components);return i(s,{children:[n(d,{title:"Accessibility Guide/Repetitive Actions"}),`
`,n(e.h1,{id:"repetitive-actions",children:"Repetitive Actions"}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(r,{href:"#general-information",target:"_self",children:"General Information"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#unique-button-labels-and-link-text",target:"_self",children:"Unique Button Labels and Link Text"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#nypl-patterns",target:"_self",children:"NYPL Patterns"}),`
`]}),`
`,i(e.li,{children:[`
`,n(r,{href:"#resources",target:"_self",children:"Resources"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"general-information",children:"General Information"}),`
`,n(e.p,{children:`To navigate a website, screen reader users often tab through buttons and links
on a page or they simply pull up a list of all buttons and links on the page.
When button labels and link text are not unique, it becomes difficult for these
users to determine the purpose or destination of the button or link. For
example, if you have multiple "read more" links on a page, these links are not
descriptive of their destination without the user having to examine the
surrounding content of each link.`}),`
`,n(e.h2,{id:"unique-button-labels-and-link-text",children:"Unique Button Labels and Link Text"}),`
`,n(e.p,{children:`Button labels and link text should generally be unique on any given page,
primarily to aid navigation for screen reader users.`}),`
`,n(e.p,{children:`In cases where the visible text cannot be changed, additional context can be
provided for screen reader users in several ways, including:`}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:`adding additional text within the button or link and hiding it off-screen so
sighted users will not perceive it, but it will be picked up by screen reader
software`}),`
`,n(e.li,{children:"using aria-label to override the visible text"}),`
`,n(e.li,{children:`using aria-labelledby to override the visible text by referencing both the
link itself and another element that will add more descriptive text`}),`
`]}),`
`,n(e.p,{children:'For example, a link that is visibly titled "Read more" can:'}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["include ",n(e.code,{children:'<span class="sr-only">about jobs</span>'}),` after the visible text
within the link where `,n(e.code,{children:"sr-only"}),` is a custom class with styles to position the
`,n(e.code,{children:"<span>"})," element off-screen"]}),`
`,i(e.li,{children:["add the ",n(e.code,{children:"aria-label"})," attribute with complete descriptive text"]}),`
`,i(e.li,{children:["add the ",n(e.code,{children:"aria-labelledby"}),` attribute with references to multiple element IDs,
including the link itself and another more descriptive piece of text, such as
a nearby heading, resulting in a label such as "read more about jobs"`]}),`
`]}),`
`,n(e.h3,{id:"examples",children:"Examples:"}),`
`,n(e.h4,{id:"sr-only",children:"sr-only"}),`
`,n(l,{code:`
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
`,n(e.h4,{id:"aria-label",children:"aria-label"}),`
`,n(l,{code:`
<a href="..." id="link1" aria-label="read more about jobs">
  Read more
</a>
`,language:"html"}),`
`,n(e.h4,{id:"aria-labelledby",children:"aria-labelledby"}),`
`,n(l,{code:`
<h2 id="jobsheading">Jobs</h2>
...
<a href="..." id="link1" aria-labelledby="link1 jobsheading">
  Read more
</a>
`,language:"html"}),`
`,n(e.h2,{id:"nypl-patterns",children:"NYPL Patterns"}),`
`,n(e.p,{children:"TBD"}),`
`,n(e.h2,{id:"resources",children:"Resources:"}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Scott O'Hara Blog: Inclusively Hidden"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.washington.edu/accessibility/checklist/links-buttons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"University of Washington: Links and Buttons"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.washington.edu/accessibility/websites/links-buttons/",target:"_blank",rel:"nofollow noopener noreferrer",children:"University of Washington: Links and Buttons on Websites"})}),`
`]})]})}function I(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n(e,Object.assign({},t,{children:n(a,t)})):a(t)}export{I as default};
//# sourceMappingURL=RepetitiveActions-10320518.js.map
