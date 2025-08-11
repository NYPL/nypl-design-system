import{bg as t,j as e,o as g,V as x,bf as te,ad as oe,ae as T,H as C,Z as y,L as i,y as n,Y as o,I as $,m as u,b as f,c as b,d as j}from"./iframe-D93LbwGv.js";import{a as v}from"./storybookUtils-BmTl87w5.js";const ie={title:"Components/Overlays & Switchers/Tooltip",component:t,argTypes:{children:{control:!1},className:{control:!1},id:{control:!1},isDisabled:v(),offset:{control:!1},placement:{control:"select",options:["top","bottom","left","right","auto"],table:{defaultValue:{summary:"top"}}},shouldWrapChildren:v()}},r={args:{children:void 0,className:void 0,content:"This is a tooltip with information describing the hovered object.",id:"tooltip-id",isDisabled:!1,offset:void 0,placement:void 0,shouldWrapChildren:!1},render:ee=>e.jsx(t,{...ee,children:e.jsx(g,{id:"tooltip-button",children:"Hover me"})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25702"},jest:["Tooltip.test.tsx"]}},s={render:()=>e.jsxs(x,{align:"stretch",spacing:"l",children:[e.jsx(t,{content:"Invite library staff to share resources at your community event",shouldWrapChildren:!0,children:e.jsx(te,{id:"radio3",labelText:"Offsite Community Outreach"})}),e.jsxs(oe,{labelText:"What would you like to request?",id:"radio-group",name:"tooltip-example",children:[e.jsx(t,{content:"General library orientation or a customized research lesson",shouldWrapChildren:!0,children:e.jsx(T,{id:"radio1",labelText:"Class Visit",value:"Class Visit"})}),e.jsx(t,{content:"Guided exploration of the library and its resources",shouldWrapChildren:!0,children:e.jsx(T,{id:"radio2",labelText:"Group Tour",value:"Group Tour"})}),e.jsx(t,{content:"Invite library staff to share resources at your community event",shouldWrapChildren:!0,children:e.jsx(T,{id:"radio3",labelText:"Offsite Community Outreach",value:"Offsite Community Outreach"})})]})]})},a={render:()=>e.jsxs(x,{align:"stretch",spacing:"l",children:[e.jsx(C,{level:"h4",size:"heading7",subtitle:"Don't do this!",children:"aspectRatio with shouldWrapChildren"}),e.jsxs(y,{children:[e.jsx(t,{content:"Sed posuere consectetur est at lobortis.",shouldWrapChildren:!0,children:e.jsx(i,{href:"http://nypl.org",children:e.jsx(n,{alt:"Alt text",aspectRatio:"square",caption:"square and medium",size:"medium",src:o("smaller")})})}),e.jsx(t,{content:"Sed posuere consectetur est at lobortis.",shouldWrapChildren:!0,children:e.jsx(i,{href:"http://nypl.org",children:e.jsx(n,{alt:"Alt text",aspectRatio:"fourByThree",caption:"fourByThree and medium",size:"medium",src:o("smaller")})})}),e.jsx(t,{content:"Sed posuere consectetur est at lobortis.",shouldWrapChildren:!0,children:e.jsx(i,{href:"http://nypl.org",children:e.jsx(n,{alt:"Alt text",aspectRatio:"threeByFour",caption:"threeByFour and medium",size:"medium",src:o("smaller")})})})]}),e.jsx(C,{level:"h4",size:"heading7",subtitle:"Do this!",children:"aspectRatio without shouldWrapChildren"}),e.jsxs(y,{children:[e.jsx(t,{content:"Sed posuere consectetur est at lobortis.",children:e.jsx(i,{href:"http://nypl.org",children:e.jsx(n,{alt:"Alt text",aspectRatio:"square",caption:"square and medium",size:"medium",src:o("smaller")})})}),e.jsx(t,{content:"Sed posuere consectetur est at lobortis.",children:e.jsx(i,{href:"http://nypl.org",children:e.jsx(n,{alt:"Alt text",aspectRatio:"fourByThree",caption:"fourByThree and medium",size:"medium",src:o("smaller")})})}),e.jsx(t,{content:"Sed posuere consectetur est at lobortis.",children:e.jsx(i,{href:"http://nypl.org",children:e.jsx(n,{alt:"Alt text",aspectRatio:"threeByFour",caption:"threeByFour and medium",size:"medium",src:o("smaller")})})})]})]})},l={render:()=>e.jsx(t,{content:"This is the tooltip text",children:e.jsx(i,{type:"action",href:"#passed-in-link",children:e.jsx($,{decorative:!0,id:"icon-id",name:"search",size:"large"})})})},d={name:"Icon and Image Content",render:()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Hover to see"," ",e.jsx(t,{content:e.jsx($,{color:"ui.white",decorative:!0,id:"icon-id",name:"search",size:"xxlarge"}),children:e.jsx(i,{href:"https://nypl.org",children:"search icon"})})]}),e.jsxs("p",{children:["Hover to see"," ",e.jsx(t,{content:e.jsx(n,{alt:"Example image",src:o("smaller")}),children:e.jsx(i,{href:"https://nypl.org",children:"image"})})]})]})},c={render:()=>e.jsxs(x,{align:"stretch",spacing:"l",children:[e.jsx(t,{placement:"top",content:"This is the tooltip text",children:e.jsx(u,{width:"150px",children:" Top tooltip (default) "})}),e.jsx(t,{placement:"bottom",content:"This is the tooltip text",children:e.jsx(u,{width:"150px",children:"Bottom tooltip "})}),e.jsx(t,{placement:"left",content:"This is the tooltip text",children:e.jsx(u,{width:"150px",children:"Left tooltip "})}),e.jsx(t,{placement:"right",content:"This is the tooltip text",children:e.jsx(u,{width:"150px",children:" Right tooltip "})})]})},p={render:()=>e.jsxs(y,{children:[e.jsx(t,{content:"This is the tooltip text",children:e.jsxs(f,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:o("smaller")},mainActionLink:"http://nypl.org",children:[e.jsx(b,{level:"h3",id:"fullclick2-heading1",size:"heading5",children:"Tooltip default offset"}),e.jsx(j,{children:"I'm a card"})]})}),e.jsx(t,{offset:[100,0],content:"This is the tooltip text",children:e.jsxs(f,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:o("smaller")},mainActionLink:"http://nypl.org",children:[e.jsx(b,{level:"h3",id:"fullclick2-heading1",size:"heading5",children:"Tooltip offset [100, 0]"}),e.jsx(j,{children:"I'm a card"})]})}),e.jsx(t,{offset:[0,-100],content:"This is the tooltip text",children:e.jsxs(f,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:o("smaller")},mainActionLink:"http://nypl.org",children:[e.jsx(b,{level:"h3",id:"fullclick2-heading1",size:"heading5",children:"Tooltip offset [0, -100]"}),e.jsx(j,{children:"I'm a card"})]})})]})},h={render:()=>e.jsx(t,{content:"This is a tooltip with information describing the hovered object.",isDisabled:!0,children:e.jsx(g,{id:"tooltip-button",children:"Hover me"})})},m={render:()=>e.jsxs(x,{spacing:"input.group.button.vstack",width:"150px",children:[e.jsx(t,{content:"This is a tooltip with information describing the hovered object.",children:e.jsx(g,{id:"tooltip-button",isDisabled:!0,children:"Disabled Tooltip"})}),e.jsx(t,{content:"This is a tooltip with information describing the hovered object.",shouldWrapChildren:!0,children:e.jsx(g,{id:"tooltip-button",isDisabled:!0,children:"Enabled Tooltip"})})]})};var I,k,S,w,A;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: undefined,
    className: undefined,
    content: "This is a tooltip with information describing the hovered object.",
    id: "tooltip-id",
    isDisabled: false,
    offset: undefined,
    placement: undefined,
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
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"Main Story for the Tooltip component. This must contains the `args`\nand `parameters` properties in this object.",...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.description}}};var B,R,O;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(R=s.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var L,z,W;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Heading level="h4" size="heading7" subtitle="Don't do this!">
        aspectRatio with shouldWrapChildren
      </Heading>
      <SimpleGrid>
        <Tooltip content="Sed posuere consectetur est at lobortis." shouldWrapChildren>
          <Link href="http://nypl.org">
            <Image alt="Alt text" aspectRatio="square" caption="square and medium" size="medium" src={getPlaceholderImage("smaller")} />
          </Link>
        </Tooltip>
        <Tooltip content="Sed posuere consectetur est at lobortis." shouldWrapChildren>
          <Link href="http://nypl.org">
            <Image alt="Alt text" aspectRatio="fourByThree" caption="fourByThree and medium" size="medium" src={getPlaceholderImage("smaller")} />
          </Link>
        </Tooltip>
        <Tooltip content="Sed posuere consectetur est at lobortis." shouldWrapChildren>
          <Link href="http://nypl.org">
            <Image alt="Alt text" aspectRatio="threeByFour" caption="threeByFour and medium" size="medium" src={getPlaceholderImage("smaller")} />
          </Link>
        </Tooltip>
      </SimpleGrid>
      <Heading level="h4" size="heading7" subtitle="Do this!">
        aspectRatio without shouldWrapChildren
      </Heading>
      <SimpleGrid>
        <Tooltip content="Sed posuere consectetur est at lobortis.">
          <Link href="http://nypl.org">
            <Image alt="Alt text" aspectRatio="square" caption="square and medium" size="medium" src={getPlaceholderImage("smaller")} />
          </Link>
        </Tooltip>
        <Tooltip content="Sed posuere consectetur est at lobortis.">
          <Link href="http://nypl.org">
            <Image alt="Alt text" aspectRatio="fourByThree" caption="fourByThree and medium" size="medium" src={getPlaceholderImage("smaller")} />
          </Link>
        </Tooltip>
        <Tooltip content="Sed posuere consectetur est at lobortis.">
          <Link href="http://nypl.org">
            <Image alt="Alt text" aspectRatio="threeByFour" caption="threeByFour and medium" size="medium" src={getPlaceholderImage("smaller")} />
          </Link>
        </Tooltip>
      </SimpleGrid>
    </VStack>
}`,...(W=(z=a.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var H,P,D;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is the tooltip text">
      <Link type="action" href="#passed-in-link">
        <Icon decorative id="icon-id" name="search" size="large" />
      </Link>
    </Tooltip>
}`,...(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var G,V,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Icon and Image Content",
  render: () => <>
      <p>
        Hover to see{" "}
        <Tooltip content={
      // It is not recommended to include an icon in tooltip content.
      <Icon color="ui.white" decorative id="icon-id" name="search" size="xxlarge" />}>
          <Link href="https://nypl.org">search icon</Link>
        </Tooltip>
      </p>

      <p>
        Hover to see{" "}
        <Tooltip content={
      // It is not recommended to include an image in tooltip content.
      <Image alt="Example image" src={getPlaceholderImage("smaller")} />}>
          <Link href="https://nypl.org">image</Link>
        </Tooltip>
      </p>
    </>
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,q,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Tooltip placement="top" content="This is the tooltip text">
        <Text width="150px"> Top tooltip (default) </Text>
      </Tooltip>
      <Tooltip placement="bottom" content="This is the tooltip text">
        <Text width="150px">Bottom tooltip </Text>
      </Tooltip>
      <Tooltip placement="left" content="This is the tooltip text">
        <Text width="150px">Left tooltip </Text>
      </Tooltip>
      <Tooltip placement="right" content="This is the tooltip text">
        <Text width="150px"> Right tooltip </Text>
      </Tooltip>
    </VStack>
}`,...(M=(q=c.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var _,N,J;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <SimpleGrid>
      <Tooltip content="This is the tooltip text">
        <Card imageProps={{
        alt: "Alt text",
        aspectRatio: "twoByOne",
        isAtEnd: true,
        src: getPlaceholderImage("smaller")
      }} mainActionLink="http://nypl.org">
          <CardHeading level="h3" id="fullclick2-heading1" size="heading5">
            Tooltip default offset
          </CardHeading>
          <CardContent>I'm a card</CardContent>
        </Card>
      </Tooltip>
      <Tooltip offset={[100, 0]} content="This is the tooltip text">
        <Card imageProps={{
        alt: "Alt text",
        aspectRatio: "twoByOne",
        isAtEnd: true,
        src: getPlaceholderImage("smaller")
      }} mainActionLink="http://nypl.org">
          <CardHeading level="h3" id="fullclick2-heading1" size="heading5">
            Tooltip offset [100, 0]
          </CardHeading>
          <CardContent>I'm a card</CardContent>
        </Card>
      </Tooltip>
      <Tooltip offset={[0, -100]} content="This is the tooltip text">
        <Card imageProps={{
        alt: "Alt text",
        aspectRatio: "twoByOne",
        isAtEnd: true,
        src: getPlaceholderImage("smaller")
      }} mainActionLink="http://nypl.org">
          <CardHeading level="h3" id="fullclick2-heading1" size="heading5">
            Tooltip offset [0, -100]
          </CardHeading>
          <CardContent>I'm a card</CardContent>
        </Card>
      </Tooltip>
    </SimpleGrid>
}`,...(J=(N=p.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var Y,Z,K;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Tooltip content="This is a tooltip with information describing the hovered object." isDisabled>
      <Button id="tooltip-button">Hover me</Button>
    </Tooltip>
}`,...(K=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ne=["WithControls","OnFormElements","OnImageComponents","OnLinkedIcons","IconAndImageContent","Placement","Offset","DisablingTooltip","DisablingTooltipButton"],ae=Object.freeze(Object.defineProperty({__proto__:null,DisablingTooltip:h,DisablingTooltipButton:m,IconAndImageContent:d,Offset:p,OnFormElements:s,OnImageComponents:a,OnLinkedIcons:l,Placement:c,WithControls:r,__namedExportsOrder:ne,default:ie},Symbol.toStringTag,{value:"Module"}));export{h as D,d as I,s as O,c as P,ae as T,r as W,a,l as b,m as c,p as d};
