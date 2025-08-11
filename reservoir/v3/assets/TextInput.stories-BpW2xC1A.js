import{bO as se,a6 as t,j as e,V as v,a as I,H as w,r as i,o as j,z as ie}from"./iframe-D93LbwGv.js";import{a as r}from"./storybookUtils-BmTl87w5.js";const de=["on","off","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday-day","bday-month","bday-year","bday","cc-additional-name","cc-csc","cc-exp-month","cc-exp-year","cc-exp","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country-name","country","current-password","email","family-name","given-name","honorific-prefix","honorific-suffix","impp","language","name","new-password","nickname","organization-title","organization","photo","postal-code","sex","street-address","tel-area-code","tel-country-code","tel-extension","tel-local-prefix","tel-local-suffix","tel-local","tel-national","tel","transaction-amount","transaction-currency","url","username"],{expect:H,userEvent:f,waitFor:L,within:W}=__STORYBOOK_MODULE_TEST__,ue={title:"Components/Form Elements/TextInput",component:t,argTypes:{autoComplete:{control:{type:"select"},options:de,table:{defaultValue:{summary:"off"}}},className:{control:!1},defaultValue:{control:!1},helperText:{control:"text"},id:{control:!1},invalidText:{control:"text"},isClearable:r(),isClearableCallback:{control:!1},isDisabled:r(),isInvalid:r(),isRequired:r(),labelText:{control:"text"},max:{control:"number"},min:{control:"number"},name:{control:!1},key:{table:{disable:!0}},onChange:{control:!1},onClick:{control:!1},onFocus:{control:!1},pattern:{control:"text"},placeholder:{control:"text"},ref:{table:{disable:!0}},requiredLabelText:r("true"),showHelperInvalidText:r("true"),showLabel:r("true"),showRequiredLabel:r("true"),step:{table:{defaultValue:{summary:"1"}}},textInputType:{control:!1,table:{defaultValue:{summary:"default"}}},type:{control:{type:"select"},options:se,table:{defaultValue:{summary:"text"}}},value:{control:!1}}},o={args:{additionalHelperTextIds:void 0,autoComplete:void 0,className:void 0,defaultValue:void 0,helperText:"Choose wisely.",id:"textInput-id",isClearable:!0,isClearableCallback:void 0,isDisabled:!1,isInvalid:!1,invalidText:"This is error text :(",isRequired:!0,labelText:"What is your favorite color?",max:void 0,maxLength:void 0,min:void 0,name:void 0,onChange:void 0,onClick:void 0,onFocus:void 0,pattern:void 0,placeholder:"e.g. blue, green, etc.",requiredLabelText:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0,step:1,textInputType:"default",type:"text",value:void 0},render:n=>e.jsx(t,{...n}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A547"},jest:"TextInput.test.tsx"},play:async({canvasElement:n})=>{const a=W(n).getByRole("textbox");await f.click(a),await f.type(a,"Hello World"),await L(()=>{H(a).toHaveValue("Hello World")});const s=W(n).getByRole("button");await f.click(s),await L(()=>{H(a).not.toHaveValue("Hello World")})}},d={render:()=>e.jsxs(v,{align:"stretch",spacing:12,children:[e.jsx(t,{helperText:"Choose wisely!",id:"textInput-1",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),e.jsx(t,{id:"textInput-2",labelText:e.jsxs(e.Fragment,{children:["What is your favorite color? ",e.jsx("span",{children:"(required)"})]}),placeholder:"i.e. blue, green, etc.",showLabel:!1}),e.jsx(t,{id:"textInput-3",isRequired:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),e.jsx(t,{id:"textInput-4",isRequired:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc.",showRequiredLabel:!1}),e.jsx(t,{helperText:"Choose wisely!",id:"textInput-5",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc.",showLabel:!1})]})},u={render:()=>e.jsxs(v,{align:"stretch",spacing:"l",children:[e.jsxs(I,{children:[e.jsx(w,{level:"h3",size:"heading6",children:"Invalid"}),e.jsx(t,{helperText:"Choose wisely!",id:"errored",invalidText:"This is error text :(",isInvalid:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."})]}),e.jsxs(I,{children:[e.jsx(w,{level:"h3",size:"heading6",children:"Disabled"}),e.jsx(t,{helperText:"Choose wisely!",id:"disabled",isDisabled:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc.",value:"blue"})]})]})},c={render:()=>e.jsx(t,{id:"isClearable-example",isClearable:!0,labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),name:"isClearable Button"},ce=()=>{const[n,a]=i.useState("");return e.jsx(t,{id:"isClearable-controlled-example",isClearable:!0,isClearableCallback:()=>a(""),labelText:"What is your favorite color?",onChange:s=>a(s.target.value),placeholder:"i.e. blue, green, etc.",value:n})},pe=()=>{const[n,a]=i.useState(!1),[s,g]=i.useState(""),y=i.useRef(null),C=i.useRef(null);return n?e.jsxs(ie,{alignItems:"end",children:[e.jsx(t,{ref:y,id:"focus-management",labelText:"What is your favorite color?",onFocus:()=>a(!0),placeholder:"i.e. blue, green, etc.",isClearable:!0,isClearableCallback:()=>g(""),value:s,onChange:l=>g(l.target.value)}),e.jsx(j,{id:"cancel",onClick:()=>{a(!1),setTimeout(()=>{var l;return(l=C.current)==null?void 0:l.focus()},0)},children:"Cancel"})]}):e.jsx(j,{id:"edit",ref:C,onClick:()=>{a(!0),setTimeout(()=>{var l;return(l=y.current)==null?void 0:l.focus()},0)},children:"Edit"})},p={render:()=>e.jsx(pe,{}),name:"Focus Ref Management"},x={render:()=>e.jsx(ce,{}),name:"Controlled isClearableCallback Example"},m={render:()=>e.jsxs(v,{align:"stretch",spacing:12,children:[e.jsx(t,{helperText:"The min value is 10 and the max value is 20.",id:"number-type",labelText:"Enter a number",max:20,min:10,placeholder:"i.e. 1, 2, 3, etc.",type:"number"}),e.jsx(t,{helperText:"The min value is 30 and the max value is 5.",id:"number-type",invalidText:"The min value is 30 and the max value is 5.",labelText:"Enter a number",max:5,min:30,placeholder:"i.e. 1, 2, 3, etc.",type:"number"})]})},h={render:()=>e.jsx(t,{helperText:"Enter a 5-digit zip code.",id:"number-pattern",labelText:"Enter a zip code",maxLength:5,pattern:"[0-9]+",placeholder:"i.e. 10018"})},b={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{helperText:"Choose <b>wisely!</b>",id:"string",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."}),e.jsx("br",{}),e.jsx(t,{helperText:e.jsxs(e.Fragment,{children:["Choose ",e.jsx("b",{children:"wisely!"})]}),id:"jsx",labelText:"What is your favorite color?",placeholder:"i.e. blue, green, etc."})]}),name:"HTML in Helper Text"},T={args:{additionalHelperTextIds:void 0,className:void 0,defaultValue:void 0,helperText:"Let it all out.",id:"textarea",invalidText:"This is error text :(",isClearable:!1,isClearableCallback:void 0,isDisabled:!1,isInvalid:!1,isRequired:!0,labelText:"In less than 500 words, describe your favorite color?",max:void 0,maxLength:void 0,min:void 0,name:void 0,onChange:void 0,onClick:void 0,onFocus:void 0,pattern:void 0,placeholder:"Essay question...",requiredLabelText:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0,step:1,textInputType:"default",type:"textarea",value:void 0},argTypes:{type:{control:!1},textInputType:{control:!1}},render:n=>e.jsx(t,{...n})};var E,S,k,R,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    additionalHelperTextIds: undefined,
    autoComplete: undefined,
    className: undefined,
    defaultValue: undefined,
    helperText: "Choose wisely.",
    id: "textInput-id",
    isClearable: true,
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
  },
  play: async ({
    canvasElement
  }) => {
    const textInput = within(canvasElement).getByRole("textbox");
    await userEvent.click(textInput);
    await userEvent.type(textInput, "Hello World");
    await waitFor(() => {
      expect(textInput).toHaveValue("Hello World");
    });
    const clearButton = within(canvasElement).getByRole("button");
    await userEvent.click(clearButton);
    await waitFor(() => {
      expect(textInput).not.toHaveValue("Hello World");
    });
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Main Story for the TextInput component. This must contains the `args`\nand `parameters` properties in this object.",...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var V,B,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing={12}>
      <TextInput helperText="Choose wisely!" id="textInput-1" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      <TextInput id="textInput-2" labelText={<>
            What is your favorite color? <span>(required)</span>
          </>} placeholder="i.e. blue, green, etc." showLabel={false} />
      <TextInput id="textInput-3" isRequired labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      <TextInput id="textInput-4" isRequired labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." showRequiredLabel={false} />
      <TextInput helperText="Choose wisely!" id="textInput-5" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." showLabel={false} />
    </VStack>
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,z,N;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <TextInput helperText="Choose wisely!" id="disabled" isDisabled labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." value="blue" />
      </Box>
    </VStack>
}`,...(N=(z=u.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var _,D,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <TextInput id="isClearable-example" isClearable labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />,
  name: "isClearable Button"
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var O,P,J;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <FocusManagementComponent />,
  name: "Focus Ref Management"
}`,...(J=(P=p.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var K,U,Y;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ControlledExampleComponent />,
  name: "Controlled isClearableCallback Example"
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,Q,X;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing={12}>
      <TextInput helperText="The min value is 10 and the max value is 20." id="number-type" labelText="Enter a number" max={20} min={10} placeholder="i.e. 1, 2, 3, etc." type="number" />
      <TextInput helperText="The min value is 30 and the max value is 5." id="number-type" invalidText="The min value is 30 and the max value is 5." labelText="Enter a number" max={5} min={30} placeholder="i.e. 1, 2, 3, etc." type="number" />
    </VStack>
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <TextInput helperText="Enter a 5-digit zip code." id="number-pattern" labelText="Enter a zip code" maxLength={5} pattern="[0-9]+" placeholder="i.e. 10018" />
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <>
      <TextInput helperText="Choose <b>wisely!</b>" id="string" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
      <br />
      <TextInput helperText={<>
            Choose <b>wisely!</b>
          </>} id="jsx" labelText="What is your favorite color?" placeholder="i.e. blue, green, etc." />
    </>,
  name: "HTML in Helper Text"
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,le,oe;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(le=T.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const xe=["WithControls","LabellingVariations","BrowserStates","isClearableButton","FocusRefManagement","ControlledExample","NumberType","AlternateNumberPattern","HTMLHelperText","Textarea"],be=Object.freeze(Object.defineProperty({__proto__:null,AlternateNumberPattern:h,BrowserStates:u,ControlledExample:x,FocusRefManagement:p,HTMLHelperText:b,LabellingVariations:d,NumberType:m,Textarea:T,WithControls:o,__namedExportsOrder:xe,default:ue,isClearableButton:c},Symbol.toStringTag,{value:"Module"}));export{h as A,u as B,x as C,p as F,b as H,d as L,m as N,be as T,o as W,T as a,c as i};
