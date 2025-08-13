import{_ as w,$ as b,j as t,a0 as k,r as T,a as s,H as r}from"./iframe-CFLVJZOZ.js";const{userEvent:n,expect:o,screen:e}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Form Elements/FeedbackBox",component:b,parameters:{jest:["FeedbackBox.test.tsx"]},argTypes:{className:{control:!1},hiddenFields:{control:!1},id:{control:!1},isInvalidComment:{table:{defaultValue:{summary:"false"}}},isInvalidEmail:{table:{defaultValue:{summary:"false"}}},isOpen:{table:{disable:!0}},notificationText:{control:!1},onClose:{table:{disable:!0}},onOpen:{table:{disable:!0}},onSubmit:{control:!1},showCategoryField:{table:{defaultValue:{summary:"false"}}},showEmailField:{table:{defaultValue:{summary:"true"}}},view:{control:{type:"select"},options:w,table:{defaultValue:{summary:"form"}}}}},F=a=>{const[l,h]=k(a.view),[p,y]=T.useState(0),g={"hidden-field-1":"hidden-field-value-1","hidden-field-2":"hidden-field-value-2"},f=B=>{y(v=>v+1),h(p%2===0?"confirmation":"error"),console.log("Submitted values:",B)};return t.jsxs(s,{maxHeight:"200px",overflowY:"auto",children:[t.jsx(s,{height:"400px",bgColor:"ui.white",width:"100%",children:t.jsx(r,{level:"h3",m:"s",children:"ui.white"})}),t.jsx(s,{height:"400px",bgColor:"ui.bg.default",width:"100%",children:t.jsx(r,{level:"h3",m:"s",children:"ui.bg.default"})}),t.jsx(s,{height:"400px",bgColor:"dark.ui.bg.default",width:"100%",children:t.jsx(r,{level:"h3",m:"s",color:"ui.white",children:"dark.ui.bg.default"})}),t.jsx(s,{height:"400px",bgColor:"dark.ui.bg.page",width:"100%",children:t.jsx(r,{level:"h3",m:"s",color:"ui.white",children:"dark.ui.bg.page"})}),t.jsx(b,{...a,hiddenFields:g,notificationText:t.jsxs("span",{children:[t.jsx("b",{children:"Call Number:"})," JFE 95-8555"]}),onSubmit:f,view:l})]})},i={args:{className:void 0,confirmationText:"",descriptionText:"Please share your question or feedback.",hiddenFields:void 0,id:"feedbackBox-id",isInvalidComment:!1,isInvalidEmail:!0,isOpen:void 0,notificationText:void 0,onClose:void 0,onOpen:void 0,onSubmit:void 0,showCategoryField:!0,showEmailField:!0,title:"Help and Feedback",view:"form"},parameters:{design:{type:"figma",url:""},jest:"FeedbackBox.test.tsx"},play:async()=>{o(e.queryByRole("textbox",{name:/comment/i})).not.toBeInTheDocument();const a=e.getByRole("button",{name:"Help and Feedback"});await n.click(a),o(e.getByLabelText("Correction")).not.toBeChecked(),await n.click(e.getByLabelText("Correction")),o(e.getByLabelText("Correction")).toBeChecked(),o(e.getByRole("textbox",{name:/comment/i})).toBeInTheDocument();const l=e.getByRole("button",{name:"Submit"});await n.click(l),o(e.getByText(/please fill out this field/i)).toBeInTheDocument(),await n.type(e.getByRole("textbox",{name:/comment/i}),"Hello"),await n.type(e.getByRole("textbox",{name:/email/i}),"not valid"),o(e.getByText(/please enter a valid email address/i)).toBeInTheDocument(),await n.clear(e.getByRole("textbox",{name:/email/i})),await n.type(e.getByRole("textbox",{name:/email/i}),"a@b.com"),await n.click(l),o(e.getByText(/thank you for submitting your feedback/i)).toBeInTheDocument()},render:a=>t.jsx(F,{...a})};var c,d,m,u,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: undefined,
    confirmationText: "",
    descriptionText: "Please share your question or feedback.",
    hiddenFields: undefined,
    id: "feedbackBox-id",
    isInvalidComment: false,
    isInvalidEmail: true,
    isOpen: undefined,
    notificationText: undefined,
    onClose: undefined,
    onOpen: undefined,
    onSubmit: undefined,
    showCategoryField: true,
    showEmailField: true,
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
  play: async () => {
    expect(screen.queryByRole("textbox", {
      name: /comment/i
    })).not.toBeInTheDocument();
    const button = screen.getByRole("button", {
      name: "Help and Feedback"
    });
    await userEvent.click(button);
    expect(screen.getByLabelText("Correction")).not.toBeChecked();
    await userEvent.click(screen.getByLabelText("Correction"));
    expect(screen.getByLabelText("Correction")).toBeChecked();
    expect(screen.getByRole("textbox", {
      name: /comment/i
    })).toBeInTheDocument();
    const submit = screen.getByRole("button", {
      name: "Submit"
    });
    await userEvent.click(submit);
    expect(screen.getByText(/please fill out this field/i)).toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox", {
      name: /comment/i
    }), "Hello");
    await userEvent.type(screen.getByRole("textbox", {
      name: /email/i
    }), "not valid");
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    await userEvent.clear(screen.getByRole("textbox", {
      name: /email/i
    }));
    await userEvent.type(screen.getByRole("textbox", {
      name: /email/i
    }), "a@b.com");
    await userEvent.click(submit);
    expect(screen.getByText(/thank you for submitting your feedback/i)).toBeInTheDocument();
  },
  render: args => <FeedbackBoxWithControls {...args} />
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Main Story for the FeedbackBox component. This must contains the `args`\nand `parameters` properties in this object.",...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const E=["WithControls"],R=Object.freeze(Object.defineProperty({__proto__:null,WithControls:i,__namedExportsOrder:E,default:C},Symbol.toStringTag,{value:"Module"}));export{R as F,i as W};
