import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as T}from"./index-6148c31a.js";import{B as r,b as f}from"./Breadcrumbs-983ea904.js";import{H as s}from"./Heading-2ec2ea62.js";import{B as o,V as D}from"./chakra-ui-layout.esm-b2fa9d31.js";const t=[{url:"#",text:"Parent"},{url:"#",text:"Child"},{url:"#",text:"Grandchild"}],w=[{url:"#",text:"Parent with a Long Name"},{url:"#",text:"Child with an Even Longer Name"},{url:"#",text:"Grandchild with an Exceptionally Long Name"},{url:"#",text:"Great-Grandchild with the Longest Name That Will Wrap onto the Second Line of the Breadcrumb Component Under the Right Circumstances"}],v={title:"Components/Navigation/Breadcrumbs",component:r,decorators:[T],argTypes:{breadcrumbsData:{control:!1},breadcrumbsType:{table:{defaultValue:{summary:"whatsOn"}},control:{type:"select"},options:f},className:{control:!1},id:{control:!1}}},n={args:{breadcrumbsData:t,breadcrumbsType:"whatsOn",className:void 0,id:"breadcrumbs-id"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=10766%3A1031"},jest:["Breadcrumbs.test.tsx"]}},c={render:()=>e(r,{breadcrumbsData:w})},d={render:()=>a(D,{align:"stretch",spacing:"l",children:[a(o,{children:[e(s,{level:"three",children:"Blogs"}),e(r,{breadcrumbsData:t,breadcrumbsType:"blogs"})]}),a(o,{children:[e(s,{level:"three",children:"Books and More"}),e(r,{breadcrumbsData:t,breadcrumbsType:"booksAndMore"})]}),a(o,{children:[e(s,{level:"three",children:"Education"}),e(r,{breadcrumbsData:t,breadcrumbsType:"education"})]}),a(o,{children:[e(s,{level:"three",children:"Locations"}),e(r,{breadcrumbsData:t,breadcrumbsType:"locations"})]}),a(o,{children:[e(s,{level:"three",children:"Research"}),e(r,{breadcrumbsData:t,breadcrumbsType:"research"})]}),a(o,{children:[e(s,{level:"three",children:"What's On"}),e(r,{breadcrumbsData:t,breadcrumbsType:"whatsOn"})]})]})};var i,m,b,l,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source},description:{story:"Main Story for the Accordion component. This must contains the `args`\nand `parameters` properties in this object.",...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var h,p,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Breadcrumbs breadcrumbsData={breadcrumbsLongTextData} />
}`,...(g=(p=c.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var B,x,y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="three">Blogs</Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="blogs" />
      </Box>
      <Box>
        <Heading level="three">Books and More</Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="booksAndMore" />
      </Box>
      <Box>
        <Heading level="three">Education</Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="education" />
      </Box>
      <Box>
        <Heading level="three">Locations</Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="locations" />
      </Box>
      <Box>
        <Heading level="three">Research</Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="research" />
      </Box>
      <Box>
        <Heading level="three">What's On</Heading>
        <Breadcrumbs breadcrumbsData={breadcrumbsData} breadcrumbsType="whatsOn" />
      </Box>
    </VStack>
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const H=["WithControls","LongText","ColorVariations"],O=Object.freeze(Object.defineProperty({__proto__:null,ColorVariations:d,LongText:c,WithControls:n,__namedExportsOrder:H,default:v},Symbol.toStringTag,{value:"Module"}));export{O as B,d as C,c as L,n as W};
//# sourceMappingURL=Breadcrumbs.stories-22b78721.js.map
