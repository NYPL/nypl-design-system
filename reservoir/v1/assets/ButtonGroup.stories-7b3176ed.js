import{a as n,j as t}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as H}from"./index-6148c31a.js";import{B as e}from"./Button-a3ea41e0.js";import{B as o,b as D}from"./ButtonGroup-3ea9dbd7.js";import{H as r}from"./Heading-2ec2ea62.js";import{B as i,V as s}from"./chakra-ui-layout.esm-b2fa9d31.js";const W={title:"Components/Form Elements/ButtonGroup",component:o,decorators:[H],argTypes:{buttonWidth:{control:{type:"radio"},options:D,table:{defaultValue:{summary:"default"}}},className:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},layout:{control:{type:"radio"},options:["column","row"],table:{defaultValue:{summary:"row"}}}}},u={args:{buttonWidth:"default",className:void 0,id:"button-id",isDisabled:!1,layout:"row"},parameters:{jest:["ButtonGroup.test.tsx"]},render:x=>n(o,{...x,children:[t(e,{buttonType:"secondary",id:"group-1",children:"Button"}),t(e,{id:"group-2",children:"Submit"})]})},d={render:()=>n(s,{align:"left",spacing:"l",children:[n(i,{children:[t(r,{level:"three",children:"default fit-content"}),n(o,{children:[t(e,{buttonType:"secondary",id:"width-fit-1",children:"Button"}),t(e,{id:"width-fit-2",children:"Submit"})]})]}),n(i,{children:[t(r,{level:"three",children:"full width"}),n(o,{buttonWidth:"full",children:[t(e,{buttonType:"secondary",id:"width-full-1",children:"Button"}),t(e,{id:"width-full-2",children:"Submit"})]})]})]})},l={render:()=>n(s,{align:"left",spacing:"l",children:[n(i,{children:[t(r,{level:"three",children:"default row"}),n(o,{children:[t(e,{buttonType:"secondary",id:"row-1",children:"Button"}),t(e,{id:"row-2",children:"Submit"})]})]}),n(i,{children:[t(r,{level:"three",children:"column"}),n(o,{layout:"column",children:[t(e,{buttonType:"secondary",id:"column-1",children:"Button"}),t(e,{id:"column-2",children:"Submit"})]})]}),n(i,{children:[t(r,{level:"three",children:"column layout with full-width"}),n(o,{buttonWidth:"full",layout:"column",children:[t(e,{buttonType:"secondary",id:"column-full-1",children:"Button"}),t(e,{id:"column-full-2",children:"Submit"})]})]})]})},a={render:()=>n(s,{align:"left",spacing:"l",children:[n(i,{children:[t(r,{level:"three",children:"ButtonGroup isDisabled"}),n(o,{isDisabled:!0,children:[t(e,{buttonType:"secondary",id:"group-disabled-1",children:"Button disabled"}),t(e,{buttonType:"secondary",id:"group-disabled-2",children:"Button disabled"})]})]}),n(i,{children:[t(r,{level:"three",children:"Individual Button isDisabled"}),n(o,{children:[t(e,{buttonType:"secondary",id:"individual-disabled-1",children:"Button not disabled"}),t(e,{buttonType:"secondary",id:"individual-disabled-2",isDisabled:!0,children:"Button disabled"})]})]})]})};var c,p,B,h,b;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    buttonWidth: "default",
    className: undefined,
    id: "button-id",
    isDisabled: false,
    layout: "row"
  },
  parameters: {
    jest: ["ButtonGroup.test.tsx"]
  },
  render: args => <ButtonGroup {...args}>
      <Button buttonType="secondary" id="group-1">
        Button
      </Button>
      <Button id="group-2">Submit</Button>
    </ButtonGroup>
}`,...(B=(p=u.parameters)==null?void 0:p.docs)==null?void 0:B.source},description:{story:"Main Story for the ButtonGroup component. This must contains the `args`\nand `parameters` properties in this object.",...(b=(h=u.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var m,y,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">default fit-content</Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="width-fit-1">
            Button
          </Button>
          <Button id="width-fit-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">full width</Heading>
        <ButtonGroup buttonWidth="full">
          <Button buttonType="secondary" id="width-full-1">
            Button
          </Button>
          <Button id="width-full-2">Submit</Button>
        </ButtonGroup>
      </Box>
    </VStack>
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,S,w;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">default row</Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="row-1">
            Button
          </Button>
          <Button id="row-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">column</Heading>
        <ButtonGroup layout="column">
          <Button buttonType="secondary" id="column-1">
            Button
          </Button>
          <Button id="column-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">column layout with full-width</Heading>
        <ButtonGroup buttonWidth="full" layout="column">
          <Button buttonType="secondary" id="column-full-1">
            Button
          </Button>
          <Button id="column-full-2">Submit</Button>
        </ButtonGroup>
      </Box>
    </VStack>
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var G,T,v;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="three">ButtonGroup isDisabled</Heading>
        <ButtonGroup isDisabled>
          <Button buttonType="secondary" id="group-disabled-1">
            Button disabled
          </Button>
          <Button buttonType="secondary" id="group-disabled-2">
            Button disabled
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="three">Individual Button isDisabled</Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="individual-disabled-1">
            Button not disabled
          </Button>
          <Button buttonType="secondary" id="individual-disabled-2" isDisabled>
            Button disabled
          </Button>
        </ButtonGroup>
      </Box>
    </VStack>
}`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const V=["WithControls","Width","Layout","Disabled"],O=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,Layout:l,Width:d,WithControls:u,__namedExportsOrder:V,default:W},Symbol.toStringTag,{value:"Module"}));export{O as B,a as D,l as L,u as W,d as a};
//# sourceMappingURL=ButtonGroup.stories-7b3176ed.js.map
