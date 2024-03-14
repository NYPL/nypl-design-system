import{j as e,a as t}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{H as i}from"./Heading-7eebc756.js";import{w as B}from"./index-6148c31a.js";import{C as a}from"./Checkbox-6e7b1e16.js";import{B as s,C as c,V as E}from"./chakra-ui-layout.esm-e0dbb94e.js";const z={title:"Components/Form Elements/Checkbox",component:a,decorators:[B],argTypes:{id:{control:!1}}},n={args:{className:void 0,helperText:"This is the helper text!",id:"checkbox_id",invalidText:"This is the error text :(",isChecked:void 0,isDisabled:!1,isIndeterminate:!1,isInvalid:!1,isRequired:!1,labelText:"Test Label",name:"test_name",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,value:"1"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658"},jest:["Checkbox.test.tsx"]}},r={render:()=>e(a,{id:"isChecked",labelText:"I am checked",isChecked:!0,value:"1"})},d={render:()=>e(a,{id:"indeterminate",labelText:"I am indeterminate",isIndeterminate:!0})},l={render:()=>t(E,{align:"left",spacing:"l",children:[t(s,{children:[e(i,{level:"h3",size:"heading6",children:"Focused"}),e(a,{id:"focused",labelText:"Click or tab to the Checkbox to see its focus state"})]}),t(s,{children:[e(i,{level:"h3",size:"heading6",children:"Errored"}),t(c,{spacing:"l",children:[e(a,{id:"invalid",isInvalid:!0,labelText:"I am in an error state"}),e(a,{id:"invalid-checked",isInvalid:!0,isChecked:!0,labelText:"I am checked in an error state"})]})]}),t(s,{children:[e(i,{level:"h3",size:"heading6",children:"Disabled"}),t(c,{spacing:"l",children:[e(a,{id:"disabled",isDisabled:!0,labelText:"I am disabled"}),e(a,{id:"disabled-checked",isDisabled:!0,isChecked:!0,labelText:"I am checked and disabled"})]})]}),t(s,{children:[e(i,{level:"h3",size:"heading6",children:"With Helper Text"}),e(a,{id:"helpertext",name:"testHelperText",labelText:"I have helper text",helperText:"I am the helper text for this Checkbox"})]}),t(s,{children:[e(i,{level:"h3",size:"heading6",children:"With Errored Text"}),e(a,{id:"invalid-text",invalidText:"I am the error text for this Checkbox",isInvalid:!0,name:"testinvalidText",labelText:"I have error text"})]})]})},o={render:()=>e(a,{id:"jsx-label",labelText:t("span",{children:["Arts and ",e("strong",{children:"Entertainment"})]}),name:"jsxElementLabel"})};var h,x,m,b,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"Main Story for the Checkbox component. This must contains the `args`\nand `parameters` properties in this object.",...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.description}}};var k,g,u;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Checkbox id="isChecked" labelText="I am checked" isChecked value="1" />
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,C,v;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Checkbox id="indeterminate" labelText="I am indeterminate" isIndeterminate />
}`,...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var f,I,H;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(H=(I=l.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var S,j,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Checkbox id="jsx-label" labelText={<span>
          Arts and <strong>Entertainment</strong>
        </span>} name="jsxElementLabel" />
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const _=["WithControls","Checked","Indeterminate","AdditionalStates","LabelUsingJSXElements"],M=Object.freeze(Object.defineProperty({__proto__:null,AdditionalStates:l,Checked:r,Indeterminate:d,LabelUsingJSXElements:o,WithControls:n,__namedExportsOrder:_,default:z},Symbol.toStringTag,{value:"Module"}));export{l as A,M as C,d as I,o as L,n as W,r as a};
//# sourceMappingURL=Checkbox.stories-e1cc2b04.js.map
