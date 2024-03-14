import{j as e,a as i}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as X}from"./index-6148c31a.js";import{H as n}from"./Heading-7eebc756.js";import{I as t,i as Y,a as Z,b as ee}from"./Image-ed70f474.js";import{S as te}from"./SimpleGrid-bd04b221.js";import{d as ae}from"./types-ee6958f5.js";import{B as s,V as x}from"./chakra-ui-layout.esm-e0dbb94e.js";const ie={title:"Components/Media & Icons/Image",component:t,decorators:[X],argTypes:{additionalFigureStyles:{control:!1},additionalImageStyles:{control:!1},additionalWrapperStyles:{control:!1},alt:{control:!1,description:"Alternate text description of the image. Needed for accessibility purposes."},aspectRatio:{control:{type:"select"},options:Y,table:{defaultValue:{summary:"original"}}},className:{control:!1,description:"Additional class name for the component to use."},component:{control:!1},imageType:{control:{type:"radio"},options:Z,table:{defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:ee,table:{defaultValue:{summary:"default"}}},sizeBasedOn:{control:{type:"radio"},options:ae,table:{defaultValue:{summary:"width"}}},src:{description:"The src attribute is required, and contains the path to the image you want to embed."}}},B=(a={})=>{const h={textAlign:"center"},{size:u="large",displayValue:U,sizeBasedOn:z="width",id:f}=a;return z==="width"&&u==="default"?h.width="100%":z==="height"&&u==="default"&&(h.width="100%",h.height="100%"),i(s,{style:h,children:[e(n,{id:f,level:"h4",size:"heading6",text:u}),e(t,{alt:"Alt text",caption:U,size:u,sizeBasedOn:z,src:"//placekitten.com/400/300"})]},f)},P=a=>e(x,{spacing:"l",children:a}),ne=[{size:"xxxsmall",display:"32px",id:"ExtraExtraExtraSmall"},{size:"xxsmall",display:"64px",id:"ExtraExtraSmall"},{size:"xsmall",display:"96px",id:"ExtraSmall"},{size:"small",display:"165px",id:"Small"},{size:"medium",display:"225px",id:"Medium"},{size:"large",display:"360px",id:"Large"},{size:"default",display:"100%",id:"Default"}],K=[],Q=[];for(const a of ne)K.push(B({size:a.size,displayValue:a.display,id:`${a.id}-width`})),Q.push(B({size:a.size,displayValue:a.display,id:`${a.id}-height`,sizeBasedOn:"height"}));const r={args:{additionalFigureStyles:void 0,additionalImageStyles:void 0,additionalWrapperStyles:void 0,alt:"Alt text",aspectRatio:"twoByOne",caption:"Image caption",className:void 0,component:void 0,credit:"Image credit",imageType:"default",size:"medium",sizeBasedOn:"width",src:"//placekitten.com/400/300"},render:a=>e(t,{...a}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379"},jest:["Image.test.tsx"]}},o={args:{alt:"Alt text",aspectRatio:"threeByTwo",caption:"Image caption",credit:"Image credit",imageType:"default",size:"medium",src:"//placekitten.com/400/300"},argTypes:{aspectRatio:{table:{disable:!0}},caption:{table:{disable:!0}},credit:{table:{disable:!0}},imageType:{table:{disable:!0}},size:{table:{disable:!0}},src:{table:{disable:!0}}},name:"Credit and Caption",render:a=>e(t,{...a})},c={render:()=>P(K)},d={render:()=>P(Q)},l={marginLeft:"auto",marginRight:"auto",maxWidth:"360px",textalign:"center",width:"100%"},m={render:()=>i(x,{spacing:"l",children:[i(s,{style:l,children:[e(n,{id:"fourbythree",level:"h4",size:"heading6",text:"fourByThree"}),e(t,{alt:"Alt text",aspectRatio:"fourByThree",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"onebytwo",level:"h4",size:"heading6",text:"oneByTwo"}),e(t,{alt:"Alt text",aspectRatio:"oneByTwo",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"original",level:"h4",size:"heading6",text:"original"}),e(t,{alt:"Alt text",aspectRatio:"original",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"sixteenbynine",level:"h4",size:"heading6",text:"sixteenByNine"}),e(t,{alt:"Alt text",aspectRatio:"sixteenByNine",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"square",level:"h4",size:"heading6",text:"square"}),e(t,{alt:"Alt text",aspectRatio:"square",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"threebyfour",level:"h4",size:"heading6",text:"threeByFour"}),e(t,{alt:"Alt text",aspectRatio:"threeByFour",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"threebytwo",level:"h4",size:"heading6",text:"threeByTwo"}),e(t,{alt:"Alt text",aspectRatio:"threeByTwo",src:"//placekitten.com/400/300"})]}),i(s,{style:l,children:[e(n,{id:"twobyone",level:"h4",size:"heading6",text:"twoByOne"}),e(t,{alt:"Alt text",aspectRatio:"twoByOne",src:"//placekitten.com/400/300"})]})]})},p={render:()=>i(x,{spacing:"l",children:[i(s,{style:l,children:[e(n,{id:"default",level:"h4",size:"heading6",text:"default"}),e(t,{alt:"Alt text",aspectRatio:"square",imageType:"default",src:"//placekitten.com/400/400"})]}),i(s,{style:l,children:[e(n,{id:"circle",level:"h4",size:"heading6",text:"circle"}),e(t,{alt:"Alt text",aspectRatio:"square",imageType:"circle",src:"//placekitten.com/400/400"})]})]})},g={render:()=>i(x,{align:"start",spacing:"l",children:[i(s,{children:[e(n,{id:"withOnLoad",level:"h4",size:"heading6",text:"Image with `onLoad` function"}),e(t,{alt:"Alt text",src:"//placekitten.com/400/400",onLoad:({target:a})=>{console.log("Image 1 loaded and `onLoad` called."),console.log("Image 1 dimensions:",a.offsetHeight,a.offsetWidth)}})]}),i(s,{children:[e(n,{id:"withOnLoad",level:"h4",size:"heading6",text:"Image with `onError` function"}),e(t,{alt:"Broken image with bad url",src:"//placekitten.com/400/400",onError:()=>console.warn("Image 2 error! Called through `onError`.")})]})]})},y={render:()=>i(te,{columns:1,children:[e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/540/420"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/500/400"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/460/460"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/420/490"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/200/120"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/640/340"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/460/480"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/100/200"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/400/400"}),e(t,{alt:"Alt text",isLazy:!0,src:"//placekitten.com/250/360"})]})};var k,A,S,I,b;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    additionalFigureStyles: undefined,
    additionalImageStyles: undefined,
    additionalWrapperStyles: undefined,
    alt: "Alt text",
    aspectRatio: "twoByOne",
    caption: "Image caption",
    className: undefined,
    component: undefined,
    credit: "Image credit",
    imageType: "default",
    size: "medium",
    sizeBasedOn: "width",
    src: "//placekitten.com/400/300"
  },
  render: args => <Image {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379"
    },
    jest: ["Image.test.tsx"]
  }
}`,...(S=(A=r.parameters)==null?void 0:A.docs)==null?void 0:S.source},description:{story:"Main Story for the Image component. This must contains the `args`\nand `parameters` properties in this object.",...(b=(I=r.parameters)==null?void 0:I.docs)==null?void 0:b.description}}};var w,L,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    alt: "Alt text",
    aspectRatio: "threeByTwo",
    caption: "Image caption",
    credit: "Image credit",
    imageType: "default",
    size: "medium",
    src: "//placekitten.com/400/300"
  },
  argTypes: {
    aspectRatio: {
      table: {
        disable: true
      }
    },
    caption: {
      table: {
        disable: true
      }
    },
    credit: {
      table: {
        disable: true
      }
    },
    imageType: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    }
  },
  name: "Credit and Caption",
  render: args => <Image {...args} />
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var R,v,H;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => allVStack(sizes)
}`,...(H=(v=c.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var O,V,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => allVStack(sizesBasedOnHeight)
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var q,E,C;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <VStack spacing="l">
      <Box style={imageBlockStyles}>
        <Heading id="fourbythree" level="h4" size="heading6" text="fourByThree" />
        <Image alt="Alt text" aspectRatio="fourByThree" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="onebytwo" level="h4" size="heading6" text="oneByTwo" />
        <Image alt="Alt text" aspectRatio="oneByTwo" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="original" level="h4" size="heading6" text="original" />
        <Image alt="Alt text" aspectRatio="original" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="sixteenbynine" level="h4" size="heading6" text="sixteenByNine" />
        <Image alt="Alt text" aspectRatio="sixteenByNine" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="square" level="h4" size="heading6" text="square" />
        <Image alt="Alt text" aspectRatio="square" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebyfour" level="h4" size="heading6" text="threeByFour" />
        <Image alt="Alt text" aspectRatio="threeByFour" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebytwo" level="h4" size="heading6" text="threeByTwo" />
        <Image alt="Alt text" aspectRatio="threeByTwo" src="//placekitten.com/400/300" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="twobyone" level="h4" size="heading6" text="twoByOne" />
        <Image alt="Alt text" aspectRatio="twoByOne" src="//placekitten.com/400/300" />
      </Box>
    </VStack>
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var M,N,W;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <VStack spacing="l">
      <Box style={imageBlockStyles}>
        <Heading id="default" level="h4" size="heading6" text="default" />
        <Image alt="Alt text" aspectRatio="square" imageType="default" src="//placekitten.com/400/400" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="circle" level="h4" size="heading6" text="circle" />
        <Image alt="Alt text" aspectRatio="square" imageType="circle" src="//placekitten.com/400/400" />
      </Box>
    </VStack>
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var j,_,G;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <VStack align="start" spacing="l">
      <Box>
        <Heading id="withOnLoad" level="h4" size="heading6" text="Image with \`onLoad\` function" />
        <Image alt="Alt text" src="//placekitten.com/400/400" onLoad={({
        target
      }: any) => {
        console.log("Image 1 loaded and \`onLoad\` called.");
        console.log("Image 1 dimensions:", target.offsetHeight, target.offsetWidth);
      }} />
      </Box>
      <Box>
        <Heading id="withOnLoad" level="h4" size="heading6" text="Image with \`onError\` function" />
        <Image alt="Broken image with bad url" src="//placekitten.com/400/400" onError={() => console.warn("Image 2 error! Called through \`onError\`.")} />
      </Box>
    </VStack>
}`,...(G=(_=g.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var D,J,$;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Image alt="Alt text" isLazy src="//placekitten.com/540/420" />
      <Image alt="Alt text" isLazy src="//placekitten.com/500/400" />
      <Image alt="Alt text" isLazy src="//placekitten.com/460/460" />
      <Image alt="Alt text" isLazy src="//placekitten.com/420/490" />
      <Image alt="Alt text" isLazy src="//placekitten.com/200/120" />
      <Image alt="Alt text" isLazy src="//placekitten.com/640/340" />
      <Image alt="Alt text" isLazy src="//placekitten.com/460/480" />
      <Image alt="Alt text" isLazy src="//placekitten.com/100/200" />
      <Image alt="Alt text" isLazy src="//placekitten.com/400/400" />
      <Image alt="Alt text" isLazy src="//placekitten.com/250/360" />
    </SimpleGrid>
}`,...($=(J=y.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};const se=["WithControls","FigureAndFigcaption","Sizes","SizesBasedOnHeight","AspectRatios","Types","HTMLAttributes","LazyLoading"],ge=Object.freeze(Object.defineProperty({__proto__:null,AspectRatios:m,FigureAndFigcaption:o,HTMLAttributes:g,LazyLoading:y,Sizes:c,SizesBasedOnHeight:d,Types:p,WithControls:r,__namedExportsOrder:se,default:ie},Symbol.toStringTag,{value:"Module"}));export{m as A,o as F,g as H,ge as I,y as L,c as S,p as T,r as W,d as a};
//# sourceMappingURL=Image.stories-73ec852e.js.map
