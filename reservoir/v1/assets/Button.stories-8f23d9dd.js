import{a as n,j as t}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as _}from"./index-6148c31a.js";import{B as e,b as E,a as W,c as F}from"./Button-a3ea41e0.js";import{B as r}from"./ButtonGroup-3ea9dbd7.js";import{I as o}from"./Icon-6616a4b9.js";import{i as q}from"./iconVariables-e95a44bb.js";import{T as J}from"./Table-3ba53b9e.js";import{V as b}from"./chakra-ui-layout.esm-b2fa9d31.js";const K={title:"Components/Form Elements/Button",component:e,decorators:[_],argTypes:{buttonText:{description:"**Only used for Storybook – ** Set the button label text."},buttonType:{control:{type:"select"},options:E,table:{defaultValue:{summary:"primary"}}},className:{control:!1},displayIcon:{control:{type:"boolean"},description:"**Only used for Storybook – ** Toggle the icon visibility."},displayIconLeft:{description:"**Only used for Storybook – ** Move the icon left or right."},iconType:{control:{type:"select"},options:q,description:"**Only used for Storybook – ** Select an icon. "},id:{control:!1},isDisabled:{table:{defaultValue:{summary:!1}}},mouseDown:{table:{defaultValue:{summary:!1}}},onClick:{control:!1},size:{control:{type:"radio"},options:W,table:{defaultValue:{summary:"medium"}}},type:{control:{type:"radio"},options:F,table:{defaultValue:{summary:"button"}}}}},i={args:{buttonText:"Button Text",buttonType:"primary",className:void 0,displayIcon:!1,displayIconLeft:!0,iconType:"search",id:"button-id",isDisabled:!1,mouseDown:void 0,onClick:void 0,size:void 0,type:"button"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298"},jest:["Button.test.tsx"]},render:a=>n(e,{id:"button-id",...a,children:[a.displayIcon&&a.displayIconLeft&&t(o,{name:a.iconType,align:"left",size:"small"}),a.buttonText,a.displayIcon&&!a.displayIconLeft&&t(o,{name:a.iconType,align:"right",size:"small"})]})},l={render:()=>n(r,{children:[t(e,{buttonType:"secondary",id:"group-1",children:"Button"}),t(e,{id:"group-2",children:"Submit"})]})},s={render:()=>n(b,{align:"left",spacing:"l",children:[n(b,{align:"left",spacing:"input.group.button.vstack",width:"150px",children:[n(e,{id:"icon-1",children:[t(o,{name:"search",align:"left",size:"small"}),"Button Text"]}),n(e,{id:"icon-2",children:["Button Text",t(o,{name:"search",align:"right",size:"small"})]})]}),n(r,{children:[n(e,{buttonType:"secondary",id:"icon-left",children:[t(o,{name:"arrow",iconRotation:"rotate90",align:"left",size:"small"}),"Previous"]}),n(e,{buttonType:"secondary",id:"icon-right",children:["Next",t(o,{name:"arrow",iconRotation:"rotate270",align:"right",size:"small"})]})]})]}),name:"Label and Icon"},d={render:()=>n(r,{children:[t(e,{"aria-label":"Previous",buttonType:"secondary",id:"prev-btn",children:t(o,{name:"arrow",iconRotation:"rotate90",size:"small"})}),t(e,{"aria-label":"Next",buttonType:"secondary",id:"next-btn",children:t(o,{name:"arrow",iconRotation:"rotate270",size:"small"})}),t(e,{"aria-label":"Close",buttonType:"secondary",id:"close-btn",children:t(o,{name:"close",size:"small"})})]})},c={render:()=>n(r,{children:[t(e,{buttonType:"callout",id:"donate-btn",children:"Donate to this library"}),n(e,{buttonType:"secondary",id:"top-btn",children:["Back to Top",t(o,{name:"arrow",iconRotation:"rotate180",size:"small",className:"right",align:"right"})]})]})},u={render:()=>n(r,{alignItems:"center",children:[t(e,{id:"primary-btn",children:"Primary"}),t(e,{buttonType:"secondary",id:"secondary-btn",children:"Secondary"}),t(e,{buttonType:"text",id:"text-btn",children:"Text"}),t(e,{buttonType:"callout",id:"callout-btn",children:"Callout"}),t(e,{buttonType:"noBrand",id:"nobrand-btn",children:"No Brand"}),t(e,{buttonType:"pill",id:"pill-btn",children:"Pill"}),t(e,{buttonType:"link",id:"link-btn",children:"Link (deprecated)"})]})},m={render:()=>n(r,{children:[t(e,{id:"enabled-btn",isDisabled:!1,children:"Enabled"}),t(e,{id:"disabled-btn",isDisabled:!0,children:"isDisabled"})]})},Q=["--","small","medium (default)","large"],U=[["primary",t(e,{id:"p-small",size:"small",children:"Primary"},"p-small"),t(e,{id:"p-medium",size:"medium",children:"Primary"},"p-medium"),t(e,{id:"p-large",size:"large",children:"Primary"},"p-large")],["secondary",t(e,{buttonType:"secondary",id:"s-small",size:"small",children:"Secondary"},"s-small"),t(e,{buttonType:"secondary",id:"s-medium",size:"medium",children:"Secondary"},"s-medium"),t(e,{buttonType:"secondary",id:"s-large",size:"large",children:"Secondary"},"s-large")],["text",t(e,{buttonType:"text",id:"t-small",size:"small",children:"Text"},"t-small"),t(e,{buttonType:"text",id:"t-medium",size:"medium",children:"Text"},"t-medium"),t(e,{buttonType:"text",id:"t-large",size:"large",children:"Text"},"t-large")],["callout",t(e,{buttonType:"callout",id:"c-small",size:"small",children:"Callout"},"c-small"),t(e,{buttonType:"callout",id:"c-medium",size:"medium",children:"Callout"},"c-medium"),t(e,{buttonType:"callout",id:"c-large",size:"large",children:"Callout"},"c-large")],["noBrand",t(e,{buttonType:"noBrand",id:"nb-small",size:"small",children:"No Brand"},"nb-small"),t(e,{buttonType:"noBrand",id:"nb-medium",size:"medium",children:"No Brand"},"nb-medium"),t(e,{buttonType:"noBrand",id:"nb-large",size:"large",children:"No Brand"},"nb-large")],["pill",t(e,{buttonType:"pill",id:"pill-small",size:"small",children:"Pill"},"pill-small"),t(e,{buttonType:"pill",id:"pill-medium",size:"medium",children:"Pill"},"pill-medium"),t(e,{buttonType:"pill",id:"pill-large",size:"large",children:"Pill"},"pill-large")],["link (deprecated)",t(e,{buttonType:"link",id:"l-small",size:"small",children:"Link"},"l-small"),t(e,{buttonType:"link",id:"l-medium",size:"medium",children:"Link"},"l-medium"),t(e,{buttonType:"link",id:"l-large",size:"large",children:"Link"},"l-large")]],p={render:()=>t(J,{columnHeaders:Q,id:"all-sizes",showRowDividers:!0,tableData:U,useRowHeaders:!0,sx:{tbody:{th:{verticalAlign:"middle"},td:{verticalAlign:"middle"}}}})};var y,g,h,B,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    buttonText: "Button Text",
    buttonType: "primary",
    className: undefined,
    displayIcon: false,
    displayIconLeft: true,
    iconType: "search",
    id: "button-id",
    isDisabled: false,
    mouseDown: undefined,
    onClick: undefined,
    size: undefined,
    type: "button"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298"
    },
    jest: ["Button.test.tsx"]
  },
  render: args => <Button id="button-id" {...args}>
      {args.displayIcon && args.displayIconLeft && <Icon name={args.iconType} align="left" size="small" />}
      {args.buttonText}
      {args.displayIcon && !args.displayIconLeft && <Icon name={args.iconType} align="right" size="small" />}
    </Button>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Main Story for the Button component. This must contains the `args`\nand `parameters` properties in this object.",...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.description}}};var f,z,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button buttonType="secondary" id="group-1">
        Button
      </Button>
      <Button id="group-2">Submit</Button>
    </ButtonGroup>
}`,...(x=(z=l.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var I,S,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <VStack align="left" spacing="l">
      <VStack align="left" spacing="input.group.button.vstack" width="150px">
        <Button id="icon-1">
          <Icon name="search" align="left" size="small" />
          Button Text
        </Button>
        <Button id="icon-2">
          Button Text
          <Icon name="search" align="right" size="small" />
        </Button>
      </VStack>
      <ButtonGroup>
        <Button buttonType="secondary" id="icon-left">
          <Icon name="arrow" iconRotation="rotate90" align="left" size="small" />
          Previous
        </Button>
        <Button buttonType="secondary" id="icon-right">
          Next
          <Icon name="arrow" iconRotation="rotate270" align="right" size="small" />
        </Button>
      </ButtonGroup>
    </VStack>,
  name: "Label and Icon"
}`,...(k=(S=s.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,D,v;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button aria-label="Previous" buttonType="secondary" id="prev-btn">
        <Icon name="arrow" iconRotation="rotate90" size="small" />
      </Button>
      <Button aria-label="Next" buttonType="secondary" id="next-btn">
        <Icon name="arrow" iconRotation="rotate270" size="small" />
      </Button>
      <Button aria-label="Close" buttonType="secondary" id="close-btn">
        <Icon name="close" size="small" />
      </Button>
    </ButtonGroup>
}`,...(v=(D=d.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var P,N,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button buttonType="callout" id="donate-btn">
        Donate to this library
      </Button>
      <Button buttonType="secondary" id="top-btn">
        Back to Top
        <Icon name="arrow" iconRotation="rotate180" size="small" className="right" align="right" />
      </Button>
    </ButtonGroup>
}`,...(C=(N=c.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var G,L,R;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <ButtonGroup alignItems="center">
      <Button id="primary-btn">Primary</Button>
      <Button buttonType="secondary" id="secondary-btn">
        Secondary
      </Button>
      <Button buttonType="text" id="text-btn">
        Text
      </Button>
      <Button buttonType="callout" id="callout-btn">
        Callout
      </Button>
      <Button buttonType="noBrand" id="nobrand-btn">
        No Brand
      </Button>
      <Button buttonType="pill" id="pill-btn">
        Pill
      </Button>
      <Button buttonType="link" id="link-btn">
        Link (deprecated)
      </Button>
    </ButtonGroup>
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var A,V,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button id="enabled-btn" isDisabled={false}>
        Enabled
      </Button>
      <Button id="disabled-btn" isDisabled>
        isDisabled
      </Button>
    </ButtonGroup>
}`,...(O=(V=m.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var j,H,M;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Table columnHeaders={sizeHeaders} id="all-sizes" showRowDividers tableData={buttonData} useRowHeaders sx={{
    tbody: {
      th: {
        verticalAlign: "middle"
      },
      td: {
        verticalAlign: "middle"
      }
    }
  }} />
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const X=["WithControls","ButtonGroups","TextWithIcon","IconOnly","Patterns","ButtonTypes","DisabledButtons","ButtonSizes"],it=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroups:l,ButtonSizes:p,ButtonTypes:u,DisabledButtons:m,IconOnly:d,Patterns:c,TextWithIcon:s,WithControls:i,__namedExportsOrder:X,default:K},Symbol.toStringTag,{value:"Module"}));export{it as B,m as D,d as I,c as P,s as T,i as W,l as a,u as b,p as c};
//# sourceMappingURL=Button.stories-8f23d9dd.js.map
