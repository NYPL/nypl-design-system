import{j as e,a as d}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as E}from"./index-6148c31a.js";import{B as u}from"./Button-948e9be8.js";import{I as M}from"./Icon-4eeffe51.js";import{I as p}from"./Image-ed70f474.js";import{L as N}from"./Link-24c1437a.js";import{R as h}from"./Radio-8cdc7037.js";import{R as U}from"./RadioGroup-8ef77e28.js";import{S as J}from"./SimpleGrid-bd04b221.js";import{T as P}from"./Text-d88b2f7a.js";import{T as K}from"./Toggle-3062d19c.js";import{T as t}from"./Tooltip-88733f7d.js";import{V as m}from"./chakra-ui-layout.esm-e0dbb94e.js";const Q={title:"Components/Overlays & Switchers/Tooltip",component:t,decorators:[E],argTypes:{children:{control:!1},className:{control:!1},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},shouldWrapChildren:{table:{defaultValue:{summary:!1}}}}},o={args:{children:void 0,className:void 0,content:"This is a tooltip with information describing the hovered object.",id:"tooltip-id",isDisabled:!1,shouldWrapChildren:!1},render:_=>e(t,{..._,children:e(u,{id:"tooltip-button",children:"Hover me"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25702"},jest:["Tooltip.test.tsx"]}},r={render:()=>d(m,{align:"stretch",spacing:"l",children:[e(t,{content:"Invite library staff to share resources at your community event",shouldWrapChildren:!0,children:e(K,{id:"radio3",labelText:"Offsite Community Outreach"})}),d(U,{labelText:"What would you like to request?",id:"radio-group",name:"tooltip-example",children:[e(t,{content:"General library orientation or a customized research lesson",shouldWrapChildren:!0,children:e(h,{id:"radio1",labelText:"Class Visit",value:"Class Visit"})}),e(t,{content:"Guided exploration of the library and its resources",shouldWrapChildren:!0,children:e(h,{id:"radio2",labelText:"Group Tour",value:"Group Tour"})}),e(t,{content:"Invite library staff to share resources at your community event",shouldWrapChildren:!0,children:e(h,{id:"radio3",labelText:"Offsite Community Outreach",value:"Offsite Community Outreach"})})]})]})},i={render:()=>d(m,{align:"stretch",spacing:"l",children:[e(P,{children:"Images with aspect ratios but Tooltips use shouldWrapChildren. Don't do this."}),d(J,{children:[e(t,{content:"square aspect ratio",shouldWrapChildren:!0,children:e(p,{alt:"Alt text",caption:"Square",aspectRatio:"square",size:"large",src:"//placekitten.com/400/400"})}),e(t,{content:"fourByThree aspect ratio",shouldWrapChildren:!0,children:e(p,{alt:"Alt text",caption:"Four by Three",aspectRatio:"fourByThree",size:"default",src:"//placekitten.com/400/400"})}),e(t,{content:"threeByFour aspect ratio",shouldWrapChildren:!0,children:e(p,{alt:"Alt text",caption:"Three by Four",aspectRatio:"threeByFour",size:"default",src:"//placekitten.com/400/400"})})]})]})},n={render:()=>e(t,{content:"This is the tooltip text",children:e(N,{type:"action",href:"#passed-in-link",children:e(M,{decorative:!0,id:"icon-id",name:"search",size:"xxlarge"})})})},a={render:()=>e(t,{content:e(M,{decorative:!0,id:"icon-id",name:"search",size:"xxlarge",color:"ui.white"}),children:"Hover to see search icon"})},s={render:()=>e(t,{content:e(p,{src:"//placekitten.com/300/300",alt:""}),children:"Hover to see image"})},l={render:()=>e(t,{content:"This is a tooltip with information describing the hovered object.",isDisabled:!0,children:e(u,{id:"tooltip-button",children:"Hover me"})})},c={render:()=>d(m,{spacing:"input.group.button.vstack",width:"150px",children:[e(t,{content:"This is a tooltip with information describing the hovered object.",children:e(u,{id:"tooltip-button",isDisabled:!0,children:"Disabled Tooltip"})}),e(t,{content:"This is a tooltip with information describing the hovered object.",shouldWrapChildren:!0,children:e(u,{id:"tooltip-button",isDisabled:!0,children:"Enabled Tooltip"})})]})};var T,f,b,g,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Main Story for the Tooltip component. This must contains the `args`\nand `parameters` properties in this object.",...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var C,x,v;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,k,I;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Text>
        Images with aspect ratios but Tooltips use shouldWrapChildren. Don't do
        this.
      </Text>
      <SimpleGrid>
        <Tooltip content="square aspect ratio" shouldWrapChildren>
          <Image alt="Alt text" caption="Square" aspectRatio="square" size="large" src="//placekitten.com/400/400" />
        </Tooltip>
        <Tooltip content="fourByThree aspect ratio" shouldWrapChildren>
          <Image alt="Alt text" caption="Four by Three" aspectRatio="fourByThree" size="default" src="//placekitten.com/400/400" />
        </Tooltip>
        <Tooltip content="threeByFour aspect ratio" shouldWrapChildren>
          <Image alt="Alt text" caption="Three by Four" aspectRatio="threeByFour" size="default" src="//placekitten.com/400/400" />
        </Tooltip>
      </SimpleGrid>
    </VStack>
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var W,w,O;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is the tooltip text">
      <Link type="action" href="#passed-in-link">
        <Icon decorative id="icon-id" name="search" size="xxlarge" />
      </Link>
    </Tooltip>
}`,...(O=(w=n.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,D,j;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Tooltip content={<Icon decorative id="icon-id" name="search" size="xxlarge" color="ui.white" />}>
      Hover to see search icon
    </Tooltip>
}`,...(j=(D=a.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var R,G,V;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Tooltip content={<Image src="//placekitten.com/300/300" alt="" />}>
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
}`,...(L=(H=c.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const X=["WithControls","OnFormElements","OnImageComponents","OnLinkedIcons","UsingIconContent","UsingImageContent","DisablingTooltip","DisablingTooltipButton"],de=Object.freeze(Object.defineProperty({__proto__:null,DisablingTooltip:l,DisablingTooltipButton:c,OnFormElements:r,OnImageComponents:i,OnLinkedIcons:n,UsingIconContent:a,UsingImageContent:s,WithControls:o,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{l as D,r as O,de as T,a as U,o as W,i as a,n as b,s as c,c as d};
//# sourceMappingURL=Tooltip.stories-8fc11a78.js.map
