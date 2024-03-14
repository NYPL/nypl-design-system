import{j as e,a as r,F as c}from"./jsx-runtime-fdf4db99.js";import{M as l,C as a,b as s}from"./index-445595fc.js";import{H as p}from"./Heading-7eebc756.js";import{L as m}from"./Link-24c1437a.js";import{u as h}from"./index-09eae0a8.js";import{F as o,B as i,V as b,A as g}from"./chakra-ui-layout.esm-e0dbb94e.js";import"./index-0cbcd92a.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-da8f5748.js";import"../sb-preview/runtime.js";import"./index-42773b54.js";import"./extends-98964cd2.js";import"./isNativeReflectConstruct-2a967270.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./doctrine-33c8ee8e.js";import"./index-314a82e0.js";import"./index-11d98b33.js";import"./index-356e4a49.js";import"./index-8f383b84.js";import"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import"./Text-d88b2f7a.js";import"./Icon-4eeffe51.js";function d(t){const n=Object.assign({h1:"h1",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",p:"p",a:"a",h2:"h2"},h(),t.components);return r(c,{children:[e(l,{title:"Components/Chakra Exports/Layout/Flex"}),`
`,e(n.h1,{id:"flex",children:"Flex"}),`
`,r(n.table,{children:[e(n.thead,{children:r(n.tr,{children:[e(n.th,{children:"Component Version"}),e(n.th,{children:"DS Version"})]})}),r(n.tbody,{children:[r(n.tr,{children:[e(n.td,{children:"Added"}),e(n.td,{children:e(n.code,{children:"0.25.10"})})]}),r(n.tr,{children:[e(n.td,{children:"Latest"}),e(n.td,{children:e(n.code,{children:"0.25.10"})})]})]})]}),`
`,r(n.p,{children:["Note: This needs the use of the ",e(n.code,{children:"DSProvider"}),` component. See the
`,e(n.a,{href:"../?path=/docs/chakra-ui--docs#dsprovider",children:"Chakra UI docs"})," for more information."]}),`
`,r(n.p,{children:["This component is directly exported from Chakra UI. The ",e(n.code,{children:"Flex"}),` component is
useful for simple layouts and can be used along with Chakra's `,e(n.code,{children:"Spacer"}),` component.
The combination can be used to create a container where the children span the
entire width of the container.`]}),`
`,r(n.p,{children:[`Details about available props and related child components can be found on the
`,e(n.a,{href:"https://chakra-ui.com/docs/layout/flex",target:"_blank",rel:"nofollow noopener noreferrer",children:"Flex component"})," page on the Chakra UI site."]}),`
`,e(a,{children:r(o,{alignItems:"baseline",children:[e(i,{w:"20",h:"20",bg:"brand.primary"}),e(i,{w:"20",h:"20",bg:"brand.secondary"}),e(i,{w:"20",h:"20",bg:"brand.primary"}),e(i,{w:"20",h:"20",bg:"brand.secondary"}),e(i,{w:"20",h:"20",bg:"brand.primary"})]})}),`
`,e(n.h2,{id:"examples",children:"Examples"}),`
`,r(n.p,{children:["Use the ",e(n.code,{children:"justify"})," prop to move the children around."]}),`
`,e(a,{children:r(b,{align:"stretch",children:[r("div",{children:[r("p",{children:[e(n.code,{children:"justify"}),' set to "center"']}),r(o,{alignItems:"baseline",justify:"center",children:[e(i,{w:"20",h:"20",bg:"brand.primary"}),e(i,{w:"20",h:"20",bg:"brand.secondary"}),e(i,{w:"20",h:"20",bg:"brand.primary"}),e(i,{w:"20",h:"20",bg:"brand.secondary"}),e(i,{w:"20",h:"20",bg:"brand.primary"})]})]}),r("div",{children:[r("p",{children:[e(n.code,{children:"justify"}),' set to "space-between"']}),r(o,{alignItems:"baseline",justify:"space-between",children:[e(i,{w:"20",h:"20",bg:"brand.primary"}),e(i,{w:"20",h:"20",bg:"brand.secondary"}),e(i,{w:"20",h:"20",bg:"brand.primary"}),e(i,{w:"20",h:"20",bg:"brand.secondary"}),e(i,{w:"20",h:"20",bg:"brand.primary"})]})]})]})}),`
`,e(n.h2,{id:"with-spacer",children:"With Spacer"}),`
`,r(n.p,{children:[`A common use-case is displaying a row with two children where the first aligns
left and the second aligns right. Add the `,e(n.code,{children:"Spacer"}),` component between the children.
This is similar to setting `,e(n.code,{children:'justify="space-between"'})," on the ",e(n.code,{children:"Flex"}),` parent but
the `,e(n.code,{children:"Spacer"})," component is more flexible for most situations."]}),`
`,e(a,{children:r(o,{alignItems:"baseline",children:[e(p,{id:"row-heading",level:"h3",children:e(n.p,{children:"Heading"})}),e(g,{}),e(m,{href:"#viewmore",type:"forwards",children:e(n.p,{children:"View more"})})]})}),`
`,e(s,{code:`
<Flex alignItems="baseline">
  <Heading id="row-heading" level="h3">
    Heading
  </Heading>
  <Spacer />
  <Link href="#viewmore" type="forwards">
    View more
  </Link>
</Flex>
`,language:"jsx"})]})}function B(t={}){const{wrapper:n}=Object.assign({},h(),t.components);return n?e(n,Object.assign({},t,{children:e(d,t)})):d(t)}export{B as default};
//# sourceMappingURL=Flex-8ca10488.js.map
