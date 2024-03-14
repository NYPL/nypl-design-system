import{j as e,a as t}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w}from"./index-6148c31a.js";import{L as n,l as C}from"./Link-24c1437a.js";import{I as l}from"./Icon-4eeffe51.js";import{V as x}from"./chakra-ui-layout.esm-e0dbb94e.js";const A={title:"Components/Navigation/Link",component:n,decorators:[w],argTypes:{children:{table:{disable:!0}},isUnderlined:{table:{defaultValue:{summary:"true"}}},key:{table:{disable:!0}},ref:{table:{disable:!0}},target:{control:!1},type:{control:{type:"select"},options:C,table:{defaultValue:{summary:"default"}}}}},i={args:{className:"custom-class",href:"https://nypl.org",id:"nypl-link",isUnderlined:!0,screenreaderOnlyText:"Screenreader only text",target:void 0,type:"action"},render:B=>e(n,{...B,children:"Link"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387"},jest:["Link.test.tsx"]}},a={render:()=>e(n,{type:"external",href:"https://nypl.org",children:"NYPL Website"})},r={render:()=>t(x,{spacing:"l",align:"flex-start",children:[e(n,{type:"default",href:"#passed-in-link",children:"Default"}),e(n,{type:"action",href:"#passed-in-link",children:"Action"}),e(n,{type:"external",href:"#passed-in-link",children:"External"}),e(n,{type:"standalone",href:"#passed-in-link",children:"Standalone"}),e(n,{type:"backwards",href:"#passed-in-link",children:"Backwards"}),e(n,{type:"forwards",href:"#passed-in-link",children:"Forwards"}),e(n,{type:"buttonPrimary",href:"#passed-in-link",children:"Button Primary"}),e(n,{type:"buttonSecondary",href:"#passed-in-link",children:"Button Secondary"}),e(n,{type:"buttonPill",href:"#passed-in-link",children:"Button Pill"}),e(n,{type:"buttonCallout",href:"#passed-in-link",children:"Button Callout"}),e(n,{type:"buttonNoBrand",href:"#passed-in-link",children:"Button No Brand"}),e(n,{type:"buttonDisabled",href:"#passed-in-link",children:"Button Disabled"}),e(n,{type:"button",href:"#passed-in-link",width:"auto",children:"Button (deprecated)"})]})},s={render:()=>t(x,{spacing:"xs",align:"flex-start",children:[t(n,{type:"action",href:"#passed-in-link",children:[e(l,{name:"headset",align:"left",size:"small"}),"Headset Link"]}),t(n,{type:"action",href:"#passed-in-link",children:[e(l,{name:"clock",align:"left",size:"small"}),"Clock Link"]}),t(n,{type:"action",href:"#passed-in-link",children:[e(l,{name:"check",align:"left",size:"small"}),"Check Link"]}),t(n,{type:"action",href:"#passed-in-link-right",children:["Check Link Right",e(l,{name:"check",align:"right",size:"small"})]})]})};var o,d,c,p,k;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    className: "custom-class",
    href: "https://nypl.org",
    id: "nypl-link",
    isUnderlined: true,
    screenreaderOnlyText: "Screenreader only text",
    target: undefined,
    type: "action"
  },
  render: args => <Link {...args}>Link</Link>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36854%3A24387"
    },
    jest: ["Link.test.tsx"]
  }
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Main Story for the Link component. This must contains the `args`\nand `parameters` properties in this object.",...(k=(p=i.parameters)==null?void 0:p.docs)==null?void 0:k.description}}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Link type="external" href="https://nypl.org">
      NYPL Website
    </Link>
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var u,m,L;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <VStack spacing="l" align="flex-start">
      <Link type="default" href="#passed-in-link">
        Default
      </Link>
      <Link type="action" href="#passed-in-link">
        Action
      </Link>
      <Link type="external" href="#passed-in-link">
        External
      </Link>
      <Link type="standalone" href="#passed-in-link">
        Standalone
      </Link>
      <Link type="backwards" href="#passed-in-link">
        Backwards
      </Link>
      <Link type="forwards" href="#passed-in-link">
        Forwards
      </Link>
      <Link type="buttonPrimary" href="#passed-in-link">
        Button Primary
      </Link>
      <Link type="buttonSecondary" href="#passed-in-link">
        Button Secondary
      </Link>
      <Link type="buttonPill" href="#passed-in-link">
        Button Pill
      </Link>
      <Link type="buttonCallout" href="#passed-in-link">
        Button Callout
      </Link>
      <Link type="buttonNoBrand" href="#passed-in-link">
        Button No Brand
      </Link>
      <Link type="buttonDisabled" href="#passed-in-link">
        Button Disabled
      </Link>
      <Link type="button" href="#passed-in-link" width="auto">
        Button (deprecated)
      </Link>
    </VStack>
}`,...(L=(m=r.parameters)==null?void 0:m.docs)==null?void 0:L.source}}};var g,b,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <VStack spacing="xs" align="flex-start">
      <Link type="action" href="#passed-in-link">
        <Icon name="headset" align="left" size="small" />
        Headset Link
      </Link>
      <Link type="action" href="#passed-in-link">
        <Icon name="clock" align="left" size="small" />
        Clock Link
      </Link>
      <Link type="action" href="#passed-in-link">
        <Icon name="check" align="left" size="small" />
        Check Link
      </Link>
      <Link type="action" href="#passed-in-link-right">
        Check Link Right
        <Icon name="check" align="right" size="small" />
      </Link>
    </VStack>
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const N=["WithControls","Accessibility","AllLinkTypes","LinksWithIcons"],V=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:a,AllLinkTypes:r,LinksWithIcons:s,WithControls:i,__namedExportsOrder:N,default:A},Symbol.toStringTag,{value:"Module"}));export{a as A,V as L,i as W,r as a,s as b};
//# sourceMappingURL=Link.stories-cdf6ba55.js.map
