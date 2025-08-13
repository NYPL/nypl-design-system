import{j as e,u as h,M as a,L as i,bv as x,C as t,bw as j,S as r,b2 as l}from"./iframe-CFLVJZOZ.js";import{C as p}from"./ComponentChangelogTable-DvY0SxTs.js";import{S as d,W as o,F as m,D as f}from"./StyledList.stories-C1bSI1Mu.js";const y=[{date:"2024-07-25",version:"3.2.0",type:"Update",affects:["Functionality"],notes:["Exports the `StyledListTextSizes` type."]},{date:"2024-03-14",version:"3.0.0",type:"Update",affects:["Styles"],notes:["Chakra 2.8 update."]}],b=[e.jsxs(e.Fragment,{children:["FULL TITLE:"," ",e.jsxs("i",{children:['"...and for the ',e.jsx("b",{children:"City of New York"}),'"']})]}),e.jsxs(e.Fragment,{children:["ALTERNATIVE TITLES:"," ",e.jsxs("i",{children:['"...Society of ',e.jsx("b",{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),e.jsxs(e.Fragment,{children:["SUBJECTS:"," ",e.jsxs("i",{children:['"...',e.jsx("b",{children:"City of New York"}),', in the"']})," ","+ 2 more"]})];function c(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...h(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"styledlist",children:"StyledList"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component Version"}),e.jsx(n.th,{children:"DS Version"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Added"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1.3.0"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Latest"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"3.2.0"})})]})]})]}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#overview",target:"_self",children:"Overview"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#component-props",target:"_self",children:"Component Props"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#accessibility",target:"_self",children:"Accessibility"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#font-size",target:"_self",children:"Font Size"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#styledlist-children",target:"_self",children:"StyledList Children"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(i,{href:"#changelog",target:"_self",children:"Changelog"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(x,{of:d}),`
`,e.jsx(n.h2,{id:"component-props",children:"Component Props"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(j,{of:o}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Internally, the ",e.jsx(n.code,{children:"StyledList"}),` component implements native HTML markup for
unordered lists. When data is passed into the `,e.jsx(n.code,{children:"listItems"}),` data prop, the
appropriate children `,e.jsx(n.code,{children:"li"})," HTML elements are used."]}),`
`,e.jsx(n.p,{children:"Resources:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/content/#lists",rel:"nofollow",children:"W3C WAI Content Structure Lists"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dequeuniversity.com/tips/list-markup",rel:"nofollow",children:"Deque University Appropriate Semantic Markup for Lists"})}),`
`]}),`
`,e.jsx(n.h2,{id:"font-size",children:"Font Size"}),`
`,e.jsxs(n.p,{children:["The font size can be changed through the ",e.jsx(n.code,{children:"textSize"}),` prop. The values are a
limited selection from the `,e.jsx(n.code,{children:"size"})," prop in the ",e.jsx(n.code,{children:"Text"})," component:"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'"default"'}),", ",e.jsx(n.code,{children:'"body1"'}),", ",e.jsx(n.code,{children:'"body2"'}),", ",e.jsx(n.code,{children:'"caption"'}),"."]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"deprecated-options",children:"Deprecated Options"}),`
`,e.jsx(n.p,{children:"The following values are still available, but they have been deprecated:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'"tag"'}),", ",e.jsx(n.code,{children:'"mini"'}),"."]}),`
`,e.jsx(t,{of:f}),`
`,e.jsx(n.h2,{id:"styledlist-children",children:"StyledList Children"}),`
`,e.jsx(n.h3,{id:"li-children",children:"li children"}),`
`,e.jsxs(n.p,{children:["Pass in ",e.jsx(n.code,{children:"<li>"})," children elements as you normally would for the ",e.jsx(n.code,{children:"<ul"}),"> element."]}),`
`,e.jsx(r,{code:`
// With \`li\` elements
<StyledList>
<li>
  FULL TITLE: <i>"...and for the <b>City of New York</b>"</i>
</li>
<li>
  ALTERNATIVE TITLES: <i>"...Society of <b>New York</b> delivered at..."</i> + 1 more
</li>
<li>SUBJECTS: <i>"...<b>City of New York</b>, in the"</i> + 2 more</li>
</StyledList>
`,language:"jsx"}),`
`,e.jsxs(l,{children:[e.jsxs("li",{children:["FULL TITLE:"," ",e.jsxs("i",{children:['"...and for the ',e.jsx("b",{children:"City of New York"}),'"']})]}),e.jsxs("li",{children:["ALTERNATIVE TITLES:"," ",e.jsxs("i",{children:['"...Society of ',e.jsx("b",{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),e.jsxs("li",{children:["SUBJECTS:"," ",e.jsxs("i",{children:['"...',e.jsx("b",{children:"City of New York"}),', in the"']})," ","+ 2 more"]})]}),`
`,e.jsx(n.h3,{id:"listitems-prop",children:"listItems prop"}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"<li>"})," elements cannot be passed as children to the ",e.jsx(n.code,{children:"StyledList"}),` component,
an array with data can be passed into the `,e.jsx(n.code,{children:"listItems"}),` prop. Note: either
children elements or the `,e.jsx(n.code,{children:"listItems"})," prop should be passed but not both."]}),`
`,e.jsxs(n.p,{children:["Data in the ",e.jsx(n.code,{children:"listItems"}),` prop array can be JSX Elements or strings. The
`,e.jsx(n.code,{children:"StyledList"})," component will render the data as ",e.jsx(n.code,{children:"li"}),` elements, so there is no
need to add them in the `,e.jsx(n.code,{children:"listItems"})," array. ",e.jsxs(n.em,{children:["If ",e.jsx(n.code,{children:"li"}),` elements wrap the data in the
`,e.jsx(n.code,{children:"listItems"})," array, they will be rendered as nested ",e.jsx(n.code,{children:"li"}),` elements and incorrectly
render two styled borders instead of the desired single border.`]})]}),`
`,e.jsx(r,{code:`
// With \`listItems\` data prop
const listItems = [
<>FULL TITLE: <i>"...and for the <b>City of New York</b>"</i></>,
<>ALTERNATIVE TITLES: <i>"...Society of <b>New York</b> delivered at..."</i> + 1 more</>,
<>SUBJECTS: <i>"...<b>City of New York</b>, in the"</i> + 2 more</>
];
<StyledList listItems={listItems} />
`,language:"jsx"}),`
`,`
`,e.jsx(l,{listItems:b}),`
`,e.jsx(n.h2,{id:"changelog",children:"Changelog"}),`
`,e.jsx(p,{changelogData:y})]})}function T(s={}){const{wrapper:n}={...h(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{T as default,b as listItems};
