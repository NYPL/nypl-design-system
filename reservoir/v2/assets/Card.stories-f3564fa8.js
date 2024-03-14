import{a,j as e,F as me}from"./emotion-react-jsx-runtime.browser.esm-49aea89b.js";import{a as P}from"./chunk-AY7I2SME-5eb1ab46.js";import{w as ge}from"./index-6148c31a.js";import{B as x}from"./Button-948e9be8.js";import{C as i,a as t,b as n,c as o}from"./Card-4cbdbbf1.js";import{H as u}from"./HorizontalRule-3ade1aff.js";import{I as pe}from"./Image-ed70f474.js";import{L as l}from"./Link-24c1437a.js";import{S as s}from"./SimpleGrid-bd04b221.js";import{l as he}from"./types-ee6958f5.js";const Ce={title:"Components/Basic Elements/Card",component:i,decorators:[ge],argTypes:{backgroundColor:{control:{type:"color"}},className:{control:!1},foregroundColor:{control:{type:"color"}},id:{control:!1},imageProps:{disable:!0},"imageProps.alt":{control:{type:"text"},table:{defaultValue:{summary:""}}},"imageProps.aspectRatio":{table:{defaultValue:{summary:"square"}}},"imageProps.caption":{control:!1},"imageProps.component":{control:!1},"imageProps.credit":{control:!1},"imageProps.isAtEnd":{table:{defaultValue:{summary:!1}}},"imageProps.isLazy":{table:{defaultValue:{summary:!1}}},"imageProps.size":{table:{defaultValue:{summary:"default"}}},"imageProps.src":{table:{defaultValue:{summary:""}}},isAlignedRightActions:{table:{defaultValue:{summary:!1}}},isBordered:{table:{defaultValue:{summary:!1}}},isCentered:{table:{defaultValue:{summary:!1}}},layout:{control:{type:"select"},options:he,table:{defaultValue:{summary:"column"}}}}},d={args:{backgroundColor:void 0,className:void 0,foregroundColor:void 0,id:"card-id","imageProps.alt":"Alt text","imageProps.aspectRatio":"square","imageProps.component":void 0,"imageProps.isAtEnd":!1,"imageProps.isLazy":!0,"imageProps.size":"default","imageProps.src":"//placekitten.com/400/300",isAlignedRightActions:!1,isBordered:!1,isCentered:!1,layout:"row",mainActionLink:void 0},render:r=>a(i,{backgroundColor:r.backgroundColor,className:r.className,foregroundColor:r.foregroundColor,id:r.id,imageProps:{alt:r["imageProps.alt"],aspectRatio:r["imageProps.aspectRatio"],component:r["imageProps.component"],isAtEnd:r["imageProps.isAtEnd"],isLazy:r["imageProps.isLazy"],size:r["imageProps.size"],src:r["imageProps.src"]},isAlignedRightActions:r.isAlignedRightActions,isBordered:r.isBordered,isCentered:r.isCentered,layout:r.layout,mainActionLink:r.mainActionLink,children:[e(t,{level:"h3",id:"main-heading1",subtitle:"Sollicitudin Lorem Tortor Purus Ornare",children:"Optional Header"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue."}),a(o,{topBorder:!0,bottomBorder:!0,children:[e(x,{id:"main-button1",onClick:P("clicked"),type:"submit",children:"Primary"}),e(x,{buttonType:"secondary",id:"main-button2",onClick:P("clicked"),type:"submit",children:"Secondary"})]}),a(o,{children:[e(l,{href:"#",children:"#hash1"}),",",e(l,{href:"#",children:"#hash2"}),",",e(l,{href:"#",children:"#hash3"})]})]}),parameters:{design:{type:"figma",url:"https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25747"},jest:["Card.test.tsx"]}},c={render:()=>a(s,{columns:2,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/400/200"},children:[e(t,{level:"h3",id:"props-heading1",size:"heading4",children:"Image on Top (default)"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,isLazy:!0,src:"//placekitten.com/400/200"},children:[e(t,{level:"h3",id:"props-heading2",size:"heading4",children:"Image on Bottom"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]})},m={render:()=>a(s,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"//placekitten.com/400/200",isLazy:!0},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row-heading1",size:"heading6",children:"Image on Left (default)"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,isLazy:!0,src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row-heading2",size:"heading6",children:"Image on Right"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]})]})},g={render:()=>a(s,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",isLazy:!0,size:"xxsmall",src:"//placekitten.com/400/200"},isCentered:!0,children:[e(t,{level:"h3",id:"column1-heading",size:"heading6",subtitle:"Max-Width: 64px",children:"Extra Extra Small Image"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",isLazy:!0,size:"xsmall",src:"//placekitten.com/400/200"},isCentered:!0,children:[e(t,{level:"h3",id:"column2-heading",size:"heading6",subtitle:"Max-Width: 96px",children:"Extra Small Image"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",isLazy:!0,size:"small",src:"//placekitten.com/400/200"},isCentered:!0,children:[e(t,{level:"h3",id:"column3-heading",size:"heading6",subtitle:"Max-Width: 165px",children:"Small Image"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",isLazy:!0,size:"medium",src:"//placekitten.com/400/200"},isCentered:!0,children:[e(t,{level:"h3",id:"column4-heading",size:"heading6",subtitle:"Max-Width: 225px",children:"Medium Image"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",isLazy:!0,size:"large",src:"//placekitten.com/400/200"},isCentered:!0,children:[e(t,{level:"h3",id:"column5-heading",size:"heading6",subtitle:"Max-Width: 360px",children:"Large Image"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),e(u,{}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",isLazy:!0,src:"//placekitten.com/400/200"},isCentered:!0,children:[e(t,{level:"h3",id:"column6-heading",size:"heading6",subtitle:"Width: 100%",children:"Default Image"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]})},p={render:()=>a(s,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,size:"xxsmall",src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row1-heading",size:"heading6",subtitle:"Max-Width: 64px",children:"Extra Extra Small Image"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,size:"xsmall",src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row2-heading",size:"heading6",subtitle:"Max-Width: 96px",children:"Extra Small Image"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,size:"small",src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row3-heading",size:"heading6",subtitle:"Max-Width: 165px",children:"Small Image"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,size:"medium",src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row4-heading",size:"heading6",subtitle:"Max-Width: 225px",children:"Medium Image"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,size:"large",src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row5-heading",size:"heading6",subtitle:"Max-Width: 360px",children:"Large Image"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"row6-heading",size:"heading6",subtitle:"Max-Width: 225px",children:"Default Image"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]})]})},h={render:()=>a(i,{imageProps:{alt:"Alt text",component:e(pe,{src:"//placekitten.com/400/400",alt:"Alt text"})},children:[e(t,{level:"h3",id:"img1-heading1",size:"heading5",subtitle:"Subtitle on the card",children:"Card Component with Custom Image Component"}),e(n,{children:"Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis."}),a(o,{children:[e(l,{type:"button",href:"#",children:"Reserve"}),e(l,{href:"#url",type:"forwards",children:"View Book Details"})]})]})},C={render:()=>a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"//placekitten.com/400/200"},children:[e(t,{level:"h3",id:"link-heading1",size:"heading5",subtitle:a(me,{children:["Go to NYPL ",e(l,{href:"http://nypl.org",children:"home page"}),"."]}),url:"http://nypl.org",children:"Go to NYPL home page."}),e(n,{children:"This entire `Card` component is clickable, but the links below are still accessible by tabbing through the `Card` and pressing `enter` or clicking with a mouse."}),a(o,{children:[e(l,{href:"#",type:"button",children:"Button"}),e(l,{href:"#",type:"forwards",children:"Other link"})]})]})},b={render:()=>a(s,{columns:2,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",src:"//placekitten.com/400/200"},mainActionLink:"http://nypl.org",children:[e(t,{level:"h3",id:"fullclick1-heading1",size:"heading5",subtitle:"Some other subtitle.",children:"Go to NYPL home page."}),e(n,{children:"This entire `Card` component is clickable, but the links below are still accessible by tabbing through the `Card` and pressing `enter` or clicking with a mouse."}),a(o,{children:[e(l,{href:"#",type:"buttonPrimary",children:"Link Button"}),e(l,{href:"#",type:"buttonSecondary",children:"Other Link"})]})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isAtEnd:!0,src:"//placekitten.com/410/210"},mainActionLink:"http://nypl.org",children:[e(t,{level:"h3",id:"fullclick2-heading1",size:"heading5",children:"Go to NYPL home page."}),e(n,{children:"This `Card` component does not have any extra links."})]})]}),name:"Full-Click Functionality"},v={render:()=>a(s,{columns:3,children:[a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/blog/lunar-new-year#above-header-notification",children:[e(t,{level:"h3",overline:"Example",size:"heading6",children:"Lunar New Year Blog"}),e(n,{children:"A basic blog post, including text chracters outside a standard Western font-set."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/blog/doc-chat-forty-two#above-header-notification",children:[e(t,{level:"h3",overline:"Example",size:"heading6",children:"Doc Chat Forty-Two Blog"}),e(n,{children:"A blog post with an array of components."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/homepage#above-header-notification",children:[e(t,{level:"h3",overline:"Example",size:"heading6",children:"Homepage"}),e(n,{children:"A layout to mimic a basic homepage structure."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/library-registry#above-header-notification",children:[e(t,{level:"h3",overline:"Example",size:"heading6",children:"Library Registry Interface"}),e(n,{children:"A POC for the Library Registry admin tools."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification",children:[e(t,{level:"h3",overline:"Example",size:"heading6",children:"Search and Filter"}),e(n,{children:"A functional form to showcase search filtering and content cards."})]}),a(i,{isBordered:!0,mainActionLink:"https://nypl-ds-test-app.vercel.app/fullPages/sign-up#above-header-notification",children:[e(t,{level:"h3",overline:"Example",size:"heading6",children:"Sign-Up"}),e(n,{children:"A functional form to utilize multiple form input components."})]})]}),name:"Full-Click Turbine Example"},y={render:()=>a(i,{imageProps:{alt:"Alt text",aspectRatio:"square",size:"medium",src:"//placekitten.com/400/200"},isAlignedRightActions:!0,isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"main-heading1",size:"heading4",subtitle:"Sollicitudin Lorem Tortor Purus Ornare",children:"Optional Header"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue."}),a(o,{topBorder:!0,bottomBorder:!0,children:[e(x,{onClick:P("clicked"),id:"main-button1",type:"submit",children:"Primary"}),e(x,{onClick:P("clicked"),id:"main-button2",buttonType:"secondary",type:"submit",children:"Secondary"})]}),a(o,{children:[e(l,{href:"#",children:"#hash1"}),",",e(l,{href:"#",children:"#hash2"}),",",e(l,{href:"#",children:"#hash3"})]})]}),name:"Right Side CardActions"},f={render:()=>a(s,{columns:3,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/400/200"},children:[e(t,{level:"h3",id:"grid1-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/410/210"},children:[e(t,{level:"h3",id:"grid2-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/420/220"},children:[e(t,{level:"h3",id:"grid3-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/430/230"},children:[e(t,{level:"h3",id:"grid4-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/440/200"},children:[e(t,{level:"h3",id:"grid5-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/450/200"},children:[e(t,{level:"h3",id:"grid6-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."})]})]})},z={render:()=>a(s,{columns:1,children:[a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/400/200"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"stack1-heading1",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/410/210"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"stack2-heading2",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]}),a(i,{imageProps:{alt:"Alt text",aspectRatio:"twoByOne",isLazy:!0,src:"//placekitten.com/420/220"},isCentered:!0,layout:"row",children:[e(t,{level:"h3",id:"stack3-heading3",noSpace:!0,overline:"Cats",size:"heading5",children:"Card Heading"}),e(n,{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam."})]})]})},k={render:()=>a(me,{children:[a(s,{columns:3,children:[a(i,{isBordered:!0,children:[e(t,{level:"h3",id:"no-img1-heading1",overline:"Cards",size:"heading4",subtitle:"Donec id elit non mi porta gravida at eget metus.",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."})]}),a(i,{isBordered:!0,children:[e(t,{level:"h3",id:"no-img2-heading1",overline:"Cards",size:"heading4",subtitle:"Donec id elit non mi porta gravida at eget metus.",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."})]}),a(i,{isBordered:!0,children:[e(t,{level:"h3",id:"no-img3-heading1",overline:"Cards",size:"heading4",subtitle:"Donec id elit non mi porta gravida at eget metus.",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl."})]})]}),e("br",{}),a(s,{columns:1,children:[a(i,{layout:"row",isBordered:!0,children:[e(t,{level:"h3",id:"no-img4-heading1",overline:"Cards",size:"heading4",subtitle:"Donec id elit non mi porta gravida at eget metus.",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus."})]}),a(i,{layout:"row",isBordered:!0,children:[e(t,{level:"h3",id:"no-img5-heading1",overline:"Cards",size:"heading4",subtitle:"Donec id elit non mi porta gravida at eget metus.",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus."})]}),a(i,{layout:"row",isBordered:!0,children:[e(t,{level:"h3",id:"no-img6-heading1",overline:"Cards",size:"heading4",subtitle:"Donec id elit non mi porta gravida at eget metus.",children:"Card Heading"}),e(n,{children:"Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus."})]})]})]})};var A,L,H,w,S;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    backgroundColor: undefined,
    className: undefined,
    foregroundColor: undefined,
    id: "card-id",
    "imageProps.alt": "Alt text",
    "imageProps.aspectRatio": "square",
    "imageProps.component": undefined,
    "imageProps.isAtEnd": false,
    "imageProps.isLazy": true,
    "imageProps.size": "default",
    "imageProps.src": "//placekitten.com/400/300",
    isAlignedRightActions: false,
    isBordered: false,
    isCentered: false,
    layout: "row",
    mainActionLink: undefined
  },
  render: args => <Card backgroundColor={args.backgroundColor} className={args.className} foregroundColor={args.foregroundColor} id={args.id} imageProps={{
    alt: args["imageProps.alt"],
    aspectRatio: args["imageProps.aspectRatio"],
    component: args["imageProps.component"],
    isAtEnd: args["imageProps.isAtEnd"],
    isLazy: args["imageProps.isLazy"],
    size: args["imageProps.size"],
    src: args["imageProps.src"]
  }} isAlignedRightActions={args.isAlignedRightActions} isBordered={args.isBordered} isCentered={args.isCentered} layout={args.layout} mainActionLink={args.mainActionLink}>
      <CardHeading level="h3" id="main-heading1" subtitle="Sollicitudin Lorem Tortor Purus Ornare">
        Optional Header
      </CardHeading>
      <CardContent>
        Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
        libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel
        eu leo. Nulla vitae elit libero, a pharetra augue.
      </CardContent>
      <CardActions topBorder bottomBorder>
        <Button id="main-button1" onClick={action("clicked")} type="submit">
          Primary
        </Button>
        <Button buttonType="secondary" id="main-button2" onClick={action("clicked")} type="submit">
          Secondary
        </Button>
      </CardActions>
      <CardActions>
        <Link href="#">#hash1</Link>,<Link href="#">#hash2</Link>,
        <Link href="#">#hash3</Link>
      </CardActions>
    </Card>,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qShodlfNCJHb8n03IFyApM/Main?node-id=36835%3A25747"
    },
    jest: ["Card.test.tsx"]
  }
}`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:"Main Story for the Card component. This must contains the `args`\nand `parameters` properties in this object.",...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};var B,R,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/400/200"
    }}>
        <CardHeading level="h3" id="props-heading1" size="heading4">
          Image on Top (default)
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isAtEnd: true,
      isLazy: true,
      src: "//placekitten.com/400/200"
    }}>
        <CardHeading level="h3" id="props-heading2" size="heading4">
          Image on Bottom
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var q,V,O;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "//placekitten.com/400/200",
      isLazy: true
    }} isCentered layout="row">
        <CardHeading level="h3" id="row-heading1" size="heading6">
          Image on Left (default)
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isAtEnd: true,
      isLazy: true,
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row-heading2" size="heading6">
          Image on Right
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(O=(V=m.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var I,E,W;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      size: "xxsmall",
      src: "//placekitten.com/400/200"
    }} isCentered>
        <CardHeading level="h3" id="column1-heading" size="heading6" subtitle="Max-Width: 64px">
          Extra Extra Small Image
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      size: "xsmall",
      src: "//placekitten.com/400/200"
    }} isCentered>
        <CardHeading level="h3" id="column2-heading" size="heading6" subtitle="Max-Width: 96px">
          Extra Small Image
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      size: "small",
      src: "//placekitten.com/400/200"
    }} isCentered>
        <CardHeading level="h3" id="column3-heading" size="heading6" subtitle="Max-Width: 165px">
          Small Image
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      size: "medium",
      src: "//placekitten.com/400/200"
    }} isCentered>
        <CardHeading level="h3" id="column4-heading" size="heading6" subtitle="Max-Width: 225px">
          Medium Image
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      size: "large",
      src: "//placekitten.com/400/200"
    }} isCentered>
        <CardHeading level="h3" id="column5-heading" size="heading6" subtitle="Max-Width: 360px">
          Large Image
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <HorizontalRule />
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "square",
      isLazy: true,
      src: "//placekitten.com/400/200"
    }} isCentered>
        <CardHeading level="h3" id="column6-heading" size="heading6" subtitle="Width: 100%">
          Default Image
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var G,M,D;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      size: "xxsmall",
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row1-heading" size="heading6" subtitle="Max-Width: 64px">
          Extra Extra Small Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      size: "xsmall",
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row2-heading" size="heading6" subtitle="Max-Width: 96px">
          Extra Small Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      size: "small",
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row3-heading" size="heading6" subtitle="Max-Width: 165px">
          Small Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      size: "medium",
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row4-heading" size="heading6" subtitle="Max-Width: 225px">
          Medium Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      size: "large",
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row5-heading" size="heading6" subtitle="Max-Width: 360px">
          Large Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="row6-heading" size="heading6" subtitle="Max-Width: 225px">
          Default Image
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(D=(M=p.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var T,j,F;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Card imageProps={{
    alt: "Alt text",
    component: <Image src="//placekitten.com/400/400" alt="Alt text" />
  }}>
      <CardHeading level="h3" id="img1-heading1" size="heading5" subtitle="Subtitle on the card">
        Card Component with Custom Image Component
      </CardHeading>
      <CardContent>
        Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean lacinia bibendum nulla sed
        consectetur. Vestibulum id ligula porta felis euismod semper. Cras justo
        odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
        consectetur est at lobortis.
      </CardContent>
      <CardActions>
        <Link type="button" href="#">
          Reserve
        </Link>
        <Link href="#url" type="forwards">
          View Book Details
        </Link>
      </CardActions>
    </Card>
}`,...(F=(j=h.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var Y,_,J;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Card imageProps={{
    alt: "Alt text",
    aspectRatio: "twoByOne",
    src: "//placekitten.com/400/200"
  }}>
      <CardHeading level="h3" id="link-heading1" size="heading5" subtitle={<>
            Go to NYPL <Link href="http://nypl.org">home page</Link>.
          </>} url="http://nypl.org">
        Go to NYPL home page.
      </CardHeading>
      <CardContent>
        This entire \`Card\` component is clickable, but the links below are still
        accessible by tabbing through the \`Card\` and pressing \`enter\` or
        clicking with a mouse.
      </CardContent>
      <CardActions>
        <Link href="#" type="button">
          Button
        </Link>
        <Link href="#" type="forwards">
          Other link
        </Link>
      </CardActions>
    </Card>
}`,...(J=(_=C.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var U,K,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={2}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      src: "//placekitten.com/400/200"
    }} mainActionLink="http://nypl.org">
        <CardHeading level="h3" id="fullclick1-heading1" size="heading5" subtitle="Some other subtitle.">
          Go to NYPL home page.
        </CardHeading>
        <CardContent>
          This entire \`Card\` component is clickable, but the links below are
          still accessible by tabbing through the \`Card\` and pressing \`enter\` or
          clicking with a mouse.
        </CardContent>
        <CardActions>
          <Link href="#" type="buttonPrimary">
            Link Button
          </Link>
          <Link href="#" type="buttonSecondary">
            Other Link
          </Link>
        </CardActions>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isAtEnd: true,
      src: "//placekitten.com/410/210"
    }} mainActionLink="http://nypl.org">
        <CardHeading level="h3" id="fullclick2-heading1" size="heading5">
          Go to NYPL home page.
        </CardHeading>
        <CardContent>
          This \`Card\` component does not have any extra links.
        </CardContent>
      </Card>
    </SimpleGrid>,
  name: "Full-Click Functionality"
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/lunar-new-year#above-header-notification">
        <CardHeading level="h3" overline="Example" size="heading6">
          Lunar New Year Blog
        </CardHeading>
        <CardContent>
          A basic blog post, including text chracters outside a standard Western
          font-set.
        </CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/blog/doc-chat-forty-two#above-header-notification">
        <CardHeading level="h3" overline="Example" size="heading6">
          Doc Chat Forty-Two Blog
        </CardHeading>
        <CardContent>A blog post with an array of components.</CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/homepage#above-header-notification">
        <CardHeading level="h3" overline="Example" size="heading6">
          Homepage
        </CardHeading>
        <CardContent>A layout to mimic a basic homepage structure.</CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/library-registry#above-header-notification">
        <CardHeading level="h3" overline="Example" size="heading6">
          Library Registry Interface
        </CardHeading>
        <CardContent>A POC for the Library Registry admin tools.</CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/search-and-filter#above-header-notification">
        <CardHeading level="h3" overline="Example" size="heading6">
          Search and Filter
        </CardHeading>
        <CardContent>
          A functional form to showcase search filtering and content cards.
        </CardContent>
      </Card>
      <Card isBordered mainActionLink="https://nypl-ds-test-app.vercel.app/fullPages/sign-up#above-header-notification">
        <CardHeading level="h3" overline="Example" size="heading6">
          Sign-Up
        </CardHeading>
        <CardContent>
          A functional form to utilize multiple form input components.
        </CardContent>
      </Card>
    </SimpleGrid>,
  name: "Full-Click Turbine Example"
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ie;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Card imageProps={{
    alt: "Alt text",
    aspectRatio: "square",
    size: "medium",
    src: "//placekitten.com/400/200"
  }} isAlignedRightActions isCentered layout="row">
      <CardHeading level="h3" id="main-heading1" size="heading4" subtitle="Sollicitudin Lorem Tortor Purus Ornare">
        Optional Header
      </CardHeading>
      <CardContent>
        Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
        libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel
        eu leo. Nulla vitae elit libero, a pharetra augue.
      </CardContent>
      <CardActions topBorder bottomBorder>
        <Button onClick={action("clicked")} id="main-button1" type="submit">
          Primary
        </Button>
        <Button onClick={action("clicked")} id="main-button2" buttonType="secondary" type="submit">
          Secondary
        </Button>
      </CardActions>
      <CardActions>
        <Link href="#">#hash1</Link>,<Link href="#">#hash2</Link>,
        <Link href="#">#hash3</Link>
      </CardActions>
    </Card>,
  name: "Right Side CardActions"
}`,...(ie=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var te,ne,re;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={3}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/400/200"
    }}>
        <CardHeading level="h3" id="grid1-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/410/210"
    }}>
        <CardHeading level="h3" id="grid2-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/420/220"
    }}>
        <CardHeading level="h3" id="grid3-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/430/230"
    }}>
        <CardHeading level="h3" id="grid4-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/440/200"
    }}>
        <CardHeading level="h3" id="grid5-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/450/200"
    }}>
        <CardHeading level="h3" id="grid6-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
          libero, a pharetra augue.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(re=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,se,oe;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SimpleGrid columns={1}>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/400/200"
    }} isCentered layout="row">
        <CardHeading level="h3" id="stack1-heading1" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/410/210"
    }} isCentered layout="row">
        <CardHeading level="h3" id="stack2-heading2" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
      <Card imageProps={{
      alt: "Alt text",
      aspectRatio: "twoByOne",
      isLazy: true,
      src: "//placekitten.com/420/220"
    }} isCentered layout="row">
        <CardHeading level="h3" id="stack3-heading3" noSpace overline="Cats" size="heading5">
          Card Heading
        </CardHeading>
        <CardContent>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac
          facilisis in, egestas eget quam.
        </CardContent>
      </Card>
    </SimpleGrid>
}`,...(oe=(se=z.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var de,ue,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <>
      <SimpleGrid columns={3}>
        <Card isBordered>
          <CardHeading level="h3" id="no-img1-heading1" overline="Cards" size="heading4" subtitle="Donec id elit non mi porta gravida at eget metus.">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading level="h3" id="no-img2-heading1" overline="Cards" size="heading4" subtitle="Donec id elit non mi porta gravida at eget metus.">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
        <Card isBordered>
          <CardHeading level="h3" id="no-img3-heading1" overline="Cards" size="heading4" subtitle="Donec id elit non mi porta gravida at eget metus.">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue.
            Praesent commodo cursus magna, vel scelerisque nisl.
          </CardContent>
        </Card>
      </SimpleGrid>
      <br />
      <SimpleGrid columns={1}>
        <Card layout="row" isBordered>
          <CardHeading level="h3" id="no-img4-heading1" overline="Cards" size="heading4" subtitle="Donec id elit non mi porta gravida at eget metus.">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
        <Card layout="row" isBordered>
          <CardHeading level="h3" id="no-img5-heading1" overline="Cards" size="heading4" subtitle="Donec id elit non mi porta gravida at eget metus.">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
        <Card layout="row" isBordered>
          <CardHeading level="h3" id="no-img6-heading1" overline="Cards" size="heading4" subtitle="Donec id elit non mi porta gravida at eget metus.">
            Card Heading
          </CardHeading>
          <CardContent>
            Vestibulum id ligula porta felis euismod semper. Nulla vitae elit
            libero, a pharetra augue. Vestibulum id ligula porta felis euismod
            semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
            libero, a pharetra augue. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec id elit non mi porta gravida
            at eget metus.
          </CardContent>
        </Card>
      </SimpleGrid>
    </>
}`,...(ce=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const be=["WithControls","ImagePositionColumnCards","ImagePositionRowCards","ImageSizeColumnCards","ImageSizeRowCards","CustomImageComponent","HeadingAsLink","FullClick","CardFullClickTurbineExample","CardWithRightSideCardActions","GridExample","StackExample","WithoutImages"],we=Object.freeze(Object.defineProperty({__proto__:null,CardFullClickTurbineExample:v,CardWithRightSideCardActions:y,CustomImageComponent:h,FullClick:b,GridExample:f,HeadingAsLink:C,ImagePositionColumnCards:c,ImagePositionRowCards:m,ImageSizeColumnCards:g,ImageSizeRowCards:p,StackExample:z,WithControls:d,WithoutImages:k,__namedExportsOrder:be,default:Ce},Symbol.toStringTag,{value:"Module"}));export{we as C,b as F,f as G,C as H,c as I,z as S,d as W,m as a,g as b,p as c,h as d,v as e,y as f,k as g};
//# sourceMappingURL=Card.stories-f3564fa8.js.map
