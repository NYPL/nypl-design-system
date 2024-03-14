import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as x}from"./index-0cbcd92a.js";import{w as v}from"./index-6148c31a.js";import{F as m,f as F}from"./FeedbackBox-9e7be7e7.js";import{H as n}from"./Heading-7eebc756.js";import{u as w}from"./TextInput-70995d87.js";import{B as t}from"./chakra-ui-layout.esm-e0dbb94e.js";const k={title:"Components/Form Elements/FeedbackBox",component:m,decorators:[v],parameters:{jest:["FeedbackBox.test.tsx"]},argTypes:{className:{control:!1},hiddenFields:{control:!1},id:{control:!1},isInvalidComment:{table:{defaultValue:{summary:!1}}},isInvalidEmail:{table:{defaultValue:{summary:!1}}},isOpen:{table:{disable:!0}},notificationText:{control:!1},onClose:{table:{disable:!0}},onOpen:{table:{disable:!0}},onSubmit:{control:!1},showCategoryField:{table:{defaultValue:{summary:!1}}},showEmailField:{table:{defaultValue:{summary:!0}}},view:{control:{type:"select"},options:F,table:{defaultValue:{summary:"form"}}}}},y=o=>{const[u,f]=w(o.view),[h,p]=x.useState(0);return a(t,{maxHeight:"200px",overflowY:"auto",children:[e(t,{height:"400px",bgColor:"ui.white",width:"100%",children:e(n,{level:"h3",m:"s",children:"ui.white"})}),e(t,{height:"400px",bgColor:"ui.bg.default",width:"100%",children:e(n,{level:"h3",m:"s",children:"ui.bg.default"})}),e(t,{height:"400px",bgColor:"dark.ui.bg.default",width:"100%",children:e(n,{level:"h3",m:"s",color:"ui.white",children:"dark.ui.bg.default"})}),e(t,{height:"400px",bgColor:"dark.ui.bg.page",width:"100%",children:e(n,{level:"h3",m:"s",color:"ui.white",children:"dark.ui.bg.page"})}),e(m,{...o,hiddenFields:{"hidden-field-1":"hidden-field-value-1","hidden-field-2":"hidden-field-value-2"},notificationText:a("span",{children:[e("b",{children:"Call Number:"})," JFE 95-8555"]}),onSubmit:b=>{p(g=>g+1),f(h%2===0?"confirmation":"error"),console.log("Submitted values:",b)},view:u})]})},i={args:{className:void 0,confirmationText:"",descriptionText:"Please share your question or feedback.",hiddenFields:void 0,id:"feedbackBox-id",isInvalidComment:!1,isInvalidEmail:!1,isOpen:void 0,notificationText:void 0,onClose:void 0,onOpen:void 0,onSubmit:void 0,showCategoryField:!1,showEmailField:!1,title:"Help and Feedback",view:"form"},parameters:{design:{type:"figma",url:""},jest:"FeedbackBox.test.tsx"},render:o=>e(y,{...o})};var s,r,l,d,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    className: undefined,
    confirmationText: "",
    descriptionText: "Please share your question or feedback.",
    hiddenFields: undefined,
    id: "feedbackBox-id",
    isInvalidComment: false,
    isInvalidEmail: false,
    isOpen: undefined,
    notificationText: undefined,
    onClose: undefined,
    onOpen: undefined,
    onSubmit: undefined,
    showCategoryField: false,
    showEmailField: false,
    title: "Help and Feedback",
    view: "form"
  },
  parameters: {
    design: {
      type: "figma",
      url: ""
    },
    jest: "FeedbackBox.test.tsx"
  },
  render: args => <FeedbackBoxWithControls {...args} />
}`,...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source},description:{story:"Main Story for the FeedbackBox component. This must contains the `args`\nand `parameters` properties in this object.",...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.description}}};const C=["WithControls"],_=Object.freeze(Object.defineProperty({__proto__:null,WithControls:i,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{_ as F,i as W};
//# sourceMappingURL=FeedbackBox.stories-b5811bca.js.map
