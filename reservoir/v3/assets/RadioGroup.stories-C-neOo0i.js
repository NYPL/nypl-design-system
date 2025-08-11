import{ad as r,j as e,ae as a,V as U,a as m,H as T,F as p,G as R,r as A,aa as z,Z as J,n as O,o as N}from"./iframe-D93LbwGv.js";import{a as d}from"./storybookUtils-BmTl87w5.js";const{expect:b,userEvent:o,within:W}=__STORYBOOK_MODULE_TEST__,X={title:"Components/Form Elements/RadioGroup",component:r,argTypes:{children:{table:{disable:!0}},className:{control:!1},id:{control:!1},isDisabled:d(),isFullWidth:d(),isInvalid:d(),isRequired:d(),layout:{table:{defaultValue:{summary:"column"}}},key:{table:{disable:!0}},onChange:{control:!1},ref:{table:{disable:!0}},showHelperInvalidText:d("true"),showLabel:d("true"),showRequiredLabel:d("true")}},n={args:{className:void 0,defaultValue:"4",helperText:"This is the helper text for the full group.",id:"radioGroup-id",invalidText:"An error occurred :(",isDisabled:!1,isFullWidth:!1,isInvalid:!1,isRequired:!1,labelText:"Standard Radio Group",layout:"column",name:"radio-story",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0},render:i=>e.jsxs(r,{...i,children:[e.jsx(a,{id:"main-2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"main-3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"main-4",labelText:"Radio 4",value:"4"}),e.jsx(a,{id:"main-5",labelText:"Radio 5",value:"5"})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A742"},jest:["RadioGroup.test.tsx"]},play:async({canvasElement:i})=>{const l=W(i);b(l.getByRole("radiogroup")).toBeInTheDocument(),b(l.getByLabelText("Radio 4")).toBeChecked(),await o.click(l.getByLabelText("Radio 3")),await o.click(l.getByLabelText("Radio 2")),await o.click(l.getByLabelText("Radio 5")),b(l.getByLabelText("Radio 5")).toBeChecked(),await o.keyboard("{arrowdown}"),await o.keyboard("{arrowleft}"),await o.keyboard("{arrowup}"),await o.keyboard("{arrowright}"),await o.keyboard("{arrowdown}"),b(l.getByLabelText("Radio 2")).toBeChecked()}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{defaultValue:"4",id:"column",labelText:"Column (default)",name:"column-example",children:[e.jsx(a,{id:"column-2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"column-3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"column-4",labelText:"Radio 4",value:"4"}),e.jsx(a,{id:"column-5",labelText:"Radio 5",value:"5"})]}),e.jsx("br",{}),e.jsxs(r,{defaultValue:"3",id:"row",labelText:"Row",name:"row-example",layout:"row",children:[e.jsx(a,{id:"row-2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"row-3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"row-4",labelText:"Radio 4",value:"4"}),e.jsx(a,{id:"row-5",labelText:"Radio 5",value:"5"})]})]})},t={render:()=>e.jsxs(U,{align:"left",spacing:"l",children:[e.jsxs(m,{children:[e.jsx(T,{level:"h3",size:"heading6",children:"Errored"}),e.jsxs(r,{defaultValue:"4",id:"errored",invalidText:"Error message for the full group.",isInvalid:!0,labelText:"Errored Radio Group",name:"errored-example",children:[e.jsx(a,{id:"radio-2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"radio-3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"radio-4",labelText:"Radio 4",value:"4"}),e.jsx(a,{id:"radio-5",labelText:"Radio 5",value:"5"})]})]}),e.jsxs(m,{children:[e.jsx(T,{level:"h3",size:"heading6",children:"Required"}),e.jsxs(r,{helperText:"The reason for being required.",id:"required",isRequired:!0,labelText:"Required Radio Group",name:"required-example",children:[e.jsx(a,{id:"required-2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"required-3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"required-4",labelText:"Radio 4",value:"4"}),e.jsx(a,{id:"required-5",labelText:"Radio 5",value:"5"})]})]}),e.jsxs(m,{children:[e.jsx(T,{level:"h3",size:"heading6",children:"Disabled"}),e.jsxs(r,{helperText:"The reason for being disabled.",id:"disabled",isDisabled:!0,labelText:"Disabled Radio Group",name:"disabled-example",children:[e.jsx(a,{id:"required-2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"required-3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"required-4",labelText:"Radio 4",value:"4"}),e.jsx(a,{id:"required-5",labelText:"Radio 5",value:"5"})]})]})]})},u={render:()=>e.jsxs(r,{id:"jsx-radiogroup",isFullWidth:!0,labelText:"Radio Group",name:"radio-example",children:[e.jsx(a,{id:"arts",labelText:e.jsxs(p,{children:[e.jsx("span",{children:"Arts"}),e.jsx(R,{}),e.jsx("span",{children:"4"})]}),value:"arts"}),e.jsx(a,{id:"english",labelText:e.jsxs(p,{children:[e.jsx("span",{children:"English"}),e.jsx(R,{}),e.jsx("span",{children:"23"})]}),value:"English"}),e.jsx(a,{id:"science",labelText:e.jsxs(p,{children:[e.jsx("span",{children:"Science"}),e.jsx(R,{}),e.jsx("span",{children:"10"})]}),value:"Science"}),e.jsx(a,{id:"math",labelText:e.jsxs(p,{children:[e.jsx("span",{children:"Math"}),e.jsx(R,{}),e.jsx("span",{children:"3"})]}),value:"Math"})]}),name:"Label Using JSX Elements"};function P(){const i=l=>{console.log(`Controlled example. Selected: ${l}`)};return e.jsxs(r,{defaultValue:"3",id:"controlled-example",labelText:"Controlled RadioGroup",name:"radioGroupExample",onChange:i,children:[e.jsx(a,{id:"2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"4",labelText:"Radio 4",value:"4"})]})}const x={render:()=>e.jsx(P,{})};function $(){const i=A.createRef(),l=_=>{_.preventDefault();const M=i.current.value;console.log(`Uncontrolled example. Selected: ${M}`)};return e.jsx(z,{id:"form",onSubmit:l,children:e.jsxs(J,{columns:1,children:[e.jsxs(r,{defaultValue:"3",id:"uncontrolled-example",labelText:"Uncontrolled RadioGroup",name:"radioGroupExample",ref:i,children:[e.jsx(a,{id:"2",labelText:"Radio 2",value:"2"}),e.jsx(a,{id:"3",labelText:"Radio 3",value:"3"}),e.jsx(a,{id:"4",labelText:"Radio 4",value:"4"})]}),e.jsx(O,{children:e.jsx(N,{id:"submit",type:"submit",children:"Submit"})})]})})}const c={render:()=>e.jsx($,{})};var h,v,g,j,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getByLabelText("Radio 4")).toBeChecked();
    await userEvent.click(screen.getByLabelText("Radio 3"));
    await userEvent.click(screen.getByLabelText("Radio 2"));
    await userEvent.click(screen.getByLabelText("Radio 5"));
    expect(screen.getByLabelText("Radio 5")).toBeChecked();
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowleft}");
    await userEvent.keyboard("{arrowup}");
    await userEvent.keyboard("{arrowright}");
    await userEvent.keyboard("{arrowdown}");
    expect(screen.getByLabelText("Radio 2")).toBeChecked();
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:"Main Story for the RadioGroup component. This must contains the `args`\nand `parameters` properties in this object.",...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var f,y,G;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(G=(y=s.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var E,S,q;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          Errored
        </Heading>
        <RadioGroup defaultValue="4" id="errored" invalidText="Error message for the full group." isInvalid labelText="Errored Radio Group" name="errored-example">
          <Radio id="radio-2" labelText="Radio 2" value="2" />
          <Radio id="radio-3" labelText="Radio 3" value="3" />
          <Radio id="radio-4" labelText="Radio 4" value="4" />
          <Radio id="radio-5" labelText="Radio 5" value="5" />
        </RadioGroup>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Required
        </Heading>
        <RadioGroup helperText="The reason for being required." id="required" isRequired labelText="Required Radio Group" name="required-example">
          <Radio id="required-2" labelText="Radio 2" value="2" />
          <Radio id="required-3" labelText="Radio 3" value="3" />
          <Radio id="required-4" labelText="Radio 4" value="4" />
          <Radio id="required-5" labelText="Radio 5" value="5" />
        </RadioGroup>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          Disabled
        </Heading>
        <RadioGroup helperText="The reason for being disabled." id="disabled" isDisabled labelText="Disabled Radio Group" name="disabled-example">
          <Radio id="required-2" labelText="Radio 2" value="2" />
          <Radio id="required-3" labelText="Radio 3" value="3" />
          <Radio id="required-4" labelText="Radio 4" value="4" />
          <Radio id="required-5" labelText="Radio 5" value="5" />
        </RadioGroup>
      </Box>
    </VStack>
}`,...(q=(S=t.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var B,k,C;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,F,V;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <RadioGroupControlledExample />
}`,...(V=(F=x.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var D,H,I;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <RadioGroupUncontrolledExample />
}`,...(I=(H=c.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};const K=["Controls","LayoutPatterns","BrowserStates","JSXElement","ControlledExample","UncontrolledExample"],Q=Object.freeze(Object.defineProperty({__proto__:null,BrowserStates:t,ControlledExample:x,Controls:n,JSXElement:u,LayoutPatterns:s,UncontrolledExample:c,__namedExportsOrder:K,default:X},Symbol.toStringTag,{value:"Module"}));export{t as B,n as C,u as J,s as L,Q as R,c as U,x as a};
