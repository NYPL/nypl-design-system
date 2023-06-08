import{j as n}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{r as x}from"./index-f2bd0723.js";import{w as k}from"./index-6148c31a.js";import{A as a}from"./AlphabetFilter-d50cdd04.js";const F={title:"Components/Navigation/AlphabetFilter",component:a,decorators:[k],argTypes:{activeLetters:{control:!1},className:{control:!1},currentLetter:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},onClick:{control:!1}}},e={args:{activeLetters:void 0,className:void 0,currentLetter:void 0,descriptionText:"This is description text.",headingText:"AlphabetFilter",id:"alphabet-filter-id",isDisabled:!1,onClick:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=68164%3A68448"},jest:["AlphabetFilter.test.tsx"]}},t={render:()=>n(a,{activeLetters:["#","a","c","d","e","h","l","m","n","p","r","s"],onClick:void 0})},r={render:()=>n(a,{currentLetter:"c",onClick:void 0})};function y(){const[S,v]=x.useState();return n(a,{currentLetter:S,onClick:i=>{console.log(i),v(i)}})}const s={name:"Using onClick",render:()=>n(y,{})};var o,c,l,d,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Main Story for the AlphabetFilter component. This must contains the `args`\nand `parameters` properties in this object.",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.description}}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <AlphabetFilter activeLetters={["#", "a", "c", "d", "e", "h", "l", "m", "n", "p", "r", "s"]} onClick={undefined} />
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AlphabetFilter currentLetter="c" onClick={undefined} />
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,A,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Using onClick",
  render: () => <CurrentLetterExample />
}`,...(L=(A=s.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};const T=["WithControls","SetActiveLetters","SetCurrentLetter","UsingOnClick"],O=Object.freeze(Object.defineProperty({__proto__:null,SetActiveLetters:t,SetCurrentLetter:r,UsingOnClick:s,WithControls:e,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{O as A,t as S,s as U,e as W,r as a};
//# sourceMappingURL=AlphabetFilter.stories-031a8c8f.js.map
