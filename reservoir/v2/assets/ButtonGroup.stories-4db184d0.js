import{a as t,j as n}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as H}from"./index-6148c31a.js";import{B as e}from"./Button-948e9be8.js";import{B as o,b as z}from"./ButtonGroup-c2c033a6.js";import{H as i}from"./Heading-7eebc756.js";import{B as d,V as s}from"./chakra-ui-layout.esm-e0dbb94e.js";const D={title:"Components/Form Elements/ButtonGroup",component:o,decorators:[H],argTypes:{buttonWidth:{control:{type:"radio"},options:z,table:{defaultValue:{summary:"default"}}},className:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},layout:{control:{type:"radio"},options:["column","row"],table:{defaultValue:{summary:"row"}}}}},u={args:{buttonWidth:"default",className:void 0,id:"button-id",isDisabled:!1,layout:"row"},parameters:{jest:["ButtonGroup.test.tsx"]},render:x=>t(o,{...x,children:[n(e,{buttonType:"secondary",id:"group-1",children:"Button"}),n(e,{id:"group-2",children:"Submit"})]})},r={render:()=>t(s,{align:"left",spacing:"l",children:[t(d,{children:[n(i,{level:"h3",size:"heading6",children:"default fit-content"}),t(o,{children:[n(e,{buttonType:"secondary",id:"width-fit-1",children:"Button"}),n(e,{id:"width-fit-2",children:"Submit"})]})]}),t(d,{children:[n(i,{level:"h3",size:"heading6",children:"full width"}),t(o,{buttonWidth:"full",children:[n(e,{buttonType:"secondary",id:"width-full-1",children:"Button"}),n(e,{id:"width-full-2",children:"Submit"})]})]})]})},a={render:()=>t(s,{align:"left",spacing:"l",children:[t(d,{children:[n(i,{level:"h3",size:"heading6",children:"default row"}),t(o,{children:[n(e,{buttonType:"secondary",id:"row-1",children:"Button"}),n(e,{id:"row-2",children:"Submit"})]})]}),t(d,{children:[n(i,{level:"h3",size:"heading6",children:"column"}),t(o,{layout:"column",children:[n(e,{buttonType:"secondary",id:"column-1",children:"Button"}),n(e,{id:"column-2",children:"Submit"})]})]}),t(d,{children:[n(i,{level:"h3",size:"heading6",children:"column layout with full-width"}),t(o,{buttonWidth:"full",layout:"column",children:[n(e,{buttonType:"secondary",id:"column-full-1",children:"Button"}),n(e,{id:"column-full-2",children:"Submit"})]})]})]})},l={render:()=>t(s,{align:"left",spacing:"l",children:[t(d,{children:[n(i,{level:"h3",size:"heading6",children:"ButtonGroup isDisabled"}),t(o,{isDisabled:!0,children:[n(e,{buttonType:"secondary",id:"group-disabled-1",children:"Button disabled"}),n(e,{buttonType:"secondary",id:"group-disabled-2",children:"Button disabled"})]})]}),t(d,{children:[n(i,{level:"h3",size:"heading6",children:"Individual Button isDisabled"}),t(o,{children:[n(e,{buttonType:"secondary",id:"individual-disabled-1",children:"Button not disabled"}),n(e,{buttonType:"secondary",id:"individual-disabled-2",isDisabled:!0,children:"Button disabled"})]})]})]})};var c,p,h,B,b;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(p=u.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Main Story for the ButtonGroup component. This must contains the `args`\nand `parameters` properties in this object.",...(b=(B=u.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var m,g,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          default fit-content
        </Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="width-fit-1">
            Button
          </Button>
          <Button id="width-fit-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          full width
        </Heading>
        <ButtonGroup buttonWidth="full">
          <Button buttonType="secondary" id="width-full-1">
            Button
          </Button>
          <Button id="width-full-2">Submit</Button>
        </ButtonGroup>
      </Box>
    </VStack>
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          default row
        </Heading>
        <ButtonGroup>
          <Button buttonType="secondary" id="row-1">
            Button
          </Button>
          <Button id="row-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          column
        </Heading>
        <ButtonGroup layout="column">
          <Button buttonType="secondary" id="column-1">
            Button
          </Button>
          <Button id="column-2">Submit</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading level="h3" size="heading6">
          column layout with full-width
        </Heading>
        <ButtonGroup buttonWidth="full" layout="column">
          <Button buttonType="secondary" id="column-full-1">
            Button
          </Button>
          <Button id="column-full-2">Submit</Button>
        </ButtonGroup>
      </Box>
    </VStack>
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var G,T,v;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <Box>
        <Heading level="h3" size="heading6">
          ButtonGroup isDisabled
        </Heading>
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
        <Heading level="h3" size="heading6">
          Individual Button isDisabled
        </Heading>
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
}`,...(v=(T=l.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const W=["WithControls","Width","Layout","Disabled"],N=Object.freeze(Object.defineProperty({__proto__:null,Disabled:l,Layout:a,Width:r,WithControls:u,__namedExportsOrder:W,default:D},Symbol.toStringTag,{value:"Module"}));export{N as B,l as D,a as L,u as W,r as a};
//# sourceMappingURL=ButtonGroup.stories-4db184d0.js.map
