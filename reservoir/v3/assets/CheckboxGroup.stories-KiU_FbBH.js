import{P as N,e as t,j as e,f as a,V as X,F as C,G as m,r as z,n as Y,o as v}from"./iframe-D93LbwGv.js";const{expect:r,userEvent:T,within:Q}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Form Elements/CheckboxGroup",component:t,argTypes:{children:{table:{disable:!0}},defaultValue:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:"false"}}},isFullWidth:{table:{defaultValue:{summary:"true"}}},isInvalid:{table:{defaultValue:{summary:"false"}}},isRequired:{table:{defaultValue:{summary:"false"}}},key:{table:{disable:!0}},layout:{table:{defaultValue:{summary:"column"}},options:N},name:{control:!1},onChange:{control:!1},ref:{table:{disable:!0}},showHelperInvalidText:{table:{defaultValue:{summary:"true"}}},showLabel:{table:{defaultValue:{summary:"true"}}},showRequiredLabel:{table:{defaultValue:{summary:"true"}}},value:{control:!1}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658"},jest:["CheckboxGroup.test.tsx"]}},n={args:{defaultValue:["4"],helperText:"This is the helper text for the full group.",id:"checkboxGroup-id",invalidText:"This is the error text :(",isDisabled:!1,isFullWidth:!1,isInvalid:!1,isRequired:!1,labelText:"Standard Checkbox Group",layout:"column",name:"checkbox-story",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0},render:l=>e.jsxs(t,{...l,children:[e.jsx(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e.jsx(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e.jsx(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e.jsx(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]}),play:async({canvasElement:l})=>{const c=Q(l);r(c.getByText("Standard Checkbox Group")).toBeInTheDocument(),r(c.getByText(/This is the helper text/)).toBeInTheDocument();const x=c.getByLabelText("Checkbox 2"),s=c.getByLabelText("Checkbox 4"),o=c.getByLabelText("Checkbox 5");r(x).not.toBeChecked(),r(s).not.toBeChecked(),await T.click(x),await T.click(s),r(x).toBeChecked(),r(s).toBeChecked(),await T.keyboard("{Tab}"),r(o).toHaveFocus(),await T.click(s),r(s).not.toBeChecked()}},i={render:()=>e.jsxs(X,{align:"left",spacing:"l",children:[e.jsxs(t,{id:"column",labelText:"Column (default)",name:"column-example",children:[e.jsx(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e.jsx(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e.jsx(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e.jsx(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]}),e.jsx("br",{}),e.jsxs(t,{id:"row",labelText:"Row",name:"row-example",layout:"row",children:[e.jsx(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e.jsx(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e.jsx(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e.jsx(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})]})},h={render:()=>e.jsxs(t,{id:"errored",invalidText:"Error message for the full group.",isInvalid:!0,labelText:"Errored Checkbox Group",name:"errored-example",children:[e.jsx(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e.jsx(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e.jsx(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e.jsx(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},b={render:()=>e.jsxs(t,{id:"required",isRequired:!0,labelText:"Required Checkbox Group",name:"required-example",helperText:"The reason for being required.",children:[e.jsx(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e.jsx(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e.jsx(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e.jsx(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},d={render:()=>e.jsxs(t,{id:"disabled",isDisabled:!0,labelText:"Disabled Checkbox Group",name:"disabled-example",helperText:"The reason for being disabled.",children:[e.jsx(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e.jsx(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e.jsx(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e.jsx(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},u={render:()=>e.jsxs(t,{id:"full-width",isFullWidth:!0,labelText:"Checkbox Group",name:"checkbox-example",children:[e.jsx(a,{labelText:e.jsxs(C,{children:[e.jsx("span",{children:"Arts"}),e.jsx(m,{}),e.jsx("span",{children:"4"})]}),value:"Arts",id:"arts"}),e.jsx(a,{labelText:e.jsxs(C,{children:[e.jsx("span",{children:"English"}),e.jsx(m,{}),e.jsx("span",{children:"23"})]}),value:"English",id:"english"}),e.jsx(a,{labelText:e.jsxs(C,{children:[e.jsx("span",{children:"Science"}),e.jsx(m,{}),e.jsx("span",{children:"10"})]}),value:"Science",id:"science"}),e.jsx(a,{labelText:e.jsxs(C,{children:[e.jsx("span",{children:"Math"}),e.jsx(m,{}),e.jsx("span",{children:"3"})]}),value:"Math",id:"math"})]})};function $(){const[l,c]=z.useState([!1,!1]),x=l.every(Boolean),s=l.some(Boolean)&&!x;return e.jsxs(t,{id:"indeterminate",labelText:"Indeterminate Example",name:"indeterminate-example",children:[e.jsx(a,{isChecked:x,isIndeterminate:s,onChange:o=>c([o.target.checked,o.target.checked]),labelText:"Parent Checkbox",id:"parent-checkbox"}),e.jsx(a,{isChecked:l[0],onChange:o=>c([o.target.checked,l[1]]),labelText:"Child Checkbox 1",id:"child-checkbox-1"}),e.jsx(a,{isChecked:l[1],onChange:o=>c([l[0],o.target.checked]),labelText:"Child Checkbox 2",id:"child-checkbox-2"})]})}const k={render:()=>e.jsx($,{})};function ee(){const[l,c]=z.useState([]),x=()=>{c(["art","science","math"])},s=()=>{c(["math","music","magic"])},o=()=>{c(["physics","science","chemistry"])},K=j=>{c(j),console.log("Selected values:",j)};return e.jsxs(X,{align:"stretch",spacing:"m",children:[e.jsx("span",{children:"Set values to:"}),e.jsxs(Y,{children:[e.jsx(v,{id:"btn1",onClick:x,children:'"art", "science", "math"'}),e.jsx(v,{id:"btn2",onClick:s,children:'"math", "music", "magic"'}),e.jsx(v,{id:"btn3",onClick:o,children:'"physics", "science", "chemistry"'})]}),e.jsxs(t,{id:"programmatically-update-example",labelText:"Course Selection",name:"courseSelection",onChange:K,value:l,children:[e.jsx(a,{id:"art",labelText:"Art",value:"art"}),e.jsx(a,{id:"chemistry",labelText:"Chemistry",value:"chemistry"}),e.jsx(a,{id:"english",labelText:"English",value:"english"}),e.jsx(a,{id:"magic",labelText:"Magic",value:"magic"}),e.jsx(a,{id:"math",labelText:"Math",value:"math"}),e.jsx(a,{id:"music",labelText:"Music",value:"music"}),e.jsx(a,{id:"physics",labelText:"Physics",value:"physics"}),e.jsx(a,{id:"science",labelText:"Science",value:"science"})]})]})}const p={render:()=>e.jsx(ee,{})};var g,f,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: ["4"],
    helperText: "This is the helper text for the full group.",
    id: "checkboxGroup-id",
    invalidText: "This is the error text :(",
    isDisabled: false,
    isFullWidth: false,
    isInvalid: false,
    isRequired: false,
    labelText: "Standard Checkbox Group",
    layout: "column",
    name: "checkbox-story",
    onChange: undefined,
    showHelperInvalidText: true,
    showLabel: true,
    showRequiredLabel: true
  },
  render: args => <CheckboxGroup {...args}>
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>,
  play: async ({
    canvasElement
  }) => {
    const screen = within(canvasElement);
    expect(screen.getByText("Standard Checkbox Group")).toBeInTheDocument();
    expect(screen.getByText(/This is the helper text/)).toBeInTheDocument();
    const checkbox2 = screen.getByLabelText("Checkbox 2");
    const checkbox4 = screen.getByLabelText("Checkbox 4");
    const checkbox5 = screen.getByLabelText("Checkbox 5");
    expect(checkbox2).not.toBeChecked();
    expect(checkbox4).not.toBeChecked();
    await userEvent.click(checkbox2);
    await userEvent.click(checkbox4);
    expect(checkbox2).toBeChecked();
    expect(checkbox4).toBeChecked();
    await userEvent.keyboard("{Tab}");
    expect(checkbox5).toHaveFocus();
    await userEvent.click(checkbox4);
    expect(checkbox4).not.toBeChecked();
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,G,E;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <CheckboxGroup id="column" labelText="Column (default)" name="column-example">
        <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
        <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
      </CheckboxGroup>
      <br />
      <CheckboxGroup id="row" labelText="Row" name="row-example" layout="row">
        <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
        <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
        <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
        <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
      </CheckboxGroup>
    </VStack>
}`,...(E=(G=i.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var w,B,I;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="errored" invalidText="Error message for the full group." isInvalid labelText="Errored Checkbox Group" name="errored-example">
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>
}`,...(I=(B=h.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var V,q,F;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="required" isRequired labelText="Required Checkbox Group" name="required-example" helperText="The reason for being required.">
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>
}`,...(F=(q=b.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var L,R,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="disabled" isDisabled labelText="Disabled Checkbox Group" name="disabled-example" helperText="The reason for being disabled.">
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>
}`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var _,M,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="full-width" isFullWidth labelText="Checkbox Group" name="checkbox-example">
      <Checkbox labelText={<Flex>
            <span>Arts</span>
            <Spacer />
            <span>4</span>
          </Flex>} value="Arts" id="arts" />
      <Checkbox labelText={<Flex>
            <span>English</span>
            <Spacer />
            <span>23</span>
          </Flex>} value="English" id="english" />
      <Checkbox labelText={<Flex>
            <span>Science</span>
            <Spacer />
            <span>10</span>
          </Flex>} value="Science" id="science" />
      <Checkbox labelText={<Flex>
            <span>Math</span>
            <Spacer />
            <span>3</span>
          </Flex>} value="Math" id="math" />
    </CheckboxGroup>
}`,...(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var W,O,P;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <IndeterminateCheckboxExample />
}`,...(P=(O=k.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var U,H,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <CheckboxGroupValuesUpdateExample />
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ae=["WithControls","Layout","Errored","Required","Disabled","LabelsUsingJSXElements","IndeterminateExample","ProgrammaticallyUpdateValues"],le=Object.freeze(Object.defineProperty({__proto__:null,Disabled:d,Errored:h,IndeterminateExample:k,LabelsUsingJSXElements:u,Layout:i,ProgrammaticallyUpdateValues:p,Required:b,WithControls:n,__namedExportsOrder:ae,default:Z},Symbol.toStringTag,{value:"Module"}));export{le as C,d as D,h as E,k as I,i as L,p as P,b as R,n as W,u as a};
