import{a as l,j as e,F as U}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as A}from"./index-f2bd0723.js";import{w as J}from"./index-6148c31a.js";import{B as _}from"./Button-a3ea41e0.js";import{B as N}from"./ButtonGroup-3ea9dbd7.js";import{F as W}from"./Form-7babaf24.js";import{R as a}from"./Radio-c107ee3b.js";import{R as r}from"./RadioGroup-8ceb9bfa.js";import{S as k}from"./SimpleGrid-e54e0b68.js";import{H as c}from"./Heading-2ec2ea62.js";import{B as x,V as X,F as p,b as m}from"./chakra-ui-layout.esm-b2fa9d31.js";const O={title:"Components/Form Elements/RadioGroup",component:r,decorators:[J],argTypes:{children:{table:{disable:!0}},className:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},isFullWidth:{table:{defaultValue:{summary:!1}}},isInvalid:{table:{defaultValue:{summary:!1}}},isRequired:{table:{defaultValue:{summary:!1}}},layout:{table:{defaultValue:{summary:"column"}}},key:{table:{disable:!0}},onChange:{control:!1},ref:{table:{disable:!0}},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},showLabel:{table:{defaultValue:{summary:!0}}},showRequiredLabel:{table:{defaultValue:{summary:!0}}}}},i={args:{className:void 0,defaultValue:"4",helperText:"This is the helper text for the full group.",id:"radioGroup-id",invalidText:"An error occurred :(",isDisabled:!1,isFullWidth:!1,isInvalid:!1,isRequired:!1,labelText:"Standard Radio Group",layout:"column",name:"radio-story",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0},render:o=>l(r,{...o,children:[e(a,{id:"main-2",labelText:"Radio 2",value:"2"}),e(a,{id:"main-3",labelText:"Radio 3",value:"3"}),e(a,{id:"main-4",labelText:"Radio 4",value:"4"}),e(a,{id:"main-5",labelText:"Radio 5",value:"5"})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A742"},jest:["RadioGroup.test.tsx"]}},d={render:()=>l(U,{children:[l(r,{defaultValue:"4",id:"column",labelText:"Column (default)",name:"column-example",children:[e(a,{id:"column-2",labelText:"Radio 2",value:"2"}),e(a,{id:"column-3",labelText:"Radio 3",value:"3"}),e(a,{id:"column-4",labelText:"Radio 4",value:"4"}),e(a,{id:"column-5",labelText:"Radio 5",value:"5"})]}),e("br",{}),l(r,{defaultValue:"3",id:"row",labelText:"Row",name:"row-example",layout:"row",children:[e(a,{id:"row-2",labelText:"Radio 2",value:"2"}),e(a,{id:"row-3",labelText:"Radio 3",value:"3"}),e(a,{id:"row-4",labelText:"Radio 4",value:"4"}),e(a,{id:"row-5",labelText:"Radio 5",value:"5"})]})]})},n={render:()=>l(X,{align:"left",spacing:"l",children:[l(x,{children:[e(c,{level:"three",children:"Errored"}),l(r,{defaultValue:"4",id:"errored",invalidText:"Error message for the full group.",isInvalid:!0,labelText:"Errored Radio Group",name:"errored-example",children:[e(a,{id:"radio-2",labelText:"Radio 2",value:"2"}),e(a,{id:"radio-3",labelText:"Radio 3",value:"3"}),e(a,{id:"radio-4",labelText:"Radio 4",value:"4"}),e(a,{id:"radio-5",labelText:"Radio 5",value:"5"})]})]}),l(x,{children:[e(c,{level:"three",children:"Required"}),l(r,{helperText:"The reason for being required.",id:"required",isRequired:!0,labelText:"Required Radio Group",name:"required-example",children:[e(a,{id:"required-2",labelText:"Radio 2",value:"2"}),e(a,{id:"required-3",labelText:"Radio 3",value:"3"}),e(a,{id:"required-4",labelText:"Radio 4",value:"4"}),e(a,{id:"required-5",labelText:"Radio 5",value:"5"})]})]}),l(x,{children:[e(c,{level:"three",children:"Disabled"}),l(r,{helperText:"The reason for being disabled.",id:"disabled",isDisabled:!0,labelText:"Disabled Radio Group",name:"disabled-example",children:[e(a,{id:"required-2",labelText:"Radio 2",value:"2"}),e(a,{id:"required-3",labelText:"Radio 3",value:"3"}),e(a,{id:"required-4",labelText:"Radio 4",value:"4"}),e(a,{id:"required-5",labelText:"Radio 5",value:"5"})]})]})]})},t={render:()=>l(r,{id:"jsx-radiogroup",isFullWidth:!0,labelText:"Radio Group",name:"radio-example",children:[e(a,{id:"arts",labelText:l(p,{children:[e("span",{children:"Arts"}),e(m,{}),e("span",{children:"4"})]}),value:"arts"}),e(a,{id:"english",labelText:l(p,{children:[e("span",{children:"English"}),e(m,{}),e("span",{children:"23"})]}),value:"English"}),e(a,{id:"science",labelText:l(p,{children:[e("span",{children:"Science"}),e(m,{}),e("span",{children:"10"})]}),value:"Science"}),e(a,{id:"math",labelText:l(p,{children:[e("span",{children:"Math"}),e(m,{}),e("span",{children:"3"})]}),value:"Math"})]}),name:"Label Using JSX Elements"};function P(){return l(r,{defaultValue:"3",id:"controlled-example",labelText:"Controlled RadioGroup",name:"radioGroupExample",onChange:R=>{console.log(`Controlled example. Selected: ${R}`)},children:[e(a,{id:"2",labelText:"Radio 2",value:"2"}),e(a,{id:"3",labelText:"Radio 3",value:"3"}),e(a,{id:"4",labelText:"Radio 4",value:"4"})]})}const u={render:()=>e(P,{})};function $(){const o=A.createRef();return e(W,{id:"form",onSubmit:I=>{I.preventDefault();const M=o.current.value;console.log(`Uncontrolled example. Selected: ${M}`)},children:l(k,{columns:1,children:[l(r,{defaultValue:"3",id:"uncontrolled-example",labelText:"Uncontrolled RadioGroup",name:"radioGroupExample",ref:o,children:[e(a,{id:"2",labelText:"Radio 2",value:"2"}),e(a,{id:"3",labelText:"Radio 3",value:"3"}),e(a,{id:"4",labelText:"Radio 4",value:"4"})]}),e(N,{children:e(_,{id:"submit",type:"submit",children:"Submit"})})]})})}const s={render:()=>e($,{})};var b,h,T,v,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: undefined,
    defaultValue: "4",
    helperText: "This is the helper text for the full group.",
    id: "radioGroup-id",
    invalidText: "An error occurred :(",
    isDisabled: false,
    isFullWidth: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Standard Radio Group",
    layout: "column",
    name: "radio-story",
    onChange: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true
  },
  render: args => <RadioGroup {...args}>
      <Radio id="main-2" labelText="Radio 2" value="2" />
      <Radio id="main-3" labelText="Radio 3" value="3" />
      <Radio id="main-4" labelText="Radio 4" value="4" />
      <Radio id="main-5" labelText="Radio 5" value="5" />
    </RadioGroup>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A742"
    },
    jest: ["RadioGroup.test.tsx"]
  }
}`,...(T=(h=i.parameters)==null?void 0:h.docs)==null?void 0:T.source},description:{story:"Main Story for the RadioGroup component. This must contains the `args`\nand `parameters` properties in this object.",...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var g,G,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <>
      <RadioGroup defaultValue="4" id="column" labelText="Column (default)" name="column-example">
        <Radio id="column-2" labelText="Radio 2" value="2" />
        <Radio id="column-3" labelText="Radio 3" value="3" />
        <Radio id="column-4" labelText="Radio 4" value="4" />
        <Radio id="column-5" labelText="Radio 5" value="5" />
      </RadioGroup>
      <br />
      <RadioGroup defaultValue="3" id="row" labelText="Row" name="row-example" layout="row">
        <Radio id="row-2" labelText="Radio 2" value="2" />
        <Radio id="row-3" labelText="Radio 3" value="3" />
        <Radio id="row-4" labelText="Radio 4" value="4" />
        <Radio id="row-5" labelText="Radio 5" value="5" />
      </RadioGroup>
    </>
}`,...(S=(G=d.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};var q,w,y;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">Errored</Heading>
        <RadioGroup defaultValue="4" id="errored" invalidText="Error message for the full group." isInvalid labelText="Errored Radio Group" name="errored-example">
          <Radio id="radio-2" labelText="Radio 2" value="2" />
          <Radio id="radio-3" labelText="Radio 3" value="3" />
          <Radio id="radio-4" labelText="Radio 4" value="4" />
          <Radio id="radio-5" labelText="Radio 5" value="5" />
        </RadioGroup>
      </Box>
      <Box>
        <Heading level="three">Required</Heading>
        <RadioGroup helperText="The reason for being required." id="required" isRequired labelText="Required Radio Group" name="required-example">
          <Radio id="required-2" labelText="Radio 2" value="2" />
          <Radio id="required-3" labelText="Radio 3" value="3" />
          <Radio id="required-4" labelText="Radio 4" value="4" />
          <Radio id="required-5" labelText="Radio 5" value="5" />
        </RadioGroup>
      </Box>
      <Box>
        <Heading level="three">Disabled</Heading>
        <RadioGroup helperText="The reason for being disabled." id="disabled" isDisabled labelText="Disabled Radio Group" name="disabled-example">
          <Radio id="required-2" labelText="Radio 2" value="2" />
          <Radio id="required-3" labelText="Radio 3" value="3" />
          <Radio id="required-4" labelText="Radio 4" value="4" />
          <Radio id="required-5" labelText="Radio 5" value="5" />
        </RadioGroup>
      </Box>
    </VStack>
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var E,V,F;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <RadioGroup id="jsx-radiogroup" isFullWidth labelText="Radio Group" name="radio-example">
      <Radio id="arts" labelText={<Flex>
            <span>Arts</span>
            <Spacer />
            <span>4</span>
          </Flex>} value="arts" />
      <Radio id="english" labelText={<Flex>
            <span>English</span>
            <Spacer />
            <span>23</span>
          </Flex>} value="English" />
      <Radio id="science" labelText={<Flex>
            <span>Science</span>
            <Spacer />
            <span>10</span>
          </Flex>} value="Science" />
      <Radio id="math" labelText={<Flex>
            <span>Math</span>
            <Spacer />
            <span>3</span>
          </Flex>} value="Math" />
    </RadioGroup>,
  name: "Label Using JSX Elements"
}`,...(F=(V=t.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var C,B,H;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <RadioGroupControlledExample />
}`,...(H=(B=u.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var D,L,j;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <RadioGroupUncontrolledExample />
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const z=["Controls","LayoutPatterns","BrowserStates","JSXElement","ControlledExample","UncontrolledExample"],ne=Object.freeze(Object.defineProperty({__proto__:null,BrowserStates:n,ControlledExample:u,Controls:i,JSXElement:t,LayoutPatterns:d,UncontrolledExample:s,__namedExportsOrder:z,default:O},Symbol.toStringTag,{value:"Module"}));export{n as B,i as C,t as J,d as L,ne as R,s as U,u as a};
//# sourceMappingURL=RadioGroup.stories-1a6ed6ef.js.map
