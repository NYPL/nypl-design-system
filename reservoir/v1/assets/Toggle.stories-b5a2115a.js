import{j as e,a as t}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as z}from"./index-6148c31a.js";import{H as a}from"./Heading-2ec2ea62.js";import{S as g}from"./SimpleGrid-e54e0b68.js";import{T as l,t as w}from"./Toggle-9580209e.js";import{V as r}from"./chakra-ui-layout.esm-b2fa9d31.js";const G={title:"Components/Form Elements/Toggle",component:l,decorators:[z],argTypes:{defaultChecked:{control:!1},id:{control:!1},key:{table:{disable:!0}},name:{control:!1},onChange:{control:!1},ref:{table:{disable:!0}},size:{control:{type:"radio"},options:w,table:{defaultValue:{summary:"default"}}}}},n={args:{defaultChecked:!1,helperText:"This is the helper text!",id:"toggle-1",invalidText:"",isChecked:void 0,isDisabled:!1,isInvalid:!1,isRequired:!1,labelText:"Test Label",name:"toggle-1",onChange:void 0,size:"default"},render:c=>e(l,{...c}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=31581%3A302"},jest:["Toggle.test.tsx"]}},d={render:()=>t(g,{columns:2,children:[t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"Default"}),e(l,{defaultChecked:!0,id:"default-checked",labelText:"On"}),e(l,{id:"default",labelText:"Off"})]}),t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"Small"}),e(l,{defaultChecked:!0,id:"small-checked",size:"small",labelText:"On"}),e(l,{id:"default-small",size:"small",labelText:"Off"})]})]})},i={render:()=>e(l,{id:"toggle",isChecked:!0,labelText:"Controlled Toggle",onChange:c=>{console.log(c.target.value)}})},s={render:()=>t(g,{columns:3,children:[t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"Default"}),e(l,{defaultChecked:!0,id:"checked-default2",labelText:"On"}),e(l,{id:"default2",labelText:"Off"})]}),t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"Disabled"}),e(l,{defaultChecked:!0,id:"disabled-checked",isDisabled:!0,labelText:"On"}),e(l,{id:"disabled2",isDisabled:!0,labelText:"Off"})]}),t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"Error"}),e(l,{defaultChecked:!0,id:"error-default",isInvalid:!0,labelText:"On"}),e(l,{id:"error2",isInvalid:!0,labelText:"Off"})]})]})},o={render:()=>t(g,{columns:2,children:[t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"Grouped"}),e(l,{defaultChecked:!0,id:"layout1",labelText:"On"}),e(l,{defaultChecked:!0,id:"layout2",labelText:"On"}),e(l,{defaultChecked:!0,id:"layout3",labelText:"On"}),e(l,{defaultChecked:!0,id:"layout4",labelText:"On"}),e(l,{defaultChecked:!0,id:"layout5",labelText:"On"})]}),t(r,{align:"left",spacing:"s",children:[e(a,{level:"three",children:"With Helper Text"}),e(l,{defaultChecked:!0,helperText:"Component Helper Text",id:"helper-text",labelText:"On"})]})]})};var u,f,h,p,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Main Story for the Toggle component. This must contains the `args`\nand `parameters` properties in this object.",...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.description}}};var m,b,x;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <VStack align="left" spacing="s">
        <Heading level="three">Default</Heading>
        <Toggle defaultChecked={true} id="default-checked" labelText="On" />
        <Toggle id="default" labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="three">Small</Heading>
        <Toggle defaultChecked={true} id="small-checked" size="small" labelText="On" />
        <Toggle id="default-small" size="small" labelText="Off" />
      </VStack>
    </SimpleGrid>
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,C,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Toggle id="toggle" isChecked={true} labelText="Controlled Toggle" onChange={e => {
    console.log(e.target.value);
  }} />
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var O,v,y;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <VStack align="left" spacing="s">
        <Heading level="three">Default</Heading>
        <Toggle defaultChecked={true} id="checked-default2" labelText="On" />
        <Toggle id="default2" labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="three">Disabled</Heading>
        <Toggle defaultChecked={true} id="disabled-checked" isDisabled={true} labelText="On" />
        <Toggle id="disabled2" isDisabled={true} labelText="Off" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="three">Error</Heading>
        <Toggle defaultChecked={true} id="error-default" isInvalid={true} labelText="On" />
        <Toggle id="error2" isInvalid={true} labelText="Off" />
      </VStack>
    </SimpleGrid>
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var H,V,D;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <VStack align="left" spacing="s">
        <Heading level="three">Grouped</Heading>
        <Toggle defaultChecked={true} id="layout1" labelText="On" />
        <Toggle defaultChecked={true} id="layout2" labelText="On" />
        <Toggle defaultChecked={true} id="layout3" labelText="On" />
        <Toggle defaultChecked={true} id="layout4" labelText="On" />
        <Toggle defaultChecked={true} id="layout5" labelText="On" />
      </VStack>
      <VStack align="left" spacing="s">
        <Heading level="three">With Helper Text</Heading>
        <Toggle defaultChecked={true} helperText="Component Helper Text" id="helper-text" labelText="On" />
      </VStack>
    </SimpleGrid>
}`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const j=["WithControls","Sizes","ControlledToggle","BrowserStates","Layouts"],q=Object.freeze(Object.defineProperty({__proto__:null,BrowserStates:s,ControlledToggle:i,Layouts:o,Sizes:d,WithControls:n,__namedExportsOrder:j,default:G},Symbol.toStringTag,{value:"Module"}));export{s as B,i as C,o as L,d as S,q as T,n as W};
//# sourceMappingURL=Toggle.stories-b5a2115a.js.map
