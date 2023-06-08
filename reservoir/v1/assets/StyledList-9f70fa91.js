import{a as n,F as l,j as i}from"./jsx-runtime-09ad29cb.js";import{M as m,D as f,C as o,A as b,b as d}from"./index-5d3bb37f.js";import{S as c}from"./StyledList-ad1bf317.js";import{S as h,W as s,F as y}from"./StyledList.stories-8eb3732e.js";import{L as r}from"./Link-0ed02cf7.js";import{u as p}from"./index-a14fc4fc.js";import"./index-f2bd0723.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-359c5387.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-86fba1ca.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-22f77b05.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-944fe3e7.js";import"./index-0a26bc51.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./index-b629ee11.js";import"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import"./chakra-ui-layout.esm-b2fa9d31.js";import"./List-b2e63895.js";import"./Heading-2ec2ea62.js";import"./index-6148c31a.js";import"./Icon-6616a4b9.js";const L=[n(l,{children:["FULL TITLE:"," ",n("i",{children:['"...and for the ',i("b",{children:"City of New York"}),'"']})]}),n(l,{children:["ALTERNATIVE TITLES:"," ",n("i",{children:['"...Society of ',i("b",{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),n(l,{children:["SUBJECTS:"," ",n("i",{children:['"...',i("b",{children:"City of New York"}),', in the"']})," ","+ 2 more"]})];function a(t){const e=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",h2:"h2",ul:"ul",li:"li",p:"p",a:"a",h3:"h3",i:"i",b:"b",em:"em"},p(),t.components);return n(l,{children:[i(m,{of:h}),`
`,i(e.h1,{id:"styledlist",children:"StyledList"}),`
`,n(e.table,{children:[i(e.thead,{children:n(e.tr,{children:[i(e.th,{children:"Component Version"}),i(e.th,{children:"DS Version"})]})}),n(e.tbody,{children:[n(e.tr,{children:[i(e.td,{children:"Added"}),i(e.td,{children:i(e.code,{children:"1.3.0"})})]}),n(e.tr,{children:[i(e.td,{children:"Latest"}),i(e.td,{children:i(e.code,{children:"1.5.3"})})]})]})]}),`
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
`,i(r,{href:"#font-size",target:"_self",children:"Font Size"}),`
`]}),`
`,n(e.li,{children:[`
`,i(r,{href:"#styledlist-children",target:"_self",children:"StyledList Children"}),`
`]}),`
`]}),`
`,i(e.h2,{id:"overview",children:"Overview"}),`
`,i(f,{of:h}),`
`,i(e.h2,{id:"component-props",children:"Component Props"}),`
`,i(o,{of:s}),`
`,i(b,{of:s}),`
`,i(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n(e.p,{children:["Internally, the ",i(e.code,{children:"StyledList"}),` component implements native HTML markup for
unordered lists. When data is passed into the `,i(e.code,{children:"listItems"}),` data prop, the
appropriate children `,i(e.code,{children:"li"})," HTML elements are used."]}),`
`,i(e.p,{children:"Resources:"}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:i(e.a,{href:"https://www.w3.org/WAI/tutorials/page-structure/content/#lists",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C WAI Content Structure Lists"})}),`
`,i(e.li,{children:i(e.a,{href:"https://dequeuniversity.com/tips/list-markup",target:"_blank",rel:"nofollow noopener noreferrer",children:"Deque University Appropriate Semantic Markup for Lists"})}),`
`]}),`
`,i(e.h2,{id:"font-size",children:"Font Size"}),`
`,n(e.p,{children:["The font size can be changed through the ",i(e.code,{children:"textSize"}),` prop. The values are the same
as the `,i(e.code,{children:"size"})," prop in the ",i(e.code,{children:"Text"})," component. This includes ",i(e.code,{children:'"caption"'}),", ",i(e.code,{children:'"default"'}),`,
`,i(e.code,{children:'"mini"'}),", and ",i(e.code,{children:'"tag"'}),"."]}),`
`,i(o,{of:y}),`
`,i(e.h2,{id:"styledlist-children",children:"StyledList Children"}),`
`,i(e.h3,{id:"li-children",children:"li children"}),`
`,n(e.p,{children:["Pass in ",i(e.code,{children:"<li>"})," children elements as you normally would for the ",i(e.code,{children:"<ul"}),"> element."]}),`
`,i(d,{code:`
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
`,n(c,{children:[n(e.li,{children:["FULL TITLE:"," ",n(e.i,{children:['"...and for the ',i(e.b,{children:"City of New York"}),'"']})]}),n(e.li,{children:["ALTERNATIVE TITLES:"," ",n(e.i,{children:['"...Society of ',i(e.b,{children:"New York"}),' delivered at..."']})," ","+ 1 more"]}),n(e.li,{children:["SUBJECTS:"," ",n(e.i,{children:['"...',i(e.b,{children:"City of New York"}),', in the"']})," ","+ 2 more"]})]}),`
`,i(e.h3,{id:"listitems-prop",children:"listItems prop"}),`
`,n(e.p,{children:["If ",i(e.code,{children:"<li>"})," elements cannot be passed as children to the ",i(e.code,{children:"StyledList"}),` component,
an array with data can be passed into the `,i(e.code,{children:"listItems"}),` prop. Note: either
children elements or the `,i(e.code,{children:"listItems"})," prop should be passed but not both."]}),`
`,n(e.p,{children:["Data in the ",i(e.code,{children:"listItems"}),` prop array can be JSX Elements or strings. The
`,i(e.code,{children:"StyledList"})," component will render the data as ",i(e.code,{children:"li"}),` elements, so there is no
need to add them in the `,i(e.code,{children:"listItems"})," array. ",n(e.em,{children:["If ",i(e.code,{children:"li"}),` elements wrap the data in the
`,i(e.code,{children:"listItems"})," array, they will be rendered as nested ",i(e.code,{children:"li"}),` elements and incorrectly
render two styled borders instead of the desired single border.`]})]}),`
`,i(d,{code:`
// With \`listItems\` data prop
const listItems = [
  <>FULL TITLE: <i>"...and for the <b>City of New York</b>"</i></>,
  <>ALTERNATIVE TITLES: <i>"...Society of <b>New York</b> delivered at..."</i> + 1 more</>,
  <>SUBJECTS: <i>"...<b>City of New York</b>, in the"</i> + 2 more</>
];
<StyledList listItems={listItems} />
`,language:"jsx"}),`
`,`
`,i(c,{listItems:L})]})}function X(t={}){const{wrapper:e}=Object.assign({},p(),t.components);return e?i(e,Object.assign({},t,{children:i(a,t)})):a(t)}export{X as default,L as listItems};
//# sourceMappingURL=StyledList-9f70fa91.js.map
