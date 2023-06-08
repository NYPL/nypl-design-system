import{j as c}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{a as u}from"./chunk-OPEUWD42-a3b45fd8.js";import{r}from"./index-f2bd0723.js";import{w as v}from"./index-6148c31a.js";import{M as f}from"./MultiSelect-e1506487.js";import{u as w}from"./useMultiSelect-de2913cb.js";const g=[{id:"art",name:"Art"},{id:"architecture",name:"Architecture"},{id:"art_history",name:"Art History"},{id:"design",name:"Design",children:[{id:"fashion",name:"Fashion"},{id:"ux",name:"User Experience"}]},{id:"business",name:"Business"},{id:"advertising",name:"Advertising"},{id:"government_and_law",name:"Government and Law"},{id:"civil_rights",name:"Civil Rights"},{id:"history",name:"History"},{id:"atlases",name:"Atlases"},{id:"cartography",name:"Cartography"},{id:"geology",name:"Geology"}],I={title:"Components/Form Elements/MultiSelect",component:f,decorators:[v],argTypes:{id:{control:!1},isBlockElement:{table:{defaultValue:{summary:"false"}},control:!1},isDefaultOpen:{table:{defaultValue:{summary:"false"}},control:!1},items:{control:!1},labelText:{table:{default:""}},onApply:{description:"The action to perform for save/apply button of multiselect. <br /> `onApply: () => void;`"},onChange:{description:"The action to perform on the checkbox's onChange function. <br /> For dialog: `(event: React.ChangeEvent<HTMLInputElement>) => void` <br /> For listbox: `onChange: (selectedItem: MultiSelectItem, id: string) => void;`"},onMixedStateChange:{description:"The action to perform for a mixed state checkbox (parent checkbox). <br /> `onMixedStateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;`"},selectedItems:{control:!1},type:{control:!1},width:{description:"Value used to set the width for the MultiSelect component",control:"radio",options:["default","fitContent","full"],table:{defaultValue:{summary:"default"}}}}},s={args:{id:"multiselect-listbox",labelText:"MultiSelect Listbox",type:"listbox"},render:e=>c(T,{...e}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"},jest:["MultiSelect.test.tsx"]}},l={args:{id:"multiselect-dialog",labelText:"MultiSelect Dialog",type:"dialog"},render:e=>c(D,{...e}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"},jest:["MultiSelect.test.tsx"]}},T=e=>{const{onChange:d,onClear:m,selectedItems:n}=w(),t=e.id,[a,o]=r.useState("");return r.useEffect(()=>{Object.keys(n).length!==0&&u(a)(n)},[a,n]),c(f,{...e,isDefaultOpen:!0,items:g,selectedItems:n,onChange:i=>{d(i.id,t),o("onChange")},onClear:()=>{m(t),o("onClear")}})},D=e=>{const{onChange:d,onMixedStateChange:m,onClear:n,selectedItems:t}=w(),a=e.id,[o,i]=r.useState("");return r.useEffect(()=>{Object.keys(t).length!==0&&u(o)(t),o==="onClear"&&u(o)(t)},[o,t]),c(f,{...e,items:g,isDefaultOpen:!1,selectedItems:t,onChange:p=>{d(p.target.id,a),i("onChange")},onMixedStateChange:p=>{m(p.target.id,a,g),i("onMixedStateChange")},onClear:()=>{n(a),i("onClear")},onApply:()=>{i("onApply")}})};var h,S,b,y,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "multiselect-listbox",
    labelText: "MultiSelect Listbox",
    type: "listbox"
  },
  render: args => <MultiSelectListboxStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"
    },
    jest: ["MultiSelect.test.tsx"]
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:"Main Stories for the MultiSelect component. This must contains the `args`\nand `parameters` properties in this object.",...(M=(y=s.parameters)==null?void 0:y.docs)==null?void 0:M.description}}};var x,C,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "multiselect-dialog",
    labelText: "MultiSelect Dialog",
    type: "dialog"
  },
  render: args => <MultiSelectDialogStory {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=43593%3A24611"
    },
    jest: ["MultiSelect.test.tsx"]
  }
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const j=["ListboxControls","DialogControls"],O=Object.freeze(Object.defineProperty({__proto__:null,DialogControls:l,ListboxControls:s,__namedExportsOrder:j,default:I},Symbol.toStringTag,{value:"Module"}));export{l as D,s as L,O as M};
//# sourceMappingURL=MultiSelect.stories-5c925d92.js.map
