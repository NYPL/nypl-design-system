import{aL as M,aM as F,af as l,j as e,V as H,r as _,aa as P,ac as U,o as z}from"./iframe-D93LbwGv.js";import{a}from"./storybookUtils-BmTl87w5.js";const{expect:h,userEvent:v,within:N}=__STORYBOOK_MODULE_TEST__,J={title:"Components/Form Elements/Select",component:l,argTypes:{children:{table:{disable:!0}},className:{control:!1},defaultValue:{control:!1},helperText:{control:"text"},id:{control:!1},invalidText:{control:"text"},isDisabled:a(),isInvalid:a(),isRequired:a(),labelPosition:{controls:{type:"select"},options:F,table:{defaultValue:{summary:"default"}},control:{type:"radio"}},name:{control:!1},onChange:{control:!1},placeholder:{control:"text"},ref:{table:{disable:!0}},selectType:{control:!1,options:M,table:{defaultValue:{summary:"default"}}},showHelperInvalidText:a("true"),showLabel:a("true"),showRequiredLabel:a("true"),value:{control:!1}}},i={args:{className:void 0,defaultValue:void 0,helperText:"This is the helper text.",id:"select-id",invalidText:"This is the error text :(",isDisabled:!1,isInvalid:!1,isRequired:!1,labelPosition:"default",labelText:"What is your favorite color?",name:"color",onChange:void 0,placeholder:void 0,showHelperInvalidText:void 0,showLabel:!0,showRequiredLabel:!0,selectType:"default",value:void 0},render:o=>e.jsxs(l,{...o,children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11895%3A549"},jest:["Select.test.tsx"]},play:async({canvasElement:o})=>{const t=N(o),n=t.getByRole("combobox");await v.selectOptions(n,"green"),h(t.getByText("Green").selected).toBeTruthy(),await v.selectOptions(n,"black"),h(t.getByText("Black").selected).toBeTruthy(),h(t.getByText("Green").selected).toBeFalsy()}},r={render:()=>e.jsxs(H,{align:"stretch",spacing:8,children:[e.jsxs(l,{helperText:"Display the label",id:"label-example1",labelText:"What is your favorite color?",name:"color",children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),e.jsxs(l,{helperText:"Do not display the label",id:"label-example2",labelText:"What is your favorite color?",name:"color",showLabel:!1,children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),e.jsxs(l,{helperText:"Display the required text",id:"label-example3",isRequired:!0,labelText:"What is your favorite color?",name:"color",children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),e.jsxs(l,{helperText:"Do not display the required text",id:"label-example4",isRequired:!0,labelText:"What is your favorite color?",name:"color",showRequiredLabel:!1,children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),e.jsxs(l,{helperText:"Display a custom required text",id:"label-example4",isRequired:!0,labelText:"What is your favorite color?",name:"color",requiredLabelText:"* custom required label",children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),e.jsxs(l,{helperText:"Display the label inline",id:"label-example5",isRequired:!0,labelText:"What is your favorite color?",name:"color",labelPosition:"inline",children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]})]})},s={render:()=>e.jsxs(l,{helperText:"This is the helper text.",id:"errored",invalidText:"This is the error text :(",isInvalid:!0,labelText:"What is your favorite color?",name:"color",children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]})},c={render:()=>e.jsxs(l,{helperText:"This is the helper text.",id:"disabled",invalidText:"This is the error text :(",isDisabled:!0,labelText:"What is your favorite color?",name:"color",children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]})},u={render:()=>e.jsxs(l,{autoComplete:"country-name",id:"autocomplete",labelText:"Select a country",name:"country",children:[e.jsx("option",{value:"algeria",children:"Algeria"}),e.jsx("option",{value:"argentina",children:"Argentina"}),e.jsx("option",{value:"australia",children:"Australia"}),e.jsx("option",{value:"brazil",children:"Brazil"}),e.jsx("option",{value:"canada",children:"Canada"}),e.jsx("option",{value:"china",children:"China"})]})};function K(){const[o,t]=_.useState(),n=x=>{console.log("Controlled value:",x.target.value),t(x.target.value)};return e.jsxs(l,{helperText:"This is the helper text.",id:"example-1",labelText:"What is your favorite color?",name:"color",onChange:n,value:o,children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]})}const p={render:()=>e.jsx(K,{})};function Y(){const o=_.createRef(),t=()=>{const n=o.current.value;console.log("Using uncontrolled ref:",n)};return e.jsx(P,{id:"form",children:e.jsxs(U,{children:[e.jsxs(l,{defaultValue:"white",helperText:"This is the helper text.",id:"example-2",labelText:"What is your favorite color?",name:"color",ref:o,children:[e.jsx("option",{value:"red",children:"Red"}),e.jsx("option",{value:"green",children:"Green"}),e.jsx("option",{value:"blue",children:"Blue"}),e.jsx("option",{value:"black",children:"Black"}),e.jsx("option",{value:"white",children:"White"})]}),e.jsx(z,{id:"submit",onClick:t,children:"Submit"})]})})}const d={render:()=>e.jsx(Y,{})};var b,m,T,j,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: undefined,
    defaultValue: undefined,
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
    placeholder: undefined,
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
  },
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "green");
    expect((screen.getByText("Green") as HTMLOptionElement).selected).toBeTruthy();
    await userEvent.selectOptions(select, "black");
    expect((screen.getByText("Black") as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText("Green") as HTMLOptionElement).selected).toBeFalsy();
  }
}`,...(T=(m=i.parameters)==null?void 0:m.docs)==null?void 0:T.source},description:{story:"Main Story for the Select component. This must contains the `args`\nand `parameters` properties in this object.",...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.description}}};var y,g,B;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      <Select helperText="Display the required text" id="label-example3" isRequired labelText="What is your favorite color?" name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select helperText="Do not display the required text" id="label-example4" isRequired labelText="What is your favorite color?" name="color" showRequiredLabel={false}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </Select>
      <Select helperText="Display a custom required text" id="label-example4" isRequired labelText="What is your favorite color?" name="color" requiredLabelText="* custom required label">
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
}`,...(B=(g=r.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var S,k,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Select helperText="This is the helper text." id="errored" invalidText="This is the error text :(" isInvalid labelText="What is your favorite color?" name="color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var W,R,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Select helperText="This is the helper text." id="disabled" invalidText="This is the error text :(" isDisabled labelText="What is your favorite color?" name="color">
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="black">Black</option>
      <option value="white">White</option>
    </Select>
}`,...(G=(R=c.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var q,C,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Select autoComplete="country-name" id="autocomplete" labelText="Select a country" name="country">
      <option value="algeria">Algeria</option>
      <option value="argentina">Argentina</option>
      <option value="australia">Australia</option>
      <option value="brazil">Brazil</option>
      <option value="canada">Canada</option>
      <option value="china">China</option>
    </Select>
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,L,V;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <SelectControlledExample />
}`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var A,I,O;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SelectUncontrolledExample />
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const Q=["WithControls","LabellingVariations","Errored","Disabled","AutoComplete","GetInputValue","GetUncontrolledInputValue"],$=Object.freeze(Object.defineProperty({__proto__:null,AutoComplete:u,Disabled:c,Errored:s,GetInputValue:p,GetUncontrolledInputValue:d,LabellingVariations:r,WithControls:i,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{u as A,c as D,s as E,p as G,r as L,$ as S,i as W,d as a};
