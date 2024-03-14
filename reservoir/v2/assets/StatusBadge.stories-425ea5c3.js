import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as I}from"./index-6148c31a.js";import{I as l}from"./Icon-4eeffe51.js";import{S as e,s as O}from"./StatusBadge-fc3ed616.js";import{V as o}from"./chakra-ui-layout.esm-e0dbb94e.js";const q={title:"Components/Content Display/StatusBadge",component:e,decorators:[I],argTypes:{className:{control:!1},id:{control:!1},level:{table:{defaultValue:{summary:"low"}},control:{type:"select"},options:O}}},a={args:{className:void 0,id:"statusBadge-id",level:"low"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=11256%3A0"},jest:"StatusBadge.test.tsx"},render:({...b})=>r(e,{...b,children:"Registration Required"})},t={render:()=>i(o,{spacing:"s",align:"stretch",children:[r(e,{level:"high",children:"On-Site Access Only"}),r(e,{level:"medium",children:"Cancelled"})]})},s={render:()=>i(o,{spacing:"s",align:"stretch",children:[r(e,{level:"low",children:"Library Card Required"}),r(e,{level:"low",children:"Registration Required"})]})},n={render:()=>i(o,{spacing:"s",align:"stretch",children:[i(e,{level:"high",children:[r(l,{color:"brand.primary",mr:"xs",name:"errorFilled",size:"medium"}),"On-Site Access Only"]}),i(e,{level:"low",children:["Registration Required",r(l,{color:"ui.black",ml:"xs",name:"actionIdentityFilled",size:"medium"})]})]})};var d,c,m,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Main Story for the StatusBadge component. This must contains the `args`\n and `parameters` properties in this object.",...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var p,S,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VStack spacing="s" align="stretch">
      <StatusBadge level="high">On-Site Access Only</StatusBadge>
      <StatusBadge level="medium">Cancelled</StatusBadge>
    </VStack>
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var B,y,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack spacing="s" align="stretch">
      <StatusBadge level="low">Library Card Required</StatusBadge>
      <StatusBadge level="low">Registration Required</StatusBadge>
    </VStack>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,v,R;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <VStack spacing="s" align="stretch">
      <StatusBadge level="high">
        <Icon color="brand.primary" mr="xs" name="errorFilled" size="medium" />
        On-Site Access Only
      </StatusBadge>
      <StatusBadge level="low">
        Registration Required
        <Icon color="ui.black" ml="xs" name="actionIdentityFilled" size="medium" />
      </StatusBadge>
    </VStack>
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const x=["WithControls","HigherBarrier","LowerBarrier","Icons"],F=Object.freeze(Object.defineProperty({__proto__:null,HigherBarrier:t,Icons:n,LowerBarrier:s,WithControls:a,__namedExportsOrder:x,default:q},Symbol.toStringTag,{value:"Module"}));export{t as H,n as I,s as L,F as S,a as W};
//# sourceMappingURL=StatusBadge.stories-425ea5c3.js.map
