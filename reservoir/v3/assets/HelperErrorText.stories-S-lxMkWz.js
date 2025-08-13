import{al as t,j as e,a6 as H,m as S,L as b}from"./iframe-CFLVJZOZ.js";const C={title:"Components/Content Display/HelperErrorText",component:t,argTypes:{ariaAtomic:{control:!1,table:{defaultValue:{summary:"true"}}},ariaLive:{table:{defaultValue:{summary:"polite"}}},children:{table:{disable:!0}},className:{control:!1},id:{control:!1},isInvalid:{table:{defaultValue:{summary:"false"}}},isRenderedText:{table:{defaultValue:{summary:"false"}}}}},r={args:{ariaAtomic:void 0,ariaLive:void 0,className:void 0,id:"helperErrorText-id",isInvalid:!1,text:"This is the helper text!"},parameters:{design:{type:"figma",url:""},jest:["HelperErrorText.test.tsx"]},render:a=>e.jsx(t,{...a,text:a.isInvalid?"This is the error text :(":a.text})},s={name:"TextInput Example",render:()=>e.jsx(H,{helperText:"Choose wisely.",id:"textInput-id",invalidText:"This is error text :(",isInvalid:!0,labelText:"What is your favorite color?",name:"textInput-name",placeholder:"e.g. blue, green, etc."})},n={args:{ariaAtomic:!0,ariaLive:"polite"},name:"ARIA Controls",render:a=>e.jsx(t,{...a,text:"Live updates to the helper and error text can be read to screen readers with the appropriate aria-atomic and aria-live props."})},o={name:"HTML Children",render:()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{text:e.jsxs(e.Fragment,{children:["This first example uses an HTML anchor element for"," ",e.jsx("a",{href:"https://nypl.org",children:"a link"}),"."]})}),e.jsx(t,{text:e.jsxs(S,{children:["This second example uses Reservoir Design System (DS) components, such as the ",e.jsx(b,{href:"#",children:"`Link`"})," component, and the `Text` component."]})})]})},i={name:"Invalid State",render:()=>e.jsx(t,{isInvalid:!0,text:"This is the error text :("})};var l,p,d,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ariaAtomic: undefined,
    ariaLive: undefined,
    className: undefined,
    id: "helperErrorText-id",
    isInvalid: false,
    text: "This is the helper text!"
  },
  parameters: {
    design: {
      type: "figma",
      url: ""
    },
    jest: ["HelperErrorText.test.tsx"]
  },
  render: args => <HelperErrorText {...args} text={args.isInvalid ? "This is the error text :(" : args.text} />
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Main Story for the HelperErrorText component. This must contains the `args`\nand `parameters` properties in this object.",...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var x,h,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "TextInput Example",
  render: () => <TextInput helperText="Choose wisely." id="textInput-id" invalidText="This is error text :(" isInvalid={true} labelText="What is your favorite color?" name="textInput-name" placeholder="e.g. blue, green, etc." />
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var T,v,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ariaAtomic: true,
    ariaLive: "polite"
  },
  name: "ARIA Controls",
  render: args => <HelperErrorText {...args} text="Live updates to the helper and error text can be read to screen readers with the appropriate aria-atomic and aria-live props." />
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var g,I,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "HTML Children",
  render: () => <>
      <HelperErrorText text={<>
            This first example uses an HTML anchor element for{" "}
            <a href="https://nypl.org">a link</a>.
          </>} />
      <HelperErrorText text={<Text>
            This second example uses Reservoir Design System (DS) components,
            such as the <Link href="#">\`Link\`</Link> component, and the \`Text\`
            component.
          </Text>} />
    </>
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var E,L,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Invalid State",
  render: () => <HelperErrorText isInvalid text="This is the error text :(" />
}`,...(j=(L=i.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const A=["WithControls","TextInputExample","AriaControls","HTMLChildren","InvalidState"],k=Object.freeze(Object.defineProperty({__proto__:null,AriaControls:n,HTMLChildren:o,InvalidState:i,TextInputExample:s,WithControls:r,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{n as A,k as H,i as I,s as T,r as W,o as a};
