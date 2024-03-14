import{a as l,j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as I}from"./index-0cbcd92a.js";import{w as L}from"./index-6148c31a.js";import{B as E}from"./Button-948e9be8.js";import{a as j,F}from"./Form-b79b3734.js";import{S as o,l as P}from"./Select-2c2d1d20.js";import{V as M}from"./chakra-ui-layout.esm-e0dbb94e.js";const _={title:"Components/Form Elements/Select",component:o,decorators:[L],argTypes:{children:{table:{disable:!0}},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},isInvalid:{table:{defaultValue:{summary:!1}}},isRequired:{table:{defaultValue:{summary:!1}}},labelPosition:{controls:{type:"select"},options:P,table:{defaultValue:{summary:"default"}}},name:{control:!1},key:{table:{disable:!0}},onChange:{control:!1},ref:{table:{disable:!0}},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},showLabel:{table:{defaultValue:{summary:!0}}},showRequiredLabel:{table:{defaultValue:{summary:!0}}},selectType:{control:!1,table:{defaultValue:{summary:"default"}}},value:{control:!1}}},n={args:{className:void 0,helperText:"This is the helper text.",id:"select-id",invalidText:"This is the error text :(",isDisabled:!1,isInvalid:!1,isRequired:!1,labelPosition:"default",labelText:"What is your favorite color?",name:"color",onChange:void 0,showHelperInvalidText:void 0,showLabel:!0,showRequiredLabel:!0,selectType:"default",value:void 0},render:t=>l(o,{...t,children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A549"},jest:["Select.test.tsx"]}},i={render:()=>l(M,{align:"stretch",spacing:8,children:[l(o,{helperText:"Display the label",id:"label-example1",labelText:"What is your favorite color?",name:"color",children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]}),l(o,{helperText:"Do not display the label",id:"label-example2",labelText:"What is your favorite color?",name:"color",showLabel:!1,children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]}),l(o,{helperText:"Display the Required text",id:"label-example3",isRequired:!0,labelText:"What is your favorite color?",name:"color",children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]}),l(o,{helperText:"Do not display the Required text",id:"label-example4",isRequired:!0,labelText:"What is your favorite color?",name:"color",showRequiredLabel:!1,children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]}),l(o,{helperText:"Display the label inline",id:"label-example5",isRequired:!0,labelText:"What is your favorite color?",name:"color",labelPosition:"inline",children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]})]})},a={render:()=>l(o,{helperText:"This is the helper text.",id:"errored",invalidText:"This is the error text :(",isInvalid:!0,labelText:"What is your favorite color?",name:"color",children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]})},r={render:()=>l(o,{helperText:"This is the helper text.",id:"disabled",invalidText:"This is the error text :(",isDisabled:!0,labelText:"What is your favorite color?",name:"color",children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]})};function A(){const[t,c]=I.useState();return l(o,{helperText:"This is the helper text.",id:"example-1",labelText:"What is your favorite color?",name:"color",onChange:p=>{console.log("Controlled value:",p.target.value),c(p.target.value)},value:t,children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]})}const s={render:()=>e(A,{})};function H(){const t=I.createRef();return e(F,{id:"form",children:l(j,{children:[l(o,{helperText:"This is the helper text.",id:"example-2",labelText:"What is your favorite color?",name:"color",ref:t,children:[e("option",{value:"red",children:"Red"}),e("option",{value:"green",children:"Green"}),e("option",{value:"blue",children:"Blue"}),e("option",{value:"black",children:"Black"}),e("option",{value:"white",children:"White"})]}),e(E,{id:"submit",onClick:()=>{const d=t.current.value;console.log("Using uncontrolled ref:",d)},children:"Submit"})]})})}const u={render:()=>e(H,{})};var h,v,b,m,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: undefined,
    helperText: "This is the helper text.",
    id: "select-id",
    invalidText: "This is the error text :(",
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    labelPosition: "default",
    labelText: "What is your favorite color?",
    name: "color",
    onChange: undefined,
    showHelperInvalidText: undefined,
    showLabel: true,
    showRequiredLabel: true,
    selectType: "default",
    value: undefined
  },
  render: args => <Select {...args}>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A549"
    },
    jest: ["Select.test.tsx"]
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"Main Story for the Select component. This must contains the `args`\nand `parameters` properties in this object.",...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var f,T,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing={8}>
      <Select helperText="Display the label" id="label-example1" labelText="What is your favorite color?" name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select helperText="Do not display the label" id="label-example2" labelText="What is your favorite color?" name="color" showLabel={false}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select helperText="Display the Required text" id="label-example3" isRequired labelText="What is your favorite color?" name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select helperText="Do not display the Required text" id="label-example4" isRequired labelText="What is your favorite color?" name="color" showRequiredLabel={false}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select helperText="Display the label inline" id="label-example5" isRequired labelText="What is your favorite color?" name="color" labelPosition="inline">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
    </VStack>
}`,...(g=(T=i.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var y,S,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Select helperText="This is the helper text." id="errored" invalidText="This is the error text :(" isInvalid labelText="What is your favorite color?" name="color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,W,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Select helperText="This is the helper text." id="disabled" invalidText="This is the error text :(" isDisabled labelText="What is your favorite color?" name="color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
}`,...(B=(W=r.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var R,G,q;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <SelectControlledExample />
}`,...(q=(G=s.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var V,D,C;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <SelectUncontrolledExample />
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const U=["WithControls","LabellingVariations","Errored","Disabled","GetInputValue","GetUncontrolledInputValue"],Y=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Errored:a,GetInputValue:s,GetUncontrolledInputValue:u,LabellingVariations:i,WithControls:n,__namedExportsOrder:U,default:_},Symbol.toStringTag,{value:"Module"}));export{r as D,a as E,s as G,i as L,Y as S,n as W,u as a};
//# sourceMappingURL=Select.stories-d51b3310.js.map
