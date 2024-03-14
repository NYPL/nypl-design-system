import{j as e,a as c}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{r as g}from"./index-0cbcd92a.js";import{w as J}from"./index-6148c31a.js";import{P as r,p as N,a as B}from"./ProgressIndicator-3cc3149d.js";import{S as p}from"./SimpleGrid-bd04b221.js";const K={title:"Components/Feedback/ProgressIndicator",component:r,decorators:[J],argTypes:{darkMode:{control:!1},id:{control:!1},indicatorType:{controls:{type:"select"},options:N,table:{defaultValue:{summary:"linear"}}},isIndeterminate:{table:{defaultValue:{summary:!1}}},showLabel:{table:{defaultValue:{summary:!0}}},size:{controls:{type:"select"},options:B,table:{defaultValue:{summary:"default"}}},value:{table:{defaultValue:{summary:0}}}}},a={args:{id:"progressIndicator-id",indicatorType:"linear",isIndeterminate:!1,labelText:"Progress",showLabel:!0,size:"default",value:50},render:m=>e(r,{...m}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=37638%3A23842"},jest:["ProgressIndicator.test.tsx"]}},s={argTypes:{indicatorType:{table:{disable:!0}}},render:()=>e(r,{id:"linear",indicatorType:"linear",labelText:"Linear Progress Type",value:50})},i={argTypes:{indicatorType:{table:{disable:!0}}},render:()=>e(r,{id:"circular",indicatorType:"circular",labelText:"Circular Progress Type",value:50})},t={render:()=>c(p,{columns:1,gap:"grid.m",children:[e(r,{id:"default-size",labelText:"Default 8px size",value:50}),e(r,{id:"small-size",labelText:"Small 4px size",size:"small",value:50})]})},l={render:()=>c(p,{columns:1,gap:"grid.m",children:[e(r,{id:"default-size",indicatorType:"circular",labelText:"Default 48px size",value:50}),e(r,{id:"small-size",indicatorType:"circular",labelText:"Small 24px size",size:"small",value:50})]})},n={render:()=>c(p,{columns:1,gap:"grid.m",children:[e(r,{id:"label",labelText:"This label will be added through aria-label",showLabel:!1,value:50}),e(r,{id:"label-hidden",indicatorType:"circular",labelText:"This label will be added through aria-label",showLabel:!1,value:50})]})},o={render:()=>c(p,{columns:1,gap:"grid.m",children:[e(r,{id:"indeterminate",isIndeterminate:!0,labelText:"Indeterminate state",value:50}),e(r,{id:"indeterminate-circular",indicatorType:"circular",isIndeterminate:!0,labelText:"Indeterminate state",value:50})]})};function Q(){const[m,q]=g.useState(0);return g.useEffect(()=>{const H=setInterval(()=>{q(u=>u===100?0:u+10)},1e3);return()=>clearInterval(H)},[]),c(p,{columns:1,gap:"grid.m",children:[e(r,{id:"example",labelText:"Progress example",value:m}),e(r,{id:"example-circular",indicatorType:"circular",labelText:"Progress example",value:m})]})}const d={render:()=>e(Q,{}),name:"Get Input Values"};var b,T,y,x,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: "progressIndicator-id",
    indicatorType: "linear",
    isIndeterminate: false,
    labelText: "Progress",
    showLabel: true,
    size: "default",
    value: 50
  },
  render: args => <ProgressIndicator {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=37638%3A23842"
    },
    jest: ["ProgressIndicator.test.tsx"]
  }
}`,...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.source},description:{story:"Main Story for the ProgressIndicator component. This must contains the `args`\nand `parameters` properties in this object.",...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var I,h,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  argTypes: {
    indicatorType: {
      table: {
        disable: true
      }
    }
  },
  render: () => <ProgressIndicator id="linear" indicatorType="linear" labelText="Linear Progress Type" value={50} />
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var P,z,v;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    indicatorType: {
      table: {
        disable: true
      }
    }
  },
  render: () => <ProgressIndicator id="circular" indicatorType="circular" labelText="Circular Progress Type" value={50} />
}`,...(v=(z=i.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var w,L,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="default-size" labelText="Default 8px size" value={50} />
      <ProgressIndicator id="small-size" labelText="Small 4px size" size="small" value={50} />
    </SimpleGrid>
}`,...(C=(L=t.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var G,j,V;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="default-size" indicatorType="circular" labelText="Default 48px size" value={50} />
      <ProgressIndicator id="small-size" indicatorType="circular" labelText="Small 24px size" size="small" value={50} />
    </SimpleGrid>
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var E,M,A;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="label" labelText="This label will be added through aria-label" showLabel={false} value={50} />
      <ProgressIndicator id="label-hidden" indicatorType="circular" labelText="This label will be added through aria-label" showLabel={false} value={50} />
    </SimpleGrid>
}`,...(A=(M=n.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var _,D,W;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1} gap="grid.m">
      <ProgressIndicator id="indeterminate" isIndeterminate labelText="Indeterminate state" value={50} />
      <ProgressIndicator id="indeterminate-circular" indicatorType="circular" isIndeterminate labelText="Indeterminate state" value={50} />
    </SimpleGrid>
}`,...(W=(D=o.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var k,F,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ProgressIndicatorExample />,
  name: "Get Input Values"
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const R=["WithControls","LinearType","CircularType","LinearSizes","CircularSizes","Labels","IndeterminateState","WorkingExample"],ee=Object.freeze(Object.defineProperty({__proto__:null,CircularSizes:l,CircularType:i,IndeterminateState:o,Labels:n,LinearSizes:t,LinearType:s,WithControls:a,WorkingExample:d,__namedExportsOrder:R,default:K},Symbol.toStringTag,{value:"Module"}));export{i as C,o as I,s as L,ee as P,a as W,t as a,l as b,n as c,d};
//# sourceMappingURL=ProgressIndicator.stories-e0783e44.js.map
