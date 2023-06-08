import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{H as n}from"./Heading-2ec2ea62.js";import{w as B}from"./index-6148c31a.js";import{C as t}from"./Checkbox-ac4cd2b8.js";import{B as i,H as c,V as E}from"./chakra-ui-layout.esm-b2fa9d31.js";const _={title:"Components/Form Elements/Checkbox",component:t,decorators:[B],argTypes:{id:{control:!1}}},r={args:{className:void 0,helperText:"This is the helper text!",id:"checkbox_id",invalidText:"This is the error text :(",isChecked:void 0,isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isRequired:!1,labelText:"Test Label",name:"test_name",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,value:"1"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658"},jest:["Checkbox.test.tsx"]}},s={render:()=>e(t,{id:"isChecked",labelText:"I am checked",isChecked:!0,value:"1"})},l={render:()=>e(t,{id:"indeterminate",labelText:"I am indeterminate",isIndeterminate:!0})},d={render:()=>a(E,{align:"left",spacing:"l",children:[a(i,{children:[e(n,{level:"three",children:"Focused"}),e(t,{id:"focused",labelText:"Click or tab to the Checkbox to see its focus state"})]}),a(i,{children:[e(n,{level:"three",children:"Errored"}),a(c,{spacing:"l",children:[e(t,{id:"invalid",isInvalid:!0,labelText:"I am in an error state"}),e(t,{id:"invalid-checked",isInvalid:!0,isChecked:!0,labelText:"I am checked in an error state"})]})]}),a(i,{children:[e(n,{level:"three",children:"Disabled"}),a(c,{spacing:"l",children:[e(t,{id:"disabled",isDisabled:!0,labelText:"I am disabled"}),e(t,{id:"disabled-checked",isDisabled:!0,isChecked:!0,labelText:"I am checked and disabled"})]})]}),a(i,{children:[e(n,{level:"three",children:"With Helper Text"}),e(t,{id:"helpertext",name:"testHelperText",labelText:"I have helper text",helperText:"I am the helper text for this Checkbox"})]}),a(i,{children:[e(n,{level:"three",children:"With Errored Text"}),e(t,{id:"invalid-text",invalidText:"I am the error text for this Checkbox",isInvalid:!0,name:"testinvalidText",labelText:"I have error text"})]})]})},o={render:()=>e(t,{id:"jsx-label",labelText:a("span",{children:["Arts and ",e("strong",{children:"Entertainment"})]}),name:"jsxElementLabel"})};var h,x,m,b,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"Main Story for the Checkbox component. This must contains the `args`\nand `parameters` properties in this object.",...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.description}}};var k,u,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Checkbox id="isChecked" labelText="I am checked" isChecked value="1" />
}`,...(T=(u=s.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var C,g,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Checkbox id="indeterminate" labelText="I am indeterminate" isIndeterminate />
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,I,H;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">Focused</Heading>
        <Checkbox id="focused" labelText="Click or tab to the Checkbox to see its focus state" />
      </Box>
      <Box>
        <Heading level="three">Errored</Heading>
        <HStack spacing="l">
          <Checkbox id="invalid" isInvalid labelText="I am in an error state" />
          <Checkbox id="invalid-checked" isInvalid isChecked labelText="I am checked in an error state" />
        </HStack>
      </Box>
      <Box>
        <Heading level="three">Disabled</Heading>
        <HStack spacing="l">
          <Checkbox id="disabled" isDisabled labelText="I am disabled" />
          <Checkbox id="disabled-checked" isDisabled isChecked labelText="I am checked and disabled" />
        </HStack>
      </Box>
      <Box>
        <Heading level="three">With Helper Text</Heading>
        <Checkbox id="helpertext" name="testHelperText" labelText="I have helper text" helperText="I am the helper text for this Checkbox" />
      </Box>
      <Box>
        <Heading level="three">With Errored Text</Heading>
        <Checkbox id="invalid-text" invalidText="I am the error text for this Checkbox" isInvalid name="testinvalidText" labelText="I have error text" />
      </Box>
    </VStack>
}`,...(H=(I=d.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var S,j,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Checkbox id="jsx-label" labelText={<span>
          Arts and <strong>Entertainment</strong>
        </span>} name="jsxElementLabel" />
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const y=["WithControls","Checked","Indeterminate","AdditionalStates","LabelUsingJSXElements"],F=Object.freeze(Object.defineProperty({__proto__:null,AdditionalStates:d,Checked:s,Indeterminate:l,LabelUsingJSXElements:o,WithControls:r,__namedExportsOrder:y,default:_},Symbol.toStringTag,{value:"Module"}));export{d as A,F as C,l as I,o as L,r as W,s as a};
//# sourceMappingURL=Checkbox.stories-0a019db8.js.map
