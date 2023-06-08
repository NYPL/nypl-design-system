import{j as e,a as d}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as E}from"./index-6148c31a.js";import{B as u}from"./Button-a3ea41e0.js";import{I as M}from"./Icon-6616a4b9.js";import{I as p}from"./Image-3405777f.js";import{L as N}from"./Link-0ed02cf7.js";import{R as h}from"./Radio-c107ee3b.js";import{R as U}from"./RadioGroup-8ceb9bfa.js";import{S as J}from"./SimpleGrid-e54e0b68.js";import{T as P}from"./Text-eabcdc0a.js";import{T as K}from"./Toggle-9580209e.js";import{T as t}from"./Tooltip-aeab1bc9.js";import{V as m}from"./chakra-ui-layout.esm-b2fa9d31.js";const Q={title:"Components/Overlays & Switchers/Tooltip",component:t,decorators:[E],argTypes:{children:{control:!1},className:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},shouldWrapChildren:{table:{defaultValue:{summary:!1}}}}},o={args:{children:void 0,className:void 0,content:"This is a tooltip with information describing the hovered object.",id:"tooltip-id",isDisabled:!1,shouldWrapChildren:!1},render:_=>e(t,{..._,children:e(u,{id:"tooltip-button",children:"Hover me"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25702"},jest:["Tooltip.test.tsx"]}},r={render:()=>d(m,{align:"stretch",spacing:"l",children:[e(t,{content:"Invite library staff to share resources at your community event",shouldWrapChildren:!0,children:e(K,{id:"radio3",labelText:"Offsite Community Outreach"})}),d(U,{labelText:"What would you like to request?",id:"radio-group",name:"tooltip-example",children:[e(t,{content:"General library orientation or a customized research lesson",shouldWrapChildren:!0,children:e(h,{id:"radio1",labelText:"Class Visit",value:"Class Visit"})}),e(t,{content:"Guided exploration of the library and its resources",shouldWrapChildren:!0,children:e(h,{id:"radio2",labelText:"Group Tour",value:"Group Tour"})}),e(t,{content:"Invite library staff to share resources at your community event",shouldWrapChildren:!0,children:e(h,{id:"radio3",labelText:"Offsite Community Outreach",value:"Offsite Community Outreach"})})]})]})},i={render:()=>d(m,{align:"stretch",spacing:"l",children:[e(P,{children:"Images with aspect ratios but Tooltips use shouldWrapChildren. Don't do this."}),d(J,{children:[e(t,{content:"square aspect ratio",shouldWrapChildren:!0,children:e(p,{alt:"Alt text",caption:"Square",aspectRatio:"square",size:"large",src:"https://placeimg.com/400/400/animals"})}),e(t,{content:"fourByThree aspect ratio",shouldWrapChildren:!0,children:e(p,{alt:"Alt text",caption:"Four by Three",aspectRatio:"fourByThree",size:"default",src:"https://placeimg.com/400/400/animals"})}),e(t,{content:"threeByFour aspect ratio",shouldWrapChildren:!0,children:e(p,{alt:"Alt text",caption:"Three by Four",aspectRatio:"threeByFour",size:"default",src:"https://placeimg.com/400/400/animals"})})]})]})},a={render:()=>e(t,{content:"This is the tooltip text",children:e(N,{type:"action",href:"#passed-in-link",children:e(M,{decorative:!0,id:"icon-id",name:"search",size:"xxlarge"})})})},n={render:()=>e(t,{content:e(M,{decorative:!0,id:"icon-id",name:"search",size:"xxlarge",color:"ui.white"}),children:"Hover to see search icon"})},s={render:()=>e(t,{content:e(p,{src:"https://placeimg.com/300/300/animals?x=1",alt:""}),children:"Hover to see image"})},l={render:()=>e(t,{content:"This is a tooltip with information describing the hovered object.",isDisabled:!0,children:e(u,{id:"tooltip-button",children:"Hover me"})})},c={render:()=>d(m,{spacing:"input.group.button.vstack",width:"150px",children:[e(t,{content:"This is a tooltip with information describing the hovered object.",children:e(u,{id:"tooltip-button",isDisabled:!0,children:"Disabled Tooltip"})}),e(t,{content:"This is a tooltip with information describing the hovered object.",shouldWrapChildren:!0,children:e(u,{id:"tooltip-button",isDisabled:!0,children:"Enabled Tooltip"})})]})};var T,g,f,b,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: undefined,
    className: undefined,
    content: "This is a tooltip with information describing the hovered object.",
    id: "tooltip-id",
    isDisabled: false,
    shouldWrapChildren: false
  },
  render: args => <Tooltip {...args}>
      <Button id="tooltip-button">Hover me</Button>
    </Tooltip>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25702"
    },
    jest: ["Tooltip.test.tsx"]
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"Main Story for the Tooltip component. This must contains the `args`\nand `parameters` properties in this object.",...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.description}}};var x,C,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Tooltip content="Invite library staff to share resources at your community event" shouldWrapChildren>
        <Toggle id="radio3" labelText="Offsite Community Outreach" />
      </Tooltip>
      <RadioGroup labelText="What would you like to request?" id="radio-group" name="tooltip-example">
        <Tooltip content="General library orientation or a customized research lesson" shouldWrapChildren>
          <Radio id="radio1" labelText="Class Visit" value="Class Visit" />
        </Tooltip>
        <Tooltip content="Guided exploration of the library and its resources" shouldWrapChildren>
          <Radio id="radio2" labelText="Group Tour" value="Group Tour" />
        </Tooltip>
        <Tooltip content="Invite library staff to share resources at your community event" shouldWrapChildren>
          <Radio id="radio3" labelText="Offsite Community Outreach" value="Offsite Community Outreach" />
        </Tooltip>
      </RadioGroup>
    </VStack>
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,I,W;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Text>
        Images with aspect ratios but Tooltips use shouldWrapChildren. Don't do
        this.
      </Text>
      <SimpleGrid>
        <Tooltip content="square aspect ratio" shouldWrapChildren>
          <Image alt="Alt text" caption="Square" aspectRatio="square" size="large" src="https://placeimg.com/400/400/animals" />
        </Tooltip>
        <Tooltip content="fourByThree aspect ratio" shouldWrapChildren>
          <Image alt="Alt text" caption="Four by Three" aspectRatio="fourByThree" size="default" src="https://placeimg.com/400/400/animals" />
        </Tooltip>
        <Tooltip content="threeByFour aspect ratio" shouldWrapChildren>
          <Image alt="Alt text" caption="Three by Four" aspectRatio="threeByFour" size="default" src="https://placeimg.com/400/400/animals" />
        </Tooltip>
      </SimpleGrid>
    </VStack>
}`,...(W=(I=i.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var w,O,B;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is the tooltip text">
      <Link type="action" href="#passed-in-link">
        <Icon decorative id="icon-id" name="search" size="xxlarge" />
      </Link>
    </Tooltip>
}`,...(B=(O=a.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var D,k,j;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Tooltip content={<Icon decorative id="icon-id" name="search" size="xxlarge" color="ui.white" />}>
      Hover to see search icon
    </Tooltip>
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var R,G,V;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Tooltip content={<Image src="https://placeimg.com/300/300/animals?x=1" alt="" />}>
      Hover to see image
    </Tooltip>
}`,...(V=(G=s.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var z,F,q;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a tooltip with information describing the hovered object." isDisabled>
      <Button id="tooltip-button">Hover me</Button>
    </Tooltip>
}`,...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var A,H,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <VStack spacing="input.group.button.vstack" width="150px">
      <Tooltip content="This is a tooltip with information describing the hovered object.">
        <Button id="tooltip-button" isDisabled>
          Disabled Tooltip
        </Button>
      </Tooltip>
      <Tooltip content="This is a tooltip with information describing the hovered object." shouldWrapChildren>
        <Button id="tooltip-button" isDisabled>
          Enabled Tooltip
        </Button>
      </Tooltip>
    </VStack>
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const X=["WithControls","OnFormElements","OnImageComponents","OnLinkedIcons","UsingIconContent","UsingImageContent","DisablingTooltip","DisablingTooltipButton"],de=Object.freeze(Object.defineProperty({__proto__:null,DisablingTooltip:l,DisablingTooltipButton:c,OnFormElements:r,OnImageComponents:i,OnLinkedIcons:a,UsingIconContent:n,UsingImageContent:s,WithControls:o,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{l as D,r as O,de as T,n as U,o as W,i as a,a as b,s as c,c as d};
//# sourceMappingURL=Tooltip.stories-8ad016d9.js.map
