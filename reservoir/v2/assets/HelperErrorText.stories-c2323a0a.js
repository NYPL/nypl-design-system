import{j as e,a as l,F as p}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as C}from"./index-6148c31a.js";import{H as t}from"./HelperErrorText-55c57f50.js";import{L as A}from"./Link-24c1437a.js";import{T as j}from"./Text-d88b2f7a.js";import{T as M}from"./TextInput-70995d87.js";const k={title:"Components/Content Display/HelperErrorText",component:t,decorators:[C],argTypes:{ariaAtomic:{control:!1,table:{defaultValue:{summary:!0}}},ariaLive:{table:{defaultValue:{summary:"polite"}}},children:{table:{disable:!0}},className:{control:!1},id:{control:!1},isInvalid:{table:{defaultValue:{summary:!1}}},isRenderedText:{table:{defaultValue:{summary:!1}}}}},r={args:{ariaAtomic:void 0,ariaLive:void 0,className:void 0,id:"helperErrorText-id",isInvalid:!1,text:"This is the helper text!"},parameters:{design:{type:"figma",url:""},jest:["HelperErrorText.test.tsx"]},render:a=>e(t,{...a,text:a.isInvalid?"This is the error text :(":a.text})},s={name:"TextInput Example",render:()=>e(M,{helperText:"Choose wisely.",id:"textInput-id",invalidText:"This is error text :(",isInvalid:!0,labelText:"What is your favorite color?",name:"textInput-name",placeholder:"e.g. blue, green, etc."})},n={args:{ariaAtomic:!0,ariaLive:"polite"},name:"ARIA Controls",render:a=>e(t,{...a,text:"Live updates to the helper and error text can be read to screen readers with the appropriate aria-atomic and aria-live props."})},o={name:"HTML Children",render:()=>l(p,{children:[e(t,{text:l(p,{children:["This first example uses an HTML anchor element for"," ",e("a",{href:"https://nypl.org",children:"a link"}),"."]})}),e(t,{text:l(j,{children:["This second example uses Reservoir Design System (DS) components, such as the ",e(A,{href:"#",children:"`Link`"})," component, and the `Text` component."]})})]})},i={name:"Invalid State",render:()=>e(t,{isInvalid:!0,text:"This is the error text :("})};var d,m,c,x,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Main Story for the HelperErrorText component. This must contains the `args`\nand `parameters` properties in this object.",...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var u,T,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "TextInput Example",
  render: () => <TextInput helperText="Choose wisely." id="textInput-id" invalidText="This is error text :(" isInvalid={true} labelText="What is your favorite color?" name="textInput-name" placeholder="e.g. blue, green, etc." />
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var v,g,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ariaAtomic: true,
    ariaLive: "polite"
  },
  name: "ARIA Controls",
  render: args => <HelperErrorText {...args} text="Live updates to the helper and error text can be read to screen readers with the appropriate aria-atomic and aria-live props." />
}`,...(I=(g=n.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var y,H,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(H=o.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var E,S,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Invalid State",
  render: () => <HelperErrorText isInvalid text="This is the error text :(" />
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const w=["WithControls","TextInputExample","AriaControls","HTMLChildren","InvalidState"],O=Object.freeze(Object.defineProperty({__proto__:null,AriaControls:n,HTMLChildren:o,InvalidState:i,TextInputExample:s,WithControls:r,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{n as A,O as H,i as I,s as T,r as W,o as a};
//# sourceMappingURL=HelperErrorText.stories-c2323a0a.js.map
