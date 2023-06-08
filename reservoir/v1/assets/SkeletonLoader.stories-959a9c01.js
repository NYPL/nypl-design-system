import{a as w,j as a}from"./emotion-react-jsx-runtime.browser.esm-b12afd4d.js";import{w as h}from"./index-6148c31a.js";import{S as y}from"./SimpleGrid-e54e0b68.js";import{S as e,s as S}from"./SkeletonLoader-fba678a9.js";import{l as k}from"./types-5ca2ba04.js";const L={title:"Components/Feedback/SkeletonLoader",component:e,decorators:[h],argTypes:{className:{control:!1},contentSize:{table:{defaultValue:{summary:"3"}}},headingSize:{table:{defaultValue:{summary:"1"}}},imageAspectRatio:{control:{type:"radio"},options:S,table:{defaultValue:{summary:"square"}}},isBordered:{table:{defaultValue:{summary:"false"}}},layout:{control:{type:"radio"},options:k,table:{defaultValue:{summary:"column"}}},showButton:{table:{defaultValue:{summary:"false"}}},showContent:{table:{defaultValue:{summary:"true"}}},showHeading:{table:{defaultValue:{summary:"true"}}},showImage:{table:{defaultValue:{summary:"true"}}},width:{table:{defaultValue:{summary:"100%"}}}}},o={args:{className:void 0,contentSize:3,headingSize:1,imageAspectRatio:"square",isBordered:!1,layout:"column",showButton:!1,showContent:!0,showHeading:!0,showImage:!0,width:"300px"},parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36817-23677&t=G4pu0KkGDGyMdjnR-4"},jest:["SkeletonLoader.test.tsx"]}},t={render:()=>w(y,{columns:3,children:[a(e,{imageAspectRatio:"landscape",isBordered:!0}),a(e,{imageAspectRatio:"landscape",isBordered:!0}),a(e,{imageAspectRatio:"landscape",isBordered:!0}),a(e,{imageAspectRatio:"landscape",isBordered:!0}),a(e,{imageAspectRatio:"landscape",isBordered:!0}),a(e,{imageAspectRatio:"landscape",isBordered:!0})]})},s={render:()=>w(y,{columns:1,children:[a(e,{layout:"row",showImage:!1}),a(e,{layout:"row",showImage:!1}),a(e,{layout:"row",showImage:!1}),a(e,{layout:"row",showImage:!1}),a(e,{layout:"row",showImage:!1})]})};var r,n,l,d,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    className: undefined,
    contentSize: 3,
    headingSize: 1,
    imageAspectRatio: "square",
    isBordered: false,
    layout: "column",
    showButton: false,
    showContent: true,
    showHeading: true,
    showImage: true,
    width: "300px"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?type=design&node-id=36817-23677&t=G4pu0KkGDGyMdjnR-4"
    },
    jest: ["SkeletonLoader.test.tsx"]
  }
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"Main Story for the SkeletonLoader component. This must contains the `args`\nand `parameters` properties in this object.",...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.description}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
      <SkeletonLoader imageAspectRatio="landscape" isBordered />
    </SimpleGrid>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,g,f;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
      <SkeletonLoader layout="row" showImage={false} />
    </SimpleGrid>
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const A=["WithControls","GridExample","ListExample"],x=Object.freeze(Object.defineProperty({__proto__:null,GridExample:t,ListExample:s,WithControls:o,__namedExportsOrder:A,default:L},Symbol.toStringTag,{value:"Module"}));export{t as G,s as L,x as S,o as W};
//# sourceMappingURL=SkeletonLoader.stories-959a9c01.js.map
