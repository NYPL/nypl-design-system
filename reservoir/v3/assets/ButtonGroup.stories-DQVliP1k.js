import{w as T,n as e,j as n,o as t,V as a,a as o,H as i}from"./iframe-D93LbwGv.js";const v={title:"Components/Form Elements/ButtonGroup",component:e,argTypes:{buttonWidth:{control:{type:"radio"},options:T,table:{defaultValue:{summary:"default"}}},className:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:"false"}}},layout:{control:{type:"radio"},options:["column","row"],table:{defaultValue:{summary:"row"}}}}},d={args:{buttonWidth:"default",className:void 0,id:"button-id",isDisabled:!1,layout:"row"},parameters:{jest:["ButtonGroup.test.tsx"]},render:G=>n.jsxs(e,{...G,children:[n.jsx(t,{buttonType:"secondary",id:"group-1",children:"Button"}),n.jsx(t,{id:"group-2",children:"Submit"})]})},s={render:()=>n.jsxs(a,{align:"left",spacing:"l",children:[n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"default fit-content"}),n.jsxs(e,{children:[n.jsx(t,{buttonType:"secondary",id:"width-fit-1",children:"Button"}),n.jsx(t,{id:"width-fit-2",children:"Submit"})]})]}),n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"full width"}),n.jsxs(e,{buttonWidth:"full",children:[n.jsx(t,{buttonType:"secondary",id:"width-full-1",children:"Button"}),n.jsx(t,{id:"width-full-2",children:"Submit"})]})]})]})},u={render:()=>n.jsxs(a,{align:"left",spacing:"l",children:[n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"default row"}),n.jsxs(e,{children:[n.jsx(t,{buttonType:"secondary",id:"row-1",children:"Button"}),n.jsx(t,{id:"row-2",children:"Submit"})]})]}),n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"column"}),n.jsxs(e,{layout:"column",children:[n.jsx(t,{buttonType:"secondary",id:"column-1",children:"Button"}),n.jsx(t,{id:"column-2",children:"Submit"})]})]}),n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"column layout with full-width"}),n.jsxs(e,{buttonWidth:"full",layout:"column",children:[n.jsx(t,{buttonType:"secondary",id:"column-full-1",children:"Button"}),n.jsx(t,{id:"column-full-2",children:"Submit"})]})]})]})},l={render:()=>n.jsxs(a,{align:"left",spacing:"l",children:[n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"ButtonGroup isDisabled"}),n.jsxs(e,{isDisabled:!0,children:[n.jsx(t,{buttonType:"secondary",id:"group-disabled-1",children:"Button disabled"}),n.jsx(t,{buttonType:"secondary",id:"group-disabled-2",children:"Button disabled"})]})]}),n.jsxs(o,{children:[n.jsx(i,{level:"h3",size:"heading6",children:"Individual Button isDisabled"}),n.jsxs(e,{children:[n.jsx(t,{buttonType:"secondary",id:"individual-disabled-1",children:"Button not disabled"}),n.jsx(t,{buttonType:"secondary",id:"individual-disabled-2",isDisabled:!0,children:"Button disabled"})]})]})]})};var r,c,h,p,B;d.parameters={...d.parameters,docs:{...(r=d.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(h=(c=d.parameters)==null?void 0:c.docs)==null?void 0:h.source},description:{story:"Main Story for the ButtonGroup component. This must contains the `args`\nand `parameters` properties in this object.",...(B=(p=d.parameters)==null?void 0:p.docs)==null?void 0:B.description}}};var b,m,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var y,g,f;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(g=u.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,S,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const H=["WithControls","Width","Layout","Disabled"],D=Object.freeze(Object.defineProperty({__proto__:null,Disabled:l,Layout:u,Width:s,WithControls:d,__namedExportsOrder:H,default:v},Symbol.toStringTag,{value:"Module"}));export{D as B,l as D,u as L,d as W,s as a};
