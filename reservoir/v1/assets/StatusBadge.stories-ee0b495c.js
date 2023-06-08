import{j as s,a as h}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as y}from"./index-6148c31a.js";import{S as a,s as w}from"./StatusBadge-c253fab1.js";import{V as B}from"./chakra-ui-layout.esm-b2fa9d31.js";const v={title:"Components/Content Display/StatusBadge",component:a,decorators:[y],argTypes:{className:{control:!1},id:{control:!1},level:{table:{defaultValue:{summary:"low"}},control:{type:"select"},options:w}}},e={args:{className:void 0,id:"statusBadge-id",level:"low"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0"},jest:"StatusBadge.test.tsx"},render:({...f})=>s(a,{...f,children:"Registration Required"})},r={render:()=>h(B,{spacing:"s",align:"stretch",children:[s(a,{level:"high",children:"On-Site Access Only"}),s(a,{level:"medium",children:"Cancelled"})]})},t={render:()=>h(B,{spacing:"s",align:"stretch",children:[s(a,{level:"low",children:"Library Card Required"}),s(a,{level:"low",children:"Registration Required"})]})};var n,o,i,d,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    className: undefined,
    id: "statusBadge-id",
    level: "low"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0"
    },
    jest: "StatusBadge.test.tsx"
  },
  render: ({
    ...args
  }) => {
    return <StatusBadge {...args}>Registration Required</StatusBadge>;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Main Story for the StatusBadge component. This must contains the `args`\n and `parameters` properties in this object.",...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var c,g,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <VStack spacing="s" align="stretch">
      <StatusBadge level="high">On-Site Access Only</StatusBadge>
      <StatusBadge level="medium">Cancelled</StatusBadge>
    </VStack>
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <VStack spacing="s" align="stretch">
      <StatusBadge level="low">Library Card Required</StatusBadge>
      <StatusBadge level="low">Registration Required</StatusBadge>
    </VStack>
}`,...(S=(p=t.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};const C=["WithControls","HigherBarrier","LowerBarrier"],A=Object.freeze(Object.defineProperty({__proto__:null,HigherBarrier:r,LowerBarrier:t,WithControls:e,__namedExportsOrder:C,default:v},Symbol.toStringTag,{value:"Module"}));export{r as H,t as L,A as S,e as W};
//# sourceMappingURL=StatusBadge.stories-ee0b495c.js.map
