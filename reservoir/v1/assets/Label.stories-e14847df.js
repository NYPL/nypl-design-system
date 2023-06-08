import{j as l,a as g}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{L as r}from"./Label-2b2058d3.js";import{V as L}from"./chakra-ui-layout.esm-b2fa9d31.js";const f={title:"Components/Form Elements/Label",component:r,argTypes:{className:{control:!1},id:{control:!1},isInlined:{table:{disable:!0}},text:{description:"Only used for Storybook"}}},e={args:{className:void 0,htmlFor:"id-of-input-element",id:"label-id",isRequired:!1,text:"A label for a villager."},render:i=>l(r,{...i,children:i.text}),parameters:{jest:"Label.test.tsx"}},a={render:()=>g(L,{children:[l(r,{htmlFor:"label-id1",id:"regular",children:"A regular label"}),l(r,{htmlFor:"label-id2",id:"required",isRequired:!0,children:"A label that is required"})]})},t={render:()=>g(L,{children:[l(r,{htmlFor:"label-id1",id:"regular",isRequired:!0,children:"A regular isRequired label"}),l(r,{htmlFor:"label-id2",id:"required",isRequired:!0,requiredLabelText:"Obligatoire",children:"A label that has a customized required label"})]})};var s,o,d,n,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    className: undefined,
    htmlFor: "id-of-input-element",
    id: "label-id",
    isRequired: false,
    text: "A label for a villager."
  },
  render: args => <Label {...args}>{args.text}</Label>,
  parameters: {
    jest: "Label.test.tsx"
  }
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source},description:{story:"Main Story for the Label component. This must contains the `args`\nand `parameters` properties in this object.",...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.description}}};var c,m,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <VStack>
      <Label htmlFor="label-id1" id="regular">
        A regular label
      </Label>
      <Label htmlFor="label-id2" id="required" isRequired>
        A label that is required
      </Label>
    </VStack>
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,h,q;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <VStack>
      <Label htmlFor="label-id1" id="regular" isRequired>
        A regular isRequired label
      </Label>
      <Label htmlFor="label-id2" id="required" isRequired requiredLabelText="Obligatoire">
        A label that has a customized required label
      </Label>
    </VStack>
}`,...(q=(h=t.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const x=["WithControls","RequiredState","CustomRequiredText"],A=Object.freeze(Object.defineProperty({__proto__:null,CustomRequiredText:t,RequiredState:a,WithControls:e,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{t as C,A as L,a as R,e as W};
//# sourceMappingURL=Label.stories-e14847df.js.map
