import{j as e,a as n,F as h}from"./jsx-runtime-fdf4db99.js";import{M as l,C as d,b as p}from"./index-445595fc.js";import{G as a,B as o,I as i}from"./chakra-ui-layout.esm-e0dbb94e.js";import{u as s}from"./index-09eae0a8.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";function c(t){const r=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",a:"a",h2:"h2"},s(),t.components);return n(h,{children:[e(l,{title:"Components/Chakra Exports/Layout/Grid"}),`
`,e(r.h1,{id:"grid",children:"Grid"}),`
`,n(r.table,{children:[e(r.thead,{children:n(r.tr,{children:[e(r.th,{children:"Component Version"}),e(r.th,{children:"DS Version"})]})}),n(r.tbody,{children:[n(r.tr,{children:[e(r.td,{children:"Added"}),e(r.td,{children:e(r.code,{children:"0.25.1"})})]}),n(r.tr,{children:[e(r.td,{children:"Latest"}),e(r.td,{children:e(r.code,{children:"0.25.1"})})]})]})]}),`
`,n(r.p,{children:["Note: This needs the use of the ",e(r.code,{children:"DSProvider"}),` component. See the
`,e(r.a,{href:"../?path=/docs/chakra-ui--docs#dsprovider",children:"Chakra UI docs"})," for more information."]}),`
`,n(r.p,{children:["This component is directly exported from Chakra UI. The ",e(r.code,{children:"Grid"}),` component is
useful for grid layouts and offers more complexity and formatting options than
the Reservoir Design System (DS) `,e(r.code,{children:"SimpleGrid"})," component. ",e(r.code,{children:"Grid"})," is ",e(r.code,{children:"Box"}),` with
`,e(r.code,{children:"display: grid"})," and it comes with helpful style shorthand. It renders a ",e(r.code,{children:"div"}),`
element.`]}),`
`,n(r.p,{children:[`Details about available props and related child components can be found on the
`,e(r.a,{href:"https://chakra-ui.com/docs/layout/grid",target:"_blank",rel:"nofollow noopener noreferrer",children:"Grid component"}),` page on the Chakra UI
site.`]}),`
`,e(d,{children:n(a,{templateColumns:"repeat(5, 1fr)",gap:"grid.default",children:[e(o,{w:"100%",h:"20",bg:"brand.primary"}),e(o,{w:"100%",h:"20",bg:"brand.secondary"}),e(o,{w:"100%",h:"20",bg:"brand.primary"}),e(o,{w:"100%",h:"20",bg:"brand.secondary"}),e(o,{w:"100%",h:"20",bg:"brand.primary"}),e(o,{w:"100%",h:"20",bg:"brand.secondary"}),e(o,{w:"100%",h:"20",bg:"brand.primary"}),e(o,{w:"100%",h:"20",bg:"brand.secondary"}),e(o,{w:"100%",h:"20",bg:"brand.primary"}),e(o,{w:"100%",h:"20",bg:"brand.secondary"})]})}),`
`,e(r.h2,{id:"complex-layouts-with-grid-child-components",children:"Complex Layouts with Grid Child Components"}),`
`,n(r.p,{children:[`In some layouts, you may need certain grid items to span a specific amount of
columns or rows instead of an even distribution. To achieve this, you need to
pass the `,e(r.code,{children:"colSpan"})," prop to the ",e(r.code,{children:"GridItem"}),` component to span across columns and
also pass the `,e(r.code,{children:"rowSpan"}),` component to span across rows. You also need to specify
the `,e(r.code,{children:"templateColumns"})," and ",e(r.code,{children:"templateRows"}),"."]}),`
`,e(d,{children:n(a,{height:"200px",templateRows:"repeat(2, 1fr)",templateColumns:"repeat(5, 1fr)",gap:"grid.default",children:[e(i,{rowSpan:2,colSpan:1,bg:"ui.link.primary"}),e(i,{colSpan:2,bg:"ui.success.primary"}),e(i,{colSpan:2,bg:"ui.success.secondary"}),e(i,{colSpan:4,bg:"ui.link.secondary"})]})}),`
`,e(p,{code:`
<Grid
  height="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap="grid.default"
>
  <GridItem rowSpan={2} colSpan={1} bg="ui.link.primary" />
  <GridItem colSpan={2} bg="ui.success.primary" />
  <GridItem colSpan={2} bg="ui.success.secondary" />
  <GridItem colSpan={4} bg="ui.link.secondary" />
</Grid>
`,language:"jsx"})]})}function R(t={}){const{wrapper:r}=Object.assign({},s(),t.components);return r?e(r,Object.assign({},t,{children:e(c,t)})):c(t)}export{R as default};
//# sourceMappingURL=Grid-a5c856e5.js.map
