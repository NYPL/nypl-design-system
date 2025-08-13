import{ap as te,aq as ae,ar as se,as as le,y as t,j as e,Y as a,V as B,a as i,H as l,Z as ie}from"./iframe-CFLVJZOZ.js";import{a as re}from"./storybookUtils-BmTl87w5.js";const ne={title:"Components/Media & Icons/Image",component:t,argTypes:{additionalFigureStyles:{control:!1},additionalImageStyles:{control:!1},additionalWrapperStyles:{control:!1},alt:{control:!1,description:"Alternate text description of the image. Needed for accessibility purposes."},aspectRatio:{control:{type:"select"},options:le,table:{defaultValue:{summary:"original"}}},caption:{control:{type:"text"}},className:{control:!1,description:"Additional class name for the component to use."},component:{control:!1},credit:{control:{type:"text"}},imageType:{control:{type:"radio"},options:se,table:{defaultValue:{summary:"default"}}},isLazy:re(),size:{control:{type:"select"},options:ae,table:{defaultValue:{summary:"default"}}},sizeBasedOn:{control:{type:"radio"},options:te,table:{defaultValue:{summary:"width"}}},src:{description:"The src attribute is required, and contains the path to the image you want to embed."}}},f=(s={})=>{const y={textAlign:"center"},{size:u="large",displayValue:ee,sizeBasedOn:I="width",id:z}=s;return I==="width"&&u==="default"?y.width="100%":I==="height"&&u==="default"&&(y.width="100%",y.height="100%"),e.jsxs(i,{style:y,children:[e.jsx(l,{id:z,level:"h4",size:"heading6",text:u}),e.jsx(t,{alt:"Alt text",caption:ee,size:u,sizeBasedOn:I,src:a("smaller")})]},z)},Q=s=>e.jsx(B,{spacing:"l",children:s}),oe=[{size:"xxxsmall",display:"32px",id:"ExtraExtraExtraSmall"},{size:"xxsmall",display:"64px",id:"ExtraExtraSmall"},{size:"xsmall",display:"96px",id:"ExtraSmall"},{size:"small",display:"165px",id:"Small"},{size:"medium",display:"225px",id:"Medium"},{size:"large",display:"360px",id:"Large"},{size:"default",display:"100%",id:"Default"}],U=[],X=[];for(const s of oe)U.push(f({size:s.size,displayValue:s.display,id:`${s.id}-width`})),X.push(f({size:s.size,displayValue:s.display,id:`${s.id}-height`,sizeBasedOn:"height"}));const n={args:{additionalFigureStyles:void 0,additionalImageStyles:void 0,additionalWrapperStyles:void 0,alt:"Alt text",aspectRatio:"twoByOne",caption:"Image caption",className:void 0,component:void 0,credit:"Image credit",imageType:"default",size:"medium",sizeBasedOn:"width",src:a()},render:s=>e.jsx(t,{...s,id:"image-id"}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379"},jest:["Image.test.tsx"]}},o={args:{alt:"Alt text",aspectRatio:"threeByTwo",caption:"Image caption",credit:"Image credit",imageType:"default",size:"medium",src:a("smaller")},argTypes:{aspectRatio:{table:{disable:!0}},caption:{table:{disable:!0}},credit:{table:{disable:!0}},imageType:{table:{disable:!0}},size:{table:{disable:!0}},src:{table:{disable:!0}}},name:"Credit and Caption",render:s=>e.jsx(t,{...s})},d={render:()=>Q(U)},c={render:()=>Q(X)},r={marginLeft:"auto",marginRight:"auto",maxWidth:"360px",textalign:"center",width:"100%"},g={render:()=>e.jsxs(B,{spacing:"l",children:[e.jsxs(i,{style:r,children:[e.jsx(l,{id:"fourbythree",level:"h4",size:"heading6",text:"fourByThree"}),e.jsx(t,{alt:"Alt text",aspectRatio:"fourByThree",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"fourbyone",level:"h4",size:"heading6",text:"fourByOne"}),e.jsx(t,{alt:"Alt text",aspectRatio:"fourByOne",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"twobythree",level:"h4",size:"heading6",text:"twoByThree"}),e.jsx(t,{alt:"Alt text",aspectRatio:"twoByThree",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"onebytwo",level:"h4",size:"heading6",text:"oneByTwo"}),e.jsx(t,{alt:"Alt text",aspectRatio:"oneByTwo",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"original",level:"h4",size:"heading6",text:"original"}),e.jsx(t,{alt:"Alt text",aspectRatio:"original",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"sixteenbynine",level:"h4",size:"heading6",text:"sixteenByNine"}),e.jsx(t,{alt:"Alt text",aspectRatio:"sixteenByNine",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"square",level:"h4",size:"heading6",text:"square"}),e.jsx(t,{alt:"Alt text",aspectRatio:"square",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"threebyfour",level:"h4",size:"heading6",text:"threeByFour"}),e.jsx(t,{alt:"Alt text",aspectRatio:"threeByFour",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"threebytwo",level:"h4",size:"heading6",text:"threeByTwo"}),e.jsx(t,{alt:"Alt text",aspectRatio:"threeByTwo",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"twobyone",level:"h4",size:"heading6",text:"twoByOne"}),e.jsx(t,{alt:"Alt text",aspectRatio:"twoByOne",src:a()})]})]})},m={render:()=>e.jsxs(B,{spacing:"l",children:[e.jsxs(i,{style:r,children:[e.jsx(l,{id:"default",level:"h4",size:"heading6",text:"default"}),e.jsx(t,{alt:"Alt text",aspectRatio:"square",imageType:"default",src:a()})]}),e.jsxs(i,{style:r,children:[e.jsx(l,{id:"circle",level:"h4",size:"heading6",text:"circle"}),e.jsx(t,{alt:"Alt text",aspectRatio:"square",imageType:"circle",src:a()})]})]})},x={render:()=>e.jsxs(B,{align:"start",spacing:"l",children:[e.jsxs(i,{children:[e.jsx(l,{id:"withOnLoad",level:"h4",size:"heading6",text:"Image with `onLoad` function"}),e.jsx(t,{alt:"Alt text",src:a("smaller"),onLoad:({target:s})=>{console.log("Image 1 loaded and `onLoad` called."),console.log("Image 1 dimensions:",s.offsetHeight,s.offsetWidth)}})]}),e.jsxs(i,{children:[e.jsx(l,{id:"withOnLoad",level:"h4",size:"heading6",text:"Image with `onError` function"}),e.jsx(t,{alt:"Broken image with bad url",src:a("smaller"),onError:()=>console.warn("Image 2 error! Called through `onError`.")})]})]})},h={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{id:"fallback-heading",level:"h4",size:"heading6",text:"Fallback Image Example"}),e.jsx(t,{alt:"Alt text",fallbackSrc:a(),onError:s=>console.error("Error loading image in Storybok example"),src:"foobar.jpg"})]})},p={render:()=>e.jsxs(ie,{columns:1,children:[e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()}),e.jsx(t,{alt:"Alt text",isLazy:!0,src:a()})]})};var j,A,b,S,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    src: getPlaceholderImage()
  },
  render: args => <Image {...args} id="image-id" />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Master?node-id=11896%3A45379"
    },
    jest: ["Image.test.tsx"]
  }
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source},description:{story:"Main Story for the Image component. This must contains the `args`\nand `parameters` properties in this object.",...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var T,L,v;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    alt: "Alt text",
    aspectRatio: "threeByTwo",
    caption: "Image caption",
    credit: "Image credit",
    imageType: "default",
    size: "medium",
    src: getPlaceholderImage("smaller")
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
}`,...(v=(L=o.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var R,k,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => allVStack(sizes)
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var H,O,E;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => allVStack(sizesBasedOnHeight)
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var V,F,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <VStack spacing="l">
      <Box style={imageBlockStyles}>
        <Heading id="fourbythree" level="h4" size="heading6" text="fourByThree" />
        <Image alt="Alt text" aspectRatio="fourByThree" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="fourbyone" level="h4" size="heading6" text="fourByOne" />
        <Image alt="Alt text" aspectRatio="fourByOne" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="twobythree" level="h4" size="heading6" text="twoByThree" />
        <Image alt="Alt text" aspectRatio="twoByThree" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="onebytwo" level="h4" size="heading6" text="oneByTwo" />
        <Image alt="Alt text" aspectRatio="oneByTwo" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="original" level="h4" size="heading6" text="original" />
        <Image alt="Alt text" aspectRatio="original" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="sixteenbynine" level="h4" size="heading6" text="sixteenByNine" />
        <Image alt="Alt text" aspectRatio="sixteenByNine" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="square" level="h4" size="heading6" text="square" />
        <Image alt="Alt text" aspectRatio="square" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebyfour" level="h4" size="heading6" text="threeByFour" />
        <Image alt="Alt text" aspectRatio="threeByFour" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="threebytwo" level="h4" size="heading6" text="threeByTwo" />
        <Image alt="Alt text" aspectRatio="threeByTwo" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="twobyone" level="h4" size="heading6" text="twoByOne" />
        <Image alt="Alt text" aspectRatio="twoByOne" src={getPlaceholderImage()} />
      </Box>
    </VStack>
}`,...(q=(F=g.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var C,M,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <VStack spacing="l">
      <Box style={imageBlockStyles}>
        <Heading id="default" level="h4" size="heading6" text="default" />
        <Image alt="Alt text" aspectRatio="square" imageType="default" src={getPlaceholderImage()} />
      </Box>
      <Box style={imageBlockStyles}>
        <Heading id="circle" level="h4" size="heading6" text="circle" />
        <Image alt="Alt text" aspectRatio="square" imageType="circle" src={getPlaceholderImage()} />
      </Box>
    </VStack>
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var W,_,G;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <VStack align="start" spacing="l">
      <Box>
        <Heading id="withOnLoad" level="h4" size="heading6" text="Image with \`onLoad\` function" />
        <Image alt="Alt text" src={getPlaceholderImage("smaller")} onLoad={({
        target
      }: any) => {
        console.log("Image 1 loaded and \`onLoad\` called.");
        console.log("Image 1 dimensions:", target.offsetHeight, target.offsetWidth);
      }} />
      </Box>
      <Box>
        <Heading id="withOnLoad" level="h4" size="heading6" text="Image with \`onError\` function" />
        <Image alt="Broken image with bad url" src={getPlaceholderImage("smaller")} onError={() => console.warn("Image 2 error! Called through \`onError\`.")} />
      </Box>
    </VStack>
}`,...(G=(_=x.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,$,D;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <>
      <Heading id="fallback-heading" level="h4" size="heading6" text="Fallback Image Example" />
      <Image alt="Alt text" fallbackSrc={getPlaceholderImage()} onError={_event => console.error("Error loading image in Storybok example")} src="foobar.jpg" />
    </>
}`,...(D=($=h.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var Y,Z,K;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
      <Image alt="Alt text" isLazy src={getPlaceholderImage()} />
    </SimpleGrid>
}`,...(K=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};const de=["WithControls","FigureAndFigcaption","Sizes","SizesBasedOnHeight","AspectRatios","Types","HTMLAttributes","FallbackImage","LazyLoading"],me=Object.freeze(Object.defineProperty({__proto__:null,AspectRatios:g,FallbackImage:h,FigureAndFigcaption:o,HTMLAttributes:x,LazyLoading:p,Sizes:d,SizesBasedOnHeight:c,Types:m,WithControls:n,__namedExportsOrder:de,default:ne},Symbol.toStringTag,{value:"Module"}));export{g as A,o as F,x as H,me as I,p as L,d as S,m as T,n as W,c as a,h as b};
