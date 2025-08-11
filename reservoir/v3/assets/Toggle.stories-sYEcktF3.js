import{be as H,bf as l,j as e,Z as g,V as a,H as t}from"./iframe-D93LbwGv.js";const V={title:"Components/Form Elements/Toggle",component:l,argTypes:{defaultChecked:{control:!1},id:{control:!1},key:{table:{disable:!0}},name:{control:!1},onChange:{control:!1},ref:{table:{disable:!0}},size:{control:{type:"radio"},options:H,table:{defaultValue:{summary:"default"}}}}},n={args:{defaultChecked:!1,helperText:"This is the helper text!",id:"toggle-1",invalidText:"",isChecked:void 0,isDisabled:!1,isInvalid:!1,isRequired:!1,labelText:"Test Label",name:"toggle-1",onChange:void 0,size:"default"},render:o=>e.jsx(l,{...o}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=31581%3A302"},jest:["Toggle.test.tsx"]}},s={render:()=>e.jsxs(g,{columns:2,children:[e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"Default"}),e.jsx(l,{defaultChecked:!0,id:"default-checked",labelText:"On"}),e.jsx(l,{id:"default",labelText:"Off"})]}),e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"Small"}),e.jsx(l,{defaultChecked:!0,id:"small-checked",size:"small",labelText:"On"}),e.jsx(l,{id:"default-small",size:"small",labelText:"Off"})]})]})},d={render:()=>e.jsx(l,{id:"toggle",isChecked:!0,labelText:"Controlled Toggle",onChange:o=>{console.log(o.target.value)}})},i={render:()=>e.jsxs(g,{columns:3,children:[e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"Default"}),e.jsx(l,{defaultChecked:!0,id:"checked-default2",labelText:"On"}),e.jsx(l,{id:"default2",labelText:"Off"})]}),e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"Disabled"}),e.jsx(l,{defaultChecked:!0,id:"disabled-checked",isDisabled:!0,labelText:"On"}),e.jsx(l,{id:"disabled2",isDisabled:!0,labelText:"Off"})]}),e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"Error"}),e.jsx(l,{defaultChecked:!0,id:"error-default",isInvalid:!0,labelText:"On"}),e.jsx(l,{id:"error2",isInvalid:!0,labelText:"Off"})]})]})},r={render:()=>e.jsxs(g,{columns:2,children:[e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"Grouped"}),e.jsx(l,{defaultChecked:!0,id:"layout1",labelText:"On"}),e.jsx(l,{defaultChecked:!0,id:"layout2",labelText:"On"}),e.jsx(l,{defaultChecked:!0,id:"layout3",labelText:"On"}),e.jsx(l,{defaultChecked:!0,id:"layout4",labelText:"On"}),e.jsx(l,{defaultChecked:!0,id:"layout5",labelText:"On"})]}),e.jsxs(a,{align:"left",spacing:"s",children:[e.jsx(t,{level:"h3",size:"heading6",children:"With Helper Text"}),e.jsx(l,{defaultChecked:!0,helperText:"Component Helper Text",id:"helper-text",labelText:"On"})]})]})};var c,u,h,f,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    defaultChecked: false,
    helperText: "This is the helper text!",
    id: "toggle-1",
    invalidText: "",
    isChecked: undefined,
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Test Label",
    name: "toggle-1",
    onChange: undefined,
    size: "default"
  },
  render: args => <Toggle {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=31581%3A302"
    },
    jest: ["Toggle.test.tsx"]
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Main Story for the Toggle component. This must contains the `args`\nand `parameters` properties in this object.",...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var p,T,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Default
        </Heading>
        <Toggle defaultChecked={true} id="default-checked" labelText="On" />
        <Toggle id="default" labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Small
        </Heading>
        <Toggle defaultChecked={true} id="small-checked" size="small" labelText="On" />
        <Toggle id="default-small" size="small" labelText="Off" />
      </VStack>
    </SimpleGrid>
}`,...(m=(T=s.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};var b,k,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Toggle id="toggle" isChecked={true} labelText="Controlled Toggle" onChange={e => {
    console.log(e.target.value);
  }} />
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,S,O;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Default
        </Heading>
        <Toggle defaultChecked={true} id="checked-default2" labelText="On" />
        <Toggle id="default2" labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Disabled
        </Heading>
        <Toggle defaultChecked={true} id="disabled-checked" isDisabled={true} labelText="On" />
        <Toggle id="disabled2" isDisabled={true} labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Error
        </Heading>
        <Toggle defaultChecked={true} id="error-default" isInvalid={true} labelText="On" />
        <Toggle id="error2" isInvalid={true} labelText="Off" />
      </VStack>
    </SimpleGrid>
}`,...(O=(S=i.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var v,y,z;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          Grouped
        </Heading>
        <Toggle defaultChecked={true} id="layout1" labelText="On" />
        <Toggle defaultChecked={true} id="layout2" labelText="On" />
        <Toggle defaultChecked={true} id="layout3" labelText="On" />
        <Toggle defaultChecked={true} id="layout4" labelText="On" />
        <Toggle defaultChecked={true} id="layout5" labelText="On" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="h3" size="heading6">
          With Helper Text
        </Heading>
        <Toggle defaultChecked={true} helperText="Component Helper Text" id="helper-text" labelText="On" />
      </VStack>
    </SimpleGrid>
}`,...(z=(y=r.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const D=["WithControls","Sizes","ControlledToggle","BrowserStates","Layouts"],w=Object.freeze(Object.defineProperty({__proto__:null,BrowserStates:i,ControlledToggle:d,Layouts:r,Sizes:s,WithControls:n,__namedExportsOrder:D,default:V},Symbol.toStringTag,{value:"Module"}));export{i as B,d as C,r as L,s as S,w as T,n as W};
