import{a as l,j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as O}from"./index-0cbcd92a.js";import{w as z}from"./index-6148c31a.js";import{B as C}from"./Button-948e9be8.js";import{B as N}from"./ButtonGroup-c2c033a6.js";import{C as a}from"./Checkbox-6e7b1e16.js";import{C as o}from"./CheckboxGroup-6c26da72.js";import{l as K}from"./types-ee6958f5.js";import{V as X,F as k,A as p}from"./chakra-ui-layout.esm-e0dbb94e.js";const Q={title:"Components/Form Elements/CheckboxGroup",component:o,decorators:[z],argTypes:{children:{table:{disable:!0}},defaultValue:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},isFullWidth:{table:{defaultValue:{summary:!0}}},isInvalid:{table:{defaultValue:{summary:!1}}},isRequired:{table:{defaultValue:{summary:!1}}},key:{table:{disable:!0}},layout:{table:{defaultValue:{summary:"column"}},options:K},name:{control:!1},onChange:{control:!1},ref:{table:{disable:!0}},showHelperInvalidText:{table:{defaultValue:{summary:!0}}},showLabel:{table:{defaultValue:{summary:!0}}},showRequiredLabel:{table:{defaultValue:{summary:!0}}},value:{control:!1}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11895%3A658"},jest:["CheckboxGroup.test.tsx"]}},n={args:{defaultValue:["4"],helperText:"This is the helper text for the full group.",id:"checkboxGroup-id",invalidText:"This is the error text :(",isDisabled:!1,isFullWidth:!1,isInvalid:!1,isRequired:!1,labelText:"Standard Checkbox Group",layout:"column",name:"checkbox-story",onChange:void 0,showHelperInvalidText:!0,showLabel:!0,showRequiredLabel:!0},render:c=>l(o,{...c,children:[e(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},i={render:()=>l(X,{align:"left",spacing:"l",children:[l(o,{id:"column",labelText:"Column (default)",name:"column-example",children:[e(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]}),e("br",{}),l(o,{id:"row",labelText:"Row",name:"row-example",layout:"row",children:[e(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})]})},s={render:()=>l(o,{id:"errored",invalidText:"Error message for the full group.",isInvalid:!0,labelText:"Errored Checkbox Group",name:"errored-example",children:[e(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},x={render:()=>l(o,{id:"required",isRequired:!0,labelText:"Required Checkbox Group",name:"required-example",helperText:"The reason for being required.",children:[e(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},b={render:()=>l(o,{id:"disabled",isDisabled:!0,labelText:"Disabled Checkbox Group",name:"disabled-example",helperText:"The reason for being disabled.",children:[e(a,{id:"checkbox-2",value:"2",labelText:"Checkbox 2"}),e(a,{id:"checkbox-3",value:"3",labelText:"Checkbox 3"}),e(a,{id:"checkbox-4",value:"4",labelText:"Checkbox 4"}),e(a,{id:"checkbox-5",value:"5",labelText:"Checkbox 5"})]})},h={render:()=>l(o,{id:"full-width",isFullWidth:!0,labelText:"Checkbox Group",name:"checkbox-example",children:[e(a,{labelText:l(k,{children:[e("span",{children:"Arts"}),e(p,{}),e("span",{children:"4"})]}),value:"Arts",id:"arts"}),e(a,{labelText:l(k,{children:[e("span",{children:"English"}),e(p,{}),e("span",{children:"23"})]}),value:"English",id:"english"}),e(a,{labelText:l(k,{children:[e("span",{children:"Science"}),e(p,{}),e("span",{children:"10"})]}),value:"Science",id:"science"}),e(a,{labelText:l(k,{children:[e("span",{children:"Math"}),e(p,{}),e("span",{children:"3"})]}),value:"Math",id:"math"})]})};function Y(){const[c,r]=O.useState([!1,!1]),m=c.every(Boolean),T=c.some(Boolean)&&!m;return l(o,{id:"indeterminate",labelText:"Indeterminate Example",name:"indeterminate-example",children:[e(a,{isChecked:m,isIndeterminate:T,onChange:t=>r([t.target.checked,t.target.checked]),labelText:"Parent Checkbox",id:"parent-checkbox"}),e(a,{isChecked:c[0],onChange:t=>r([t.target.checked,c[1]]),labelText:"Child Checkbox 1",id:"child-checkbox-1"}),e(a,{isChecked:c[1],onChange:t=>r([c[0],t.target.checked]),labelText:"Child Checkbox 2",id:"child-checkbox-2"})]})}const d={render:()=>e(Y,{})};function Z(){const[c,r]=O.useState([]);return l(X,{align:"stretch",spacing:"m",children:[e("span",{children:"Set values to:"}),l(N,{children:[e(C,{id:"btn1",onClick:()=>{r(["art","science","math"])},children:'"art", "science", "math"'}),e(C,{id:"btn2",onClick:()=>{r(["math","music","magic"])},children:'"math", "music", "magic"'}),e(C,{id:"btn3",onClick:()=>{r(["physics","science","chemistry"])},children:'"physics", "science", "chemistry"'})]}),l(o,{id:"programmatically-update-example",labelText:"Course Selection",name:"courseSelection",onChange:v=>{r(v),console.log("Selected values:",v)},value:c,children:[e(a,{id:"art",labelText:"Art",value:"art"}),e(a,{id:"chemistry",labelText:"Chemistry",value:"chemistry"}),e(a,{id:"english",labelText:"English",value:"english"}),e(a,{id:"magic",labelText:"Magic",value:"magic"}),e(a,{id:"math",labelText:"Math",value:"math"}),e(a,{id:"music",labelText:"Music",value:"music"}),e(a,{id:"physics",labelText:"Physics",value:"physics"}),e(a,{id:"science",labelText:"Science",value:"science"})]})]})}const u={render:()=>e(Z,{})};var f,g,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    </CheckboxGroup>
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,G,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(G=i.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var E,V,q;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="errored" invalidText="Error message for the full group." isInvalid labelText="Errored Checkbox Group" name="errored-example">
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>
}`,...(q=(V=s.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var I,F,R;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="required" isRequired labelText="Required Checkbox Group" name="required-example" helperText="The reason for being required.">
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var D,L,M;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <CheckboxGroup id="disabled" isDisabled labelText="Disabled Checkbox Group" name="disabled-example" helperText="The reason for being disabled.">
      <Checkbox id="checkbox-2" value="2" labelText="Checkbox 2" />
      <Checkbox id="checkbox-3" value="3" labelText="Checkbox 3" />
      <Checkbox id="checkbox-4" value="4" labelText="Checkbox 4" />
      <Checkbox id="checkbox-5" value="5" labelText="Checkbox 5" />
    </CheckboxGroup>
}`,...(M=(L=b.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var A,W,j;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(W=h.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var B,P,U;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <IndeterminateCheckboxExample />
}`,...(U=(P=d.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,H,J;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <CheckboxGroupValuesUpdateExample />
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const $=["WithControls","Layout","Errored","Required","Disabled","LabelsUsingJSXElements","IndeterminateExample","ProgrammaticallyUpdateValues"],xe=Object.freeze(Object.defineProperty({__proto__:null,Disabled:b,Errored:s,IndeterminateExample:d,LabelsUsingJSXElements:h,Layout:i,ProgrammaticallyUpdateValues:u,Required:x,WithControls:n,__namedExportsOrder:$,default:Q},Symbol.toStringTag,{value:"Module"}));export{xe as C,b as D,s as E,d as I,i as L,u as P,x as R,n as W,h as a};
//# sourceMappingURL=CheckboxGroup.stories-9ea99fd5.js.map
