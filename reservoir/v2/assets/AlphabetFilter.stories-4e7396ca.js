import{j as t}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as T}from"./index-0cbcd92a.js";import{w as y}from"./index-6148c31a.js";import{A as i}from"./AlphabetFilter-82cfc54c.js";import{H as w}from"./Heading-7eebc756.js";const j={title:"Components/Navigation/AlphabetFilter",component:i,decorators:[y],argTypes:{activeLetters:{control:!1},className:{control:!1},currentLetter:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},onClick:{control:!1}}},e={args:{activeLetters:void 0,className:void 0,currentLetter:void 0,descriptionText:"This is description text.",headingText:"AlphabetFilter",id:"alphabet-filter-id",isDisabled:!1,onClick:void 0},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=68164%3A68448"},jest:["AlphabetFilter.test.tsx"]}},r={render:()=>t(i,{activeLetters:["#","a","c","d","e","h","l","m","n","p","r","s"],onClick:void 0})},n={render:()=>t(i,{onClick:void 0,headingText:t(w,{level:"h4",children:"Custom H4 Heading"})})},s={render:()=>t(i,{currentLetter:"c",onClick:void 0})};function M(){const[F,H]=T.useState();return t(i,{currentLetter:F,onClick:o=>{console.log(o),H(o)}})}const a={name:"Using onClick",render:()=>t(M,{})};var c,l,d,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Main Story for the AlphabetFilter component. This must contains the `args`\nand `parameters` properties in this object.",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var u,h,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <AlphabetFilter activeLetters={["#", "a", "c", "d", "e", "h", "l", "m", "n", "p", "r", "s"]} onClick={undefined} />
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,C,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AlphabetFilter onClick={undefined} headingText={<Heading level="h4">Custom H4 Heading</Heading>} />
}`,...(b=(C=n.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var A,v,L;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <AlphabetFilter currentLetter="c" onClick={undefined} />
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Using onClick",
  render: () => <CurrentLetterExample />
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const N=["WithControls","SetActiveLetters","WithCustomHeading","SetCurrentLetter","UsingOnClick"],q=Object.freeze(Object.defineProperty({__proto__:null,SetActiveLetters:r,SetCurrentLetter:s,UsingOnClick:a,WithControls:e,WithCustomHeading:n,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{q as A,r as S,a as U,e as W,n as a,s as b};
//# sourceMappingURL=AlphabetFilter.stories-4e7396ca.js.map
