import{j as e,a,F as n}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{w as Z}from"./index-6148c31a.js";import{B as f}from"./Button-948e9be8.js";import{B as $}from"./ButtonGroup-c2c033a6.js";import{H as r}from"./Heading-7eebc756.js";import{H as o,h as ee,a as re}from"./Hero-42312d27.js";import{S as ae}from"./SimpleGrid-bd04b221.js";import{T as X}from"./Text-d88b2f7a.js";import{S as x}from"./chakra-ui-layout.esm-e0dbb94e.js";const c=e(n,{children:"Explore our collection of hundreds of online resources and databases. Use our free online content to help with your research, whether it's finding a single article, tracing a family tree, learning a new language, or anything in between."}),d=e(X,{mt:"s",noSpace:!0,children:"This variant has been deprecated."}),s="With 92 locations across the Bronx, Manhattan, and Staten Island, The New York Public Library is an essential part of neighborhoods across the city. Visit us today.",T=a(n,{children:[e(r,{level:"h2",size:"heading3",subtitle:"Lorem Parturient Bibendum Aenean Cras",children:"Subheading"}),e(r,{level:"h3",noSpace:!0,size:"heading6",children:"Subheading"}),e(X,{children:"Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo."}),a($,{children:[e(f,{id:"other-button-example-1",children:"Button"}),e(f,{id:"other-button-example-2",buttonType:"secondary",children:"Button"})]})]}),t={alt:"Image example",src:"//placekitten.com/800/400"},oe={title:"Components/Basic Elements/Hero",component:o,decorators:[Z],argTypes:{backdropBackgroundColor:{control:!1},backgroundColor:{control:!1},foregroundColor:{control:!1},heading:{control:!1},heroType:{control:{type:"select"},options:ee,table:{defaultValue:{summary:"primary"}}},imageProps:{control:!1},isDarkBackgroundImage:{control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},locationDetails:{control:!1},subHeaderText:{control:!1}}},g={args:{backdropBackgroundColor:void 0,backgroundColor:void 0,backgroundImageSrc:void 0,foregroundColor:void 0,heading:void 0,heroType:"primary",imageProps:t,isDarkBackgroundImage:void 0,locationDetails:void 0,subHeaderText:void 0},render:i=>i.heroType==="primary"&&e(o,{...i,backgroundImageSrc:"//placekitten.com/2400/800",heading:e(r,{level:"h1",id:"1",subtitle:"Example Subtitle",text:"Hero Primary"}),heroType:i.heroType,subHeaderText:"Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis."})||re.includes(i.heroType)&&e("div",{className:"nypl--books-and-more",children:e(o,{...i,heading:e(r,{level:"h1",id:"1",size:"heading2",text:"Hero Secondary (deprecated)"}),heroType:i.heroType,imageProps:i.imageProps,subHeaderText:a(n,{children:[c," ",d]})})})||i.heroType==="tertiary"&&e(o,{...i,heading:e(r,{level:"h1",id:"1",size:"heading2",text:"Hero Tertiary"}),heroType:i.heroType,subHeaderText:s})||i.heroType==="campaign"&&e(o,{...i,backgroundImageSrc:"//placekitten.com/2400/800",heading:e(r,{level:"h1",id:"1",text:"Hero Campaign"}),heroType:i.heroType,imageProps:i.imageProps,subHeaderText:s})||i.heroType==="fiftyFifty"&&e(o,{...i,heroType:i.heroType,imageProps:{...i.imageProps,src:"//placekitten.com/1200/400"},subHeaderText:a(n,{children:[s," ",d]})}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36817%3A23704"},jest:"Hero.test.tsx"}},h={render:()=>e(o,{backgroundImageSrc:"//placekitten.com/1600/800",heading:e(r,{id:"primary-hero",level:"h1",noSpace:!0,overline:"Hero Example",subtitle:"Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",text:"Hero Primary"}),heroType:"primary"})},p={name:"Secondary (deprecated)",render:()=>e(o,{heading:e(r,{level:"h1",id:"secondary-hero",size:"heading2",text:"Hero Secondary (deprecated)"}),heroType:"secondary",imageProps:t,subHeaderText:a(n,{children:[c," ",d]})})},l={render:()=>a(n,{children:[e(o,{heading:e(r,{level:"h1",id:"tertiary-hero-subheading",size:"heading2",subtitle:"This is the subtitle",text:"Hero Tertiary with Subtitle & Sub-Heading"}),heroType:"tertiary",subHeaderText:s}),e("br",{}),e(o,{heading:e(r,{level:"h1",id:"tertiary-hero-subheading",size:"heading2",text:"Hero Tertiary with Sub-Heading"}),heroType:"tertiary",subHeaderText:s}),e("br",{}),e(o,{heading:e(r,{level:"h1",id:"tertiary-hero",size:"heading2",text:"Hero Tertiary without Additional Elements"}),heroType:"tertiary"})]})},u={render:()=>a(x,{spacing:"l",children:[a("div",{children:[e(r,{id:"campaign-hero-default",size:"heading6",text:"Campaign Hero at Default Height"}),e(o,{backgroundImageSrc:"//placekitten.com/1600/800",heroType:"campaign",heading:e(r,{level:"h1",id:"campaign-hero-default-heading",text:"Hero Campaign"}),imageProps:t,subHeaderText:s})]}),a("div",{children:[e(r,{id:"campaign-hero-long-text",size:"heading6",text:"Campaign Hero with Long Text"}),e(o,{backgroundImageSrc:"//placekitten.com/1600/800",heroType:"campaign",heading:e(r,{level:"h1",id:"campaign-hero-long-text-heading",overline:"Example",subtitle:"Donec id elit non mi porta gravida at eget metus.",text:"Hero Campaign"}),imageProps:t,subHeaderText:T})]})]})},m={render:()=>e(x,{spacing:"l",children:e("div",{children:e(o,{backgroundImageSrc:"//placekitten.com/1600/800",heroType:"campaign",heading:e(r,{level:"h1",id:"campaign-hero-default-heading",text:"Hero Campaign"}),imageProps:t,isDarkBackgroundImage:!0,subHeaderText:s})})})},y={render:()=>a(x,{spacing:"l",children:[a("div",{children:[e(r,{id:"campaign-hero-custom-background-color",size:"heading6",text:"Campaign Hero with backdrop background color"}),e(o,{backdropBackgroundColor:"section.research.primary",heroType:"campaign",heading:e(r,{level:"h1",id:"campaign-hero-long-text-heading",text:"Hero Campaign"}),imageProps:t,subHeaderText:T})]}),a("div",{children:[e(r,{id:"campaign-hero-custom-background-and-foreground-colors",size:"heading6",text:"Campaign Hero with separate backdrop and foreground background design token color"}),e(o,{backdropBackgroundColor:"section.education.primary",backgroundColor:"ui.warning.primary",foregroundColor:"ui.typgraphy.heading",heroType:"campaign",heading:e(r,{color:"ui.typgraphy.heading",level:"h1",id:"campaign-hero-long-text-heading",text:"Hero Campaign"}),imageProps:t,subHeaderText:T})]})]})},H={name:"FiftyFifty (deprecated)",render:()=>a(x,{spacing:"l",children:[a("div",{children:[e(r,{id:"fiftyfifty-default",overline:"Deprecated",text:"FiftyFifty Hero at Default Height (deprecated)"}),e(o,{heroType:"fiftyFifty",imageProps:t,subHeaderText:a(n,{children:[s," ",d]})})]}),a("div",{children:[e(r,{id:"fiftyfifty-long-text",overline:"Deprecated",text:"FiftyFifty Hero with Long Text (deprecated)"}),e(o,{heroType:"fiftyFifty",imageProps:t,subHeaderText:a(n,{children:[T," ",d]})})]})]})},b={name:"Color Variations for Secondary Hero",render:()=>a(ae,{columns:1,children:[e(r,{id:"main-secondary-heading",text:"secondary"}),e(o,{heading:e(r,{level:"h1",size:"heading2",id:"main-secondary-hero",text:"Secondary (deprecated)"}),heroType:"secondary",imageProps:t,subHeaderText:a(n,{children:[c," ",d]})}),e(r,{id:"books-heading",text:"secondaryBooksAndMore"}),e(o,{heading:e(r,{level:"h1",size:"heading2",id:"books-hero",text:"Books and More (deprecated)"}),heroType:"secondaryBooksAndMore",imageProps:t,subHeaderText:a(n,{children:[c," ",d]})}),e(r,{id:"location-heading",text:"secondaryLocations"}),e(o,{heading:e(r,{level:"h1",size:"heading2",id:"locations-hero",text:"Locations (deprecated)"}),heroType:"secondaryLocations",imageProps:t,subHeaderText:a(n,{children:[c," ",d]})}),e(r,{id:"research-heading",text:"secondaryResearch"}),e(o,{heading:e(r,{level:"h1",size:"heading2",id:"research-hero",text:"Research (deprecated)"}),heroType:"secondaryResearch",imageProps:t,subHeaderText:a(n,{children:[c," ",d]})}),e(r,{id:"whats-on-heading",text:"secondaryWhatsOn"}),e(o,{heading:e(r,{level:"h1",size:"heading2",id:"whats-on-hero",text:"What's On (deprecated)"}),heroType:"secondaryWhatsOn",imageProps:t,subHeaderText:a(n,{children:[c," ",d]})})]})};var k,S,v,C,P;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    backdropBackgroundColor: undefined,
    backgroundColor: undefined,
    backgroundImageSrc: undefined,
    foregroundColor: undefined,
    heading: undefined,
    heroType: "primary",
    imageProps,
    isDarkBackgroundImage: undefined,
    locationDetails: undefined,
    subHeaderText: undefined
  },
  render: args => args.heroType === "primary" && <Hero {...args} backgroundImageSrc="//placekitten.com/2400/800" heading={<Heading level="h1" id="1" subtitle="Example Subtitle" text="Hero Primary" />} heroType={args.heroType} subHeaderText="Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis." /> || heroSecondaryTypes.includes(args.heroType) && <div className="nypl--books-and-more">
        <Hero {...args} heading={<Heading level="h1" id="1" size="heading2" text="Hero Secondary (deprecated)" />} heroType={args.heroType} imageProps={args.imageProps} subHeaderText={<>
              {secondarySubHeaderText} {deprecatedMessage}
            </>} />
      </div> || args.heroType === "tertiary" && <Hero {...args} heading={<Heading level="h1" id="1" size="heading2" text="Hero Tertiary" />} heroType={args.heroType} subHeaderText={otherSubHeaderText} /> || args.heroType === "campaign" && <Hero {...args} backgroundImageSrc="//placekitten.com/2400/800" heading={<Heading level="h1" id="1" text="Hero Campaign" />} heroType={args.heroType} imageProps={args.imageProps} subHeaderText={otherSubHeaderText} /> || args.heroType === "fiftyFifty" && <Hero {...args} heroType={args.heroType} imageProps={{
    ...args.imageProps,
    src: "//placekitten.com/1200/400"
  }} subHeaderText={<>
            {otherSubHeaderText} {deprecatedMessage}
          </>} />,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36817%3A23704"
    },
    jest: "Hero.test.tsx"
  }
}`,...(v=(S=g.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"Main Story for the Hero component. This must contains the `args`\nand `parameters` properties in this object.",...(P=(C=g.parameters)==null?void 0:C.docs)==null?void 0:P.description}}};var w,z,B;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Hero backgroundImageSrc="//placekitten.com/1600/800" heading={<Heading id="primary-hero" level="h1" noSpace overline="Hero Example" subtitle="Integer posuere erat a ante venenatis dapibus posuere velit aliquet." text="Hero Primary" />} heroType="primary" />
}`,...(B=(z=h.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,I,M;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Secondary (deprecated)",
  render: () => <Hero heading={<Heading level="h1" id="secondary-hero" size="heading2" text="Hero Secondary (deprecated)" />} heroType="secondary" imageProps={imageProps} subHeaderText={<>
          {secondarySubHeaderText} {deprecatedMessage}
        </>} />
}`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,L,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <>
      <Hero heading={<Heading level="h1" id="tertiary-hero-subheading" size="heading2" subtitle="This is the subtitle" text="Hero Tertiary with Subtitle & Sub-Heading" />} heroType="tertiary" subHeaderText={otherSubHeaderText} />
      <br />
      <Hero heading={<Heading level="h1" id="tertiary-hero-subheading" size="heading2" text="Hero Tertiary with Sub-Heading" />} heroType="tertiary" subHeaderText={otherSubHeaderText} />
      <br />
      <Hero heading={<Heading level="h1" id="tertiary-hero" size="heading2" text="Hero Tertiary without Additional Elements" />} heroType="tertiary" />
    </>
}`,...(A=(L=l.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,W,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Stack spacing="l">
      <div>
        <Heading id="campaign-hero-default" size="heading6" text="Campaign Hero at Default Height" />
        <Hero backgroundImageSrc="//placekitten.com/1600/800" heroType="campaign" heading={<Heading level="h1" id="campaign-hero-default-heading" text="Hero Campaign" />} imageProps={imageProps} subHeaderText={otherSubHeaderText} />
      </div>
      <div>
        <Heading id="campaign-hero-long-text" size="heading6" text="Campaign Hero with Long Text" />
        <Hero backgroundImageSrc="//placekitten.com/1600/800" heroType="campaign" heading={<Heading level="h1" id="campaign-hero-long-text-heading" overline="Example" subtitle="Donec id elit non mi porta gravida at eget metus." text="Hero Campaign" />} imageProps={imageProps} subHeaderText={otherSubHeaderTextLong} />
      </div>
    </Stack>
}`,...(N=(W=u.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var O,j,V;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Stack spacing="l">
      <div>
        <Hero backgroundImageSrc="//placekitten.com/1600/800" heroType="campaign" heading={<Heading level="h1" id="campaign-hero-default-heading" text="Hero Campaign" />} imageProps={imageProps} isDarkBackgroundImage subHeaderText={otherSubHeaderText} />
      </div>
    </Stack>
}`,...(V=(j=m.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var q,R,_;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stack spacing="l">
      <div>
        <Heading id="campaign-hero-custom-background-color" size="heading6" text="Campaign Hero with backdrop background color" />
        <Hero backdropBackgroundColor="section.research.primary" heroType="campaign" heading={<Heading level="h1" id="campaign-hero-long-text-heading" text="Hero Campaign" />} imageProps={imageProps} subHeaderText={otherSubHeaderTextLong} />
      </div>
      <div>
        <Heading id="campaign-hero-custom-background-and-foreground-colors" size="heading6" text="Campaign Hero with separate backdrop and foreground background design token color" />
        <Hero backdropBackgroundColor="section.education.primary" backgroundColor="ui.warning.primary" foregroundColor="ui.typgraphy.heading" heroType="campaign" heading={<Heading color="ui.typgraphy.heading" level="h1" id="campaign-hero-long-text-heading" text="Hero Campaign" />} imageProps={imageProps} subHeaderText={otherSubHeaderTextLong} />
      </div>
    </Stack>
}`,...(_=(R=y.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var G,J,U;H.parameters={...H.parameters,docs:{...(G=H.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "FiftyFifty (deprecated)",
  render: () => <Stack spacing="l">
      <div>
        <Heading id="fiftyfifty-default" overline="Deprecated" text="FiftyFifty Hero at Default Height (deprecated)" />
        <Hero heroType="fiftyFifty" imageProps={imageProps} subHeaderText={<>
              {otherSubHeaderText} {deprecatedMessage}
            </>} />
      </div>
      <div>
        <Heading id="fiftyfifty-long-text" overline="Deprecated" text="FiftyFifty Hero with Long Text (deprecated)" />
        <Hero heroType="fiftyFifty" imageProps={imageProps} subHeaderText={<>
              {otherSubHeaderTextLong} {deprecatedMessage}
            </>} />
      </div>
    </Stack>
}`,...(U=(J=H.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Y,K,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Color Variations for Secondary Hero",
  render: () => <SimpleGrid columns={1}>
      <Heading id="main-secondary-heading" text="secondary" />
      <Hero heading={<Heading level="h1" size="heading2" id="main-secondary-hero" text="Secondary (deprecated)" />} heroType="secondary" imageProps={imageProps} subHeaderText={<>
            {secondarySubHeaderText} {deprecatedMessage}
          </>} />
      <Heading id="books-heading" text="secondaryBooksAndMore" />
      <Hero heading={<Heading level="h1" size="heading2" id="books-hero" text="Books and More (deprecated)" />} heroType="secondaryBooksAndMore" imageProps={imageProps} subHeaderText={<>
            {secondarySubHeaderText} {deprecatedMessage}
          </>} />
      <Heading id="location-heading" text="secondaryLocations" />
      <Hero heading={<Heading level="h1" size="heading2" id="locations-hero" text="Locations (deprecated)" />} heroType="secondaryLocations" imageProps={imageProps} subHeaderText={<>
            {secondarySubHeaderText} {deprecatedMessage}
          </>} />
      <Heading id="research-heading" text="secondaryResearch" />
      <Hero heading={<Heading level="h1" size="heading2" id="research-hero" text="Research (deprecated)" />} heroType="secondaryResearch" imageProps={imageProps} subHeaderText={<>
            {secondarySubHeaderText} {deprecatedMessage}
          </>} />
      <Heading id="whats-on-heading" text="secondaryWhatsOn" />
      <Hero heading={<Heading level="h1" size="heading2" id="whats-on-hero" text="What's On (deprecated)" />} heroType="secondaryWhatsOn" imageProps={imageProps} subHeaderText={<>
            {secondarySubHeaderText} {deprecatedMessage}
          </>} />
    </SimpleGrid>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ie=["WithControls","Primary","Secondary","Tertiary","Campaign","CampaignDarkBackgroundImage","CampaignBackgroundColors","FiftyFifty","ColorVariations"],ue=Object.freeze(Object.defineProperty({__proto__:null,Campaign:u,CampaignBackgroundColors:y,CampaignDarkBackgroundImage:m,ColorVariations:b,FiftyFifty:H,Primary:h,Secondary:p,Tertiary:l,WithControls:g,__namedExportsOrder:ie,default:oe},Symbol.toStringTag,{value:"Module"}));export{u as C,H as F,ue as H,h as P,p as S,l as T,g as W,m as a,y as b,b as c};
//# sourceMappingURL=Hero.stories-491eb300.js.map
