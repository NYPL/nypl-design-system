import{j as n,a as b}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as h}from"./index-f2bd0723.js";import{w as x}from"./index-6148c31a.js";import{F as r,f as F}from"./FeedbackBox-8fd366e4.js";import{u as v}from"./TextInput-3683470d.js";const y={title:"Components/Form Elements/FeedbackBox",component:r,decorators:[x],parameters:{jest:["FeedbackBox.test.tsx"]},argTypes:{className:{control:!1},hiddenFields:{control:!1},id:{control:!1},isInvalidComment:{table:{defaultValue:{summary:!1}}},isInvalidEmail:{table:{defaultValue:{summary:!1}}},isOpen:{table:{disable:!0}},notificationText:{control:!1},onClose:{table:{disable:!0}},onOpen:{table:{disable:!0}},onSubmit:{control:!1},showCategoryField:{table:{defaultValue:{summary:!1}}},showEmailField:{table:{defaultValue:{summary:!0}}},view:{control:{type:"select"},options:F,table:{defaultValue:{summary:"form"}}}}},g=t=>{const[l,m]=v(t.view),[c,f]=h.useState(0);return n(r,{...t,hiddenFields:{"hidden-field-1":"hidden-field-value-1","hidden-field-2":"hidden-field-value-2"},notificationText:b("span",{children:[n("b",{children:"Call Number:"})," JFE 95-8555"]}),onSubmit:u=>{f(p=>p+1),m(c%2===0?"confirmation":"error"),console.log("Submitted values:",u)},view:l})},e={args:{className:void 0,confirmationText:"",descriptionText:"Please share your question or feedback.",hiddenFields:void 0,id:"feedbackBox-id",isInvalidComment:!1,isInvalidEmail:!1,isOpen:void 0,notificationText:void 0,onClose:void 0,onOpen:void 0,onSubmit:void 0,showCategoryField:!1,showEmailField:!1,title:"Help and Feedback",view:"form"},parameters:{design:{type:"figma",url:""},jest:"FeedbackBox.test.tsx"},render:t=>n(g,{...t})};var o,a,i,s,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:"Main Story for the FeedbackBox component. This must contains the `args`\nand `parameters` properties in this object.",...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.description}}};const k=["WithControls"],O=Object.freeze(Object.defineProperty({__proto__:null,WithControls:e,__namedExportsOrder:k,default:y},Symbol.toStringTag,{value:"Module"}));export{O as F,e as W};
//# sourceMappingURL=FeedbackBox.stories-8d4c0351.js.map
