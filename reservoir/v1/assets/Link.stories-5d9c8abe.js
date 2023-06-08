import{j as t,a as s}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as u}from"./index-6148c31a.js";import{L as e,l as b}from"./Link-0ed02cf7.js";import{I as r}from"./Icon-6616a4b9.js";import{V as x}from"./chakra-ui-layout.esm-b2fa9d31.js";const S={title:"Components/Navigation/Link",component:e,decorators:[u],argTypes:{children:{table:{disable:!0}},key:{table:{disable:!0}},ref:{table:{disable:!0}},target:{control:!1},type:{control:{type:"select"},options:b,table:{defaultValue:{summary:"default"}}}}},n={args:{className:"custom-class",href:"https://nypl.org",id:"nypl-link",target:void 0,type:"action"},render:L=>t(e,{...L,children:"Link"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387"},jest:["Link.test.tsx"]}},i={render:()=>t(e,{type:"external",href:"https://nypl.org",children:"NYPL Website"})},a={render:()=>s(x,{spacing:"xs",align:"flex-start",children:[s(e,{type:"action",href:"#passed-in-link",children:[t(r,{name:"headset",align:"left",size:"small"}),"Headset Link"]}),s(e,{type:"action",href:"#passed-in-link",children:[t(r,{name:"clock",align:"left",size:"small"}),"Clock Link"]}),s(e,{type:"action",href:"#passed-in-link",children:[t(r,{name:"check",align:"left",size:"small"}),"Check Link"]}),s(e,{type:"action",href:"#passed-in-link-right",children:["Check Link Right",t(r,{name:"check",align:"right",size:"small"})]})]})};var o,l,c,p,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    href: "https://nypl.org",
    id: "nypl-link",
    target: undefined,
    type: "action"
  },
  render: args => <Link {...args}>Link</Link>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387"
    },
    jest: ["Link.test.tsx"]
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"Main Story for the Link component. This must contains the `args`\nand `parameters` properties in this object.",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var m,k,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Link type="external" href="https://nypl.org">
      NYPL Website
    </Link>
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var g,f,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <VStack spacing="xs" align="flex-start">
      <Link type="action" href="#passed-in-link">
        <Icon name="headset" align="left" size="small" />
        Headset Link
      </Link>
      <Link type="action" href="#passed-in-link">
        <Icon name="clock" align="left" size="small" />
        Clock Link
      </Link>
      <Link type="action" href="#passed-in-link">
        <Icon name="check" align="left" size="small" />
        Check Link
      </Link>
      <Link type="action" href="#passed-in-link-right">
        Check Link Right
        <Icon name="check" align="right" size="small" />
      </Link>
    </VStack>
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const C=["WithControls","Accessibility","LinksWithIcons"],N=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:i,LinksWithIcons:a,WithControls:n,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{i as A,N as L,n as W,a};
//# sourceMappingURL=Link.stories-5d9c8abe.js.map
