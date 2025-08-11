import{f as t,j as e,V as E,a as n,H as i,z as c}from"./iframe-D93LbwGv.js";import{a}from"./storybookUtils-BmTl87w5.js";const w={title:"Components/Form Elements/Checkbox",component:t,argTypes:{className:{control:!1},helperText:{control:{type:"text"}},id:{control:!1},invalidText:{control:{type:"text"}},isChecked:a(),isDisabled:a(),isIndeterminate:a(),isInvalid:a(),isRequired:a(),labelText:{control:{type:"text"}},name:{control:{type:"text"}},onChange:{control:!1},showHelperInvalidText:a("true"),showLabel:a("true"),value:{control:{type:"text"}}}},s={args:{className:void 0,helperText:"This is the helper text!",id:"checkbox_id",invalidText:"This is the error text :(",isChecked:void 0,isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isRequired:!1,labelText:"Test Label",name:"test_name",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,value:"1"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658"},jest:["Checkbox.test.tsx"]}},r={render:()=>e.jsx(t,{id:"isChecked",labelText:"I am checked",isChecked:!0,value:"1"})},l={render:()=>e.jsx(t,{id:"indeterminate",labelText:"I am indeterminate",isIndeterminate:!0})},d={render:()=>e.jsxs(E,{align:"left",spacing:"l",children:[e.jsxs(n,{children:[e.jsx(i,{level:"h3",size:"heading6",children:"Focused"}),e.jsx(t,{id:"focused",labelText:"Click or tab to the Checkbox to see its focus state"})]}),e.jsxs(n,{children:[e.jsx(i,{level:"h3",size:"heading6",children:"Errored"}),e.jsxs(c,{spacing:"l",children:[e.jsx(t,{id:"invalid",isInvalid:!0,labelText:"I am in an error state"}),e.jsx(t,{id:"invalid-checked",isInvalid:!0,isChecked:!0,labelText:"I am checked in an error state"})]})]}),e.jsxs(n,{children:[e.jsx(i,{level:"h3",size:"heading6",children:"Disabled"}),e.jsxs(c,{spacing:"l",children:[e.jsx(t,{id:"disabled",isDisabled:!0,labelText:"I am disabled"}),e.jsx(t,{id:"disabled-checked",isDisabled:!0,isChecked:!0,labelText:"I am checked and disabled"})]})]}),e.jsxs(n,{children:[e.jsx(i,{level:"h3",size:"heading6",children:"With Helper Text"}),e.jsx(t,{id:"helpertext",name:"testHelperText",labelText:"I have helper text",helperText:"I am the helper text for this Checkbox"})]}),e.jsxs(n,{children:[e.jsx(i,{level:"h3",size:"heading6",children:"With Errored Text"}),e.jsx(t,{id:"invalid-text",invalidText:"I am the error text for this Checkbox",isInvalid:!0,name:"testinvalidText",labelText:"I have error text"})]})]})},o={render:()=>e.jsx(t,{id:"jsx-label",labelText:e.jsxs("span",{children:["Arts and ",e.jsx("strong",{children:"Entertainment"})]}),name:"jsxElementLabel"})};var h,x,m,b,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: undefined,
    helperText: "This is the helper text!",
    id: "checkbox_id",
    invalidText: "This is the error text :(",
    isChecked: undefined,
    isDisabled: false,
    isIndeterminate: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Test Label",
    name: "test_name",
    onChange: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    value: "1"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658"
    },
    jest: ["Checkbox.test.tsx"]
  }
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"Main Story for the Checkbox component. This must contains the `args`\nand `parameters` properties in this object.",...(p=(b=s.parameters)==null?void 0:b.docs)==null?void 0:p.description}}};var k,g,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Checkbox id="isChecked" labelText="I am checked" isChecked value="1" />
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,v,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Checkbox id="indeterminate" labelText="I am indeterminate" isIndeterminate />
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var I,f,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Focused
        </Heading>
        <Checkbox id="focused" labelText="Click or tab to the Checkbox to see its focus state" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Errored
        </Heading>
        <HStack spacing="l">
          <Checkbox id="invalid" isInvalid labelText="I am in an error state" />
          <Checkbox id="invalid-checked" isInvalid isChecked labelText="I am checked in an error state" />
        </HStack>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Disabled
        </Heading>
        <HStack spacing="l">
          <Checkbox id="disabled" isDisabled labelText="I am disabled" />
          <Checkbox id="disabled-checked" isDisabled isChecked labelText="I am checked and disabled" />
        </HStack>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          With Helper Text
        </Heading>
        <Checkbox id="helpertext" name="testHelperText" labelText="I have helper text" helperText="I am the helper text for this Checkbox" />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          With Errored Text
        </Heading>
        <Checkbox id="invalid-text" invalidText="I am the error text for this Checkbox" isInvalid name="testinvalidText" labelText="I have error text" />
      </Box>
    </VStack>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var H,S,y;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Checkbox id="jsx-label" labelText={<span>
          Arts and <strong>Entertainment</strong>
        </span>} name="jsxElementLabel" />
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const z=["WithControls","Checked","Indeterminate","AdditionalStates","LabelUsingJSXElements"],_=Object.freeze(Object.defineProperty({__proto__:null,AdditionalStates:d,Checked:r,Indeterminate:l,LabelUsingJSXElements:o,WithControls:s,__namedExportsOrder:z,default:w},Symbol.toStringTag,{value:"Module"}));export{d as A,_ as C,l as I,o as L,s as W,r as a};
