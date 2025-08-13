import{u as o,j as e,M as d,S as i}from"./iframe-CFLVJZOZ.js";function t(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Hooks/useWindowSize"}),`
`,e.jsx(s.h1,{id:"usewindowsize",children:"useWindowSize"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Hook Version"}),e.jsx(s.th,{children:"DS Version"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Added"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"0.25.2"})})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Latest"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"0.25.2"})})]})]})]}),`
`,e.jsxs(s.p,{children:["This hook is based on ",e.jsx(s.a,{href:"https://usehooks-typescript.com/react-hook/use-window-size",rel:"nofollow",children:"Typescript hooks"}),`.
It returns an object with `,e.jsx(s.code,{children:"width"})," and ",e.jsx(s.code,{children:"height"}),` properties that can be used to
update a component's UI based on the size of the browser window.`]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(s.p,{children:["For an example implementation, view the ",e.jsxs(s.a,{href:"https://github.com/NYPL/nypl-design-system/blob/development/src/components/Tabs/Tabs.tsx",rel:"nofollow",children:[e.jsx(s.code,{children:"Tabs"})," component"]}),"."]}),`
`,e.jsx(i,{code:`
const { height, width } = useWindowSize();
`,language:"jsx"})]})}function r(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{r as default};
