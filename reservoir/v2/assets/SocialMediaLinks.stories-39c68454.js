import{a,j as e}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{S as i,b as j,c as E,s as _}from"./SocialMediaLinks-b6af0be3.js";import{w as R}from"./index-6148c31a.js";import{l as W}from"./types-ee6958f5.js";import{H as r}from"./Heading-7eebc756.js";import{T as g}from"./Text-d88b2f7a.js";import{b as n}from"./index-445595fc.js";import{B as o,V as p}from"./chakra-ui-layout.esm-e0dbb94e.js";const F={title:"Components/Navigation/SocialMediaLinks",component:i,decorators:[R],argTypes:{borders:{table:{disable:!0}},className:{table:{disable:!0}},color:{table:{disable:!0}},id:{table:{disable:!0}},layout:{table:{disable:!0}},linksData:{table:{disable:!0}},showLabels:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{controls:{hideNoControlsWarning:!0},design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=77103-126004&t=Yx1GyAfBJyhuGIGs-4"},jest:["SocialMediaLinks.test.tsx"]}},l={args:{borders:"none",color:"textDefault",className:void 0,id:void 0,layout:"row",linksData:[{type:"facebook"},{type:"twitter",url:"https://twitter.com/NYPLBookmobile",labelText:"Alt Twitter"},{type:"instagram"}],showLabels:!0,size:"small"},argTypes:{borders:{control:{type:"radio"},options:j,table:{disable:!1,defaultValue:{summary:"none"}}},className:{control:!0,table:{disable:!1}},color:{description:"Any of three optional values that will change the color of the svg and label text (if any).",control:{type:"radio"},options:E,table:{disable:!1,defaultValue:{summary:"textDefault"}}},id:{control:!0,table:{disable:!1}},layout:{control:{type:"radio"},options:W,table:{disable:!1,defaultValue:{summary:"row"}}},linksData:{table:{disable:!1}},showLabels:{table:{disable:!1,defaultValue:{summary:!1}}},size:{control:{type:"radio"},options:_,table:{disable:!1,defaultValue:{summary:"small"}}}},render:b=>a("div",{children:[e("div",{style:b.color==="textInverse"?{backgroundColor:"var(--nypl-colors-dark-ui-bg-page)",display:"inline-block",padding:"var(--nypl-space-s)"}:{display:"inline-block",padding:"var(--nypl-space-xs)"},children:e(i,{...b})}),e(g,{size:"caption",mt:"s",children:"NOTE: background color for textInverse is added for readability in Reservoir. It is not part of the functionality."})]})},s={render:()=>a(p,{align:"stretch",spacing:"l",children:[a(o,{children:[e(r,{id:"heading-row-layout",level:"h4",size:"heading6",text:"Row (Default)"}),e(i,{layout:"row"}),e(n,{code:'<SocialMediaLinks layout="row" />'})]}),a(o,{children:[e(r,{id:"heading-column-layout",level:"h4",size:"heading6",text:"Column"}),e(i,{layout:"column"}),e(n,{code:'<SocialMediaLinks layout="column" />'})]})]})},t={render:()=>a(p,{align:"stretch",spacing:"l",children:[a(o,{children:[e(r,{id:"heading-small-size",level:"h4",size:"heading6",text:"Small (Default)"}),e(i,{size:"small"}),e(n,{code:'<SocialMediaLinks size="small" />'})]}),a(o,{children:[e(r,{id:"heading-medium-size",level:"h4",size:"heading6",text:"Medium"}),e(i,{size:"medium"}),e(n,{code:'<SocialMediaLinks size="medium" />'})]}),a(o,{children:[e(r,{id:"heading-large-size",level:"h4",size:"heading6",text:"Large"}),e(i,{size:"large"}),e(n,{code:'<SocialMediaLinks size="large" />'})]})]})},G=()=>a(p,{align:"stretch",spacing:"l",children:[a(o,{children:[e(r,{id:"heading-textdefault-color",level:"h4",size:"heading6",text:"Site Default"}),e(i,{color:"textDefault"}),e(n,{code:'<SocialMediaLinks color="textDefault" />'})]}),a(o,{children:[e(r,{id:"heading-links-color",level:"h4",size:"heading6",text:"Link"}),e(i,{color:"link"}),e(n,{code:'<SocialMediaLinks color="link" />'})]}),a(o,{children:[e(r,{id:"heading-textinverse-color",level:"h4",size:"heading6",text:"textInverse"}),e(o,{bgColor:"dark.ui.bg.page",p:"s",children:e(i,{color:"textInverse"})}),e(g,{size:"caption",mt:"s",children:"NOTE: background color for textInverse is added for readability in Reservoir. It is not part of the functionality."}),e(n,{code:'<SocialMediaLinks color="textInverse" />'})]})]}),d={render:()=>e(G,{})},c={render:()=>a(p,{align:"stretch",spacing:"l",children:[a(o,{children:[e(r,{id:"heading-border-none",level:"h4",size:"heading6",text:"None (Default)"}),e(i,{borders:"none"}),e(n,{code:'<SocialMediaLinks borders="none" />'})]}),a(o,{children:[e(r,{id:"heading-border-straight",level:"h4",size:"heading6",text:"Straight"}),e(i,{borders:"straight"}),e(n,{code:'<SocialMediaLinks borders="straight" />'})]}),a(o,{children:[e(r,{id:"heading-border-circular",level:"h4",size:"heading6",text:"Circular"}),e(i,{borders:"circular"}),e(g,{size:"caption",mt:"s",children:"NOTE: labels are disallowed with circular borders."}),e(n,{code:'<SocialMediaLinks borders="circular" />'})]})]})},u={render:()=>a(p,{align:"stretch",spacing:"l",children:[a(o,{children:[e(r,{id:"heading-nolabels",level:"h4",size:"heading6",text:"False (Default)"}),e(i,{showLabels:!1}),e(n,{code:"<SocialMediaLinks showLabels={false} />"})]}),a(o,{children:[e(r,{id:"heading-labels",level:"h4",size:"heading6",text:"True"}),e(i,{showLabels:!0}),e(n,{code:"<SocialMediaLinks showLabels={true} />"})]})]})},h={render:()=>a(o,{children:[a("p",{children:["If the ",e("code",{children:"linksData"}),' prop is not supplied or otherwise "falsy," the component returns all available social media types and their default values.']}),e(i,{}),e(n,{code:"<SocialMediaLinks />"})]})};var m,y,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    borders: "none",
    color: "textDefault",
    className: undefined,
    id: undefined,
    layout: "row",
    linksData: [{
      type: "facebook"
    }, {
      type: "twitter",
      url: "https://twitter.com/NYPLBookmobile",
      labelText: "Alt Twitter"
    }, {
      type: "instagram"
    }],
    showLabels: true,
    size: "small"
  },
  argTypes: {
    borders: {
      control: {
        type: "radio"
      },
      options: borderTypeArray,
      table: {
        disable: false,
        defaultValue: {
          summary: "none"
        }
      }
    },
    className: {
      control: true,
      table: {
        disable: false
      }
    },
    color: {
      description: "Any of three optional values that will change the color of the svg and label text (if any).",
      control: {
        type: "radio"
      },
      // @todo the table will not display these options.
      options: colorTypeArray,
      table: {
        disable: false,
        defaultValue: {
          summary: "textDefault"
        }
      }
    },
    id: {
      control: true,
      table: {
        disable: false
      }
    },
    layout: {
      control: {
        type: "radio"
      },
      options: layoutTypesArray,
      table: {
        disable: false,
        defaultValue: {
          summary: "row"
        }
      }
    },
    linksData: {
      table: {
        disable: false
      }
    },
    showLabels: {
      table: {
        disable: false,
        defaultValue: {
          summary: false
        }
      }
    },
    size: {
      control: {
        type: "radio"
      },
      options: sizeTypeArray,
      table: {
        disable: false,
        defaultValue: {
          summary: "small"
        }
      }
    }
  },
  render: args => <div>
      <div style={args.color === "textInverse" ? {
      backgroundColor: "var(--nypl-colors-dark-ui-bg-page)",
      display: "inline-block",
      padding: "var(--nypl-space-s)"
    } : {
      display: "inline-block",
      padding: "var(--nypl-space-xs)"
    }}>
        <SocialMediaLinks {...args} />
      </div>
      <Text size="caption" mt="s">
        NOTE: background color for textInverse is added for readability in
        Reservoir. It is not part of the functionality.
      </Text>
    </div>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,S,x;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-row-layout" level="h4" size="heading6" text="Row (Default)" />
        <SocialMediaLinks layout="row" />
        <Source code={'<SocialMediaLinks layout="row" />'} />
      </Box>
      <Box>
        <Heading id="heading-column-layout" level="h4" size="heading6" text="Column" />
        <SocialMediaLinks layout="column" />
        <Source code={'<SocialMediaLinks layout="column" />'} />
      </Box>
    </VStack>
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var L,v,z;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-small-size" level="h4" size="heading6" text="Small (Default)" />
        <SocialMediaLinks size="small" />
        <Source code={'<SocialMediaLinks size="small" />'} />
      </Box>
      <Box>
        <Heading id="heading-medium-size" level="h4" size="heading6" text="Medium" />
        <SocialMediaLinks size="medium" />
        <Source code={'<SocialMediaLinks size="medium" />'} />
      </Box>
      <Box>
        <Heading id="heading-large-size" level="h4" size="heading6" text="Large" />
        <SocialMediaLinks size="large" />
        <Source code={'<SocialMediaLinks size="large" />'} />
      </Box>
    </VStack>
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var w,M,V;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ColorVariationsStory />
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var B,T,D;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-border-none" level="h4" size="heading6" text="None (Default)" />
        <SocialMediaLinks borders="none" />
        <Source code={'<SocialMediaLinks borders="none" />'} />
      </Box>
      <Box>
        <Heading id="heading-border-straight" level="h4" size="heading6" text="Straight" />
        <SocialMediaLinks borders="straight" />
        <Source code={'<SocialMediaLinks borders="straight" />'} />
      </Box>
      <Box>
        <Heading id="heading-border-circular" level="h4" size="heading6" text="Circular" />
        <SocialMediaLinks borders="circular" />
        <Text size={"caption"} mt="s">
          NOTE: labels are disallowed with circular borders.
        </Text>
        <Source code={'<SocialMediaLinks borders="circular" />'} />
      </Box>
    </VStack>
}`,...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var C,I,N;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-nolabels" level="h4" size="heading6" text="False (Default)" />
        <SocialMediaLinks showLabels={false} />
        <Source code="<SocialMediaLinks showLabels={false} />" />
      </Box>
      <Box>
        <Heading id="heading-labels" level="h4" size="heading6" text="True" />
        <SocialMediaLinks showLabels={true} />
        <Source code="<SocialMediaLinks showLabels={true} />" />
      </Box>
    </VStack>
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var A,H,O;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Box>
      {/* @todo This should work, with import Markdown , but it throws an error. It doesn't like something about the styling.
       *  <Markdown>If the \`linksData\` prop is not supplied or otherwise "falsy,"
        the component returns all available social media types and their default
        values.</Markdown>
       */}
      <p>
        If the <code>linksData</code> prop is not supplied or otherwise "falsy,"
        the component returns all available social media types and their default
        values.
      </p>
      <SocialMediaLinks />
      <Source code="<SocialMediaLinks />" />
    </Box>
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const P=["WithControls","LayoutVariations","SizeVariations","ColorVariations","BorderVariations","LabelVariations","noLinksData"],$=Object.freeze(Object.defineProperty({__proto__:null,BorderVariations:c,ColorVariations:d,LabelVariations:u,LayoutVariations:s,SizeVariations:t,WithControls:l,__namedExportsOrder:P,default:F,noLinksData:h},Symbol.toStringTag,{value:"Module"}));export{c as B,d as C,s as L,$ as S,l as W,t as a,u as b,h as n};
//# sourceMappingURL=SocialMediaLinks.stories-39c68454.js.map
