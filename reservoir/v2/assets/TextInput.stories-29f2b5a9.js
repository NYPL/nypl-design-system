import{j as e,a as t,F as m}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as Q}from"./index-0cbcd92a.js";import{w as U}from"./index-6148c31a.js";import{H as b}from"./Heading-7eebc756.js";import{T as a,a as X,t as Y}from"./TextInput-70995d87.js";import{V as h,B as T}from"./chakra-ui-layout.esm-e0dbb94e.js";const Z={title:"Components/Form Elements/TextInput",component:a,decorators:[U],argTypes:{autoComplete:{control:{type:"select"},options:X},id:{control:!1},isClearable:{table:{defaultValue:{summary:!1}}},isDisabled:{table:{defaultValue:{summary:!1}}},isInvalid:{table:{defaultValue:{summary:!1}}},isRequired:{table:{defaultValue:{summary:!1}}},key:{table:{disable:!0}},onChange:{control:!1},ref:{table:{disable:!0}},requiredLabelText:{table:{defaultValue:{summary:!0}}},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},showLabel:{table:{defaultValue:{summary:!0}}},showRequiredLabel:{table:{defaultValue:{summary:!0}}},step:{table:{defaultValue:{summary:1}}},textInputType:{control:!1,table:{defaultValue:{summary:"default"}}},type:{control:{type:"select"},options:Y,table:{defaultValue:{summary:"text"}}},value:{control:!1}}},r={args:{additionalHelperTextIds:void 0,autoComplete:void 0,className:void 0,defaultValue:void 0,helperText:"Choose wisely.",id:"textInput-id",isClearable:!1,isClearableCallback:void 0,isDisabled:!1,isInvalid:!1,invalidText:"This is error text :(",isRequired:!0,labelText:"What is your favorite color?",max:void 0,maxLength:void 0,min:void 0,name:void 0,onChange:void 0,onClick:void 0,onFocus:void 0,pattern:void 0,placeholder:"e.g. blue, green, etc.",requiredLabelText:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0,step:1,textInputType:"default",type:"text",value:void 0},render:l=>e(a,{...l}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547"},jest:"TextInput.test.tsx"}},n={render:()=>t(h,{align:"stretch",spacing:12,children:[e(a,{helperText:"Choose wisely!",id:"textInput-1",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),e(a,{id:"textInput-2",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc.",showLabel:!1}),e(a,{id:"textInput-3",isRequired:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),e(a,{id:"textInput-4",isRequired:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc.",showRequiredLabel:!1}),e(a,{helperText:"Choose wisely!",id:"textInput-5",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc.",showLabel:!1})]})},i={render:()=>t(h,{align:"stretch",spacing:"l",children:[t(T,{children:[e(b,{level:"h3",size:"heading6",children:"Invalid"}),e(a,{helperText:"Choose wisely!",id:"errored",invalidText:"This is error text :(",isInvalid:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."})]}),t(T,{children:[e(b,{level:"h3",size:"heading6",children:"Disabled"}),e(a,{helperText:"Choose wisely!",id:"disabled",isDisabled:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."})]})]})},o={render:()=>e(a,{id:"isClearable-example",isClearable:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),name:"isClearable Button"},$=()=>{const[l,x]=Q.useState("");return e(a,{id:"isClearable-controlled-example",isClearable:!0,isClearableCallback:()=>x(""),labelText:"What is your favorite color?",onChange:K=>x(K.target.value),placeholder:"i.e. blue, green, etc.",value:l})},s={render:()=>e($,{}),name:"Controlled isClearableCallback Example"},d={render:()=>t(h,{align:"stretch",spacing:12,children:[e(a,{helperText:"The min value is 10 and the max value is 20.",id:"number-type",labelText:"Enter a number",max:20,min:10,placeholder:"i.e. 1, 2, 3, etc.",type:"number"}),e(a,{helperText:"The min value is 30 and the max value is 5.",id:"number-type",invalidText:"The min value is 30 and the max value is 5.",labelText:"Enter a number",max:5,min:30,placeholder:"i.e. 1, 2, 3, etc.",type:"number"})]})},u={render:()=>e(a,{helperText:"Enter a 5-digit zip code.",id:"number-pattern",labelText:"Enter a zip code",maxLength:5,pattern:"[0-9]+",placeholder:"i.e. 10018"})},p={render:()=>t(m,{children:[e(a,{helperText:"Choose <b>wisely!</b>",id:"string",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),e("br",{}),e(a,{helperText:t(m,{children:["Choose ",e("b",{children:"wisely!"})]}),id:"jsx",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."})]}),name:"HTML in Helper Text"},c={args:{additionalHelperTextIds:void 0,className:void 0,defaultValue:void 0,helperText:"Let it all out.",id:"textarea",invalidText:"This is error text :(",isClearable:!1,isClearableCallback:void 0,isDisabled:!1,isInvalid:!1,isRequired:!0,labelText:"In less than 500 words, describe your favorite color?",max:void 0,maxLength:void 0,min:void 0,name:void 0,onChange:void 0,onClick:void 0,onFocus:void 0,pattern:void 0,placeholder:"Essay question...",requiredLabelText:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0,step:1,textInputType:"default",type:"textarea",value:void 0},argTypes:{type:{control:!1},textInputType:{control:!1}},render:l=>e(a,{...l})};var f,v,g,y,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    additionalHelperTextIds: undefined,
    autoComplete: undefined,
    className: undefined,
    defaultValue: undefined,
    helperText: "Choose wisely.",
    id: "textInput-id",
    isClearable: false,
    isClearableCallback: undefined,
    isDisabled: false,
    isInvalid: false,
    invalidText: "This is error text :(",
    isRequired: true,
    labelText: "What is your favorite color?",
    max: undefined,
    maxLength: undefined,
    min: undefined,
    name: undefined,
    onChange: undefined,
    onClick: undefined,
    onFocus: undefined,
    pattern: undefined,
    placeholder: "e.g. blue, green, etc.",
    requiredLabelText: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true,
    step: 1,
    textInputType: "default",
    type: "text",
    value: undefined
  },
  render: args => <TextInput {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547"
    },
    jest: "TextInput.test.tsx"
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:"Main Story for the TextInput component. This must contains the `args`\nand `parameters` properties in this object.",...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.description}}};var I,w,L;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing={12}>
      <TextInput helperText="Choose wisely!" id="textInput-1" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      <TextInput id="textInput-2" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." showLabel={false} />
      <TextInput id="textInput-3" isRequired labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      <TextInput id="textInput-4" isRequired labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." showRequiredLabel={false} />
      <TextInput helperText="Choose wisely!" id="textInput-5" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." showLabel={false} />
    </VStack>
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var V,H,W;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Invalid
        </Heading>
        <TextInput helperText="Choose wisely!" id="errored" invalidText="This is error text :(" isInvalid labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Disabled
        </Heading>
        <TextInput helperText="Choose wisely!" id="disabled" isDisabled labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      </Box>
    </VStack>
}`,...(W=(H=i.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var q,S,k;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <TextInput id="isClearable-example" isClearable labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />,
  name: "isClearable Button"
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,R,B;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ControlledExampleComponent />,
  name: "Controlled isClearableCallback Example"
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var N,j,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing={12}>
      <TextInput helperText="The min value is 10 and the max value is 20." id="number-type" labelText="Enter a number" max={20} min={10} placeholder="i.e. 1, 2, 3, etc." type="number" />
      <TextInput helperText="The min value is 30 and the max value is 5." id="number-type" invalidText="The min value is 30 and the max value is 5." labelText="Enter a number" max={5} min={30} placeholder="i.e. 1, 2, 3, etc." type="number" />
    </VStack>
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var M,z,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <TextInput helperText="Enter a 5-digit zip code." id="number-pattern" labelText="Enter a zip code" maxLength={5} pattern="[0-9]+" placeholder="i.e. 10018" />
}`,...(A=(z=u.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,_,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <TextInput helperText="Choose <b>wisely!</b>" id="string" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      <br />
      <TextInput helperText={<>
            Choose <b>wisely!</b>
          </>} id="jsx" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
    </>,
  name: "HTML in Helper Text"
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,J,G;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    additionalHelperTextIds: undefined,
    className: undefined,
    defaultValue: undefined,
    helperText: "Let it all out.",
    id: "textarea",
    invalidText: "This is error text :(",
    isClearable: false,
    isClearableCallback: undefined,
    isDisabled: false,
    isInvalid: false,
    isRequired: true,
    labelText: "In less than 500 words, describe your favorite color?",
    max: undefined,
    maxLength: undefined,
    min: undefined,
    name: undefined,
    onChange: undefined,
    onClick: undefined,
    onFocus: undefined,
    pattern: undefined,
    placeholder: "Essay question...",
    requiredLabelText: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true,
    step: 1,
    textInputType: "default",
    type: "textarea",
    value: undefined
  },
  argTypes: {
    type: {
      control: false
    },
    textInputType: {
      control: false
    }
  },
  render: args => <TextInput {...args} />
}`,...(G=(J=c.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};const ee=["WithControls","LabellingVariations","BrowserStates","isClearableButton","ControlledExample","NumberType","AlternateNumberPattern","HTMLHelperText","Textarea"],oe=Object.freeze(Object.defineProperty({__proto__:null,AlternateNumberPattern:u,BrowserStates:i,ControlledExample:s,HTMLHelperText:p,LabellingVariations:n,NumberType:d,Textarea:c,WithControls:r,__namedExportsOrder:ee,default:Z,isClearableButton:o},Symbol.toStringTag,{value:"Module"}));export{u as A,i as B,s as C,p as H,n as L,d as N,oe as T,r as W,c as a,o as i};
//# sourceMappingURL=TextInput.stories-29f2b5a9.js.map
