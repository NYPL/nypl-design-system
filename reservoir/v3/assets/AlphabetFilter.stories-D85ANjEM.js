import{g as i,j as t,H as T,r as y}from"./iframe-CFLVJZOZ.js";import{a as w}from"./storybookUtils-BmTl87w5.js";const M={title:"Components/Navigation/AlphabetFilter",component:i,argTypes:{activeLetters:{control:!1},className:{control:!1},currentLetter:{control:!1},id:{control:!1},isDisabled:w(),onClick:{control:!1}}},e={args:{activeLetters:void 0,className:void 0,currentLetter:void 0,descriptionText:"This is description text.",headingText:"AlphabetFilter",id:"alphabet-filter-id",isDisabled:!1,onClick:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=68164%3A68448"},jest:["AlphabetFilter.test.tsx"]}},r={render:()=>t.jsx(i,{activeLetters:["#","a","c","d","e","h","l","m","n","p","r","s"],onClick:void 0})},s={render:()=>t.jsx(i,{onClick:void 0,headingText:t.jsx(T,{level:"h4",children:"Custom H4 Heading"})})},n={render:()=>t.jsx(i,{currentLetter:"c",onClick:void 0})};function N(){const[j,F]=y.useState(),H=o=>{console.log(o),F(o)};return t.jsx(i,{currentLetter:j,onClick:H})}const a={name:"Using onClick",render:()=>t.jsx(N,{})};var c,l,d,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    activeLetters: undefined,
    className: undefined,
    currentLetter: undefined,
    descriptionText: "This is description text.",
    headingText: "AlphabetFilter",
    id: "alphabet-filter-id",
    isDisabled: false,
    onClick: undefined
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=68164%3A68448"
    },
    jest: ["AlphabetFilter.test.tsx"]
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Main Story for the AlphabetFilter component. This must contains the `args`\nand `parameters` properties in this object.",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AlphabetFilter activeLetters={["#", "a", "c", "d", "e", "h", "l", "m", "n", "p", "r", "s"]} onClick={undefined} />
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,C,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <AlphabetFilter onClick={undefined} headingText={<Heading level="h4">Custom H4 Heading</Heading>} />
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var x,v,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AlphabetFilter currentLetter="c" onClick={undefined} />
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var L,S,k;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Using onClick",
  render: () => <CurrentLetterExample />
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const _=["WithControls","SetActiveLetters","WithCustomHeading","SetCurrentLetter","UsingOnClick"],U=Object.freeze(Object.defineProperty({__proto__:null,SetActiveLetters:r,SetCurrentLetter:n,UsingOnClick:a,WithControls:e,WithCustomHeading:s,__namedExportsOrder:_,default:M},Symbol.toStringTag,{value:"Module"}));export{U as A,r as S,a as U,e as W,s as a,n as b};
