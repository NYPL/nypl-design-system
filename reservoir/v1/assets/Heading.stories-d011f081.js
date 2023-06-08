import{a as n,j as e,F as r}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as L}from"./index-6148c31a.js";import{H as a,h as W,a as j}from"./Heading-2ec2ea62.js";const B={title:"Components/Typography & Styles/Heading",component:a,decorators:[L],argTypes:{className:{control:!1},id:{control:!1},level:{control:{type:"select"},options:W,table:{defaultValue:{summary:"two"}}},noSpace:{table:{defaultValue:{summary:!1}}},size:{control:{type:"radio"},options:j}}},i={args:{className:void 0,id:"heading-id",isCapitalized:!1,isUppercase:!1,isLowercase:!1,noSpace:!1,level:"two",size:void 0,text:"Default Heading",url:void 0,urlClass:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16"},jest:["Heading.test.tsx"]},render:l=>n(r,{children:[e(a,{...l}),e(a,{...l,color:"brand.primary"}),e(a,{...l,bgColor:"brand.primary",color:"ui.typography.inverse.heading",px:"s",py:"xs"})]})},t={render:()=>n(r,{children:[e(a,{id:"heading-one",level:"one",text:"<h1> Heading 1 - 'one'"}),e(a,{id:"heading-two",level:"two",text:"<h2> Heading 2 - 'two'"}),e(a,{id:"heading-three",level:"three",text:"<h3> Heading 3 - 'three'"}),e(a,{id:"heading-four",level:"four",text:"<h4> Heading 4 - 'four'"}),e(a,{id:"heading-five",level:"five",text:"<h5> Heading 5 - 'five'"}),e(a,{id:"heading-six",level:"six",text:"<h6> Heading 6 - 'six'"})]})},d={render:()=>n(r,{children:[e(a,{id:"heading-primary",level:"one",size:"primary",text:"<h1> 'primary'"}),e(a,{id:"heading-secondary",level:"one",size:"secondary",text:"<h1> 'secondary'"}),e(a,{id:"heading-tertiary",level:"one",size:"tertiary",text:"<h1> 'tertiary'"}),e(a,{id:"heading-callout",level:"one",size:"callout",text:"<h1> 'callout'"})]})},s={render:()=>e(a,{id:"headingWithBold",level:"one",children:n(r,{children:["Heading with a ",e("b",{children:"Bold"})," Word"]})})},o={name:"Links",render:()=>n(r,{children:[e(a,{id:"heading-with-link-url",level:"two",text:"Heading with URL Props",url:"http://apple.com",urlClass:"special-link"}),e(a,{id:"heading-with-link-child",children:n(r,{children:["Heading with a Word ",e("a",{href:"#hello",children:"Link"})]})})]})};var h,g,c,p,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "heading-id",
    isCapitalized: false,
    isUppercase: false,
    isLowercase: false,
    noSpace: false,
    level: "two",
    size: undefined,
    text: "Default Heading",
    url: undefined,
    urlClass: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=10975%3A16"
    },
    jest: ["Heading.test.tsx"]
  },
  render: args => <>
      <Heading {...args} />
      <Heading {...args} color="brand.primary" />
      <Heading {...args} bgColor="brand.primary" color="ui.typography.inverse.heading" px="s" py="xs" />
    </>
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:"Main Story for the Heading component. This must contains the `args`\nand `parameters` properties in this object.",...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,f,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Heading id="heading-one" level="one" text="<h1> Heading 1 - 'one'" />
      <Heading id="heading-two" level="two" text="<h2> Heading 2 - 'two'" />
      <Heading id="heading-three" level="three" text="<h3> Heading 3 - 'three'" />
      <Heading id="heading-four" level="four" text="<h4> Heading 4 - 'four'" />
      <Heading id="heading-five" level="five" text="<h5> Heading 5 - 'five'" />
      <Heading id="heading-six" level="six" text="<h6> Heading 6 - 'six'" />
    </>
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var H,x,v;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <>
      <Heading id="heading-primary" level="one" size="primary" text="<h1> 'primary'" />
      <Heading id="heading-secondary" level="one" size="secondary" text="<h1> 'secondary'" />
      <Heading id="heading-tertiary" level="one" size="tertiary" text="<h1> 'tertiary'" />
      <Heading id="heading-callout" level="one" size="callout" text="<h1> 'callout'" />
    </>
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,S,b;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Heading id="headingWithBold" level="one">
      <>
        Heading with a <b>Bold</b> Word
      </>
    </Heading>
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,C,k;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Links",
  render: () => <>
      <Heading id="heading-with-link-url" level="two" text="Heading with URL Props" url="http://apple.com" urlClass="special-link" />
      <Heading id="heading-with-link-child">
        <>
          Heading with a Word <a href="#hello">Link</a>
        </>
      </Heading>
    </>
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const A=["WithControls","DefaultStyles","SizeStyles","BoldText","Links"],_=Object.freeze(Object.defineProperty({__proto__:null,BoldText:s,DefaultStyles:t,Links:o,SizeStyles:d,WithControls:i,__namedExportsOrder:A,default:B},Symbol.toStringTag,{value:"Module"}));export{s as B,t as D,_ as H,o as L,d as S,i as W};
//# sourceMappingURL=Heading.stories-d011f081.js.map
