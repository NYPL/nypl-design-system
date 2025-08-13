import{at as a,j as e,V as g}from"./iframe-CFLVJZOZ.js";const x={title:"Components/Form Elements/Label",component:a,argTypes:{className:{control:!1},id:{control:!1},isInlined:{table:{disable:!0}},text:{description:"Only used for Storybook"}}},r={args:{className:void 0,htmlFor:"id-of-input-element",id:"label-id",isRequired:!1,text:"A label for a villager."},render:s=>e.jsx(a,{...s,children:s.text}),parameters:{jest:"Label.test.tsx"}},t={render:()=>e.jsxs(g,{children:[e.jsx(a,{htmlFor:"label-id1",id:"regular",children:"A regular label"}),e.jsx(a,{htmlFor:"label-id2",id:"required",isRequired:!0,children:"A label that is required"})]})},l={render:()=>e.jsxs(g,{children:[e.jsx(a,{htmlFor:"label-id1",id:"regular",isRequired:!0,children:"A regular isRequired label"}),e.jsx(a,{htmlFor:"label-id2",id:"required",isRequired:!0,requiredLabelText:"Obligatoire",children:"A label that has a customized required label"})]})};var i,o,d,n,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    className: undefined,
    htmlFor: "id-of-input-element",
    id: "label-id",
    isRequired: false,
    text: "A label for a villager."
  },
  render: (args: any) => <Label {...args}>{args.text}</Label>,
  parameters: {
    jest: "Label.test.tsx"
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source},description:{story:"Main Story for the Label component. This must contains the `args`\nand `parameters` properties in this object.",...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.description}}};var c,b,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <VStack>
      <Label htmlFor="label-id1" id="regular">
        A regular label
      </Label>
      <Label htmlFor="label-id2" id="required" isRequired>
        A label that is required
      </Label>
    </VStack>
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var p,h,q;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VStack>
      <Label htmlFor="label-id1" id="regular" isRequired>
        A regular isRequired label
      </Label>
      <Label htmlFor="label-id2" id="required" isRequired requiredLabelText="Obligatoire">
        A label that has a customized required label
      </Label>
    </VStack>
}`,...(q=(h=l.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const L=["WithControls","RequiredState","CustomRequiredText"],f=Object.freeze(Object.defineProperty({__proto__:null,CustomRequiredText:l,RequiredState:t,WithControls:r,__namedExportsOrder:L,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,f as L,t as R,r as W};
