import{j as e,a as r}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as T}from"./index-6148c31a.js";import{B as a,b as f}from"./Breadcrumbs-527e5d08.js";import{H as t}from"./Heading-7eebc756.js";import{B as n,V as D}from"./chakra-ui-layout.esm-e0dbb94e.js";const s=[{url:"#",text:"Parent"},{url:"#",text:"Child"},{url:"#",text:"Grandchild"}],v=[{url:"#",text:"Parent with a Long Name"},{url:"#",text:"Child with an Even Longer Name"},{url:"#",text:"Grandchild with an Exceptionally Long Name"},{url:"#",text:"Great-Grandchild with the Longest Name That Will Wrap onto the Second Line of the Breadcrumb Component Under the Right Circumstances"}],H={title:"Components/Navigation/Breadcrumbs",component:a,decorators:[T],argTypes:{breadcrumbsData:{control:!1},breadcrumbsType:{table:{defaultValue:{summary:"whatsOn"}},control:{type:"select"},options:f},className:{control:!1},id:{control:!1}}},d={args:{breadcrumbsData:s,breadcrumbsType:"whatsOn",className:void 0,id:"breadcrumbs-id"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031"},jest:["Breadcrumbs.test.tsx"]}},o={render:()=>e(a,{breadcrumbsData:v})},c={render:()=>r(D,{align:"stretch",spacing:"l",children:[r(n,{children:[e(t,{level:"h3",size:"heading6",children:"Blogs"}),e(a,{breadcrumbsData:s,breadcrumbsType:"blogs"})]}),r(n,{children:[e(t,{level:"h3",size:"heading6",children:"Books and More"}),e(a,{breadcrumbsData:s,breadcrumbsType:"booksAndMore"})]}),r(n,{children:[e(t,{level:"h3",size:"heading6",children:"Connect"}),e(a,{breadcrumbsData:s,breadcrumbsType:"connect"})]}),r(n,{children:[e(t,{level:"h3",size:"heading6",children:"Education"}),e(a,{breadcrumbsData:s,breadcrumbsType:"education"})]}),r(n,{children:[e(t,{level:"h3",size:"heading6",children:"Locations"}),e(a,{breadcrumbsData:s,breadcrumbsType:"locations"})]}),r(n,{children:[e(t,{level:"h3",size:"heading6",children:"Research"}),e(a,{breadcrumbsData:s,breadcrumbsType:"research"})]}),r(n,{children:[e(t,{level:"h3",size:"heading6",children:"What's On"}),e(a,{breadcrumbsData:s,breadcrumbsType:"whatsOn"})]})]})};var i,b,m,l,u;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    breadcrumbsData,
    breadcrumbsType: "whatsOn",
    className: undefined,
    id: "breadcrumbs-id"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031"
    },
    jest: ["Breadcrumbs.test.tsx"]
  }
}`,...(m=(b=d.parameters)==null?void 0:b.docs)==null?void 0:m.source},description:{story:"Main Story for the Accordion component. This must contains the `args`\nand `parameters` properties in this object.",...(u=(l=d.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var h,p,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Breadcrumbs breadcrumbsData={breadcrumbsLongTextData} />
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var B,x,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Blogs
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="blogs" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Books and More
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="booksAndMore" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Connect
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="connect" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Education
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="education" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Locations
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="locations" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Research
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="research" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          What's On
        </Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="whatsOn" />
      </Box>
    </VStack>
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const w=["WithControls","LongText","ColorVariations"],N=Object.freeze(Object.defineProperty({__proto__:null,ColorVariations:c,LongText:o,WithControls:d,__namedExportsOrder:w,default:H},Symbol.toStringTag,{value:"Module"}));export{N as B,c as C,o as L,d as W};
//# sourceMappingURL=Breadcrumbs.stories-2a5dc022.js.map
