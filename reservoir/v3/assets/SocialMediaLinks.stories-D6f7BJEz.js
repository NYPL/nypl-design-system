import{aR as P,P as X,aS as Y,aT as _,aU as a,j as e,m as g,V as h,a as i,H as n}from"./iframe-CFLVJZOZ.js";const G=[{icon:"fileTypeGenericDoc",labelText:"NYPL Blog",url:"https://nypl.org/blog"},{icon:"socialFacebook",labelText:"Facebook",url:"https://facebook.com/nypl"},{icon:"socialInstagram",labelText:"Instagram",url:"https://instagram.com/nypl"},{icon:"socialPinterest",labelText:"Pinterest",url:"https://pinterest.com/nypl"},{icon:"socialSoundCloud",labelText:"SoundCloud",url:"https://soundcloud.com/nypl"},{icon:"socialTikTok",labelText:"TikTok",url:"https://tiktok.com/@nypl"},{icon:"socialTumblr",labelText:"Tumblr",url:"https://nypl.tumblr.com"},{icon:"socialTwitter",labelText:"Twitter",url:"https://twitter.com/nypl"},{icon:"socialX",labelText:"X, formerly Twitter",url:"https://x.com/nypl"},{icon:"socialYoutube",labelText:"YouTube",url:"https://youtube.com/newyorkpubliclibrary"}],s=[{icon:"socialFacebook",labelText:"Facebook",url:"https://facebook.com/nypl"},{icon:"socialX",labelText:"X, formerly Twitter",url:"https://x.com/nypl"},{icon:"socialInstagram",labelText:"Instagram",url:"https://instagram.com/nypl"}],l=[{icon:"socialPinterest",labelText:"Pinterest",url:"https://pinterest.com/nypl"},{icon:"socialSoundCloud",labelText:"SoundCloud",url:"https://soundcloud.com/nypl"},{icon:"socialTumblr",labelText:"Tumblr",url:"https://nypl.tumblr.com"},{icon:"socialX",labelText:"X, formerly Twitter",url:"https://x.com/nypl"},{icon:"socialYoutube",labelText:"YouTube",url:"https://youtube.com/newyorkpubliclibrary"}],W={title:"Components/Navigation/SocialMediaLinks",component:a,argTypes:{borders:{description:'Optional border  \n\n `"none"` `"circular"` `"straight"`',control:{type:"radio"},options:_,table:{disable:!1,defaultValue:{summary:"none"}}},className:{table:{disable:!1}},color:{control:{type:"radio"},options:Y,table:{disable:!1,defaultValue:{summary:"textDefault"}}},id:{table:{disable:!1}},layout:{control:{type:"radio"},options:X,table:{disable:!1,defaultValue:{summary:"row"}}},linksData:{table:{disable:!1}},showLabels:{description:'Optional prop to display names of platforms along with icons. NOTE: Can not be chosen in combination with a circular border \n\n `"boolean"`',table:{disable:!1,defaultValue:{summary:"false"}}},size:{control:{type:"radio"},options:P,table:{disable:!1,defaultValue:{summary:"small"}}}},parameters:{controls:{hideNoControlsWarning:!0},design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=77103-126004&t=Yx1GyAfBJyhuGIGs-4"},jest:["SocialMediaLinks.test.tsx"]}},t={args:{borders:"none",color:"textDefault",className:void 0,id:void 0,layout:"row",linksData:s,showLabels:!0,size:"small"},render:({borders:m,showLabels:E,color:p,...R})=>{const F=m==="circular"?!1:E;return e.jsxs("div",{children:[e.jsx("div",{style:p==="textInverse"?{backgroundColor:"var(--nypl-colors-dark-ui-bg-page)",padding:"var(--nypl-space-s)"}:{padding:"var(--nypl-space-xs)"},children:e.jsx(a,{showLabels:F,borders:m,color:p,...R})}),p==="textInverse"&&e.jsx(g,{size:"caption",mt:"s",children:"NOTE: background color for textInverse is added for readability in Reservoir. It is not part of the functionality."})]})}},o={render:()=>e.jsx(a,{layout:"row",linksData:G})},r={render:()=>e.jsxs(h,{align:"stretch",spacing:"l",children:[e.jsxs(i,{children:[e.jsx(n,{id:"heading-row-layout",level:"h4",size:"heading6",text:"Row (Default)"}),e.jsx(a,{layout:"row",linksData:l})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-column-layout",level:"h4",size:"heading6",text:"Column"}),e.jsx(a,{layout:"column",linksData:l})]})]})},d={render:()=>e.jsxs(h,{align:"stretch",spacing:"l",children:[e.jsxs(i,{children:[e.jsx(n,{id:"heading-small-size",level:"h4",size:"heading6",text:"Small (Default)"}),e.jsx(a,{size:"small",linksData:s})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-medium-size",level:"h4",size:"heading6",text:"Medium"}),e.jsx(a,{size:"medium",linksData:s})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-large-size",level:"h4",size:"heading6",text:"Large"}),e.jsx(a,{size:"large",linksData:s})]})]})},c={render:()=>e.jsxs(h,{align:"stretch",spacing:"l",children:[e.jsxs(i,{children:[e.jsx(n,{id:"heading-textdefault-color",level:"h4",size:"heading6",text:"Site Default"}),e.jsx(a,{color:"textDefault",linksData:l})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-links-color",level:"h4",size:"heading6",text:"Link"}),e.jsx(a,{color:"link",linksData:l})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-textinverse-color",level:"h4",size:"heading6",text:"textInverse"}),e.jsx(i,{bgColor:"dark.ui.bg.page",p:"s",children:e.jsx(a,{color:"textInverse",linksData:l})}),e.jsx(g,{size:"caption",mt:"s",children:"NOTE: background color for textInverse is added for readability in Reservoir. It is not part of the functionality."})]})]})},x={render:()=>e.jsxs(h,{align:"stretch",spacing:"l",children:[e.jsxs(i,{children:[e.jsx(n,{id:"heading-border-none",level:"h4",size:"heading6",text:"None (Default)"}),e.jsx(a,{borders:"none",linksData:s})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-border-straight",level:"h4",size:"heading6",text:"Straight"}),e.jsx(a,{borders:"straight",linksData:s})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-border-circular",level:"h4",size:"heading6",text:"Circular"}),e.jsx(a,{borders:"circular",linksData:s}),e.jsx(g,{size:"caption",mt:"s",children:"NOTE: labels are disallowed with circular borders."})]})]})},u={render:()=>e.jsxs(h,{align:"stretch",spacing:"l",children:[e.jsxs(i,{children:[e.jsx(n,{id:"heading-nolabels",level:"h4",size:"heading6",text:"False (Default)"}),e.jsx(a,{showLabels:!1,linksData:l})]}),e.jsxs(i,{children:[e.jsx(n,{id:"heading-labels",level:"h4",size:"heading6",text:"True"}),e.jsx(a,{showLabels:!0,linksData:l})]})]})};var b,k,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    borders: "none",
    color: "textDefault",
    className: undefined,
    id: undefined,
    layout: "row",
    linksData: exampleLinkData,
    showLabels: true,
    size: "small"
  },
  render: ({
    borders,
    showLabels,
    color,
    ...rest
  }) => {
    const finalShowLabels = borders === "circular" ? false : showLabels;
    return <div>
        <div style={color === "textInverse" ? {
        backgroundColor: "var(--nypl-colors-dark-ui-bg-page)",
        padding: "var(--nypl-space-s)"
      } : {
        padding: "var(--nypl-space-xs)"
      }}>
          <SocialMediaLinks
        // Hack to satisfy storybook control options AND component prop type
        showLabels={finalShowLabels as false} borders={borders} color={color} {...rest} />
        </div>
        {color === "textInverse" && <Text size="caption" mt="s">
            NOTE: background color for textInverse is added for readability in
            Reservoir. It is not part of the functionality.
          </Text>}
      </div>;
  }
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,D,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SocialMediaLinks layout="row" linksData={exampleAllLinkData} />
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var L,v,S;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-row-layout" level="h4" size="heading6" text="Row (Default)" />
        <SocialMediaLinks layout="row" linksData={exampleTwoLinkData} />
      </Box>
      <Box>
        <Heading id="heading-column-layout" level="h4" size="heading6" text="Column" />
        <SocialMediaLinks layout="column" linksData={exampleTwoLinkData} />
      </Box>
    </VStack>
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,z,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-small-size" level="h4" size="heading6" text="Small (Default)" />
        <SocialMediaLinks size="small" linksData={exampleLinkData} />
      </Box>
      <Box>
        <Heading id="heading-medium-size" level="h4" size="heading6" text="Medium" />
        <SocialMediaLinks size="medium" linksData={exampleLinkData} />
      </Box>
      <Box>
        <Heading id="heading-large-size" level="h4" size="heading6" text="Large" />
        <SocialMediaLinks size="large" linksData={exampleLinkData} />
      </Box>
    </VStack>
}`,...(w=(z=d.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var B,V,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-textdefault-color" level="h4" size="heading6" text="Site Default" />
        <SocialMediaLinks color="textDefault" linksData={exampleTwoLinkData} />
      </Box>
      <Box>
        <Heading id="heading-links-color" level="h4" size="heading6" text="Link" />
        <SocialMediaLinks color="link" linksData={exampleTwoLinkData} />
      </Box>
      <Box>
        <Heading id="heading-textinverse-color" level="h4" size="heading6" text="textInverse" />
        <Box bgColor="dark.ui.bg.page" p="s">
          <SocialMediaLinks color="textInverse" linksData={exampleTwoLinkData} />
        </Box>
        <Text size="caption" mt="s">
          NOTE: background color for textInverse is added for readability in
          Reservoir. It is not part of the functionality.
        </Text>
      </Box>
    </VStack>
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var I,C,H;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-border-none" level="h4" size="heading6" text="None (Default)" />
        <SocialMediaLinks borders="none" linksData={exampleLinkData} />
      </Box>
      <Box>
        <Heading id="heading-border-straight" level="h4" size="heading6" text="Straight" />
        <SocialMediaLinks borders="straight" linksData={exampleLinkData} />
      </Box>
      <Box>
        <Heading id="heading-border-circular" level="h4" size="heading6" text="Circular" />
        <SocialMediaLinks borders="circular" linksData={exampleLinkData} />
        <Text size={"caption"} mt="s">
          NOTE: labels are disallowed with circular borders.
        </Text>
      </Box>
    </VStack>
}`,...(H=(C=x.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var N,O,A;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <VStack align="stretch" spacing="l">
      <Box>
        <Heading id="heading-nolabels" level="h4" size="heading6" text="False (Default)" />
        <SocialMediaLinks showLabels={false} linksData={exampleTwoLinkData} />
      </Box>
      <Box>
        <Heading id="heading-labels" level="h4" size="heading6" text="True" />
        <SocialMediaLinks showLabels={true} linksData={exampleTwoLinkData} />
      </Box>
    </VStack>
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const J=["WithControls","AllOptionsVariations","LayoutVariations","SizeVariations","ColorVariations","BorderVariations","LabelVariations"],U=Object.freeze(Object.defineProperty({__proto__:null,AllOptionsVariations:o,BorderVariations:x,ColorVariations:c,LabelVariations:u,LayoutVariations:r,SizeVariations:d,WithControls:t,__namedExportsOrder:J,default:W},Symbol.toStringTag,{value:"Module"}));export{o as A,x as B,c as C,r as L,U as S,t as W,d as a,u as b};
