import{j as e,a}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as O}from"./index-6148c31a.js";import{H as i}from"./Heading-2ec2ea62.js";import{I as t,i as W,a as j,b as V}from"./Image-3405777f.js";import{S as x}from"./SimpleGrid-e54e0b68.js";import{T as u}from"./Text-eabcdc0a.js";import{B as l,V as _}from"./chakra-ui-layout.esm-b2fa9d31.js";const D={title:"Components/Media & Icons/Image",component:t,decorators:[O],argTypes:{additionalFigureStyles:{control:!1},additionalImageStyles:{control:!1},additionalWrapperStyles:{control:!1},alt:{control:!1,description:"Alternate text description of the image. Needed for accessibility purposes."},aspectRatio:{control:{type:"select"},options:W,table:{defaultValue:{summary:"original"}}},className:{control:!1,description:"Additional class name for the component to use."},component:{control:!1},imageType:{control:{type:"radio"},options:j,table:{defaultValue:{summary:"default"}}},size:{control:{type:"select"},options:V,table:{defaultValue:{summary:"default"}}},src:{description:"The src attribute is required, and contains the path to the image you want to embed."}}},r={args:{additionalFigureStyles:void 0,additionalImageStyles:void 0,additionalWrapperStyles:void 0,alt:"Alt text",aspectRatio:"twoByOne",caption:"Image caption",className:void 0,component:void 0,credit:"Image credit",imageType:"default",size:"medium",src:"https://placeimg.com/400/300/animals"},render:n=>e(t,{...n}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379"},jest:["Image.test.tsx"]}},o={args:{alt:"Alt text",aspectRatio:"threeByTwo",caption:"Image caption",credit:"Image credit",imageType:"default",size:"medium",src:"https://placeimg.com/400/300/animals"},argTypes:{aspectRatio:{table:{disable:!0}},caption:{table:{disable:!0}},credit:{table:{disable:!0}},imageType:{table:{disable:!0}},size:{table:{disable:!0}},src:{table:{disable:!0}}},name:"Credit and Caption",render:n=>e(t,{...n})},c={render:()=>a(x,{columns:1,children:[a(l,{textAlign:"center",children:[e(i,{id:"ExtraExtraSmall",level:"four",text:"xxsmall"}),e(t,{alt:"Alt text",caption:"64px",size:"xxsmall",src:"https://placeimg.com/400/300/animals"})]}),a(l,{textAlign:"center",children:[e(i,{id:"ExtraSmall",level:"four",text:"xsmall"}),e(t,{alt:"Alt text",caption:"96px",size:"xsmall",src:"https://placeimg.com/400/300/animals"})]}),a(l,{textAlign:"center",children:[e(i,{id:"Small",level:"four",text:"small"}),e(t,{alt:"Alt text",caption:"165px",size:"small",src:"https://placeimg.com/400/300/animals"})]}),a(l,{textAlign:"center",children:[e(i,{id:"Medium",level:"four",text:"medium"}),e(t,{alt:"Alt text",caption:"225px",size:"medium",src:"https://placeimg.com/400/300/animals"})]}),a(l,{textAlign:"center",children:[e(i,{id:"Large",level:"four",text:"large"}),e(t,{alt:"Alt text",caption:"360px",size:"large",src:"https://placeimg.com/400/300/animals"})]}),a(l,{textAlign:"center",children:[e(i,{id:"Default",level:"four",text:"default"}),e(t,{alt:"Alt text",caption:"100%",src:"https://placeimg.com/400/300/animals"})]})]})},s={margin:"auto",maxWidth:"360px",textalign:"center",width:"100%"},m={render:()=>a(x,{columns:1,children:[a(l,{style:s,children:[e(i,{id:"fourbythree",level:"four",text:"fourByThree"}),e(t,{alt:"Alt text",aspectRatio:"fourByThree",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"onebytwo",level:"four",text:"oneByTwo"}),e(t,{alt:"Alt text",aspectRatio:"oneByTwo",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"original",level:"four",text:"original"}),e(t,{alt:"Alt text",aspectRatio:"original",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"sixteenbynine",level:"four",text:"sixteenByNine"}),e(t,{alt:"Alt text",aspectRatio:"sixteenByNine",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"square",level:"four",text:"square"}),e(t,{alt:"Alt text",aspectRatio:"square",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"threebyfour",level:"four",text:"threeByFour"}),e(t,{alt:"Alt text",aspectRatio:"threeByFour",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"threebytwo",level:"four",text:"threeByTwo"}),e(t,{alt:"Alt text",aspectRatio:"threeByTwo",src:"https://placeimg.com/400/300/animals"})]}),a(l,{style:s,children:[e(i,{id:"twobyone",level:"four",text:"twoByOne"}),e(t,{alt:"Alt text",aspectRatio:"twoByOne",src:"https://placeimg.com/400/300/animals"})]})]})},p={render:()=>a(x,{columns:1,children:[a(l,{style:s,children:[e(i,{id:"default",level:"four",text:"default"}),e(t,{alt:"Alt text",aspectRatio:"square",imageType:"default",src:"https://placeimg.com/400/400/animals"})]}),a(l,{style:s,children:[e(i,{id:"circle",level:"four",text:"circle"}),e(t,{alt:"Alt text",aspectRatio:"square",imageType:"circle",src:"https://placeimg.com/400/400/animals"})]})]})},d={render:()=>a(_,{align:"start",children:[a(l,{children:[e(u,{children:"Image with `onLoad` function"}),e(t,{alt:"Alt text",src:"https://placeimg.com/400/400/animals",onLoad:({target:n})=>{console.log("Image 1 loaded and `onLoad` called."),console.log("Image 1 dimensions:",n.offsetHeight,n.offsetWidth)}})]}),a(l,{children:[e(u,{children:"Image with `onError` function"}),e(t,{alt:"Broken image with bad url",src:"https://placeimcom/400/400/animals",onError:()=>console.warn("Image 2 error! Called through `onError`.")})]})]})},g={render:()=>a(x,{columns:1,children:[e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/540/420/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/500/400/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/460/460/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/420/490/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/200/120/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/640/340/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/460/480/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/100/200/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/400/400/animals"}),e(t,{alt:"Alt text",isLazy:!0,src:"https://placeimg.com/250/360/animals"})]})};var y,h,f,A,B;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    src: "https://placeimg.com/400/300/animals"
  },
  render: args => <Image {...args} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379"
    },
    jest: ["Image.test.tsx"]
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Main Story for the Image component. This must contains the `args`\nand `parameters` properties in this object.",...(B=(A=r.parameters)==null?void 0:A.docs)==null?void 0:B.description}}};var I,S,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    alt: "Alt text",
    aspectRatio: "threeByTwo",
    caption: "Image caption",
    credit: "Image credit",
    imageType: "default",
    size: "medium",
    src: "https://placeimg.com/400/300/animals"
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
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,T,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Box textAlign="center">
        <Heading id="ExtraExtraSmall" level="four" text="xxsmall" />
        <Image alt="Alt text" caption="64px" size="xxsmall" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box textAlign="center">
        <Heading id="ExtraSmall" level="four" text="xsmall" />
        <Image alt="Alt text" caption="96px" size="xsmall" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box textAlign="center">
        <Heading id="Small" level="four" text="small" />
        <Image alt="Alt text" caption="165px" size="small" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box textAlign="center">
        <Heading id="Medium" level="four" text="medium" />
        <Image alt="Alt text" caption="225px" size="medium" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box textAlign="center">
        <Heading id="Large" level="four" text="large" />
        <Image alt="Alt text" caption="360px" size="large" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box textAlign="center">
        <Heading id="Default" level="four" text="default" />
        <Image alt="Alt text" caption="100%" src="https://placeimg.com/400/300/animals" />
      </Box>
    </SimpleGrid>
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var v,L,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Box style={imageBlockStyles}>
        <Heading id="fourbythree" level="four" text="fourByThree" />
        <Image alt="Alt text" aspectRatio="fourByThree" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="onebytwo" level="four" text="oneByTwo" />
        <Image alt="Alt text" aspectRatio="oneByTwo" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="original" level="four" text="original" />
        <Image alt="Alt text" aspectRatio="original" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="sixteenbynine" level="four" text="sixteenByNine" />
        <Image alt="Alt text" aspectRatio="sixteenByNine" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="square" level="four" text="square" />
        <Image alt="Alt text" aspectRatio="square" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebyfour" level="four" text="threeByFour" />
        <Image alt="Alt text" aspectRatio="threeByFour" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebytwo" level="four" text="threeByTwo" />
        <Image alt="Alt text" aspectRatio="threeByTwo" src="https://placeimg.com/400/300/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="twobyone" level="four" text="twoByOne" />
        <Image alt="Alt text" aspectRatio="twoByOne" src="https://placeimg.com/400/300/animals" />
      </Box>
    </SimpleGrid>
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,k,F;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Box style={imageBlockStyles}>
        <Heading id="default" level="four" text="default" />
        <Image alt="Alt text" aspectRatio="square" imageType="default" src="https://placeimg.com/400/400/animals" />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="circle" level="four" text="circle" />
        <Image alt="Alt text" aspectRatio="square" imageType="circle" src="https://placeimg.com/400/400/animals" />
      </Box>
    </SimpleGrid>
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var q,E,C;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <VStack align="start">
      <Box>
        <Text>Image with \`onLoad\` function</Text>
        <Image alt="Alt text" src="https://placeimg.com/400/400/animals" onLoad={({
        target
      }: any) => {
        console.log("Image 1 loaded and \`onLoad\` called.");
        console.log("Image 1 dimensions:", target.offsetHeight, target.offsetWidth);
      }} />
      </Box>
      <Box>
        <Text>Image with \`onError\` function</Text>
        <Image alt="Broken image with bad url" src="https://placeimcom/400/400/animals" onError={() => console.warn("Image 2 error! Called through \`onError\`.")} />
      </Box>
    </VStack>
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var M,N,G;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Image alt="Alt text" isLazy src="https://placeimg.com/540/420/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/500/400/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/460/460/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/420/490/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/200/120/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/640/340/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/460/480/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/100/200/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/400/400/animals" />
      <Image alt="Alt text" isLazy src="https://placeimg.com/250/360/animals" />
    </SimpleGrid>
}`,...(G=(N=g.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const J=["WithControls","FigureAndFigcaption","Sizes","AspectRatios","Types","HTMLAttributes","LazyLoading"],$=Object.freeze(Object.defineProperty({__proto__:null,AspectRatios:m,FigureAndFigcaption:o,HTMLAttributes:d,LazyLoading:g,Sizes:c,Types:p,WithControls:r,__namedExportsOrder:J,default:D},Symbol.toStringTag,{value:"Module"}));export{m as A,o as F,d as H,$ as I,g as L,c as S,p as T,r as W};
//# sourceMappingURL=Image.stories-08c6ac6e.js.map
