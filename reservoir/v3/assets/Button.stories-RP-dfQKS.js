import{s as M,t as E,v as _,o as t,j as e,I as n,n as s,V as m,T as W}from"./iframe-D93LbwGv.js";import{i as F}from"./iconVariables-Bcc5qynd.js";const q={title:"Components/Form Elements/Button",component:t,argTypes:{buttonText:{description:"**Only used for Storybook – ** Set the button label text."},buttonType:{control:{type:"select"},options:_,table:{defaultValue:{summary:"primary"}}},className:{control:!1},displayIcon:{control:{type:"boolean"},description:"**Only used for Storybook – ** Toggle the icon visibility."},displayIconLeft:{description:"**Only used for Storybook – ** Move the icon left or right."},iconType:{control:{type:"select"},options:F,description:"**Only used for Storybook – ** Select an icon. "},id:{control:!1},isDisabled:{table:{defaultValue:{summary:"false"}}},mouseDown:{table:{defaultValue:{summary:"false"}}},onClick:{control:!1},size:{control:{type:"radio"},options:E,table:{defaultValue:{summary:"medium"}}},type:{control:{type:"radio"},options:M,table:{defaultValue:{summary:"button"}}}}},a={args:{buttonText:"Button Text",buttonType:"primary",className:void 0,displayIcon:!1,displayIconLeft:!0,iconType:"search",id:"button-id",isDisabled:!1,mouseDown:void 0,onClick:void 0,screenreaderOnlyText:"Screenreader only text",size:void 0,type:"button"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11477%3A2298"},jest:["Button.test.tsx"]},render:o=>e.jsxs(t,{id:"button-id",...o,children:[o.displayIcon&&o.displayIconLeft&&e.jsx(n,{name:o.iconType,align:"left",size:"small"}),o.buttonText,o.displayIcon&&!o.displayIconLeft&&e.jsx(n,{name:o.iconType,align:"right",size:"small"})]})},i={render:()=>e.jsxs(s,{children:[e.jsx(t,{buttonType:"secondary",id:"group-1",children:"Button"}),e.jsx(t,{id:"group-2",children:"Submit"})]})},r={render:()=>e.jsxs(m,{align:"left",spacing:"l",children:[e.jsxs(m,{align:"left",spacing:"input.group.button.vstack",width:"150px",children:[e.jsxs(t,{id:"icon-1",children:[e.jsx(n,{name:"search",align:"left",size:"small"}),"Button Text"]}),e.jsxs(t,{id:"icon-2",children:["Button Text",e.jsx(n,{name:"search",align:"right",size:"small"})]})]}),e.jsxs(s,{children:[e.jsxs(t,{buttonType:"secondary",id:"icon-left",children:[e.jsx(n,{name:"arrow",iconRotation:"rotate90",align:"left",size:"small"}),"Previous"]}),e.jsxs(t,{buttonType:"secondary",id:"icon-right",children:["Next",e.jsx(n,{name:"arrow",iconRotation:"rotate270",align:"right",size:"small"})]})]})]}),name:"Label and Icon"},l={render:()=>e.jsxs(s,{children:[e.jsx(t,{"aria-label":"Previous",buttonType:"secondary",id:"prev-btn",children:e.jsx(n,{name:"arrow",iconRotation:"rotate90",size:"small"})}),e.jsx(t,{"aria-label":"Next",buttonType:"secondary",id:"next-btn",children:e.jsx(n,{name:"arrow",iconRotation:"rotate270",size:"small"})}),e.jsx(t,{"aria-label":"Close",buttonType:"secondary",id:"close-btn",children:e.jsx(n,{name:"close",size:"small"})})]})},d={render:()=>e.jsxs(s,{children:[e.jsx(t,{buttonType:"callout",id:"donate-btn",children:"Donate to this library"}),e.jsxs(t,{buttonType:"secondary",id:"top-btn",children:["Back to Top",e.jsx(n,{name:"arrow",iconRotation:"rotate180",size:"small",className:"right",align:"right"})]})]})},c={render:()=>e.jsxs(s,{alignItems:"center",children:[e.jsx(t,{id:"primary-btn",children:"Primary"}),e.jsx(t,{buttonType:"secondary",id:"secondary-btn",children:"Secondary"}),e.jsx(t,{buttonType:"text",id:"text-btn",children:"Text"}),e.jsx(t,{buttonType:"callout",id:"callout-btn",children:"Callout"}),e.jsx(t,{buttonType:"noBrand",id:"nobrand-btn",children:"No Brand"}),e.jsx(t,{buttonType:"pill",id:"pill-btn",children:"Pill"}),e.jsx(t,{buttonType:"link",id:"link-btn",children:"Link (deprecated)"})]})},u={render:()=>e.jsxs(s,{children:[e.jsx(t,{id:"enabled-btn",isDisabled:!1,children:"Enabled"}),e.jsx(t,{id:"disabled-btn",isDisabled:!0,children:"isDisabled"})]})},J=["--","small","medium (default)","large"],K=[["primary",e.jsx(t,{id:"p-small",size:"small",children:"Primary"},"p-small"),e.jsx(t,{id:"p-medium",size:"medium",children:"Primary"},"p-medium"),e.jsx(t,{id:"p-large",size:"large",children:"Primary"},"p-large")],["secondary",e.jsx(t,{buttonType:"secondary",id:"s-small",size:"small",children:"Secondary"},"s-small"),e.jsx(t,{buttonType:"secondary",id:"s-medium",size:"medium",children:"Secondary"},"s-medium"),e.jsx(t,{buttonType:"secondary",id:"s-large",size:"large",children:"Secondary"},"s-large")],["text",e.jsx(t,{buttonType:"text",id:"t-small",size:"small",children:"Text"},"t-small"),e.jsx(t,{buttonType:"text",id:"t-medium",size:"medium",children:"Text"},"t-medium"),e.jsx(t,{buttonType:"text",id:"t-large",size:"large",children:"Text"},"t-large")],["callout",e.jsx(t,{buttonType:"callout",id:"c-small",size:"small",children:"Callout"},"c-small"),e.jsx(t,{buttonType:"callout",id:"c-medium",size:"medium",children:"Callout"},"c-medium"),e.jsx(t,{buttonType:"callout",id:"c-large",size:"large",children:"Callout"},"c-large")],["noBrand",e.jsx(t,{buttonType:"noBrand",id:"nb-small",size:"small",children:"No Brand"},"nb-small"),e.jsx(t,{buttonType:"noBrand",id:"nb-medium",size:"medium",children:"No Brand"},"nb-medium"),e.jsx(t,{buttonType:"noBrand",id:"nb-large",size:"large",children:"No Brand"},"nb-large")],["pill",e.jsx(t,{buttonType:"pill",id:"pill-small",size:"small",children:"Pill"},"pill-small"),e.jsx(t,{buttonType:"pill",id:"pill-medium",size:"medium",children:"Pill"},"pill-medium"),e.jsx(t,{buttonType:"pill",id:"pill-large",size:"large",children:"Pill"},"pill-large")],["link (deprecated)",e.jsx(t,{buttonType:"link",id:"l-small",size:"small",children:"Link"},"l-small"),e.jsx(t,{buttonType:"link",id:"l-medium",size:"medium",children:"Link"},"l-medium"),e.jsx(t,{buttonType:"link",id:"l-large",size:"large",children:"Link"},"l-large")]],p={render:()=>e.jsx(W,{columnHeaders:J,id:"all-sizes",showRowDividers:!0,tableData:K,useRowHeaders:!0,sx:{tbody:{th:{verticalAlign:"middle"},td:{verticalAlign:"middle"}}}})};var b,y,x,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    screenreaderOnlyText: "Screenreader only text",
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
  render: (args: any) => <Button id="button-id" {...args}>
      {args.displayIcon && args.displayIconLeft && <Icon name={args.iconType} align="left" size="small" />}
      {args.buttonText}
      {args.displayIcon && !args.displayIconLeft && <Icon name={args.iconType} align="right" size="small" />}
    </Button>
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Main Story for the Button component. This must contains the `args`\nand `parameters` properties in this object.",...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var B,T,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button buttonType="secondary" id="group-1">
        Button
      </Button>
      <Button id="group-2">Submit</Button>
    </ButtonGroup>
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var f,z,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(z=r.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var S,k,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,v,P;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button buttonType="callout" id="donate-btn">
        Donate to this library
      </Button>
      <Button buttonType="secondary" id="top-btn">
        Back to Top
        <Icon name="arrow" iconRotation="rotate180" size="small" className="right" align="right" />
      </Button>
    </ButtonGroup>
}`,...(P=(v=d.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var N,C,G;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(C=c.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var R,L,A;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ButtonGroup>
      <Button id="enabled-btn" isDisabled={false}>
        Enabled
      </Button>
      <Button id="disabled-btn" isDisabled>
        isDisabled
      </Button>
    </ButtonGroup>
}`,...(A=(L=u.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var O,V,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};const Q=["WithControls","ButtonGroups","TextWithIcon","IconOnly","Patterns","ButtonTypes","DisabledButtons","ButtonSizes"],Y=Object.freeze(Object.defineProperty({__proto__:null,ButtonGroups:i,ButtonSizes:p,ButtonTypes:c,DisabledButtons:u,IconOnly:l,Patterns:d,TextWithIcon:r,WithControls:a,__namedExportsOrder:Q,default:q},Symbol.toStringTag,{value:"Module"}));export{Y as B,u as D,l as I,d as P,r as T,a as W,i as a,c as b,p as c};
