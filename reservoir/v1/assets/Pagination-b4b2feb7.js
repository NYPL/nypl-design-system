import{j as n,a as t,F as s}from"./jsx-runtime-09ad29cb.js";import{M as p,D as g,b as r,C as o,A as m}from"./index-42243e0e.js";import{P as c,U as h,a as u,b as f}from"./Pagination.stories-bd519856.js";import{L as a}from"./Link-0ed02cf7.js";import{u as d}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-b32021bd.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./index-6148c31a.js";import"./Button-a3ea41e0.js";import"./Icon-6616a4b9.js";import"./chakra-ui-hooks.esm-02e82f78.js";import"./chakra-ui-visually-hidden.esm-1c1b3639.js";import"./Pagination-f276063d.js";import"./List-b2e63895.js";import"./Heading-2ec2ea62.js";import"./utils-acca7d12.js";function l(i){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3"},d(),i.components);return t(s,{children:[n(p,{of:c}),`
`,n(e.h1,{id:"pagination",children:"Pagination"}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"Component Version"}),n(e.th,{children:"DS Version"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:"Added"}),n(e.td,{children:n(e.code,{children:"0.0.10"})})]}),t(e.tr,{children:[n(e.td,{children:"Latest"}),n(e.td,{children:n(e.code,{children:"1.5.0"})})]})]})]}),`
`,n(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,n(a,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#pagination-with-url-updates",target:"_self",children:"Pagination with URL Updates"}),`
`]}),`
`,t(e.li,{children:[`
`,n(a,{href:"#pagination-with-unchanging-url",target:"_self",children:"Pagination with Unchanging URL"}),`
`]}),`
`]}),`
`,n(e.h2,{id:"overview",children:"Overview"}),`
`,n(g,{of:c}),`
`,t(e.p,{children:["The ",n(e.code,{children:"Pagination"}),` component helps navigate between pages of a multi-page
application. It is commonly used on a search results page. Update the `,n(e.code,{children:"pageCount"}),`
prop in the Controls to explore this component with many or few pages.`]}),`
`,n(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t(e.p,{children:["Internally, the ",n(e.code,{children:"Pagination"})," component is implemented with a ",n(e.code,{children:"<nav>"}),` element with
an `,n(e.code,{children:"aria-label"})," attribute of ",n(e.code,{children:'"Pagination"'})," and an unordered ",n(e.code,{children:"<ul>"}),` element. This
component uses anchor `,n(e.code,{children:"<a>"}),` tags because it is navigating between URLs. In the
"unchanging URL" variation, each anchor tag has an `,n(e.code,{children:"href"}),` attribute with a value
of `,n(e.code,{children:'"#"'}),", because the URL is not changing."]}),`
`,n(e.p,{children:"Resources:"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://design-system.w3.org/components/pagination.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C Design System Pagination"})}),`
`,n(e.li,{children:n(e.a,{href:"https://www.a11ymatters.com/pattern/pagination/",target:"_blank",rel:"nofollow noopener noreferrer",children:"a11ymatters Accessible Pagination"})}),`
`]}),`
`,n(e.h2,{id:"pagination-with-url-updates",children:"Pagination with URL Updates"}),`
`,t(e.p,{children:[`In order to update the URL with a query parameter, the parent component must
declare and pass a `,n(e.code,{children:"getPageHref"})," function to the ",n(e.code,{children:"Pagination"}),` component. This
function takes a `,n(e.code,{children:"selectedPage"}),` number argument for the selected page and it
should return a string with the desired URL that the pagination links should go
to. Note that this will refresh the browser on every click.`]}),`
`,t(e.p,{children:["In the following example, the ",n(e.code,{children:"getPageHref"}),` function will compute a new URL that
has `,n(e.code,{children:"&page="}),` as a URL query. In your own application this query parameter can be
named anything but you have to pick up the value in the wrapper component.`]}),`
`,n(r,{code:`
// Example in a search results page.
const getPageHref = (selectedPage: number) => {
  // This should be updated for your router system, if any, including the
  // base or origin URL.
  return \`{location.origin}?q=celeste&page=\${selectedPage}\`;
};
`,language:"jsx"}),`
`,n(o,{of:h}),`
`,n(m,{of:h}),`
`,n(e.h2,{id:"pagination-with-unchanging-url",children:"Pagination with Unchanging URL"}),`
`,t(e.p,{children:["It is preferred to use the ",n(e.code,{children:"Pagination"})," component with the ",n(e.code,{children:"getPageHref"}),`
function passed as a prop and that the URL is updated whenever a page is
changed. However, the optional `,n(e.code,{children:"onPageChange"}),` prop is available in case URL
updating is not desired.`]}),`
`,t(e.p,{children:["In the following example, the ",n(e.code,{children:"onPageChange"}),` function gets the selected page as
its only function argument. This is computed internally in the `,n(e.code,{children:"Pagination"}),`
component through its own state.`]}),`
`,n(r,{code:`
// Example in a search results page.
const onPageChange = (selectedPage: number) => {
  console.log(\`Current page: \${selectedPage}\`);
  // Do what you need to with the \`currentPage\` value.
};
`,language:"jsx"}),`
`,n(o,{of:u}),`
`,n(e.h3,{id:"forcing-a-page-change-programmatically",children:"Forcing a Page Change Programmatically"}),`
`,t(e.p,{children:[`There may be circumstances when you want to programmatically force the page
number to change without the user explicitly requesting it (for example, if
you want a user to be brought back to page 1 after entering a new search term).
You can use the `,n(e.code,{children:"currentPage"})," prop to do this. Note, the ",n(e.code,{children:"currentPage"}),` prop can
only be used with the client-side, unchanging URL version of the `,n(e.code,{children:"Pagination"}),`
component, and in combination with the `,n(e.code,{children:"onPageChange"})," function."]}),`
`,t(e.p,{children:[`The following example shows that the user can be brought to page 1 without
clicking on the `,n(e.code,{children:"Pagination"})," component."]}),`
`,n(o,{of:f})]})}function B(i={}){const{wrapper:e}=Object.assign({},d(),i.components);return e?n(e,Object.assign({},i,{children:n(l,i)})):l(i)}export{B as default};
//# sourceMappingURL=Pagination-b4b2feb7.js.map
