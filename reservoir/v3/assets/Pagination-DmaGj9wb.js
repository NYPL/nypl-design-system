import{u as c,j as e,M as l,L as a,bv as d,S as s,C as i,bw as g}from"./iframe-CFLVJZOZ.js";import{C as p}from"./ComponentChangelogTable-DvY0SxTs.js";import{P as o,U as r,a as u,b as x}from"./Pagination.stories-CX9LZ716.js";const j=[{date:"2025-01-30",version:"3.5.3",type:"Update",affects:["Functionality"],notes:["Handling for 4 digit page counts"]},{date:"2025-01-16",version:"3.5.2",type:"Update",affects:["Styles"],notes:["New visual styles."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}];function h(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0.0.10"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.5.3"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#pagination-with-url-updates",target:"_self",children:"Pagination with URL Updates"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#pagination-with-unchanging-url",target:"_self",children:"Pagination with Unchanging URL"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(a,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(d,{of:o}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Pagination"}),` component helps navigate between pages of a multi-page
application. It is commonly used on a search results page. Update the `,e.jsx(n.code,{children:"pageCount"}),`
prop in the Controls to explore this component with many or few pages.`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Internally, the ",e.jsx(n.code,{children:"Pagination"})," component is implemented with a ",e.jsx(n.code,{children:"<nav>"}),` element with
an `,e.jsx(n.code,{children:"aria-label"})," attribute of ",e.jsx(n.code,{children:'"Pagination"'})," and an unordered ",e.jsx(n.code,{children:"<ul>"}),` element. This
component uses anchor `,e.jsx(n.code,{children:"<a>"}),` tags because it is navigating between URLs. In the
"unchanging URL" variation, each anchor tag has an `,e.jsx(n.code,{children:"href"}),` attribute with a value
of `,e.jsx(n.code,{children:'"#"'}),", because the URL is not changing."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design-system.w3.org/components/pagination.html",rel:"nofollow",children:"W3C Design System Pagination"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.a11ymatters.com/pattern/pagination/",rel:"nofollow",children:"a11ymatters Accessible Pagination"})}),`
`]}),`
`,e.jsx(n.h2,{id:"pagination-with-url-updates",children:"Pagination with URL Updates"}),`
`,e.jsxs(n.p,{children:[`In order to update the URL with a query parameter, the parent component must
declare and pass a `,e.jsx(n.code,{children:"getPageHref"})," function to the ",e.jsx(n.code,{children:"Pagination"}),` component. This
function takes a `,e.jsx(n.code,{children:"selectedPage"}),` number argument for the selected page and it
should return a string with the desired URL that the pagination links should go
to. Note that this will refresh the browser on every click.`]}),`
`,e.jsxs(n.p,{children:["In the following example, the ",e.jsx(n.code,{children:"getPageHref"}),` function will compute a new URL that
has `,e.jsx(n.code,{children:"&page="}),` as a URL query. In your own application this query parameter can be
named anything but you have to pick up the value in the wrapper component.`]}),`
`,e.jsx(s,{code:`
// Example in a search results page.
const getPageHref = (selectedPage: number) => {
// This should be updated for your router system, if any, including the
// base or origin URL.
return \`{location.origin}?q=celeste&page=\${selectedPage}\`;
};
`,language:"jsx"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(g,{of:r}),`
`,e.jsx(n.h2,{id:"pagination-with-unchanging-url",children:"Pagination with Unchanging URL"}),`
`,e.jsxs(n.p,{children:["It is preferred to use the ",e.jsx(n.code,{children:"Pagination"})," component with the ",e.jsx(n.code,{children:"getPageHref"}),`
function passed as a prop and that the URL is updated whenever a page is
changed. However, the optional `,e.jsx(n.code,{children:"onPageChange"}),` prop is available in case URL
updating is not desired.`]}),`
`,e.jsxs(n.p,{children:["In the following example, the ",e.jsx(n.code,{children:"onPageChange"}),` function gets the selected page as
its only function argument. This is computed internally in the `,e.jsx(n.code,{children:"Pagination"}),`
component through its own state.`]}),`
`,e.jsx(s,{code:`
// Example in a search results page.
const onPageChange = (selectedPage: number) => {
console.log(\`Current page: \${selectedPage}\`);
// Do what you need to with the \`currentPage\` value.
};
`,language:"jsx"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"forcing-a-page-change-programmatically",children:"Forcing a Page Change Programmatically"}),`
`,e.jsxs(n.p,{children:[`There may be circumstances when you want to programmatically force the page
number to change without the user explicitly requesting it (for example, if
you want a user to be brought back to page 1 after entering a new search term).
You can use the `,e.jsx(n.code,{children:"currentPage"})," prop to do this. Note, the ",e.jsx(n.code,{children:"currentPage"}),` prop can
only be used with the client-side, unchanging URL version of the `,e.jsx(n.code,{children:"Pagination"}),`
component, and in combination with the `,e.jsx(n.code,{children:"onPageChange"})," function."]}),`
`,e.jsxs(n.p,{children:[`The following example shows that the user can be brought to page 1 without
clicking on the `,e.jsx(n.code,{children:"Pagination"})," component."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(p,{changelogData:j})]})}function y(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{y as default};
