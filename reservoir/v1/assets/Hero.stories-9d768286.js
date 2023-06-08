import{j as e,a as n,F as y}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as E}from"./index-6148c31a.js";import{H as r}from"./Heading-2ec2ea62.js";import{H as a,h as q,a as G}from"./Hero-2040dfe5.js";import{S as z}from"./SimpleGrid-e54e0b68.js";import{T as u}from"./Text-eabcdc0a.js";import{d as R}from"./chakra-ui-layout.esm-b2fa9d31.js";const i=e(y,{children:"Explore our collection of hundreds of online resources and databases. Use our free online content to help with your research, whether it's finding a single article, tracing a family tree, learning a new language, or anything in between."}),s="With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.",_=n(y,{children:[e(r,{level:"two",noSpace:!0,children:"Subheading"}),e(u,{size:"caption",children:"Lorem Parturient Bibendum Aenean Cras"}),e(r,{level:"three",children:"Subheading"}),e(u,{noSpace:!0,children:"Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo."})]}),t={alt:"Image example",src:"https://placeimg.com/800/400/animals"},J={title:"Components/Basic Elements/Hero",component:a,decorators:[E],argTypes:{backgroundColor:{control:!1},foregroundColor:{control:!1},heading:{control:!1},heroType:{control:{type:"select"},options:q,table:{defaultValue:{summary:"primary"}}},imageProps:{control:!1},locationDetails:{control:!1},subHeaderText:{control:!1}}},d={args:{backgroundColor:void 0,backgroundImageSrc:void 0,foregroundColor:void 0,heading:void 0,heroType:"primary",imageProps:t,locationDetails:void 0,subHeaderText:void 0},render:o=>o.heroType==="primary"&&e(a,{...o,backgroundImageSrc:"https://placeimg.com/2400/800/nature",heading:e(r,{level:"one",id:"1",text:"Hero Primary"}),heroType:o.heroType,subHeaderText:"Example Subtitle"})||G.includes(o.heroType)&&e("div",{className:"nypl--books-and-more",children:e(a,{...o,heading:e(r,{level:"one",id:"1",text:"Hero Secondary"}),heroType:o.heroType,imageProps:o.imageProps,subHeaderText:i})})||o.heroType==="tertiary"&&e(a,{...o,heading:e(r,{level:"one",id:"1",text:"Hero Tertiary"}),heroType:o.heroType,subHeaderText:s})||o.heroType==="campaign"&&e(a,{...o,backgroundImageSrc:"https://placeimg.com/2400/800/nature",heading:e(r,{level:"one",id:"1",text:"Hero Campaign"}),heroType:o.heroType,imageProps:o.imageProps,subHeaderText:s})||o.heroType==="fiftyFifty"&&e(a,{...o,heroType:o.heroType,imageProps:{...o.imageProps,src:"https://placeimg.com/1200/400/animals"},subHeaderText:s}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36817%3A23704"},jest:"Hero.test.tsx"}},c={render:()=>e(a,{backgroundImageSrc:"https://placeimg.com/1600/800/arch",heading:e(r,{level:"one",id:"primary-hero",text:"Hero Primary"}),heroType:"primary"})},g={render:()=>e(a,{heading:e(r,{level:"one",id:"secondary-hero",text:"Hero Secondary"}),heroType:"secondary",imageProps:t,subHeaderText:i})},p={render:()=>n(y,{children:[e(a,{heading:e(r,{level:"one",id:"tertiary-hero-subheading",text:"Hero Tertiary with Sub-Heading"}),heroType:"tertiary",subHeaderText:s}),e("br",{}),e(a,{heading:e(r,{level:"one",id:"tertiary-hero",text:"Hero Tertiary without Sub-Heading text"}),heroType:"tertiary"})]})},h={render:()=>n(R,{spacing:"l",children:[n("div",{children:[e(r,{id:"campaign-hero-default",text:"Campaign Hero at Default Height"}),e(a,{backgroundImageSrc:"https://placeimg.com/2400/800/nature/grayscale",heroType:"campaign",heading:e(r,{level:"one",id:"campaign-hero-default-heading",text:"Hero Campaign"}),imageProps:t,subHeaderText:s})]}),n("div",{children:[e(r,{id:"campaign-hero-long-text",text:"Campaign Hero with Long Text"}),e(a,{backgroundImageSrc:"https://placeimg.com/2400/800/nature/grayscale",heroType:"campaign",heading:e(r,{level:"one",id:"campaign-hero-long-text-heading",text:"Hero Campaign"}),imageProps:t,subHeaderText:_})]})]})},l={render:()=>n(R,{spacing:"l",children:[n("div",{children:[e(r,{id:"fiftyfifty-default",text:"FiftyFifty Hero at Default Height"}),e(a,{heroType:"fiftyFifty",imageProps:t,subHeaderText:s})]}),n("div",{children:[e(r,{id:"fiftyfifty-long-text",text:"FiftyFifty Hero with Long Text"}),e(a,{heroType:"fiftyFifty",imageProps:t,subHeaderText:_})]})]})},m={name:"Color Variations for Secondary Hero",render:()=>n(z,{columns:1,children:[e(r,{id:"main-secondary-heading",text:"secondary"}),e(a,{heading:e(r,{level:"one",id:"main-secondary-hero",text:"Secondary"}),heroType:"secondary",imageProps:t,subHeaderText:i}),e(r,{id:"books-heading",text:"secondaryBooksAndMore"}),e(a,{heading:e(r,{level:"one",id:"books-hero",text:"Books and More"}),heroType:"secondaryBooksAndMore",imageProps:t,subHeaderText:i}),e(r,{id:"location-heading",text:"secondaryLocations"}),e(a,{heading:e(r,{level:"one",id:"locations-hero",text:"Locations"}),heroType:"secondaryLocations",imageProps:t,subHeaderText:i}),e(r,{id:"research-heading",text:"secondaryResearch"}),e(a,{heading:e(r,{level:"one",id:"research-hero",text:"Research"}),heroType:"secondaryResearch",imageProps:t,subHeaderText:i}),e(r,{id:"whats-on-heading",text:"secondaryWhatsOn"}),e(a,{heading:e(r,{level:"one",id:"whats-on-hero",text:"What's On"}),heroType:"secondaryWhatsOn",imageProps:t,subHeaderText:i})]})};var H,T,x,b,f;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    backgroundColor: undefined,
    backgroundImageSrc: undefined,
    foregroundColor: undefined,
    heading: undefined,
    heroType: "primary",
    imageProps,
    locationDetails: undefined,
    subHeaderText: undefined
  },
  render: args => args.heroType === "primary" && <Hero {...args} backgroundImageSrc="https://placeimg.com/2400/800/nature" heading={<Heading level="one" id="1" text="Hero Primary" />} heroType={args.heroType} subHeaderText="Example Subtitle" /> || heroSecondaryTypes.includes(args.heroType) && <div className="nypl--books-and-more">
        <Hero {...args} heading={<Heading level="one" id="1" text="Hero Secondary" />} heroType={args.heroType} imageProps={args.imageProps} subHeaderText={secondarySubHeaderText} />
      </div> || args.heroType === "tertiary" && <Hero {...args} heading={<Heading level="one" id="1" text="Hero Tertiary" />} heroType={args.heroType} subHeaderText={otherSubHeaderText} /> || args.heroType === "campaign" && <Hero {...args} backgroundImageSrc="https://placeimg.com/2400/800/nature" heading={<Heading level="one" id="1" text="Hero Campaign" />} heroType={args.heroType} imageProps={args.imageProps} subHeaderText={otherSubHeaderText} /> || args.heroType === "fiftyFifty" && <Hero {...args} heroType={args.heroType} imageProps={{
    ...args.imageProps,
    src: "https://placeimg.com/1200/400/animals"
  }} subHeaderText={otherSubHeaderText} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36817%3A23704"
    },
    jest: "Hero.test.tsx"
  }
}`,...(x=(T=d.parameters)==null?void 0:T.docs)==null?void 0:x.source},description:{story:"Main Story for the Hero component. This must contains the `args`\nand `parameters` properties in this object.",...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var S,v,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Hero backgroundImageSrc="https://placeimg.com/1600/800/arch" heading={<Heading level="one" id="primary-hero" text="Hero Primary" />} heroType="primary" />
}`,...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var k,C,w;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Hero heading={<Heading level="one" id="secondary-hero" text="Hero Secondary" />} heroType="secondary" imageProps={imageProps} subHeaderText={secondarySubHeaderText} />
}`,...(w=(C=g.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var F,I,L;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <Hero heading={<Heading level="one" id="tertiary-hero-subheading" text="Hero Tertiary with Sub-Heading" />} heroType="tertiary" subHeaderText={otherSubHeaderText} />
      <br />
      <Hero heading={<Heading level="one" id="tertiary-hero" text="Hero Tertiary without Sub-Heading text" />} heroType="tertiary" />
    </>
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var M,A,D;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Stack spacing="l">
      <div>
        <Heading id="campaign-hero-default" text="Campaign Hero at Default Height" />
        <Hero backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale" heroType="campaign" heading={<Heading level="one" id="campaign-hero-default-heading" text="Hero Campaign" />} imageProps={imageProps} subHeaderText={otherSubHeaderText} />
      </div>
      <div>
        <Heading id="campaign-hero-long-text" text="Campaign Hero with Long Text" />
        <Hero backgroundImageSrc="https://placeimg.com/2400/800/nature/grayscale" heroType="campaign" heading={<Heading level="one" id="campaign-hero-long-text-heading" text="Hero Campaign" />} imageProps={imageProps} subHeaderText={otherSubHeaderTextLong} />
      </div>
    </Stack>
}`,...(D=(A=h.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,B,O;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Stack spacing="l">
      <div>
        <Heading id="fiftyfifty-default" text="FiftyFifty Hero at Default Height" />
        <Hero heroType="fiftyFifty" imageProps={imageProps} subHeaderText={otherSubHeaderText} />
      </div>
      <div>
        <Heading id="fiftyfifty-long-text" text="FiftyFifty Hero with Long Text" />
        <Hero heroType="fiftyFifty" imageProps={imageProps} subHeaderText={otherSubHeaderTextLong} />
      </div>
    </Stack>
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var j,N,V;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Color Variations for Secondary Hero",
  render: () => <SimpleGrid columns={1}>
      <Heading id="main-secondary-heading" text="secondary" />
      <Hero heading={<Heading level="one" id="main-secondary-hero" text="Secondary" />} heroType="secondary" imageProps={imageProps} subHeaderText={secondarySubHeaderText} />
      <Heading id="books-heading" text="secondaryBooksAndMore" />
      <Hero heading={<Heading level="one" id="books-hero" text="Books and More" />} heroType="secondaryBooksAndMore" imageProps={imageProps} subHeaderText={secondarySubHeaderText} />
      <Heading id="location-heading" text="secondaryLocations" />
      <Hero heading={<Heading level="one" id="locations-hero" text="Locations" />} heroType="secondaryLocations" imageProps={imageProps} subHeaderText={secondarySubHeaderText} />
      <Heading id="research-heading" text="secondaryResearch" />
      <Hero heading={<Heading level="one" id="research-hero" text="Research" />} heroType="secondaryResearch" imageProps={imageProps} subHeaderText={secondarySubHeaderText} />
      <Heading id="whats-on-heading" text="secondaryWhatsOn" />
      <Hero heading={<Heading level="one" id="whats-on-hero" text="What's On" />} heroType="secondaryWhatsOn" imageProps={imageProps} subHeaderText={secondarySubHeaderText} />
    </SimpleGrid>
}`,...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const U=["WithControls","Primary","Secondary","Tertiary","Campaign","FiftyFifty","ColorVariations"],re=Object.freeze(Object.defineProperty({__proto__:null,Campaign:h,ColorVariations:m,FiftyFifty:l,Primary:c,Secondary:g,Tertiary:p,WithControls:d,__namedExportsOrder:U,default:J},Symbol.toStringTag,{value:"Module"}));export{h as C,l as F,re as H,c as P,g as S,p as T,d as W,m as a};
//# sourceMappingURL=Hero.stories-9d768286.js.map
